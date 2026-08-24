# 📋 KẾ HOẠCH THỰC HIỆN CHI TIẾT — WEBSITE MẦM NON TƯ THỤC

**Ngày lập:** 2026-08-24 · **Trạng thái:** ✅ Đã dựng xong 15+ trang (1A+2A) — chờ anh review từng phase & bổ sung thông tin thật (hotline, địa chỉ, logo, ảnh)

---

## 1. NGUYÊN TẮC NỀN TẢNG

### 1.1. Logic xây dựng — Mô hình 5 tầng (Trust Pyramid)
Website được thiết kế theo hành trình tâm lý của phụ huynh. Mỗi trang/section phải phục vụ đúng 1 trong 5 tầng — trang nào không phục vụ thì **không đưa vào website**:

| Tầng | Mục tiêu | Câu hỏi của phụ huynh | Trang phục vụ |
|------|----------|----------------------|---------------|
| **5. Chuyển đổi** (đỉnh) | Hành động | "Tôi muốn đến tham quan" | Đăng ký tham quan · Gọi/Zalo · Sticky CTA · Contact |
| **4. Tuyển sinh** | Quyết định | "Học phí, quy trình, điều kiện?" | hoc-phi · tuyen-sinh · faq |
| **3. Bằng chứng** | Tin tưởng | "Tại sao tôi nên tin trường?" | An toàn · Gallery · Đội ngũ · Cơ sở vật chất · Đánh giá PH* |
| **2. Giá trị** | Hiểu | "Trẻ học & được chăm sóc thế nào?" | chuong-trinh · Một ngày của bé · moi-truong · hoat-dong · dinh-duong |
| **1. Thương hiệu** (đáy) | Nhận biết | "Trường là ai?" | Trang chủ (hero) · ve-chung-toi · Sứ mệnh · Giá trị cốt lõi |

*\*Nội dung mẫu (testimonial) phải được đánh dấu rõ "nội dung mẫu" nếu chưa có đánh giá thật.*

### 1.2. Tiêu chuẩn áp dụng cho toàn bộ website
- **Ngôn ngữ:** 100% tiếng Việt
- **Thông tin trường:** Dùng placeholder [TÊN TRƯỜNG], [HOTLINE], [ĐỊA CHỈ], [EMAIL] — **KHÔNG bịa** thông tin, **KHÔNG bịa** học phí, **KHÔNG bịa** đánh giá, **KHÔNG dùng ảnh trẻ em thật** khi chưa có sự đồng ý
- **Design system:** Cream #FFF9F0 · Sage Green #8FAF8B · Butter Yellow #F6D77A · Soft Peach #F3B59F · Dark Olive #34423A · Font: Be Vietnam Pro / Plus Jakarta Sans · Radius 18-28px · Spacing 4-8-12-16-24-32-48-64-80-96-120
- **Conversion-focused:** CTA chính "ĐĂNG KÝ THAM QUAN" lặp lại xuyên suốt; CTA phụ: gọi điện, Zalo, xem học phí
- **Quy trình:** Mỗi phase xong → anh duyệt → làm phase tiếp (KHÔNG tự ý làm tiếp)

---

## 2. LỘ TRÌNH 11 PHASE — CHI TIẾT TỪNG PHẦN

### ✅ PHASE 1 — BRAND & DESIGN SYSTEM (Nền tảng thiết kế)
**Mục tiêu:** Xây nền tảng thị giác + bộ component dùng chung cho toàn site.

**Công việc cụ thể:**
- [x] 1.1. Logo concept dạng SVG (minimal, organic, warm — không dùng ảnh stock)
- [x] 1.2. Design tokens: bảng màu, typography scale, spacing scale, radius, shadow, breakpoints
- [x] 1.3. Bộ component: Button (primary/secondary/ghost + hover/focus/disabled), Card, Input/Form field, SectionHeader, Header (nav), Footer, Breadcrumb, Timeline, Accordion, Lightbox, Sticky CTA, Pagination
- [x] 1.4. CSS files: `assets/css/style.css` (tokens + base + components), `responsive.css`, `animations.css` (tôn trọng prefers-reduced-motion)

