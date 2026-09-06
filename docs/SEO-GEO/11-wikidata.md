# PHASE 9: WIKIDATA PLAN — Q141329654

**Entity:** Mầm non Bình Minh  
**Q-ID:** Q141329654  
**Status:** Item exists, 0 statements (only label + description + aliases)  
**Date:** 2026-09-06

---

## 📊 CURRENT STATE

### What's on Q141329654 NOW
- ✅ Label (EN): "Binh Minh Kindergarten"
- ✅ Description (EN): "Kindergarten in Vung Tau, Vietnam"
- ✅ Aliases: "Dawn Kindergarten", "Mầm non Bình Minh"
- ❌ Statements: 0
- ❌ References: 0
- ❌ Sitelinks: 0
- ❌ Vietnamese label: missing
- ❌ Vietnamese description: missing

---

## 🎯 VERIFIED STATEMENTS (5)

These have been audited and have first-party evidence on binhminhkindergarten.site:

| # | Property | Value | Source/Evidence | Confidence |
|---|----------|-------|-----------------|------------|
| 1 | P31 (instance of) | Q17198953 (kindergarten) | index.html Organization schema type="Preschool" | ✅ 100% |
| 2 | P17 (country) | Q881 (Vietnam) | index.html addressCountry="VN" | ✅ 100% |
| 3 | P6375 (street address) | "75/2A Phạm Hồng Thái, phường 7, TP. Vũng Tàu" | All pages footer + lien-he.html + ve-chung-toi.html | ✅ 100% |
| 4 | P856 (official website) | "https://binhminhkindergarten.site" | index.html schema url | ✅ 100% |
| 5 | P1329 (phone) | "+84-866-685-632" | index.html schema telephone | ✅ 100% |

---

## 🚫 REJECTED STATEMENTS (with reasons)

These were considered but rejected due to lack of verified first-party data:

| Property | Reason for rejection |
|----------|----------------------|
| ~~P131 (admin entity)~~ | Q36626 vs Q37795 — need to verify correct entity ID for Vũng Tàu city vs Bà Rịa-Vũng Tàu province |
| ~~P625 (coordinates)~~ | 10.346/107.084 — needs GPS verification (not from em) |
| ~~P571 (inception)~~ | "2019" in TL;DR — not verified by Dung |
| ~~P912 (educational program)~~ | P912 not appropriate for this context (per audit) |
| ~~P452 (industry)~~ | Not needed for entity |
| ~~P2196 (students)~~ | "100+" — not verified |
| ~~P1128 (employees)~~ | "10+" — not verified |
| ~~P1037 (director)~~ | No real name in sources |
| ~~AggregateRating~~ | Currently fake (4.8/24) — needs real reviews first |

---

## 📋 BATCH QUICKSTATEMENTS (READY TO RUN)

```quickstatements
# Q141329654 - Mầm non Bình Minh
# All 5 statements have verified first-party sources
# Run via https://quickstatements.toolforge.org/

Q141329654	P31	Q17198953	S854	"https://binhminhkindergarten.site"	S813	+2026-09-06T00:00:00Z/11
Q141329654	P17	Q881	S854	"https://binhminhkindergarten.site"	S813	+2026-09-06T00:00:00Z/11
Q141329654	P6375	"75/2A Phạm Hồng Thái, phường 7, TP. Vũng Tàu"	S854	"https://binhminhkindergarten.site/lien-he.html"	S813	+2026-09-06T00:00:00Z/11
Q141329654	P856	"https://binhminhkindergarten.site"	S854	"https://binhminhkindergarten.site"	S813	+2026-09-06T00:00:00Z/11
Q141329654	P1329	"+84-866-685-632"	S854	"https://binhminhkindergarten.site"	S813	+2026-09-06T00:00:00Z/11
```

---

## 🔐 HOW TO RUN

### Requirements
- Wikidata account (auto-confirmed)
- Login to QuickStatements

### Auto-confirmation requirements
- Account age > 4 days
- OR > 50 edits
- OR in auto-confirmed group

### If NOT auto-confirmed
- Edit via Web UI instead: https://www.wikidata.org/wiki/Q141329654
- Click "edit" → add statements manually

### Steps
1. Go to https://quickstatements.toolforge.org/
2. Login with Wikidata account
3. Paste batch above into Commands box
4. Click "Run"
5. Verify at https://www.wikidata.org/wiki/Q141329654

---

## 📋 ADDITIONAL TASKS (after batch)

### Add Vietnamese label
- Click "Add label" → Language: Tiếng Việt (vi)
- Value: "Mầm non Bình Minh"

### Add Vietnamese description
- Click "Add description" → Language: Tiếng Việt (vi)
- Value: "Trường mầm non tư thục tại TP. Vũng Tàu, Việt Nam"

### Add Sitelinks (optional)
- Link to Wikipedia article if created
- Currently: 0 sitelinks (no Wikipedia article yet)

---

## ⚠️ WARNINGS

1. **Don't add unverified data** — Will be removed by Wikidata admins
2. **Don't add fake reviews/stats** — Violates Wikidata policies
3. **Don't claim GPS without verification** — Will be challenged
4. **Don't claim founding year without evidence** — Will be challenged
5. **References required** — S854 (stated in) and S813 (retrieved) recommended

---

## 🔄 FUTURE STATEMENTS (after verification)

Once Dung verifies these, they can be added:

### When founding year is verified
```
P571 | +2019-00-00T00:00:00Z/11
```

### When GPS is verified
```
P625 | 10.346/107.084
```

### When director/principal is known
```
P1075 | [name]
```

### When real reviews exist
```
P2196 | 100 (with P585 = 2026)
P1128 | 10 (with P585 = 2026)
```

### When social profiles exist
```
P2002 | @binhminhkindergarten (Twitter)
P2013 | +84-866-685-632 (Facebook)
P2397 | YouTube channel
```

---

## 📋 NEXT STEPS

1. Run batch (5 statements) — Dung's task
2. Add Vietnamese label + description
3. Monitor for 1-2 weeks
4. Verify statements accepted (no reversions)
5. Plan future additions

---

## 📊 MONITORING

### Weekly check
- Visit https://www.wikidata.org/wiki/Q141329654
- Verify statements not reverted
- Note any edit wars or challenges

### Monthly check
- Google Knowledge Panel for "Mầm non Bình Minh"
- Check if Wikidata info shows up in Google

### Quarterly check
- Full statement audit
- Add new verified data
- Update outdated statements
