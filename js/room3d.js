/* The interactive hub uses one locally bundled Three.js renderer. Content
   screens use transparent empty scene states and the existing DOM transitions. */
let THREE;
let renderer, scene, camera, viewport, hotspots, roomUI, hub, viewportHome;
let frame = 0, active = false, disposed = false, failed = false, lastTime = 0;
let transition = null, hovered = null, pointerDown = null, resizeObserver;
let contextLost = false, sceneInitialized = false, navBound = false;
let width = 1, height = 1, elapsed = 0;
const objects = new Map(), resources = new Set(), listeners = [], hotspotListeners = [];
const look = { x: 0, y: 0 }, lookSmooth = { x: 0, y: 0 };
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
let homePosition, homeTarget, cameraTarget, raycaster, rayPointer, tempVector;
let dust, lampLight, moonLight, roomLight;
let currentWorld = 'hub';
const worlds = new Map();
const worldPages = ['intro', 'hub', 'letter', 'women', 'facts', 'thanks', 'surprise', 'connect', 'final', 'bonus'];
const corePages = ['letter', 'women', 'facts', 'surprise'];
const descriptions = {
  letter: { number: '01', title: 'Một lời muốn nói', subtitle: 'Mở bức thư', label: 'Khám phá · Một lời muốn nói' },
  women: { number: '02', title: 'Kho ký ức', subtitle: 'Lật trang kỷ niệm', label: 'Kỷ niệm · Những người phụ nữ' },
  facts: { number: '03', title: 'Một lời nhắc', subtitle: 'Dịu dàng với mình', label: 'Nhắc nhở · Bạn có biết?' },
  surprise: { number: '04', title: 'Một món quà', subtitle: 'Dành riêng cho bạn', label: 'Dành tặng · Một điều cho bạn' }
};
const reduced = () => motionQuery.matches;
const canInteract = () => currentWorld === 'hub' && active && !transition && !window.App?.busy && !window.Dialogs?.active && !document.hidden;
const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const listen = (target, type, callback, options, bucket = listeners) => {
  target.addEventListener(type, callback, options);
  bucket.push(() => target.removeEventListener(type, callback, options));
};
const own = value => { resources.add(value); return value; };

const api = {
  ready: false,
  enter({ from } = {}) {
    if (!api.ready || failed || disposed) return Promise.resolve(false);
    switchWorld('hub');
    active = true;
    resize();
    look.x = look.y = lookSmooth.x = lookSmooth.y = 0;
    setHover(null);
    const previous = objects.get(from);
    if (reduced() || document.hidden) {
      settleTransition(false);
      camera.position.copy(homePosition); cameraTarget.copy(homeTarget);
      drawOnce();
      return Promise.resolve(false);
    }
    if (previous) {
      const anchor = worldAnchor(previous, false);
      const offset = homePosition.clone().sub(homeTarget).normalize().multiplyScalar(6.2);
      camera.position.copy(anchor).add(offset);
      cameraTarget.copy(anchor);
    } else {
      camera.position.copy(homePosition).multiplyScalar(1.16);
      camera.position.y += .5;
      cameraTarget.copy(homeTarget).add(new THREE.Vector3(0, .15, 0));
    }
    return animateCamera(homePosition, homeTarget, previous ? 920 : 1150);
  },
  leave(page) {
    if (!api.ready || failed || disposed || !active || reduced() || document.hidden) {
      settleTransition(false);
      return Promise.resolve(false);
    }
    if (currentWorld !== 'hub') {
      settleTransition(false);
      return Promise.resolve(false);
    }
    const object = objects.get(page);
    if (!object) return Promise.resolve(false);
    look.x = look.y = lookSmooth.x = lookSmooth.y = 0;
    setHover(page);
    const target = worldAnchor(object, false);
    const direction = homePosition.clone().sub(homeTarget).normalize();
    const position = target.clone().addScaledVector(direction, 5.1);
    position.y = Math.max(target.y + 1.1, position.y);
    return animateCamera(position, target, 650);
  },
  showPage(page, options = {}) {
    if (!api.ready || failed || disposed || !worldPages.includes(page)) return Promise.resolve(false);
    if (page === 'hub') return api.enter(options);
    switchWorld(page);
    active = true;
    resize();
    look.x = look.y = lookSmooth.x = lookSmooth.y = 0;
    settleTransition(false);
    camera.position.copy(homePosition); cameraTarget.copy(homeTarget);
    drawOnce();
    return Promise.resolve(false);
  },
  syncProgress(visited = []) {
    const pages = new Set(visited);
    objects.forEach((object, page) => {
      object.visited = pages.has(page);
      object.button?.classList.toggle('visited', object.visited);
      object.button?.setAttribute('aria-label', `${descriptions[page].label}${object.visited ? ' · đã khám phá' : ''}`);
      object.light.color.set(object.visited ? '#ffe2a3' : '#f39bc3');
      object.halo.material.color.set(object.visited ? '#e7c383' : '#f39bc3');
      object.halo.material.opacity = object.visited ? .55 : .25;
    });
    const hubLight = worlds.get('hub')?.roomLight;
    if (hubLight) hubLight.intensity = pages.size === 4 ? 1.8 : 1.5;
    drawOnce();
  },
  focus(page) {
    if (!api.ready || !canInteract()) return;
    setHover(objects.has(page) ? page : null);
    drawOnce();
  },
  resize,
  dispose() {
    if (disposed) return;
    disposed = true; api.ready = false; active = false;
    stop(); settleTransition(false); resizeObserver?.disconnect();
    listeners.splice(0).forEach(remove => remove());
    resources.forEach(resource => resource.dispose?.()); resources.clear();
    renderer?.dispose(); renderer?.domElement.remove();
    clearHotspots();
    roomUI?.classList.remove('has-room3d');
    hub?.classList.remove('room3d-ready');
    document.body.classList.remove('has-world3d'); delete document.body.dataset.worldPage;
    if (viewport && viewportHome) {
      viewportHome.prepend(viewport); delete viewport.dataset.worldPage;
      delete viewport.dataset.roomModels;
      viewport.dataset.roomReady = 'false'; viewport.dataset.roomRenderer = 'disposed'; viewport.setAttribute('aria-hidden', 'true');
    }
    if (hotspots) { hotspots.hidden = true; hotspots.inert = true; }
    worlds.clear();
  },
  debugSnapshot() {
    return {
      ready: api.ready, active, paused: !frame, reducedMotion: reduced(),
      transition: !!transition, width, height, objectCount: objects.size,
      page: currentWorld, worldCount: worlds.size,
      modelCount: scene?.children.filter(child => !child.isLight).length || 0,
      renderArea: renderArea(),
      camera: camera?.position.toArray(), target: cameraTarget?.toArray(),
      render: renderer ? { calls: renderer.info.render.calls, triangles: renderer.info.render.triangles } : null
    };
  }
};
window.Room3D = api;

