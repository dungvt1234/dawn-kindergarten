# PHASE 6: SCHEMA.ORG STRATEGY

**Goal:** Implement structured data for rich results + entity SEO  
**Date:** 2026-09-06

---

## 📊 SCHEMA TYPES (PRIORITIZED)

### Tier 1: Critical (every key page)
1. **Organization** / **EducationalOrganization** — base entity
2. **BreadcrumbList** — every page with hierarchy
3. **WebSite** with SearchAction — homepage

### Tier 2: Page-specific
4. **FAQPage** — only when FAQ visible on page
5. **Course** / **CourseInstance** — chuong-trinh.html
6. **Article** — news/* pages
7. **Person** — teacher bios (ve-chung-toi.html)
8. **Event** — if events added
9. **LocalBusiness** — if applicable

### Tier 3: Future
10. **Review** / **AggregateRating** — only when real reviews exist
11. **ImageObject** — gallery
12. **VideoObject** — if video testimonials added

---

## 📋 SCHEMA TEMPLATES

### 1. Organization (homepage + about)
```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Mầm non Bình Minh",
  "alternateName": "DAWN Kindergarten",
  "url": "https://binhminhkindergarten.site",
  "logo": "https://binhminhkindergarten.site/assets/img/logo.svg",
  "description": "Trường mầm non tư thục tại Vũng Tàu, chương trình Montessori + STEAM cho trẻ 18 tháng - 5 tuổi",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "75/2A Phạm Hồng Thái",
    "addressLocality": "Vũng Tàu",
    "addressRegion": "Bà Rịa - Vũng Tàu",
    "addressCountry": "VN",
    "postalCode": "NEED_VERIFICATION"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "10.346",
    "longitude": "107.084"
  },
  "telephone": "+84-866-685-632",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "07:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.wikidata.org/wiki/Q141329654"
  ]
}
```

⚠️ Remove AggregateRating until real reviews exist.

---

### 2. BreadcrumbList (every page)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Trang chủ", "item": "https://binhminhkindergarten.site/"},
    {"@type": "ListItem", "position": 2, "name": "Về chúng tôi", "item": "https://binhminhkindergarten.site/ve-chung-toi.html"}
  ]
}
```

---

### 3. FAQPage (only when FAQ visible)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Phương pháp Montessori phù hợp với trẻ ở độ tuổi nào?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Phương pháp Montessori phù hợp với trẻ từ 18 tháng đến 6 tuổi..."
      }
    }
  ]
}
```

⚠️ CRITICAL: Only use FAQPage if the FAQs are VISIBLE on the page. Don't add invisible FAQs.

---

### 4. Course (chuong-trinh.html)
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Chương trình Montessori Lớp Lá",
  "description": "Chương trình Montessori cho trẻ 2-3 tuổi",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Mầm non Bình Minh"
  },
  "educationalLevel": "Preschool",
  "inLanguage": "vi"
}
```

---

### 5. Article (news pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "5 lợi ích vàng của phương pháp Montessori",
  "description": "...",
  "author": {
    "@type": "Organization",
    "name": "Mầm non Bình Minh"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Mầm non Bình Minh",
    "logo": {"@type": "ImageObject", "url": "..."}
  },
  "datePublished": "2026-09-06",
  "dateModified": "2026-09-06"
}
```

---

### 6. Person (teacher bios)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Cô Nguyễn Thị Hương",
  "jobTitle": "Giáo viên Montessori",
  "worksFor": {
    "@type": "EducationalOrganization",
    "name": "Mầm non Bình Minh"
  }
}
```

⚠️ Real teacher names NEED_VERIFICATION before publishing.

---

## 📋 SCHEMA IMPLEMENTATION MATRIX

| Page | Organization | Breadcrumb | FAQ | Course | Article | Person |
|------|--------------|------------|-----|--------|---------|--------|
| index.html | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| chuong-trinh.html | ❌ | ✅ | Optional | ✅ | ❌ | ❌ |
| ve-chung-toi.html | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ |
| faq.html | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| moi-truong.html | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| hoat-dong.html | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| hoc-phi.html | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| lien-he.html | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| tin-tuc.html | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| news/* | ❌ | ✅ | Optional | ❌ | ✅ | ❌ |
| gallery.html | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| dang-ky-tham-quan.html | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |

---

## ✅ SCHEMA BEST PRACTICES

1. **JSON-LD format** — preferred by Google
2. **Validate with Schema.org validator** before deploy
3. **Test with Google Rich Results Test**
4. **No fake reviews** — only use real AggregateRating
5. **FAQ only when visible** — never invisible FAQs
6. **Same NAP across all schemas**
7. **Update dateModified** when content changes

---

## 🎯 SCHEMA TASKS

### P0 (Critical)
- [ ] Remove fake AggregateRating from index.html
- [ ] Add BreadcrumbList to all pages
- [ ] Verify Organization schema NAP consistency

### P1 (High)
- [ ] Add Organization schema to chuong-trinh.html
- [ ] Update Person schema with verified names only
- [ ] Add sameAs links to Wikidata

### P2 (Medium)
- [ ] Add FAQPage to chuong-trinh.html (if FAQs added)
- [ ] Add ImageObject to gallery.html
- [ ] Add Event schema if events added

### P3 (Low)
- [ ] AggregateRating (only with real reviews)
- [ ] VideoObject for testimonials
- [ ] JobPosting if hiring

---

## 📋 NEXT STEPS

1. Remove fake review data immediately
2. Add BreadcrumbList to all pages
3. Validate existing schemas
4. Plan FAQ strategy for chuong-trinh.html
