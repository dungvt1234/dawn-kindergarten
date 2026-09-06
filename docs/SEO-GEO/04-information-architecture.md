# PHASE 4: INFORMATION ARCHITECTURE

**Method:** Search intent + page hierarchy design  
**Date:** 2026-09-06

---

## 🏛️ SITE STRUCTURE

### Current Hierarchy
```
binhminhkindergarten.site/
├── / (Home)
├── /ve-chung-toi.html (About) — ⚠️ 404 on prod
├── /chuong-trinh.html (Programs)
├── /moi-truong.html (Facilities)
├── /hoat-dong.html (Activities)
├── /dinh-duong.html (Nutrition) — empty
├── /faq.html (FAQ) — ⚠️ 404 on prod
├── /cau-hoi.html (FAQ alt) — 200 OK
├── /hoc-phi.html (Tuition) ⚠️ NEED_VERIFICATION
├── /lien-he.html (Contact)
├── /dang-ky-tham-quan.html (Admissions)
├── /tuyen-sinh.html (Enrollment)
├── /tin-tuc.html (News list)
├── /gallery.html
├── /gioi-thieu.html (About alt)
├── /news/ (5 articles)
├── /privacy-policy.html
├── /terms.html
└── /404.html
```

---

## 🎯 PAGE INTENT MAPPING

### Tier 1: Hub Pages (high authority)
| Page | Intent | Role |
|------|--------|------|
| `/` (index.html) | Brand + Local + Trust | Hub |
| `/chuong-trinh.html` | Methodology + Programs | Hub |
| `/ve-chung-toi.html` | Brand + Trust | Hub |

### Tier 2: Conversion Pages
| Page | Intent | Role |
|------|--------|------|
| `/dang-ky-tham-quan.html` | Transactional | Conversion |
| `/tuyen-sinh.html` | Transactional | Conversion |
| `/hoc-phi.html` | Commercial Investigation | Conversion (⚠️) |

### Tier 3: Supporting Pages
| Page | Intent | Role |
|------|--------|------|
| `/moi-truong.html` | Trust | Support |
| `/hoat-dong.html` | Trust | Support |
| `/lien-he.html` | Navigational | Support |
| `/faq.html` | Informational | Support |

### Tier 4: Content
| Page | Intent | Role |
|------|--------|------|
| `/tin-tuc.html` | Informational | Content |
| `/news/*` (5 articles) | Informational | Long-form |

---

## 🧭 RECOMMENDED IA

### Keep (no change)
- index.html, chuong-trinh.html, ve-chung-toi.html, moi-truong.html, lien-he.html, dang-ky-tham-quan.html, tuyen-sinh.html, hoc-phi.html

### Fix
- `ve-chung-toi.html` — verify deployment
- `faq.html` — either fix deploy or remove from sitemap

### Merge decision
- `gioi-thieu.html` vs `ve-chung-toi.html` — use canonical or 301
- `cau-hoi.html` vs `faq.html` — consolidate

### Add (after verification)
- `/doi-ngu-giao-vien.html` — Team page (linking to Person schema)
- `/dinh-duong.html` — needs real content

### Remove (if not needed)
- `/terms.html` — keep but minimal
- `/privacy-policy.html` — keep but minimal

---

## 🔗 URL STRUCTURE BEST PRACTICES

### Current Issues
- ⚠️ `.html` extensions visible (less ideal but OK for static)
- ✅ Hyphens used (chuong-trinh, ve-chung-toi)
- ✅ Vietnamese readable

### Recommendation
- Keep `.html` for static site
- Use lowercase
- Use hyphens not underscores
- Avoid special characters

---

## 📐 NAVIGATION ARCHITECTURE

### Primary Nav (header)
1. Trang chủ (/)
2. Về chúng tôi (/ve-chung-toi.html)
3. Chương trình (/chuong-trinh.html)
4. Môi trường (/moi-truong.html)
5. Học phí (/hoc-phi.html) ⚠️
6. Liên hệ (/lien-he.html)
+ CTA: Đăng ký tham quan

### Footer Nav
- About
- Programs
- Admissions
- News
- Privacy / Terms
- Social links (Facebook)

