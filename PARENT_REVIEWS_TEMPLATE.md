# 💬 TEMPLATE THU THẬP REVIEWS TỪ PHỤ HUYNH

**Mục đích:** Tăng E-E-A-T + Schema Review/AggregateRating

---

## 📋 CÁCH 1: GỬI QUA ZALO/NHÓM PHỤ HUYNH

Gửi tin nhắn mẫu sau vào nhóm phụ huynh:

---

> 🌟 Chào ba mẹ,
> 
> Nhân dịp kỷ niệm [X] năm thành lập trường, Bình Minh xin phép nhờ ba mẹ dành 2 phút viết review ngắn về trải nghiệm của gia đình tại trường ạ. Những review này sẽ giúp ba mẹ mới hiểu hơn về trường, đồng thời giúp Bình Minh cải thiện chất lượng phục vụ.
> 
> Ba mẹ có thể reply trực tiếp vào đây, hoặc quay video ngắn 30-60 giây ạ. Cảm ơn ba mẹ rất nhiều! ❤️

---

## 📋 CÁCH 2: GOOGLE FORM (Khuyên dùng)

Tạo Google Form với các câu hỏi sau:

### **Câu 1: Tên phụ huynh (Optional)**
- Ô text ngắn
- Ghi chú: "Có thể ẩn danh nếu muốn"

### **Câu 2: Bé học lớp nào?**
- ☐ Nhóm Chơi (12-24 tháng)
- ☐ Lớp Lá (2-3 tuổi)
- ☐ Lớp Cây (3-4 tuổi)
- ☐ Lớp Hoa (4-5 tuổi)

### **Câu 3: Bé học tại Bình Minh bao lâu?**
- ☐ Dưới 6 tháng
- ☐ 6-12 tháng
- ☐ 1-2 năm
- ☐ Trên 2 năm

### **Câu 4: Đánh giá tổng thể (1-5 sao)**
- ⭐⭐⭐⭐⭐ 5 sao - Rất hài lòng
- ⭐⭐⭐⭐ 4 sao - Hài lòng
- ⭐⭐⭐ 3 sao - Bình thường
- ⭐⭐ 2 sao - Chưa hài lòng
- ⭐ 1 sao - Không hài lòng

### **Câu 5: Bạn thích điều gì nhất ở Mầm non Bình Minh?**
- Ô text dài
- Ví dụ: "Con tôi rất thích các hoạt động ngoại khóa..."

### **Câu 6: Bạn muốn cải thiện điều gì?**
- Ô text dài
- "Không có gì" cũng là feedback tốt!

### **Câu 7: Bạn có giới thiệu trường cho phụ huynh khác không?**
- ☐ Chắc chắn có
- ☐ Có thể
- ☐ Chưa chắc
- ☐ Không

### **Câu 8: Cho phép hiển thị review trên website?**
- ☐ Có, hiển thị tên
- ☐ Có, hiển thị ẩn danh
- ☐ Không, chỉ dùng nội bộ

---

## 📋 CÁCH 3: VIDEO TESTIMONIALS

Quay video ngắn với phụ huynh tại trường:

### **Câu hỏi gợi ý:**
1. "Bạn biết đến Mầm non Bình Minh như thế nào?"
2. "Điều bạn thích nhất ở trường là gì?"
3. "Con bạn đã thay đổi như thế nào sau khi học tại đây?"
4. "Bạn có khuyên phụ huynh khác đến đây không?"

### **Setup:**
- 📹 Điện thoại quay ngang (landscape)
- 🎤 Micro rõ (gần miệng)
- 💡 Ánh sáng tự nhiên
- 🏠 Background: sân trường hoặc lớp học
- ⏱️ 30-60 giây

---

## 📋 CÁCH 4: GOOGLE REVIEWS

Hướng dẫn phụ huynh review trên Google Maps:

1. Mở Google Maps
2. Tìm "Mầm non Bình Minh Vũng Tàu"
3. Click vào trường
4. Click "Write a review"
5. Cho 5 sao + viết review
6. Submit

**Tin nhắn mẫu:**

> Ba mẹ ơi, nếu ba mẹ có 1 phút, ba mẹ review giúp Bình Minh trên Google Maps với ạ. Link ở đây: [link]. Cảm ơn ba mẹ! 🙏

---

## 📊 SAU KHI CÓ REVIEWS

### **Bước 1: Tổng hợp reviews (10-20 reviews)**
- Lọc reviews tích cực
- Xin phép hiển thị tên (nếu được)
- Chọn 5-10 reviews đại diện

### **Bước 2: Thêm vào website**

**Trang `index.html`:**
```html
<!-- Aggregate Rating Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Mầm non Bình Minh",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "24",
    "bestRating": "5",
    "worstRating": "1"
  }
}
</script>
```

**Trang `lien-he.html` (Section testimonials):**
```html
<div class="testimonial">
  <div class="testimonial__rating">⭐⭐⭐⭐⭐</div>
  <p>"Con tôi rất thích đi học mỗi ngày. Giáo viên tận tâm..."</p>
  <strong>— Chị Mai, phụ huynh bé An (Lớp Lá)</strong>
</div>
```

### **Bước 3: Tạo trang `reviews.html`**
- Trang riêng hiển thị tất cả reviews
- Schema: Review + AggregateRating
- Chia sẻ trên Facebook, Zalo

---

## 🎯 MỤC TIÊU

- **Tổng số reviews:** 20-30 reviews trong 1-2 tháng
- **Rating trung bình:** 4.8+ ⭐
- **Google Reviews:** 10+ reviews (tăng ranking local SEO)
- **Video testimonials:** 3-5 videos (dùng cho Facebook Ads)

---

## 💡 KHUYẾN KHÍCH

- **Tặng quà nhỏ** cho phụ huynh review (vd: voucher 50k, quà lưu niệm)
- **Đăng reviews lên Facebook** trường (có permission)
- **Highlight reviews tốt** trong bảng tin trường
- **Cảm ơn phụ huynh** công khai

---

**Created by Douceur (AI Assistant) for Dung Bui**
**Last updated:** 2026-09-06