function material(color, options = {}) {
  return own(new THREE.MeshStandardMaterial({ color, roughness: .7, metalness: 0, ...options }));
}
function mesh(geometry, mat, position = [0, 0, 0], parent = scene, shadow = true) {
  const item = new THREE.Mesh(own(geometry), mat);
  item.position.set(...position); item.castShadow = shadow; item.receiveShadow = true;
  parent.add(item); return item;
}
function box(size, mat, position, parent = scene, shadow = true) {
  return mesh(new THREE.BoxGeometry(...size), mat, position, parent, shadow);
}
function cylinder(top, bottom, height, mat, position, parent = scene, segments = 32) {
  return mesh(new THREE.CylinderGeometry(top, bottom, height, segments), mat, position, parent);
}
function sphere(radius, mat, position, parent = scene, segments = 20) {
  return mesh(new THREE.SphereGeometry(radius, segments, 12), mat, position, parent);
}
function canvasTexture(width, height, paint) {
  const canvas = document.createElement('canvas'); canvas.width = width; canvas.height = height;
  paint(canvas.getContext('2d'), width, height);
  const texture = own(new THREE.CanvasTexture(canvas)); texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
  return texture;
}
function textTexture(lines, { color = '#f1eee5', background = '#61716c', width = 512, height = 512, serif = false } = {}) {
  return canvasTexture(width, height, (context, w, h) => {
    context.fillStyle = background; context.fillRect(0, 0, w, h);
    context.textAlign = 'center'; context.textBaseline = 'middle'; context.fillStyle = color;
    lines.forEach(line => {
      context.font = `${line.weight || 400} ${line.size || 52}px ${serif ? 'Georgia, serif' : 'Arial, sans-serif'}`;
      context.fillText(line.text, w / 2, h * line.y);
    });
  });
}
function ellipse(width, height, mat, position, parent = scene) {
  const shape = new THREE.Shape(); shape.absellipse(0, 0, width / 2, height / 2, 0, Math.PI * 2, false, 0);
  return mesh(new THREE.ShapeGeometry(shape, 48), mat, position, parent);
}
function shapeMesh(points, mat, position, parent = scene) {
  const shape = new THREE.Shape();
  points.forEach(([x, y], i) => i ? shape.lineTo(x, y) : shape.moveTo(x, y)); shape.closePath();
  return mesh(new THREE.ShapeGeometry(shape), mat, position, parent, false);
}
function glowTexture() {
  return canvasTexture(128, 128, (context, w, h) => {
    const gradient = context.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    gradient.addColorStop(0, 'rgba(247,240,218,0.48)');
    gradient.addColorStop(.28, 'rgba(236,237,228,0.10)'); gradient.addColorStop(1, 'rgba(236,237,228,0)');
    context.fillStyle = gradient; context.fillRect(0, 0, w, h);
  });
}
function curveTube(points, radius, mat, parent = scene) {
  const path = new THREE.CatmullRomCurve3(points.map(point => new THREE.Vector3(...point)));
  return mesh(new THREE.TubeGeometry(path, 24, radius, 6, false), mat, [0, 0, 0], parent);
}

function makeRoom() {
  const timber = material('#a16c4a', { roughness: .86 });
  const darkTimber = material('#321b29');
  const gold = material('#c49a57', { roughness: .58, metalness: .14 });
  const wall = material('#5b354f', { roughness: .98 });
  const trim = material('#ba7d96', { roughness: .82 });
  const plum = material('#4c2750');
  const rose = material('#cc779d', { roughness: .85 });
  const cream = material('#fff8f0', { roughness: .82 });
  const glow = own(new THREE.MeshBasicMaterial({ color: '#ffe4b1' }));

  // A thin architectural base and matte plaster walls keep the cutaway clean.
  box([11.6, .16, 8.4], darkTimber, [0, -.13, .85]);
  box([11.4, .06, 8.25], timber, [0, -.035, .85]);
  for (let row = 0; row < 13; row++) {
    const z = -3.15 + row * .625;
    for (let column = 0; column < 3; column++) {
      const offset = row % 2 ? .55 : 0;
      const x = -3.85 + column * 3.85 + offset;
      const plank = material(['#a97855', '#996747', '#b5845e', '#a16c4a'][(row + column) % 4], { roughness: .93 });
      const length = column === 2 && offset ? 3.24 : 3.79;
      box([length, .025, .604], plank, [Math.min(x, 3.99), .008, z], scene, false);
    }
  }
  box([11.5, 5, .18], wall, [0, 2.5, -3.32]);
  box([.18, 5, 5.4], wall, [-5.65, 2.5, -.72]);
  box([11.5, .065, .07], trim, [0, .065, -3.18], scene, false);
  box([.07, .065, 5.5], trim, [-5.51, .065, -.67], scene, false);

  makeWindow(gold, trim);
  makeWallArt(gold, plum);

  const rugTexture = canvasTexture(512, 512, (context, w, h) => {
    context.fillStyle = '#70405b'; context.fillRect(0, 0, w, h);
    context.strokeStyle = '#c58da8'; context.lineWidth = 3;
    context.strokeRect(24, 24, w - 48, h - 48);
    context.strokeStyle = '#966580'; context.lineWidth = 1;
    for (let y = 5; y < h; y += 9) { context.beginPath(); context.moveTo(0, y); context.lineTo(w, y); context.stroke(); }
  });
  const rug = cylinder(2.4, 2.4, .035, material('#ffffff', { map: rugTexture }), [-.1, .053, 1.4], scene, 64);
  rug.scale.set(1.5, 1, 1);
  // A low sculpted desk, warm underneath the four objects.
  const desk = new THREE.Group(); desk.position.set(-.55, 0, .4); scene.add(desk);
  const tableTop = cylinder(1, 1, .17, timber, [0, 1.68, 0], desk, 64); tableTop.scale.set(2.42, 1, 1.25);
  const tableEdge = cylinder(1, 1, .035, gold, [0, 1.775, 0], desk, 64); tableEdge.scale.set(2.43, 1, 1.26);
  for (const [x, z] of [[-1.8, -.72], [1.8, -.72], [-1.8, .72], [1.8, .72]]) {
    const leg = cylinder(.065, .11, 1.58, darkTimber, [x, .81, z], desk, 12);
    leg.rotation.z = x > 0 ? -.055 : .055;
    cylinder(.073, .1, .19, gold, [x, .12, z], desk, 12);
  }
  box([3.4, .11, .1], darkTimber, [0, .58, 0], desk);

  makeEnvelope(cream, gold);
  makeAlbum(plum, gold, cream);
  makeMirror(gold, darkTimber);
  makeGift(rose, gold, timber, cream);
  makeLamp(gold, cream, glow);
  makePlant(darkTimber, gold);
  makeShelf(plum, gold, cream, rose);

  // A fabric stool and folded throw add scale around the desk.
  const stool = new THREE.Group(); stool.position.set(-2.55, 0, 2.85); scene.add(stool);
  cylinder(.64, .6, .3, rose, [0, .68, 0], stool);
  for (const [x, z] of [[-.36, -.36], [.36, -.36], [-.36, .36], [.36, .36]]) cylinder(.04, .07, .55, gold, [x, .28, z], stool, 12);
  box([.65, .035, 1.1], cream, [.05, .86, .05], stool).rotation.y = -.3;
  for (let i = 0; i < 8; i++) box([.015, .045, 1.1], trim, [-.2 + i * .075, .89, .05], stool, false).rotation.y = -.3;

  // A teacup and a candle sit on the desk away from the interactive books.
  const candle = new THREE.Group(); candle.position.set(-2.08, 1.82, -.02); scene.add(candle);
  cylinder(.17, .17, .38, cream, [0, .19, 0], candle);
  const flame = sphere(.065, glow, [0, .43, 0], candle, 12); flame.scale.y = 1.7;
  const candleLight = new THREE.PointLight('#ffd3a2', .65, 2.7, 2); candleLight.position.set(0, .5, 0); candle.add(candleLight);
  cylinder(.23, .23, .035, cream, [1.46, 1.82, 1.1]);
  cylinder(.13, .1, .2, cream, [1.46, 1.95, 1.1]);
  const handle = mesh(new THREE.TorusGeometry(.095, .025, 8, 16), gold, [1.62, 1.97, 1.1]); handle.rotation.y = Math.PI / 2;

  makeDust();
}

