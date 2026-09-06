# 90-DAY SEO + GEO ROADMAP

**Project:** Mầm non Bình Minh  
**Duration:** 90 days from 2026-09-06  
**Goal:** Establish technical foundation, local SEO, GEO readiness

---

## 📅 MONTH 1: FOUNDATION (Week 1-4)

### Week 1: Critical Fixes

**P0 Tasks:**

#### Task 1.1: Fix broken pages
- **Vấn đề:** `ve-chung-toi.html` and `faq.html` return 404 on production
- **Lý do:** Possibly not pushed to GitHub or file naming issue
- **Tác động SEO:** Internal links broken, link equity lost, crawl errors
- **Evidence:** `curl -I https://binhminhkindergarten.site/ve-chung-toi.html` → 404
- **File cần sửa:** GitHub repo `dungvt1234/dawn-kindergarten`
- **Cách sửa:** 
  1. Verify files exist locally
  2. Check Git push status
  3. Re-deploy to GitHub Pages
  4. Test URLs return 200
- **Expected outcome:** All internal links work, no 404 errors
- **Risk:** Low — files exist locally

#### Task 1.2: Fix asset 404s
- **Vấn đề:** `/assets/img/logo.svg` and `/assets/img/about.webp` return 404
- **Lý do:** Asset path mismatch
- **Tác động SEO:** Broken logo (no branding), broken OG image, no favicon
- **Evidence:** `curl -I https://binhminhkindergarten.site/assets/img/logo.svg` → 404
- **File cần sửa:** 
  - `assets/img/logo.svg` 
  - `assets/img/about.webp`
- **Cách sửa:** Verify files in Git repo, push missing assets
- **Expected outcome:** Logo + favicon load correctly
- **Risk:** Low

---

### Week 2: Schema & Metadata

**P1 Tasks:**

#### Task 2.1: Add Open Graph + Twitter Card tags
- **Vấn đề:** No social sharing optimization
- **Lý do:** Missing og:title, og:description, og:image, og:url
- **Tác động SEO:** Poor social sharing, no rich previews on Facebook/Zalo
- **Evidence:** Grep shows no `og:` or `twitter:` tags in any HTML file
- **File cần sửa:** All HTML files (24 files)
- **Cách sửa:** Add to `<head>`:
```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...webp">
<meta property="og:url" content="...">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
```
- **Expected outcome:** Rich social previews, better social engagement
- **Risk:** Low

#### Task 2.2: Add canonical tags
- **Vấn đề:** No canonical URLs, duplicate content risk
- **Lý do:** `/` and `/index.html` both return 200 with same content
- **Tác động SEO:** Duplicate content penalty, split link equity
- **Evidence:** Both URLs return HTTP 200
- **File cần sửa:** All HTML files
- **Cách sửa:** Add to `<head>`:
```html
<link rel="canonical" href="https://binhminhkindergarten.site/[path]">
```
- **Expected outcome:** No more duplicate content
- **Risk:** Low

