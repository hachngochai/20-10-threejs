# 20/10 · Room 3D

Website: https://hachngochai.github.io/20-10-threejs/

## Cập nhật GitHub Pages

Repo triển khai: https://github.com/hachngochai/20-10-threejs
Nhánh triển khai là `master`. GitHub Actions tự xuất bản bản mới khi push lên nhánh này.
Workflow chỉ đóng gói các file đang dùng; không đưa các bản cũ trong `dist/` và `js/dist/` lên Pages.
Repository công khai chứa JS đã làm rối và CSS đã nén. Bản nguồn dễ chỉnh sửa và
`tools/build-publish.cjs` được giữ trên máy; tạo bản xuất bản mới từ nguồn đó trước khi push.
Source map và các bản `dist` cũ được loại khỏi bản công khai. Việc làm rối giúp code khó đọc
hơn, không chặn tải file; những commit cũ vẫn có thể được xem trong lịch sử GitHub.
Font DFVN Pencerio được tải nguyên bản và kiểm tra SHA256 trong bước deploy Pages,
không đưa file font này vào repository công khai.

Sau khi sửa website, chạy trong checkout của repository `20-10-threejs`:

```powershell
git add index.html bonus.html css js assets/photos assets/fonts piano.mp3 README.md
git commit -m "Update website"
git push origin master
```

Theo dõi quá trình xuất bản ở tab **Actions** của repo.

Căn phòng chính Three.js với tông hồng ấm, ánh sáng mềm và bốn vật thể tương tác.
Chọn phong thư, album, gương hoặc hộp quà để camera tiến lại gần và mở nội dung.
Khám phá đủ bốn góc phòng sẽ mở lời cuối.

Màn mở đầu và các trang nội dung dùng nền hồng/tím tối, không có mô hình nhà phía sau.
Trang quà đặc biệt giữ phong thư tương tác với chiều sâu bằng CSS.
Một renderer Three.js dùng cho phòng chính; canvas được xóa trong suốt và dừng render
khi mở nội dung để tiết kiệm tài nguyên.
Box rơi của phòng 1 vẫn nằm trong vùng riêng dưới bức thư và có thể chạm để mở lời chúc.
Tiêu đề và chữ ký dùng DFVN Pencerio viết tay đã Việt hóa; nội dung dài và nút bấm dùng Be Vietnam Pro.
Pencerio Việt hóa dùng nguyên file OTF của DFVN, đã kiểm tra đầy đủ ký tự tiếng Việt và dấu thanh.
Font được lưu trong `assets/fonts/`; nguồn và điều khoản sử dụng được ghi trong README của thư mục này.
Giao diện giữ bảng màu hồng, tím tối và kem, viền mảnh và bề mặt matte;
khung trang trí dày đã được bỏ để nội dung thoáng hơn.

## Chạy trên máy

Mở thư mục dự án trong VS Code và chạy `index.html` bằng **Live Server**.
Hoặc chạy trong thư mục dự án:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Sau đó mở `http://127.0.0.1:8765/`. Dừng máy chủ bằng `Ctrl+C`.
Không cần cài npm; Three.js đã được lưu trong `js/vendor/three/`.

Mở trực tiếp bằng `file://` sẽ dùng phòng CSS dự phòng. Cảnh 3D cần máy chủ HTTP
và trình duyệt hỗ trợ WebGL2. Khi 3D không khả dụng, các nội dung vẫn mở được.

## Các file chính

- `js/room3d.js`: dựng phòng, ánh sáng, raycast, camera và vị trí nút trên vật thể.
- `css/room3d.css`: giao diện phòng, thanh điều hướng và hiệu ứng chuyển cảnh.
- `css/world3d.css`: bề mặt, chiều sâu và giao diện các phòng nội dung.
- `css/fonts.css`, `css/typography.css`, `assets/fonts/`: font cục bộ và hệ chữ dùng chung.
- `css/memory-desktop.css`: bố cục album phòng 2 rộng hơn trên PC, áp dụng từ 1101px.
- `css/gift-room.css`: tiêu đề thoáng, box quà bo mềm và bố cục phòng 4 trên PC/mobile.
- `css/handwriting.css`: tiêu đề Pencerio và chữ ký viết tay, khoảng cách riêng cho từng kích thước màn hình.
- `bonus.html`, `css/bonus3d.css`, `js/bonus.js`: căn phòng quà đặc biệt.
- `js/app.js`: điều hướng, tiến trình 4/4, nhạc và hộp thoại.
- `js/pages.js`: thư, album, lời nhắc, quà và gửi lời nhắn.
- `js/config.js`: thông tin liên hệ và cấu hình nội dung.

Phòng tự điều chỉnh theo kích thước màn hình; có thể dùng nút trên vật thể,
thanh điều hướng phía dưới hoặc bàn phím. Hiệu ứng camera giảm khi thiết bị bật
“Reduce motion”; vòng lặp render dừng khi ẩn tab.

Khi đưa lên hosting tĩnh, giữ cấu trúc thư mục nguồn gồm `index.html`, `bonus.html`,
`css/`, `js/`, `assets/` và các tài nguyên đang dùng. `dist/` là bản HTML cũ,
không phải bản triển khai của Room 3D.
