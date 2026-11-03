# Abolfazl Ebrahimi — Portfolio (React + Vite)

پورتفولیوی حرفه‌ای Abolfazl Ebrahimi — Front-End / Game Developer

> این پروژه از **Next.js (App Router)** به **React 19 + Vite + TypeScript** تبدیل شده است.
> تمام بخش‌ها، انیمیشن‌ها، چندزبانه‌بودن (۵ زبان) و طراحی بدون تغییر حفظ شده‌اند.

---

## 🚀 نصب و راه‌اندازی

### پیش‌نیازها
- Node.js 20.19+ (یا 22+)
- npm (یا pnpm / yarn)

### اجرا

```bash
# 1. نصب وابستگی‌ها
npm install

# 2. اجرای dev server  (http://localhost:3000)
npm run dev
```

### Build برای Production

```bash
npm run build     # خروجی در پوشه dist/
npm run preview   # پیش‌نمایش build روی پورت 3000
```

خروجی `dist/` یک سایت کاملاً استاتیک است و روی هر هاستی (Vercel, Netlify, GitHub Pages, Caddy, Nginx, …) قابل انتشار است.

### دیگر اسکریپت‌ها

```bash
npm run typecheck   # بررسی تایپ‌ها با tsc --noEmit
npm run lint        # ESLint (flat config)
```

---

## 📂 ساختار پروژه

```
index.html                 # HTML shell: متاتگ‌های SEO، OG/Twitter، فاوآیکون
vite.config.ts             # پلاگین‌های React + Tailwind v4، alias «@»، پورت 3000
src/
├── main.tsx               # نقطه ورود: فونت‌ها، CSS، I18nProvider، Toaster
├── App.tsx                # ترکیب همه‌ی بخش‌ها (جایگزین app/page.tsx)
├── index.css              # توکن‌های تم + قواعد فونت RTL/LTR (جایگزین app/globals.css)
├── components/
│   ├── ui/                # کامپوننت‌های shadcn/ui (بدون تغییر)
│   ├── link.tsx           # جایگزین next/link  → <a> ساده
│   ├── image.tsx          # جایگزین next/image → <img> با همان API (fill/sizes/priority)
│   └── portfolio/         # بخش‌های سایت
│       ├── navbar.tsx
│       ├── hero.tsx
│       ├── about.tsx
│       ├── experience.tsx
│       ├── projects.tsx
│       ├── skills.tsx
│       ├── contact.tsx
│       ├── footer.tsx
│       ├── brand-avatar.tsx
│       ├── smart-image.tsx
│       ├── language-switcher.tsx
│       ├── parallax.tsx
│       ├── reveal.tsx
│       └── section-heading.tsx
├── i18n/
│   ├── types.ts            # قرارداد ترجمه + متادیتای زبان‌ها
│   ├── locales-fa-en.ts    # فارسی + انگلیسی
│   ├── locales-az-it-ar.ts # آذربایجانی + ایتالیایی + عربی
│   ├── i18n-provider.tsx   # Context + ذخیره در localStorage
│   └── index.ts
├── hooks/
└── lib/utils.ts            # cn()

public/
├── portrait.jpg            # عکس Hero + Contact + Avatar
├── logos/                  # لوگوی شرکت‌ها (1:1)
├── experience/             # عکس‌های واقعی تجربه‌ها
├── favicon-32/192.png      # فاوآیکون دایره‌ای از عکس پرتره
├── apple-touch-icon.png    # آیکون iOS
├── site.webmanifest        # نام و آیکون اپ
├── sitemap.xml
└── robots.txt
```

---

## 🔁 چه چیزهایی از Next.js حذف/جایگزین شد؟

