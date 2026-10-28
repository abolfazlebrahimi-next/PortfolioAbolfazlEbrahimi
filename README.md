# Abolfazl Ebrahimi — Portfolio Frontend

پورتفولیوی حرفه‌ای Abolfazl Ebrahimi — Front-End / Game Developer

## 🚀 نصب و راه‌اندازی

### پیش‌نیازها
- Node.js 18+ یا Bun
- npm / bun / pnpm

### اجرا

```bash
# 1. نصب وابستگی‌ها
bun install
# یا
npm install

# 2. اجرای dev server
bun run dev
# یا
npm run dev

# 3. باز کردن در مرورگر
# http://localhost:3000
```

### Build برای Production

```bash
bun run build
bun run start
```

## 📂 ساختار پروژه

```
src/
├── app/
│   ├── layout.tsx          # Root layout + fonts + I18nProvider
│   ├── page.tsx            # Home page (composition of all sections)
│   └── globals.css         # Theme tokens + RTL/LTR font rules
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── portfolio/          # Portfolio sections
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
│   ├── types.ts            # Translation contract + locale metadata
│   ├── locales-fa-en.ts    # Persian + English translations
│   ├── locales-az-it-ar.ts # Azerbaijani + Italian + Arabic translations
│   ├── i18n-provider.tsx   # React Context i18n + localStorage persistence
│   └── index.ts
├── hooks/
└── lib/
    └── utils.ts            # cn() helper

public/
├── portrait.jpg            # Hero + Contact + Avatar photo
├── logos/                  # Company logos (1:1)
│   ├── luko.jpg
│   ├── irangard.jpg
│   ├── fanavaran.jpg
│   └── alaeddin.jpg
├── experience/             # Real experience photos
│   ├── irangard.jpg
│   ├── luko-1.jpg
│   ├── luko-2.jpg
│   └── alaeddin.jpg
└── logo.svg                # Favicon
```

## 🌐 زبان‌های پشتیبانی‌شده

پیش‌فرض: **فارسی (fa)** — RTL

سوییچ بین ۵ زبان از دکمه‌ی 🌐 در نوار بالا:
1. فارسی (fa) — RTL
2. English (en) — LTR
3. Azərbaycan (az) — LTR
4. Italiano (it) — LTR
5. العربية (ar) — RTL

انتخاب کاربر در localStorage ذخیره می‌شه و بعد از reload حفظ می‌شه.

## 🎨 تکنولوژی‌ها

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5** (strict)
- **Tailwind CSS 4** + shadcn/ui
- **Framer Motion** (انیمیشن + پارالاکس)
- **Lucide React** (آیکون‌ها)
- **فونت‌ها**:
  - RTL: Vazirmatn (body) + Lalezar (display — پرانرژی)
  - LTR: Geist Sans (body) + Space Grotesk (display)

## ✨ ویژگی‌ها

- ✅ ۵ زبه با RTL/LTR خودکار + فونت‌های اختصاصی
- ✅ پارالاکس اسکرول (لایه پس‌زمینه + محتوا با سرعت‌های متفاوت)
- ✅ Skeleton loader برای همه‌ی عکس‌ها
- ✅ ریسپانسیو کامل (موبایل اول)
- ✅ دسترس‌پذیری (ARIA labels، semantic HTML، keyboard nav)
- ✅ SEO (metadata، OpenGraph، Twitter cards)
- ✅ Brand avatar دایره‌ای با عکس پرتره
- ✅ ۴ شرکت با لوگو + عکس واقعی
- ✅ ۳ پروژه‌ی Luko با لینک‌های اندروید (CafeBazaar + Myket)
- ✅ تماس‌ها در فوتر + دکمه‌ی تماس/ایمیل در بخش contact

## 📞 اطلاعات تماس (در فایل)

- Email: abolfazlebrahimi.next@gmail.com
- Telegram: @abolfazlebrahimi_next
- Instagram: @abolfazlebrahimi_next
- GitHub: github.com/abolfazlebrahimi-next
- LinkedIn: in/abolfazl-ebrahimi

---

ساخته‌شده با ❤️ توسط Abolfazl Ebrahimi
