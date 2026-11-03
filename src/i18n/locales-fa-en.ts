import {
  Briefcase as BriefcaseIcon,
  Code2 as Code2Icon,
  Globe as GlobeIcon,
  Rocket as RocketIcon,
  Sparkles as SparklesIcon,
  GraduationCap as GraduationCapIcon,
  MessageSquare as MessageSquareIcon,
  Zap as ZapIcon,
  Users as UsersIcon,
  Cpu as CpuIcon,
  Server as ServerIcon,
  Github as GithubIcon,
  Terminal as TerminalIcon,
  Phone as PhoneIcon,
} from "lucide-react";
import type { Translation } from "./types";

// ---------- Persian (fa) — DEFAULT ----------
export const fa: Translation = {
  meta: {
    htmlLang: "fa",
    title: "ابوالفضل ابراهیمی (Abolfazl Ebrahimi) — توسعه‌دهنده فرانت‌اند",
    description:
      "ابوالفضل ابراهیمی (Abolfazl Ebrahimi) توسعه‌دهنده فرانت‌اند و گیم است؛ سازنده‌ی تجربه‌های وب واکنش‌گرا، تعاملی و پرسرعت با React و Next.js — پنل‌های لوکو، پورتال مشتریان علاءالدین و سایت عشاق الرقیه.",
  },
  personal: {
    name: "ابوالفضل ابراهیمی",
    role: "توسعه‌دهنده فرانت‌اند",
  },
  nav: {
    items: [
      { label: "درباره", href: "#about" },
      { label: "تجربیات", href: "#experience" },
      { label: "نمونه‌کارها", href: "#work" },
      { label: "مهارت‌ها", href: "#skills" },
      { label: "تماس", href: "#contact" },
    ],
  },
  brand: { name: "ابوالفضل ابراهیمی", role: "توسعه‌دهنده فرانت‌اند" },
  getInTouch: "تماس بگیرید",
  openMenu: "باز کردن منو",
  closeMenu: "بستن منو",

  hero: {
    availability: "آماده برای فرصت‌های جدید",
    nameLabel: "ابوالفضل ابراهیمی",
    headline: "ساخت تجربه‌های دیجیتال",
    headlineAccent: "که متفاوت حس می‌شوند.",
    sub: "من یک توسعه‌دهنده فول‌استک هستم که تمرکزم روی فرانت‌اند است؛ تجربه‌های وب واکنش‌گرا، تعاملی و با کارایی بالا را با React و Next.js می‌سازم.",
    ctaPrimary: "نمونه‌کارهای من",
    ctaSecondary: "بیا صحبت کنیم",
    scroll: "اسکرول کنید",
    portraitAlt: "ابوالفضل ابراهیمی — توسعه‌دهنده فرانت‌اند",
    portraitChipRole: "Front-End / Game Developer",
    portraitChipLocation: "البرز، ایران",
  },

  about: {
    eyebrow: "درباره من",
    title: "کمی درباره من",
    description:
      "یک توسعه‌دهنده فول‌استک با تمرکز روی فرانت‌اند که ایده‌ها را به محصولات دیجیتالی کاربردی و جذاب تبدیل می‌کند.",
    intro:
      "من ابوالفضل هستم، یک توسعه‌دهنده فول‌استک که تمرکزم روی فرانت‌اند است و از تبدیل ایده‌ها به محصولات دیجیتالی کاربردی و جذاب لذت می‌برم. با تیم‌های حرفه‌ای کار کرده‌ام تا پلتفرم‌های آموزشی، تجربه‌های مبتنی بر هوش مصنوعی، رابط‌های بلادرنگ و وب‌سایت‌های واکنش‌گرا بسازم.",
    para2:
      "من به جزئیاتی که کاربران حس می‌کنند اما به‌ندرت متوجه می‌شوند اهمیت می‌دهم — سرعت بارگذاری بالا، تعاملات قابل پیش‌بینی، چیدمان‌های واکنش‌گرا که در هر صفحه‌ای کار می‌کنند، و کدی که با رشد محصول قابل نگهداری می‌ماند. تمرکز من ارسال محصولات واقعی در محیط‌های تیمی حرفه‌ای بوده است، جایی که کار باید برای کاربران واقعی و محدودیت‌های واقعی عمل کند.",
    emailCta: "ایمیل بزنید",
    strengths: [
      {
        title: "React و Next.js در سطح Production",
        description:
          "ساخت برنامه‌های واقعی با App Router، SSR و توجه به Budget عملکرد.",
        icon: RocketIcon,
      },
      {
        title: "رابط‌های واکنش‌گرا",
        description:
          "چیدمان‌های Mobile-first با سلسله‌مراتب بصری قوی و تعاملات قابل دسترس.",
        icon: BriefcaseIcon,
      },
      {
        title: "Real-time و Interactive UI",
        description:
          "کار با WebSocket و داده‌های زنده برای ارائه تجربه‌های بلادرنگ جذاب.",
        icon: ZapIcon,
      },
      {
        title: "کار تیمی Cross-functional",
        description:
          "همکاری با طراحان، مهندسان Backend و ذی‌نفعان محصول.",
        icon: UsersIcon,
      },
      {
        title: "قابلیت استفاده و Performance",
        description:
          "بهینه‌سازی Core Web Vitals، SEO و تجربه کلی برای کاربران واقعی.",
        icon: SparklesIcon,
      },
    ],
  },

  experience: {
    eyebrow: "تجربیات",
    title: "مسیر حرفه‌ای",
    description:
      "چهار نقش واقعی در ساخت محصولات وب Production در محیط‌های تیمی حرفه‌ای.",
    locationLabel: "موقعیت",
    jobs: [
      {
        company: "Irangard",
        companyTagline: "پلتفرم سفر مبتنی بر هوش مصنوعی",
        role: "Front-End Developer",
        location: "تهران",
        dates: "تیر ۱۴۰۲ — اسفند ۱۴۰۲",
        dateNote:
          "تاریخ‌های موقت — در رزومه اصلی به بازه ۲۰۲۴–۲۰۲۵ نیز اشاره شده است. لطفاً تأیید کنید.",
        description:
          "کار روی یک پلتفرم سفر مبتنی بر هوش مصنوعی که Itineraryهای شخصی‌سازی‌شده شامل Tourها، هتل‌ها، Budget و جاذبه‌ها را تولید می‌کند.",
        highlights: [
          "مشارکت در یک همراه سفر مبتنی بر هوش مصنوعی که Itineraryهای شخصی‌سازی‌شده برای شهرها تولید می‌کرد.",
          "ساخت رابط‌های Itinerary شامل Tourها، هتل‌ها، Budget و جاذبه‌ها در یک جریان منسجم.",
          "همکاری با تیم Backend و محصول برای ارسال ویژگی‌های واقعی مورد استفاده مسافران.",
        ],
        stack: ["React", "JavaScript", "AI Integration"],
        icon: GlobeIcon,
        logo: "/logos/irangard.jpg",
        photo: "/experience/irangard.jpg",
        photoAlt: "تیم Irangard در غرفه نمایشگاهی",
      },
      {
        company: "Fanavaran Sepehr Fardad",
        companyTagline: "Web Application Studio",
        role: "Front-End Developer",
        location: "تهران",
        dates: "مهر ۱۴۰۴ — بهمن ۱۴۰۴",
        dateNote:
          "در رزومه به نام «فرداد یار» نیز اشاره شده است. فرض نکنید این نام‌ها قابل جایگزینی هستند بدون تأیید.",
        description:
          "توسعه و نگهداری Web Applicationها با React، Next.js و Tailwind CSS. همکاری روی پیاده‌سازی Featureها، بهینه‌سازی UI، Code Review و جلسات تیمی.",
        highlights: [
          "ارسال و نگهداری Web Applicationهای Production با React، Next.js و Tailwind CSS.",
          "همکاری با طراحان و مهندسان Backend روی پیاده‌سازی Featureها و بهینه‌سازی UI.",
          "مشارکت در Code Review، برنامه‌ریزی و مراسم تیمی برای حفظ ریتم تحویل بالا.",
        ],
        stack: ["React", "Next.js", "Tailwind CSS"],
        icon: Code2Icon,
        logo: "/logos/fanavaran.jpg",
      },
      {
        company: "Luko",
        companyTagline: "پلتفرم آموزشی مبتنی بر هوش مصنوعی",
        role: "Front-End Developer",
        secondaryRole: "Game Developer (بعد از ۲ ماه)",
        location: "تهران",
        dates: "دی ۱۴۰۴ — اکنون",
        dateNote: "فقط یک ماه در رزومه ذکر شده؛ به‌عنوان جاری در نظر گرفته شده است.",
        description:
          "ساخت و نگهداری یک پلتفرم آموزشی مبتنی بر Next.js برای دانش‌آموزان ابتدایی، شامل یادگیری شخصی‌سازی‌شده با هوش مصنوعی، Gamification، بازی‌های تعاملی، پادکست‌ها، نمایش‌های انیمیشنی و داشبورد معلمان. بعد از دو ماه فعالیت، رول Game Developer را هم به من دادند و روی ساخت بازی‌های تعاملی وب با Three.js کار می‌کنم.",
        highlights: [
          "ساخت پلتفرم اصلی Next.js که درس‌های Gamifiedشده، پادکست‌ها و نمایش‌های انیمیشنی را برای دانش‌آموزان ابتدایی قدرتمند می‌کرد.",
          "پیاده‌سازی SSR و بهینه‌سازی‌های Performance برای مدیریت به‌روزرسانی‌های همزمان روی ۱۰۰+ Concept یادگیری.",
          "تحویل داشبورد Real-time معلم برای ردیابی پیشرفت دانش‌آموزان در Conceptهای یادگیری فردی.",
          "توسعه بازی‌های تعاملی ۳بعدی و وب با Three.js به‌عنوان Game Developer.",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WebSocket", "Three.js"],
        icon: RocketIcon,
        logo: "/logos/luko.jpg",
        photo: "/experience/luko-1.jpg",
        photoAlt: "تیم Luko در مراسم INOTEX Pitch 2026",
      },
      {
        company: "Alaeddin Intelligent Processing",
        companyTagline: "محصولات Digital Transformation",
        role: "Front-End Developer",
        location: "البرز",
        dates: "مرداد ۱۴۰۵",
        dateNote: "فقط یک ماه در رزومه ذکر شده است.",
        description:
          "ساخت رابط‌های وب مدرن و محصولات دیجیتال با React، Next.js و Tailwind CSS. مشارکت در ابتکارات Digital Transformation و همکاری با تیم‌های Cross-functional برای ارائه راه‌حل‌های با کارایی بالا.",
        highlights: [
          "ساخت رابط‌های وب مدرن و واکنش‌گرا با React، Next.js و Tailwind CSS.",
          "همکاری با تیم‌های Cross-functional در ابتکارات Digital Transformation.",
          "کمک به ارائه راه‌حل‌های با کارایی بالا برای گردش‌های کاری واقعی.",
        ],
        stack: ["React", "Next.js", "Tailwind CSS"],
        icon: SparklesIcon,
        logo: "/logos/alaeddin.jpg",
        photo: "/experience/alaeddin.jpg",
        photoAlt: "نئون لوگوی Alaeddin روی دیوار سبز دفتر کار",
      },
    ],
  },

  projects: {
    eyebrow: "نمونه‌کارها",
    title: "پروژه‌ها و محصولات",
    description:
      "محصولاتی که در تیم‌ها ساختم — پنل‌های لوکو، پورتال مشتریان علاءالدین و سایت عشاق الرقیه. همه در سمت فرانت‌اند.",
    seeMoreOnGithub: "موارد بیشتر در GitHub",
    visitAria: (title: string) => `مشاهده ${title}`,
    androidLabel: "اندروید",
    webLabel: "مشاهده سایت",
    showMore: "نمایش پروژه‌های بیشتر",
    noPublicLink: "لینک عمومی ندارد",
    items: [
      {
        title: "پنل دانش‌آموز لوکو",
        company: "لوکو",
        tagline: "پنل دانش‌آموز و داشبورد معلم",
        description:
          "پنل دانش‌آموزان ابتدایی و معلمان؛ درس‌های گیمیشده، پادکست و داشبورد لحظه‌ای معلم.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        url: "https://my.luko.ir",
        urlLabel: "my.luko.ir",
        androidLinks: [
          { label: "بازار", url: "https://cafebazaar.ir/app/my.luko.ir" },
          { label: "مایکت", url: "https://myket.ir/app/my.luko.ir" },
        ],
        badge: "نسخه جدید در راه است",
        accent: "lime",
        icon: GraduationCapIcon,
      },
      {
        title: "پنل والدین لوکو",
        company: "لوکو",
        tagline: "پورتال والدین",
        description:
          "پیگیری پیشرفت تحصیلی فرزند، گزارش فعالیت‌ها و ارتباط مستقیم با معلم.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        url: "https://panel.luko.ir",
        urlLabel: "panel.luko.ir",
        androidLinks: [
          { label: "اپ اندروید", note: "در حال ساخت" },
        ],
        accent: "violet",
        icon: UsersIcon,
      },
      {
        title: "لوکو بتا",
        company: "لوکو",
        tagline: "نسخه آزمایشی محصول",
        description:
          "نسخه بتای پلتفرم لوکو برای تست ویژگی‌های جدید با کاربران واقعی.",
        stack: ["Next.js", "React", "TypeScript"],
        url: "https://beta.luko.ir",
        urlLabel: "beta.luko.ir",
        androidLinks: [
          { label: "اپ اندروید", note: "در حال ساخت" },
        ],
        badge: "بتا",
        accent: "lime",
        icon: RocketIcon,
      },
      {
        title: "لندینگ لوکو",
        company: "لوکو",
        tagline: "سایت معرفی محصول",
        description:
          "صفحه معرفی محصول با فرم جذب لید و دموی تعاملی، بهینه‌شده برای سئو.",
        stack: ["Next.js", "Tailwind CSS", "SEO"],
        url: "https://luko.ir",
        urlLabel: "luko.ir",
        accent: "violet",
        icon: GlobeIcon,
      },
      {
        title: "چت خصوصی تیم لوکو",
        company: "لوکو",
        tagline: "ابزار داخلی تیم",
        description:
          "پیام‌رسان داخلی تیم؛ فقط سمت فرانت‌اند و بدون لینک عمومی.",
        stack: ["React", "TypeScript", "WebSocket"],
        badge: "داخلی",
        accent: "lime",
        icon: MessageSquareIcon,
      },
      {
        title: "پورتال مشتریان علاءالدین",
        company: "علاءالدین",
        tagline: "پورتال مشتریان",
        description:
          "پورتال اختصاصی مشتریان برای پیگیری سرویس‌ها و درخواست‌ها؛ بدون لینک عمومی.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        accent: "violet",
        icon: BriefcaseIcon,
      },
      {
        title: "عشاق الرقیه ۳۱۵",
        company: "پروژه شخصی",
        tagline: "سایت مذهبی",
        description:
          "سایت مذهبی با تقویم مناسبتی و محتوا؛ فرانت‌اند کامل.",
        stack: ["React", "Tailwind CSS"],
        url: "https://oshagh315.ir",
        urlLabel: "oshagh315.ir",
        accent: "lime",
        icon: SparklesIcon,
      },
    ],
  },

  skills: {
    eyebrow: "مهارت‌ها",
    title: "Toolbox و طرز فکر",
    description:
      "فناوری‌هایی روزانه به آن‌ها تکیه می‌کنم، به‌همراه ابزارها، تحصیلات و زبان‌ها.",
    frontendTitle: "Frontend Development",
    frontendTag: "اصلی",
    toolsTitle: "Tools & Technologies",
    toolsTag: "استک‌های دیگر",
    softTitle: "Soft Skills",
    educationTitle: "تحصیلات",
    languagesTitle: "زبان‌ها",
    languagesNote: "سطح",
    frontendItems: [
      { name: "HTML5", icon: Code2Icon },
      { name: "CSS", icon: Code2Icon },
      { name: "JavaScript", icon: Code2Icon },
      { name: "TypeScript", icon: Code2Icon },
      { name: "React", icon: Code2Icon },
      { name: "Next.js", icon: Code2Icon },
      { name: "Bootstrap", icon: Code2Icon },
      { name: "Tailwind CSS", icon: Code2Icon },
    ],
    toolItems: [
      { name: "Git", icon: GithubIcon },
      { name: "GitHub", icon: GithubIcon },
      { name: "Node.js", icon: ServerIcon },
      { name: "ASP.NET MVC", icon: CpuIcon },
      { name: "Docker", icon: TerminalIcon },
      { name: "Android Development", icon: PhoneIcon },
    ],
    softItems: [
      {
        title: "مالکیت و پاسخگویی",
        description:
          "پذیرش مسئولیت کامل ویژگی‌ها — از شروع تا تولید — و پیگیری کارهایی که تحویل می‌دهم.",
        icon: ZapIcon,
      },
      {
        title: "همکاری میان‌رشته‌ای",
        description:
          "کار نزدیک با طراحان، مهندسان بک‌اند و مدیران محصول برای هماهنگی دامنه و تحویل مشترک.",
        icon: UsersIcon,
      },
      {
        title: "ارتباط مؤثر",
        description:
          "تبدیل مبادلات فنی به زبان واضح، و تبدیل نیازمندی‌های مبهم به گام‌های بعدی مشخص.",
        icon: MessageSquareIcon,
      },
      {
        title: "حل مسئله و تفکر تحلیلی",
        description:
          "تجزیه مسائل پیچیده، جداسازی ریشه‌ها و تحویل راه‌حل‌های عملی که در طول زمان پایدار می‌مانند.",
        icon: CpuIcon,
      },
      {
        title: "توجه به جزئیات",
        description:
          "مراقبت از چیزهای کوچک — تراز پیکسلی، موارد حاشیه‌ای، حالت‌های بارگذاری و دسترس‌پذیری.",
        icon: SparklesIcon,
      },
      {
        title: "سازگاری و یادگیری مستمر",
        description:
          "راحتی در یادگیری سریع ابزارها و فریم‌ورک‌های جدید و تطبیق با اولویت‌های محصول در حال تغییر.",
        icon: RocketIcon,
      },
    ],
    educationItems: [
      {
        qualification: "دیپلم دبیرستان",
        field: "تولید محتوای رایانه‌ای",
        institution: "توحید",
        duration: "مهر ۱۴۰۲ — تیر ۱۴۰۴",
        icon: GraduationCapIcon,
      },
    ],
    languageItems: [
      { name: "انگلیسی", level: "پایه", note: "در حال تقویت" },
      { name: "ایتالیایی", level: "پایه", note: "در حال تقویت" },
      { name: "آذربایجانی", level: "زبان مادری", note: "زبان مادری" },
    ],
  },

  contact: {
    eyebrow: "تماس",
    title: "بیا چیزی بسازیم",
    titleAccent: "که متفاوت حس شود.",
    description:
      "من برای نقش‌های فرانت‌اند، پروژه‌های فریلنس و همکاری‌ها آماده‌ام. اگر ایده‌ای برای ساخت دارید، خوشحال می‌شوم بشنوم.",
    ctaPrimary: "ایمیل بزنید",
    ctaSecondary: "در لینکدین متصل شوید",
    ctaTelegram: "تلگرام",
    ctaInstagram: "اینستاگرام",
    labels: {
      email: "ایمیل",
      phone: "تلفن",
      github: "گیت‌هاب",
      location: "موقعیت",
      telegram: "تلگرام",
      instagram: "اینستاگرام",
    },
    copy: "کپی",
    copied: "کپی شد",
  },

  footer: {
    tagline:
      "ابوالفضل ابراهیمی — توسعه‌دهنده فرانت‌اند و گیم. ساخت تجربه‌های دیجیتال متفاوت با React، Next.js و TypeScript.",
    navigation: "بخش‌ها",
    connect: "ارتباط",
    backToTop: "بازگشت به بالا",
    ariaEmail: "ایمیل",
    ariaGithub: "GitHub",
    ariaLinkedin: "LinkedIn",
    ariaBackToTop: "بازگشت به بالا",
  },
};

// ---------- English (en) ----------
export const en: Translation = {
  meta: {
    htmlLang: "en",
    title: "Abolfazl Ebrahimi (ابوالفضل ابراهیمی) — Front-End Developer",
    description:
      "Abolfazl Ebrahimi is a Front-End / Game Developer crafting responsive, interactive and high-performance web experiences with React and Next.js — Luko panels, the Alaeddin customer portal and Oshagh 315.",
  },
  personal: {
    name: "Abolfazl Ebrahimi",
    role: "Front-End Developer",
  },
  nav: {
    items: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Work", href: "#work" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
  },
  brand: { name: "Abolfazl Ebrahimi", role: "Front-End Developer" },
  getInTouch: "Get in touch",
  openMenu: "Open menu",
  closeMenu: "Close menu",

  hero: {
    availability: "Available for new opportunities",
    nameLabel: "Abolfazl Ebrahimi",
    headline: "Building Digital Experiences",
    headlineAccent: "That Feel Different.",
    sub: "I'm a full-stack developer with a focus on front-end — crafting responsive, interactive, and high-performance web experiences with React and Next.js.",
    ctaPrimary: "Explore My Work",
    ctaSecondary: "Let's Talk",
    scroll: "Scroll",
    portraitAlt: "Abolfazl Ebrahimi — Front-End Developer",
    portraitChipRole: "Front-End / Game Developer",
    portraitChipLocation: "Alborz, Iran",
  },

  about: {
    eyebrow: "About",
    title: "A Little About Me",
    description:
      "A full-stack developer with a front-end focus who turns ideas into functional, engaging digital products.",
    intro:
      "I'm Abolfazl, a full-stack developer with a focus on front-end, and I enjoy turning ideas into functional, engaging digital products. I've worked with professional teams to develop educational platforms, AI-powered experiences, real-time interfaces, and responsive websites.",
    para2:
      "I care about details that users feel but rarely notice — fast load times, predictable interactions, responsive layouts that hold up on every screen, and code that stays maintainable as the product grows. My focus has been shipping real products in professional team environments, where the work has to perform under real users and real constraints.",
    emailCta: "Email me",
    strengths: [
      {
        title: "Production-grade React & Next.js",
        description:
          "Building real-world applications with App Router, SSR, and performance budgets in mind.",
        icon: RocketIcon,
      },
      {
        title: "Responsive Interfaces",
        description:
          "Mobile-first layouts with strong visual hierarchy and accessible interactions.",
        icon: BriefcaseIcon,
      },
      {
        title: "Real-time & Interactive UI",
        description:
          "Working with WebSockets and live data to deliver engaging real-time experiences.",
        icon: ZapIcon,
      },
      {
        title: "Cross-functional Teamwork",
        description:
          "Collaborating with designers, backend engineers, and product stakeholders.",
        icon: UsersIcon,
      },
      {
        title: "Usability & Performance",
        description:
          "Optimizing Core Web Vitals, SEO, and overall experience for real users.",
        icon: SparklesIcon,
      },
    ],
  },

  experience: {
    eyebrow: "Experience",
    title: "Professional Timeline",
    description:
      "Four real-world roles building production web products in professional team environments.",
    locationLabel: "Location",
    jobs: [
      {
        company: "Irangard",
        companyTagline: "AI-based travel platform",
        role: "Front-End Developer",
        location: "Tehran",
        dates: "Jul 2023 — Mar 2024",
        dateNote:
          "Provisional dates — the original resume also references a 2024–2025 window for this role. Please confirm.",
        description:
          "Worked on an AI-based travel platform that personalizes itineraries, including tours, hotels, budgets, and attractions.",
        highlights: [
          "Contributed to an AI-driven travel companion that generated personalized itineraries across cities.",
          "Built itinerary UI surfaces covering tours, hotels, budgets, and attractions in a single cohesive flow.",
          "Collaborated with backend and product teammates to ship real-world features used by travelers.",
        ],
        stack: ["React", "JavaScript", "AI Integration"],
        icon: GlobeIcon,
        logo: "/logos/irangard.jpg",
        photo: "/experience/irangard.jpg",
        photoAlt: "Irangard team at exhibition booth",
      },
      {
        company: "Fanavaran Sepehr Fardad",
        companyTagline: "Web application studio",
        role: "Front-End Developer",
        location: "Tehran",
        dates: "Oct 2025 — Feb 2026",
        dateNote:
          "Resume also mentions the name \u201CFardad Yar.\u201D Do not assume these names are interchangeable without confirmation.",
        description:
          "Developed and maintained web applications with React, Next.js, and Tailwind CSS. Collaborated on feature implementation, UI optimization, code reviews, and team meetings.",
        highlights: [
          "Shipped and maintained production web applications with React, Next.js, and Tailwind CSS.",
          "Partnered with designers and backend engineers on feature implementation and UI optimization.",
          "Participated in code reviews, planning, and team rituals to keep delivery cadence high.",
        ],
        stack: ["React", "Next.js", "Tailwind CSS"],
        icon: Code2Icon,
        logo: "/logos/fanavaran.jpg",
      },
      {
        company: "Luko",
        companyTagline: "AI-powered educational platform",
        role: "Front-End Developer",
        secondaryRole: "Game Developer (after 2 months)",
        location: "Tehran",
        dates: "Jan 2026 — Present",
        dateNote: "Single month supplied on resume; treated as ongoing.",
        description:
          "Built and maintained a Next.js-based educational platform for elementary school students, featuring AI-powered personalized learning, gamification, interactive games, podcasts, animated shows, and teacher dashboards. After two months, they also gave me the Game Developer role — I build interactive web games with Three.js using the same front-end toolset.",
        highlights: [
          "Built the core Next.js platform powering gamified lessons, podcasts, and animated shows for elementary students.",
          "Implemented SSR and performance optimizations handling concurrent updates across 100+ learning concepts.",
          "Delivered a real-time teacher dashboard for tracking student progress across individual learning concepts.",
          "Developed interactive 3D and web games with Three.js as a Game Developer.",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WebSocket", "Three.js"],
        icon: RocketIcon,
        logo: "/logos/luko.jpg",
        photo: "/experience/luko-1.jpg",
        photoAlt: "Luko team at INOTEX Pitch 2026 ceremony",
      },
      {
        company: "Alaeddin Intelligent Processing",
        companyTagline: "Digital transformation products",
        role: "Front-End Developer",
        location: "Alborz",
        dates: "Aug 2026",
        dateNote: "Single month supplied on resume.",
        description:
          "Built modern web interfaces and digital products using React, Next.js, and Tailwind CSS. Participated in digital transformation initiatives and collaborated with cross-functional teams to deliver high-performance solutions.",
        highlights: [
          "Built modern, responsive web interfaces using React, Next.js, and Tailwind CSS.",
          "Partnered with cross-functional teams on digital transformation initiatives.",
          "Helped deliver high-performance solutions for real business workflows.",
        ],
        stack: ["React", "Next.js", "Tailwind CSS"],
        icon: SparklesIcon,
        logo: "/logos/alaeddin.jpg",
        photo: "/experience/alaeddin.jpg",
        photoAlt: "Alaeddin neon logo on green wall at office",
      },
    ],
  },

  projects: {
    eyebrow: "Work",
    title: "Projects & Products",
    description:
      "Products I've built inside teams — the Luko panels, the Alaeddin customer portal and Oshagh 315. All front-end.",
    seeMoreOnGithub: "See more on GitHub",
    visitAria: (title: string) => `Visit ${title}`,
    androidLabel: "Android",
    webLabel: "Visit website",
    showMore: "Show more projects",
    noPublicLink: "No public link",
    items: [
      {
        title: "Luko Student Panel",
        company: "Luko",
        tagline: "Student portal & teacher dashboard",
        description:
          "Student and teacher panel for elementary school — gamified lessons, podcasts and a real-time dashboard.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        url: "https://my.luko.ir",
        urlLabel: "my.luko.ir",
        androidLinks: [
          { label: "Bazaar", url: "https://cafebazaar.ir/app/my.luko.ir" },
          { label: "Myket", url: "https://myket.ir/app/my.luko.ir" },
        ],
        badge: "New version coming",
        accent: "lime",
        icon: GraduationCapIcon,
      },
      {
        title: "Luko Parents Panel",
        company: "Luko",
        tagline: "Parent portal",
        description:
          "Follow your child's progress, activity reports and talk to teachers directly.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        url: "https://panel.luko.ir",
        urlLabel: "panel.luko.ir",
        androidLinks: [
          { label: "Android app", note: "In progress" },
        ],
        accent: "violet",
        icon: UsersIcon,
      },
      {
        title: "Luko Beta",
        company: "Luko",
        tagline: "Product beta",
        description:
          "Beta release of the Luko platform for testing new features with real users.",
        stack: ["Next.js", "React", "TypeScript"],
        url: "https://beta.luko.ir",
        urlLabel: "beta.luko.ir",
        androidLinks: [
          { label: "Android app", note: "In progress" },
        ],
        badge: "Beta",
        accent: "lime",
        icon: RocketIcon,
      },
      {
        title: "Luko Landing",
        company: "Luko",
        tagline: "Marketing site",
        description:
          "Responsive product landing page with lead forms and an interactive demo, SEO optimized.",
        stack: ["Next.js", "Tailwind CSS", "SEO"],
        url: "https://luko.ir",
        urlLabel: "luko.ir",
        accent: "violet",
        icon: GlobeIcon,
      },
      {
        title: "Luko Team Chat",
        company: "Luko",
        tagline: "Internal team tool",
        description:
          "Internal team messenger — front-end only, no public link.",
        stack: ["React", "TypeScript", "WebSocket"],
        badge: "Internal",
        accent: "lime",
        icon: MessageSquareIcon,
      },
      {
        title: "Alaeddin Customer Portal",
        company: "Alaeddin",
        tagline: "Customer portal",
        description:
          "Customer portal for service and request tracking — no public link.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        accent: "violet",
        icon: BriefcaseIcon,
      },
      {
        title: "Oshagh 315",
        company: "Personal project",
        tagline: "Religious website",
        description:
          "Full Persian religious website with an events calendar and content — complete front-end.",
        stack: ["React", "Tailwind CSS"],
        url: "https://oshagh315.ir",
        urlLabel: "oshagh315.ir",
        accent: "lime",
        icon: SparklesIcon,
      },
    ],
  },

  skills: {
    eyebrow: "Skills",
    title: "Toolbox & Mindset",
    description:
      "The technologies I reach for daily, along with my tools, education and languages.",
    frontendTitle: "Frontend Development",
    frontendTag: "Core",
    toolsTitle: "Tools & Technologies",
    toolsTag: "Other stacks",
    softTitle: "Soft Skills",
    educationTitle: "Education",
    languagesTitle: "Languages",
    languagesNote: "Level",
    frontendItems: [
      { name: "HTML5", icon: Code2Icon },
      { name: "CSS", icon: Code2Icon },
      { name: "JavaScript", icon: Code2Icon },
      { name: "TypeScript", icon: Code2Icon },
      { name: "React", icon: Code2Icon },
      { name: "Next.js", icon: Code2Icon },
      { name: "Bootstrap", icon: Code2Icon },
      { name: "Tailwind CSS", icon: Code2Icon },
    ],
    toolItems: [
      { name: "Git", icon: GithubIcon },
      { name: "GitHub", icon: GithubIcon },
      { name: "Node.js", icon: ServerIcon },
      { name: "ASP.NET MVC", icon: CpuIcon },
      { name: "Docker", icon: TerminalIcon },
      { name: "Android Development", icon: PhoneIcon },
    ],
    softItems: [
      {
        title: "Ownership & Accountability",
        description:
          "Take end-to-end responsibility for features — from kickoff to production — and follow through on what I ship.",
        icon: ZapIcon,
      },
      {
        title: "Cross-functional Collaboration",
        description:
          "Work closely with designers, backend engineers, and product managers to align on scope and ship together.",
        icon: UsersIcon,
      },
      {
        title: "Effective Communication",
        description:
          "Translate technical trade-offs into clear language, and turn ambiguous requirements into concrete next steps.",
        icon: MessageSquareIcon,
      },
      {
        title: "Problem-Solving & Analytical Thinking",
        description:
          "Break down complex problems, isolate root causes, and ship pragmatic fixes that hold up over time.",
        icon: CpuIcon,
      },
      {
        title: "Attention to Detail",
        description:
          "Care about the small things — pixel alignment, edge cases, loading states, and accessibility.",
        icon: SparklesIcon,
      },
      {
        title: "Adaptability & Continuous Learning",
        description:
          "Comfortable picking up new tools and frameworks quickly, and adjusting to changing product priorities.",
        icon: RocketIcon,
      },
    ],
    educationItems: [
      {
        qualification: "High School Diploma",
        field: "Computer Content Production",
        institution: "Tohid",
        duration: "Oct 2023 — Jul 2025",
        icon: GraduationCapIcon,
      },
    ],
    languageItems: [
      { name: "English", level: "Basic", note: "Improving" },
      { name: "Italian", level: "Basic", note: "Improving" },
      { name: "Azerbaijani", level: "Native", note: "Mother tongue" },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's build something",
    titleAccent: "that feels different.",
    description:
      "I'm open to front-end roles, freelance projects, and collaborations. If you have an idea worth building, I'd love to hear about it.",
    ctaPrimary: "Send an email",
    ctaSecondary: "Connect on LinkedIn",
    ctaTelegram: "Telegram",
    ctaInstagram: "Instagram",
    labels: {
      email: "Email",
      phone: "Phone",
      github: "GitHub",
      location: "Location",
      telegram: "Telegram",
      instagram: "Instagram",
    },
    copy: "Copy",
    copied: "Copied",
  },

  footer: {
    tagline:
      "Abolfazl Ebrahimi — Front-End & Game Developer. Building digital experiences that feel different with React, Next.js and TypeScript.",
    navigation: "Navigation",
    connect: "Connect",
    backToTop: "Back to top",
    ariaEmail: "Email",
    ariaGithub: "GitHub",
    ariaLinkedin: "LinkedIn",
    ariaBackToTop: "Back to top",
  },
};