#### Task 2.3: Update sitemap.xml
- **Vấn đề:** Sitemap has dead URLs (faq, ve-chung-toi), missing news pages
- **Lý do:** Outdated sitemap
- **Tác động SEO:** GSC sitemap errors, missed indexing of news
- **Evidence:** Sitemap contains URLs that 404
- **File cần sửa:** `sitemap.xml`
- **Cách sửa:** Replace with clean version (16 URLs, no duplicates, include news/*)
- **Expected outcome:** Sitemap health 100%, all URLs return 200
- **Risk:** Low

---

### Week 3: Wikidata + Entity

**P1 Tasks:**

#### Task 3.1: Run Wikidata batch (5 statements)
- **Vấn đề:** Q141329654 has 0 statements
- **Lý do:** Just created, no claims added
- **Tác động SEO:** Entity SEO weak, AI search can't verify entity
- **Evidence:** Audit shows 0 statements
- **File cần sửa:** Wikidata Q141329654
- **Cách sửa:** Run QuickStatements batch (5 verified statements)
- **Expected outcome:** 5 statements on Wikidata, sameAs link from website
- **Risk:** Low (data is verified)

#### Task 3.2: Add Vietnamese label/description to Wikidata
- **Vấn đề:** Q141329654 only has English label/description
- **Lý do:** Newly created
- **Tác động SEO:** Vietnamese users searching won't see local label
- **Evidence:** Audit shows no Vietnamese label
- **File cần sửa:** Wikidata Q141329654
- **Cách sửa:** Add via Web UI:
  - Vietnamese label: "Mầm non Bình Minh"
  - Vietnamese description: "Trường mầm non tư thục tại TP. Vũng Tàu, Việt Nam"
- **Expected outcome:** Multi-language support on Wikidata
- **Risk:** Low

---

### Week 4: Cleanup + Foundation

**P2 Tasks:**

#### Task 4.1: Add BreadcrumbList to all pages
- **Vấn đề:** Most pages lack BreadcrumbList schema
- **Lý do:** Not implemented
- **Tác động SEO:** Missed breadcrumb rich results in SERP
- **Evidence:** Audit shows BreadcrumbList only on chuong-trinh.html
- **File cần sửa:** 22 HTML files (except chuong-trinh)
- **Cách sửa:** Add BreadcrumbList JSON-LD to each page
- **Expected outcome:** Breadcrumb rich results in Google
- **Risk:** Low

#### Task 4.2: Remove fake AggregateRating
- **Vấn đề:** index.html has AggregateRating 4.8/24 reviews (FAKE)
- **Lý do:** Em added it from earlier work, no real reviews yet
- **Tác động SEO:** Schema violation, Google may penalize
- **Evidence:** Grep shows AggregateRating in index.html with ratingValue 4.8 reviewCount 24
- **File cần sửa:** `index.html`
- **Cách sửa:** Remove AggregateRating until real reviews exist
- **Expected outcome:** Schema compliance, no false claims
- **Risk:** Low (this is correct action)

---

## 📅 MONTH 2: LOCAL SEO (Week 5-8)

### Week 5-6: Setup

**P1 Tasks:**

#### Task 5.1: Create Google Business Profile
- **Vấn đề:** No GBP listing
- **Lý do:** Never created
- **Tác động SEO:** No local pack ranking
- **Evidence:** Search "Mầm non Bình Minh" on Google Maps → no listing
- **File cần sửa:** External — Google Business Profile
- **Cách sửa:** 
  1. Go to https://business.google.com/
  2. Create profile with verified NAP
  3. Add categories (Kindergarten primary)
  4. Add 10+ photos
  5. Verify (postcard or phone)
- **Expected outcome:** Listed in local pack for "mầm non Vũng Tàu"
- **Risk:** Medium (verification delays possible)

#### Task 5.2: Create Bing Places
- **Vấn đề:** No Bing Places listing
- **Lý do:** Never created
- **Tác động SEO:** Missed Bing search visibility
- **Evidence:** No listing on Bing
- **File cần sửa:** External — Bing Places
- **Cách sửa:** Create at https://www.bingplaces.com/
- **Expected outcome:** Listed in Bing local
- **Risk:** Low

#### Task 5.3: Create Facebook Business Page
- **Vấn đề:** No Facebook presence
- **Lý do:** Never created
- **Tác động SEO:** No social signal
- **Evidence:** No Facebook page found
- **File cần sửa:** External — Facebook
- **Cách sửa:** Create page at facebook.com/business
- **Expected outcome:** Social presence + sameAs link
- **Risk:** Low

---

### Week 7-8: Real Data

**P2 Tasks:**

#### Task 6.1: Gather real parent reviews
- **Vấn đề:** No real reviews, schema has fake 4.8/24
- **Lý do:** No review collection process
- **Tác động SEO:** Trust signals weak, local pack ranking down
- **Evidence:** 0 Google reviews
- **File cần sửa:** External — process
- **Cách sửa:** 
  1. Send Google Form to parents (template in PARENT_REVIEWS_TEMPLATE.md)
  2. Ask in-person for Google reviews
  3. Add QR code at reception
- **Expected outcome:** 5-10 real reviews
- **Risk:** Medium (depends on parent participation)

#### Task 6.2: Add real AggregateRating
- **Vấn đề:** Currently fake
- **Lý do:** No real reviews
- **Tác động SEO:** Star ratings in SERP
- **Evidence:** Wait until 5+ real reviews
- **File cần sửa:** `index.html` (after real reviews exist)
- **Cách sửa:** Add real ratingValue and reviewCount from Google
- **Expected outcome:** Star ratings in SERP
- **Risk:** Low (if reviews are real)

#### Task 6.3: Local citations (3+ directories)
- **Vấn đề:** No local citations
- **Lý do:** Never submitted
- **Tác động SEO:** Local pack ranking lower
- **Evidence:** Search for school on directories → not found
- **File cần sửa:** External — directories
- **Cách sửa:** Submit to:
  - yellowpages.vn
  - foody.vn (if applicable)
  - diadiem.com
- **Expected outcome:** 3+ consistent citations
- **Risk:** Low

---

## 📅 MONTH 3: GEO + MEASUREMENT (Week 9-12)

### Week 9-10: Authority

**P2 Tasks:**

#### Task 7.1: Add author bio to news articles
- **Vấn đề:** Articles have no author bio
- **Lý do:** Not implemented
- **Tác động SEO:** E-E-A-T weak
- **Evidence:** Audit shows no author bio
- **File cần sửa:** `news/*.html` (5 files)
- **Cách sửa:** Add author byline + bio
- **Expected outcome:** Better E-E-A-T signals
- **Risk:** Low

#### Task 7.2: Add "last updated" date to all pages
- **Vấn đề:** Most pages missing dates
- **Lý do:** Not implemented
- **Tác động SEO:** Freshness signals weak
- **Evidence:** Audit
- **File cần sửa:** All HTML files
- **Cách sửa:** Add visible date + schema dateModified
- **Expected outcome:** Better freshness signals
- **Risk:** Low

#### Task 7.3: Internal linking optimization
- **Vấn đề:** Some pages isolated
- **Lý do:** No systematic internal linking
- **Tác động SEO:** Link equity distribution poor
- **Evidence:** Orphan pages analysis
- **File cần sửa:** All HTML files
- **Cách sửa:** Add 3+ contextual internal links per page
- **Expected outcome:** Better crawl, better ranking
- **Risk:** Low

---

### Week 11-12: GEO + Monitoring

**P1 Tasks:**

#### Task 8.1: GEO prompt testing baseline
- **Vấn đề:** Unknown AI citation rate
- **Lý do:** No GEO tracking
- **Tác động SEO:** GEO progress unknown
- **Evidence:** No tracking yet
- **File cần sửa:** Tracking spreadsheet
- **Cách sửa:** Test 10 prompts on 4 engines (Perplexity, ChatGPT, Bing Copilot, Google AI)
- **Expected outcome:** Baseline citation rate (likely 0% start)
- **Risk:** None (just measurement)

#### Task 8.2: Setup measurement dashboard
- **Vấn đề:** No centralized tracking
- **Lý do:** New project
- **Tác động SEO:** Can't track progress
- **Evidence:** No dashboard
- **File cần sửa:** `dashboard/spreadsheet.md`
- **Cách sửa:** Use template in 10-measurement.md
- **Expected outcome:** Weekly tracking routine
- **Risk:** None

#### Task 8.3: Verify Google Search Console
- **Vấn đề:** GSC may not be verified
- **Lý do:** Not set up
- **Tác động SEO:** No search data
- **Evidence:** Check GSC
- **File cần sửa:** External — GSC
- **Cách sửa:** Verify at search.google.com/search-console
- **Expected outcome:** Search data flowing
- **Risk:** Low

#### Task 8.4: Verify Bing Webmaster
- **Vấn đề:** BWT not set up
- **Lý do:** New project
- **Tác động SEO:** Missed Bing data
- **Evidence:** Check BWT
- **File cần sửa:** External — BWT
- **Cách sửa:** Verify at bing.com/webmasters
- **Expected outcome:** Bing data flowing
- **Risk:** Low

---

## 📊 PRIORITY MATRIX

| Priority | Tasks | Count |
|----------|-------|-------|
| **P0** | Fix broken pages, fix assets, remove fake data | 3 |
| **P1** | OG tags, canonical, sitemap, Wikidata, GBP, Bing Places | 6 |
| **P2** | BreadcrumbList, real reviews, citations, author bio, dates, internal links | 6 |
| **P3** | FAQ on chuong-trinh, comparison tables, performance optimization | 3 |
| **TOTAL** | | **18 tasks** |

---

## 📈 EXPECTED OUTCOMES (90 DAYS)

### Technical
- ✅ 0 broken links
- ✅ 100% schema coverage
- ✅ 100% sitemap health
- ✅ 100% canonical coverage
- ✅ 100% OG tag coverage

### Local SEO
- ✅ GBP complete + verified
- ✅ Bing Places listed
- ✅ 5-10 real reviews
- ✅ 3+ local citations
- ✅ Local pack top 3 (target)

### GEO
- ✅ Wikidata 5 statements
- ✅ Vietnamese + English on Wikidata
- ✅ Baseline GEO citation rate
- ✅ SameAs links added

### Content
- ✅ Author bio on all news
- ✅ "Last updated" dates
- ✅ Better internal linking
- ✅ 1-2 new articles (if resources)

### Measurement
- ✅ GSC verified
- ✅ BWT verified
- ✅ Tracking dashboard set up
- ✅ Monthly report process

---

## ⚠️ RISKS

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| GitHub Pages deploy issues | Low | High | Verify after each push |
| GBP verification delay | Medium | Medium | Apply early, have backup plan |
| Few real reviews | Medium | Medium | Multiple ask channels |
| Wikidata edits reverted | Low | Low | Only verified data, references |
| Schema validation errors | Low | Medium | Test with Schema.org validator |
| Time constraints | Medium | Medium | Prioritize P0/P1 only |

---

## 📋 NEXT STEPS

1. Review this roadmap with Dung
2. Confirm priority order
3. Start P0 fixes (broken pages, assets)
4. Schedule weekly check-ins

**Awaiting Dung's review before implementation.**
