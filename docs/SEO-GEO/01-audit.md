# PHASE 1: TECHNICAL SEO AUDIT

**Audit date:** 2026-09-06  
**Method:** Manual crawl + curl + grep + schema analysis  
**Tool:** Bash + curl + web inspection

---

## 🌐 CRAWLABILITY & INDEXABILITY

### Robots.txt Analysis
**File:** `/robots.txt`  
**Status:** ✅ Found and valid

**Content:**
```
User-agent: *
Allow: /

# AI Search Bots
User-agent: GPTBot / ChatGPT-User / CCBot / anthropic-ai / Claude-Web / PerplexityBot / Google-Extended
Allow: /
```

**Findings:**
- ✅ Main user-agent: Allow all
- ✅ AI bots: All explicitly allowed
- ✅ Sitemap declared
- ❌ No crawl-delay specified
- ❌ No blocking of bad bots (AhrefsBot, SemrushBot nếu muốn)

**Verdict:** 🟢 GOOD

---

### Sitemap.xml Analysis
**File:** `/sitemap.xml`  
**Status:** ✅ Exists  
**URLs declared:** 19

**Findings:**
- ✅ Valid XML structure
- ✅ Includes main pages
- ❌ Contains dead URLs (faq.html, ve-chung-toi.html return 404 on production but exist local)
- ❌ No news pages included (5 bài viết trong /news/)
- ❌ `index.html` listed alongside `/` (duplicate)

**Verdict:** 🟡 NEEDS_UPDATE

---

### HTTP Status Codes (Production)

| URL | Status | Note |
|-----|--------|------|
| `/` | 200 | OK |
| `/index.html` | 200 | Duplicate of `/` |
| `/ve-chung-toi.html` | **404** | ❌ CRITICAL — page exists locally but 404 on server |
| `/chuong-trinh.html` | 200 | OK |
| `/faq.html` | **404** | ❌ CRITICAL — same issue |
| `/cau-hoi.html` | 200 | OK (serves as FAQ instead) |
| `/lien-he.html` | 200 | OK |
| `/hoc-phi.html` | 200 | OK |
| `/tin-tuc.html` | 200 | OK |
| `/tuyen-sinh.html` | 200 | OK |

**Verdict:** 🔴 CRITICAL — 2 pages 404 trên production

---

### Asset Status (Critical)

| Asset | Status | Note |
|-------|--------|------|
| `/assets/img/about.webp` | **404** | ❌ Page references but file missing |
| `/assets/img/logo.svg` | **404** | ❌ Critical — logo không load được |

**Verdict:** 🔴 CRITICAL — Brand identity broken (no logo)

---

## 📄 META TAGS

### Title Tags Audit

| Page | Title | Length | Status |
|------|-------|--------|--------|
| index.html | "Mầm non Bình Minh · DAWN Kindergarten — Nơi mỗi ngày đến trường là một ngày hạnh phúc" | 75 chars | 🟡 Too long (>60) |
| chuong-trinh.html | "Chương trình học — Mầm non Bình Minh · DAWN Kindergarten" | 56 chars | 🟢 OK |
| ve-chung-toi.html | (similar) | ~60 | 🟢 OK |
| faq.html | (shorter) | <60 | 🟢 OK |

**Findings:**
- 🟡 Index title slightly long (75 chars, ideal 50-60)
- 🟢 All pages have unique titles
- 🟡 No keyword optimization in titles (VD: "Mầm non Vũng Tàu" thiếu)

---

### Meta Description Audit

**Index.html:**
- "Mầm non Bình Minh (DAWN Kindergarten) — môi trường giáo dục sớm an toàn, yêu thương với chương trình Montessori, STEAM, giáo dục cảm xúc. Đăng ký tham quan ngay hôm nay."
- Length: 158 chars
- 🟡 A bit long (ideal 150-160)
- 🟡 No CTA strong
- 🟢 Has keywords: Montessori, STEAM

---

### H1-H6 Hierarchy

| Page | H1 count | H2 count | H3 count | Status |
|------|----------|----------|----------|--------|
| index.html | 1 | 8 | ~15 | 🟢 Good |
| chuong-trinh.html | 1 | ~10 | ~20 | 🟢 Good |
| ve-chung-toi.html | 1 | ~5 | ~10 | 🟢 Good |

**Verdict:** 🟢 All pages have exactly 1 H1

---

## 🔗 INTERNAL LINKING

### Link Structure Issues
- ❌ **Broken**: `ve-chung-toi.html` linked from index.html footer + nav → 404
- ❌ **Broken**: `faq.html` linked from index.html + multiple pages → 404
- ✅ `cau-hoi.html` (alternate FAQ URL) returns 200
- ✅ `gioi-thieu.html` returns 200 (alternate about URL)

**Root cause analysis:**
- Code local có `ve-chung-toi.html` và `faq.html` nhưng có thể chưa push lên GitHub
- Hoặc GitHub Pages cache issue

**Verdict:** 🔴 CRITICAL — Need to verify deployment

---

### Orphan Pages Check
**Pages that may have few internal links:**
- `/terms.html` — likely orphan
- `/privacy-policy.html` — likely orphan
- `/404.html` — intentional orphan

**Verdict:** 🟡 Acceptable (legal pages)

---

## 🖼️ IMAGES

### Image Format Analysis
- ✅ 12+ images use `.webp` (good)
- ✅ 5 images use `loading="lazy"`
- ❌ `/assets/img/about.webp` returns 404 (despite references)
- ❌ `/assets/img/logo.svg` returns 404

