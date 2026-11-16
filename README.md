# Portfolio — Nguyễn Đức Khánh (`portfolio-duc-khanh`)

Trang portfolio cá nhân giới thiệu kỹ năng, kinh nghiệm và các dự án phần mềm y tế / đa nền tảng của **Nguyễn Đức Khánh**, lấy cảm hứng từ phong cách thiết kế công nghệ hiện đại kết hợp chuyển động mượt mà.

## ✨ Điểm nổi bật về giao diện & hiệu ứng

- **Tông màu hiện đại (Midnight & Aurora):** Nền tối sâu (`#06070b`) kết hợp dải màu chuyển sắc hài hòa **Mint (`#7cf3d0`) · Periwinkle (`#7c8cff`) · Lilac (`#c98bff`)**.
- **Cuộn mượt (Smooth Scroll):** Tích hợp **Lenis** cho cảm giác lướt trang uyển chuyển trên mọi thiết bị.
- **Preloader mở màn:** Màn hình đếm phần trăm `000% -> 100%` kèm hiệu ứng rèm vén mở trang.
- **Con trỏ thông minh (Custom Cursor) & Nút nam châm (Magnetic):** Vòng tròn con trỏ bám theo chuột và biến đổi theo ngữ cảnh (`Xem`, `Chi tiết`, `Gửi mail`).
- **Mạng lưới hạt tương tác (Particle Field) & Thẻ Code 3D Tilt:** Khung code `profile.js` nghiêng 3D theo góc di chuột kèm hiệu ứng phản chiếu ánh sáng (glare).
- **Dải chữ Marquee theo vận tốc cuộn:** Tự động tăng tốc và đổi chiều theo tốc độ lăn chuột.
- **Thẻ dự án xếp chồng (Sticky Stacking Cards) & Mockup động:** Mỗi dự án có giao diện mô phỏng riêng (Dashboard HIS, Terminal + PDF Microservice, Website đặt lịch khám, Chat Realtime AI, Mobile App) và popup xem chi tiết.

## 🚀 Cách chạy dự án

```bash
cd c:\Users\7480\Documents\Code\HSV\portfolio-duc-khanh

# Chạy môi trường phát triển (mặc định tại http://localhost:5173)
npm run dev

# Build bản production (xuất ra thư mục dist/)
npm run build

# Xem thử bản build
npm run preview
```

## 🛠️ Tuỳ chỉnh thông tin cá nhân & dự án

Mọi nội dung hiển thị đều tập trung trong một file duy nhất: [`src/data.js`](./src/data.js).
- Chỉnh sửa tên, email, liên kết mạng xã hội (`github`, `linkedin`, `facebook`) trong biến `profile`.
- Cập nhật danh sách kỹ năng trong `skills`, các dự án trong `projects`, và mốc thời gian trong `experience`.
- Để thay ảnh đại diện thật: đặt ảnh vào `public/avatar.jpg` và cập nhật thẻ `<img>` trong [`src/components/About.jsx`](./src/components/About.jsx).