| Next.js | معادل در React + Vite |
| --- | --- |
| `app/layout.tsx` + `metadata` | `index.html` (تایتل، description، OG، Twitter) |
| `next/font/google` | فونت‌های self-host شده با `@fontsource` (بدون وابستگی به CDN) |
| `next/link` | `src/components/link.tsx` → `<a href>` |
| `next/image` | `src/components/image.tsx` → `<img>` با همان پراپ‌ها (`fill`, `sizes`, `priority`) |
| `app/api/route.ts` | حذف شد (اپ کاملاً استاتیک است) |
| Prisma + `lib/db.ts` | حذف شد (در UI استفاده نمی‌شد) |
| `next.config.ts`, `postcss.config.mjs`, `tailwind.config.ts` | `vite.config.ts` + Tailwind v4 (CSS-first) |
| دایرکتیو `"use client"` | از همه‌ی فایل‌ها پاک شد (در React لازم نیست) |

> **نکته:** آدرس‌دهی همچنان تک‌صفحه‌ای و با لینک‌های لنگر (`#home`, `#about`, …) است،
> پس روتر (react-router) نیازی نبود. برای اضافه‌کردن صفحه‌ی جدید کافی است
> `react-router-dom` را نصب و `App.tsx` را با `<Routes>` جایگزین کنید.

---

## 🌐 زبان‌های پشتیبانی‌شده

پیش‌فرض: **فارسی (fa)** — RTL

سوییچ بین ۵ زبان از دکمه‌ی 🌐 در نوار بالا:
1. فارسی (fa) — RTL
2. English (en) — LTR
3. Azərbaycan (az) — LTR
4. Italiano (it) — LTR
5. العربية (ar) — RTL

انتخاب کاربر در `localStorage` ذخیره می‌شود و در اولین رندر بعد از reload اعمال می‌شود
(بدون فلش زبان پیش‌فرض).

---

## 🎨 تکنولوژی‌ها

- **React 19**
- **Vite 6**
- **TypeScript 5** (strict)
- **Tailwind CSS 4** + shadcn/ui
- **Framer Motion** (انیمیشن + پارالاکس)
- **Lucide React** (آیکون‌ها)
- **فونت‌ها** (self-hosted با `@fontsource`):
  - RTL: Vazirmatn (body) + Lalezar (display)
  - LTR: Geist (body) + Space Grotesk (display) + Geist Mono (code)

---

## ✨ ویژگی‌ها

- ✅ ۵ زبان با RTL/LTR خودکار + فونت‌های اختصاصی
- ✅ پارالاکس اسکرول (لایه پس‌زمینه + محتوا با سرعت‌های متفاوت)
- ✅ Skeleton loader برای همه‌ی عکس‌ها
- ✅ ریسپانسیو کامل (موبایل اول)
- ✅ دسترس‌پذیری (ARIA labels، semantic HTML، keyboard nav)
- ✅ SEO (متاتگ‌ها در `index.html`، OpenGraph، Twitter cards، `sitemap.xml`، `robots.txt`)
- ✅ داده ساختاریافته JSON-LD نوع Person تا نام «ابوالفضل ابراهیمی / Abolfazl Ebrahimi» در گوگل ثبت شود
- ✅ فاوآیکون و آیکون اپle از عکس پرتره (دایره‌ای) به‌جای لوگوی قبلی
- ✅ Brand avatar دایره‌ای با عکس پرتره
- ✅ ۴ شرکت با لوگو + عکس واقعی
- ✅ حذف بخش Soft Skills
- ✅ ۷ پروژه در یک لیست واحد (لوکو، علاءالدین، عشاق الرقیه) با نمایش ۳ تایی و دکمه‌ی «پروژه‌های بیشتر»
- ✅ لینک‌های دکمه‌ای بزرگ برای هر پروژه + وضعیت اپ‌های اندروید (بازار/مایکت/در حال ساخت)
- ✅ تایم‌لاین تجربه‌ها در موبایل به شکل نقشه‌راه عمودی با عکس‌های بزرگ‌تر
- ✅ تماس‌ها در فوتر + دکمه‌ی تماس/ایمیل در بخش contact

---

## 📞 اطلاعات تماس (در فایل)

- Email: abolfazlebrahimi.next@gmail.com
- Telegram: @abolfazlebrahimi_next
- Instagram: @abolfazlebrahimi_next
- GitHub: github.com/abolfazlebrahimi-next
- LinkedIn: in/abolfazl-ebrahimi

---

ساخته‌شده با ❤️ توسط Abolfazl Ebrahimi
