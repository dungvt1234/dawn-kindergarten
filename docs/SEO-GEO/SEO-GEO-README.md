# SEO + GEO PROJECT — Mầm non Bình Minh / DAWN Kindergarten

**Website:** https://binhminhkindergarten.site  
**Entity:** Mầm non Bình Minh / Dawn Kindergarten  
**Location:** 75/2A Đường Phạm Hồng Thái, Phường 7, TP. Vũng Tàu  
**Phone:** 0866 685 632  
**Wikidata:** Q141329654  
**Audit date:** 2026-09-06

---

## 📊 HIỆN TRẠNG (TÓM TẮT)

Website `binhminhkindergarten.site` được host trên **GitHub Pages** với 24 HTML files, nội dung ổn định nhưng còn nhiều vấn đề về SEO kỹ thuật, structured data, internal linking và GEO. Đây là dự án **static HTML thuần**, không có framework/backend.

### Điểm mạnh
- ✅ Nội dung Tiếng Việt chất lượng, có nhiều bài pillar content
- ✅ Schema markup đã có trên 1 số trang (Organization, Course, FAQPage, Person)
- ✅ Đã thiết lập robots.txt cho phép AI bots (GPTBot, Claude, Perplexity)
- ✅ Đã có Wikidata entry (Q141329654) dù còn sơ sài
- ✅ Sitemap.xml đã tồn tại với 19 URLs

### Điểm yếu chính
- ❌ **Broken links trầm trọng**: `ve-chung-toi.html` và `faq.html` trả về 404 trên server dù tồn tại local
- ❌ **Asset 404**: `/assets/img/about.webp` và `/assets/img/logo.svg` trả 404
- ❌ **Duplicate URL**: `/` và `/index.html` cùng trả 200 → duplicate content
- ❌ **No Open Graph tags** trên bất kỳ page nào → social sharing kém
- ❌ **No canonical tags** → Google tự đoán canonical
- ❌ **HTTP → HTTPS**: không có redirect (cùng GitHub Pages nên OK, nhưng nên khai báo rõ)
- ❌ **Sitemap có link chết**: chứa URLs trỏ đến pages đang 404
- ❌ **WebP files bị 404** trên server — code local dùng .webp nhưng server có thể chưa push
- ❌ **Wikidata item chưa có statements** (đã audit, sẵn sàng batch 5 statements)
- ❌ **No reviews, no GBP** → Local SEO yếu

---

## 🚨 VẤN ĐỀ (PRIORITIZED)

| Priority | Task | File |
|----------|------|------|
| **P0** | Fix broken internal links (ve-chung-toi, faq return 404) | Server deploy |
| **P0** | Fix asset 404 (img/about.webp, img/logo.svg) | Server deploy |
| **P0** | Remove duplicate content (index.html + /) | robots/sitemap |
| **P1** | Add Open Graph + Twitter Card tags | All pages |
| **P1** | Add canonical tags | All pages |
| **P1** | Update sitemap.xml — remove dead URLs, add news pages | sitemap.xml |
| **P1** | Run Wikidata batch 5 statements (Q141329654) | Wikidata |
| **P2** | Add BreadcrumbList schema to all pages | All pages |
| **P2** | Improve schema on remaining pages (dinh-duong, gallery) | Pages |
| **P2** | Setup Google Business Profile | External |
| **P2** | Submit to Bing Places | External |
| **P3** | Add FAQ section to chuong-trinh.html (visible FAQs only) | Page |
| **P3** | Add author bio to news articles | News pages |
| **P3** | Verify all webp files served correctly | Server |

---

## 🎯 ƯU TIÊN (PRIORITY BREAKDOWN)

### **P0 — CRITICAL (phải fix ngay)**
1. Internal broken links (404 trên production)
2. Asset 404 (logo, hình ảnh chính)
3. Duplicate URL issue (no canonical)

### **P1 — HIGH (tuần 1-2)**
4. Open Graph + Twitter Card (social sharing)
5. Canonical tags (duplicate content)
6. Sitemap cleanup + news URLs
7. Wikidata 5 statements (entity SEO)

### **P2 — MEDIUM (tuần 2-4)**
8. BreadcrumbList schema
9. Schema expansion (more pages)
10. Google Business Profile
11. Bing Places

### **P3 — LOW (tháng 2-3)**
12. FAQ section on chuong-trinh
13. Author bio on news
14. Performance optimization (Core Web Vitals)
15. Backlink strategy (local citations)

---

## 📅 ROADMAP 90 NGÀY

### **Tháng 1 (Tuần 1-4): Foundation**
- Tuần 1: Fix P0 bugs (broken links, assets, duplicate)
- Tuần 2: Add OG tags + canonical + sitemap cleanup
- Tuần 3: Wikidata batch + Schema expansion
- Tuần 4: Google Business Profile + Bing Places setup