function makeWindow(gold, trim) {
  const group = new THREE.Group(); group.position.set(-2.8, 3.16, -3.15); scene.add(group);
  const skyTexture = canvasTexture(512, 512, (context, w, h) => {
    const gradient = context.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, '#20132d'); gradient.addColorStop(.7, '#493d65'); gradient.addColorStop(1, '#8b728b');
    context.fillStyle = gradient; context.fillRect(0, 0, w, h);
    let seed = 311;
    const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
    for (let i = 0; i < 75; i++) {
      const x = random() * w, y = random() * h * .9, radius = random() * 1.5 + .5;
      context.fillStyle = `rgba(236,232,255,${.3 + random() * .6})`;
      context.beginPath(); context.arc(x, y, radius, 0, Math.PI * 2); context.fill();
    }
    context.fillStyle = '#514063';
    context.beginPath(); context.moveTo(0, h); context.lineTo(0, h * .8);
    for (let x = 0; x <= w; x += 22) context.lineTo(x, h * (.8 + Math.sin(x * .018) * .045));
    context.lineTo(w, h); context.fill();
  });
  const sky = own(new THREE.MeshBasicMaterial({ map: skyTexture }));
  box([3.2, 2.62, .16], gold, [0, 0, 0], group);
  box([2.97, 2.38, .06], sky, [0, 0, .095], group, false);
  const moonTexture = canvasTexture(256, 256, (context, w, h) => {
    const gradient = context.createRadialGradient(w * .46, h * .5, 2, w * .46, h * .5, w * .44);
    gradient.addColorStop(0, 'rgba(245,232,198,.35)'); gradient.addColorStop(1, 'rgba(245,232,198,0)');
    context.fillStyle = gradient; context.fillRect(0, 0, w, h);
    context.fillStyle = '#f3e0b7'; context.beginPath(); context.arc(w * .48, h * .49, w * .28, 0, Math.PI * 2); context.fill();
    context.globalCompositeOperation = 'destination-out';
    context.beginPath(); context.arc(w * .61, h * .41, w * .27, 0, Math.PI * 2); context.fill();
  });
  const moonMaterial = own(new THREE.MeshBasicMaterial({ map: moonTexture, transparent: true, depthWrite: false }));
  mesh(new THREE.PlaneGeometry(1.15, 1.15), moonMaterial, [.52, .43, .14], group, false);
  box([.085, 2.47, .085], trim, [0, 0, .18], group);
  box([3.08, .085, .085], trim, [0, 0, .18], group);
  box([3.42, .14, .45], trim, [0, -1.34, .06], group);
  // Curtain folds are geometry, so moonlight catches each one.
  const curtain = material('#a56b91', { roughness: .98 });
  for (const side of [-1, 1]) {
    for (let i = 0; i < 5; i++) {
      const fold = cylinder(.075, .11, 2.85, curtain, [side * (1.57 + i * .105), -.1, .23 + Math.sin(i) * .045], group, 12);
      fold.scale.z = .58;
    }
    const tie = mesh(new THREE.TorusGeometry(.20, .024, 8, 20), gold, [side * 1.78, -.35, .23], group); tie.rotation.y = Math.PI / 2;
  }
  cylinder(.028, .028, 4.3, gold, [0, 1.53, .23], group, 12).rotation.z = Math.PI / 2;
}

function makeWallArt(gold, plum) {
  const texture = textTexture([
    { text: '20 / 10', size: 112, y: .37 },
    { text: 'a room for her', size: 42, y: .64 },
    { text: '♡', size: 50, y: .83 }
  ], { background: '#4c2750' });
  box([2.14, 2.2, .12], gold, [2.75, 3.48, -3.16]);
  box([1.98, 2.03, .025], plum, [2.75, 3.48, -3.08]);
  mesh(new THREE.PlaneGeometry(1.9, 1.94), own(new THREE.MeshBasicMaterial({ map: texture })), [2.75, 3.48, -3.05], scene, false);
}

