#!/usr/bin/env node
// Sinh các trang phụ: privacy-policy, terms, 404 — dùng chung layout tối giản
const fs = require('fs');
const path = require('path');

const HEAD = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>__TITLE__</title>
<meta name="description" content="__DESC__">
<link rel="icon" type="image/svg+xml" href="assets/img/logo.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="assets/css/responsive.css">
<link rel="stylesheet" href="assets/css/animations.css">
</head>
<body>
<header class="header">
  <div class="header__inner container">
    <a class="brand" href="index.html">
      <img class="brand__logo" src="assets/img/logo.svg" alt="Logo Mầm non Bình Minh">
      <span>
        <span class="brand__name">DAWN Kindergarten</span><br>
        <span class="brand__tag">Mầm non Bình Minh</span>
      </span>
    </a>
    <nav class="nav" aria-label="Chính">
      <ul class="nav__list">
        <li><a class="nav__link" href="index.html">Trang chủ</a></li>
        <li><a class="nav__link" href="ve-chung-toi.html">Về chúng tôi</a></li>
        <li><a class="nav__link" href="chuong-trinh.html">Chương trình</a></li>
        <li><a class="nav__link" href="moi-truong.html">Môi trường</a></li>
        <li><a class="nav__link" href="hoc-phi.html">Học phí</a></li>
        <li><a class="nav__link" href="tuyen-sinh.html">Tuyển sinh</a></li>
        <li><a class="nav__link" href="lien-he.html">Liên hệ</a></li>
      </ul>
    </nav>
    <a class="btn btn--primary btn--sm header__cta" href="dang-ky-tham-quan.html">ĐĂNG KÝ THAM QUAN</a>
    <button class="burger" aria-label="Mở menu" aria-expanded="false">
      <span class="burger__line"></span><span class="burger__line"></span><span class="burger__line"></span>
    </button>
  </div>
</header>
<div class="drawer" role="dialog" aria-modal="true" aria-label="Menu">
  <div class="drawer__panel">
    <button class="drawer__close" aria-label="Đóng menu">✕</button>
    <nav aria-label="Di động">
      <ul class="drawer__list">
        <li class="drawer__item"><a class="drawer__link" href="index.html">Trang chủ</a></li>
        <li class="drawer__item"><a class="drawer__link" href="ve-chung-toi.html">Về chúng tôi</a></li>
        <li class="drawer__item"><a class="drawer__link" href="chuong-trinh.html">Chương trình học</a></li>
        <li class="drawer__item"><a class="drawer__link" href="moi-truong.html">Môi trường</a></li>
        <li class="drawer__item"><a class="drawer__link" href="hoat-dong.html">Hoạt động</a></li>
        <li class="drawer__item"><a class="drawer__link" href="dinh-duong.html">Dinh dưỡng</a></li>
        <li class="drawer__item"><a class="drawer__link" href="hoc-phi.html">Học phí</a></li>
        <li class="drawer__item"><a class="drawer__link" href="tuyen-sinh.html">Tuyển sinh</a></li>
        <li class="drawer__item"><a class="drawer__link" href="gallery.html">Thư viện ảnh</a></li>
        <li class="drawer__item"><a class="drawer__link" href="tin-tuc.html">Tin tức</a></li>
        <li class="drawer__item"><a class="drawer__link" href="faq.html">Câu hỏi thường gặp</a></li>
        <li class="drawer__item"><a class="drawer__link" href="lien-he.html">Liên hệ</a></li>
      </ul>
    </nav>
    <div style="margin-top:24px;">
      <a class="btn btn--primary btn--block" href="dang-ky-tham-quan.html">ĐĂNG KÝ THAM QUAN</a>
    </div>
  </div>
</div>
<main>`;

const FOOT = `</main>
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div>
        <h4 class="footer__title">🌅 DAWN Kindergarten</h4>
        <p class="footer__text">Mầm non Bình Minh — nơi mỗi ngày đến trường là một ngày hạnh phúc.</p>
      </div>
      <div>
        <h4 class="footer__title">Khám phá</h4>
        <ul class="footer__list">
          <li class="footer__item"><a class="footer__link" href="ve-chung-toi.html">Về chúng tôi</a></li>
          <li class="footer__item"><a class="footer__link" href="chuong-trinh.html">Chương trình học</a></li>
          <li class="footer__item"><a class="footer__link" href="tin-tuc.html">Tin tức</a></li>
        </ul>
      </div>
      <div>
        <h4 class="footer__title">Tuyển sinh</h4>
        <ul class="footer__list">
          <li class="footer__item"><a class="footer__link" href="hoc-phi.html">Học phí</a></li>
          <li class="footer__item"><a class="footer__link" href="dang-ky-tham-quan.html">Đăng ký tham quan</a></li>
          <li class="footer__item"><a class="footer__link" href="faq.html">Câu hỏi thường gặp</a></li>
        </ul>
      </div>
      <div>
        <h4 class="footer__title">Liên hệ</h4>
        <p class="footer__text">📍 [ĐỊA CHỈ]<br>📞 <a class="footer__link" href="tel:[HOTLINE]">[HOTLINE]</a><br>✉️ <a class="footer__link" href="mailto:[EMAIL]">[EMAIL]</a></p>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© <span data-year>2026</span> DAWN Kindergarten · Mầm non Bình Minh</span>
      <span><a class="footer__link" href="privacy-policy.html">Chính sách bảo mật</a> · <a class="footer__link" href="terms.html">Điều khoản</a></span>
    </div>
  </div>