### Recommendations
- Add "Đội ngũ" if team page created
- Consider "Tin tức" in primary nav (currently secondary)

---

## 🎨 TAXONOMY

### Categories
- Chương trình học (Programs)
- Hoạt động (Activities)
- Tin tức (News)
- Cẩm nang phụ huynh (Parent guides)

### Tags
- Montessori, STEAM, EQ, Vũng Tàu, Phường 7, Tuyển sinh, etc.

### For static site
- No CMS = no automatic taxonomy
- Use semantic HTML + manual organization

---

## 📊 SITEMAP RECOMMENDATIONS

### Current sitemap.xml: 19 URLs
**Issues:**
- Includes `/index.html` (duplicate)
- Includes `ve-chung-toi.html` (404)
- Includes `faq.html` (404)
- Does NOT include `news/*` (5 articles)
- Does NOT include `dinh-duong.html`

### Recommended sitemap (clean)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset>
  <url><loc>https://binhminhkindergarten.site/</loc><lastmod>2026-09-06</lastmod><priority>1.0</priority></url>
  <url><loc>https://binhminhkindergarten.site/ve-chung-toi.html</loc><lastmod>2026-09-06</lastmod><priority>0.8</priority></url>
  <url><loc>https://binhminhkindergarten.site/chuong-trinh.html</loc><lastmod>2026-09-06</lastmod><priority>0.9</priority></url>
  <url><loc>https://binhminhkindergarten.site/moi-truong.html</loc><lastmod>2026-09-06</lastmod><priority>0.7</priority></url>
  <url><loc>https://binhminhkindergarten.site/hoat-dong.html</loc><lastmod>2026-09-06</lastmod><priority>0.7</priority></url>
  <url><loc>https://binhminhkindergarten.site/hoc-phi.html</loc><lastmod>2026-09-06</lastmod><priority>0.8</priority></url>
  <url><loc>https://binhminhkindergarten.site/lien-he.html</loc><lastmod>2026-09-06</lastmod><priority>0.7</priority></url>
  <url><loc>https://binhminhkindergarten.site/dang-ky-tham-quan.html</loc><lastmod>2026-09-06</lastmod><priority>0.9</priority></url>
  <url><loc>https://binhminhkindergarten.site/tuyen-sinh.html</loc><lastmod>2026-09-06</lastmod><priority>0.8</priority></url>
  <url><loc>https://binhminhkindergarten.site/faq.html</loc><lastmod>2026-09-06</lastmod><priority>0.6</priority></url>
  <url><loc>https://binhminhkindergarten.site/tin-tuc.html</loc><lastmod>2026-09-06</lastmod><priority>0.6</priority></url>
  <url><loc>https://binhminhkindergarten.site/news/bai-viet-5-loi-ich-vang-cua-phuong-phap-montessori-voi-tre-mam-non.html</loc><lastmod>2026-09-06</lastmod><priority>0.7</priority></url>
  <url><loc>https://binhminhkindergarten.site/news/bai-viet-5-tieu-chi-vang-chon-truong-mam-non-tot-tai-vung-tau.html</loc><lastmod>2026-09-06</lastmod><priority>0.7</priority></url>
  <url><loc>https://binhminhkindergarten.site/news/bai-viet-7-ky-nang-tu-lap-cho-tre-mam-non.html</loc><lastmod>2026-09-06</lastmod><priority>0.6</priority></url>
  <url><loc>https://binhminhkindergarten.site/news/bai-viet-mam-non-binh-minh-khai-giang-nam-hoc-2026.html</loc><lastmod>2026-09-06</lastmod><priority>0.5</priority></url>
  <url><loc>https://binhminhkindergarten.site/news/bai-viet-vi-sao-phuong-phap-montessori-duoc-yeu-thich.html</loc><lastmod>2026-09-06</lastmod><priority>0.6</priority></url>
</urlset>
```

---

## 📋 NEXT STEPS

1. Fix broken pages (P0)
2. Update sitemap (P1)
3. Add canonical tags (P1)
4. Add Open Graph tags (P1)
5. Plan team page if needed