function interactive(page, position, anchor, surfaceY) {
  const group = new THREE.Group(); group.position.set(...position); group.userData.page = page; scene.add(group);
  const haloMaterial = own(new THREE.MeshBasicMaterial({ color: '#f39bc3', transparent: true, opacity: .25, depthWrite: false, side: THREE.DoubleSide }));
  const halo = mesh(new THREE.RingGeometry(.53, .555, 48), haloMaterial, [position[0], surfaceY, position[2]], scene, false);
  halo.rotation.x = -Math.PI / 2;
  const light = new THREE.PointLight('#f39bc3', .3, 2.2, 2); light.position.set(position[0], position[1] + .7, position[2] + .5); scene.add(light);
  const object = { page, group, anchor: new THREE.Vector3(...anchor), baseY: position[1], light, halo, highlight: 0, visited: false, accents: [] };
  objects.set(page, object); return object;
}
function hitBox(group, size, position = [0, 0, 0]) {
  const mat = own(new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, colorWrite: false }));
  box(size, mat, position, group, false);
}
function accent(object, color, options = {}) {
  const mat = material(color, { emissive: color, emissiveIntensity: 0, ...options }); object.accents.push(mat); return mat;
}
function makeEnvelope(cream, gold) {
  const object = interactive('letter', [-1.72, 2.14, 1.23], [0, .9, .12], 1.82);
  const group = object.group; group.rotation.set(-.16, -.20, -.10);
  const paper = accent(object, '#eacfb6', { roughness: .91 });
  box([1.28, .79, .07], paper, [0, 0, 0], group);
  const edges = material('#c39286', { roughness: .9 });
  shapeMesh([[-.64, .38], [.64, .38], [0, -.10]], cream, [0, 0, .042], group);
  shapeMesh([[-.64, -.38], [-.64, .36], [0, -.04]], edges, [0, 0, .045], group);
  shapeMesh([[.64, -.38], [.64, .36], [0, -.04]], edges, [0, 0, .045], group);
  shapeMesh([[-.64, -.38], [0, .04], [.64, -.38]], cream, [0, 0, .048], group);
  const seal = cylinder(.12, .12, .035, accent(object, '#a14c68'), [0, -.045, .075], group, 24); seal.rotation.x = Math.PI / 2;
  mesh(new THREE.TorusGeometry(.073, .008, 8, 24), gold, [0, -.045, .098], group);
  hitBox(group, [1.5, 1.05, .23]);
}
function makeAlbum(plum, gold, cream) {
  const object = interactive('women', [.2, 2.52, .32], [0, 1.05, .12], 1.82);
  const group = object.group; group.rotation.set(-.10, .14, .05);
  const leather = accent(object, '#673853', { roughness: .83 });
  box([1.22, 1.48, .20], leather, [0, 0, 0], group);
  box([1.08, 1.36, .12], cream, [.05, 0, 0], group);
  box([1.22, 1.48, .035], leather, [0, 0, .12], group);
  box([.085, 1.48, .23], plum, [-.57, 0, .01], group);
  const cover = textTexture([
    { text: 'MEMORIES', size: 43, y: .32, weight: 600 },
    { text: '20 / 10', size: 78, y: .53 },
    { text: '✦', size: 43, y: .72 }
  ], { background: '#673853', width: 512, height: 640 });
  mesh(new THREE.PlaneGeometry(1.04, 1.29), own(new THREE.MeshStandardMaterial({ map: cover, roughness: .83 })), [.04, 0, .145], group, false);
  for (const y of [-.64, .64]) box([1.0, .012, .01], gold, [.04, y, .16], group, false);
  for (const x of [-.47, .55]) box([.012, 1.28, .01], gold, [x, 0, .16], group, false);
  hitBox(group, [1.45, 1.7, .34]);
}
function makeMirror(gold, timber) {
  const object = interactive('facts', [3.84, 2.58, -1.21], [0, 1.6, .1], .04);
  const group = object.group; group.rotation.y = -.24;
  const frameMaterial = accent(object, '#d3ae68', { metalness: .22, roughness: .42 });
  const rim = mesh(new THREE.TorusGeometry(.73, .055, 12, 56), frameMaterial, [0, 0, 0], group); rim.scale.y = 1.42;
  const inner = mesh(new THREE.TorusGeometry(.66, .018, 8, 56), gold, [0, 0, .055], group); inner.scale.y = 1.42;
  const mirrorTexture = canvasTexture(256, 384, (context, w, h) => {
    const gradient = context.createLinearGradient(0, h, w, 0);
    gradient.addColorStop(0, '#876e9b'); gradient.addColorStop(.43, '#b49dc4'); gradient.addColorStop(.52, '#fff0e1'); gradient.addColorStop(.68, '#b899b7'); gradient.addColorStop(1, '#937fa8');
    context.fillStyle = gradient; context.fillRect(0, 0, w, h);
    context.fillStyle = 'rgba(255,242,216,.2)'; context.beginPath(); context.moveTo(0, h * .22); context.lineTo(w, h * .02); context.lineTo(w, h * .09); context.lineTo(0, h * .36); context.fill();
    context.textAlign = 'center'; context.font = '72px Georgia'; context.fillStyle = 'rgba(255,235,228,.75)'; context.fillText('♡', w / 2, h * .61);
  });
  ellipse(1.35, 1.92, own(new THREE.MeshStandardMaterial({ color: '#f7dce7', map: mirrorTexture, metalness: .30, roughness: .30, emissive: '#bd90b2', emissiveIntensity: .08 })), [0, 0, .025], group);
  box([.09, 1.65, .1], frameMaterial, [0, -1.72, -.02], group);
  const base = cylinder(.54, .58, .09, timber, [0, -2.5, -.02], group); base.scale.z = .7;
  cylinder(.45, .48, .025, gold, [0, -2.44, -.02], group).scale.z = .7;
  sphere(.10, gold, [0, 1.11, 0], group);
  hitBox(group, [1.7, 2.3, .25]);
}
function makeGift(rose, gold, timber, cream) {
  cylinder(.91, .83, .63, timber, [3.14, .34, 2.72]);
  cylinder(.95, .95, .085, cream, [3.14, .70, 2.72]);
  const object = interactive('surprise', [3.14, 1.16, 2.72], [0, 1.05, .1], .79);
  const group = object.group; group.rotation.y = -.16;
  const wrapping = accent(object, '#e07da7', { roughness: .66 });
  box([1.07, .73, .97], wrapping, [0, 0, 0], group);
  box([1.16, .14, 1.06], wrapping, [0, .43, 0], group);
  const ribbon = accent(object, '#ffe2a3', { roughness: .60, metalness: .10 });
  box([.16, .87, 1.072], ribbon, [0, .065, 0], group);
  box([1.172, .87, .16], ribbon, [0, .065, 0], group);
  for (const side of [-1, 1]) {
    const bow = mesh(new THREE.TorusGeometry(.205, .044, 8, 24), ribbon, [side * .18, .60, 0], group);
    bow.rotation.set(Math.PI / 2, side * .35, side * .27); bow.scale.set(1.1, .62, 1);
  }
  sphere(.085, gold, [0, .58, 0], group, 12);
  const tag = box([.25, .34, .012], cream, [.35, .08, .50], group); tag.rotation.z = -.23;
  hitBox(group, [1.35, 1.18, 1.25], [0, .16, 0]);
}
function makeLamp(gold, cream, glow) {
  const group = new THREE.Group(); group.position.set(-3.93, 0, -.27); scene.add(group);
  cylinder(.50, .57, .10, gold, [0, .07, 0], group);
  cylinder(.04, .05, 3.45, gold, [0, 1.76, 0], group, 12);
  sphere(.13, gold, [0, 3.50, 0], group);
  const shade = cylinder(.51, .82, .82, material('#ead0ac', { side: THREE.DoubleSide, emissive: '#eabd82', emissiveIntensity: .27 }), [0, 3.62, 0], group, 48);
  shade.castShadow = false;
  cylinder(.825, .825, .025, gold, [0, 3.20, 0], group, 48);
  sphere(.17, glow, [0, 3.30, 0], group);
  lampLight = new THREE.PointLight('#ffc997', 12, 8.0, 2); lampLight.position.set(0, 3.17, 0); group.add(lampLight);
  const glowMaterial = own(new THREE.SpriteMaterial({ map: glowTexture(), color: '#ffd1a8', transparent: true, opacity: .52, depthWrite: false, blending: THREE.AdditiveBlending }));
  const halo = new THREE.Sprite(glowMaterial); halo.position.set(0, 3.26, 0); halo.scale.set(2.15, 2.15, 1); group.add(halo);
}
function makePlant(timber, gold) {
  const group = new THREE.Group(); group.position.set(-4.4, 0, 2.50); scene.add(group);
  const pot = material('#aa7390');
  cylinder(.43, .31, .74, pot, [0, .4, 0], group, 24);
  cylinder(.46, .45, .09, gold, [0, .81, 0], group, 24);
  cylinder(.42, .42, .025, timber, [0, .83, 0], group, 24);
  const stem = material('#53654c');
  const leafMaterials = [material('#829477', { side: THREE.DoubleSide }), material('#647c62', { side: THREE.DoubleSide }), material('#a0a68a', { side: THREE.DoubleSide })];
  for (let i = 0; i < 9; i++) {
    const angle = i * 2.399, length = 1.2 + (i % 3) * .34;
    const end = [Math.cos(angle) * .56, .85 + length, Math.sin(angle) * .52];
    curveTube([[0, .8, 0], [end[0] * .30, 1.30, end[2] * .3], end], .018, stem, group);
    const leaf = sphere(.32, leafMaterials[i % 3], end, group, 12);
    leaf.scale.set(.65, 1.75, .13); leaf.rotation.set(.35 + Math.cos(angle) * .5, angle, .55 * Math.sin(angle));
  }
}
function makeShelf(plum, gold, cream, rose) {
  const timber = material('#9b694e');
  box([3.30, .12, .63], timber, [2.95, 1.35, -2.76]);
  for (const x of [1.53, 4.37]) box([.08, 1.27, .48], gold, [x, .65, -2.76]);
  box([3.04, .08, .47], plum, [2.95, .32, -2.75]);
  for (let i = 0; i < 5; i++) {
    const book = box([.18 + (i % 2) * .05, .58 + (i % 3) * .10, .38], [plum, cream, rose][i % 3], [1.75 + i * .22, 1.66, -2.75]);
    book.rotation.z = i === 0 ? .16 : 0;
  }
  const vase = cylinder(.11, .22, .46, cream, [3.38, 1.65, -2.76]);
  cylinder(.20, .25, .20, cream, [3.38, 1.44, -2.76]);
  const flowerStem = material('#76896d');
  const petals = material('#f39bc3');
  for (let i = 0; i < 4; i++) {
    const x = 3.38 + Math.sin(i * 2) * .18, y = 2.23 + Math.cos(i) * .16, z = -2.75 + Math.cos(i * 2) * .12;
    curveTube([[3.38, 1.86, -2.76], [3.38, 2.05, -2.76], [x, y, z]], .012, flowerStem);
    for (let p = 0; p < 5; p++) sphere(.068, petals, [x + Math.cos(p * 1.257) * .065, y + Math.sin(p * 1.257) * .065, z], scene, 10);
    sphere(.039, gold, [x, y, z + .04], scene, 10);
  }
  cylinder(.2, .2, .2, rose, [4.16, 1.51, -2.73]);
  sphere(.11, gold, [4.16, 1.66, -2.73]);
}
function makeDust() {
  const count = finePointer.matches ? 110 : 65;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - .5) * 10;
    positions[i * 3 + 1] = .3 + Math.random() * 4.7;
    positions[i * 3 + 2] = -2.6 + Math.random() * 6.3;
  }
  const geometry = own(new THREE.BufferGeometry()); geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  dust = new THREE.Points(geometry, own(new THREE.PointsMaterial({ color: '#f9d7bc', size: .036, transparent: true, opacity: .42, depthWrite: false, blending: THREE.AdditiveBlending })));
  scene.add(dust);
}

