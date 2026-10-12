/*! Three.js r186 | MIT License | See LICENSE in this directory. */
var vo=Object.defineProperty;var a=(e,n)=>vo(e,"name",{value:n,configurable:!0});import{Matrix3 as Fe,Vector2 as mt,Color as et,Vector3 as ye,mergeUniforms as vt,CubeUVReflectionMapping as ln,Mesh as Lt,BoxGeometry as Mn,ShaderMaterial as Ut,BackSide as St,cloneUniforms as kn,Matrix4 as kt,ColorManagement as nt,SRGBTransfer as qe,PlaneGeometry as zn,FrontSide as jt,getUnlitUniformColorSpace as gr,IntType as Xn,warn as We,HalfFloatType as Dt,UnsignedByteType as At,FloatType as Ft,RGBAFormat as wt,Plane as vr,CubeReflectionMapping as en,CubeRefractionMapping as zt,BufferGeometry as cn,OrthographicCamera as Kn,PerspectiveCamera as fn,NoToneMapping as Rt,MeshBasicMaterial as Sr,NoBlending as It,WebGLRenderTarget as xt,BufferAttribute as xn,LinearSRGBColorSpace as Yn,LinearFilter as Et,CubeTexture as qn,LinearMipmapLinearFilter as Xt,CubeCamera as Er,EquirectangularReflectionMapping as Tn,EquirectangularRefractionMapping as An,warnOnce as Mr,Uint32BufferAttribute as xr,Uint16BufferAttribute as Tr,error as Je,DataArrayTexture as Zn,Vector4 as _t,Float32BufferAttribute as $n,RawShaderMaterial as Ar,CustomToneMapping as Qn,NeutralToneMapping as Jn,AgXToneMapping as jn,ACESFilmicToneMapping as ei,CineonToneMapping as ti,ReinhardToneMapping as ni,LinearToneMapping as ii,Data3DTexture as Rr,GreaterEqualCompare as Rn,LessEqualCompare as bn,DepthTexture as dn,Texture as br,GLSL3 as ri,VSMShadowMap as tn,PCFShadowMap as un,AddOperation as Cr,MixOperation as Pr,MultiplyOperation as Lr,LinearTransfer as ai,UniformsUtils as Ur,DoubleSide as Nt,NormalBlending as pn,TangentSpaceNormalMap as oi,ObjectSpaceNormalMap as Dr,Layers as wr,RGFormat as Kt,RG11_EAC_Format as Cn,RED_GREEN_RGTC2_Format as Pn,MeshDepthMaterial as Ir,MeshDistanceMaterial as Nr,PCFSoftShadowMap as yr,DepthFormat as Yt,NearestFilter as Ht,CubeDepthTexture as Fr,UnsignedIntType as Vt,Frustum as si,LessEqualDepth as li,ReverseSubtractEquation as Or,SubtractEquation as Br,AddEquation as nn,OneMinusConstantAlphaFactor as Gr,ConstantAlphaFactor as Hr,OneMinusConstantColorFactor as Vr,ConstantColorFactor as Wr,OneMinusDstAlphaFactor as kr,OneMinusDstColorFactor as zr,OneMinusSrcAlphaFactor as Xr,OneMinusSrcColorFactor as Kr,DstAlphaFactor as Yr,DstColorFactor as qr,SrcAlphaSaturateFactor as Zr,SrcAlphaFactor as $r,SrcColorFactor as Qr,OneFactor as Jr,ZeroFactor as jr,NotEqualDepth as ea,GreaterDepth as ta,GreaterEqualDepth as na,EqualDepth as ia,LessDepth as ra,AlwaysDepth as aa,NeverDepth as oa,CullFaceNone as sa,CullFaceBack as ci,CullFaceFront as la,CustomBlending as ca,MultiplyBlending as fi,SubtractiveBlending as di,AdditiveBlending as ui,ReversedDepthFuncs as So,MinEquation as fa,MaxEquation as da,MirroredRepeatWrapping as ua,ClampToEdgeWrapping as Ln,RepeatWrapping as pa,LinearMipmapNearestFilter as Un,NearestMipmapLinearFilter as hn,NearestMipmapNearestFilter as ha,NotEqualCompare as ma,GreaterCompare as _a,EqualCompare as ga,LessCompare as va,AlwaysCompare as Sa,NeverCompare as Ea,NoColorSpace as qt,DepthStencilFormat as Zt,getByteLength as Ma,UnsignedInt248Type as rn,UnsignedShortType as mn,createElementNS as Eo,UnsignedShort4444Type as pi,UnsignedShort5551Type as hi,UnsignedInt5999Type as xa,UnsignedInt101111Type as Ta,ByteType as Aa,ShortType as Ra,AlphaFormat as ba,RGBFormat as Ca,RedFormat as Pa,RedIntegerFormat as mi,RGIntegerFormat as _i,RGBAIntegerFormat as gi,RGB_S3TC_DXT1_Format as Dn,RGBA_S3TC_DXT1_Format as wn,RGBA_S3TC_DXT3_Format as In,RGBA_S3TC_DXT5_Format as Nn,RGB_PVRTC_4BPPV1_Format as vi,RGB_PVRTC_2BPPV1_Format as Si,RGBA_PVRTC_4BPPV1_Format as Ei,RGBA_PVRTC_2BPPV1_Format as Mi,RGB_ETC1_Format as xi,RGB_ETC2_Format as Ti,RGBA_ETC2_EAC_Format as Ai,R11_EAC_Format as Ri,SIGNED_R11_EAC_Format as bi,SIGNED_RG11_EAC_Format as Ci,RGBA_ASTC_4x4_Format as Pi,RGBA_ASTC_5x4_Format as Li,RGBA_ASTC_5x5_Format as Ui,RGBA_ASTC_6x5_Format as Di,RGBA_ASTC_6x6_Format as wi,RGBA_ASTC_8x5_Format as Ii,RGBA_ASTC_8x6_Format as Ni,RGBA_ASTC_8x8_Format as yi,RGBA_ASTC_10x5_Format as Fi,RGBA_ASTC_10x6_Format as Oi,RGBA_ASTC_10x8_Format as Bi,RGBA_ASTC_10x10_Format as Gi,RGBA_ASTC_12x10_Format as Hi,RGBA_ASTC_12x12_Format as Vi,RGBA_BPTC_Format as Wi,RGB_BPTC_SIGNED_Format as ki,RGB_BPTC_UNSIGNED_Format as zi,RED_RGTC1_Format as Xi,SIGNED_RED_RGTC1_Format as Ki,SIGNED_RED_GREEN_RGTC2_Format as Yi,ExternalTexture as qi,EventDispatcher as La,ArrayCamera as Ua,WebXRController as yn,RAD2DEG as Mo,DataTexture as Da,createCanvasElement as wa,SRGBColorSpace as Ia,REVISION as Na,log as Zi,WebGLCoordinateSystem as $i,probeAsync as xo}from"./three.core.js";import{AdditiveAnimationBlendMode as Ad,AlwaysStencilFunc as Rd,AmbientLight as bd,AnimationAction as Cd,AnimationClip as Pd,AnimationLoader as Ld,AnimationMixer as Ud,AnimationObjectGroup as Dd,AnimationUtils as wd,ArcCurve as Id,ArrowHelper as Nd,AttachedBindMode as yd,Audio as Fd,AudioAnalyser as Od,AudioContext as Bd,AudioListener as Gd,AudioLoader as Hd,AxesHelper as Vd,BasicDepthPacking as Wd,BasicShadowMap as kd,BatchedMesh as zd,BezierInterpolant as Xd,Bone as Kd,BooleanKeyframeTrack as Yd,Box2 as qd,Box3 as Zd,Box3Helper as $d,BoxHelper as Qd,BufferGeometryLoader as Jd,Cache as jd,Camera as eu,CameraHelper as tu,CanvasTexture as nu,CapsuleGeometry as iu,CatmullRomCurve3 as ru,CircleGeometry as au,Clock as ou,ColorKeyframeTrack as su,Compatibility as lu,CompressedArrayTexture as cu,CompressedCubeTexture as fu,CompressedTexture as du,CompressedTextureLoader as uu,ConeGeometry as pu,Controls as hu,CubeTextureLoader as mu,CubicBezierCurve as _u,CubicBezierCurve3 as gu,CubicInterpolant as vu,CullFaceFrontBack as Su,Curve as Eu,CurvePath as Mu,CylinderGeometry as xu,Cylindrical as Tu,DataTextureLoader as Au,DataUtils as Ru,DecrementStencilOp as bu,DecrementWrapStencilOp as Cu,DefaultLoadingManager as Pu,DetachedBindMode as Lu,DirectionalLight as Uu,DirectionalLightHelper as Du,DiscreteInterpolant as wu,DodecahedronGeometry as Iu,DynamicCopyUsage as Nu,DynamicDrawUsage as yu,DynamicReadUsage as Fu,EdgesGeometry as Ou,EllipseCurve as Bu,EqualStencilFunc as Gu,Euler as Hu,ExtrudeGeometry as Vu,FileLoader as Wu,Float16BufferAttribute as ku,Fog as zu,FogExp2 as Xu,FramebufferTexture as Ku,FrustumArray as Yu,GLBufferAttribute as qu,GLSL1 as Zu,GreaterEqualStencilFunc as $u,GreaterStencilFunc as Qu,GridHelper as Ju,Group as ju,HTMLTexture as ep,HemisphereLight as tp,HemisphereLightHelper as np,IcosahedronGeometry as ip,ImageBitmapLoader as rp,ImageLoader as ap,ImageUtils as op,IncrementStencilOp as sp,IncrementWrapStencilOp as lp,InstancedBufferAttribute as cp,InstancedBufferGeometry as fp,InstancedInterleavedBuffer as dp,InstancedMesh as up,Int16BufferAttribute as pp,Int32BufferAttribute as hp,Int8BufferAttribute as mp,InterleavedBuffer as _p,InterleavedBufferAttribute as gp,Interpolant as vp,InterpolateBezier as Sp,InterpolateDiscrete as Ep,InterpolateLinear as Mp,InterpolateSmooth as xp,InterpolationSamplingMode as Tp,InterpolationSamplingType as Ap,InvertStencilOp as Rp,KeepStencilOp as bp,KeyframeTrack as Cp,LOD as Pp,LatheGeometry as Lp,LessEqualStencilFunc as Up,LessStencilFunc as Dp,Light as wp,LightProbe as Ip,LightShadow as Np,Line as yp,Line3 as Fp,LineBasicMaterial as Op,LineCurve as Bp,LineCurve3 as Gp,LineDashedMaterial as Hp,LineLoop as Vp,LineSegments as Wp,LinearInterpolant as kp,LinearMipMapLinearFilter as zp,LinearMipMapNearestFilter as Xp,Loader as Kp,LoaderUtils as Yp,LoadingManager as qp,LoopOnce as Zp,LoopPingPong as $p,LoopRepeat as Qp,MOUSE as Jp,Material as jp,MaterialBlending as eh,MaterialLoader as th,MathUtils as nh,Matrix2 as ih,MeshLambertMaterial as rh,MeshMatcapMaterial as ah,MeshNormalMaterial as oh,MeshPhongMaterial as sh,MeshPhysicalMaterial as lh,MeshStandardMaterial as ch,MeshToonMaterial as fh,NearestMipMapLinearFilter as dh,NearestMipMapNearestFilter as uh,NeverStencilFunc as ph,NoNormalPacking as hh,NormalAnimationBlendMode as mh,NormalGAPacking as _h,NormalRGPacking as gh,NotEqualStencilFunc as vh,NumberKeyframeTrack as Sh,Object3D as Eh,ObjectLoader as Mh,OctahedronGeometry as xh,Path as Th,PlaneHelper as Ah,PointLight as Rh,PointLightHelper as bh,Points as Ch,PointsMaterial as Ph,PolarGridHelper as Lh,PolyhedronGeometry as Uh,PositionalAudio as Dh,PropertyBinding as wh,PropertyMixer as Ih,QuadraticBezierCurve as Nh,QuadraticBezierCurve3 as yh,Quaternion as Fh,QuaternionKeyframeTrack as Oh,QuaternionLinearInterpolant as Bh,RGBADepthPacking as Gh,RGBDepthPacking as Hh,RGBIntegerFormat as Vh,RGDepthPacking as Wh,Ray as kh,Raycaster as zh,RectAreaLight as Xh,RenderObjectRefreshType as Kh,RenderTarget as Yh,RenderTarget3D as qh,ReplaceStencilOp as Zh,RingGeometry as $h,Scene as Qh,ShadowMaterial as Jh,Shape as jh,ShapeGeometry as em,ShapePath as tm,ShapeUtils as nm,Skeleton as im,SkeletonHelper as rm,SkinnedMesh as am,Source as om,Sphere as sm,SphereGeometry as lm,Spherical as cm,SphericalHarmonics3 as fm,SplineCurve as dm,SpotLight as um,SpotLightHelper as pm,Sprite as hm,SpriteMaterial as mm,StaticCopyUsage as _m,StaticDrawUsage as gm,StaticReadUsage as vm,StereoCamera as Sm,StreamCopyUsage as Em,StreamDrawUsage as Mm,StreamReadUsage as xm,StringKeyframeTrack as Tm,TOUCH as Am,TetrahedronGeometry as Rm,TextureLoader as bm,TextureSource as Cm,TextureUtils as Pm,Timer as Lm,TimestampQuery as Um,TorusGeometry as Dm,TorusKnotGeometry as wm,Triangle as Im,TriangleFanDrawMode as Nm,TriangleStripDrawMode as ym,TrianglesDrawMode as Fm,TubeGeometry as Om,UVMapping as Bm,Uint8BufferAttribute as Gm,Uint8ClampedBufferAttribute as Hm,Uniform as Vm,UniformsGroup as Wm,VectorKeyframeTrack as km,VideoFrameTexture as zm,VideoTexture as Xm,WebGL3DRenderTarget as Km,WebGLArrayRenderTarget as Ym,WebGPUCoordinateSystem as qm,WireframeGeometry as Zm,WrapAroundEnding as $m,ZeroCurvatureEnding as Qm,ZeroSlopeEnding as Jm,ZeroStencilOp as jm,getConsoleFunction as e_,setConsoleFunction as t_}from"./three.core.js";function ya(){let e=null,n=!1,t=null,i=null;function c(s,u){i=e.requestAnimationFrame(c),t(s,u)}return a(c,"onAnimationFrame"),{start:a(function(){n!==!0&&t!==null&&e!==null&&(i=e.requestAnimationFrame(c),n=!0)},"start"),stop:a(function(){e!==null&&e.cancelAnimationFrame(i),n=!1},"stop"),setAnimationLoop:a(function(s){t=s},"setAnimationLoop"),setContext:a(function(s){e=s},"setContext")}}a(ya,"WebGLAnimation");function To(e){const n=new WeakMap;function t(v,b){const A=v.array,V=v.usage,N=A.byteLength,h=e.createBuffer();e.bindBuffer(b,h),e.bufferData(b,A,V),v.onUploadCallback();let T;if(A instanceof Float32Array)T=e.FLOAT;else if(typeof Float16Array<"u"&&A instanceof Float16Array)T=e.HALF_FLOAT;else if(A instanceof Uint16Array)v.isFloat16BufferAttribute?T=e.HALF_FLOAT:T=e.UNSIGNED_SHORT;else if(A instanceof Int16Array)T=e.SHORT;else if(A instanceof Uint32Array)T=e.UNSIGNED_INT;else if(A instanceof Int32Array)T=e.INT;else if(A instanceof Int8Array)T=e.BYTE;else if(A instanceof Uint8Array)T=e.UNSIGNED_BYTE;else if(A instanceof Uint8ClampedArray)T=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+A);return{buffer:h,type:T,bytesPerElement:A.BYTES_PER_ELEMENT,version:v.version,size:N}}a(t,"createBuffer");function i(v,b,A){const V=b.array,N=b.updateRanges;if(e.bindBuffer(A,v),N.length===0)e.bufferSubData(A,0,V);else{N.sort((T,y)=>T.start-y.start);let h=0;for(let T=1;T<N.length;T++){const y=N[h],k=N[T];k.start<=y.start+y.count+1?y.count=Math.max(y.count,k.start+k.count-y.start):(++h,N[h]=k)}N.length=h+1;for(let T=0,y=N.length;T<y;T++){const k=N[T];e.bufferSubData(A,k.start*V.BYTES_PER_ELEMENT,V,k.start,k.count)}b.clearUpdateRanges()}b.onUploadCallback()}a(i,"updateBuffer");function c(v){return v.isInterleavedBufferAttribute&&(v=v.data),n.get(v)}a(c,"get");function s(v){v.isInterleavedBufferAttribute&&(v=v.data);const b=n.get(v);b&&(e.deleteBuffer(b.buffer),n.delete(v))}a(s,"remove");function u(v,b){if(v.isInterleavedBufferAttribute&&(v=v.data),v.isGLBufferAttribute){const V=n.get(v);(!V||V.version<v.version)&&n.set(v,{buffer:v.buffer,type:v.type,bytesPerElement:v.elementSize,version:v.version});return}const A=n.get(v);if(A===void 0)n.set(v,t(v,b));else if(A.version<v.version){if(A.size!==v.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(A.buffer,v,b),A.version=v.version}}return a(u,"update"),{get:c,remove:s,update:u}}a(To,"WebGLAttributes");var Ao=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ro=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bo=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Co=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Po=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lo=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uo=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Do=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wo=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Io=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,No=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yo=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fo=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Oo=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bo=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Go=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ho=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wo=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ko=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ko=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Yo=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qo=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zo=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,$o=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qo=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jo=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jo=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,es="gl_FragColor = linearToOutputTexel( gl_FragColor );",ts=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ns=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,is=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rs=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,as=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,os=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ss=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ls=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cs=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fs=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ds=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,us=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ps=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hs=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ms=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,_s=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,gs=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vs=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ss=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Es=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ms=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xs=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ts=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,As=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rs=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bs=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Cs=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ps=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ls=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Us=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ds=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ws=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Is=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ns=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ys=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fs=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Os=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bs=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gs=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hs=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vs=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ws=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ks=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zs=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xs=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ks=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ys=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qs=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zs=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$s=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qs=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Js=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,js=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,el=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nl=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,il=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,al=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ol=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sl=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ll=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cl=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fl=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dl=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ul=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pl=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ml=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_l=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gl=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vl=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sl=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,El=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ml=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Al=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rl=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cl=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ll=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ul=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dl=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wl=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Il=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Nl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fl=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ol=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gl=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hl=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vl=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wl=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kl=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zl=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xl=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kl=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yl=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ql=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zl=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$l=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ql=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jl=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jl=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ec=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tc=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nc=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ic=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Le={alphahash_fragment:Ao,alphahash_pars_fragment:Ro,alphamap_fragment:bo,alphamap_pars_fragment:Co,alphatest_fragment:Po,alphatest_pars_fragment:Lo,aomap_fragment:Uo,aomap_pars_fragment:Do,batching_pars_vertex:wo,batching_vertex:Io,begin_vertex:No,beginnormal_vertex:yo,bsdfs:Fo,iridescence_fragment:Oo,bumpmap_pars_fragment:Bo,clipping_planes_fragment:Go,clipping_planes_pars_fragment:Ho,clipping_planes_pars_vertex:Vo,clipping_planes_vertex:Wo,color_fragment:ko,color_pars_fragment:zo,color_pars_vertex:Xo,color_vertex:Ko,common:Yo,cube_uv_reflection_fragment:qo,defaultnormal_vertex:Zo,displacementmap_pars_vertex:$o,displacementmap_vertex:Qo,emissivemap_fragment:Jo,emissivemap_pars_fragment:jo,colorspace_fragment:es,colorspace_pars_fragment:ts,envmap_fragment:ns,envmap_common_pars_fragment:is,envmap_pars_fragment:rs,envmap_pars_vertex:as,envmap_physical_pars_fragment:_s,envmap_vertex:os,fog_vertex:ss,fog_pars_vertex:ls,fog_fragment:cs,fog_pars_fragment:fs,gradientmap_pars_fragment:ds,lightmap_pars_fragment:us,lights_lambert_fragment:ps,lights_lambert_pars_fragment:hs,lights_pars_begin:ms,lights_toon_fragment:gs,lights_toon_pars_fragment:vs,lights_phong_fragment:Ss,lights_phong_pars_fragment:Es,lights_physical_fragment:Ms,lights_physical_pars_fragment:xs,lights_fragment_begin:Ts,lights_fragment_maps:As,lights_fragment_end:Rs,lightprobes_pars_fragment:bs,logdepthbuf_fragment:Cs,logdepthbuf_pars_fragment:Ps,logdepthbuf_pars_vertex:Ls,logdepthbuf_vertex:Us,map_fragment:Ds,map_pars_fragment:ws,map_particle_fragment:Is,map_particle_pars_fragment:Ns,metalnessmap_fragment:ys,metalnessmap_pars_fragment:Fs,morphinstance_vertex:Os,morphcolor_vertex:Bs,morphnormal_vertex:Gs,morphtarget_pars_vertex:Hs,morphtarget_vertex:Vs,normal_fragment_begin:Ws,normal_fragment_maps:ks,normal_pars_fragment:zs,normal_pars_vertex:Xs,normal_vertex:Ks,normalmap_pars_fragment:Ys,clearcoat_normal_fragment_begin:qs,clearcoat_normal_fragment_maps:Zs,clearcoat_pars_fragment:$s,iridescence_pars_fragment:Qs,opaque_fragment:Js,packing:js,premultiplied_alpha_fragment:el,project_vertex:tl,dithering_fragment:nl,dithering_pars_fragment:il,roughnessmap_fragment:rl,roughnessmap_pars_fragment:al,shadowmap_pars_fragment:ol,shadowmap_pars_vertex:sl,shadowmap_vertex:ll,shadowmask_pars_fragment:cl,skinbase_vertex:fl,skinning_pars_vertex:dl,skinning_vertex:ul,skinnormal_vertex:pl,specularmap_fragment:hl,specularmap_pars_fragment:ml,tonemapping_fragment:_l,tonemapping_pars_fragment:gl,transmission_fragment:vl,transmission_pars_fragment:Sl,uv_pars_fragment:El,uv_pars_vertex:Ml,uv_vertex:xl,worldpos_vertex:Tl,background_vert:Al,background_frag:Rl,backgroundCube_vert:bl,backgroundCube_frag:Cl,cube_vert:Pl,cube_frag:Ll,depth_vert:Ul,depth_frag:Dl,distance_vert:wl,distance_frag:Il,equirect_vert:Nl,equirect_frag:yl,linedashed_vert:Fl,linedashed_frag:Ol,meshbasic_vert:Bl,meshbasic_frag:Gl,meshlambert_vert:Hl,meshlambert_frag:Vl,meshmatcap_vert:Wl,meshmatcap_frag:kl,meshnormal_vert:zl,meshnormal_frag:Xl,meshphong_vert:Kl,meshphong_frag:Yl,meshphysical_vert:ql,meshphysical_frag:Zl,meshtoon_vert:$l,meshtoon_frag:Ql,points_vert:Jl,points_frag:jl,shadow_vert:ec,shadow_frag:tc,sprite_vert:nc,sprite_frag:ic},ce={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ye},probesMax:{value:new ye},probesResolution:{value:new ye}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},bt={basic:{uniforms:vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:vt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:vt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new et(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:vt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:vt([ce.points,ce.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:vt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:vt([ce.common,ce.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:vt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:vt([ce.sprite,ce.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distance:{uniforms:vt([ce.common,ce.displacementmap,{referencePosition:{value:new ye},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distance_vert,fragmentShader:Le.distance_frag},shadow:{uniforms:vt([ce.lights,ce.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};bt.physical={uniforms:vt([bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const Fn={r:0,b:0,g:0},rc=new kt,Fa=new Fe;Fa.set(-1,0,0,0,1,0,0,0,1);function ac(e,n,t,i,c,s){const u=new et(0);let v=c===!0?0:1,b,A,V=null,N=0,h=null;function T(U){let X=U.isScene===!0?U.background:null;if(X&&X.isTexture){const m=U.backgroundBlurriness>0;X=n.get(X,m)}return X}a(T,"getBackground");function y(U){let X=!1;const m=T(U);m===null?d(u,v):m&&m.isColor&&(d(m,1),X=!0);const E=e.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(e.autoClear||X)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}a(y,"render");function k(U,X){const m=T(X);m&&(m.isCubeTexture||m.mapping===ln)?(A===void 0&&(A=new Lt(new Mn(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:kn(bt.backgroundCube.uniforms),vertexShader:bt.backgroundCube.vertexShader,fragmentShader:bt.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),A.geometry.deleteAttribute("normal"),A.geometry.deleteAttribute("uv"),A.onBeforeRender=function(E,_,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(A.material,"envMap",{get:a(function(){return this.uniforms.envMap.value},"get")}),i.update(A)),A.material.uniforms.envMap.value=m,A.material.uniforms.backgroundBlurriness.value=X.backgroundBlurriness,A.material.uniforms.backgroundIntensity.value=X.backgroundIntensity,A.material.uniforms.backgroundRotation.value.setFromMatrix4(rc.makeRotationFromEuler(X.backgroundRotation)).transpose(),m.isCubeTexture&&m.isRenderTargetTexture===!1&&A.material.uniforms.backgroundRotation.value.premultiply(Fa),A.material.toneMapped=nt.getTransfer(m.colorSpace)!==qe,(V!==m||N!==m.version||h!==e.toneMapping)&&(A.material.needsUpdate=!0,V=m,N=m.version,h=e.toneMapping),A.layers.enableAll(),U.unshift(A,A.geometry,A.material,0,0,null)):m&&m.isTexture&&(b===void 0&&(b=new Lt(new zn(2,2),new Ut({name:"BackgroundMaterial",uniforms:kn(bt.background.uniforms),vertexShader:bt.background.vertexShader,fragmentShader:bt.background.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),b.geometry.deleteAttribute("normal"),Object.defineProperty(b.material,"map",{get:a(function(){return this.uniforms.t2D.value},"get")}),i.update(b)),b.material.uniforms.t2D.value=m,b.material.uniforms.backgroundIntensity.value=X.backgroundIntensity,b.material.toneMapped=nt.getTransfer(m.colorSpace)!==qe,m.matrixAutoUpdate===!0&&m.updateMatrix(),b.material.uniforms.uvTransform.value.copy(m.matrix),(V!==m||N!==m.version||h!==e.toneMapping)&&(b.material.needsUpdate=!0,V=m,N=m.version,h=e.toneMapping),b.layers.enableAll(),U.unshift(b,b.geometry,b.material,0,0,null))}a(k,"addToRenderList");function d(U,X){U.getRGB(Fn,gr(e)),t.buffers.color.setClear(Fn.r,Fn.g,Fn.b,X,s)}a(d,"setClear");function l(){A!==void 0&&(A.geometry.dispose(),A.material.dispose(),A=void 0),b!==void 0&&(b.geometry.dispose(),b.material.dispose(),b=void 0)}return a(l,"dispose"),{getClearColor:a(function(){return u},"getClearColor"),setClearColor:a(function(U,X=1){u.set(U),v=X,d(u,v)},"setClearColor"),getClearAlpha:a(function(){return v},"getClearAlpha"),setClearAlpha:a(function(U){v=U,d(u,v)},"setClearAlpha"),render:y,addToRenderList:k,dispose:l}}a(ac,"WebGLBackground");function oc(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},c=h(null);let s=c,u=!1;function v(O,H,Z,L,Y){let J=!1;const q=N(O,L,Z,H);s!==q&&(s=q,A(s.object)),J=T(O,L,Z,Y),J&&y(O,L,Z,Y),Y!==null&&n.update(Y,e.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,m(O,H,Z,L),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}a(v,"setup");function b(){return e.createVertexArray()}a(b,"createVertexArrayObject");function A(O){return e.bindVertexArray(O)}a(A,"bindVertexArrayObject");function V(O){return e.deleteVertexArray(O)}a(V,"deleteVertexArrayObject");function N(O,H,Z,L){const Y=L.wireframe===!0;let J=i[H.id];J===void 0&&(J={},i[H.id]=J);const q=O.isInstancedMesh===!0?O.id:0;let ie=J[q];ie===void 0&&(ie={},J[q]=ie);let $=ie[Z.id];$===void 0&&($={},ie[Z.id]=$);let ee=$[Y];return ee===void 0&&(ee=h(b()),$[Y]=ee),ee}a(N,"getBindingState");function h(O){const H=[],Z=[],L=[];for(let Y=0;Y<t;Y++)H[Y]=0,Z[Y]=0,L[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Z,attributeDivisors:L,object:O,attributes:{},index:null}}a(h,"createBindingState");function T(O,H,Z,L){const Y=s.attributes,J=H.attributes;let q=0;const ie=Z.getAttributes();for(const $ in ie)if(ie[$].location>=0){const te=Y[$];let Ce=J[$];if(Ce===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(Ce=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(Ce=O.instanceColor)),te===void 0||te.attribute!==Ce||Ce&&te.data!==Ce.data)return!0;q++}return s.attributesNum!==q||s.index!==L}a(T,"needsUpdate");function y(O,H,Z,L){const Y={},J=H.attributes;let q=0;const ie=Z.getAttributes();for(const $ in ie)if(ie[$].location>=0){let te=J[$];te===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(te=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(te=O.instanceColor));const Ce={};Ce.attribute=te,te&&te.data&&(Ce.data=te.data),Y[$]=Ce,q++}s.attributes=Y,s.attributesNum=q,s.index=L}a(y,"saveCache");function k(){const O=s.newAttributes;for(let H=0,Z=O.length;H<Z;H++)O[H]=0}a(k,"initAttributes");function d(O){l(O,0)}a(d,"enableAttribute");function l(O,H){const Z=s.newAttributes,L=s.enabledAttributes,Y=s.attributeDivisors;Z[O]=1,L[O]===0&&(e.enableVertexAttribArray(O),L[O]=1),Y[O]!==H&&(e.vertexAttribDivisor(O,H),Y[O]=H)}a(l,"enableAttributeAndDivisor");function U(){const O=s.newAttributes,H=s.enabledAttributes;for(let Z=0,L=H.length;Z<L;Z++)H[Z]!==O[Z]&&(e.disableVertexAttribArray(Z),H[Z]=0)}a(U,"disableUnusedAttributes");function X(O,H,Z,L,Y,J,q){q===!0?e.vertexAttribIPointer(O,H,Z,Y,J):e.vertexAttribPointer(O,H,Z,L,Y,J)}a(X,"vertexAttribPointer");function m(O,H,Z,L){k();const Y=L.attributes,J=Z.getAttributes(),q=H.defaultAttributeValues;for(const ie in J){const $=J[ie];if($.location>=0){let ee=Y[ie];if(ee===void 0&&(ie==="instanceMatrix"&&O.instanceMatrix&&(ee=O.instanceMatrix),ie==="instanceColor"&&O.instanceColor&&(ee=O.instanceColor)),ee!==void 0){const te=ee.normalized,Ce=ee.itemSize,be=n.get(ee);if(be===void 0)continue;const rt=be.buffer,ze=be.type,Xe=be.bytesPerElement,W=ze===e.INT||ze===e.UNSIGNED_INT||ee.gpuType===Xn;if(ee.isInterleavedBufferAttribute){const Q=ee.data,Me=Q.stride,De=ee.offset;if(Q.isInstancedInterleavedBuffer){for(let _e=0;_e<$.locationSize;_e++)l($.location+_e,Q.meshPerAttribute);O.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let _e=0;_e<$.locationSize;_e++)d($.location+_e);e.bindBuffer(e.ARRAY_BUFFER,rt);for(let _e=0;_e<$.locationSize;_e++)X($.location+_e,Ce/$.locationSize,ze,te,Me*Xe,(De+Ce/$.locationSize*_e)*Xe,W)}else{if(ee.isInstancedBufferAttribute){for(let Q=0;Q<$.locationSize;Q++)l($.location+Q,ee.meshPerAttribute);O.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Q=0;Q<$.locationSize;Q++)d($.location+Q);e.bindBuffer(e.ARRAY_BUFFER,rt);for(let Q=0;Q<$.locationSize;Q++)X($.location+Q,Ce/$.locationSize,ze,te,Ce*Xe,Ce/$.locationSize*Q*Xe,W)}}else if(q!==void 0){const te=q[ie];if(te!==void 0)switch(te.length){case 2:e.vertexAttrib2fv($.location,te);break;case 3:e.vertexAttrib3fv($.location,te);break;case 4:e.vertexAttrib4fv($.location,te);break;default:e.vertexAttrib1fv($.location,te)}}}}U()}a(m,"setupVertexAttributes");function E(){g();for(const O in i){const H=i[O];for(const Z in H){const L=H[Z];for(const Y in L){const J=L[Y];for(const q in J)V(J[q].object),delete J[q];delete L[Y]}}delete i[O]}}a(E,"dispose");function _(O){if(i[O.id]===void 0)return;const H=i[O.id];for(const Z in H){const L=H[Z];for(const Y in L){const J=L[Y];for(const q in J)V(J[q].object),delete J[q];delete L[Y]}}delete i[O.id]}a(_,"releaseStatesOfGeometry");function w(O){for(const H in i){const Z=i[H];for(const L in Z){const Y=Z[L];if(Y[O.id]===void 0)continue;const J=Y[O.id];for(const q in J)V(J[q].object),delete J[q];delete Y[O.id]}}}a(w,"releaseStatesOfProgram");function f(O){for(const H in i){const Z=i[H],L=O.isInstancedMesh===!0?O.id:0,Y=Z[L];if(Y!==void 0){for(const J in Y){const q=Y[J];for(const ie in q)V(q[ie].object),delete q[ie];delete Y[J]}delete Z[L],Object.keys(Z).length===0&&delete i[H]}}}a(f,"releaseStatesOfObject");function g(){I(),u=!0,s!==c&&(s=c,A(s.object))}a(g,"reset");function I(){c.geometry=null,c.program=null,c.wireframe=!1}return a(I,"resetDefaultState"),{setup:v,reset:g,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:_,releaseStatesOfObject:f,releaseStatesOfProgram:w,initAttributes:k,enableAttribute:d,disableUnusedAttributes:U}}a(oc,"WebGLBindingStates");function sc(e,n,t){let i;function c(b){i=b}a(c,"setMode");function s(b,A){e.drawArrays(i,b,A),t.update(A,i,1)}a(s,"render");function u(b,A,V){V!==0&&(e.drawArraysInstanced(i,b,A,V),t.update(A,i,V))}a(u,"renderInstances");function v(b,A,V){if(V===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,b,0,A,0,V);let h=0;for(let T=0;T<V;T++)h+=A[T];t.update(h,i,1)}a(v,"renderMultiDraw"),this.setMode=c,this.render=s,this.renderInstances=u,this.renderMultiDraw=v}a(sc,"WebGLBufferRenderer");function lc(e,n,t,i){let c;function s(){if(c!==void 0)return c;if(n.has("EXT_texture_filter_anisotropic")===!0){const w=n.get("EXT_texture_filter_anisotropic");c=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}a(s,"getMaxAnisotropy");function u(w){return!(w!==wt&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}a(u,"textureFormatReadable");function v(w){const f=w===Dt&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(w!==At&&w!==Ft&&!f&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}a(v,"textureTypeReadable");function b(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}a(b,"getMaxPrecision");let A=t.precision!==void 0?t.precision:"highp";const V=b(A);V!==A&&(We("WebGLRenderer:",A,"not supported, using",V,"instead."),A=V);const N=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const T=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),k=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),U=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),X=e.getParameter(e.MAX_VARYING_VECTORS),m=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),_=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:b,textureFormatReadable:u,textureTypeReadable:v,precision:A,logarithmicDepthBuffer:N,reversedDepthBuffer:h,maxTextures:T,maxVertexTextures:y,maxTextureSize:k,maxCubemapSize:d,maxAttributes:l,maxVertexUniforms:U,maxVaryings:X,maxFragmentUniforms:m,maxSamples:E,samples:_}}a(lc,"WebGLCapabilities");function cc(e){const n=this;let t=null,i=0,c=!1,s=!1;const u=new vr,v=new Fe,b={value:null,needsUpdate:!1};this.uniform=b,this.numPlanes=0,this.numIntersection=0,this.init=function(N,h){const T=N.length!==0||h||i!==0||c;return c=h,i=N.length,T},this.beginShadows=function(){s=!0,V(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(N,h){t=V(N,h,0)},this.setState=function(N,h,T){const y=N.clippingPlanes,k=N.clipIntersection,d=N.clipShadows,l=e.get(N);if(!c||y===null||y.length===0||s&&!d)s?V(null):A();else{const U=s?0:i,X=U*4;let m=l.clippingState||null;b.value=m,m=V(y,h,X,T);for(let E=0;E!==X;++E)m[E]=t[E];l.clippingState=m,this.numIntersection=k?this.numPlanes:0,this.numPlanes+=U}};function A(){b.value!==t&&(b.value=t,b.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}a(A,"resetGlobalState");function V(N,h,T,y){const k=N!==null?N.length:0;let d=null;if(k!==0){if(d=b.value,y!==!0||d===null){const l=T+k*4,U=h.matrixWorldInverse;v.getNormalMatrix(U),(d===null||d.length<l)&&(d=new Float32Array(l));for(let X=0,m=T;X!==k;++X,m+=4)u.copy(N[X]).applyMatrix4(U,v),u.normal.toArray(d,m),d[m+3]=u.constant}b.value=d,b.needsUpdate=!0}return n.numPlanes=k,n.numIntersection=0,d}a(V,"projectPlanes")}a(cc,"WebGLClipping");const an=4,fc=6,dc=20,uc=256,_n=new Kn,Oa=new et;let Qi=null,Ji=0,ji=0,er=!1;const pc=new ye,$t=new ye;class tr{static{a(this,"PMREMGenerator")}constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(n,t=0,i=.1,c=100,s={}){const{size:u=256,position:v=pc}=s;Qi=this._renderer.getRenderTarget(),Ji=this._renderer.getActiveCubeFace(),ji=this._renderer.getActiveMipmapLevel(),er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const b=this._allocateTargets();return b.depthBuffer=!0,this._sceneToCubeUV(n,i,c,b,v),t>0&&this._blur(b,0,0,t),this._applyPMREM(b),this._cleanup(b),b}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ha(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ga(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodMeshes.length;n++)this._lodMeshes[n].geometry.dispose()}_cleanup(n){this._renderer.setRenderTarget(Qi,Ji,ji),this._renderer.xr.enabled=er,n.scissorTest=!1,on(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===en||n.mapping===zt?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Qi=this._renderer.getRenderTarget(),Ji=this._renderer.getActiveCubeFace(),ji=this._renderer.getActiveMipmapLevel(),er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Dt,format:wt,colorSpace:Yn,depthBuffer:!1},c=Ba(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ba(n,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hc(s)),this._blurMaterial=_c(s,n,t),this._ggxMaterial=mc(s,n,t)}return c}_compileMaterial(n){const t=new Lt(new cn,n);this._renderer.compile(t,_n)}_sceneToCubeUV(n,t,i,c,s){const b=new fn(90,1,t,i),A=[1,-1,1,1,1,1],V=[1,1,1,-1,-1,-1],N=this._renderer,h=N.autoClear,T=N.toneMapping;N.getClearColor(Oa),N.toneMapping=Rt,N.autoClear=!1,N.state.buffers.depth.getReversed()&&(N.setRenderTarget(c),N.clearDepth(),N.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Lt(new Mn,new Sr({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1})));const k=this._backgroundBox,d=k.material;let l=!1;const U=n.background;U?U.isColor&&(d.color.copy(U),n.background=null,l=!0):(d.color.copy(Oa),l=!0);for(let X=0;X<6;X++){const m=X%3;m===0?(b.up.set(0,A[X],0),b.position.set(s.x,s.y,s.z),b.lookAt(s.x+V[X],s.y,s.z)):m===1?(b.up.set(0,0,A[X]),b.position.set(s.x,s.y,s.z),b.lookAt(s.x,s.y+V[X],s.z)):(b.up.set(0,A[X],0),b.position.set(s.x,s.y,s.z),b.lookAt(s.x,s.y,s.z+V[X]));const E=this._cubeSize;on(c,m*E,X>2?E:0,E,E),N.setRenderTarget(c),l&&N.render(k,b),N.render(n,b)}N.toneMapping=T,N.autoClear=h,n.background=U}_textureToCubeUV(n,t){const i=this._renderer,c=n.mapping===en||n.mapping===zt;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ha()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ga());const s=c?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=s;const v=s.uniforms;v.envMap.value=n;const b=this._cubeSize;on(t,0,0,3*b,2*b),i.setRenderTarget(t),i.render(u,_n)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const c=this._lodMeshes.length;for(let s=1;s<c;s++)this._applyGGXFilter(n,s-1,s);t.autoClear=i}_applyGGXFilter(n,t,i){const c=this._renderer,s=this._pingPongRenderTarget,u=this._ggxMaterial,v=this._lodMeshes[i];v.material=u;const b=u.uniforms,A=i/(this._lodMeshes.length-1),V=t/(this._lodMeshes.length-1),N=Math.sqrt(A*A-V*V),h=A*1.25,T=N*h,{_lodMax:y}=this,k=this._sizeLods[i],d=3*k*(i>y-an?i-y+an:0),l=4*(this._cubeSize-k);b.envMap.value=n.texture,b.roughness.value=T,b.mipInt.value=y-t,on(s,d,l,3*k,2*k),c.setRenderTarget(s),c.render(v,_n),b.envMap.value=s.texture,b.roughness.value=0,b.mipInt.value=y-i,on(n,d,l,3*k,2*k),c.setRenderTarget(n),c.render(v,_n)}_blur(n,t,i,c){const s=this._pingPongRenderTarget,u=Math.min(c,Math.PI)/Math.SQRT2;this._blurPass(n,s,t,i,u),this._blurPass(s,n,i,i,u)}_blurPass(n,t,i,c,s){const u=this._renderer,v=this._blurMaterial,b=this._lodMeshes[c];b.material=v;const A=v.uniforms;A.envMap.value=n.texture,A.sigma.value=s,A.mipInt.value=this._lodMax-i;const V=this._sizeLods[c],N=3*V*(c>this._lodMax-an?c-this._lodMax+an:0),h=4*(this._cubeSize-V);on(t,N,h,3*V,2*V),u.setRenderTarget(t),u.render(b,_n)}}function hc(e){const n=[],t=[];let i=e;const c=e-an+1+fc;for(let s=0;s<c;s++){const u=Math.pow(2,i);n.push(u);const v=1/(u-2),b=-v,A=1+v,V=[b,b,A,b,A,A,b,b,A,A,b,A],N=6,h=6,T=3,y=new Float32Array(T*h*N),k=new Float32Array(T*h*N);for(let l=0;l<N;l++){const U=l%3*2/3-1,X=l>2?0:-1,m=[U,X,0,U+2/3,X,0,U+2/3,X+1,0,U,X,0,U+2/3,X+1,0,U,X+1,0];y.set(m,T*h*l);for(let E=0;E<h;E++){const _=V[E*2]*2-1,w=V[E*2+1]*2-1;l===0?$t.set(1,w,_):l===1?$t.set(-_,1,-w):l===2?$t.set(-_,w,1):l===3?$t.set(-1,w,-_):l===4?$t.set(-_,-1,w):$t.set(_,w,-1),$t.toArray(k,(l*h+E)*T)}}const d=new cn;d.setAttribute("position",new xn(y,T)),d.setAttribute("outputDirection",new xn(k,T)),t.push(new Lt(d,null)),i>an&&i--}return{lodMeshes:t,sizeLods:n}}a(hc,"_createPlanes");function Ba(e,n,t){const i=new xt(e,n,t);return i.texture.mapping=ln,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}a(Ba,"_createRenderTarget");function on(e,n,t,i,c){e.viewport.set(n,t,i,c),e.scissor.set(n,t,i,c)}a(on,"_setViewport");function mc(e,n,t){return new Ut({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uc,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:On(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:It,depthTest:!1,depthWrite:!1})}a(mc,"_getGGXShader");function _c(e,n,t){return new Ut({name:"SphericalGaussianBlur",defines:{SAMPLES:dc,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:On(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:It,depthTest:!1,depthWrite:!1})}a(_c,"_getBlurShader");function Ga(){return new Ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:On(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:It,depthTest:!1,depthWrite:!1})}a(Ga,"_getEquirectMaterial");function Ha(){return new Ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:On(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:It,depthTest:!1,depthWrite:!1})}a(Ha,"_getCubemapMaterial");function On(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}a(On,"_getCommonVertexShader");class nr extends xt{static{a(this,"WebGLCubeRenderTarget")}constructor(n=1,t={}){super(n,n,t),this.isWebGLCubeRenderTarget=!0;const i={width:n,height:n,depth:1},c=[i,i,i,i,i,i];this.texture=new qn(c),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},c=new Mn(5,5,5),s=new Ut({name:"CubemapFromEquirect",uniforms:kn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:St,blending:It});s.uniforms.tEquirect.value=t;const u=new Lt(c,s),v=t.minFilter;return t.minFilter===Xt&&(t.minFilter=Et),new Er(1,10,this).update(n,u),t.minFilter=v,u.geometry.dispose(),u.material.dispose(),this}clear(n,t=!0,i=!0,c=!0){const s=n.getRenderTarget();for(let u=0;u<6;u++)n.setRenderTarget(this,u),n.clear(t,i,c);n.setRenderTarget(s)}}function gc(e){let n=new WeakMap,t=new WeakMap,i=null;function c(h,T=!1){return h==null?null:T?u(h):s(h)}a(c,"get");function s(h){if(h&&h.isTexture){const T=h.mapping;if(T===Tn||T===An)if(n.has(h)){const y=n.get(h).texture;return v(y,h.mapping)}else{const y=h.image;if(y&&y.height>0){const k=new nr(y.height);return k.fromEquirectangularTexture(e,h),n.set(h,k),h.addEventListener("dispose",A),v(k.texture,h.mapping)}else return null}}return h}a(s,"getCube");function u(h){if(h&&h.isTexture){const T=h.mapping,y=T===Tn||T===An,k=T===en||T===zt;if(y||k){let d=t.get(h);const l=d!==void 0?d.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==l)return i===null&&(i=new tr(e)),d=y?i.fromEquirectangular(h,d):i.fromCubemap(h,d),d.texture.pmremVersion=h.pmremVersion,t.set(h,d),d.texture;if(d!==void 0)return d.texture;{const U=h.image;return y&&U&&U.height>0||k&&U&&b(U)?(i===null&&(i=new tr(e)),d=y?i.fromEquirectangular(h):i.fromCubemap(h),d.texture.pmremVersion=h.pmremVersion,t.set(h,d),h.addEventListener("dispose",V),d.texture):null}}}return h}a(u,"getPMREM");function v(h,T){return T===Tn?h.mapping=en:T===An&&(h.mapping=zt),h}a(v,"mapTextureMapping");function b(h){let T=0;const y=6;for(let k=0;k<y;k++)h[k]!==void 0&&T++;return T===y}a(b,"isCubeTextureComplete");function A(h){const T=h.target;T.removeEventListener("dispose",A);const y=n.get(T);y!==void 0&&(n.delete(T),y.dispose())}a(A,"onCubemapDispose");function V(h){const T=h.target;T.removeEventListener("dispose",V);const y=t.get(T);y!==void 0&&(t.delete(T),y.dispose())}a(V,"onPMREMDispose");function N(){n=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return a(N,"dispose"),{get:c,dispose:N}}a(gc,"WebGLEnvironments");function vc(e){const n={};function t(i){if(n[i]!==void 0)return n[i];const c=e.getExtension(i);return n[i]=c,c}return a(t,"getExtension"),{has:a(function(i){return t(i)!==null},"has"),init:a(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:a(function(i){const c=t(i);return c===null&&Mr("WebGLRenderer: "+i+" extension not supported."),c},"get")}}a(vc,"WebGLExtensions");function Sc(e,n,t,i){const c={},s=new WeakMap;function u(N){const h=N.target;h.index!==null&&n.remove(h.index);for(const y in h.attributes)n.remove(h.attributes[y]);h.removeEventListener("dispose",u),delete c[h.id];const T=s.get(h);T&&(n.remove(T),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}a(u,"onGeometryDispose");function v(N,h){return c[h.id]===!0||(h.addEventListener("dispose",u),c[h.id]=!0,t.memory.geometries++),h}a(v,"get");function b(N){const h=N.attributes;for(const T in h)n.update(h[T],e.ARRAY_BUFFER)}a(b,"update");function A(N){const h=[],T=N.index,y=N.attributes.position;let k=0;if(y===void 0)return;if(T!==null){const U=T.array;k=T.version;for(let X=0,m=U.length;X<m;X+=3){const E=U[X+0],_=U[X+1],w=U[X+2];h.push(E,_,_,w,w,E)}}else{const U=y.array;k=y.version;for(let X=0,m=U.length/3-1;X<m;X+=3){const E=X+0,_=X+1,w=X+2;h.push(E,_,_,w,w,E)}}const d=new(y.count>=65535?xr:Tr)(h,1);d.version=k;const l=s.get(N);l&&n.remove(l),s.set(N,d)}a(A,"updateWireframeAttribute");function V(N){const h=s.get(N);if(h){const T=N.index;T!==null&&h.version<T.version&&A(N)}else A(N);return s.get(N)}return a(V,"getWireframeAttribute"),{get:v,update:b,getWireframeAttribute:V}}a(Sc,"WebGLGeometries");function Ec(e,n,t){let i;function c(N){i=N}a(c,"setMode");let s,u;function v(N){s=N.type,u=N.bytesPerElement}a(v,"setIndex");function b(N,h){e.drawElements(i,h,s,N*u),t.update(h,i,1)}a(b,"render");function A(N,h,T){T!==0&&(e.drawElementsInstanced(i,h,s,N*u,T),t.update(h,i,T))}a(A,"renderInstances");function V(N,h,T){if(T===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,N,0,T);let k=0;for(let d=0;d<T;d++)k+=h[d];t.update(k,i,1)}a(V,"renderMultiDraw"),this.setMode=c,this.setIndex=v,this.render=b,this.renderInstances=A,this.renderMultiDraw=V}a(Ec,"WebGLIndexedBufferRenderer");function Mc(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,u,v){switch(t.calls++,u){case e.TRIANGLES:t.triangles+=v*(s/3);break;case e.LINES:t.lines+=v*(s/2);break;case e.LINE_STRIP:t.lines+=v*(s-1);break;case e.LINE_LOOP:t.lines+=v*s;break;case e.POINTS:t.points+=v*s;break;default:Je("WebGLInfo: Unknown draw mode:",u);break}}a(i,"update");function c(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return a(c,"reset"),{memory:n,render:t,programs:null,autoReset:!0,reset:c,update:i}}a(Mc,"WebGLInfo");function xc(e,n,t){const i=new WeakMap,c=new _t;function s(u,v,b){const A=u.morphTargetInfluences,V=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,N=V!==void 0?V.length:0;let h=i.get(v);if(h===void 0||h.count!==N){let g=function(){w.dispose(),i.delete(v),v.removeEventListener("dispose",g)};a(g,"disposeTexture"),h!==void 0&&h.texture.dispose();const T=v.morphAttributes.position!==void 0,y=v.morphAttributes.normal!==void 0,k=v.morphAttributes.color!==void 0,d=v.morphAttributes.position||[],l=v.morphAttributes.normal||[],U=v.morphAttributes.color||[];let X=0;T===!0&&(X=1),y===!0&&(X=2),k===!0&&(X=3);let m=v.attributes.position.count*X,E=1;m>n.maxTextureSize&&(E=Math.ceil(m/n.maxTextureSize),m=n.maxTextureSize);const _=new Float32Array(m*E*4*N),w=new Zn(_,m,E,N);w.type=Ft,w.needsUpdate=!0;const f=X*4;for(let I=0;I<N;I++){const O=d[I],H=l[I],Z=U[I],L=m*E*4*I;for(let Y=0;Y<O.count;Y++){const J=Y*f;T===!0&&(c.fromBufferAttribute(O,Y),_[L+J+0]=c.x,_[L+J+1]=c.y,_[L+J+2]=c.z,_[L+J+3]=0),y===!0&&(c.fromBufferAttribute(H,Y),_[L+J+4]=c.x,_[L+J+5]=c.y,_[L+J+6]=c.z,_[L+J+7]=0),k===!0&&(c.fromBufferAttribute(Z,Y),_[L+J+8]=c.x,_[L+J+9]=c.y,_[L+J+10]=c.z,_[L+J+11]=Z.itemSize===4?c.w:1)}}h={count:N,texture:w,size:new mt(m,E)},i.set(v,h),v.addEventListener("dispose",g)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)b.getUniforms().setValue(e,"morphTexture",u.morphTexture,t);else{let T=0;for(let k=0;k<A.length;k++)T+=A[k];const y=v.morphTargetsRelative?1:1-T;b.getUniforms().setValue(e,"morphTargetBaseInfluence",y),b.getUniforms().setValue(e,"morphTargetInfluences",A)}b.getUniforms().setValue(e,"morphTargetsTexture",h.texture,t),b.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return a(s,"update"),{update:s}}a(xc,"WebGLMorphtargets");function Tc(e,n,t,i,c){let s=new WeakMap;function u(A){const V=c.render.frame,N=A.geometry,h=n.get(A,N);if(s.get(h)!==V&&(n.update(h),s.set(h,V)),A.isInstancedMesh&&(A.hasEventListener("dispose",b)===!1&&A.addEventListener("dispose",b),s.get(A)!==V&&(t.update(A.instanceMatrix,e.ARRAY_BUFFER),A.instanceColor!==null&&t.update(A.instanceColor,e.ARRAY_BUFFER),s.set(A,V))),A.isSkinnedMesh){const T=A.skeleton;s.get(T)!==V&&(T.update(),s.set(T,V))}return h}a(u,"update");function v(){s=new WeakMap}a(v,"dispose");function b(A){const V=A.target;V.removeEventListener("dispose",b),i.releaseStatesOfObject(V),t.remove(V.instanceMatrix),V.instanceColor!==null&&t.remove(V.instanceColor)}return a(b,"onInstancedMeshDispose"),{update:u,dispose:v}}a(Tc,"WebGLObjects");const Ac={[ii]:"LINEAR_TONE_MAPPING",[ni]:"REINHARD_TONE_MAPPING",[ti]:"CINEON_TONE_MAPPING",[ei]:"ACES_FILMIC_TONE_MAPPING",[jn]:"AGX_TONE_MAPPING",[Jn]:"NEUTRAL_TONE_MAPPING",[Qn]:"CUSTOM_TONE_MAPPING"};function Rc(e,n,t,i,c,s){const u=new xt(n,t,{type:e,depthBuffer:c,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let v=null,b=null;const A=new cn;A.setAttribute("position",new $n([-1,3,0,-1,-1,0,3,-1,0],3)),A.setAttribute("uv",new $n([0,2,0,0,2,0],2));const V=new Ar({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),N=new Lt(A,V),h=new Kn(-1,1,1,-1,0,1);let T=null,y=null,k=!1,d,l=null,U=[],X=!1;this.setSize=function(m,E){u.setSize(m,E),v!==null&&v.setSize(m,E),b!==null&&b.setSize(m,E);for(let _=0;_<U.length;_++){const w=U[_];w.setSize&&w.setSize(m,E)}},this.setEffects=function(m){U=m,X=U.length>0&&U[0].isRenderPass===!0;const E=u.width,_=u.height;U.length>0&&v===null&&(v=new xt(E,_,{type:Dt,depthBuffer:!1,stencilBuffer:!1}),b=new xt(E,_,{type:Dt,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<U.length;w++){const f=U[w];f.setSize&&f.setSize(E,_)}},this.begin=function(m,E){if(k||m.toneMapping===Rt&&U.length===0)return!1;if(l=E,E!==null){const _=E.width,w=E.height;(u.width!==_||u.height!==w)&&this.setSize(_,w)}return X===!1&&m.setRenderTarget(u),d=m.toneMapping,m.toneMapping=Rt,!0},this.hasRenderPass=function(){return X},this.end=function(m,E){m.toneMapping=d,k=!0;let _=u,w=v;for(let f=0;f<U.length;f++){const g=U[f];g.enabled!==!1&&(g.render(m,w,_,E),g.needsSwap!==!1&&(_=w,w=w===v?b:v))}if(T!==m.outputColorSpace||y!==m.toneMapping){T=m.outputColorSpace,y=m.toneMapping,V.defines={},nt.getTransfer(T)===qe&&(V.defines.SRGB_TRANSFER="");const f=Ac[y];f&&(V.defines[f]=""),V.needsUpdate=!0}V.uniforms.tDiffuse.value=_.texture,m.setRenderTarget(l),m.render(N,h),l=null,k=!1},this.isCompositing=function(){return k},this.dispose=function(){u.dispose(),v!==null&&v.dispose(),b!==null&&b.dispose(),A.dispose(),V.dispose()}}a(Rc,"WebGLOutput");const Va=new br,ir=new dn(1,1),Wa=new Zn,ka=new Rr,za=new qn,Xa=[],Ka=[],Ya=new Float32Array(16),qa=new Float32Array(9),Za=new Float32Array(4);function sn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const c=n*t;let s=Xa[c];if(s===void 0&&(s=new Float32Array(c),Xa[c]=s),n!==0){i.toArray(s,0);for(let u=1,v=0;u!==n;++u)v+=t,e[u].toArray(s,v)}return s}a(sn,"flatten");function ct(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}a(ct,"arraysEqual");function ft(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}a(ft,"copyArray");function Bn(e,n){let t=Ka[n];t===void 0&&(t=new Int32Array(n),Ka[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}a(Bn,"allocTexUnits");function bc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}a(bc,"setValueV1f");function Cc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ct(t,n))return;e.uniform2fv(this.addr,n),ft(t,n)}}a(Cc,"setValueV2f");function Pc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(ct(t,n))return;e.uniform3fv(this.addr,n),ft(t,n)}}a(Pc,"setValueV3f");function Lc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ct(t,n))return;e.uniform4fv(this.addr,n),ft(t,n)}}a(Lc,"setValueV4f");function Uc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ct(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ft(t,n)}else{if(ct(t,i))return;Za.set(i),e.uniformMatrix2fv(this.addr,!1,Za),ft(t,i)}}a(Uc,"setValueM2");function Dc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ct(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ft(t,n)}else{if(ct(t,i))return;qa.set(i),e.uniformMatrix3fv(this.addr,!1,qa),ft(t,i)}}a(Dc,"setValueM3");function wc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ct(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ft(t,n)}else{if(ct(t,i))return;Ya.set(i),e.uniformMatrix4fv(this.addr,!1,Ya),ft(t,i)}}a(wc,"setValueM4");function Ic(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}a(Ic,"setValueV1i");function Nc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ct(t,n))return;e.uniform2iv(this.addr,n),ft(t,n)}}a(Nc,"setValueV2i");function yc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ct(t,n))return;e.uniform3iv(this.addr,n),ft(t,n)}}a(yc,"setValueV3i");function Fc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ct(t,n))return;e.uniform4iv(this.addr,n),ft(t,n)}}a(Fc,"setValueV4i");function Oc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}a(Oc,"setValueV1ui");function Bc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ct(t,n))return;e.uniform2uiv(this.addr,n),ft(t,n)}}a(Bc,"setValueV2ui");function Gc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ct(t,n))return;e.uniform3uiv(this.addr,n),ft(t,n)}}a(Gc,"setValueV3ui");function Hc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ct(t,n))return;e.uniform4uiv(this.addr,n),ft(t,n)}}a(Hc,"setValueV4ui");function Vc(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c);let s;this.type===e.SAMPLER_2D_SHADOW?(ir.compareFunction=t.isReversedDepthBuffer()?Rn:bn,s=ir):s=Va,t.setTexture2D(n||s,c)}a(Vc,"setValueT1");function Wc(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTexture3D(n||ka,c)}a(Wc,"setValueT3D1");function kc(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTextureCube(n||za,c)}a(kc,"setValueT6");function zc(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTexture2DArray(n||Wa,c)}a(zc,"setValueT2DArray1");function Xc(e){switch(e){case 5126:return bc;case 35664:return Cc;case 35665:return Pc;case 35666:return Lc;case 35674:return Uc;case 35675:return Dc;case 35676:return wc;case 5124:case 35670:return Ic;case 35667:case 35671:return Nc;case 35668:case 35672:return yc;case 35669:case 35673:return Fc;case 5125:return Oc;case 36294:return Bc;case 36295:return Gc;case 36296:return Hc;case 35678:case 36198:case 36298:case 36306:case 35682:return Vc;case 35679:case 36299:case 36307:return Wc;case 35680:case 36300:case 36308:case 36293:return kc;case 36289:case 36303:case 36311:case 36292:return zc}}a(Xc,"getSingularSetter");function Kc(e,n){e.uniform1fv(this.addr,n)}a(Kc,"setValueV1fArray");function Yc(e,n){const t=sn(n,this.size,2);e.uniform2fv(this.addr,t)}a(Yc,"setValueV2fArray");function qc(e,n){const t=sn(n,this.size,3);e.uniform3fv(this.addr,t)}a(qc,"setValueV3fArray");function Zc(e,n){const t=sn(n,this.size,4);e.uniform4fv(this.addr,t)}a(Zc,"setValueV4fArray");function $c(e,n){const t=sn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}a($c,"setValueM2Array");function Qc(e,n){const t=sn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}a(Qc,"setValueM3Array");function Jc(e,n){const t=sn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}a(Jc,"setValueM4Array");function jc(e,n){e.uniform1iv(this.addr,n)}a(jc,"setValueV1iArray");function ef(e,n){e.uniform2iv(this.addr,n)}a(ef,"setValueV2iArray");function tf(e,n){e.uniform3iv(this.addr,n)}a(tf,"setValueV3iArray");function nf(e,n){e.uniform4iv(this.addr,n)}a(nf,"setValueV4iArray");function rf(e,n){e.uniform1uiv(this.addr,n)}a(rf,"setValueV1uiArray");function af(e,n){e.uniform2uiv(this.addr,n)}a(af,"setValueV2uiArray");function of(e,n){e.uniform3uiv(this.addr,n)}a(of,"setValueV3uiArray");function sf(e,n){e.uniform4uiv(this.addr,n)}a(sf,"setValueV4uiArray");function lf(e,n,t){const i=this.cache,c=n.length,s=Bn(t,c);ct(i,s)||(e.uniform1iv(this.addr,s),ft(i,s));let u;this.type===e.SAMPLER_2D_SHADOW?u=ir:u=Va;for(let v=0;v!==c;++v)t.setTexture2D(n[v]||u,s[v])}a(lf,"setValueT1Array");function cf(e,n,t){const i=this.cache,c=n.length,s=Bn(t,c);ct(i,s)||(e.uniform1iv(this.addr,s),ft(i,s));for(let u=0;u!==c;++u)t.setTexture3D(n[u]||ka,s[u])}a(cf,"setValueT3DArray");function ff(e,n,t){const i=this.cache,c=n.length,s=Bn(t,c);ct(i,s)||(e.uniform1iv(this.addr,s),ft(i,s));for(let u=0;u!==c;++u)t.setTextureCube(n[u]||za,s[u])}a(ff,"setValueT6Array");function df(e,n,t){const i=this.cache,c=n.length,s=Bn(t,c);ct(i,s)||(e.uniform1iv(this.addr,s),ft(i,s));for(let u=0;u!==c;++u)t.setTexture2DArray(n[u]||Wa,s[u])}a(df,"setValueT2DArrayArray");function uf(e){switch(e){case 5126:return Kc;case 35664:return Yc;case 35665:return qc;case 35666:return Zc;case 35674:return $c;case 35675:return Qc;case 35676:return Jc;case 5124:case 35670:return jc;case 35667:case 35671:return ef;case 35668:case 35672:return tf;case 35669:case 35673:return nf;case 5125:return rf;case 36294:return af;case 36295:return of;case 36296:return sf;case 35678:case 36198:case 36298:case 36306:case 35682:return lf;case 35679:case 36299:case 36307:return cf;case 35680:case 36300:case 36308:case 36293:return ff;case 36289:case 36303:case 36311:case 36292:return df}}a(uf,"getPureArraySetter");class pf{static{a(this,"SingleUniform")}constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Xc(t.type)}}class hf{static{a(this,"PureArrayUniform")}constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uf(t.type)}}class mf{static{a(this,"StructuredUniform")}constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const c=this.seq;for(let s=0,u=c.length;s!==u;++s){const v=c[s];v.setValue(n,t[v.id],i)}}}const rr=/(\w+)(\])?(\[|\.)?/g;function $a(e,n){e.seq.push(n),e.map[n.id]=n}a($a,"addUniform");function _f(e,n,t){const i=e.name,c=i.length;for(rr.lastIndex=0;;){const s=rr.exec(i),u=rr.lastIndex;let v=s[1];const b=s[2]==="]",A=s[3];if(b&&(v=v|0),A===void 0||A==="["&&u+2===c){$a(t,A===void 0?new pf(v,e,n):new hf(v,e,n));break}else{let N=t.map[v];N===void 0&&(N=new mf(v),$a(t,N)),t=N}}}a(_f,"parseUniform");class Gn{static{a(this,"WebGLUniforms")}constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let u=0;u<i;++u){const v=n.getActiveUniform(t,u),b=n.getUniformLocation(t,v.name);_f(v,b,this)}const c=[],s=[];for(const u of this.seq)u.type===n.SAMPLER_2D_SHADOW||u.type===n.SAMPLER_CUBE_SHADOW||u.type===n.SAMPLER_2D_ARRAY_SHADOW?c.push(u):s.push(u);c.length>0&&(this.seq=c.concat(s))}setValue(n,t,i,c){const s=this.map[t];s!==void 0&&s.setValue(n,i,c)}setOptional(n,t,i){const c=t[i];c!==void 0&&this.setValue(n,i,c)}static upload(n,t,i,c){for(let s=0,u=t.length;s!==u;++s){const v=t[s],b=i[v.id];b.needsUpdate!==!1&&v.setValue(n,b.value,c)}}static seqWithValue(n,t){const i=[];for(let c=0,s=n.length;c!==s;++c){const u=n[c];u.id in t&&i.push(u)}return i}}function Qa(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}a(Qa,"WebGLShader");const gf=37297;let vf=0;function Sf(e,n){const t=e.split(`
`),i=[],c=Math.max(n-6,0),s=Math.min(n+6,t.length);for(let u=c;u<s;u++){const v=u+1;i.push(`${v===n?">":" "} ${v}: ${t[u]}`)}return i.join(`
`)}a(Sf,"handleSource");const Ja=new Fe;function Ef(e){nt._getMatrix(Ja,nt.workingColorSpace,e);const n=`mat3( ${Ja.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(e)){case ai:return[n,"LinearTransferOETF"];case qe:return[n,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}a(Ef,"getEncodingComponents");function ja(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),s=(e.getShaderInfoLog(n)||"").trim();if(i&&s==="")return"";const u=/ERROR: 0:(\d+)/.exec(s);if(u){const v=parseInt(u[1]);return t.toUpperCase()+`

`+s+`

`+Sf(e.getShaderSource(n),v)}else return s}a(ja,"getShaderErrors");function Mf(e,n){const t=Ef(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}a(Mf,"getTexelEncodingFunction");const xf={[ii]:"Linear",[ni]:"Reinhard",[ti]:"Cineon",[ei]:"ACESFilmic",[jn]:"AgX",[Jn]:"Neutral",[Qn]:"Custom"};function Tf(e,n){const t=xf[n];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}a(Tf,"getToneMappingFunction");const Hn=new ye;function Af(){nt.getLuminanceCoefficients(Hn);const e=Hn.x.toFixed(4),n=Hn.y.toFixed(4),t=Hn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}a(Af,"getLuminanceFunction");function Rf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gn).join(`
`)}a(Rf,"generateVertexExtensions");function bf(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}a(bf,"generateDefines");function Cf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let c=0;c<i;c++){const s=e.getActiveAttrib(n,c),u=s.name;let v=1;s.type===e.FLOAT_MAT2&&(v=2),s.type===e.FLOAT_MAT3&&(v=3),s.type===e.FLOAT_MAT4&&(v=4),t[u]={type:s.type,location:e.getAttribLocation(n,u),locationSize:v}}return t}a(Cf,"fetchAttributeLocations");function gn(e){return e!==""}a(gn,"filterEmptyLine");function eo(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,n.numSunLights).replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,n.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}a(eo,"replaceLightNums");function to(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}a(to,"replaceClippingPlaneNums");const Pf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ar(e){return e.replace(Pf,Uf)}a(ar,"resolveIncludes");const Lf=new Map;function Uf(e,n){let t=Le[n];if(t===void 0){const i=Lf.get(n);if(i!==void 0)t=Le[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+n+">")}return ar(t)}a(Uf,"includeReplacer");const Df=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function no(e){return e.replace(Df,wf)}a(no,"unrollLoops");function wf(e,n,t,i){let c="";for(let s=parseInt(n);s<parseInt(t);s++)c+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return c}a(wf,"loopReplacer");function io(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}a(io,"generatePrecision");const If={[un]:"SHADOWMAP_TYPE_PCF",[tn]:"SHADOWMAP_TYPE_VSM"};function Nf(e){return If[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}a(Nf,"generateShadowMapTypeDefine");const yf={[en]:"ENVMAP_TYPE_CUBE",[zt]:"ENVMAP_TYPE_CUBE",[ln]:"ENVMAP_TYPE_CUBE_UV"};function Ff(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":yf[e.envMapMode]||"ENVMAP_TYPE_CUBE"}a(Ff,"generateEnvMapTypeDefine");const Of={[zt]:"ENVMAP_MODE_REFRACTION"};function Bf(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Of[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}a(Bf,"generateEnvMapModeDefine");const Gf={[Lr]:"ENVMAP_BLENDING_MULTIPLY",[Pr]:"ENVMAP_BLENDING_MIX",[Cr]:"ENVMAP_BLENDING_ADD"};function Hf(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Gf[e.combine]||"ENVMAP_BLENDING_NONE"}a(Hf,"generateEnvMapBlendingDefine");function Vf(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}a(Vf,"generateCubeUVSize");function Wf(e,n,t,i){const c=e.getContext(),s=t.defines;let u=t.vertexShader,v=t.fragmentShader;const b=Nf(t),A=Ff(t),V=Bf(t),N=Hf(t),h=Vf(t),T=Rf(t),y=bf(s),k=c.createProgram();let d,l,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(gn).join(`
`),d.length>0&&(d+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(gn).join(`
`),l.length>0&&(l+=`
`)):(d=[io(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+V:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+b:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gn).join(`
`),l=[io(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+A:"",t.envMap?"#define "+V:"",t.envMap?"#define "+N:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+b:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rt?"#define TONE_MAPPING":"",t.toneMapping!==Rt?Le.tonemapping_pars_fragment:"",t.toneMapping!==Rt?Tf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,Mf("linearToOutputTexel",t.outputColorSpace),Af(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gn).join(`
`)),u=ar(u),u=eo(u,t),u=to(u,t),v=ar(v),v=eo(v,t),v=to(v,t),u=no(u),v=no(v),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,d=[T,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,l=["#define varying in",t.glslVersion===ri?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ri?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const X=U+d+u,m=U+l+v,E=Qa(c,c.VERTEX_SHADER,X),_=Qa(c,c.FRAGMENT_SHADER,m);c.attachShader(k,E),c.attachShader(k,_),t.index0AttributeName!==void 0?c.bindAttribLocation(k,0,t.index0AttributeName):t.hasPositionAttribute===!0&&c.bindAttribLocation(k,0,"position"),c.linkProgram(k);function w(O){if(e.debug.checkShaderErrors){const H=c.getProgramInfoLog(k)||"",Z=c.getShaderInfoLog(E)||"",L=c.getShaderInfoLog(_)||"",Y=H.trim(),J=Z.trim(),q=L.trim();let ie=!0,$=!0;if(c.getProgramParameter(k,c.LINK_STATUS)===!1)if(ie=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(c,k,E,_);else{const ee=ja(c,E,"vertex"),te=ja(c,_,"fragment");Je("WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(k,c.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+Y+`
`+ee+`
`+te)}else Y!==""?We("WebGLProgram: Program Info Log:",Y):(J===""||q==="")&&($=!1);$&&(O.diagnostics={runnable:ie,programLog:Y,vertexShader:{log:J,prefix:d},fragmentShader:{log:q,prefix:l}})}c.deleteShader(E),c.deleteShader(_),f=new Gn(c,k),g=Cf(c,k)}a(w,"onFirstUse");let f;this.getUniforms=function(){return f===void 0&&w(this),f};let g;this.getAttributes=function(){return g===void 0&&w(this),g};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=c.getProgramParameter(k,gf)),I},this.destroy=function(){i.releaseStatesOfProgram(this),c.deleteProgram(k),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vf++,this.cacheKey=n,this.usedTimes=1,this.program=k,this.vertexShader=E,this.fragmentShader=_,this}a(Wf,"WebGLProgram");let kf=0;class zf{static{a(this,"WebGLShaderCache")}constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n,t,i){const c=this._getShaderCacheForMaterial(n);return c.has(t)===!1&&(c.add(t),t.usedTimes++),c.has(i)===!1&&(c.add(i),i.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderStage(n){return this._getShaderStage(n.vertexShader)}getFragmentShaderStage(n){return this._getShaderStage(n.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new Xf(n),t.set(n,i)),i}}class Xf{static{a(this,"WebGLShaderStage")}constructor(n){this.id=kf++,this.code=n,this.usedTimes=0}}function Kf(e){return e===Kt||e===Cn||e===Pn}a(Kf,"isPackedRGFormat");function Yf(e,n,t,i,c,s){const u=new wr,v=new zf,b=new Set,A=[],V=new Map,N=i.logarithmicDepthBuffer;let h=i.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(f){return b.add(f),f===0?"uv":`uv${f}`}a(y,"getChannel");function k(f,g,I,O,H,Z){const L=O.fog,Y=H.geometry,J=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?O.environment:null,q=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,ie=n.get(f.envMap||J,q),$=ie&&ie.mapping===ln?ie.image.height:null,ee=T[f.type];f.precision!==null&&(h=i.getMaxPrecision(f.precision),h!==f.precision&&We("WebGLProgram.getParameters:",f.precision,"not supported, using",h,"instead."));const te=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ce=te!==void 0?te.length:0;let be=0;Y.morphAttributes.position!==void 0&&(be=1),Y.morphAttributes.normal!==void 0&&(be=2),Y.morphAttributes.color!==void 0&&(be=3);let rt,ze,Xe,W;if(ee){const $e=bt[ee];rt=$e.vertexShader,ze=$e.fragmentShader}else{rt=f.vertexShader,ze=f.fragmentShader;const $e=v.getVertexShaderStage(f),He=v.getFragmentShaderStage(f);v.update(f,$e,He),Xe=$e.id,W=He.id}const Q=e.getRenderTarget(),Me=e.state.buffers.depth.getReversed(),De=H.isInstancedMesh===!0,_e=H.isBatchedMesh===!0,Oe=!!f.map,lt=!!f.matcap,we=!!ie,Ge=!!f.aoMap,Ze=!!f.lightMap,Ne=!!f.bumpMap&&f.wireframe===!1,tt=!!f.normalMap,dt=!!f.displacementMap,gt=!!f.emissiveMap,it=!!f.metalnessMap,ot=!!f.roughnessMap,x=f.anisotropy>0,ut=f.clearcoat>0,ke=f.dispersion>0,p=f.retroreflectivity>0,r=f.iridescence>0,R=f.sheen>0,D=f.transmission>0,B=x&&!!f.anisotropyMap,ne=ut&&!!f.clearcoatMap,re=ut&&!!f.clearcoatNormalMap,G=ut&&!!f.clearcoatRoughnessMap,K=r&&!!f.iridescenceMap,ae=r&&!!f.iridescenceThicknessMap,xe=R&&!!f.sheenColorMap,fe=R&&!!f.sheenRoughnessMap,oe=!!f.specularMap,Te=!!f.specularColorMap,Re=!!f.specularIntensityMap,Pe=D&&!!f.transmissionMap,M=D&&!!f.thicknessMap,se=!!f.gradientMap,z=!!f.alphaMap,le=f.alphaTest>0,pe=!!f.alphaHash,j=!!f.extensions;let Ae=Rt;f.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ae=e.toneMapping);const Se={shaderID:ee,shaderType:f.type,shaderName:f.name,vertexShader:rt,fragmentShader:ze,defines:f.defines,customVertexShaderID:Xe,customFragmentShaderID:W,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:h,batching:_e,batchingColor:_e&&H._colorsTexture!==null,instancing:De,instancingColor:De&&H.instanceColor!==null,instancingMorph:De&&H.morphTexture!==null,outputColorSpace:Q===null?e.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!f.alphaToCoverage,map:Oe,matcap:lt,envMap:we,envMapMode:we&&ie.mapping,envMapCubeUVHeight:$,aoMap:Ge,lightMap:Ze,bumpMap:Ne,normalMap:tt,displacementMap:dt,emissiveMap:gt,normalMapObjectSpace:tt&&f.normalMapType===Dr,normalMapTangentSpace:tt&&f.normalMapType===oi,packedNormalMap:tt&&f.normalMapType===oi&&Kf(f.normalMap.format),metalnessMap:it,roughnessMap:ot,anisotropy:x,anisotropyMap:B,clearcoat:ut,clearcoatMap:ne,clearcoatNormalMap:re,clearcoatRoughnessMap:G,dispersion:ke,retroreflection:p,iridescence:r,iridescenceMap:K,iridescenceThicknessMap:ae,sheen:R,sheenColorMap:xe,sheenRoughnessMap:fe,specularMap:oe,specularColorMap:Te,specularIntensityMap:Re,transmission:D,transmissionMap:Pe,thicknessMap:M,gradientMap:se,opaque:f.transparent===!1&&f.blending===pn&&f.alphaToCoverage===!1,alphaMap:z,alphaTest:le,alphaHash:pe,combine:f.combine,mapUv:Oe&&y(f.map.channel),aoMapUv:Ge&&y(f.aoMap.channel),lightMapUv:Ze&&y(f.lightMap.channel),bumpMapUv:Ne&&y(f.bumpMap.channel),normalMapUv:tt&&y(f.normalMap.channel),displacementMapUv:dt&&y(f.displacementMap.channel),emissiveMapUv:gt&&y(f.emissiveMap.channel),metalnessMapUv:it&&y(f.metalnessMap.channel),roughnessMapUv:ot&&y(f.roughnessMap.channel),anisotropyMapUv:B&&y(f.anisotropyMap.channel),clearcoatMapUv:ne&&y(f.clearcoatMap.channel),clearcoatNormalMapUv:re&&y(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&y(f.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&y(f.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&y(f.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&y(f.sheenColorMap.channel),sheenRoughnessMapUv:fe&&y(f.sheenRoughnessMap.channel),specularMapUv:oe&&y(f.specularMap.channel),specularColorMapUv:Te&&y(f.specularColorMap.channel),specularIntensityMapUv:Re&&y(f.specularIntensityMap.channel),transmissionMapUv:Pe&&y(f.transmissionMap.channel),thicknessMapUv:M&&y(f.thicknessMap.channel),alphaMapUv:z&&y(f.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(tt||x),vertexNormals:!!Y.attributes.normal,vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Y.attributes.uv&&(Oe||z),fog:!!L,useFog:f.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||Y.attributes.normal===void 0&&tt===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:N,reversedDepthBuffer:Me,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:be,numSunLights:g.sun.length,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numSunLightShadows:g.sunShadowMap.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:f.dithering,shadowMapEnabled:e.shadowMap.enabled&&I.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Oe&&f.map.isVideoTexture===!0&&nt.getTransfer(f.map.colorSpace)===qe,decodeVideoTextureEmissive:gt&&f.emissiveMap.isVideoTexture===!0&&nt.getTransfer(f.emissiveMap.colorSpace)===qe,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===Nt,flipSided:f.side===St,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:j&&f.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(j&&f.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Se.vertexUv1s=b.has(1),Se.vertexUv2s=b.has(2),Se.vertexUv3s=b.has(3),b.clear(),Se}a(k,"getParameters");function d(f){const g=[];if(f.shaderID?g.push(f.shaderID):(g.push(f.customVertexShaderID),g.push(f.customFragmentShaderID)),f.defines!==void 0)for(const I in f.defines)g.push(I),g.push(f.defines[I]);return f.isRawShaderMaterial===!1&&(l(g,f),U(g,f),g.push(e.outputColorSpace)),g.push(f.customProgramCacheKey),g.join()}a(d,"getProgramCacheKey");function l(f,g){f.push(g.precision),f.push(g.outputColorSpace),f.push(g.envMapMode),f.push(g.envMapCubeUVHeight),f.push(g.mapUv),f.push(g.alphaMapUv),f.push(g.lightMapUv),f.push(g.aoMapUv),f.push(g.bumpMapUv),f.push(g.normalMapUv),f.push(g.displacementMapUv),f.push(g.emissiveMapUv),f.push(g.metalnessMapUv),f.push(g.roughnessMapUv),f.push(g.anisotropyMapUv),f.push(g.clearcoatMapUv),f.push(g.clearcoatNormalMapUv),f.push(g.clearcoatRoughnessMapUv),f.push(g.iridescenceMapUv),f.push(g.iridescenceThicknessMapUv),f.push(g.sheenColorMapUv),f.push(g.sheenRoughnessMapUv),f.push(g.specularMapUv),f.push(g.specularColorMapUv),f.push(g.specularIntensityMapUv),f.push(g.transmissionMapUv),f.push(g.thicknessMapUv),f.push(g.combine),f.push(g.fogExp2),f.push(g.sizeAttenuation),f.push(g.morphTargetsCount),f.push(g.morphAttributeCount),f.push(g.numSunLights),f.push(g.numDirLights),f.push(g.numPointLights),f.push(g.numSpotLights),f.push(g.numSpotLightMaps),f.push(g.numHemiLights),f.push(g.numRectAreaLights),f.push(g.numSunLightShadows),f.push(g.numDirLightShadows),f.push(g.numPointLightShadows),f.push(g.numSpotLightShadows),f.push(g.numSpotLightShadowsWithMaps),f.push(g.numLightProbes),f.push(g.shadowMapType),f.push(g.toneMapping),f.push(g.numClippingPlanes),f.push(g.numClipIntersection),f.push(g.depthPacking)}a(l,"getProgramCacheKeyParameters");function U(f,g){u.disableAll(),g.instancing&&u.enable(0),g.instancingColor&&u.enable(1),g.instancingMorph&&u.enable(2),g.matcap&&u.enable(3),g.envMap&&u.enable(4),g.normalMapObjectSpace&&u.enable(5),g.normalMapTangentSpace&&u.enable(6),g.clearcoat&&u.enable(7),g.iridescence&&u.enable(8),g.alphaTest&&u.enable(9),g.vertexColors&&u.enable(10),g.vertexAlphas&&u.enable(11),g.vertexUv1s&&u.enable(12),g.vertexUv2s&&u.enable(13),g.vertexUv3s&&u.enable(14),g.vertexTangents&&u.enable(15),g.anisotropy&&u.enable(16),g.alphaHash&&u.enable(17),g.batching&&u.enable(18),g.dispersion&&u.enable(19),g.retroreflection&&u.enable(24),g.batchingColor&&u.enable(20),g.gradientMap&&u.enable(21),g.packedNormalMap&&u.enable(22),g.vertexNormals&&u.enable(23),f.push(u.mask),u.disableAll(),g.fog&&u.enable(0),g.useFog&&u.enable(1),g.flatShading&&u.enable(2),g.logarithmicDepthBuffer&&u.enable(3),g.reversedDepthBuffer&&u.enable(4),g.skinning&&u.enable(5),g.morphTargets&&u.enable(6),g.morphNormals&&u.enable(7),g.morphColors&&u.enable(8),g.premultipliedAlpha&&u.enable(9),g.shadowMapEnabled&&u.enable(10),g.doubleSided&&u.enable(11),g.flipSided&&u.enable(12),g.useDepthPacking&&u.enable(13),g.dithering&&u.enable(14),g.transmission&&u.enable(15),g.sheen&&u.enable(16),g.opaque&&u.enable(17),g.pointsUvs&&u.enable(18),g.decodeVideoTexture&&u.enable(19),g.decodeVideoTextureEmissive&&u.enable(20),g.alphaToCoverage&&u.enable(21),g.numLightProbeGrids>0&&u.enable(22),g.hasPositionAttribute&&u.enable(23),f.push(u.mask)}a(U,"getProgramCacheKeyBooleans");function X(f){const g=T[f.type];let I;if(g){const O=bt[g];I=Ur.clone(O.uniforms)}else I=f.uniforms;return I}a(X,"getUniforms");function m(f,g){let I=V.get(g);return I!==void 0?++I.usedTimes:(I=new Wf(e,g,f,c),A.push(I),V.set(g,I)),I}a(m,"acquireProgram");function E(f){if(--f.usedTimes===0){const g=A.indexOf(f);A[g]=A[A.length-1],A.pop(),V.delete(f.cacheKey),f.destroy()}}a(E,"releaseProgram");function _(f){v.remove(f)}a(_,"releaseShaderCache");function w(){v.dispose()}return a(w,"dispose"),{getParameters:k,getProgramCacheKey:d,getUniforms:X,acquireProgram:m,releaseProgram:E,releaseShaderCache:_,programs:A,dispose:w}}a(Yf,"WebGLPrograms");function qf(){let e=new WeakMap;function n(u){return e.has(u)}a(n,"has");function t(u){let v=e.get(u);return v===void 0&&(v={},e.set(u,v)),v}a(t,"get");function i(u){e.delete(u)}a(i,"remove");function c(u,v,b){e.get(u)[v]=b}a(c,"update");function s(){e=new WeakMap}return a(s,"dispose"),{has:n,get:t,remove:i,update:c,dispose:s}}a(qf,"WebGLProperties");function Zf(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.materialVariant!==n.materialVariant?e.materialVariant-n.materialVariant:e.z!==n.z?e.z-n.z:e.id-n.id}a(Zf,"painterSortStable");function ro(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}a(ro,"reversePainterSortStable");function ao(){const e=[];let n=0;const t=[],i=[],c=[];function s(){n=0,t.length=0,i.length=0,c.length=0}a(s,"init");function u(h){let T=0;return h.isInstancedMesh&&(T+=2),h.isSkinnedMesh&&(T+=1),T}a(u,"materialVariant");function v(h,T,y,k,d,l){let U=e[n];return U===void 0?(U={id:h.id,object:h,geometry:T,material:y,materialVariant:u(h),groupOrder:k,renderOrder:h.renderOrder,z:d,group:l},e[n]=U):(U.id=h.id,U.object=h,U.geometry=T,U.material=y,U.materialVariant=u(h),U.groupOrder=k,U.renderOrder=h.renderOrder,U.z=d,U.group=l),n++,U}a(v,"getNextRenderItem");function b(h,T,y,k,d,l,U){U.reversedDepth===!0&&(d=-d);const X=v(h,T,y,k,d,l);y.transmission>0?i.push(X):y.transparent===!0?c.push(X):t.push(X)}a(b,"push");function A(h,T,y,k,d,l){const U=v(h,T,y,k,d,l);y.transmission>0?i.unshift(U):y.transparent===!0?c.unshift(U):t.unshift(U)}a(A,"unshift");function V(h,T){t.length>1&&t.sort(h||Zf),i.length>1&&i.sort(T||ro),c.length>1&&c.sort(T||ro)}a(V,"sort");function N(){for(let h=n,T=e.length;h<T;h++){const y=e[h];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return a(N,"finish"),{opaque:t,transmissive:i,transparent:c,init:s,push:b,unshift:A,finish:N,sort:V}}a(ao,"WebGLRenderList");function $f(){let e=new WeakMap;function n(i,c){const s=e.get(i);let u;return s===void 0?(u=new ao,e.set(i,[u])):c>=s.length?(u=new ao,s.push(u)):u=s[c],u}a(n,"get");function t(){e=new WeakMap}return a(t,"dispose"),{get:n,dispose:t}}a($f,"WebGLRenderLists");function Qf(){const e={};return{get:a(function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"SunLight":case"DirectionalLight":t={direction:new ye,color:new et};break;case"SpotLight":t={position:new ye,direction:new ye,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ye,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ye,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new ye,halfWidth:new ye,halfHeight:new ye};break}return e[n.id]=t,t},"get")}}a(Qf,"UniformsCache");function Jf(){const e={};return{get:a(function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t},"get")}}a(Jf,"ShadowUniformsCache");let jf=0;function ed(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}a(ed,"shadowCastingAndTexturingLightsFirst");function td(e){const n=new Qf,t=Jf(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let A=0;A<9;A++)i.probe.push(new ye);const c=new ye,s=new kt,u=new kt;function v(A){let V=0,N=0,h=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let T=0,y=0,k=0,d=0,l=0,U=0,X=0,m=0,E=0,_=0,w=0,f=0,g=0,I=0;A.sort(ed);for(let H=0,Z=A.length;H<Z;H++){const L=A[H],Y=L.color,J=L.intensity,q=L.distance;let ie=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Kt?ie=L.shadow.map.texture:ie=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)V+=Y.r*J,N+=Y.g*J,h+=Y.b*J;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],J);I++}else if(L.isSunLight){const $=n.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,te=t.get(L);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[y]=te,i.sunShadowMap[y]=ie;const Ce=ee.getViewportCount();for(let be=0;be<Ce;be++)i.sunShadowMatrix[k+be]=ee.getMatrix(be),i.sunShadowCascade[k+be]=ee._cascadeData[be];k+=Ce,y++}i.sun[T]=$,T++}else if(L.isDirectionalLight){const $=n.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,te=t.get(L);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,i.directionalShadow[d]=te,i.directionalShadowMap[d]=ie,i.directionalShadowMatrix[d]=L.shadow.matrix,E++}i.directional[d]=$,d++}else if(L.isSpotLight){const $=n.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(Y).multiplyScalar(J),$.distance=q,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[U]=$;const ee=L.shadow;if(L.map&&(i.spotLightMap[f]=L.map,f++,ee.updateMatrices(L),L.castShadow&&g++),i.spotLightMatrix[U]=ee.matrix,L.castShadow){const te=t.get(L);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,i.spotShadow[U]=te,i.spotShadowMap[U]=ie,w++}U++}else if(L.isRectAreaLight){const $=n.get(L);$.color.copy(Y).multiplyScalar(J),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[X]=$,X++}else if(L.isPointLight){const $=n.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){const ee=L.shadow,te=t.get(L);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,te.shadowCameraNear=ee.camera.near,te.shadowCameraFar=ee.camera.far,i.pointShadow[l]=te,i.pointShadowMap[l]=ie,i.pointShadowMatrix[l]=L.shadow.matrix,_++}i.point[l]=$,l++}else if(L.isHemisphereLight){const $=n.get(L);$.skyColor.copy(L.color).multiplyScalar(J),$.groundColor.copy(L.groundColor).multiplyScalar(J),i.hemi[m]=$,m++}}X>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=V,i.ambient[1]=N,i.ambient[2]=h;const O=i.hash;(O.sunLength!==T||O.directionalLength!==d||O.pointLength!==l||O.spotLength!==U||O.rectAreaLength!==X||O.hemiLength!==m||O.numSunShadows!==y||O.numDirectionalShadows!==E||O.numPointShadows!==_||O.numSpotShadows!==w||O.numSpotMaps!==f||O.numLightProbes!==I)&&(i.sun.length=T,i.directional.length=d,i.spot.length=U,i.rectArea.length=X,i.point.length=l,i.hemi.length=m,i.sunShadow.length=y,i.sunShadowMap.length=y,i.sunShadowMatrix.length=k,i.sunShadowCascade.length=k,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=_,i.pointShadowMap.length=_,i.pointShadowMatrix.length=_,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+f-g,i.spotLightMap.length=f,i.numSpotLightShadowsWithMaps=g,i.numLightProbes=I,O.sunLength=T,O.directionalLength=d,O.pointLength=l,O.spotLength=U,O.rectAreaLength=X,O.hemiLength=m,O.numSunShadows=y,O.numDirectionalShadows=E,O.numPointShadows=_,O.numSpotShadows=w,O.numSpotMaps=f,O.numLightProbes=I,i.version=jf++)}a(v,"setup");function b(A,V){let N=0,h=0,T=0,y=0,k=0,d=0;const l=V.matrixWorldInverse;for(let U=0,X=A.length;U<X;U++){const m=A[U];if(m.isSunLight){const E=i.sun[N];E.direction.setFromMatrixPosition(m.matrixWorld),E.direction.transformDirection(l),N++}else if(m.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(m.matrixWorld),c.setFromMatrixPosition(m.target.matrixWorld),E.direction.sub(c),E.direction.transformDirection(l),h++}else if(m.isSpotLight){const E=i.spot[y];E.position.setFromMatrixPosition(m.matrixWorld),E.position.applyMatrix4(l),E.direction.setFromMatrixPosition(m.matrixWorld),c.setFromMatrixPosition(m.target.matrixWorld),E.direction.sub(c),E.direction.transformDirection(l),y++}else if(m.isRectAreaLight){const E=i.rectArea[k];E.position.setFromMatrixPosition(m.matrixWorld),E.position.applyMatrix4(l),u.identity(),s.copy(m.matrixWorld),s.premultiply(l),u.extractRotation(s),E.halfWidth.set(m.width*.5,0,0),E.halfHeight.set(0,m.height*.5,0),E.halfWidth.applyMatrix4(u),E.halfHeight.applyMatrix4(u),k++}else if(m.isPointLight){const E=i.point[T];E.position.setFromMatrixPosition(m.matrixWorld),E.position.applyMatrix4(l),T++}else if(m.isHemisphereLight){const E=i.hemi[d];E.direction.setFromMatrixPosition(m.matrixWorld),E.direction.transformDirection(l),d++}}}return a(b,"setupView"),{setup:v,setupView:b,state:i}}a(td,"WebGLLights");function oo(e){const n=new td(e),t=[],i=[],c=[];function s(h){N.camera=h,t.length=0,i.length=0,c.length=0}a(s,"init");function u(h){t.push(h)}a(u,"pushLight");function v(h){i.push(h)}a(v,"pushShadow");function b(h){c.push(h)}a(b,"pushLightProbeGrid");function A(){n.setup(t)}a(A,"setupLights");function V(h){n.setupView(t,h)}a(V,"setupLightsView");const N={lightsArray:t,shadowsArray:i,lightProbeGridArray:c,camera:null,lights:n,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:N,setupLights:A,setupLightsView:V,pushLight:u,pushShadow:v,pushLightProbeGrid:b}}a(oo,"WebGLRenderState");function nd(e){let n=new WeakMap;function t(c,s=0){const u=n.get(c);let v;return u===void 0?(v=new oo(e),n.set(c,[v])):s>=u.length?(v=new oo(e),u.push(v)):v=u[s],v}a(t,"get");function i(){n=new WeakMap}return a(i,"dispose"),{get:t,dispose:i}}a(nd,"WebGLRenderStates");const id=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ad=[new ye(1,0,0),new ye(-1,0,0),new ye(0,1,0),new ye(0,-1,0),new ye(0,0,1),new ye(0,0,-1)],od=[new ye(0,-1,0),new ye(0,-1,0),new ye(0,0,1),new ye(0,0,-1),new ye(0,-1,0),new ye(0,-1,0)],so=new kt,vn=new ye,or=new ye;function sd(e,n,t){let i=new si;const c=new mt,s=new mt,u=new _t,v=new Ir,b=new Nr,A={},V=t.maxTextureSize,N={[jt]:St,[St]:jt,[Nt]:Nt},h=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:id,fragmentShader:rd}),T=h.clone();T.defines.HORIZONTAL_PASS=1;const y=new cn;y.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const k=new Lt(y,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=un;let l=this.type;this.render=function(_,w,f){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||_.length===0)return;this.type===yr&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=un);const g=e.getRenderTarget(),I=e.getActiveCubeFace(),O=e.getActiveMipmapLevel(),H=e.state;H.setBlending(It),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Z=l!==this.type;Z&&w.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(Y=>Y.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,Y=_.length;L<Y;L++){const J=_[L],q=J.shadow;if(q===void 0){We("WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;c.copy(q.mapSize);const ie=q.getFrameExtents();c.multiply(ie),s.copy(q.mapSize),(c.x>V||c.y>V)&&(c.x>V&&(s.x=Math.floor(V/ie.x),c.x=s.x*ie.x,q.mapSize.x=s.x),c.y>V&&(s.y=Math.floor(V/ie.y),c.y=s.y*ie.y,q.mapSize.y=s.y));const $=e.state.buffers.depth.getReversed();if(q.camera._reversedDepth=$,q.map===null||Z===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===tn){if(J.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new xt(c.x,c.y,{format:Kt,type:Dt,minFilter:Et,magFilter:Et,generateMipmaps:!1}),q.map.texture.name=J.name+".shadowMap",q.map.depthTexture=new dn(c.x,c.y,Ft),q.map.depthTexture.name=J.name+".shadowMapDepth",q.map.depthTexture.format=Yt,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ht,q.map.depthTexture.magFilter=Ht}else J.isPointLight?(q.map=new nr(c.x),q.map.depthTexture=new Fr(c.x,Vt)):(q.map=new xt(c.x,c.y),q.map.depthTexture=new dn(c.x,c.y,Vt)),q.map.depthTexture.name=J.name+".shadowMap",q.map.depthTexture.format=Yt,this.type===un?(q.map.depthTexture.compareFunction=$?Rn:bn,q.map.depthTexture.minFilter=Et,q.map.depthTexture.magFilter=Et):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ht,q.map.depthTexture.magFilter=Ht);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==c.x||q.map.height!==c.y)&&q.map.setSize(c.x,c.y);const ee=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();J.isPointLight!==!0&&q.updateMatrices(J,f);for(let te=0;te<ee;te++){const Ce=q.getCamera(te);if(J.isPointLight){const be=q.camera,rt=q.matrix,ze=J.distance||be.far;ze!==be.far&&(be.far=ze,be.updateProjectionMatrix()),vn.setFromMatrixPosition(J.matrixWorld),be.position.copy(vn),or.copy(be.position),or.add(ad[te]),be.up.copy(od[te]),be.lookAt(or),be.updateMatrixWorld(),rt.makeTranslation(-vn.x,-vn.y,-vn.z),so.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),q._frustum.setFromProjectionMatrix(so,be.coordinateSystem,be.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)e.setRenderTarget(q.map,te),e.clear();else{te===0&&(e.setRenderTarget(q.map),e.clear());const be=q.getViewport(te);u.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),H.viewport(u)}i=q.getFrustum(te),m(w,f,Ce,J,this.type)}q.isPointLightShadow!==!0&&this.type===tn&&U(q,f),q.needsUpdate=!1}l=this.type,d.needsUpdate=!1,e.setRenderTarget(g,I,O)};function U(_,w){const f=n.update(k);h.defines.VSM_SAMPLES!==_.blurSamples&&(h.defines.VSM_SAMPLES=_.blurSamples,T.defines.VSM_SAMPLES=_.blurSamples,h.needsUpdate=!0,T.needsUpdate=!0),_.mapPass===null?_.mapPass=new xt(c.x,c.y,{format:Kt,type:Dt}):(_.mapPass.width!==_.map.width||_.mapPass.height!==_.map.height)&&_.mapPass.setSize(_.map.width,_.map.height),h.uniforms.shadow_pass.value=_.map.depthTexture,h.uniforms.resolution.value.set(_.map.width,_.map.height),h.uniforms.radius.value=_.radius,e.setRenderTarget(_.mapPass),e.clear(),e.renderBufferDirect(w,null,f,h,k,null),T.uniforms.shadow_pass.value=_.mapPass.texture,T.uniforms.resolution.value.set(_.map.width,_.map.height),T.uniforms.radius.value=_.radius,e.setRenderTarget(_.map),e.clear(),e.renderBufferDirect(w,null,f,T,k,null)}a(U,"VSMPass");function X(_,w,f,g){let I=null;const O=f.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(O!==void 0)I=O;else if(I=f.isPointLight===!0?b:v,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const H=I.uuid,Z=w.uuid;let L=A[H];L===void 0&&(L={},A[H]=L);let Y=L[Z];Y===void 0&&(Y=I.clone(),L[Z]=Y,w.addEventListener("dispose",E)),I=Y}if(I.visible=w.visible,I.wireframe=w.wireframe,g===tn?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:N[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,I.map=w.map,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,f.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const H=e.properties.get(I);H.light=f}return I}a(X,"getDepthMaterial");function m(_,w,f,g,I){if(_.visible===!1)return;if(_.layers.test(w.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&I===tn)&&(!_.frustumCulled||_.intersectsFrustum(i))){_.modelViewMatrix.multiplyMatrices(f.matrixWorldInverse,_.matrixWorld);const Z=n.update(_),L=_.material;if(Array.isArray(L)){const Y=Z.groups;for(let J=0,q=Y.length;J<q;J++){const ie=Y[J],$=L[ie.materialIndex];if($&&$.visible){const ee=X(_,$,g,I);_.onBeforeShadow(e,_,w,f,Z,ee,ie),e.renderBufferDirect(f,null,Z,ee,_,ie),_.onAfterShadow(e,_,w,f,Z,ee,ie)}}}else if(L.visible){const Y=X(_,L,g,I);_.onBeforeShadow(e,_,w,f,Z,Y,null),e.renderBufferDirect(f,null,Z,Y,_,null),_.onAfterShadow(e,_,w,f,Z,Y,null)}}const H=_.children;for(let Z=0,L=H.length;Z<L;Z++)m(H[Z],w,f,g,I)}a(m,"renderObject");function E(_){_.target.removeEventListener("dispose",E);for(const f in A){const g=A[f],I=_.target.uuid;I in g&&(g[I].dispose(),delete g[I])}}a(E,"onMaterialDispose")}a(sd,"WebGLShadowMap");function ld(e,n){function t(){let M=!1;const se=new _t;let z=null;const le=new _t(0,0,0,0);return{setMask:a(function(pe){z!==pe&&!M&&(e.colorMask(pe,pe,pe,pe),z=pe)},"setMask"),setLocked:a(function(pe){M=pe},"setLocked"),setClear:a(function(pe,j,Ae,Se,$e){$e===!0&&(pe*=Se,j*=Se,Ae*=Se),se.set(pe,j,Ae,Se),le.equals(se)===!1&&(e.clearColor(pe,j,Ae,Se),le.copy(se))},"setClear"),reset:a(function(){M=!1,z=null,le.set(-1,0,0,0)},"reset")}}a(t,"ColorBuffer");function i(){let M=!1,se=!1,z=null,le=null,pe=null;return{setReversed:a(function(j){if(se!==j){const Ae=n.get("EXT_clip_control");j?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),se=j;const Se=pe;pe=null,this.setClear(Se)}},"setReversed"),getReversed:a(function(){return se},"getReversed"),setTest:a(function(j){j?Q(e.DEPTH_TEST):Me(e.DEPTH_TEST)},"setTest"),setMask:a(function(j){z!==j&&!M&&(e.depthMask(j),z=j)},"setMask"),setFunc:a(function(j){if(se&&(j=So[j]),le!==j){switch(j){case oa:e.depthFunc(e.NEVER);break;case aa:e.depthFunc(e.ALWAYS);break;case ra:e.depthFunc(e.LESS);break;case li:e.depthFunc(e.LEQUAL);break;case ia:e.depthFunc(e.EQUAL);break;case na:e.depthFunc(e.GEQUAL);break;case ta:e.depthFunc(e.GREATER);break;case ea:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}le=j}},"setFunc"),setLocked:a(function(j){M=j},"setLocked"),setClear:a(function(j){pe!==j&&(pe=j,se&&(j=1-j),e.clearDepth(j))},"setClear"),reset:a(function(){M=!1,z=null,le=null,pe=null,se=!1},"reset")}}a(i,"DepthBuffer");function c(){let M=!1,se=null,z=null,le=null,pe=null,j=null,Ae=null,Se=null,$e=null;return{setTest:a(function(He){M||(He?Q(e.STENCIL_TEST):Me(e.STENCIL_TEST))},"setTest"),setMask:a(function(He){se!==He&&!M&&(e.stencilMask(He),se=He)},"setMask"),setFunc:a(function(He,Tt,Ct){(z!==He||le!==Tt||pe!==Ct)&&(e.stencilFunc(He,Tt,Ct),z=He,le=Tt,pe=Ct)},"setFunc"),setOp:a(function(He,Tt,Ct){(j!==He||Ae!==Tt||Se!==Ct)&&(e.stencilOp(He,Tt,Ct),j=He,Ae=Tt,Se=Ct)},"setOp"),setLocked:a(function(He){M=He},"setLocked"),setClear:a(function(He){$e!==He&&(e.clearStencil(He),$e=He)},"setClear"),reset:a(function(){M=!1,se=null,z=null,le=null,pe=null,j=null,Ae=null,Se=null,$e=null},"reset")}}a(c,"StencilBuffer");const s=new t,u=new i,v=new c,b=new WeakMap,A=new WeakMap;let V={},N={},h={},T=new WeakMap,y=[],k=null,d=!1,l=null,U=null,X=null,m=null,E=null,_=null,w=null,f=new et(0,0,0),g=0,I=!1,O=null,H=null,Z=null,L=null,Y=null;const J=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ie=0;const $=e.getParameter(e.VERSION);$.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec($)[1]),q=ie>=1):$.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=ie>=2);let ee=null,te={};const Ce=e.getParameter(e.SCISSOR_BOX),be=e.getParameter(e.VIEWPORT),rt=new _t().fromArray(Ce),ze=new _t().fromArray(be);function Xe(M,se,z,le){const pe=new Uint8Array(4),j=e.createTexture();e.bindTexture(M,j),e.texParameteri(M,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(M,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ae=0;Ae<z;Ae++)M===e.TEXTURE_3D||M===e.TEXTURE_2D_ARRAY?e.texImage3D(se,0,e.RGBA,1,1,le,0,e.RGBA,e.UNSIGNED_BYTE,pe):e.texImage2D(se+Ae,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,pe);return j}a(Xe,"createTexture");const W={};W[e.TEXTURE_2D]=Xe(e.TEXTURE_2D,e.TEXTURE_2D,1),W[e.TEXTURE_CUBE_MAP]=Xe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[e.TEXTURE_2D_ARRAY]=Xe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),W[e.TEXTURE_3D]=Xe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),u.setClear(1),v.setClear(0),Q(e.DEPTH_TEST),u.setFunc(li),Ne(!1),tt(ci),Q(e.CULL_FACE),Ge(It);function Q(M){V[M]!==!0&&(e.enable(M),V[M]=!0)}a(Q,"enable");function Me(M){V[M]!==!1&&(e.disable(M),V[M]=!1)}a(Me,"disable");function De(M,se){return h[M]!==se?(e.bindFramebuffer(M,se),h[M]=se,M===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=se),M===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=se),!0):!1}a(De,"bindFramebuffer");function _e(M,se){let z=y,le=!1;if(M){z=T.get(se),z===void 0&&(z=[],T.set(se,z));const pe=M.textures;if(z.length!==pe.length||z[0]!==e.COLOR_ATTACHMENT0){for(let j=0,Ae=pe.length;j<Ae;j++)z[j]=e.COLOR_ATTACHMENT0+j;z.length=pe.length,le=!0}}else z[0]!==e.BACK&&(z[0]=e.BACK,le=!0);le&&e.drawBuffers(z)}a(_e,"drawBuffers");function Oe(M){return k!==M?(e.useProgram(M),k=M,!0):!1}a(Oe,"useProgram");const lt={[nn]:e.FUNC_ADD,[Br]:e.FUNC_SUBTRACT,[Or]:e.FUNC_REVERSE_SUBTRACT};lt[fa]=e.MIN,lt[da]=e.MAX;const we={[jr]:e.ZERO,[Jr]:e.ONE,[Qr]:e.SRC_COLOR,[$r]:e.SRC_ALPHA,[Zr]:e.SRC_ALPHA_SATURATE,[qr]:e.DST_COLOR,[Yr]:e.DST_ALPHA,[Kr]:e.ONE_MINUS_SRC_COLOR,[Xr]:e.ONE_MINUS_SRC_ALPHA,[zr]:e.ONE_MINUS_DST_COLOR,[kr]:e.ONE_MINUS_DST_ALPHA,[Wr]:e.CONSTANT_COLOR,[Vr]:e.ONE_MINUS_CONSTANT_COLOR,[Hr]:e.CONSTANT_ALPHA,[Gr]:e.ONE_MINUS_CONSTANT_ALPHA};function Ge(M,se,z,le,pe,j,Ae,Se,$e,He){if(M===It){d===!0&&(Me(e.BLEND),d=!1);return}if(d===!1&&(Q(e.BLEND),d=!0),M!==ca){if(M!==l||He!==I){if((U!==nn||E!==nn)&&(e.blendEquation(e.FUNC_ADD),U=nn,E=nn),He)switch(M){case pn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ui:e.blendFunc(e.ONE,e.ONE);break;case di:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case fi:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Je("WebGLState: Invalid blending: ",M);break}else switch(M){case pn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ui:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case di:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fi:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",M);break}X=null,m=null,_=null,w=null,f.set(0,0,0),g=0,l=M,I=He}return}pe=pe||se,j=j||z,Ae=Ae||le,(se!==U||pe!==E)&&(e.blendEquationSeparate(lt[se],lt[pe]),U=se,E=pe),(z!==X||le!==m||j!==_||Ae!==w)&&(e.blendFuncSeparate(we[z],we[le],we[j],we[Ae]),X=z,m=le,_=j,w=Ae),(Se.equals(f)===!1||$e!==g)&&(e.blendColor(Se.r,Se.g,Se.b,$e),f.copy(Se),g=$e),l=M,I=!1}a(Ge,"setBlending");function Ze(M,se){M.side===Nt?Me(e.CULL_FACE):Q(e.CULL_FACE);let z=M.side===St;se&&(z=!z),Ne(z),M.blending===pn&&M.transparent===!1?Ge(It):Ge(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),u.setFunc(M.depthFunc),u.setTest(M.depthTest),u.setMask(M.depthWrite),s.setMask(M.colorWrite);const le=M.stencilWrite;v.setTest(le),le&&(v.setMask(M.stencilWriteMask),v.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),v.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),gt(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?Q(e.SAMPLE_ALPHA_TO_COVERAGE):Me(e.SAMPLE_ALPHA_TO_COVERAGE)}a(Ze,"setMaterial");function Ne(M){O!==M&&(M?e.frontFace(e.CW):e.frontFace(e.CCW),O=M)}a(Ne,"setFlipSided");function tt(M){M!==sa?(Q(e.CULL_FACE),M!==H&&(M===ci?e.cullFace(e.BACK):M===la?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Me(e.CULL_FACE),H=M}a(tt,"setCullFace");function dt(M){M!==Z&&(q&&e.lineWidth(M),Z=M)}a(dt,"setLineWidth");function gt(M,se,z){M?(Q(e.POLYGON_OFFSET_FILL),(L!==se||Y!==z)&&(L=se,Y=z,u.getReversed()&&(se=-se),e.polygonOffset(se,z))):Me(e.POLYGON_OFFSET_FILL)}a(gt,"setPolygonOffset");function it(M){M?Q(e.SCISSOR_TEST):Me(e.SCISSOR_TEST)}a(it,"setScissorTest");function ot(M){M===void 0&&(M=e.TEXTURE0+J-1),ee!==M&&(e.activeTexture(M),ee=M)}a(ot,"activeTexture");function x(M,se,z){z===void 0&&(ee===null?z=e.TEXTURE0+J-1:z=ee);let le=te[z];le===void 0&&(le={type:void 0,texture:void 0},te[z]=le),(le.type!==M||le.texture!==se)&&(ee!==z&&(e.activeTexture(z),ee=z),e.bindTexture(M,se||W[M]),le.type=M,le.texture=se)}a(x,"bindTexture");function ut(){const M=te[ee];M!==void 0&&M.type!==void 0&&(e.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}a(ut,"unbindTexture");function ke(){try{e.compressedTexImage2D(...arguments)}catch(M){Je("WebGLState:",M)}}a(ke,"compressedTexImage2D");function p(){try{e.compressedTexImage3D(...arguments)}catch(M){Je("WebGLState:",M)}}a(p,"compressedTexImage3D");function r(){try{e.texSubImage2D(...arguments)}catch(M){Je("WebGLState:",M)}}a(r,"texSubImage2D");function R(){try{e.texSubImage3D(...arguments)}catch(M){Je("WebGLState:",M)}}a(R,"texSubImage3D");function D(){try{e.compressedTexSubImage2D(...arguments)}catch(M){Je("WebGLState:",M)}}a(D,"compressedTexSubImage2D");function B(){try{e.compressedTexSubImage3D(...arguments)}catch(M){Je("WebGLState:",M)}}a(B,"compressedTexSubImage3D");function ne(){try{e.texStorage2D(...arguments)}catch(M){Je("WebGLState:",M)}}a(ne,"texStorage2D");function re(){try{e.texStorage3D(...arguments)}catch(M){Je("WebGLState:",M)}}a(re,"texStorage3D");function G(){try{e.texImage2D(...arguments)}catch(M){Je("WebGLState:",M)}}a(G,"texImage2D");function K(){try{e.texImage3D(...arguments)}catch(M){Je("WebGLState:",M)}}a(K,"texImage3D");function ae(M){return N[M]!==void 0?N[M]:e.getParameter(M)}a(ae,"getParameter");function xe(M,se){N[M]!==se&&(e.pixelStorei(M,se),N[M]=se)}a(xe,"pixelStorei");function fe(M){rt.equals(M)===!1&&(e.scissor(M.x,M.y,M.z,M.w),rt.copy(M))}a(fe,"scissor");function oe(M){ze.equals(M)===!1&&(e.viewport(M.x,M.y,M.z,M.w),ze.copy(M))}a(oe,"viewport");function Te(M,se){let z=A.get(se);z===void 0&&(z=new WeakMap,A.set(se,z));let le=z.get(M);le===void 0&&(le=e.getUniformBlockIndex(se,M.name),z.set(M,le))}a(Te,"updateUBOMapping");function Re(M,se){const le=A.get(se).get(M);b.get(se)!==le&&(e.uniformBlockBinding(se,le,M.__bindingPointIndex),b.set(se,le))}a(Re,"uniformBlockBinding");function Pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),u.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),V={},N={},ee=null,te={},h={},T=new WeakMap,y=[],k=null,d=!1,l=null,U=null,X=null,m=null,E=null,_=null,w=null,f=new et(0,0,0),g=0,I=!1,O=null,H=null,Z=null,L=null,Y=null,rt.set(0,0,e.canvas.width,e.canvas.height),ze.set(0,0,e.canvas.width,e.canvas.height),s.reset(),u.reset(),v.reset()}return a(Pe,"reset"),{buffers:{color:s,depth:u,stencil:v},enable:Q,disable:Me,bindFramebuffer:De,drawBuffers:_e,useProgram:Oe,setBlending:Ge,setMaterial:Ze,setFlipSided:Ne,setCullFace:tt,setLineWidth:dt,setPolygonOffset:gt,setScissorTest:it,activeTexture:ot,bindTexture:x,unbindTexture:ut,compressedTexImage2D:ke,compressedTexImage3D:p,texImage2D:G,texImage3D:K,pixelStorei:xe,getParameter:ae,updateUBOMapping:Te,uniformBlockBinding:Re,texStorage2D:ne,texStorage3D:re,texSubImage2D:r,texSubImage3D:R,compressedTexSubImage2D:D,compressedTexSubImage3D:B,scissor:fe,viewport:oe,reset:Pe}}a(ld,"WebGLState");function cd(e,n,t,i,c,s,u){const v=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,b=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),A=new mt,V=new WeakMap,N=new Set;let h;const T=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function k(p,r){return y?new OffscreenCanvas(p,r):Eo("canvas")}a(k,"createCanvas");function d(p,r,R){let D=1;const B=ke(p);if((B.width>R||B.height>R)&&(D=R/Math.max(B.width,B.height)),D<1)if(typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&p instanceof ImageBitmap||typeof VideoFrame<"u"&&p instanceof VideoFrame){const ne=Math.floor(D*B.width),re=Math.floor(D*B.height);h===void 0&&(h=k(ne,re));const G=r?k(ne,re):h;return G.width=ne,G.height=re,G.getContext("2d").drawImage(p,0,0,ne,re),We("WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+ne+"x"+re+")."),G}else return"data"in p&&We("WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),p;return p}a(d,"resizeImage");function l(p){return p.generateMipmaps}a(l,"textureNeedsGenerateMipmaps");function U(p){e.generateMipmap(p)}a(U,"generateMipmap");function X(p){return p.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:p.isWebGL3DRenderTarget?e.TEXTURE_3D:p.isWebGLArrayRenderTarget||p.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}a(X,"getTargetType");function m(p,r,R,D,B,ne=!1){if(p!==null){if(e[p]!==void 0)return e[p];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+p+"'")}let re;D&&(re=n.get("EXT_texture_norm16"),re||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let G=r;if(r===e.RED&&(R===e.FLOAT&&(G=e.R32F),R===e.HALF_FLOAT&&(G=e.R16F),R===e.UNSIGNED_BYTE&&(G=e.R8),R===e.UNSIGNED_SHORT&&re&&(G=re.R16_EXT),R===e.SHORT&&re&&(G=re.R16_SNORM_EXT)),r===e.RED_INTEGER&&(R===e.UNSIGNED_BYTE&&(G=e.R8UI),R===e.UNSIGNED_SHORT&&(G=e.R16UI),R===e.UNSIGNED_INT&&(G=e.R32UI),R===e.BYTE&&(G=e.R8I),R===e.SHORT&&(G=e.R16I),R===e.INT&&(G=e.R32I)),r===e.RG&&(R===e.FLOAT&&(G=e.RG32F),R===e.HALF_FLOAT&&(G=e.RG16F),R===e.UNSIGNED_BYTE&&(G=e.RG8),R===e.UNSIGNED_SHORT&&re&&(G=re.RG16_EXT),R===e.SHORT&&re&&(G=re.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(R===e.UNSIGNED_BYTE&&(G=e.RG8UI),R===e.UNSIGNED_SHORT&&(G=e.RG16UI),R===e.UNSIGNED_INT&&(G=e.RG32UI),R===e.BYTE&&(G=e.RG8I),R===e.SHORT&&(G=e.RG16I),R===e.INT&&(G=e.RG32I)),r===e.RGB_INTEGER&&(R===e.UNSIGNED_BYTE&&(G=e.RGB8UI),R===e.UNSIGNED_SHORT&&(G=e.RGB16UI),R===e.UNSIGNED_INT&&(G=e.RGB32UI),R===e.BYTE&&(G=e.RGB8I),R===e.SHORT&&(G=e.RGB16I),R===e.INT&&(G=e.RGB32I)),r===e.RGBA_INTEGER&&(R===e.UNSIGNED_BYTE&&(G=e.RGBA8UI),R===e.UNSIGNED_SHORT&&(G=e.RGBA16UI),R===e.UNSIGNED_INT&&(G=e.RGBA32UI),R===e.BYTE&&(G=e.RGBA8I),R===e.SHORT&&(G=e.RGBA16I),R===e.INT&&(G=e.RGBA32I)),r===e.RGB&&(R===e.UNSIGNED_SHORT&&re&&(G=re.RGB16_EXT),R===e.SHORT&&re&&(G=re.RGB16_SNORM_EXT),R===e.UNSIGNED_INT_5_9_9_9_REV&&(G=e.RGB9_E5),R===e.UNSIGNED_INT_10F_11F_11F_REV&&(G=e.R11F_G11F_B10F)),r===e.RGBA){const K=ne?ai:nt.getTransfer(B);R===e.FLOAT&&(G=e.RGBA32F),R===e.HALF_FLOAT&&(G=e.RGBA16F),R===e.UNSIGNED_BYTE&&(G=K===qe?e.SRGB8_ALPHA8:e.RGBA8),R===e.UNSIGNED_SHORT&&re&&(G=re.RGBA16_EXT),R===e.SHORT&&re&&(G=re.RGBA16_SNORM_EXT),R===e.UNSIGNED_SHORT_4_4_4_4&&(G=e.RGBA4),R===e.UNSIGNED_SHORT_5_5_5_1&&(G=e.RGB5_A1)}return(G===e.R16F||G===e.R32F||G===e.RG16F||G===e.RG32F||G===e.RGBA16F||G===e.RGBA32F)&&n.get("EXT_color_buffer_float"),G}a(m,"getInternalFormat");function E(p,r){let R;return p?r===null||r===Vt||r===rn?R=e.DEPTH24_STENCIL8:r===Ft?R=e.DEPTH32F_STENCIL8:r===mn&&(R=e.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):r===null||r===Vt||r===rn?R=e.DEPTH_COMPONENT24:r===Ft?R=e.DEPTH_COMPONENT32F:r===mn&&(R=e.DEPTH_COMPONENT16),R}a(E,"getInternalDepthFormat");function _(p,r){return l(p)===!0||p.isFramebufferTexture&&p.minFilter!==Ht&&p.minFilter!==Et?Math.log2(Math.max(r.width,r.height))+1:p.mipmaps!==void 0&&p.mipmaps.length>0?p.mipmaps.length:p.isCompressedTexture&&Array.isArray(p.image)?r.mipmaps.length:1}a(_,"getMipLevels");function w(p){const r=p.target;r.removeEventListener("dispose",w),g(r),r.isVideoTexture&&V.delete(r),r.isHTMLTexture&&N.delete(r)}a(w,"onTextureDispose");function f(p){const r=p.target;r.removeEventListener("dispose",f),O(r)}a(f,"onRenderTargetDispose");function g(p){const r=i.get(p);if(r.__webglInit===void 0)return;const R=p.source,D=T.get(R);if(D){const B=D[r.__cacheKey];B.usedTimes--,B.usedTimes===0&&I(p),Object.keys(D).length===0&&T.delete(R)}i.remove(p)}a(g,"deallocateTexture");function I(p){const r=i.get(p);e.deleteTexture(r.__webglTexture);const R=p.source,D=T.get(R);delete D[r.__cacheKey],u.memory.textures--}a(I,"deleteTexture");function O(p){const r=i.get(p);if(p.depthTexture&&(p.depthTexture.dispose(),i.remove(p.depthTexture)),p.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(r.__webglFramebuffer[D]))for(let B=0;B<r.__webglFramebuffer[D].length;B++)e.deleteFramebuffer(r.__webglFramebuffer[D][B]);else e.deleteFramebuffer(r.__webglFramebuffer[D]);r.__webglDepthbuffer&&e.deleteRenderbuffer(r.__webglDepthbuffer[D])}else{if(Array.isArray(r.__webglFramebuffer))for(let D=0;D<r.__webglFramebuffer.length;D++)e.deleteFramebuffer(r.__webglFramebuffer[D]);else e.deleteFramebuffer(r.__webglFramebuffer);if(r.__webglDepthbuffer&&e.deleteRenderbuffer(r.__webglDepthbuffer),r.__webglMultisampledFramebuffer&&e.deleteFramebuffer(r.__webglMultisampledFramebuffer),r.__webglColorRenderbuffer)for(let D=0;D<r.__webglColorRenderbuffer.length;D++)r.__webglColorRenderbuffer[D]&&e.deleteRenderbuffer(r.__webglColorRenderbuffer[D]);r.__webglDepthRenderbuffer&&e.deleteRenderbuffer(r.__webglDepthRenderbuffer)}const R=p.textures;for(let D=0,B=R.length;D<B;D++){const ne=i.get(R[D]);ne.__webglTexture&&(e.deleteTexture(ne.__webglTexture),u.memory.textures--),i.remove(R[D])}i.remove(p)}a(O,"deallocateRenderTarget");let H=0;function Z(){H=0}a(Z,"resetTextureUnits");function L(){return H}a(L,"getTextureUnits");function Y(p){H=p}a(Y,"setTextureUnits");function J(){const p=H;return p>=c.maxTextures&&We("WebGLTextures: Trying to use "+(p+1)+" texture units while this GPU supports only "+c.maxTextures),H+=1,p}a(J,"allocateTextureUnit");function q(p){const r=[];return r.push(p.wrapS),r.push(p.wrapT),r.push(p.wrapR||0),r.push(p.magFilter),r.push(p.minFilter),r.push(p.anisotropy),r.push(p.internalFormat),r.push(p.format),r.push(p.type),r.push(p.generateMipmaps),r.push(p.premultiplyAlpha),r.push(p.flipY),r.push(p.unpackAlignment),r.push(p.colorSpace),r.join()}a(q,"getTextureCacheKey");function ie(p,r){const R=i.get(p);if(p.isVideoTexture&&x(p),p.isRenderTargetTexture===!1&&p.isExternalTexture!==!0&&p.version>0&&R.__version!==p.version){const D=p.image;if(D===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(R,p,r);return}}else p.isExternalTexture&&(R.__webglTexture=p.sourceTexture?p.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,R.__webglTexture,e.TEXTURE0+r)}a(ie,"setTexture2D");function $(p,r){const R=i.get(p);if(p.isRenderTargetTexture===!1&&p.version>0&&R.__version!==p.version){Me(R,p,r);return}else p.isExternalTexture&&(R.__webglTexture=p.sourceTexture?p.sourceTexture:null);t.bindTexture(e.TEXTURE_2D_ARRAY,R.__webglTexture,e.TEXTURE0+r)}a($,"setTexture2DArray");function ee(p,r){const R=i.get(p);if(p.isRenderTargetTexture===!1&&p.version>0&&R.__version!==p.version){Me(R,p,r);return}t.bindTexture(e.TEXTURE_3D,R.__webglTexture,e.TEXTURE0+r)}a(ee,"setTexture3D");function te(p,r){const R=i.get(p);if(p.isCubeDepthTexture!==!0&&p.version>0&&R.__version!==p.version){De(R,p,r);return}t.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+r)}a(te,"setTextureCube");const Ce={[pa]:e.REPEAT,[Ln]:e.CLAMP_TO_EDGE,[ua]:e.MIRRORED_REPEAT},be={[Ht]:e.NEAREST,[ha]:e.NEAREST_MIPMAP_NEAREST,[hn]:e.NEAREST_MIPMAP_LINEAR,[Et]:e.LINEAR,[Un]:e.LINEAR_MIPMAP_NEAREST,[Xt]:e.LINEAR_MIPMAP_LINEAR},rt={[Ea]:e.NEVER,[Sa]:e.ALWAYS,[va]:e.LESS,[bn]:e.LEQUAL,[ga]:e.EQUAL,[Rn]:e.GEQUAL,[_a]:e.GREATER,[ma]:e.NOTEQUAL};function ze(p,r){if(r.type===Ft&&n.has("OES_texture_float_linear")===!1&&(r.magFilter===Et||r.magFilter===Un||r.magFilter===hn||r.magFilter===Xt||r.minFilter===Et||r.minFilter===Un||r.minFilter===hn||r.minFilter===Xt)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(p,e.TEXTURE_WRAP_S,Ce[r.wrapS]),e.texParameteri(p,e.TEXTURE_WRAP_T,Ce[r.wrapT]),(p===e.TEXTURE_3D||p===e.TEXTURE_2D_ARRAY)&&e.texParameteri(p,e.TEXTURE_WRAP_R,Ce[r.wrapR]),e.texParameteri(p,e.TEXTURE_MAG_FILTER,be[r.magFilter]),e.texParameteri(p,e.TEXTURE_MIN_FILTER,be[r.minFilter]),r.compareFunction&&(e.texParameteri(p,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(p,e.TEXTURE_COMPARE_FUNC,rt[r.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(r.magFilter===Ht||r.minFilter!==hn&&r.minFilter!==Xt||r.type===Ft&&n.has("OES_texture_float_linear")===!1)return;if(r.anisotropy>1||i.get(r).__currentAnisotropy){const R=n.get("EXT_texture_filter_anisotropic");e.texParameterf(p,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,c.getMaxAnisotropy())),i.get(r).__currentAnisotropy=r.anisotropy}}}a(ze,"setTextureParameters");function Xe(p,r){let R=!1;p.__webglInit===void 0&&(p.__webglInit=!0,r.addEventListener("dispose",w));const D=r.source;let B=T.get(D);B===void 0&&(B={},T.set(D,B));const ne=q(r);if(ne!==p.__cacheKey){B[ne]===void 0&&(B[ne]={texture:e.createTexture(),usedTimes:0},u.memory.textures++,R=!0),B[ne].usedTimes++;const re=B[p.__cacheKey];re!==void 0&&(B[p.__cacheKey].usedTimes--,re.usedTimes===0&&I(r)),p.__cacheKey=ne,p.__webglTexture=B[ne].texture}return R}a(Xe,"initTexture");function W(p,r,R){return Math.floor(Math.floor(p/R)/r)}a(W,"getRow");function Q(p,r,R,D){const ne=p.updateRanges;if(ne.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,R,D,r.data);else{ne.sort((xe,fe)=>xe.start-fe.start);let re=0;for(let xe=1;xe<ne.length;xe++){const fe=ne[re],oe=ne[xe],Te=fe.start+fe.count,Re=W(oe.start,r.width,4),Pe=W(fe.start,r.width,4);oe.start<=Te+1&&Re===Pe&&W(oe.start+oe.count-1,r.width,4)===Re?fe.count=Math.max(fe.count,oe.start+oe.count-fe.start):(++re,ne[re]=oe)}ne.length=re+1;const G=t.getParameter(e.UNPACK_ROW_LENGTH),K=t.getParameter(e.UNPACK_SKIP_PIXELS),ae=t.getParameter(e.UNPACK_SKIP_ROWS);t.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let xe=0,fe=ne.length;xe<fe;xe++){const oe=ne[xe],Te=Math.floor(oe.start/4),Re=Math.ceil(oe.count/4),Pe=Te%r.width,M=Math.floor(Te/r.width),se=Re,z=1;t.pixelStorei(e.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(e.UNPACK_SKIP_ROWS,M),t.texSubImage2D(e.TEXTURE_2D,0,Pe,M,se,z,R,D,r.data)}p.clearUpdateRanges(),t.pixelStorei(e.UNPACK_ROW_LENGTH,G),t.pixelStorei(e.UNPACK_SKIP_PIXELS,K),t.pixelStorei(e.UNPACK_SKIP_ROWS,ae)}}a(Q,"updateTexture");function Me(p,r,R){let D=e.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(D=e.TEXTURE_2D_ARRAY),r.isData3DTexture&&(D=e.TEXTURE_3D);const B=Xe(p,r),ne=r.source;t.bindTexture(D,p.__webglTexture,e.TEXTURE0+R);const re=i.get(ne);if(ne.version!==re.__version||B===!0){if(t.activeTexture(e.TEXTURE0+R),(typeof ImageBitmap<"u"&&r.image instanceof ImageBitmap)===!1){const z=nt.getPrimaries(nt.workingColorSpace),le=r.colorSpace===qt?null:nt.getPrimaries(r.colorSpace),pe=r.colorSpace===qt||z===le?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment);let K=d(r.image,!1,c.maxTextureSize);K=ut(r,K);const ae=s.convert(r.format,r.colorSpace),xe=s.convert(r.type);let fe=m(r.internalFormat,ae,xe,r.normalized,r.colorSpace,r.isVideoTexture);ze(D,r);let oe;const Te=r.mipmaps,Re=r.isVideoTexture!==!0,Pe=re.__version===void 0||B===!0,M=ne.dataReady,se=_(r,K);if(r.isDepthTexture)fe=E(r.format===Zt,r.type),Pe&&(Re?t.texStorage2D(e.TEXTURE_2D,1,fe,K.width,K.height):t.texImage2D(e.TEXTURE_2D,0,fe,K.width,K.height,0,ae,xe,null));else if(r.isDataTexture)if(Te.length>0){Re&&Pe&&t.texStorage2D(e.TEXTURE_2D,se,fe,Te[0].width,Te[0].height);for(let z=0,le=Te.length;z<le;z++)oe=Te[z],Re?M&&t.texSubImage2D(e.TEXTURE_2D,z,0,0,oe.width,oe.height,ae,xe,oe.data):t.texImage2D(e.TEXTURE_2D,z,fe,oe.width,oe.height,0,ae,xe,oe.data);r.generateMipmaps=!1}else Re?(Pe&&t.texStorage2D(e.TEXTURE_2D,se,fe,K.width,K.height),M&&Q(r,K,ae,xe)):t.texImage2D(e.TEXTURE_2D,0,fe,K.width,K.height,0,ae,xe,K.data);else if(r.isCompressedTexture)if(r.isCompressedArrayTexture){Re&&Pe&&t.texStorage3D(e.TEXTURE_2D_ARRAY,se,fe,Te[0].width,Te[0].height,K.depth);for(let z=0,le=Te.length;z<le;z++)if(oe=Te[z],r.format!==wt)if(ae!==null)if(Re){if(M)if(r.layerUpdates.size>0){const pe=Ma(oe.width,oe.height,r.format,r.type);for(const j of r.layerUpdates){const Ae=oe.data.subarray(j*pe/oe.data.BYTES_PER_ELEMENT,(j+1)*pe/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,z,0,0,j,oe.width,oe.height,1,ae,Ae)}}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,z,0,0,0,oe.width,oe.height,K.depth,ae,oe.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,z,fe,oe.width,oe.height,K.depth,0,oe.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?M&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,z,0,0,0,oe.width,oe.height,K.depth,ae,xe,oe.data):t.texImage3D(e.TEXTURE_2D_ARRAY,z,fe,oe.width,oe.height,K.depth,0,ae,xe,oe.data);r.layerUpdates.size>0&&r.clearLayerUpdates()}else{Re&&Pe&&t.texStorage2D(e.TEXTURE_2D,se,fe,Te[0].width,Te[0].height);for(let z=0,le=Te.length;z<le;z++)oe=Te[z],r.format!==wt?ae!==null?Re?M&&t.compressedTexSubImage2D(e.TEXTURE_2D,z,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(e.TEXTURE_2D,z,fe,oe.width,oe.height,0,oe.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?M&&t.texSubImage2D(e.TEXTURE_2D,z,0,0,oe.width,oe.height,ae,xe,oe.data):t.texImage2D(e.TEXTURE_2D,z,fe,oe.width,oe.height,0,ae,xe,oe.data)}else if(r.isDataArrayTexture)if(Re){if(Pe&&t.texStorage3D(e.TEXTURE_2D_ARRAY,se,fe,K.width,K.height,K.depth),M)if(r.layerUpdates.size>0){const z=Ma(K.width,K.height,r.format,r.type);for(const le of r.layerUpdates){const pe=K.data.subarray(le*z/K.data.BYTES_PER_ELEMENT,(le+1)*z/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,le,K.width,K.height,1,ae,xe,pe)}r.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ae,xe,K.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,fe,K.width,K.height,K.depth,0,ae,xe,K.data);else if(r.isData3DTexture)Re?(Pe&&t.texStorage3D(e.TEXTURE_3D,se,fe,K.width,K.height,K.depth),M&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ae,xe,K.data)):t.texImage3D(e.TEXTURE_3D,0,fe,K.width,K.height,K.depth,0,ae,xe,K.data);else if(r.isFramebufferTexture){if(Pe)if(Re)t.texStorage2D(e.TEXTURE_2D,se,fe,K.width,K.height);else{let z=K.width,le=K.height;for(let pe=0;pe<se;pe++)t.texImage2D(e.TEXTURE_2D,pe,fe,z,le,0,ae,xe,null),z>>=1,le>>=1}}else if(r.isHTMLTexture){if("texElementImage2D"in e){const z=e.canvas;if(z.hasAttribute("layoutsubtree")||z.setAttribute("layoutsubtree","true"),K.parentNode!==z){z.appendChild(K),N.add(r),z.onpaint=le=>{const pe=le.changedElements;for(const j of N)pe.includes(j.image)&&(j.needsUpdate=!0)},z.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,K);else{const pe=e.RGBA,j=e.RGBA,Ae=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,pe,j,Ae,K)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Re&&Pe){const z=ke(Te[0]);t.texStorage2D(e.TEXTURE_2D,se,fe,z.width,z.height)}for(let z=0,le=Te.length;z<le;z++)oe=Te[z],Re?M&&t.texSubImage2D(e.TEXTURE_2D,z,0,0,ae,xe,oe):t.texImage2D(e.TEXTURE_2D,z,fe,ae,xe,oe);r.generateMipmaps=!1}else if(Re){if(Pe){const z=ke(K);t.texStorage2D(e.TEXTURE_2D,se,fe,z.width,z.height)}M&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,ae,xe,K)}else t.texImage2D(e.TEXTURE_2D,0,fe,ae,xe,K);l(r)&&U(D),re.__version=ne.version,r.onUpdate&&r.onUpdate(r)}p.__version=r.version}a(Me,"uploadTexture");function De(p,r,R){if(r.image.length!==6)return;const D=Xe(p,r),B=r.source;t.bindTexture(e.TEXTURE_CUBE_MAP,p.__webglTexture,e.TEXTURE0+R);const ne=i.get(B);if(B.version!==ne.__version||D===!0){t.activeTexture(e.TEXTURE0+R);const re=nt.getPrimaries(nt.workingColorSpace),G=r.colorSpace===qt?null:nt.getPrimaries(r.colorSpace),K=r.colorSpace===qt||re===G?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),t.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment),t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const ae=r.isCompressedTexture||r.image[0].isCompressedTexture,xe=r.image[0]&&r.image[0].isDataTexture,fe=[];for(let j=0;j<6;j++)!ae&&!xe?fe[j]=d(r.image[j],!0,c.maxCubemapSize):fe[j]=xe?r.image[j].image:r.image[j],fe[j]=ut(r,fe[j]);const oe=fe[0],Te=s.convert(r.format,r.colorSpace),Re=s.convert(r.type),Pe=m(r.internalFormat,Te,Re,r.normalized,r.colorSpace),M=r.isVideoTexture!==!0,se=ne.__version===void 0||D===!0,z=B.dataReady;let le=_(r,oe);ze(e.TEXTURE_CUBE_MAP,r);let pe;if(ae){M&&se&&t.texStorage2D(e.TEXTURE_CUBE_MAP,le,Pe,oe.width,oe.height);for(let j=0;j<6;j++){pe=fe[j].mipmaps;for(let Ae=0;Ae<pe.length;Ae++){const Se=pe[Ae];r.format!==wt?Te!==null?M?z&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae,0,0,Se.width,Se.height,Te,Se.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae,Pe,Se.width,Se.height,0,Se.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):M?z&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae,0,0,Se.width,Se.height,Te,Re,Se.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae,Pe,Se.width,Se.height,0,Te,Re,Se.data)}}}else{if(pe=r.mipmaps,M&&se){pe.length>0&&le++;const j=ke(fe[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,le,Pe,j.width,j.height)}for(let j=0;j<6;j++)if(xe){M?z&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,fe[j].width,fe[j].height,Te,Re,fe[j].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Pe,fe[j].width,fe[j].height,0,Te,Re,fe[j].data);for(let Ae=0;Ae<pe.length;Ae++){const $e=pe[Ae].image[j].image;M?z&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae+1,0,0,$e.width,$e.height,Te,Re,$e.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae+1,Pe,$e.width,$e.height,0,Te,Re,$e.data)}}else{M?z&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Te,Re,fe[j]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Pe,Te,Re,fe[j]);for(let Ae=0;Ae<pe.length;Ae++){const Se=pe[Ae];M?z&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae+1,0,0,Te,Re,Se.image[j]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae+1,Pe,Te,Re,Se.image[j])}}}l(r)&&U(e.TEXTURE_CUBE_MAP),ne.__version=B.version,r.onUpdate&&r.onUpdate(r)}p.__version=r.version}a(De,"uploadCubeTexture");function _e(p,r,R,D,B,ne){const re=s.convert(R.format,R.colorSpace),G=s.convert(R.type),K=m(R.internalFormat,re,G,R.normalized,R.colorSpace),ae=i.get(r),xe=i.get(R);if(xe.__renderTarget=r,!ae.__hasExternalTextures){const fe=Math.max(1,r.width>>ne),oe=Math.max(1,r.height>>ne);B===e.TEXTURE_3D||B===e.TEXTURE_2D_ARRAY?t.texImage3D(B,ne,K,fe,oe,r.depth,0,re,G,null):t.texImage2D(B,ne,K,fe,oe,0,re,G,null)}t.bindFramebuffer(e.FRAMEBUFFER,p),ot(r)?v.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,D,B,xe.__webglTexture,0,it(r)):(B===e.TEXTURE_2D||B>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,D,B,xe.__webglTexture,ne),t.bindFramebuffer(e.FRAMEBUFFER,null)}a(_e,"setupFrameBufferTexture");function Oe(p,r,R){if(e.bindRenderbuffer(e.RENDERBUFFER,p),r.depthBuffer){const D=r.depthTexture,B=D&&D.isDepthTexture?D.type:null,ne=E(r.stencilBuffer,B),re=r.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ot(r)?v.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,it(r),ne,r.width,r.height):R?e.renderbufferStorageMultisample(e.RENDERBUFFER,it(r),ne,r.width,r.height):e.renderbufferStorage(e.RENDERBUFFER,ne,r.width,r.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,re,e.RENDERBUFFER,p)}else{const D=r.textures;for(let B=0;B<D.length;B++){const ne=D[B],re=s.convert(ne.format,ne.colorSpace),G=s.convert(ne.type),K=m(ne.internalFormat,re,G,ne.normalized,ne.colorSpace);ot(r)?v.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,it(r),K,r.width,r.height):R?e.renderbufferStorageMultisample(e.RENDERBUFFER,it(r),K,r.width,r.height):e.renderbufferStorage(e.RENDERBUFFER,K,r.width,r.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}a(Oe,"setupRenderBufferStorage");function lt(p,r,R){const D=r.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(e.FRAMEBUFFER,p),!(r.depthTexture&&r.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const B=i.get(r.depthTexture);if(B.__renderTarget=r,(!B.__webglTexture||r.depthTexture.image.width!==r.width||r.depthTexture.image.height!==r.height)&&(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),D){if(B.__webglInit===void 0&&(B.__webglInit=!0,r.depthTexture.addEventListener("dispose",w)),B.__webglTexture===void 0){B.__webglTexture=e.createTexture(),t.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture),ze(e.TEXTURE_CUBE_MAP,r.depthTexture);const ae=s.convert(r.depthTexture.format),xe=s.convert(r.depthTexture.type);let fe;r.depthTexture.format===Yt?fe=e.DEPTH_COMPONENT24:r.depthTexture.format===Zt&&(fe=e.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,fe,r.width,r.height,0,ae,xe,null)}}else ie(r.depthTexture,0);const ne=B.__webglTexture,re=it(r),G=D?e.TEXTURE_CUBE_MAP_POSITIVE_X+R:e.TEXTURE_2D,K=r.depthTexture.format===Zt?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(r.depthTexture.format===Yt)ot(r)?v.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,G,ne,0,re):e.framebufferTexture2D(e.FRAMEBUFFER,K,G,ne,0);else if(r.depthTexture.format===Zt)ot(r)?v.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,G,ne,0,re):e.framebufferTexture2D(e.FRAMEBUFFER,K,G,ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}a(lt,"setupDepthTexture");function we(p){const r=i.get(p),R=p.isWebGLCubeRenderTarget===!0;if(r.__boundDepthTexture!==p.depthTexture){const D=p.depthTexture;if(r.__depthDisposeCallback&&r.__depthDisposeCallback(),D){const B=a(()=>{delete r.__boundDepthTexture,delete r.__depthDisposeCallback,D.removeEventListener("dispose",B)},"disposeEvent");D.addEventListener("dispose",B),r.__depthDisposeCallback=B}r.__boundDepthTexture=D}if(p.depthTexture&&!r.__autoAllocateDepthBuffer)if(R)for(let D=0;D<6;D++)lt(r.__webglFramebuffer[D],p,D);else{const D=p.texture.mipmaps;D&&D.length>0?lt(r.__webglFramebuffer[0],p,0):lt(r.__webglFramebuffer,p,0)}else if(R){r.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(t.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[D]),r.__webglDepthbuffer[D]===void 0)r.__webglDepthbuffer[D]=e.createRenderbuffer(),Oe(r.__webglDepthbuffer[D],p,!1);else{const B=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ne=r.__webglDepthbuffer[D];e.bindRenderbuffer(e.RENDERBUFFER,ne),e.framebufferRenderbuffer(e.FRAMEBUFFER,B,e.RENDERBUFFER,ne)}}else{const D=p.texture.mipmaps;if(D&&D.length>0?t.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer===void 0)r.__webglDepthbuffer=e.createRenderbuffer(),Oe(r.__webglDepthbuffer,p,!1);else{const B=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ne=r.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ne),e.framebufferRenderbuffer(e.FRAMEBUFFER,B,e.RENDERBUFFER,ne)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}a(we,"setupDepthRenderbuffer");function Ge(p,r,R){const D=i.get(p);r!==void 0&&_e(D.__webglFramebuffer,p,p.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),R!==void 0&&we(p)}a(Ge,"rebindTextures");function Ze(p){const r=p.texture,R=i.get(p),D=i.get(r);p.addEventListener("dispose",f);const B=p.textures,ne=p.isWebGLCubeRenderTarget===!0,re=B.length>1;if(re||(D.__webglTexture===void 0&&(D.__webglTexture=e.createTexture()),D.__version=r.version,u.memory.textures++),ne){R.__webglFramebuffer=[];for(let G=0;G<6;G++)if(r.mipmaps&&r.mipmaps.length>0){R.__webglFramebuffer[G]=[];for(let K=0;K<r.mipmaps.length;K++)R.__webglFramebuffer[G][K]=e.createFramebuffer()}else R.__webglFramebuffer[G]=e.createFramebuffer()}else{if(r.mipmaps&&r.mipmaps.length>0){R.__webglFramebuffer=[];for(let G=0;G<r.mipmaps.length;G++)R.__webglFramebuffer[G]=e.createFramebuffer()}else R.__webglFramebuffer=e.createFramebuffer();if(re)for(let G=0,K=B.length;G<K;G++){const ae=i.get(B[G]);ae.__webglTexture===void 0&&(ae.__webglTexture=e.createTexture(),u.memory.textures++)}if(p.samples>0&&ot(p)===!1){R.__webglMultisampledFramebuffer=e.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let G=0;G<B.length;G++){const K=B[G];R.__webglColorRenderbuffer[G]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,R.__webglColorRenderbuffer[G]);const ae=s.convert(K.format,K.colorSpace),xe=s.convert(K.type),fe=m(K.internalFormat,ae,xe,K.normalized,K.colorSpace,p.isXRRenderTarget===!0),oe=it(p);e.renderbufferStorageMultisample(e.RENDERBUFFER,oe,fe,p.width,p.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+G,e.RENDERBUFFER,R.__webglColorRenderbuffer[G])}e.bindRenderbuffer(e.RENDERBUFFER,null),p.depthBuffer&&(R.__webglDepthRenderbuffer=e.createRenderbuffer(),Oe(R.__webglDepthRenderbuffer,p,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ne){t.bindTexture(e.TEXTURE_CUBE_MAP,D.__webglTexture),ze(e.TEXTURE_CUBE_MAP,r);for(let G=0;G<6;G++)if(r.mipmaps&&r.mipmaps.length>0)for(let K=0;K<r.mipmaps.length;K++)_e(R.__webglFramebuffer[G][K],p,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+G,K);else _e(R.__webglFramebuffer[G],p,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);l(r)&&U(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let G=0,K=B.length;G<K;G++){const ae=B[G],xe=i.get(ae);let fe=e.TEXTURE_2D;(p.isWebGL3DRenderTarget||p.isWebGLArrayRenderTarget)&&(fe=p.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(fe,xe.__webglTexture),ze(fe,ae),_e(R.__webglFramebuffer,p,ae,e.COLOR_ATTACHMENT0+G,fe,0),l(ae)&&U(fe)}t.unbindTexture()}else{let G=e.TEXTURE_2D;if((p.isWebGL3DRenderTarget||p.isWebGLArrayRenderTarget)&&(G=p.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(G,D.__webglTexture),ze(G,r),r.mipmaps&&r.mipmaps.length>0)for(let K=0;K<r.mipmaps.length;K++)_e(R.__webglFramebuffer[K],p,r,e.COLOR_ATTACHMENT0,G,K);else _e(R.__webglFramebuffer,p,r,e.COLOR_ATTACHMENT0,G,0);l(r)&&U(G),t.unbindTexture()}p.depthBuffer&&we(p)}a(Ze,"setupRenderTarget");function Ne(p){const r=p.textures;for(let R=0,D=r.length;R<D;R++){const B=r[R];if(l(B)){const ne=X(p),re=i.get(B).__webglTexture;t.bindTexture(ne,re),U(ne),t.unbindTexture()}}}a(Ne,"updateRenderTargetMipmap");const tt=[],dt=[];function gt(p){if(p.samples>0){if(ot(p)===!1){const r=p.textures,R=p.width,D=p.height;let B=e.COLOR_BUFFER_BIT;const ne=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,re=i.get(p),G=r.length>1;if(G)for(let ae=0;ae<r.length;ae++)t.bindFramebuffer(e.FRAMEBUFFER,re.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ae,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,re.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ae,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);const K=p.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ae=0;ae<r.length;ae++){if(p.resolveDepthBuffer&&(p.depthBuffer&&(B|=e.DEPTH_BUFFER_BIT),p.stencilBuffer&&p.resolveStencilBuffer&&(B|=e.STENCIL_BUFFER_BIT)),G){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);const xe=i.get(r[ae]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,xe,0)}e.blitFramebuffer(0,0,R,D,0,0,R,D,B,e.NEAREST),b===!0&&(tt.length=0,dt.length=0,tt.push(e.COLOR_ATTACHMENT0+ae),p.depthBuffer&&p.storeMultisampledDepthBuffer===!1&&(tt.push(ne),dt.push(ne),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,dt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),G)for(let ae=0;ae<r.length;ae++){t.bindFramebuffer(e.FRAMEBUFFER,re.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ae,e.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);const xe=i.get(r[ae]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,re.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ae,e.TEXTURE_2D,xe,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(p.depthBuffer&&p.storeMultisampledDepthBuffer===!1&&b){const r=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[r])}}}a(gt,"updateMultisampleRenderTarget");function it(p){return Math.min(c.maxSamples,p.samples)}a(it,"getRenderTargetSamples");function ot(p){const r=i.get(p);return p.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&r.__useRenderToTexture!==!1}a(ot,"useMultisampledRTT");function x(p){const r=u.render.frame;V.get(p)!==r&&(V.set(p,r),p.update())}a(x,"updateVideoTexture");function ut(p,r){const R=p.colorSpace,D=p.format,B=p.type;return p.isCompressedTexture===!0||p.isVideoTexture===!0||R!==Yn&&R!==qt&&(nt.getTransfer(R)===qe?(D!==wt||B!==At)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",R)),r}a(ut,"verifyColorSpace");function ke(p){return typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement?(A.width=p.naturalWidth||p.width,A.height=p.naturalHeight||p.height):typeof VideoFrame<"u"&&p instanceof VideoFrame?(A.width=p.displayWidth,A.height=p.displayHeight):(A.width=p.width,A.height=p.height),A}a(ke,"getDimensions"),this.allocateTextureUnit=J,this.resetTextureUnits=Z,this.getTextureUnits=L,this.setTextureUnits=Y,this.setTexture2D=ie,this.setTexture2DArray=$,this.setTexture3D=ee,this.setTextureCube=te,this.rebindTextures=Ge,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}a(cd,"WebGLTextures");function lo(e,n){function t(i,c=qt){let s;const u=nt.getTransfer(c);if(i===At)return e.UNSIGNED_BYTE;if(i===pi)return e.UNSIGNED_SHORT_4_4_4_4;if(i===hi)return e.UNSIGNED_SHORT_5_5_5_1;if(i===xa)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Ta)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Aa)return e.BYTE;if(i===Ra)return e.SHORT;if(i===mn)return e.UNSIGNED_SHORT;if(i===Xn)return e.INT;if(i===Vt)return e.UNSIGNED_INT;if(i===Ft)return e.FLOAT;if(i===Dt)return e.HALF_FLOAT;if(i===ba)return e.ALPHA;if(i===Ca)return e.RGB;if(i===wt)return e.RGBA;if(i===Yt)return e.DEPTH_COMPONENT;if(i===Zt)return e.DEPTH_STENCIL;if(i===Pa)return e.RED;if(i===mi)return e.RED_INTEGER;if(i===Kt)return e.RG;if(i===_i)return e.RG_INTEGER;if(i===gi)return e.RGBA_INTEGER;if(i===Dn||i===wn||i===In||i===Nn)if(u===qe)if(s=n.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Dn)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===In)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Nn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=n.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Dn)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wn)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===In)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Nn)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vi||i===Si||i===Ei||i===Mi)if(s=n.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===vi)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Si)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ei)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mi)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xi||i===Ti||i===Ai||i===Ri||i===bi||i===Cn||i===Ci)if(s=n.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xi||i===Ti)return u===qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ai)return u===qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ri)return s.COMPRESSED_R11_EAC;if(i===bi)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Cn)return s.COMPRESSED_RG11_EAC;if(i===Ci)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Pi||i===Li||i===Ui||i===Di||i===wi||i===Ii||i===Ni||i===yi||i===Fi||i===Oi||i===Bi||i===Gi||i===Hi||i===Vi)if(s=n.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Pi)return u===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Li)return u===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ui)return u===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Di)return u===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wi)return u===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ii)return u===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ni)return u===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yi)return u===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fi)return u===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oi)return u===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bi)return u===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gi)return u===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hi)return u===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vi)return u===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wi||i===ki||i===zi)if(s=n.get("EXT_texture_compression_bptc"),s!==null){if(i===Wi)return u===qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ki)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zi)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xi||i===Ki||i===Pn||i===Yi)if(s=n.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xi)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ki)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pn)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yi)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return a(t,"convert"),{convert:t}}a(lo,"WebGLUtils");const fd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ud{static{a(this,"WebXRDepthSensing")}constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new qi(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Ut({vertexShader:fd,fragmentShader:dd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new zn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pd extends La{static{a(this,"WebXRManager")}constructor(n,t){super();const i=this;let c=null,s=1,u=null,v="local-floor",b=1,A=null,V=null,N=null,h=null,T=null,y=null;const k=typeof XRWebGLBinding<"u",d=new ud,l={},U=t.getContextAttributes();let X=null,m=null;const E=[],_=[],w=new mt;let f=null,g=null;const I=new fn;I.viewport=new _t;const O=new fn;O.viewport=new _t;const H=[I,O],Z=new Ua;let L=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=E[W];return Q===void 0&&(Q=new yn,E[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=E[W];return Q===void 0&&(Q=new yn,E[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=E[W];return Q===void 0&&(Q=new yn,E[W]=Q),Q.getHandSpace()};function J(W){const Q=_.indexOf(W.inputSource);if(Q===-1)return;const Me=E[Q];Me!==void 0&&(Me.update(W.inputSource,W.frame,A||u),Me.dispatchEvent({type:W.type,data:W.inputSource}))}a(J,"onSessionEvent");function q(){c.removeEventListener("select",J),c.removeEventListener("selectstart",J),c.removeEventListener("selectend",J),c.removeEventListener("squeeze",J),c.removeEventListener("squeezestart",J),c.removeEventListener("squeezeend",J),c.removeEventListener("end",q),c.removeEventListener("inputsourceschange",ie);for(let W=0;W<E.length;W++){const Q=_[W];Q!==null&&(_[W]=null,E[W].disconnect(Q))}L=null,Y=null,d.reset();for(const W in l)delete l[W];if(n.setRenderTarget(X),T=null,h=null,N=null,c=null,m=null,Xe.stop(),i.isPresenting=!1,n.setPixelRatio(f),n.setSize(w.width,w.height,!1),g!==null){const W=g.camera;W.fov=g.fov,W.zoom=g.zoom,W.updateProjectionMatrix(),g=null}i.dispatchEvent({type:"sessionend"})}a(q,"onSessionEnd"),this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){v=W,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return A||u},this.setReferenceSpace=function(W){A=W},this.getBaseLayer=function(){return h!==null?h:T},this.getBinding=function(){return N===null&&k&&(N=new XRWebGLBinding(c,t)),N},this.getFrame=function(){return y},this.getSession=function(){return c},this.setSession=async function(W){if(c=W,c!==null){if(X=n.getRenderTarget(),c.addEventListener("select",J),c.addEventListener("selectstart",J),c.addEventListener("selectend",J),c.addEventListener("squeeze",J),c.addEventListener("squeezestart",J),c.addEventListener("squeezeend",J),c.addEventListener("end",q),c.addEventListener("inputsourceschange",ie),U.xrCompatible!==!0&&await t.makeXRCompatible(),f=n.getPixelRatio(),n.getSize(w),k&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,De=null,_e=null;U.depth&&(_e=U.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=U.stencil?Zt:Yt,De=U.stencil?rn:Vt);const Oe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};N=this.getBinding(),h=N.createProjectionLayer(Oe),c.updateRenderState({layers:[h]}),n.setPixelRatio(1),n.setSize(h.textureWidth,h.textureHeight,!1),m=new xt(h.textureWidth,h.textureHeight,{format:wt,type:At,depthTexture:new dn(h.textureWidth,h.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:U.stencil,colorSpace:n.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Me={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:s};T=new XRWebGLLayer(c,t,Me),c.updateRenderState({baseLayer:T}),n.setPixelRatio(1),n.setSize(T.framebufferWidth,T.framebufferHeight,!1),m=new xt(T.framebufferWidth,T.framebufferHeight,{format:wt,type:At,colorSpace:n.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1,storeMultisampledDepthBuffer:T.ignoreDepthValues===!1,storeMultisampledStencilBuffer:T.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(b),A=null,u=await c.requestReferenceSpace(v),Xe.setContext(c),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function ie(W){for(let Q=0;Q<W.removed.length;Q++){const Me=W.removed[Q],De=_.indexOf(Me);De>=0&&(_[De]=null,E[De].disconnect(Me))}for(let Q=0;Q<W.added.length;Q++){const Me=W.added[Q];let De=_.indexOf(Me);if(De===-1){for(let Oe=0;Oe<E.length;Oe++)if(Oe>=_.length){_.push(Me),De=Oe;break}else if(_[Oe]===null){_[Oe]=Me,De=Oe;break}if(De===-1)break}const _e=E[De];_e&&_e.connect(Me)}}a(ie,"onInputSourcesChange");const $=new ye,ee=new ye;function te(W,Q,Me){$.setFromMatrixPosition(Q.matrixWorld),ee.setFromMatrixPosition(Me.matrixWorld);const De=$.distanceTo(ee),_e=Q.projectionMatrix.elements,Oe=Me.projectionMatrix.elements,lt=_e[14]/(_e[10]-1),we=_e[14]/(_e[10]+1),Ge=(_e[9]+1)/_e[5],Ze=(_e[9]-1)/_e[5],Ne=(_e[8]-1)/_e[0],tt=(Oe[8]+1)/Oe[0],dt=lt*Ne,gt=lt*tt,it=De/(-Ne+tt),ot=it*-Ne;if(Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ot),W.translateZ(it),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),_e[10]===-1)W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const x=lt+it,ut=we+it,ke=dt-ot,p=gt+(De-ot),r=Ge*we/ut*x,R=Ze*we/ut*x;W.projectionMatrix.makePerspective(ke,p,r,R,x,ut),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}a(te,"setProjectionFromUnion");function Ce(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}a(Ce,"updateCamera"),this.updateCamera=function(W){if(c===null)return;let Q=W.near,Me=W.far;d.texture!==null&&(d.depthNear>0&&(Q=d.depthNear),d.depthFar>0&&(Me=d.depthFar)),Z.near=O.near=I.near=Q,Z.far=O.far=I.far=Me,(L!==Z.near||Y!==Z.far)&&(c.updateRenderState({depthNear:Z.near,depthFar:Z.far}),L=Z.near,Y=Z.far),Z.layers.mask=W.layers.mask|6,I.layers.mask=Z.layers.mask&-5,O.layers.mask=Z.layers.mask&-3;const De=W.parent,_e=Z.cameras;Ce(Z,De);for(let Oe=0;Oe<_e.length;Oe++)Ce(_e[Oe],De);_e.length===2?te(Z,I,O):Z.projectionMatrix.copy(I.projectionMatrix),g===null&&W.isPerspectiveCamera&&(g={camera:W,fov:W.fov,zoom:W.zoom}),be(W,Z,De)};function be(W,Q,Me){Me===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(Me.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Mo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}a(be,"updateUserCamera"),this.getCamera=function(){return Z},this.getFoveation=function(){if(!(h===null&&T===null))return b},this.setFoveation=function(W){b=W,h!==null&&(h.fixedFoveation=W),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=W)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(Z)},this.getCameraTexture=function(W){return l[W]};let rt=null;function ze(W,Q){if(V=Q.getViewerPose(A||u),y=Q,V!==null){const Me=V.views;T!==null&&(n.setRenderTargetFramebuffer(m,T.framebuffer),n.setRenderTarget(m));let De=!1;Me.length!==Z.cameras.length&&(Z.cameras.length=0,De=!0);for(let we=0;we<Me.length;we++){const Ge=Me[we];let Ze=null;if(T!==null)Ze=T.getViewport(Ge);else{const tt=N.getViewSubImage(h,Ge);Ze=tt.viewport,we===0&&(n.setRenderTargetTextures(m,tt.colorTexture,tt.depthStencilTexture),n.setRenderTarget(m))}let Ne=H[we];Ne===void 0&&(Ne=new fn,Ne.layers.enable(we),Ne.viewport=new _t,H[we]=Ne),Ne.matrix.fromArray(Ge.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Ge.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),we===0&&(Z.matrix.copy(Ne.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),De===!0&&Z.cameras.push(Ne)}const _e=c.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&k){N=i.getBinding();const we=N.getDepthInformation(Me[0]);we&&we.isValid&&we.texture&&d.init(we,c.renderState)}if(_e&&_e.includes("camera-access")&&k){n.state.unbindTexture(),N=i.getBinding();for(let we=0;we<Me.length;we++){const Ge=Me[we].camera;if(Ge){let Ze=l[Ge];Ze||(Ze=new qi,l[Ge]=Ze);const Ne=N.getCameraImage(Ge);Ze.sourceTexture=Ne}}}}for(let Me=0;Me<E.length;Me++){const De=_[Me],_e=E[Me];De!==null&&_e!==void 0&&_e.update(De,Q,A||u)}rt&&rt(W,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),y=null}a(ze,"onAnimationFrame");const Xe=new ya;Xe.setAnimationLoop(ze),this.setAnimationLoop=function(W){rt=W},this.dispose=function(){}}}const hd=new kt,co=new Fe;co.set(-1,0,0,0,1,0,0,0,1);function md(e,n){function t(d,l){d.matrixAutoUpdate===!0&&d.updateMatrix(),l.value.copy(d.matrix)}a(t,"refreshTransformUniform");function i(d,l){l.color.getRGB(d.fogColor.value,gr(e)),l.isFog?(d.fogNear.value=l.near,d.fogFar.value=l.far):l.isFogExp2&&(d.fogDensity.value=l.density)}a(i,"refreshFogUniforms");function c(d,l,U,X,m){l.isNodeMaterial?l.uniformsNeedUpdate=!1:l.isMeshBasicMaterial?s(d,l):l.isMeshLambertMaterial?(s(d,l),l.envMap&&(d.envMapIntensity.value=l.envMapIntensity)):l.isMeshToonMaterial?(s(d,l),N(d,l)):l.isMeshPhongMaterial?(s(d,l),V(d,l),l.envMap&&(d.envMapIntensity.value=l.envMapIntensity)):l.isMeshStandardMaterial?(s(d,l),h(d,l),l.isMeshPhysicalMaterial&&T(d,l,m)):l.isMeshMatcapMaterial?(s(d,l),y(d,l)):l.isMeshDepthMaterial?s(d,l):l.isMeshDistanceMaterial?(s(d,l),k(d,l)):l.isMeshNormalMaterial?s(d,l):l.isLineBasicMaterial?(u(d,l),l.isLineDashedMaterial&&v(d,l)):l.isPointsMaterial?b(d,l,U,X):l.isSpriteMaterial?A(d,l):l.isShadowMaterial?(d.color.value.copy(l.color),d.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}a(c,"refreshMaterialUniforms");function s(d,l){d.opacity.value=l.opacity,l.color&&d.diffuse.value.copy(l.color),l.emissive&&d.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(d.map.value=l.map,t(l.map,d.mapTransform)),l.alphaMap&&(d.alphaMap.value=l.alphaMap,t(l.alphaMap,d.alphaMapTransform)),l.bumpMap&&(d.bumpMap.value=l.bumpMap,t(l.bumpMap,d.bumpMapTransform),d.bumpScale.value=l.bumpScale,l.side===St&&(d.bumpScale.value*=-1)),l.normalMap&&(d.normalMap.value=l.normalMap,t(l.normalMap,d.normalMapTransform),d.normalScale.value.copy(l.normalScale),l.side===St&&d.normalScale.value.negate()),l.displacementMap&&(d.displacementMap.value=l.displacementMap,t(l.displacementMap,d.displacementMapTransform),d.displacementScale.value=l.displacementScale,d.displacementBias.value=l.displacementBias),l.emissiveMap&&(d.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,d.emissiveMapTransform)),l.specularMap&&(d.specularMap.value=l.specularMap,t(l.specularMap,d.specularMapTransform)),l.alphaTest>0&&(d.alphaTest.value=l.alphaTest);const U=n.get(l),X=U.envMap,m=U.envMapRotation;X&&(d.envMap.value=X,d.envMapRotation.value.setFromMatrix4(hd.makeRotationFromEuler(m)).transpose(),X.isCubeTexture&&X.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(co),d.reflectivity.value=l.reflectivity,d.ior.value=l.ior,d.refractionRatio.value=l.refractionRatio),l.lightMap&&(d.lightMap.value=l.lightMap,d.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,d.lightMapTransform)),l.aoMap&&(d.aoMap.value=l.aoMap,d.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,d.aoMapTransform))}a(s,"refreshUniformsCommon");function u(d,l){d.diffuse.value.copy(l.color),d.opacity.value=l.opacity,l.map&&(d.map.value=l.map,t(l.map,d.mapTransform))}a(u,"refreshUniformsLine");function v(d,l){d.dashSize.value=l.dashSize,d.totalSize.value=l.dashSize+l.gapSize,d.scale.value=l.scale}a(v,"refreshUniformsDash");function b(d,l,U,X){d.diffuse.value.copy(l.color),d.opacity.value=l.opacity,d.size.value=l.size*U,d.scale.value=X*.5,l.map&&(d.map.value=l.map,t(l.map,d.uvTransform)),l.alphaMap&&(d.alphaMap.value=l.alphaMap,t(l.alphaMap,d.alphaMapTransform)),l.alphaTest>0&&(d.alphaTest.value=l.alphaTest)}a(b,"refreshUniformsPoints");function A(d,l){d.diffuse.value.copy(l.color),d.opacity.value=l.opacity,d.rotation.value=l.rotation,l.map&&(d.map.value=l.map,t(l.map,d.mapTransform)),l.alphaMap&&(d.alphaMap.value=l.alphaMap,t(l.alphaMap,d.alphaMapTransform)),l.alphaTest>0&&(d.alphaTest.value=l.alphaTest)}a(A,"refreshUniformsSprites");function V(d,l){d.specular.value.copy(l.specular),d.shininess.value=Math.max(l.shininess,1e-4)}a(V,"refreshUniformsPhong");function N(d,l){l.gradientMap&&(d.gradientMap.value=l.gradientMap)}a(N,"refreshUniformsToon");function h(d,l){d.metalness.value=l.metalness,l.metalnessMap&&(d.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,d.metalnessMapTransform)),d.roughness.value=l.roughness,l.roughnessMap&&(d.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,d.roughnessMapTransform)),l.envMap&&(d.envMapIntensity.value=l.envMapIntensity)}a(h,"refreshUniformsStandard");function T(d,l,U){d.ior.value=l.ior,l.sheen>0&&(d.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),d.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(d.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,d.sheenColorMapTransform)),l.sheenRoughnessMap&&(d.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,d.sheenRoughnessMapTransform))),l.clearcoat>0&&(d.clearcoat.value=l.clearcoat,d.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(d.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,d.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(d.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===St&&d.clearcoatNormalScale.value.negate())),l.dispersion>0&&(d.dispersion.value=l.dispersion),l.retroreflectivity>0&&(d.retroreflectivity.value=l.retroreflectivity),l.iridescence>0&&(d.iridescence.value=l.iridescence,d.iridescenceIOR.value=l.iridescenceIOR,d.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(d.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,d.iridescenceMapTransform)),l.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),l.transmission>0&&(d.transmission.value=l.transmission,d.transmissionSamplerMap.value=U.texture,d.transmissionSamplerSize.value.set(U.width,U.height),l.transmissionMap&&(d.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,d.transmissionMapTransform)),d.thickness.value=l.thickness,l.thicknessMap&&(d.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=l.attenuationDistance,d.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(d.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(d.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=l.specularIntensity,d.specularColor.value.copy(l.specularColor),l.specularColorMap&&(d.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,d.specularColorMapTransform)),l.specularIntensityMap&&(d.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,d.specularIntensityMapTransform))}a(T,"refreshUniformsPhysical");function y(d,l){l.matcap&&(d.matcap.value=l.matcap)}a(y,"refreshUniformsMatcap");function k(d,l){const U=n.get(l).light;d.referencePosition.value.setFromMatrixPosition(U.matrixWorld),d.nearDistance.value=U.shadow.camera.near,d.farDistance.value=U.shadow.camera.far}return a(k,"refreshUniformsDistance"),{refreshFogUniforms:i,refreshMaterialUniforms:c}}a(md,"WebGLMaterials");function _d(e,n,t,i){let c={},s={},u=[];const v=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function b(m,E){const _=E.program;i.uniformBlockBinding(m,_)}a(b,"bind");function A(m,E){let _=c[m.id];_===void 0&&(d(m),_=V(m),c[m.id]=_,m.addEventListener("dispose",U));const w=E.program;i.updateUBOMapping(m,w);const f=n.render.frame;s[m.id]!==f&&(h(m),s[m.id]=f)}a(A,"update");function V(m){const E=N();m.__bindingPointIndex=E;const _=e.createBuffer(),w=m.__size,f=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,_),e.bufferData(e.UNIFORM_BUFFER,w,f),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,_),_}a(V,"createBuffer");function N(){for(let m=0;m<v;m++)if(u.indexOf(m)===-1)return u.push(m),m;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}a(N,"allocateBindingPointIndex");function h(m){const E=c[m.id],_=m.uniforms,w=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let f=0,g=_.length;f<g;f++){const I=_[f];if(Array.isArray(I))for(let O=0,H=I.length;O<H;O++)T(I[O],f,O,w);else T(I,f,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}a(h,"updateBufferData");function T(m,E,_,w){if(k(m,E,_,w)===!0){const f=m.__offset,g=m.value;if(Array.isArray(g)){let I=0;for(let O=0;O<g.length;O++){const H=g[O],Z=l(H);y(H,m.__data,I),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(I+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(g,m.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,f,m.__data)}}a(T,"updateUniform");function y(m,E,_){typeof m=="number"||typeof m=="boolean"?E[0]=m:m.isMatrix3?(E[0]=m.elements[0],E[1]=m.elements[1],E[2]=m.elements[2],E[3]=0,E[4]=m.elements[3],E[5]=m.elements[4],E[6]=m.elements[5],E[7]=0,E[8]=m.elements[6],E[9]=m.elements[7],E[10]=m.elements[8],E[11]=0):ArrayBuffer.isView(m)?E.set(new m.constructor(m.buffer,m.byteOffset,E.length)):m.toArray(E,_)}a(y,"writeUniformValue");function k(m,E,_,w){const f=m.value,g=E+"_"+_;if(w[g]===void 0)return typeof f=="number"||typeof f=="boolean"?w[g]=f:ArrayBuffer.isView(f)?w[g]=f.slice():w[g]=f.clone(),!0;{const I=w[g];if(typeof f=="number"||typeof f=="boolean"){if(I!==f)return w[g]=f,!0}else{if(ArrayBuffer.isView(f))return!0;if(I.equals(f)===!1)return I.copy(f),!0}}return!1}a(k,"hasUniformChanged");function d(m){const E=m.uniforms;let _=0;const w=16;for(let g=0,I=E.length;g<I;g++){const O=Array.isArray(E[g])?E[g]:[E[g]];for(let H=0,Z=O.length;H<Z;H++){const L=O[H],Y=Array.isArray(L.value)?L.value:[L.value];for(let J=0,q=Y.length;J<q;J++){const ie=Y[J],$=l(ie),ee=_%w,te=ee%$.boundary,Ce=ee+te;_+=te,Ce!==0&&w-Ce<$.storage&&(_+=w-Ce),L.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=$.storage}}}const f=_%w;return f>0&&(_+=w-f),m.__size=_,m.__cache={},this}a(d,"prepareUniformsGroup");function l(m){const E={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(E.boundary=4,E.storage=4):m.isVector2?(E.boundary=8,E.storage=8):m.isVector3||m.isColor?(E.boundary=16,E.storage=12):m.isVector4?(E.boundary=16,E.storage=16):m.isMatrix3?(E.boundary=48,E.storage=48):m.isMatrix4?(E.boundary=64,E.storage=64):m.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(E.boundary=16,E.storage=m.byteLength):We("WebGLRenderer: Unsupported uniform value type.",m),E}a(l,"getUniformSize");function U(m){const E=m.target;E.removeEventListener("dispose",U);const _=u.indexOf(E.__bindingPointIndex);u.splice(_,1),e.deleteBuffer(c[E.id]),delete c[E.id],delete s[E.id]}a(U,"onUniformsGroupsDispose");function X(){for(const m in c)e.deleteBuffer(c[m]);u=[],c={},s={}}return a(X,"dispose"),{bind:b,update:A,dispose:X}}a(_d,"WebGLUniformsGroups");const gd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yt=null;function vd(){return yt===null&&(yt=new Da(gd,16,16,Kt,Dt),yt.name="DFG_LUT",yt.minFilter=Et,yt.magFilter=Et,yt.wrapS=Ln,yt.wrapT=Ln,yt.generateMipmaps=!1,yt.needsUpdate=!0),yt}a(vd,"getDFGLUT");class Sd{static{a(this,"WebGLRenderer")}constructor(n={}){const{canvas:t=wa(),context:i=null,depth:c=!0,stencil:s=!1,alpha:u=!1,antialias:v=!1,premultipliedAlpha:b=!0,preserveDrawingBuffer:A=!1,powerPreference:V="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:h=!1,outputBufferType:T=At}=n;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=u;const k=T,d=new Set([gi,_i,mi]),l=new Set([At,Vt,mn,rn,pi,hi]),U=new Uint32Array(4),X=new Int32Array(4),m=new ye;let E=null,_=null;const w=[],f=[];let g=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let O=!1,H=null,Z=null,L=null,Y=null;this._outputColorSpace=Ia;let J=0,q=0,ie=null,$=-1,ee=null;const te=new _t,Ce=new _t;let be=null;const rt=new et(0);let ze=0,Xe=t.width,W=t.height,Q=1,Me=null,De=null;const _e=new _t(0,0,Xe,W),Oe=new _t(0,0,Xe,W);let lt=!1;const we=new si;let Ge=!1,Ze=!1;const Ne=new kt,tt=new ye,dt=new _t,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function ot(){return ie===null?Q:1}a(ot,"getTargetPixelRatio");let x=i;function ut(o,S){return t.getContext(o,S)}a(ut,"getContext");let ke,p,r,R,D,B,ne,re,G,K,ae,xe,fe,oe,Te,Re,Pe,M,se,z,le,pe,j;try{const o={alpha:!0,depth:c,stencil:s,antialias:v,premultipliedAlpha:b,preserveDrawingBuffer:A,powerPreference:V,failIfMajorPerformanceCaveat:N};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Na}`),t.addEventListener("webglcontextlost",$e,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",Tt,!1),x===null){const S="webgl2";if(x=ut(S,o),x===null)throw ut(S)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(o){throw t.removeEventListener("webglcontextlost",$e,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",Tt,!1),Je("WebGLRenderer: "+o.message),o}function Ae(){ke=new vc(x),ke.init(),le=new lo(x,ke),p=new lc(x,ke,n,le),r=new ld(x,ke),p.reversedDepthBuffer&&h&&r.buffers.depth.setReversed(!0),Z=x.createFramebuffer(),L=x.createFramebuffer(),Y=x.createFramebuffer(),R=new Mc(x),D=new qf,B=new cd(x,ke,r,D,p,le,R),ne=new gc(I),re=new To(x),pe=new oc(x,re),G=new Sc(x,re,R,pe),K=new Tc(x,G,re,pe,R),M=new xc(x,p,B),Te=new cc(D),ae=new Yf(I,ne,ke,p,pe,Te),xe=new md(I,D),fe=new $f,oe=new nd(ke),Pe=new ac(I,ne,r,K,y,b),Re=new sd(I,K,p),j=new _d(x,R,p,r),se=new sc(x,ke,R),z=new Ec(x,ke,R),R.programs=ae.programs,I.capabilities=p,I.extensions=ke,I.properties=D,I.renderLists=fe,I.shadowMap=Re,I.state=r,I.info=R}a(Ae,"initGLContext"),k!==At&&(g=new Rc(k,t.width,t.height,v,c,s));const Se=new pd(I,x);this.xr=Se,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const o=ke.get("WEBGL_lose_context");o&&o.loseContext()},this.forceContextRestore=function(){const o=ke.get("WEBGL_lose_context");o&&o.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(o){o!==void 0&&(Q=o,this.setSize(Xe,W,!1))},this.getSize=function(o){return o.set(Xe,W)},this.setSize=function(o,S,F=!0){if(Se.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=o,W=S,t.width=Math.floor(o*Q),t.height=Math.floor(S*Q),F===!0&&(t.style.width=o+"px",t.style.height=S+"px"),g!==null&&g.setSize(t.width,t.height),this.setViewport(0,0,o,S)},this.getDrawingBufferSize=function(o){return o.set(Xe*Q,W*Q).floor()},this.setDrawingBufferSize=function(o,S,F){Xe=o,W=S,Q=F,t.width=Math.floor(o*F),t.height=Math.floor(S*F),this.setViewport(0,0,o,S)},this.setEffects=function(o){if(k===At){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(o){for(let S=0;S<o.length;S++)if(o[S].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(o||[])},this.getCurrentViewport=function(o){return o.copy(te)},this.getViewport=function(o){return o.copy(_e)},this.setViewport=function(o,S,F,C){o.isVector4?_e.set(o.x,o.y,o.z,o.w):_e.set(o,S,F,C),r.viewport(te.copy(_e).multiplyScalar(Q).round())},this.getScissor=function(o){return o.copy(Oe)},this.setScissor=function(o,S,F,C){o.isVector4?Oe.set(o.x,o.y,o.z,o.w):Oe.set(o,S,F,C),r.scissor(Ce.copy(Oe).multiplyScalar(Q).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(o){r.setScissorTest(lt=o)},this.setOpaqueSort=function(o){Me=o},this.setTransparentSort=function(o){De=o},this.getClearColor=function(o){return o.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(o=!0,S=!0,F=!0){let C=0;if(o){let P=!1;if(ie!==null){const ue=ie.texture.format;P=d.has(ue)}if(P){const ue=ie.texture.type,me=l.has(ue),de=Pe.getClearColor(),ge=Pe.getClearAlpha(),Ee=de.r,Ue=de.g,Ie=de.b;me?(U[0]=Ee,U[1]=Ue,U[2]=Ie,U[3]=ge,x.clearBufferuiv(x.COLOR,0,U)):(X[0]=Ee,X[1]=Ue,X[2]=Ie,X[3]=ge,x.clearBufferiv(x.COLOR,0,X))}else C|=x.COLOR_BUFFER_BIT}S&&(C|=x.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),F&&(C|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C!==0&&x.clear(C)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(o){o.setRenderer(this),H=o},this.dispose=function(){t.removeEventListener("webglcontextlost",$e,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",Tt,!1),Pe.dispose(),fe.dispose(),oe.dispose(),D.dispose(),ne.dispose(),K.dispose(),pe.dispose(),j.dispose(),ae.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",lr),Se.removeEventListener("sessionend",cr),Wt.stop()};function $e(o){o.preventDefault(),Zi("WebGLRenderer: Context Lost."),O=!0}a($e,"onContextLost");function He(){Zi("WebGLRenderer: Context Restored."),O=!1;const o=R.autoReset,S=Re.enabled,F=Re.autoUpdate,C=Re.needsUpdate,P=Re.type;Ae(),R.autoReset=o,Re.enabled=S,Re.autoUpdate=F,Re.needsUpdate=C,Re.type=P}a(He,"onContextRestore");function Tt(o){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",o.statusMessage)}a(Tt,"onContextCreationError");function Ct(o){const S=o.target;S.removeEventListener("dispose",Ct),fo(S)}a(Ct,"onMaterialDispose");function fo(o){uo(o),D.remove(o)}a(fo,"deallocateMaterial");function uo(o){const S=D.get(o).programs;S!==void 0&&(S.forEach(function(F){ae.releaseProgram(F)}),o.isShaderMaterial&&ae.releaseShaderCache(o))}a(uo,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(o,S,F,C,P,ue){S===null&&(S=gt);const me=P.isMesh&&P.matrixWorld.determinantAffine()<0,de=mo(o,S,F,C,P);r.setMaterial(C,me);let ge=F.index,Ee=1;if(C.wireframe===!0){if(ge=G.getWireframeAttribute(F),ge===void 0)return;Ee=2}const Ue=F.drawRange,Ie=F.attributes.position;let ve=Ue.start*Ee,Ve=(Ue.start+Ue.count)*Ee;ue!==null&&(ve=Math.max(ve,ue.start*Ee),Ve=Math.min(Ve,(ue.start+ue.count)*Ee)),ge!==null?(ve=Math.max(ve,0),Ve=Math.min(Ve,ge.count)):Ie!=null&&(ve=Math.max(ve,0),Ve=Math.min(Ve,Ie.count));const st=Ve-ve;if(st<0||st===1/0)return;pe.setup(P,C,de,F,ge);let je,Ye=se;if(ge!==null&&(je=re.get(ge),Ye=z,Ye.setIndex(je)),P.isMesh)C.wireframe===!0?(r.setLineWidth(C.wireframeLinewidth*ot()),Ye.setMode(x.LINES)):Ye.setMode(x.TRIANGLES);else if(P.isLine){let pt=C.linewidth;pt===void 0&&(pt=1),r.setLineWidth(pt*ot()),P.isLineSegments?Ye.setMode(x.LINES):P.isLineLoop?Ye.setMode(x.LINE_LOOP):Ye.setMode(x.LINE_STRIP)}else P.isPoints?Ye.setMode(x.POINTS):P.isSprite&&Ye.setMode(x.TRIANGLES);if(P.isBatchedMesh)if(ke.get("WEBGL_multi_draw"))Ye.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const pt=P._multiDrawStarts,he=P._multiDrawCounts,ht=P._multiDrawCount,Be=ge?re.get(ge).bytesPerElement:1,Mt=D.get(C).currentProgram.getUniforms();for(let Pt=0;Pt<ht;Pt++)Mt.setValue(x,"_gl_DrawID",Pt),Ye.render(pt[Pt]/Be,he[Pt])}else if(P.isInstancedMesh)Ye.renderInstances(ve,st,P.count);else if(F.isInstancedBufferGeometry){const pt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,he=Math.min(F.instanceCount,pt);Ye.renderInstances(ve,st,he)}else Ye.render(ve,st)};function sr(o,S,F,C){H!==null&&o.isNodeMaterial&&H.setObject(C,o),Ge===!0&&Te.setState(o,F,!1),o.transparent===!0&&o.side===Nt&&o.forceSinglePass===!1?(o.side=St,o.needsUpdate=!0,En(o,S,C),o.side=jt,o.needsUpdate=!0,En(o,S,C),o.side=Nt):En(o,S,C)}a(sr,"prepareMaterial"),this.compile=function(o,S,F=null){F===null&&(F=o),H!==null&&H.renderStart(o,S,F),_=oe.get(F),_.init(S),f.push(_),F.traverseVisible(function(P){P.isLight&&P.layers.test(S.layers)&&(_.pushLight(P),P.castShadow&&_.pushShadow(P))}),o!==F&&o.traverseVisible(function(P){P.isLight&&P.layers.test(S.layers)&&(_.pushLight(P),P.castShadow&&_.pushShadow(P))}),_.setupLights(),H!==null&&H.updateLights(_.state.lightsArray),Ze=this.localClippingEnabled,Ge=Te.init(this.clippingPlanes,Ze),Ge===!0&&Te.setGlobalState(this.clippingPlanes,S),H!==null&&Re.render(_.state.shadowsArray,F,S);const C=new Set;return o.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const ue=P.material;if(ue)if(Array.isArray(ue))for(let me=0;me<ue.length;me++){const de=ue[me];sr(de,F,S,P),C.add(de)}else sr(ue,F,S,P),C.add(ue)}),_=f.pop(),H!==null&&H.renderEnd(),C},this.compileAsync=function(o,S,F=null){const C=this.compile(o,S,F);return new Promise(P=>{function ue(){if(C.forEach(function(me){const ge=D.get(me).currentProgram;(ge===void 0||ge.isReady())&&C.delete(me)}),C.size===0){P(o);return}setTimeout(ue,10)}a(ue,"checkMaterialsReady"),ke.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Vn=null;function po(o){Vn&&Vn(o)}a(po,"onAnimationFrame");function lr(){Wt.stop()}a(lr,"onXRSessionStart");function cr(){Wt.start()}a(cr,"onXRSessionEnd");const Wt=new ya;Wt.setAnimationLoop(po),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(o){Vn=o,Se.setAnimationLoop(o),o===null?Wt.stop():Wt.start()},Se.addEventListener("sessionstart",lr),Se.addEventListener("sessionend",cr),this.render=function(o,S){if(S!==void 0&&S.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;H!==null&&H.renderStart(o,S);const F=Se.enabled===!0&&Se.isPresenting===!0,C=g!==null&&(ie===null||F)&&g.begin(I,ie);if(o.matrixWorldAutoUpdate===!0&&o.updateMatrixWorld(),S.parent===null&&S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(g===null||g.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(S),S=Se.getCamera()),o.isScene===!0&&o.onBeforeRender(I,o,S,ie),_=oe.get(o,f.length),_.init(S),_.state.textureUnits=B.getTextureUnits(),f.push(_),Ne.multiplyMatrices(S.projectionMatrix,S.matrixWorldInverse),we.setFromProjectionMatrix(Ne,$i,S.reversedDepth),Ze=this.localClippingEnabled,Ge=Te.init(this.clippingPlanes,Ze),E=fe.get(o,w.length),E.init(),w.push(E),Se.enabled===!0&&Se.isPresenting===!0){const me=I.xr.getDepthSensingMesh();me!==null&&Wn(me,S,-1/0,I.sortObjects)}Wn(o,S,0,I.sortObjects),E.finish(),H!==null&&H.updateLights(_.state.lightsArray),I.sortObjects===!0&&E.sort(Me,De),it=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,it&&Pe.addToRenderList(E,o),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ge===!0&&Te.beginShadows();const P=_.state.shadowsArray;if(Re.render(P,o,S),Ge===!0&&Te.endShadows(),(C&&g.hasRenderPass())===!1){const me=E.opaque,de=E.transmissive;if(_.setupLights(),S.isArrayCamera){const ge=S.cameras;if(de.length>0)for(let Ee=0,Ue=ge.length;Ee<Ue;Ee++){const Ie=ge[Ee];dr(me,de,o,Ie)}it&&Pe.render(o);for(let Ee=0,Ue=ge.length;Ee<Ue;Ee++){const Ie=ge[Ee];fr(E,o,Ie,Ie.viewport)}}else de.length>0&&dr(me,de,o,S),it&&Pe.render(o),fr(E,o,S)}ie!==null&&q===0&&(B.updateMultisampleRenderTarget(ie),B.updateRenderTargetMipmap(ie)),C&&g.end(I),o.isScene===!0&&o.onAfterRender(I,o,S),pe.resetDefaultState(),$=-1,ee=null,f.pop(),f.length>0?(_=f[f.length-1],B.setTextureUnits(_.state.textureUnits),Ge===!0&&Te.setGlobalState(I.clippingPlanes,_.state.camera)):_=null,w.pop(),w.length>0?E=w[w.length-1]:E=null,H!==null&&H.renderEnd()};function Wn(o,S,F,C){if(o.visible===!1)return;if(o.layers.test(S.layers)){if(o.isGroup)F=o.renderOrder;else if(o.isLOD)o.autoUpdate===!0&&o.update(S);else if(o.isLightProbeGrid)_.pushLightProbeGrid(o);else if(o.isLight)_.pushLight(o),o.castShadow&&_.pushShadow(o);else if(o.isSprite){if(!o.frustumCulled||o.intersectsFrustum(we)){C&&dt.setFromMatrixPosition(o.matrixWorld).applyMatrix4(Ne);const me=K.update(o),de=o.material;de.visible&&E.push(o,me,de,F,dt.z,null,S)}}else if((o.isMesh||o.isLine||o.isPoints)&&(!o.frustumCulled||o.intersectsFrustum(we))){const me=K.update(o),de=o.material;if(C&&(o.boundingSphere!==void 0?(o.boundingSphere===null&&o.computeBoundingSphere(),dt.copy(o.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),dt.copy(me.boundingSphere.center)),dt.applyMatrix4(o.matrixWorld).applyMatrix4(Ne)),Array.isArray(de)){const ge=me.groups;for(let Ee=0,Ue=ge.length;Ee<Ue;Ee++){const Ie=ge[Ee],ve=de[Ie.materialIndex];ve&&ve.visible&&E.push(o,me,ve,F,dt.z,Ie,S)}}else de.visible&&E.push(o,me,de,F,dt.z,null,S)}}const ue=o.children;for(let me=0,de=ue.length;me<de;me++)Wn(ue[me],S,F,C)}a(Wn,"projectObject");function fr(o,S,F,C){const{opaque:P,transmissive:ue,transparent:me}=o;_.setupLightsView(F),Ge===!0&&Te.setGlobalState(I.clippingPlanes,F),C&&r.viewport(te.copy(C)),P.length>0&&Sn(P,S,F),ue.length>0&&Sn(ue,S,F),me.length>0&&Sn(me,S,F),r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),r.setPolygonOffset(!1)}a(fr,"renderScene");function dr(o,S,F,C){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget[C.id]===void 0){const ve=ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float");_.state.transmissionRenderTarget[C.id]=new xt(1,1,{generateMipmaps:!0,type:ve?Dt:At,minFilter:Xt,samples:Math.max(4,p.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const ue=_.state.transmissionRenderTarget[C.id],me=C.viewport||te;ue.setSize(me.z*I.transmissionResolutionScale,me.w*I.transmissionResolutionScale);const de=I.getRenderTarget(),ge=I.getActiveCubeFace(),Ee=I.getActiveMipmapLevel();I.setRenderTarget(ue),I.getClearColor(rt),ze=I.getClearAlpha(),ze<1&&I.setClearColor(16777215,.5),I.clear(),it&&Pe.render(F);const Ue=I.toneMapping;I.toneMapping=Rt;const Ie=C.viewport;if(C.viewport!==void 0&&(C.viewport=void 0),_.setupLightsView(C),Ge===!0&&Te.setGlobalState(I.clippingPlanes,C),Sn(o,F,C),B.updateMultisampleRenderTarget(ue),B.updateRenderTargetMipmap(ue),ke.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Ve=0,st=S.length;Ve<st;Ve++){const je=S[Ve],{object:Ye,geometry:pt,material:he,group:ht}=je;if(he.side===Nt&&Ye.layers.test(C.layers)){const Be=he.side;he.side=St,he.needsUpdate=!0,ur(Ye,F,C,pt,he,ht),he.side=Be,he.needsUpdate=!0,ve=!0}}ve===!0&&(B.updateMultisampleRenderTarget(ue),B.updateRenderTargetMipmap(ue))}I.setRenderTarget(de,ge,Ee),I.setClearColor(rt,ze),Ie!==void 0&&(C.viewport=Ie),I.toneMapping=Ue}a(dr,"renderTransmissionPass");function Sn(o,S,F){const C=S.isScene===!0?S.overrideMaterial:null;for(let P=0,ue=o.length;P<ue;P++){const me=o[P],{object:de,geometry:ge,group:Ee}=me;let Ue=me.material;Ue.allowOverride===!0&&C!==null&&(Ue=C),de.layers.test(F.layers)&&ur(de,S,F,ge,Ue,Ee)}}a(Sn,"renderObjects");function ur(o,S,F,C,P,ue){H!==null&&P.isNodeMaterial&&H.setObject(o,P),o.onBeforeRender(I,S,F,C,P,ue),o.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,o.matrixWorld),o.normalMatrix.getNormalMatrix(o.modelViewMatrix),P.onBeforeRender(I,S,F,C,o,ue),P.transparent===!0&&P.side===Nt&&P.forceSinglePass===!1?(P.side=St,P.needsUpdate=!0,I.renderBufferDirect(F,S,C,P,o,ue),P.side=jt,P.needsUpdate=!0,I.renderBufferDirect(F,S,C,P,o,ue),P.side=Nt):I.renderBufferDirect(F,S,C,P,o,ue),o.onAfterRender(I,S,F,C,P,ue)}a(ur,"renderObject");function En(o,S,F){S.isScene!==!0&&(S=gt);const C=D.get(o),P=_.state.lights,ue=_.state.shadowsArray,me=P.state.version,de=ae.getParameters(o,P.state,ue,S,F,_.state.lightProbeGridArray),ge=ae.getProgramCacheKey(de);let Ee=C.programs;C.environment=o.isMeshStandardMaterial||o.isMeshLambertMaterial||o.isMeshPhongMaterial?S.environment:null,C.fog=S.fog;const Ue=o.isMeshStandardMaterial||o.isMeshLambertMaterial&&!o.envMap||o.isMeshPhongMaterial&&!o.envMap;C.envMap=ne.get(o.envMap||C.environment,Ue),C.envMapRotation=C.environment!==null&&o.envMap===null?S.environmentRotation:o.envMapRotation,Ee===void 0&&(o.addEventListener("dispose",Ct),Ee=new Map,C.programs=Ee);let Ie=Ee.get(ge);if(Ie!==void 0){if(C.currentProgram===Ie&&C.lightsStateVersion===me)return hr(o,de),Ie}else de.uniforms=ae.getUniforms(o),H!==null&&o.isNodeMaterial&&H.build(o,F,de),o.onBeforeCompile(de,I),Ie=ae.acquireProgram(de,ge),Ee.set(ge,Ie),C.uniforms=de.uniforms;const ve=C.uniforms;return(!o.isShaderMaterial&&!o.isRawShaderMaterial||o.clipping===!0)&&(ve.clippingPlanes=Te.uniform),hr(o,de),C.needsLights=go(o),C.lightsStateVersion=me,C.needsLights&&(ve.ambientLightColor.value=P.state.ambient,ve.lightProbe.value=P.state.probe,ve.sunLights.value=P.state.sun,ve.sunLightShadows.value=P.state.sunShadow,ve.directionalLights.value=P.state.directional,ve.directionalLightShadows.value=P.state.directionalShadow,ve.spotLights.value=P.state.spot,ve.spotLightShadows.value=P.state.spotShadow,ve.rectAreaLights.value=P.state.rectArea,ve.ltc_1.value=P.state.rectAreaLTC1,ve.ltc_2.value=P.state.rectAreaLTC2,ve.pointLights.value=P.state.point,ve.pointLightShadows.value=P.state.pointShadow,ve.hemisphereLights.value=P.state.hemi,ve.sunShadowMatrix.value=P.state.sunShadowMatrix,ve.sunShadowCascade.value=P.state.sunShadowCascade,ve.directionalShadowMatrix.value=P.state.directionalShadowMatrix,ve.spotLightMatrix.value=P.state.spotLightMatrix,ve.spotLightMap.value=P.state.spotLightMap,ve.pointShadowMatrix.value=P.state.pointShadowMatrix),C.lightProbeGrid=_.state.lightProbeGridArray.length>0,C.currentProgram=Ie,C.uniformsList=null,Ie}a(En,"getProgram");function pr(o){if(o.uniformsList===null){const S=o.currentProgram.getUniforms();o.uniformsList=Gn.seqWithValue(S.seq,o.uniforms)}return o.uniformsList}a(pr,"getUniformList");function hr(o,S){const F=D.get(o);F.outputColorSpace=S.outputColorSpace,F.batching=S.batching,F.batchingColor=S.batchingColor,F.instancing=S.instancing,F.instancingColor=S.instancingColor,F.instancingMorph=S.instancingMorph,F.skinning=S.skinning,F.morphTargets=S.morphTargets,F.morphNormals=S.morphNormals,F.morphColors=S.morphColors,F.morphTargetsCount=S.morphTargetsCount,F.numClippingPlanes=S.numClippingPlanes,F.numIntersection=S.numClipIntersection,F.vertexAlphas=S.vertexAlphas,F.vertexTangents=S.vertexTangents,F.toneMapping=S.toneMapping}a(hr,"updateCommonMaterialProperties");function ho(o,S){if(o.length===0)return null;if(o.length===1)return o[0].texture!==null?o[0]:null;m.setFromMatrixPosition(S.matrixWorld);for(let F=0,C=o.length;F<C;F++){const P=o[F];if(P.texture!==null&&P.boundingBox.containsPoint(m))return P}return null}a(ho,"findLightProbeGrid");function mo(o,S,F,C,P){S.isScene!==!0&&(S=gt),B.resetTextureUnits();const ue=S.fog,me=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?S.environment:null,de=ie===null?I.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:nt.workingColorSpace,ge=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap,Ee=ne.get(C.envMap||me,ge),Ue=C.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ie=!!F.attributes.tangent&&(!!C.normalMap||C.anisotropy>0),ve=!!F.morphAttributes.position,Ve=!!F.morphAttributes.normal,st=!!F.morphAttributes.color;let je=Rt;C.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(je=I.toneMapping);const Ye=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,pt=Ye!==void 0?Ye.length:0,he=D.get(C),ht=_.state.lights;if(Ge===!0&&(Ze===!0||o!==ee)){const Qe=o===ee&&C.id===$;Te.setState(C,o,Qe)}let Be=!1;C.version===he.__version?(he.needsLights&&he.lightsStateVersion!==ht.state.version||he.outputColorSpace!==de||P.isBatchedMesh&&he.batching===!1||!P.isBatchedMesh&&he.batching===!0||P.isBatchedMesh&&he.batchingColor===!0&&P._colorsTexture===null||P.isBatchedMesh&&he.batchingColor===!1&&P._colorsTexture!==null||P.isInstancedMesh&&he.instancing===!1||!P.isInstancedMesh&&he.instancing===!0||P.isSkinnedMesh&&he.skinning===!1||!P.isSkinnedMesh&&he.skinning===!0||P.isInstancedMesh&&he.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&he.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&he.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&he.instancingMorph===!1&&P.morphTexture!==null||he.envMap!==Ee||C.fog===!0&&he.fog!==ue||he.numClippingPlanes!==void 0&&(he.numClippingPlanes!==Te.numPlanes||he.numIntersection!==Te.numIntersection)||he.vertexAlphas!==Ue||he.vertexTangents!==Ie||he.morphTargets!==ve||he.morphNormals!==Ve||he.morphColors!==st||he.toneMapping!==je||he.morphTargetsCount!==pt||!!he.lightProbeGrid!=_.state.lightProbeGridArray.length>0)&&(Be=!0):(Be=!0,he.__version=C.version);let Mt=he.currentProgram;Be===!0&&(Mt=En(C,S,P),H&&C.isNodeMaterial&&H.onUpdateProgram(C,Mt,he));let Pt=!1,Ot=!1,Qt=!1;const Ke=Mt.getUniforms(),at=he.uniforms;if(r.useProgram(Mt.program)&&(Pt=!0,Ot=!0,Qt=!0),C.id!==$&&($=C.id,Ot=!0),he.needsLights){const Qe=ho(_.state.lightProbeGridArray,P);he.lightProbeGrid!==Qe&&(he.lightProbeGrid=Qe,Ot=!0)}if(Pt||ee!==o){r.buffers.depth.getReversed()&&o.reversedDepth!==!0&&(o._reversedDepth=!0,o.updateProjectionMatrix()),Ke.setValue(x,"projectionMatrix",o.projectionMatrix),Ke.setValue(x,"viewMatrix",o.matrixWorldInverse);const Gt=Ke.map.cameraPosition;Gt!==void 0&&Gt.setValue(x,tt.setFromMatrixPosition(o.matrixWorld)),p.logarithmicDepthBuffer&&Ke.setValue(x,"logDepthBufFC",2/(Math.log(o.far+1)/Math.LN2)),(C.isMeshPhongMaterial||C.isMeshToonMaterial||C.isMeshLambertMaterial||C.isMeshBasicMaterial||C.isMeshStandardMaterial||C.isShaderMaterial)&&Ke.setValue(x,"isOrthographic",o.isOrthographicCamera===!0),ee!==o&&(ee=o,Ot=!0,Qt=!0)}if(he.needsLights&&(ht.state.sunShadowMap.length>0&&Ke.setValue(x,"sunShadowMap",ht.state.sunShadowMap,B),ht.state.directionalShadowMap.length>0&&Ke.setValue(x,"directionalShadowMap",ht.state.directionalShadowMap,B),ht.state.spotShadowMap.length>0&&Ke.setValue(x,"spotShadowMap",ht.state.spotShadowMap,B),ht.state.pointShadowMap.length>0&&Ke.setValue(x,"pointShadowMap",ht.state.pointShadowMap,B)),P.isSkinnedMesh){Ke.setOptional(x,P,"bindMatrix"),Ke.setOptional(x,P,"bindMatrixInverse");const Qe=P.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Ke.setValue(x,"boneTexture",Qe.boneTexture,B))}P.isBatchedMesh&&(Ke.setOptional(x,P,"batchingTexture"),Ke.setValue(x,"batchingTexture",P._matricesTexture,B),Ke.setOptional(x,P,"batchingIdTexture"),Ke.setValue(x,"batchingIdTexture",P._indirectTexture,B),Ke.setOptional(x,P,"batchingColorTexture"),P._colorsTexture!==null&&Ke.setValue(x,"batchingColorTexture",P._colorsTexture,B));const Bt=F.morphAttributes;if((Bt.position!==void 0||Bt.normal!==void 0||Bt.color!==void 0)&&M.update(P,F,Mt),(Ot||he.receiveShadow!==P.receiveShadow)&&(he.receiveShadow=P.receiveShadow,Ke.setValue(x,"receiveShadow",P.receiveShadow)),(C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial)&&C.envMap===null&&S.environment!==null&&(at.envMapIntensity.value=S.environmentIntensity),at.dfgLUT!==void 0&&(at.dfgLUT.value=vd()),Ot){if(Ke.setValue(x,"toneMappingExposure",I.toneMappingExposure),he.needsLights&&_o(at,Qt),ue&&C.fog===!0&&xe.refreshFogUniforms(at,ue),xe.refreshMaterialUniforms(at,C,Q,W,_.state.transmissionRenderTarget[o.id]),he.needsLights&&he.lightProbeGrid){const Qe=he.lightProbeGrid;at.probesSH.value=Qe.texture,at.probesMin.value.copy(Qe.boundingBox.min),at.probesMax.value.copy(Qe.boundingBox.max),at.probesResolution.value.copy(Qe.resolution)}Gn.upload(x,pr(he),at,B)}if(C.isShaderMaterial&&C.uniformsNeedUpdate===!0&&(Gn.upload(x,pr(he),at,B),C.uniformsNeedUpdate=!1),C.isSpriteMaterial&&Ke.setValue(x,"center",P.center),Ke.setValue(x,"modelViewMatrix",P.modelViewMatrix),Ke.setValue(x,"normalMatrix",P.normalMatrix),Ke.setValue(x,"modelMatrix",P.matrixWorld),C.uniformsGroups!==void 0){const Qe=C.uniformsGroups;for(let Gt=0,Jt=Qe.length;Gt<Jt;Gt++){const _r=Qe[Gt];j.update(_r,Mt),j.bind(_r,Mt)}}return Mt}a(mo,"setProgram");function _o(o,S){o.ambientLightColor.needsUpdate=S,o.lightProbe.needsUpdate=S,o.sunLights.needsUpdate=S,o.sunLightShadows.needsUpdate=S,o.directionalLights.needsUpdate=S,o.directionalLightShadows.needsUpdate=S,o.pointLights.needsUpdate=S,o.pointLightShadows.needsUpdate=S,o.spotLights.needsUpdate=S,o.spotLightShadows.needsUpdate=S,o.rectAreaLights.needsUpdate=S,o.hemisphereLights.needsUpdate=S}a(_o,"markUniformsLightsNeedsUpdate");function go(o){return o.isMeshLambertMaterial||o.isMeshToonMaterial||o.isMeshPhongMaterial||o.isMeshStandardMaterial||o.isShadowMaterial||o.isShaderMaterial&&o.lights===!0}a(go,"materialNeedsLights"),this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(o,S,F){const C=D.get(o);C.__autoAllocateDepthBuffer=o.resolveDepthBuffer===!1,C.__autoAllocateDepthBuffer===!1&&(C.__useRenderToTexture=!1),D.get(o.texture).__webglTexture=S,D.get(o.depthTexture).__webglTexture=C.__autoAllocateDepthBuffer?void 0:F,C.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(o,S){const F=D.get(o);F.__webglFramebuffer=S,F.__useDefaultFramebuffer=S===void 0},this.setRenderTarget=function(o,S=0,F=0){ie=o,J=S,q=F;let C=null,P=!1,ue=!1;if(o){const de=D.get(o);if(de.__useDefaultFramebuffer!==void 0){r.bindFramebuffer(x.FRAMEBUFFER,de.__webglFramebuffer),te.copy(o.viewport),Ce.copy(o.scissor),be=o.scissorTest,r.viewport(te),r.scissor(Ce),r.setScissorTest(be),$=-1;return}else if(de.__webglFramebuffer===void 0)B.setupRenderTarget(o);else if(de.__hasExternalTextures)B.rebindTextures(o,D.get(o.texture).__webglTexture,D.get(o.depthTexture).__webglTexture);else if(o.depthBuffer){const Ue=o.depthTexture;if(de.__boundDepthTexture!==Ue){if(Ue!==null&&D.has(Ue)&&(o.width!==Ue.image.width||o.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(o)}}const ge=o.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(ue=!0);const Ee=D.get(o).__webglFramebuffer;o.isWebGLCubeRenderTarget?(Array.isArray(Ee[S])?C=Ee[S][F]:C=Ee[S],P=!0):o.samples>0&&B.useMultisampledRTT(o)===!1?C=D.get(o).__webglMultisampledFramebuffer:Array.isArray(Ee)?C=Ee[F]:C=Ee,te.copy(o.viewport),Ce.copy(o.scissor),be=o.scissorTest}else te.copy(_e).multiplyScalar(Q).floor(),Ce.copy(Oe).multiplyScalar(Q).floor(),be=lt;if(F!==0&&(C=Z),r.bindFramebuffer(x.FRAMEBUFFER,C)&&r.drawBuffers(o,C),r.viewport(te),r.scissor(Ce),r.setScissorTest(be),P){const de=D.get(o.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+S,de.__webglTexture,F)}else if(ue){const de=S;for(let ge=0;ge<o.textures.length;ge++){const Ee=D.get(o.textures[ge]);x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0+ge,Ee.__webglTexture,F,de)}}else if(o!==null&&F!==0){const de=D.get(o.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,de.__webglTexture,F)}$=-1};function mr(o){const S=D.get(o);return(S.__readFormat!==o.format||S.__readType!==o.type)&&(S.__readFormat=o.format,S.__readType=o.type,S.__formatReadable=p.textureFormatReadable(o.format),S.__typeReadable=p.textureTypeReadable(o.type)),S}a(mr,"getReadableState"),this.readRenderTargetPixels=function(o,S,F,C,P,ue,me,de=0){if(!(o&&o.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=D.get(o).__webglFramebuffer;if(o.isWebGLCubeRenderTarget&&me!==void 0&&(ge=ge[me]),ge){r.bindFramebuffer(x.FRAMEBUFFER,ge);try{const Ee=o.textures[de],Ue=Ee.format,Ie=Ee.type;o.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+de);const ve=mr(Ee);if(ve.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ve.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}S>=0&&S<=o.width-C&&F>=0&&F<=o.height-P&&x.readPixels(S,F,C,P,le.convert(Ue),le.convert(Ie),ue)}finally{const Ee=ie!==null?D.get(ie).__webglFramebuffer:null;r.bindFramebuffer(x.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(o,S,F,C,P,ue,me,de=0){if(!(o&&o.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=D.get(o).__webglFramebuffer;if(o.isWebGLCubeRenderTarget&&me!==void 0&&(ge=ge[me]),ge)if(S>=0&&S<=o.width-C&&F>=0&&F<=o.height-P){r.bindFramebuffer(x.FRAMEBUFFER,ge);const Ee=o.textures[de],Ue=Ee.format,Ie=Ee.type;o.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+de);const ve=mr(Ee);if(ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Ve),x.bufferData(x.PIXEL_PACK_BUFFER,ue.byteLength,x.STREAM_READ),x.readPixels(S,F,C,P,le.convert(Ue),le.convert(Ie),0),x.bindBuffer(x.PIXEL_PACK_BUFFER,null);const st=ie!==null?D.get(ie).__webglFramebuffer:null;r.bindFramebuffer(x.FRAMEBUFFER,st);const je=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await xo(x,je,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Ve),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,ue),x.bindBuffer(x.PIXEL_PACK_BUFFER,null),x.deleteBuffer(Ve),x.deleteSync(je),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(o,S=null,F=0){const C=Math.pow(2,-F),P=Math.floor(o.image.width*C),ue=Math.floor(o.image.height*C),me=S!==null?S.x:0,de=S!==null?S.y:0;B.setTexture2D(o,0),x.copyTexSubImage2D(x.TEXTURE_2D,F,0,0,me,de,P,ue),r.unbindTexture()},this.copyTextureToTexture=function(o,S,F=null,C=null,P=0,ue=0){let me,de,ge,Ee,Ue,Ie,ve,Ve,st;const je=o.isCompressedTexture?o.mipmaps[ue]:o.image;if(F!==null)me=F.max.x-F.min.x,de=F.max.y-F.min.y,ge=F.isBox3?F.max.z-F.min.z:1,Ee=F.min.x,Ue=F.min.y,Ie=F.isBox3?F.min.z:0;else{const at=Math.pow(2,-P);me=Math.floor(je.width*at),de=Math.floor(je.height*at),o.isDataArrayTexture?ge=je.depth:o.isData3DTexture?ge=Math.floor(je.depth*at):ge=1,Ee=0,Ue=0,Ie=0}C!==null?(ve=C.x,Ve=C.y,st=C.z):(ve=0,Ve=0,st=0);const Ye=le.convert(S.format),pt=le.convert(S.type);let he;S.isData3DTexture?(B.setTexture3D(S,0),he=x.TEXTURE_3D):S.isDataArrayTexture||S.isCompressedArrayTexture?(B.setTexture2DArray(S,0),he=x.TEXTURE_2D_ARRAY):(B.setTexture2D(S,0),he=x.TEXTURE_2D),r.activeTexture(x.TEXTURE0),r.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(x.UNPACK_ALIGNMENT,S.unpackAlignment);const ht=r.getParameter(x.UNPACK_ROW_LENGTH),Be=r.getParameter(x.UNPACK_IMAGE_HEIGHT),Mt=r.getParameter(x.UNPACK_SKIP_PIXELS),Pt=r.getParameter(x.UNPACK_SKIP_ROWS),Ot=r.getParameter(x.UNPACK_SKIP_IMAGES);r.pixelStorei(x.UNPACK_ROW_LENGTH,je.width),r.pixelStorei(x.UNPACK_IMAGE_HEIGHT,je.height),r.pixelStorei(x.UNPACK_SKIP_PIXELS,Ee),r.pixelStorei(x.UNPACK_SKIP_ROWS,Ue),r.pixelStorei(x.UNPACK_SKIP_IMAGES,Ie);const Qt=o.isDataArrayTexture||o.isData3DTexture,Ke=S.isDataArrayTexture||S.isData3DTexture;if(o.isDepthTexture){const at=D.get(o),Bt=D.get(S),Qe=D.get(at.__renderTarget),Gt=D.get(Bt.__renderTarget);r.bindFramebuffer(x.READ_FRAMEBUFFER,Qe.__webglFramebuffer),r.bindFramebuffer(x.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Jt=0;Jt<ge;Jt++)Qt&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,D.get(o).__webglTexture,P,Ie+Jt),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,D.get(S).__webglTexture,ue,st+Jt)),x.blitFramebuffer(Ee,Ue,me,de,ve,Ve,me,de,x.DEPTH_BUFFER_BIT,x.NEAREST);r.bindFramebuffer(x.READ_FRAMEBUFFER,null),r.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(P!==0||o.isRenderTargetTexture||D.has(o)){const at=D.get(o),Bt=D.get(S);r.bindFramebuffer(x.READ_FRAMEBUFFER,L),r.bindFramebuffer(x.DRAW_FRAMEBUFFER,Y);for(let Qe=0;Qe<ge;Qe++)Qt?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,at.__webglTexture,P,Ie+Qe):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,at.__webglTexture,P),Ke?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Bt.__webglTexture,ue,st+Qe):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Bt.__webglTexture,ue),P!==0?x.blitFramebuffer(Ee,Ue,me,de,ve,Ve,me,de,x.COLOR_BUFFER_BIT,x.NEAREST):Ke?x.copyTexSubImage3D(he,ue,ve,Ve,st+Qe,Ee,Ue,me,de):x.copyTexSubImage2D(he,ue,ve,Ve,Ee,Ue,me,de);r.bindFramebuffer(x.READ_FRAMEBUFFER,null),r.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else Ke?o.isDataTexture||o.isData3DTexture?x.texSubImage3D(he,ue,ve,Ve,st,me,de,ge,Ye,pt,je.data):S.isCompressedArrayTexture?x.compressedTexSubImage3D(he,ue,ve,Ve,st,me,de,ge,Ye,je.data):x.texSubImage3D(he,ue,ve,Ve,st,me,de,ge,Ye,pt,je):o.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,ue,ve,Ve,me,de,Ye,pt,je.data):o.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,ue,ve,Ve,je.width,je.height,Ye,je.data):x.texSubImage2D(x.TEXTURE_2D,ue,ve,Ve,me,de,Ye,pt,je);r.pixelStorei(x.UNPACK_ROW_LENGTH,ht),r.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Be),r.pixelStorei(x.UNPACK_SKIP_PIXELS,Mt),r.pixelStorei(x.UNPACK_SKIP_ROWS,Pt),r.pixelStorei(x.UNPACK_SKIP_IMAGES,Ot),ue===0&&S.generateMipmaps&&x.generateMipmap(he),r.unbindTexture()},this.initRenderTarget=function(o){D.get(o).__webglFramebuffer===void 0&&B.setupRenderTarget(o)},this.initTexture=function(o){o.isCubeTexture?B.setTextureCube(o,0):o.isData3DTexture?B.setTexture3D(o,0):o.isDataArrayTexture||o.isCompressedArrayTexture?B.setTexture2DArray(o,0):B.setTexture2D(o,0),r.unbindTexture()},this.resetState=function(){J=0,q=0,ie=null,r.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(n),t.unpackColorSpace=nt._getUnpackColorSpace()}}export{ei as ACESFilmicToneMapping,nn as AddEquation,Cr as AddOperation,Ad as AdditiveAnimationBlendMode,ui as AdditiveBlending,jn as AgXToneMapping,ba as AlphaFormat,Sa as AlwaysCompare,aa as AlwaysDepth,Rd as AlwaysStencilFunc,bd as AmbientLight,Cd as AnimationAction,Pd as AnimationClip,Ld as AnimationLoader,Ud as AnimationMixer,Dd as AnimationObjectGroup,wd as AnimationUtils,Id as ArcCurve,Ua as ArrayCamera,Nd as ArrowHelper,yd as AttachedBindMode,Fd as Audio,Od as AudioAnalyser,Bd as AudioContext,Gd as AudioListener,Hd as AudioLoader,Vd as AxesHelper,St as BackSide,Wd as BasicDepthPacking,kd as BasicShadowMap,zd as BatchedMesh,Xd as BezierInterpolant,Kd as Bone,Yd as BooleanKeyframeTrack,qd as Box2,Zd as Box3,$d as Box3Helper,Mn as BoxGeometry,Qd as BoxHelper,xn as BufferAttribute,cn as BufferGeometry,Jd as BufferGeometryLoader,Aa as ByteType,jd as Cache,eu as Camera,tu as CameraHelper,nu as CanvasTexture,iu as CapsuleGeometry,ru as CatmullRomCurve3,ti as CineonToneMapping,au as CircleGeometry,Ln as ClampToEdgeWrapping,ou as Clock,et as Color,su as ColorKeyframeTrack,nt as ColorManagement,lu as Compatibility,cu as CompressedArrayTexture,fu as CompressedCubeTexture,du as CompressedTexture,uu as CompressedTextureLoader,pu as ConeGeometry,Hr as ConstantAlphaFactor,Wr as ConstantColorFactor,hu as Controls,Er as CubeCamera,Fr as CubeDepthTexture,en as CubeReflectionMapping,zt as CubeRefractionMapping,qn as CubeTexture,mu as CubeTextureLoader,ln as CubeUVReflectionMapping,_u as CubicBezierCurve,gu as CubicBezierCurve3,vu as CubicInterpolant,ci as CullFaceBack,la as CullFaceFront,Su as CullFaceFrontBack,sa as CullFaceNone,Eu as Curve,Mu as CurvePath,ca as CustomBlending,Qn as CustomToneMapping,xu as CylinderGeometry,Tu as Cylindrical,Rr as Data3DTexture,Zn as DataArrayTexture,Da as DataTexture,Au as DataTextureLoader,Ru as DataUtils,bu as DecrementStencilOp,Cu as DecrementWrapStencilOp,Pu as DefaultLoadingManager,Yt as DepthFormat,Zt as DepthStencilFormat,dn as DepthTexture,Lu as DetachedBindMode,Uu as DirectionalLight,Du as DirectionalLightHelper,wu as DiscreteInterpolant,Iu as DodecahedronGeometry,Nt as DoubleSide,Yr as DstAlphaFactor,qr as DstColorFactor,Nu as DynamicCopyUsage,yu as DynamicDrawUsage,Fu as DynamicReadUsage,Ou as EdgesGeometry,Bu as EllipseCurve,ga as EqualCompare,ia as EqualDepth,Gu as EqualStencilFunc,Tn as EquirectangularReflectionMapping,An as EquirectangularRefractionMapping,Hu as Euler,La as EventDispatcher,qi as ExternalTexture,Vu as ExtrudeGeometry,Wu as FileLoader,ku as Float16BufferAttribute,$n as Float32BufferAttribute,Ft as FloatType,zu as Fog,Xu as FogExp2,Ku as FramebufferTexture,jt as FrontSide,si as Frustum,Yu as FrustumArray,qu as GLBufferAttribute,Zu as GLSL1,ri as GLSL3,_a as GreaterCompare,ta as GreaterDepth,Rn as GreaterEqualCompare,na as GreaterEqualDepth,$u as GreaterEqualStencilFunc,Qu as GreaterStencilFunc,Ju as GridHelper,ju as Group,ep as HTMLTexture,Dt as HalfFloatType,tp as HemisphereLight,np as HemisphereLightHelper,ip as IcosahedronGeometry,rp as ImageBitmapLoader,ap as ImageLoader,op as ImageUtils,sp as IncrementStencilOp,lp as IncrementWrapStencilOp,cp as InstancedBufferAttribute,fp as InstancedBufferGeometry,dp as InstancedInterleavedBuffer,up as InstancedMesh,pp as Int16BufferAttribute,hp as Int32BufferAttribute,mp as Int8BufferAttribute,Xn as IntType,_p as InterleavedBuffer,gp as InterleavedBufferAttribute,vp as Interpolant,Sp as InterpolateBezier,Ep as InterpolateDiscrete,Mp as InterpolateLinear,xp as InterpolateSmooth,Tp as InterpolationSamplingMode,Ap as InterpolationSamplingType,Rp as InvertStencilOp,bp as KeepStencilOp,Cp as KeyframeTrack,Pp as LOD,Lp as LatheGeometry,wr as Layers,va as LessCompare,ra as LessDepth,bn as LessEqualCompare,li as LessEqualDepth,Up as LessEqualStencilFunc,Dp as LessStencilFunc,wp as Light,Ip as LightProbe,Np as LightShadow,yp as Line,Fp as Line3,Op as LineBasicMaterial,Bp as LineCurve,Gp as LineCurve3,Hp as LineDashedMaterial,Vp as LineLoop,Wp as LineSegments,Et as LinearFilter,kp as LinearInterpolant,zp as LinearMipMapLinearFilter,Xp as LinearMipMapNearestFilter,Xt as LinearMipmapLinearFilter,Un as LinearMipmapNearestFilter,Yn as LinearSRGBColorSpace,ii as LinearToneMapping,ai as LinearTransfer,Kp as Loader,Yp as LoaderUtils,qp as LoadingManager,Zp as LoopOnce,$p as LoopPingPong,Qp as LoopRepeat,Jp as MOUSE,jp as Material,eh as MaterialBlending,th as MaterialLoader,nh as MathUtils,ih as Matrix2,Fe as Matrix3,kt as Matrix4,da as MaxEquation,Lt as Mesh,Sr as MeshBasicMaterial,Ir as MeshDepthMaterial,Nr as MeshDistanceMaterial,rh as MeshLambertMaterial,ah as MeshMatcapMaterial,oh as MeshNormalMaterial,sh as MeshPhongMaterial,lh as MeshPhysicalMaterial,ch as MeshStandardMaterial,fh as MeshToonMaterial,fa as MinEquation,ua as MirroredRepeatWrapping,Pr as MixOperation,fi as MultiplyBlending,Lr as MultiplyOperation,Ht as NearestFilter,dh as NearestMipMapLinearFilter,uh as NearestMipMapNearestFilter,hn as NearestMipmapLinearFilter,ha as NearestMipmapNearestFilter,Jn as NeutralToneMapping,Ea as NeverCompare,oa as NeverDepth,ph as NeverStencilFunc,It as NoBlending,qt as NoColorSpace,hh as NoNormalPacking,Rt as NoToneMapping,mh as NormalAnimationBlendMode,pn as NormalBlending,_h as NormalGAPacking,gh as NormalRGPacking,ma as NotEqualCompare,ea as NotEqualDepth,vh as NotEqualStencilFunc,Sh as NumberKeyframeTrack,Eh as Object3D,Mh as ObjectLoader,Dr as ObjectSpaceNormalMap,xh as OctahedronGeometry,Jr as OneFactor,Gr as OneMinusConstantAlphaFactor,Vr as OneMinusConstantColorFactor,kr as OneMinusDstAlphaFactor,zr as OneMinusDstColorFactor,Xr as OneMinusSrcAlphaFactor,Kr as OneMinusSrcColorFactor,Kn as OrthographicCamera,un as PCFShadowMap,yr as PCFSoftShadowMap,tr as PMREMGenerator,Th as Path,fn as PerspectiveCamera,vr as Plane,zn as PlaneGeometry,Ah as PlaneHelper,Rh as PointLight,bh as PointLightHelper,Ch as Points,Ph as PointsMaterial,Lh as PolarGridHelper,Uh as PolyhedronGeometry,Dh as PositionalAudio,wh as PropertyBinding,Ih as PropertyMixer,Nh as QuadraticBezierCurve,yh as QuadraticBezierCurve3,Fh as Quaternion,Oh as QuaternionKeyframeTrack,Bh as QuaternionLinearInterpolant,Ri as R11_EAC_Format,Pn as RED_GREEN_RGTC2_Format,Xi as RED_RGTC1_Format,Na as REVISION,Cn as RG11_EAC_Format,Gh as RGBADepthPacking,wt as RGBAFormat,gi as RGBAIntegerFormat,Gi as RGBA_ASTC_10x10_Format,Fi as RGBA_ASTC_10x5_Format,Oi as RGBA_ASTC_10x6_Format,Bi as RGBA_ASTC_10x8_Format,Hi as RGBA_ASTC_12x10_Format,Vi as RGBA_ASTC_12x12_Format,Pi as RGBA_ASTC_4x4_Format,Li as RGBA_ASTC_5x4_Format,Ui as RGBA_ASTC_5x5_Format,Di as RGBA_ASTC_6x5_Format,wi as RGBA_ASTC_6x6_Format,Ii as RGBA_ASTC_8x5_Format,Ni as RGBA_ASTC_8x6_Format,yi as RGBA_ASTC_8x8_Format,Wi as RGBA_BPTC_Format,Ai as RGBA_ETC2_EAC_Format,Mi as RGBA_PVRTC_2BPPV1_Format,Ei as RGBA_PVRTC_4BPPV1_Format,wn as RGBA_S3TC_DXT1_Format,In as RGBA_S3TC_DXT3_Format,Nn as RGBA_S3TC_DXT5_Format,Hh as RGBDepthPacking,Ca as RGBFormat,Vh as RGBIntegerFormat,ki as RGB_BPTC_SIGNED_Format,zi as RGB_BPTC_UNSIGNED_Format,xi as RGB_ETC1_Format,Ti as RGB_ETC2_Format,Si as RGB_PVRTC_2BPPV1_Format,vi as RGB_PVRTC_4BPPV1_Format,Dn as RGB_S3TC_DXT1_Format,Wh as RGDepthPacking,Kt as RGFormat,_i as RGIntegerFormat,Ar as RawShaderMaterial,kh as Ray,zh as Raycaster,Xh as RectAreaLight,Pa as RedFormat,mi as RedIntegerFormat,ni as ReinhardToneMapping,Kh as RenderObjectRefreshType,Yh as RenderTarget,qh as RenderTarget3D,pa as RepeatWrapping,Zh as ReplaceStencilOp,Or as ReverseSubtractEquation,$h as RingGeometry,bi as SIGNED_R11_EAC_Format,Yi as SIGNED_RED_GREEN_RGTC2_Format,Ki as SIGNED_RED_RGTC1_Format,Ci as SIGNED_RG11_EAC_Format,Ia as SRGBColorSpace,qe as SRGBTransfer,Qh as Scene,Le as ShaderChunk,bt as ShaderLib,Ut as ShaderMaterial,Jh as ShadowMaterial,jh as Shape,em as ShapeGeometry,tm as ShapePath,nm as ShapeUtils,Ra as ShortType,im as Skeleton,rm as SkeletonHelper,am as SkinnedMesh,om as Source,sm as Sphere,lm as SphereGeometry,cm as Spherical,fm as SphericalHarmonics3,dm as SplineCurve,um as SpotLight,pm as SpotLightHelper,hm as Sprite,mm as SpriteMaterial,$r as SrcAlphaFactor,Zr as SrcAlphaSaturateFactor,Qr as SrcColorFactor,_m as StaticCopyUsage,gm as StaticDrawUsage,vm as StaticReadUsage,Sm as StereoCamera,Em as StreamCopyUsage,Mm as StreamDrawUsage,xm as StreamReadUsage,Tm as StringKeyframeTrack,Br as SubtractEquation,di as SubtractiveBlending,Am as TOUCH,oi as TangentSpaceNormalMap,Rm as TetrahedronGeometry,br as Texture,bm as TextureLoader,Cm as TextureSource,Pm as TextureUtils,Lm as Timer,Um as TimestampQuery,Dm as TorusGeometry,wm as TorusKnotGeometry,Im as Triangle,Nm as TriangleFanDrawMode,ym as TriangleStripDrawMode,Fm as TrianglesDrawMode,Om as TubeGeometry,Bm as UVMapping,Tr as Uint16BufferAttribute,xr as Uint32BufferAttribute,Gm as Uint8BufferAttribute,Hm as Uint8ClampedBufferAttribute,Vm as Uniform,Wm as UniformsGroup,ce as UniformsLib,Ur as UniformsUtils,At as UnsignedByteType,Ta as UnsignedInt101111Type,rn as UnsignedInt248Type,xa as UnsignedInt5999Type,Vt as UnsignedIntType,pi as UnsignedShort4444Type,hi as UnsignedShort5551Type,mn as UnsignedShortType,tn as VSMShadowMap,mt as Vector2,ye as Vector3,_t as Vector4,km as VectorKeyframeTrack,zm as VideoFrameTexture,Xm as VideoTexture,Km as WebGL3DRenderTarget,Ym as WebGLArrayRenderTarget,$i as WebGLCoordinateSystem,nr as WebGLCubeRenderTarget,xt as WebGLRenderTarget,Sd as WebGLRenderer,lo as WebGLUtils,qm as WebGPUCoordinateSystem,yn as WebXRController,Zm as WireframeGeometry,$m as WrapAroundEnding,Qm as ZeroCurvatureEnding,jr as ZeroFactor,Jm as ZeroSlopeEnding,jm as ZeroStencilOp,wa as createCanvasElement,Je as error,e_ as getConsoleFunction,Zi as log,t_ as setConsoleFunction,We as warn,Mr as warnOnce};