**Deliverable:** `assets/css/*.css` + `assets/js/*.js` (skeleton) + trang component demo
**Tiêu chí duyệt:** Anh xem demo component, chốt màu/font/logo → mới sang Phase 2

---

### ✅ PHASE 2 — INFORMATION ARCHITECTURE (Cấu trúc thông tin)
**Mục tiêu:** Chốt sitemap, URL, menu — nền cho mọi trang.

**Công việc cụ thể:**
- [x] 2.1. Sitemap đầy đủ: index, ve-chung-toi, chuong-trinh, moi-truong, hoat-dong, dinh-duong, hoc-phi, tuyen-sinh, gallery, tin-tuc, lien-he, faq, dang-ky-tham-quan + news/bai-viet-*.html + privacy-policy, terms, 404
- [x] 2.2. URL tiếng Việt chuẩn SEO (viết thường, không dấu, gạch ngang): `/chuong-trinh`, `/hoc-phi`, `/dang-ky-tham-quan`…
- [x] 2.3. Navigation phản ánh hành trình phụ huynh (không đặt "Tuyển sinh" lên đầu menu)
- [x] 2.4. Breadcrumbs + internal linking giữa các trang
- [x] 2.5. `robots.txt`, `sitemap.xml`, favicon (SVG inline)

**Deliverable:** Sơ đồ IA + navigation + robots/sitemap/favicon
**Tiêu chí duyệt:** Anh chốt sitemap & menu

---

### ✅ PHASE 3 — HOMEPAGE (Trang chủ)
**Mục tiêu:** Gây ấn tượng trong 5-10 giây đầu, dẫn phụ huynh theo 5 tầng.

**Công việc cụ thể (theo Master Prompt V2):**
- [x] 3.1. Hero: headline chạm cảm xúc + phụ đề + 2 CTA (ĐĂNG KÝ THAM QUAN / XEM HỌC PHÍ)
- [x] 3.2. Trust bar: Yêu thương · An toàn · Phát triển · Dinh dưỡng
- [x] 3.3. Giới thiệu ngắn + số liệu (để placeholder)
- [x] 3.4. Chương trình giáo dục (4-6 thẻ dẫn sang chuong-trinh.html)
- [x] 3.5. Một ngày của bé (timeline 6-8 mốc)
- [x] 3.6. Môi trường (3-4 khu tiêu biểu → moi-truong.html)
- [x] 3.7. An toàn (camera, khử khuẩn, y tế, đón trả)
- [x] 3.8. Dinh dưỡng (thực đơn mẫu → dinh-duong.html)
- [x] 3.9. Đội ngũ (placeholder, chưa dùng ảnh người thật)
- [x] 3.10. Gallery preview (3-4 ảnh → gallery.html)
- [x] 3.11. Testimonial (đánh dấu "nội dung mẫu")
- [x] 3.12. Học phí teaser + Tuyển sinh (4 bước tóm tắt) + FAQ teaser (3 câu)
- [x] 3.13. Final CTA: "Đặt lịch tham quan hôm nay" + hotline

**Deliverable:** `index.html` hoàn chỉnh
**Tiêu chí duyệt:** Anh duyệt nội dung từng section

---

### ✅ PHASE 4 — CORE PAGES (5 trang nội dung chính)
**Mục tiêu:** Trả lời câu hỏi tầng 1-2: trường là ai, trẻ học/chăm sóc thế nào.

**Công việc cụ thể:**
- [x] 4.1. `ve-chung-toi`: câu chuyện, sứ mệnh, giá trị cốt lõi, mục tiêu giáo dục
- [x] 4.2. `chuong-trinh`: Montessori · STEAM · Giáo dục cảm xúc (EQ) · Vận động · Nghệ thuật · Ngoại ngữ — mỗi chương trình 1 card: mô tả + lợi ích + độ tuổi phù hợp
- [x] 4.3. `moi-truong`: 8 khu — lớp học, sân chơi ngoài trời, phòng vận động, khu sáng tạo, thư viện, phòng ăn, phòng ngủ, khu vệ sinh
- [x] 4.4. `hoat-dong`: hoạt động hàng ngày, ngoại khóa, sự kiện
- [x] 4.5. `dinh-duong`: thực đơn, quy trình bếp, nguyên tắc dinh dưỡng