### **Tháng 2 (Tuần 5-8): Content + Local SEO**
- Tuần 5-6: Gather real parent reviews (target 10-20)
- Tuần 7: Add reviews schema to index.html
- Tuần 8: Local citations (Yellow Pages, etc.)

### **Tháng 3 (Tuần 9-12): GEO + Monitoring**
- Tuần 9-10: GEO prompt testing (Perplexity, ChatGPT)
- Tuần 11: Setup GSC + Bing Webmaster
- Tuần 12: Dashboard + measurement baseline

---

## 📊 KPI (Key Performance Indicators)

### **SEO KPIs**
- **Indexation:** Tăng từ 19 → 24 URLs indexed trong GSC
- **Schema coverage:** Từ ~40% → 100% pages có schema phù hợp
- **Sitemap health:** 100% URLs trong sitemap phải return 200
- **Broken links:** Từ 2+ → 0 broken internal links
- **Canonical coverage:** Từ 0% → 100% pages có canonical
- **OG coverage:** Từ 0% → 100% pages có OG tags

### **Local SEO KPIs**
- **GBP listing:** Complete profile với 5+ photos, 10+ reviews
- **NAP consistency:** 100% giống nhau trên mọi platform
- **Local citations:** 5+ listings trên directories VN

### **GEO KPIs**
- **Wikidata statements:** Từ 0 → 5 verified statements
- **AI citation rate:** Test 10 prompts trên Perplexity/ChatGPT, target 6+ citations
- **Entity consistency:** Name, address, phone giống nhau trên Wikidata, GBP, website

### **Measurement KPIs**
- **GSC clicks:** Baseline sau 30 ngày
- **GSC impressions:** Baseline sau 30 ngày
- **Average position:** Baseline sau 30 ngày
- **Mobile usability:** 100% pass
- **Core Web Vitals:** 90+ PageSpeed score

---

## 🔍 CÁCH KIỂM TRA KẾT QUẢ

### **1. Technical Audit (mỗi tháng)**
- Chạy `curl -I` cho mỗi URL trong sitemap
- Verify 0 broken links: dùng tool như Screaming Frog
- Test Core Web Vitals: https://pagespeed.web.dev/

### **2. Schema Validation**
- https://validator.schema.org/ — paste URL, kiểm tra schema
- https://search.google.com/test/rich-results — Rich Results test
- Google Rich Results Test: https://search.google.com/test/rich-results

### **3. Indexation Check**
- Google Search Console → Coverage → Valid
- `site:binhminhkindergarten.site` trên Google
- Đếm URLs indexed

### **4. GEO Testing (định kỳ)**
- Perplexity.ai: search "trường mầm non Montessori Vũng Tàu" → cite site?
- ChatGPT: hỏi về trường → có thông tin từ site?
- Google AI Overviews: search queries → cite site?

### **5. Local SEO**
- Google Maps: search "mầm non Bình Minh" → hiển thị?
- Google Reviews: monitor số reviews + rating
- Local pack ranking: search "mầm non Vũng Tàu" → có trong top 3?

### **6. Wikidata Monitoring**
- https://www.wikidata.org/wiki/Q141329654 — check statements
- Google Knowledge Panel: search "Mầm non Bình Minh"
- Schema.org validation cho sameAs links

---

## 📁 CẤU TRÚC DOCS

| File | Mô tả |
|------|-------|
| `00-strategy.md` | Tổng quan strategy & nguyên tắc |
| `01-audit.md` | Audit chi tiết toàn bộ website |
| `02-keyword-map.md` | Bản đồ keyword theo search intent |
| `03-topic-map.md` | Topic entities & semantic SEO |
| `04-information-architecture.md` | IA & page hierarchy |
| `05-entity-strategy.md` | Entity SEO strategy |
| `06-schema-strategy.md` | Schema.org strategy |
| `07-local-seo.md` | Local SEO plan |
| `08-geo-strategy.md` | Generative Engine Optimization |
| `09-content-plan.md` | Content plan & editorial calendar |
| `10-measurement.md` | KPIs & measurement framework |
| `11-wikidata.md` | Wikidata Q141329654 plan |
| `12-roadmap-90-days.md` | Roadmap 90 ngày chi tiết |

---

## ⚠️ QUY TẮC BẮT BUỘC

1. **Không tự bịa thông tin** — mọi claim phải có nguồn
2. **Không tạo review giả** — chỉ dùng reviews thật
3. **Không spam backlink** — chỉ local citations hợp lệ
4. **Không keyword stuffing** — semantic tự nhiên
5. **Không tạo content AI mỏng** — chất lượng > số lượng
6. **Mọi thông tin phải truy được về nguồn first-party**
7. **NEED_VERIFICATION** thay vì đoán khi thiếu dữ liệu

---

**Status:** 📋 Audit phase — Chờ review trước khi implement  
**Last updated:** 2026-09-06  
**Author:** Douceur (AI Assistant)
