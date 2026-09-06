# 📚 HƯỚNG DẪN TẠO WIKIDATA ENTRY CHO MẦM NON BÌNH MINH

**Mục đích:** Tăng E-E-A-T và khả năng AI Search trích dẫn.

---

## 📋 THÔNG TIN CẦN THIẾT

Dưới đây là dữ liệu đã chuẩn bị sẵn để submit lên Wikidata.

### **Entity Info (Q-Item):**

| Field | Value |
|-------|-------|
| **Label (vi)** | Mầm non Bình Minh |
| **Label (en)** | Binh Minh Kindergarten |
| **Description (vi)** | Trường mầm non tư thục tại Vũng Tàu, Việt Nam |
| **Description (en)** | Private kindergarten in Vung Tau, Vietnam |
| **Alias (vi)** | DAWN Kindergarten, Trường Mầm non Bình Minh |
| **Alias (en)** | DAWN Kindergarten Vung Tau |

### **Statements (Thuộc tính):**

| Property | Value | Property ID |
|----------|-------|-------------|
| **instance of** | kindergarten | P31 → Q17198953 |
| **country** | Vietnam | P17 → Q881 |
| **located in** | Vũng Tàu | P276 → Q37795 |
| **street address** | 75/2A Phạm Hồng Thái, phường 7 | P6375 |
| **coordinate location** | 10.346, 107.084 | P625 |
| **founding date** | 2019 | P571 |
| **official website** | https://binhminhkindergarten.site | P856 |
| **phone number** | +84 866 685 632 | P1329 |
| **email** | (cần thêm) | P968 |
| **number of students** | 100+ | P2196 |
| **number of employees** | 10+ | P1128 |
| **director/manager** | Cô Nguyễn Thị Hương | P1037 |
| **educational program** | Montessori | P912 → Q606825 |
| **educational program** | STEAM education | P912 → Q22908427 |

---

## 🚀 CÁCH TẠO WIKIDATA ENTRY

### **Cách 1: Dùng Wikidata Web Interface (Khuyên dùng)**

1. Truy cập: https://www.wikidata.org/wiki/Special:NewItem

2. **Điền Label (vi):** `Mầm non Bình Minh`

3. **Điền Description (vi):** `Trường mầm non tư thục tại Vũng Tàu, Việt Nam`

4. **Thêm Aliases:**
   - DAWN Kindergarten
   - Trường Mầm non Bình Minh

5. **Thêm Statements (theo bảng trên):**
   - Click "add statement"
   - Chọn property → nhập value

6. **Submit** và đợi review

### **Cách 2: Dùng QuickStatements (Nâng cao)**

1. Tạo account Wikidata
2. Truy cập: https://quickstatements.toolforge.org/
3. Dán commands sau:

```
CREATE
LAST	Len	"Mầm non Bình Minh"
LAST	Den	"Trường mầm non tư thục tại Vũng Tàu, Việt Nam"
LAST	Tal	"DAWN Kindergarten"
LAST	P31	Q17198953
LAST	P17	Q881
LAST	P276	Q37795
LAST	P6375	"75/2A Phạm Hồng Thái, phường 7, TP. Vũng Tàu"
LAST	P625	10.346/107.084
LAST	P571	+2019
LAST	P856	"https://binhminhkindergarten.site"
LAST	P1329	"+84-866-685-632"
LAST	P1037	"Cô Nguyễn Thị Hương"
```

---

## ✅ CHECKLIST SAU KHI TẠO

- [ ] Item đã được tạo thành công
- [ ] Có ít nhất 5 statements
- [ ] Có reference (nguồn) cho mỗi statement
- [ ] Description bằng cả tiếng Việt và tiếng Anh
- [ ] Aliases đầy đủ
- [ ] Coordinate location chính xác

---

## 🔗 LIÊN KẾT VỚI WIKIPEDIA (Optional)

Nếu muốn tạo Wikipedia article (yêu cầu notability):

1. Đợi 1-2 tuần sau khi tạo Wikidata entry
2. Tạo draft trên Wikipedia Vietnamese: https://vi.wikipedia.org/wiki/Trường_Mầm_non_Bình_Minh
3. Cần có nguồn tham khảo (báo chí, sự kiện công khai, v.v.)

---

## 📊 TÁC ĐỘNG

Sau khi có Wikidata entry:
- ✅ Google Knowledge Graph có thể hiển thị info box
- ✅ AI Search (Perplexity, ChatGPT) dễ trích dẫn
- ✅ Tăng E-E-A-T cho SEO
- ✅ Xuất hiện trong structured data panels

---

## 💡 TIPS

- **Đợi 1-2 tuần** sau khi tạo để Google/Bing index
- **Cập nhật thường xuyên** khi có thông tin mới
- **Thêm references** từ nguồn uy tín (báo chí, website chính thức)
- **Monitor** trên https://www.wikidata.org/wiki/Special:RecentChanges

---

**Created by Douceur (AI Assistant)**
**Last updated:** 2026-09-06