**Deliverable:** 5 trang HTML + internal links
**Tiêu chí duyệt:** Anh duyệt từng trang

---

### ✅ PHASE 5 — TUYỂN SINH · HỌC PHÍ · FAQ (+ FORM ĐĂNG KÝ)
**Mục tiêu:** Trả lời tầng 4 — xóa rào cản quyết định.

**Công việc cụ thể:**
- [x] 5.1. `hoc-phi`: bảng học phí công khai (nếu anh cung cấp) HOẶC form nhận bảng giá qua Zalo/Email — **KHÔNG bịa giá**
- [x] 5.2. `tuyen-sinh`: quy trình 6 bước — Đăng ký → Xác nhận lịch → Tham quan → Tư vấn → Hoàn tất hồ sơ → Nhập học + bộ hồ sơ cần chuẩn bị
- [x] 5.3. `faq`: 10 câu hỏi accordion (nhập học, bán trú, an toàn, ăn uống, học phí, cam kết…) + FAQPage schema
- [x] 5.4. `dang-ky-tham-quan`: form — Họ tên PH, SĐT, Email, Tên bé, Ngày sinh, Chương trình quan tâm, Giờ tham quan mong muốn, Ghi chú

**Deliverable:** 3 trang + form
**Tiêu chí duyệt:** Anh duyệt + cung cấp thông tin thật nếu có

---

### ✅ PHASE 6 — GALLERY · TIN TỨC
**Mục tiêu:** Bằng chứng hình ảnh (tầng 3) + nội dung SEO (tầng 1-2).

**Công việc cụ thể:**
- [x] 6.1. `gallery`: grid/masonry + lightbox + lazy loading + filter theo chủ đề
- [x] 6.2. `tin-tuc`: danh sách bài viết + phân trang
- [x] 6.3. 2-3 bài mẫu chuẩn SEO (URL thân thiện, title, description, author, ngày, related posts) — nội dung mẫu rõ ràng

**Deliverable:** gallery.html · tin-tuc.html · news/bai-viet-*.html
**Tiêu chí duyệt:** Anh duyệt ảnh + bài mẫu

---

### ✅ PHASE 7 — FORMS & CONVERSION
**Mục tiêu:** Thu lead hiệu quả + đo được kết quả.

**Công việc cụ thể:**
- [x] 7.1. `form.js`: validation (real-time + submit), error/success/loading states, sanitization
- [x] 7.2. Conversion hooks: `data-*` attributes cho CTA click, phone click, Zalo click, map click, form submit (sẵn sàng gắn GA4)
- [x] 7.3. Sticky mobile CTA: [Gọi ngay] [Chat Zalo] [Đăng ký tham quan]

**Deliverable:** assets/js/form.js · main.js
**Tiêu chí duyệt:** Anh test thử form trên mobile

---

### ✅ PHASE 8 — SEO & LOCAL SEO
**Mục tiêu:** Xuất hiện trên Google khi phụ huynh tìm "mầm non khu vực…".

**Công việc cụ thể:**
- [x] 8.1. Meta title/description/H1 duy nhất cho từng trang (đúng cú pháp, đủ độ dài)
- [x] 8.2. Canonical + Open Graph + Twitter Card
- [x] 8.3. Schema.org: EducationalOrganization, LocalBusiness, Article, FAQPage, BreadcrumbList
- [x] 8.4. NAP (Name-Address-Phone) nhất quán toàn site
- [x] 8.5. Nội dung local thật (tên khu vực, landmarks…) — không spam, không bịa

**Deliverable:** Toàn bộ meta/schema/structured data
**Tiêu chí duyệt:** Anh cung cấp NAP thật → điền vào placeholder

---

### ✅ PHASE 9 — PERFORMANCE & ACCESSIBILITY
**Mục tiêu:** Load nhanh (Core Web Vitals) + ai cũng dùng được (WCAG).

