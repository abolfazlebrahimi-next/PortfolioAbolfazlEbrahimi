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
    title: "ابوالفضل ابراهیمی — توسعه‌دهنده فرانت‌اند",
    description:
      "ابوالفضل ابراهیمی، توسعه‌دهنده فرانت‌اند که تجربه‌های وب واکنش‌گرا، تعاملی و با کارایی بالا را با React و Next.js می‌سازد.",
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
    title: "پروژه‌های Luko",
    description:
      "سه محصول اصلی که در Luko روی آن‌ها کار کرده‌ام — از Landing Page تا پنل‌های دانش‌آموز و والدین با نسخه‌ی اندروید.",
    seeMoreOnGithub: "موارد بیشتر در GitHub",
    visitAria: (title: string) => `مشاهده ${title}`,
    androidLabel: "اندروید",
    webLabel: "وب",
    items: [
      {
        title: "Luko Student Panel",
        company: "Luko",
        tagline: "Student Portal & Teacher Dashboard",
        description:
          "پلتفرم اصلی Next.js برای دانش‌آموزان ابتدایی و معلمان — شامل درس‌های Gamifiedشده، پادکست‌ها، نمایش‌های انیمیشنی و داشبورد Real-time معلم. در حال حاضر در حال آماده‌سازی نسخه‌ی جدید این پنل هستیم.",
        highlights: [
          "ساخت درس‌های Gamifiedشده، پادکست‌ها و نمایش‌های انیمیشنی برای دانش‌آموزان ابتدایی.",
          "توسعه داشبورد Real-time معلم برای ردیابی پیشرفت روی ۱۰۰+ Concept یادگیری.",
          "پیاده‌سازی SSR و بهینه‌سازی‌های Performance برای به‌روزرسانی‌های همزمان.",
          "آماده‌سازی نسخه‌ی جدید پنل با معماری بهبودیافته و تجربه کاربری جدید.",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SSR"],
        url: "https://my.luko.ir",
        urlLabel: "my.luko.ir",
        androidLinks: [
          { label: "CafeBazaar", url: "https://cafebazaar.ir/app/my.luko.ir" },
          { label: "Myket", url: "https://myket.ir/app/my.luko.ir" },
        ],
        badge: "در حال آماده‌سازی نسخه جدید",
        accent: "lime",
        icon: GraduationCapIcon,
        size: "large",
      },
      {
        title: "Luko Parents Panel",
        company: "Luko",
        tagline: "Parent Portal",
        description:
          "پنل والدین برای پلتفرم آموزشی Luko — به والدین اجازه می‌دهد پیشرفت تحصیلی فرزندانشان را دنبال کنند، گزارش‌ها را ببینند و با معلمان در ارتباط باشند.",
        highlights: [
          "ساخت پنل اختصاصی والدین با ردیابی پیشرفت فرزندان.",
          "نمایش گزارش‌های Real-time فعالیت و Conceptهای یادگیری.",
          "ارتباط مستقیم والدین با معلمان از طریق پنل.",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        url: "https://panel.luko.ir",
        urlLabel: "panel.luko.ir",
        accent: "violet",
        icon: UsersIcon,
        size: "regular",
      },
      {
        title: "Luko Landing Page",
        company: "Luko",
        tagline: "Marketing Site & SEO",
        description:
          "طراحی و توسعه‌ی Landing Page واکنش‌گرا با Formهای Lead Capture و یک Demo تعاملی محصول، بهینه‌شده برای On-page SEO و ساخته‌شده با Static Generation در Next.js و Tailwind CSS.",
        highlights: [
          "Landing Page واکنش‌گرا با Formهای Lead Capture و Demo تعاملی محصول.",
          "بهینه‌سازی On-page SEO برای کشف ارگانیک.",
          "بهبود Performance با Static Generation در Next.js و Tailwind CSS.",
        ],
        stack: ["Next.js", "Tailwind CSS", "SEO"],
        url: "https://luko.ir",
        urlLabel: "luko.ir",
        accent: "lime",
        icon: GlobeIcon,
        size: "regular",
      },
    ],
  },

  skills: {
    eyebrow: "مهارت‌ها",
    title: "Toolbox و طرز فکر",
    description:
      "فناوری‌هایی که روزانه به آن‌ها تکیه می‌کنم، به‌علاوه مهارت‌های انسانی که من را به یک همکار قوی تبدیل می‌کند.",
    frontendTitle: "Frontend Development",
    frontendTag: "اصلی",
    toolsTitle: "Tools & Technologies",
    toolsTag: "استک‌های دیگر",
    softTitle: "Soft Skills",
    educationTitle: "تحصیلات",
    languagesTitle: "زبان‌ها",
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
      { name: "انگلیسی", level: "حرفه‌ای", note: "تسلط کاری" },
      { name: "ایتالیایی", level: "مکالمه‌ای", note: "تسلط کاری" },
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
    ctaTelegram: "تماس",
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
      "ساخت تجربه‌های دیجیتال متفاوت. ساخته‌شده با React، Next.js، TypeScript و Tailwind CSS.",
    navigation: "بخش‌ها",
    connect: "ارتباط",
    copyright: "تمام حقوق محفوظ است.",
    builtWith: "ساخته‌شده با Next.js · Tailwind CSS · Framer Motion",
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
    title: "Abolfazl Ebrahimi — Front-End Developer",
    description:
      "Abolfazl Ebrahimi is a Front-End Developer crafting responsive, interactive, and high-performance web experiences with React and Next.js.",
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
    title: "Luko Projects",
    description:
      "Three main products I've worked on at Luko — from the landing page to student and parent panels with an Android version.",
    seeMoreOnGithub: "See more on GitHub",
    visitAria: (title: string) => `Visit ${title}`,
    androidLabel: "Android",
    webLabel: "Web",
    items: [
      {
        title: "Luko Student Panel",
        company: "Luko",
        tagline: "Student Portal & Teacher Dashboard",
        description:
          "The core Next.js platform for elementary school students and teachers — featuring gamified lessons, podcasts, animated shows, and a real-time teacher dashboard. We're currently preparing a new version of this panel.",
        highlights: [
          "Built gamified lessons, podcasts, and animated shows for elementary school students.",
          "Developed a real-time teacher dashboard tracking student progress across 100+ learning concepts.",
          "Implemented SSR and performance optimizations for concurrent updates.",
          "Preparing a new version of the panel with improved architecture and UX.",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SSR"],
        url: "https://my.luko.ir",
        urlLabel: "my.luko.ir",
        androidLinks: [
          { label: "CafeBazaar", url: "https://cafebazaar.ir/app/my.luko.ir" },
          { label: "Myket", url: "https://myket.ir/app/my.luko.ir" },
        ],
        badge: "New version in progress",
        accent: "lime",
        icon: GraduationCapIcon,
        size: "large",
      },
      {
        title: "Luko Parents Panel",
        company: "Luko",
        tagline: "Parent Portal",
        description:
          "The parent portal for the Luko educational platform — lets parents track their children's academic progress, view reports, and communicate with teachers.",
        highlights: [
          "Built a dedicated parent panel with children progress tracking.",
          "Real-time activity reports and learning concepts visualization.",
          "Direct communication between parents and teachers via the panel.",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        url: "https://panel.luko.ir",
        urlLabel: "panel.luko.ir",
        accent: "violet",
        icon: UsersIcon,
        size: "regular",
      },
      {
        title: "Luko Landing Page",
        company: "Luko",
        tagline: "Marketing Site & SEO",
        description:
          "Designed and developed a responsive landing page with lead capture forms and an interactive product demo, optimized for on-page SEO and built with Next.js Static Generation and Tailwind CSS.",
        highlights: [
          "Responsive landing page with lead capture forms and an interactive product demo.",
          "Optimized on-page SEO for organic discoverability.",
          "Improved performance using Next.js Static Generation and Tailwind CSS.",
        ],
        stack: ["Next.js", "Tailwind CSS", "SEO"],
        url: "https://luko.ir",
        urlLabel: "luko.ir",
        accent: "lime",
        icon: GlobeIcon,
        size: "regular",
      },
    ],
  },

  skills: {
    eyebrow: "Skills",
    title: "Toolbox & Mindset",
    description:
      "The technologies I reach for daily, plus the human skills that make me a strong teammate.",
    frontendTitle: "Frontend Development",
    frontendTag: "Core",
    toolsTitle: "Tools & Technologies",
    toolsTag: "Other stacks",
    softTitle: "Soft Skills",
    educationTitle: "Education",
    languagesTitle: "Languages",
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
      { name: "English", level: "Professional", note: "Working proficiency" },
      { name: "Italian", level: "Conversational", note: "Working proficiency" },
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
    ctaTelegram: "Contact",
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
      "Building digital experiences that feel different. Crafted with React, Next.js, TypeScript & Tailwind CSS.",
    navigation: "Navigation",
    connect: "Connect",
    copyright: "All rights reserved.",
    builtWith: "Built with Next.js · Tailwind CSS · Framer Motion",
    backToTop: "Back to top",
    ariaEmail: "Email",
    ariaGithub: "GitHub",
    ariaLinkedin: "LinkedIn",
    ariaBackToTop: "Back to top",
  },
};