function activePage() {
  const page = window.App?.current || document.querySelector('.screen.active[data-page]')?.dataset.page;
  return worldPages.includes(page) ? page : hub ? 'hub' : 'bonus';
}
function retainWorld(page, extras = {}) {
  const entry = { scene, dust, lampLight, moonLight, roomLight, animations: [], ...extras };
  worlds.set(page, entry); return entry;
}
function ensureWorld(page) {
  if (worlds.has(page)) return worlds.get(page);
  // Content screens deliberately contain no architecture, furniture or lights.
  // Keeping an empty scene lets navigation and context restoration share the
  // same lifecycle while the warm page background remains fully visible.
  const entry = {
    scene: new THREE.Scene(), dust: null, lampLight: null, moonLight: null,
    roomLight: null, animations: []
  };
  worlds.set(page, entry);
  return entry;
}
function switchWorld(page) {
  const changed = currentWorld !== page || viewport?.dataset.worldPage !== page;
  if (changed) { settleTransition(false); setHover(null); stop(); }
  const entry = ensureWorld(page);
  currentWorld = page; scene = entry.scene; dust = entry.dust; lampLight = entry.lampLight;
  moonLight = entry.moonLight; roomLight = entry.roomLight;
  renderer.toneMappingExposure = 1.34;
  const screen = document.querySelector(`.screen[data-page="${page}"]`);
  const parent = page === 'hub' ? roomUI : screen;
  if (parent && viewport.parentElement !== parent) parent.prepend(viewport);
  document.body.classList.add('has-world3d'); document.body.dataset.worldPage = page;
  viewport.dataset.worldPage = page; viewport.setAttribute('aria-hidden', String(page !== 'hub'));
  viewport.dataset.roomModels = page === 'hub' ? 'hub' : 'none';
  renderer.domElement.style.visibility = page === 'hub' ? 'visible' : 'hidden';
  if (hotspots) { hotspots.hidden = page !== 'hub'; hotspots.inert = page !== 'hub'; }
  if (changed) width = height = 0;
  resize();
  return changed;
}
function clearHotspots() {
  hotspotListeners.splice(0).forEach(remove => remove());
  hotspots?.replaceChildren();
  objects.forEach(object => { object.button = null; });
}
function buildHotspots() {
  if (!hotspots) return;
  clearHotspots(); hotspots.setAttribute('aria-label', 'Khám phá bốn vật thể trong căn phòng');
  objects.forEach((object, page) => {
    const info = descriptions[page];
    const button = document.createElement('button'); button.type = 'button';
    button.className = 'room3d-hotspot'; button.dataset.go = page; button.dataset.roomFocus = page;
    button.setAttribute('aria-label', info.label);
    const number = document.createElement('span'); number.className = 'hotspot-number'; number.textContent = info.number;
    const copy = document.createElement('span'); copy.className = 'hotspot-copy';
    const title = document.createElement('strong'); title.textContent = info.title;
    const subtitle = document.createElement('small'); subtitle.textContent = info.subtitle;
    copy.append(title, subtitle); button.append(number, copy); hotspots.append(button); object.button = button;
    listen(button, 'pointerenter', () => { if (canInteract()) setHover(page); }, undefined, hotspotListeners);
    listen(button, 'pointerleave', () => { if (document.activeElement !== button && !transition) setHover(null); }, undefined, hotspotListeners);
    listen(button, 'focus', () => setHover(page), undefined, hotspotListeners);
    listen(button, 'blur', () => { if (!transition) setHover(null); }, undefined, hotspotListeners);
  });
  if (!navBound) {
    document.querySelectorAll('#room3dNav [data-room-focus]').forEach(button => {
      listen(button, 'pointerenter', () => { if (canInteract()) setHover(button.dataset.roomFocus); });
      listen(button, 'pointerleave', () => { if (!transition) setHover(null); });
      listen(button, 'focus', () => setHover(button.dataset.roomFocus));
      listen(button, 'blur', () => { if (!transition) setHover(null); });
    });
    navBound = true;
  }
}
function setHover(page) {
  if (hovered === page) return;
  hovered = page;
  objects.forEach((object, key) => {
    object.button?.classList.toggle('is-hovered', key === page);
    document.querySelector(`#room3dNav [data-room-focus="${key}"]`)?.classList.toggle('is-active', key === page);
  });
  if (renderer) renderer.domElement.style.cursor = page ? 'pointer' : 'default';
  const label = document.getElementById('objectLabel');
  if (label) {
    label.textContent = page ? descriptions[page].label : 'Chạm một vật thể để mở câu chuyện';
    label.classList.toggle('is-highlighted', !!page);
  }
  viewport?.setAttribute('data-room-focus', page || '');
  if (reduced()) {
    updateObjects(0); drawOnce();
  } else start();
}
function worldAnchor(object, label = true) {
  const vector = label ? object.anchor.clone() : new THREE.Vector3(0, 0, 0);
  object.group.updateWorldMatrix(true, false); return object.group.localToWorld(vector);
}
function updateHotspots() {
  if (!hotspots || !camera || currentWorld !== 'hub') return;
  const canvasRect = renderer.domElement.getBoundingClientRect();
  const holderRect = hotspots.getBoundingClientRect();
  const visible = [];
  objects.forEach(object => {
    if (!object.button) return;
    const point = worldAnchor(object).project(camera);
    const x = (point.x * .5 + .5) * canvasRect.width + canvasRect.left - holderRect.left;
    const y = (-point.y * .5 + .5) * canvasRect.height + canvasRect.top - holderRect.top;
    const inView = point.z > -1 && point.z < 1 && x > 18 && x < holderRect.width - 18 && y > 18 && y < holderRect.height - 18;
    object.button.hidden = !inView;
    if (inView) visible.push({ object, x, y });
  });
  // Keep the 44px button rectangles separate on narrow screens. The small,
  // symmetric offsets preserve the visual connection to each physical object.
  if (canvasRect.width < 600) {
    const gap = 48, edge = 24;
    for (let pass = 0; pass < 8; pass++) {
      for (let i = 0; i < visible.length; i++) for (let j = i + 1; j < visible.length; j++) {
        const a = visible[i], b = visible[j], dx = b.x - a.x, dy = b.y - a.y;
        if (Math.abs(dx) >= gap || Math.abs(dy) >= gap) continue;
        if (Math.abs(dx) >= Math.abs(dy)) {
          const offset = (gap - Math.abs(dx)) / 2, direction = Math.sign(dx) || 1;
          a.x = Math.max(edge, Math.min(holderRect.width - edge, a.x - offset * direction));
          b.x = Math.max(edge, Math.min(holderRect.width - edge, b.x + offset * direction));
        } else {
          const offset = (gap - Math.abs(dy)) / 2, direction = Math.sign(dy) || 1;
          a.y = Math.max(edge, Math.min(holderRect.height - edge, a.y - offset * direction));
          b.y = Math.max(edge, Math.min(holderRect.height - edge, b.y + offset * direction));
        }
      }
    }
  }
  visible.forEach(({ object, x, y }) => {
    object.button.style.left = `${x.toFixed(1)}px`; object.button.style.top = `${y.toFixed(1)}px`;
    object.button.style.setProperty('--hotspot-x', `${x.toFixed(1)}px`); object.button.style.setProperty('--hotspot-y', `${y.toFixed(1)}px`);
  });
}
function pick(event) {
  if (!api.ready || currentWorld !== 'hub') return null;
  const rect = renderer.domElement.getBoundingClientRect();
  if (!rect.width || !rect.height) return null;
  rayPointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
  camera.updateMatrixWorld(); scene.updateMatrixWorld(); raycaster.setFromCamera(rayPointer, camera);
  const hits = raycaster.intersectObjects([...objects.values()].map(object => object.group), true);
  for (const hit of hits) {
    let current = hit.object;
    while (current && !current.userData.page) current = current.parent;
    if (current?.userData.page) return current.userData.page;
  }
  return null;
}
function bindInput() {
  const canvas = renderer.domElement;
  listen(canvas, 'pointermove', event => {
    if (!canInteract() || event.pointerType === 'touch') return;
    const rect = canvas.getBoundingClientRect();
    if (finePointer.matches && !reduced()) {
      look.x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
      look.y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
    }
    setHover(pick(event));
  }, { passive: true });
  listen(canvas, 'pointerleave', () => { look.x = look.y = 0; pointerDown = null; if (!transition) setHover(null); });
  listen(canvas, 'pointerdown', event => {
    if (!canInteract() || event.button !== 0) return;
    pointerDown = { id: event.pointerId, x: event.clientX, y: event.clientY, page: pick(event) };
  }, { passive: true });
  listen(canvas, 'pointercancel', () => { pointerDown = null; });
  listen(canvas, 'pointerup', event => {
    const down = pointerDown; pointerDown = null;
    if (!down || !canInteract() || down.id !== event.pointerId) return;
    if (Math.hypot(event.clientX - down.x, event.clientY - down.y) > 10) return;
    const page = pick(event);
    if (page && page === down.page) window.App?.go(page, { x: event.clientX, y: event.clientY });
  }, { passive: true });
  listen(canvas, 'webglcontextlost', event => {
    if (disposed) return;
    event.preventDefault(); contextLost = true;
    fallback('Trình duyệt đang tạm dừng 3D. Bạn vẫn có thể khám phá bằng các vật thể bên dưới.');
  });
  // Three registered its own restore listener in the constructor, before ours.
  // It rebuilds GPU resources first; the existing scene can then render again.
  listen(canvas, 'webglcontextrestored', restoreContext);
}
function restoreContext() {
  if (!contextLost || !sceneInitialized || disposed || !renderer) return;
  contextLost = false;
  try {
    failed = false; api.ready = true; active = true;
    hovered = null; pointerDown = null; look.x = look.y = lookSmooth.x = lookSmooth.y = 0;
    roomUI?.classList.add('has-room3d'); hub?.classList.add('room3d-ready'); hub?.classList.remove('room3d-fallback');
    viewport.dataset.roomReady = 'true';
    const status = document.getElementById('room3dStatus');
    if (status) { status.textContent = 'Căn phòng đã mở · chọn một vật thể để khám phá'; status.classList.remove('is-fallback'); status.hidden = true; }
    buildHotspots(); switchWorld(activePage()); width = height = 0; resize();
    api.syncProgress(window.App?.visited || []);
    if (api.ready && !failed) {
      window.dispatchEvent(new CustomEvent('room3dready', { detail: { revision: THREE.REVISION, restored: true } }));
      if (active) start();
    }
  } catch (error) {
    console.warn('The 3D room could not resume; the room controls remain active.', error);
    fallback();
  }
}
function fitCamera() {
  if (!camera) return;
  const area = renderArea();
  camera.aspect = area.width / area.height;
  camera.fov = width < 600 ? 46 : 40; camera.updateProjectionMatrix();
  const world = worlds.get(currentWorld);
  homeTarget.copy(world?.target || new THREE.Vector3(0, 1.85, .65));
  const direction = world?.direction || new THREE.Vector3(10.2, 8.1, 12.6).normalize();
  if (currentWorld !== 'hub') {
    homePosition.copy(homeTarget).addScaledVector(direction, 12);
    return;
  }
  const right = new THREE.Vector3().crossVectors(camera.up, direction).normalize();
  const up = new THREE.Vector3().crossVectors(direction, right).normalize();
  const tanY = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)), tanX = tanY * camera.aspect;
  let distance = 12;
  const bounds = world?.bounds || { x: [-5.8, 5.8], y: [-.3, 5.1], z: [-3.45, 5.05] };
  for (const x of bounds.x) for (const y of bounds.y) for (const z of bounds.z) {
    tempVector.set(x, y, z).sub(homeTarget);
    const depth = tempVector.dot(direction);
    distance = Math.max(distance, depth + Math.abs(tempVector.dot(right)) / tanX, depth + Math.abs(tempVector.dot(up)) / tanY);
  }
  homePosition.copy(homeTarget).addScaledVector(direction, distance * 1.08);
}
function renderArea() {
  return { x: 0, y: 0, width, height };
}
function resize() {
  if (!viewport || !renderer || failed || disposed) return;
  const rect = viewport.getBoundingClientRect();
  if (rect.width < 2 || rect.height < 2) return;
  const nextWidth = Math.max(1, Math.round(rect.width)), nextHeight = Math.max(1, Math.round(rect.height));
  if (width === nextWidth && height === nextHeight) { if (active) drawOnce(); return; }
  width = nextWidth; height = nextHeight;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, width < 650 ? 1.6 : 1.8));
  renderer.setSize(width, height, false); fitCamera();
  if (transition) settleTransition(false);
  camera.position.copy(homePosition); cameraTarget.copy(homeTarget);
  viewport.dataset.roomSize = `${width}x${height}`;
  drawOnce();
}
function animateCamera(position, target, duration) {
  settleTransition(false);
  return new Promise(resolve => {
    transition = { fromPosition: camera.position.clone(), toPosition: position.clone(), fromTarget: cameraTarget.clone(), toTarget: target.clone(), started: performance.now(), duration, resolve };
    viewport.classList.add('is-travelling'); start();
  });
}
function settleTransition(completed = true) {
  if (!transition) return;
  const current = transition; transition = null;
  if (completed) { camera.position.copy(current.toPosition); cameraTarget.copy(current.toTarget); }
  viewport?.classList.remove('is-travelling'); current.resolve(completed);
}
function updateObjects(delta) {
  if (currentWorld !== 'hub') return;
  objects.forEach((object, page) => {
    const wanted = hovered === page ? 1 : 0;
    object.highlight = reduced() ? wanted : THREE.MathUtils.damp(object.highlight, wanted, 7, delta || 1 / 60);
    // Only the little gift and the envelope lift; large mirror/books remain grounded.
    const lift = page === 'surprise' ? .10 : page === 'letter' ? .035 : 0;
    object.group.position.y = object.baseY + lift * object.highlight;
    object.accents.forEach(mat => { mat.emissiveIntensity = .025 + object.highlight * .15; });
    object.light.intensity = (object.visited ? .38 : .25) + object.highlight * .7;
    const pulse = reduced() ? 0 : (Math.sin(elapsed * 1.25 + Number(descriptions[page].number)) + 1) * .045;
    object.halo.material.opacity = (object.visited ? .4 : .20) + object.highlight * .45 + pulse;
    object.halo.scale.setScalar(1 + object.highlight * .15);
  });
}
function updateWorld(delta) {
  const entry = worlds.get(currentWorld);
  entry?.animations.forEach(item => {
    const wave = reduced() ? 0 : Math.sin(elapsed * .65 + item.phase);
    if (item.kind === 'sway') item.group.rotation.z = wave * .035;
    else if (item.kind === 'spin') { item.group.rotation.y += reduced() ? 0 : delta * .20; item.group.position.y = item.y + wave * item.amount; }
    else if (item.kind !== 'glow') item.group.position.y = item.y + wave * item.amount;
  });
}
function drawOnce() {
  if (!renderer || failed || disposed || document.hidden) return;
  camera.lookAt(cameraTarget); camera.updateMatrixWorld(); scene.updateMatrixWorld();
  // Clear on every page change so the previous hub never remains behind text.
  // Empty content scenes do not issue render calls or schedule animation frames.
  renderer.setScissorTest(false); renderer.setViewport(0, 0, width, height);
  renderer.clear(true, true, true);
  if (currentWorld === 'hub') renderer.render(scene, camera);
  else renderer.info?.reset?.();
  updateHotspots();
  if (failed || disposed) return;
  viewport.dataset.roomRenderer = 'webgl2'; viewport.dataset.roomFrames = String((Number(viewport.dataset.roomFrames) || 0) + 1);
}
function tick(now) {
  frame = 0;
  if (!active || document.hidden || failed || disposed) return;
  const delta = Math.min(.05, lastTime ? (now - lastTime) / 1000 : 1 / 60); lastTime = now; elapsed += delta;
  if (transition) {
    const t = Math.min(1, (now - transition.started) / transition.duration), amount = ease(t);
    camera.position.lerpVectors(transition.fromPosition, transition.toPosition, amount);
    cameraTarget.lerpVectors(transition.fromTarget, transition.toTarget, amount);
    if (t === 1) settleTransition(true);
  } else {
    lookSmooth.x = THREE.MathUtils.damp(lookSmooth.x, look.x, 2.8, delta);
    lookSmooth.y = THREE.MathUtils.damp(lookSmooth.y, look.y, 2.8, delta);
    camera.position.copy(homePosition);
    camera.position.x += lookSmooth.x * .62; camera.position.z -= lookSmooth.x * .32; camera.position.y -= lookSmooth.y * .38;
    cameraTarget.copy(homeTarget); cameraTarget.x += lookSmooth.x * .08;
  }
  if (dust && !reduced()) { dust.rotation.y = Math.sin(elapsed * .04) * .07; dust.position.y = Math.sin(elapsed * .15) * .10; }
  if (lampLight) {
    const base = currentWorld === 'hub' ? 12 : currentWorld === 'connect' ? 6 : 4;
    lampLight.intensity = base + (reduced() ? 0 : Math.sin(elapsed * .66) * .18);
  }
  updateObjects(delta); updateWorld(delta); drawOnce();
  if (!reduced() || transition) start();
}
function start() {
  if (currentWorld === 'hub' && !frame && active && api.ready && !document.hidden && !failed && !disposed) frame = requestAnimationFrame(tick);
}
function stop() { cancelAnimationFrame(frame); frame = 0; lastTime = 0; }
function fallback(message = 'Không gian 3D chưa khả dụng trên trình duyệt này. Chạm các vật thể bên dưới để tiếp tục khám phá.') {
  failed = true; active = false; api.ready = false; stop(); settleTransition(false);
  roomUI?.classList.remove('has-room3d'); hub?.classList.remove('room3d-ready');
  hub?.classList.add('room3d-fallback');
  document.body.classList.remove('has-world3d'); delete document.body.dataset.worldPage;
  if (viewport && viewportHome) { viewportHome.prepend(viewport); delete viewport.dataset.worldPage; delete viewport.dataset.roomModels; }
  if (viewport) { viewport.dataset.roomRenderer = 'fallback'; viewport.dataset.roomReady = 'false'; viewport.setAttribute('aria-hidden', 'true'); }
  const status = document.getElementById('room3dStatus');
  if (status) { status.textContent = message; status.classList.add('is-fallback'); status.hidden = false; }
  clearHotspots();
  window.dispatchEvent(new CustomEvent('room3dfallback'));
}