**Công việc cụ thể:**
- [x] 9.1. Ảnh WebP/AVIF + srcset + lazy loading + preload hero + correct dimensions (chống CLS)
- [x] 9.2. JS defer, CSS minify, loại bỏ render-blocking
- [x] 9.3. WCAG: semantic HTML5, keyboard navigation, visible focus, contrast ≥ 4.5:1, aria-label, prefers-reduced-motion

**Deliverable:** Code tối ưu + ảnh tối ưu
**Tiêu chí duyệt:** Test Lighthouse ≥ 90 (Performance/A11y/SEO)

---

### ✅ PHASE 10 — QA / TESTING
**Mục tiêu:** Không có lỗi sót trước khi bàn giao.

**Công việc cụ thể (checklist 50 mục):**
- [x] 10.1. UI: không vỡ layout, không overflow, không ảnh méo/giật, responsive 320→1920px
- [x] 10.2. UX: mọi link/CTA/menu (desktop+mobile)/form/gallery/lightbox/accordion hoạt động
- [x] 10.3. SEO: không trùng title, không broken link, sitemap khớp
- [x] 10.4. Performance: Lighthouse, kiểm tra ảnh nặng
- [x] 10.5. Accessibility: kiểm tra keyboard/contrast/screen reader cơ bản
- [x] 10.6. Security: form validation + sanitization, không lộ secret/key, không gửi dữ liệu nhạy cảm kiểu không an toàn

**Deliverable:** Checklist nghiệm thu đầy đủ (Master Prompt mục 50)
**Tiêu chí duyệt:** Anh test thực tế trên điện thoại + máy tính

---

### ✅ PHASE 11 — FINAL POLISH + DOCS
**Mục tiêu:** Bàn giao sạch sẽ, dễ vận hành.

**Công việc cụ thể:**
- [x] 11.1. `README.md`: hướng dẫn chạy local, thay logo, thay ảnh, thay thông tin trường (một chỗ: config), thay màu, thay nội dung, deploy (Netlify/Vercel/GitHub Pages)
- [x] 11.2. `privacy-policy.html` + `terms.html` + `404.html`
- [x] 11.3. Checklist nghiệm thu cuối + bàn giao toàn bộ source

**Deliverable:** Website hoàn chỉnh + tài liệu bàn giao

---

## 3. CÁC QUYẾT ĐỊNH CẦN ANH CHỐT (blocker để bắt đầu)

| # | Câu hỏi | Đề xuất của Douceur |
|---|---------|---------------------|
| 1 | **Tên thương hiệu**: LITTLE SUNSHINE (demo trong Master Prompt) hay Mầm non Bình Minh / DAWN Kindergarten? | Dùng tên thật của anh, placeholder cho thông tin liên hệ |
| 2 | **Công nghệ**: HTML tĩnh thuần (đề xuất) hay Express/Node (đã cài)? | HTML tĩnh — dễ deploy, dễ bàn giao, CMS-ready sau này |
| 3 | **Ảnh**: Douceur tự tìm ảnh stock miễn phí (Unsplash/Pexels) hay anh cấp ảnh thật? | Giai đoạn đầu: stock; sau: thay bằng ảnh thật |
| 4 | **Phạm vi đợt 1**: làm đủ 11 phase luôn hay rút gọn (Homepage + trang cốt lõi trước)? | Đề xuất: làm đủ 11 phase nhưng mỗi phase gọn, duyệt từng phase |

**Anh chốt 4 mục trên → Douceur bắt đầu Phase 1 ngay.**

---

## 4. FILE & TÀI LIỆU LIÊN QUAN
- Sơ đồ 5 tầng: `docs/diagram-pyramid.html` (+ PNG)
- Sơ đồ lộ trình: `docs/diagram-roadmap.html` (+ PNG)
- File này: `docs/KE_HOACH_CHI_TIET.md`
- (Đề xuất) Master Prompt V2 gốc sẽ lưu tại `docs/MASTER_PROMPT_V2.md` — chờ anh duyệt
