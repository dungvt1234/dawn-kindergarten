# PHASE 3: TOPIC MAP & SEMANTIC SEO

**Method:** Entity-based topic modeling  
**Date:** 2026-09-06

---

## 🧠 CORE ENTITY

**Entity:** Mầm non Bình Minh (DAWN Kindergarten)  
**Wikidata:** Q141329654  
**Type:** EducationalOrganization → Kindergarten  
**Location:** Vũng Tàu, Bà Rịa–Vũng Tàu, Vietnam

---

## 🌳 TOPIC HIERARCHY

### Tier 1: Core Topics (5)
1. **Brand & Identity** — ai là Mầm non Bình Minh
2. **Programs** — dạy cái gì
3. **Location & Facilities** — ở đâu, học ở đâu
4. **Admissions** — nhập học như thế nào
5. **Trust & Reviews** — uy tín như thế nào

### Tier 2: Sub-topics (15)
1.1. Sứ mệnh  
1.2. Đội ngũ giáo viên  
1.3. Lịch sử  
2.1. Montessori  
2.2. STEAM  
2.3. Giáo dục cảm xúc  
2.4. Ngoại ngữ  
2.5. Nghệ thuật & vận động  
3.1. Cơ sở vật chất  
3.2. An toàn  
3.3. Địa điểm gần trường  
4.1. Quy trình đăng ký  
4.2. Tuyển sinh 2026  
4.3. Học phí ⚠️  

### Tier 3: Long-tail (40+)
Mỗi sub-topic → 2-3 long-tail questions/articles

---

## 🔗 ENTITY CONNECTIONS

### Internal Entity Graph
```
Mầm non Bình Minh
├── Programs
│   ├── Montessori (Q606825)
│   ├── STEAM (Q22908427)
│   ├── EQ Education
│   └── Foreign Language
├── Classes
│   ├── Nhóm Chơi (18-24m)
│   ├── Lớp Lá (2-3y)
│   ├── Lớp Cây (3-4y)
│   └── Lớp Hoa (4-5y)
├── Location
│   ├── Vũng Tàu (Q37795)
│   ├── Bà Rịa-Vũng Tàu (Q36626)
│   ├── Phường 7
│   ├── Bãi Sau
│   └── Hồ Bán Nguyệt
├── Teachers
│   ├── NEED_VERIFICATION
│   └── (5 teachers from Person schema)
└── Trust
    ├── Reviews (NEED real reviews)
    ├── Wikidata (Q141329654)
    └── Google Business Profile (TODO)
```

---

## 📚 SEMANTIC KEYWORD GROUPS

### Group 1: "Mầm non" variations
- mầm non
- trường mầm non
- nhà trẻ
- lớp mẫu giáo
- preschool (EN)
- kindergarten (EN)

### Group 2: "Vũng Tàu" variations
- Vũng Tàu
- TP. Vũng Tàu
- thành phố Vũng Tàu
- Bà Rịa - Vũng Tàu
- tỉnh Bà Rịa
- VT (abbreviation)

### Group 3: "Phương pháp" variations
- Montessori
- Montessori education
- giáo dục Montessori
- phương pháp Montessori
- tiếp cận Montessori
- Montessori method

### Group 4: "STEAM" variations
- STEAM
- STEAM education
- giáo dục STEAM
- khoa học công nghệ
- STEM (related)

### Group 5: "Trẻ em" variations
- trẻ em
- trẻ nhỏ
- trẻ mầm non
- bé
- con
- children (EN)
- kid (EN)

### Group 6: "Phụ huynh" variations
- phụ huynh
- ba mẹ
- bố mẹ
- cha mẹ
- gia đình
- parents (EN)

---

## 🗺️ TOPIC CLUSTERS (CONTENT HUB)

### Cluster 1: Montessori Hub
- Pillar: bai-viet-vi-sao-phuong-phap-montessori-duoc-yeu-thich.html
- Pillar: bai-viet-5-loi-ich-vang-cua-phuong-phap-montessori-voi-tre-mam-non.html
- Cluster: chuong-trinh.html (Montessori section)
- Internal links: high

### Cluster 2: Vũng Tàu Local Hub
- Pillar: bai-viet-5-tieu-chi-vang-chon-truong-mam-non-tot-tai-vung-tau.html
- Cluster: index.html, ve-chung-toi.html, lien-he.html
- Internal links: high

### Cluster 3: Skills & Development Hub
- Pillar: bai-viet-7-ky-nang-tu-lap-cho-tre-mam-non.html
- Cluster: chuong-trinh.html, hoat-dong.html

### Cluster 4: News & Events Hub
- tin-tuc.html
- news/bai-viet-mam-non-binh-minh-khai-giang-nam-hoc-2026.html
- bai-viet-7-ky-nang-tu-lap-cho-tre-mam-non.html
- bai-viet-vi-sao-phuong-phap-montessori-duoc-yeu-thich.html

---

## 🧩 INTERNAL LINKING TOPOLOGY

### From index.html (hub)
→ chuong-trinh.html
→ ve-chung-toi.html (BROKEN — 404)
→ faq.html (BROKEN — 404)
→ moi-truong.html
→ hoc-phi.html
→ lien-he.html
→ tin-tuc.html
→ tuyen-sinh.html
→ news/* (3 articles)
→ dang-ky-tham-quan.html

### Hub-and-spoke model
- **Hub:** index.html, chuong-trinh.html
- **Spokes:** all other pages link to hubs
- **Cross-links:** between related topics

---

## ⚠️ TOPIC GAPS

Các topic chưa có content:
- [ ] Chi tiết chương trình EQ (Educational Quality)
- [ ] Dinh dưỡng học đường (NEED content for dinh-duong.html)
- [ ] Gallery (NEED structured ImageObject schema)
- [ ] Hoạt động ngoại khóa cụ thể
- [ ] Đội ngũ giáo viên chi tiết (5 teachers from Person schema — need bios)

---

## 📋 NEXT STEPS

- Review this topic map with content team
- Identify highest-priority content gaps
- Schedule content creation
- Update internal links