async function init() {
  viewport = document.getElementById('room3dViewport');
  hotspots = document.getElementById('room3dHotspots');
  hub = document.querySelector('[data-page="hub"]'); roomUI = hub?.querySelector('.room-ui');
  viewportHome = roomUI || viewport?.parentElement;
  if (!viewport || !document.querySelector('.screen[data-page]')) return;
  try {
    THREE = await import('./vendor/three/three.module.js');
    if (disposed) return;
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setClearColor('#190f20', 0); renderer.autoClear = false; renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.34;
    renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.domElement.setAttribute('aria-hidden', 'true'); renderer.domElement.className = 'room3d-canvas';
    renderer.domElement.style.touchAction = 'pan-y'; viewport.prepend(renderer.domElement);
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, 1, .1, 100);
    homePosition = new THREE.Vector3(11, 8, 13); homeTarget = new THREE.Vector3(0, 1.85, .65);
    cameraTarget = homeTarget.clone(); raycaster = new THREE.Raycaster(); rayPointer = new THREE.Vector2(); tempVector = new THREE.Vector3();
    if (hub) {
      scene.add(new THREE.HemisphereLight('#ffebda', '#312039', 1.4));
      roomLight = new THREE.DirectionalLight('#ffd8c0', 1.5); roomLight.position.set(2, 7, 6); roomLight.castShadow = true;
      roomLight.shadow.mapSize.set(1024, 1024); roomLight.shadow.camera.left = -8; roomLight.shadow.camera.right = 8;
      roomLight.shadow.camera.top = 8; roomLight.shadow.camera.bottom = -8; roomLight.shadow.camera.near = .1; roomLight.shadow.camera.far = 22;
      roomLight.shadow.bias = -.0003; roomLight.shadow.normalBias = .035; roomLight.shadow.radius = 3; scene.add(roomLight); own(roomLight.shadow);
      moonLight = new THREE.DirectionalLight('#c8bcff', .95); moonLight.position.set(-4, 6, -1); scene.add(moonLight);
      const fill = new THREE.PointLight('#f4b0cd', 2.5, 12, 2); fill.position.set(4.5, 4.2, 3.5); scene.add(fill);
      makeRoom(); retainWorld('hub');
    }
    buildHotspots(); bindInput(); sceneInitialized = true;
    roomUI?.classList.add('has-room3d'); hub?.classList.add('room3d-ready'); hub?.classList.remove('room3d-fallback');
    viewport.dataset.roomReady = 'true';
    const status = document.getElementById('room3dStatus');
    if (status) { status.textContent = 'Căn phòng đã mở · chọn một vật thể để khám phá'; status.classList.remove('is-fallback'); status.hidden = true; }
    api.ready = true; active = true;
    const initialPage = activePage();
    if (initialPage === 'hub') switchWorld('hub');
    else api.showPage(initialPage);
    api.syncProgress(window.App?.visited || []);
    resizeObserver = new ResizeObserver(() => resize()); resizeObserver.observe(viewport);
    listen(window, 'resize', resize, { passive: true });
    listen(document, 'visibilitychange', () => {
      if (document.hidden) { stop(); settleTransition(true); }
      else if (active) { resize(); drawOnce(); start(); }
    });
    listen(window, 'pagechange', event => {
      if (!api.ready || failed || disposed) return;
      const page = event.detail?.page;
      if (!worldPages.includes(page)) return;
      try {
        if (page === 'hub') {
          // App's listener calls enter() first. Only enter here when a separate
          // host dispatches pagechange without the main App navigation layer.
          if (currentWorld !== 'hub') api.enter({ from: event.detail?.from });
          else { active = true; resize(); drawOnce(); start(); }
        } else api.showPage(page);
      } catch (error) {
        console.warn('The next 3D room could not open; its page remains usable.', error);
        fallback();
      }
    });
    listen(motionQuery, 'change', () => {
      stop(); settleTransition(true); look.x = look.y = lookSmooth.x = lookSmooth.y = 0;
      camera.position.copy(homePosition); cameraTarget.copy(homeTarget);
      if (dust) { dust.rotation.y = 0; dust.position.y = 0; }
      updateObjects(0); updateWorld(0); drawOnce(); if (!reduced()) start();
    });
    if (api.ready && !failed) {
      window.dispatchEvent(new CustomEvent('room3dready', { detail: { revision: THREE.REVISION } }));
      if (active) start();
    }
  } catch (error) {
    sceneInitialized = false; contextLost = false;
    console.warn('The 3D room is unavailable; the room controls remain active.', error);
    renderer?.dispose(); renderer?.domElement.remove();
    resources.forEach(resource => resource.dispose?.()); resources.clear();
    worlds.clear();
    fallback();
  }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
else init();