</footer>
<script src="assets/js/main.js"></script>
</body>
</html>`;

const PAGE_STYLE = `<style>
  .legal { max-width: 820px; margin-inline: auto; padding: var(--sp-8) var(--sp-4); }
  .legal h1 { margin-bottom: var(--sp-3); }
  .legal h2 { font-size: 1.4rem; margin-top: var(--sp-6); margin-bottom: var(--sp-3); }
  .legal p, .legal li { color: var(--text-soft); }
  .legal .updated { color: var(--text-faint); font-size: var(--fs-sm); margin-bottom: var(--sp-6); }
</style>`;

function buildPage(file, title, desc, body) {
  const html = HEAD.replace('__TITLE__', title).replace('__DESC__', desc)
    + PAGE_STYLE + body + FOOT;
  fs.writeFileSync(path.join(__dirname, file), html);
  console.log('✅', file, html.length, 'bytes');
}

// ---- PRIVACY POLICY ----
buildPage('privacy-policy.html',
  'Chính sách bảo mật — Mầm non Bình Minh · DAWN Kindergarten',
  'Chính sách bảo mật thông tin của Mầm non Bình Minh (DAWN Kindergarten) — cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của quý phụ huynh.',
  `<section class="legal">
    <nav aria-label="Breadcrumb"><ol class="crumb" style="margin-bottom:var(--sp-4);"><li><a href="index.html">Trang chủ</a></li><li>Chính sách bảo mật</li></ol></nav>
    <h1>Chính sách bảo mật</h1>
    <p class="updated">Cập nhật lần cuối: [Ngày] · [Nội dung mẫu — sẽ được nhà trường rà soát và cập nhật]</p>

    <h2>1. Mục đích thu thập thông tin</h2>
    <p>Chúng tôi thu thập thông tin quý phụ huynh cung cấp qua các form (đăng ký tham quan, liên hệ, nhận bảng giá) với mục đích duy nhất: tư vấn tuyển sinh, hỗ trợ đăng ký và liên hệ phản hồi. Chúng tôi không thu thập thông tin nào ngoài mục đích nêu trên.</p>

    <h2>2. Phạm vi sử dụng thông tin</h2>
    <p>Thông tin được sử dụng để: (a) liên hệ tư vấn theo yêu cầu của phụ huynh; (b) gửi thông tin về chương trình, sự kiện của trường nếu phụ huynh đồng ý; (c) cải thiện chất lượng dịch vụ. Chúng tôi <b>không bán, không chia sẻ</b> thông tin cho bên thứ ba vì mục đích thương mại.</p>

    <h2>3. Thời gian lưu trữ</h2>
    <p>Thông tin được lưu trữ trong thời gian cần thiết cho mục đích tuyển sinh và chăm sóc, tối đa [X] năm kể từ lần liên hệ cuối, sau đó được xóa hoặc ẩn danh.</p>

    <h2>4. Quyền của phụ huynh</h2>
    <p>Phụ huynh có quyền yêu cầu xem, sửa hoặc xóa thông tin cá nhân bất kỳ lúc nào bằng cách liên hệ qua hotline [HOTLINE] hoặc email [EMAIL].</p>

    <h2>5. Bảo mật thông tin</h2>
    <p>Chúng tôi áp dụng các biện pháp kỹ thuật và quản lý hợp lý để bảo vệ thông tin khỏi truy cập trái phép, thất lạc hoặc lạm dụng.</p>

    <h2>6. Liên hệ</h2>
    <p>Mọi thắc mắc về chính sách bảo mật, vui lòng liên hệ: 📞 [HOTLINE] · ✉️ [EMAIL] · 📍 [ĐỊA CHỈ].</p>
  </section>`);

// ---- TERMS ----
buildPage('terms.html',
  'Điều khoản sử dụng — Mầm non Bình Minh · DAWN Kindergarten',
  'Điều khoản sử dụng website Mầm non Bình Minh (DAWN Kindergarten) — quy định về việc truy cập và sử dụng nội dung trên website.',
  `<section class="legal">
    <nav aria-label="Breadcrumb"><ol class="crumb" style="margin-bottom:var(--sp-4);"><li><a href="index.html">Trang chủ</a></li><li>Điều khoản sử dụng</li></ol></nav>
    <h1>Điều khoản sử dụng</h1>
    <p class="updated">Cập nhật lần cuối: [Ngày] · [Nội dung mẫu — sẽ được nhà trường rà soát và cập nhật]</p>

    <h2>1. Chấp nhận điều khoản</h2>
    <p>Bằng việc truy cập website này, quý khách đồng ý tuân thủ các điều khoản sử dụng dưới đây.</p>

    <h2>2. Nội dung website</h2>
    <p>Toàn bộ nội dung trên website (văn bản, hình ảnh, logo) thuộc quyền sở hữu của Mầm non Bình Minh (DAWN Kindergarten), trừ các hình ảnh minh họa được cấp phép. Không được sao chép, tái xuất bản khi chưa được cho phép bằng văn bản.</p>

    <h2>3. Thông tin tuyển sinh &amp; học phí</h2>
    <p>Thông tin trên website mang tính tham khảo. Bảng học phí và chính sách tuyển sinh chính thức do nhà trường ban hành — vui lòng liên hệ trực tiếp để được xác nhận. Nhà trường không thu bất kỳ khoản phí nào qua website.</p>

    <h2>4. Giới hạn trách nhiệm</h2>
    <p>Nhà trường nỗ lực đảm bảo thông tin chính xác nhưng không chịu trách nhiệm cho các thiệt hại phát sinh từ việc sử dụng thông tin trên website.</p>

    <h2>5. Thay đổi điều khoản</h2>
    <p>Nhà trường có thể cập nhật điều khoản này theo định kỳ. Phiên bản mới nhất luôn được đăng tải tại trang này.</p>

    <h2>6. Liên hệ</h2>
    <p>Mọi thắc mắc về điều khoản sử dụng, vui lòng liên hệ: 📞 [HOTLINE] · ✉️ [EMAIL].</p>
  </section>`);

// ---- 404 ----
const head404 = HEAD.replace('__TITLE__', 'Không tìm thấy trang — Mầm non Bình Minh')
  .replace('__DESC__', 'Trang bạn tìm kiếm không tồn tại hoặc đã được di chuyển. Quay về trang chủ Mầm non Bình Minh.');
const html404 = head404 + PAGE_STYLE + `<section class="legal" style="text-align:center;padding-block:var(--sp-11);">
    <div style="font-size:80px;margin-bottom:var(--sp-4);">🌅</div>
    <h1>404 — Không tìm thấy trang</h1>
    <p style="max-width:480px;margin:0 auto var(--sp-5);">Trang bạn đang tìm không tồn tại hoặc đã được di chuyển. Đừng lo — con vẫn đang chờ bạn khám phá ngôi trường của chúng tôi!</p>
    <div class="hero__actions" style="justify-content:center;">
      <a class="btn btn--primary" href="index.html">VỀ TRANG CHỦ</a>
      <a class="btn btn--outline" href="dang-ky-tham-quan.html">ĐĂNG KÝ THAM QUAN</a>
    </div>
  </section>` + FOOT;
fs.writeFileSync(path.join(__dirname, '404.html'), html404);
console.log('✅ 404.html', html404.length, 'bytes');

// ---- ROBOTS.TXT ----
fs.writeFileSync(path.join(__dirname, 'robots.txt'), `User-agent: *
Allow: /
Sitemap: https://dawn-kindergarten.vercel.app/sitemap.xml
`);
console.log('✅ robots.txt');

// ---- SITEMAP.XML ----
const base = 'https://dawn-kindergarten.vercel.app';
const pages = ['index.html','ve-chung-toi.html','chuong-trinh.html','moi-truong.html','hoat-dong.html','dinh-duong.html','hoc-phi.html','tuyen-sinh.html','gallery.html','tin-tuc.html','lien-he.html','faq.html','dang-ky-tham-quan.html','privacy-policy.html','terms.html'];
const urls = pages.map(p => `  <url><loc>${base}/${p}</loc></url>`).join('\n');
const news = ['bai-viet-mam-non-binh-minh-khai-giang-nam-hoc-2026.html','bai-viet-7-ky-nang-tu-lap-cho-tre-mam-non.html','bai-viet-vi-sao-phuong-phap-montessori-duoc-yeu-thich.html'];
const newsUrls = news.map(p => `  <url><loc>${base}/news/${p}</loc></url>`).join('\n');
fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
${newsUrls}
</urlset>
`);
console.log('✅ sitemap.xml');