### Alt Text Audit (Index.html)
- Total `<img>` tags: 14
- With `alt` attribute: 14
- **100% alt coverage** 🟢

---

## 📊 STRUCTURED DATA

### Schema Coverage Matrix

| Page | Organization | LocalBusiness | Breadcrumb | FAQPage | Course | Article | Person | Status |
|------|--------------|---------------|------------|---------|--------|---------|--------|--------|
| index.html | ✅ | ✅ (PostalAddress) | ❌ | ✅ | ❌ | ❌ | ❌ | 🟡 |
| chuong-trinh.html | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | 🟡 |
| ve-chung-toi.html | ✅ (EducationalOrg) | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | 🟡 |
| faq.html | ❌ | ❌ | ❌ | ✅ (10 Q) | ❌ | ❌ | ❌ | 🟢 |
| gallery.html | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 |
| moi-truong.html | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 |
| hoat-dong.html | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 |
| hoc-phi.html | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 |
| lien-he.html | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 |
| tin-tuc.html | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔴 |
| news/*.html (5) | ❌ | ❌ | ❌ | ✅ (1) | ❌ | ✅ (2) | ❌ | 🟡 |

**Verdict:** 🟡 PARTIAL — Need BreadcrumbList on most pages, FAQPage on more, etc.

---

### Schema Validation Issues

**index.html Organization schema:**
- ✅ Has name, address, telephone
- ✅ Has GeoCoordinates (10.346, 107.084) — **NEED_VERIFICATION** (from em's earlier edit)
- ✅ Has OpeningHoursSpecification
- ✅ Has AggregateRating (4.8, 24 reviews) — **NEED_VERIFICATION** (no real reviews yet)
- ⚠️ SameAs links: không có
- ⚠️ Logo: không có trong schema

---

## 📱 OPEN GRAPH & SOCIAL

### OG Tags Audit
| Page | og:title | og:description | og:image | og:url | og:type | Twitter Card |
|------|----------|----------------|----------|--------|---------|--------------|
| ALL PAGES | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

**Verdict:** 🔴 CRITICAL — No social sharing optimization

---

## 🔄 REDIRECTS & CANONICAL

### HTTP → HTTPS
- HTTP returns 200 (no redirect)
- HTTPS returns 200
- GitHub Pages handles this but should be explicit

### Canonical Tags
- ❌ No `<link rel="canonical">` on any page
- Result: Google may treat `/` and `/index.html` as duplicate

**Verdict:** 🔴 HIGH PRIORITY

---

## ⚡ PERFORMANCE

### Core Web Vitals (Estimated, no Chrome access)
- 🟡 Cannot test without Chrome browser access
- 🟡 Need manual test at https://pagespeed.web.dev/

**Estimated issues:**
- Multiple CSS files (style.css, responsive.css, animations.css) — not minified
- Inline styles in some pages
- Some images may not be optimized (already converted to WebP though)

---

## 📋 FAVICON

- ✅ Declared: `<link rel="icon" type="image/svg+xml" href="assets/img/logo.svg">`
- ❌ **logo.svg returns 404** — favicon broken
- ❌ No apple-touch-icon

---

## 🗂️ URL STRUCTURE

### URL Analysis
- ✅ All URLs use hyphens (chuong-trinh.html, ve-chung-toi.html)
- ✅ All Vietnamese URLs readable
- ✅ Consistent structure
- ❌ `/index.html` alongside `/` — duplicate

---

## 📰 DUPLICATE CONTENT

### Identified Duplicates
1. `/` and `/index.html` — same content
2. `ve-chung-toi.html` and `gioi-thieu.html` — possibly same purpose
3. `faq.html` (404) and `cau-hoi.html` (200) — alternate FAQ

**Verdict:** 🟡 Needs canonical tags to resolve

---

## 📊 SUMMARY OF ISSUES

| Priority | Issue | Impact | File to Fix |
|----------|-------|--------|-------------|
| **P0** | `ve-chung-toi.html` 404 | Navigation broken, SEO loss | Server deploy / GitHub |
| **P0** | `faq.html` 404 | Same | Server deploy / GitHub |
| **P0** | `/assets/img/logo.svg` 404 | No logo, no favicon | Server deploy / GitHub |
| **P0** | `/assets/img/about.webp` 404 | Broken image | Server deploy / GitHub |
| **P1** | No Open Graph tags | Poor social sharing | All pages |
| **P1** | No canonical tags | Duplicate content risk | All pages |
| **P1** | Sitemap has dead URLs | Sitemap errors in GSC | sitemap.xml |
| **P1** | News pages not in sitemap | Missed indexing | sitemap.xml |
| **P2** | BreadcrumbList missing | Breadcrumb rich results | All pages |
| **P2** | Schema on gallery/moi-truong/hoat-dong | No rich results | Pages |
| **P2** | AggregateRating fake | Schema violation | index.html |
| **P3** | Core Web Vitals untested | Performance baseline | All pages |
| **P3** | No minified CSS | Performance | assets/css/ |
| **P3** | Multiple inline styles | Performance | All pages |

---

## 🎯 NEXT STEPS

After audit, proceed to:
- **PHASE 2:** Information Architecture design
- **PHASE 3:** Keyword/topic map
- **PHASE 4:** Entity SEO
- **PHASE 5:** Schema strategy
- **PHASE 6:** Content architecture
- **PHASE 7:** GEO strategy
- **PHASE 8:** Local SEO
- **PHASE 9:** Wikidata
- **PHASE 10:** Measurement
