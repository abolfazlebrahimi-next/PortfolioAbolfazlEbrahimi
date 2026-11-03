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

// ---------- Azerbaijani (az) ----------
export const az: Translation = {
  meta: {
    htmlLang: "az",
    title: "Abolfazl Ebrahimi — Front-End Developer",
    description:
      "Abolfazl Ebrahimi, React və Next.js ilə cavab verən, interaktiv və yüksək performanslı veb təcrübələri yaradan Front-End Developerdir.",
  },
  personal: {
    name: "Abolfazl Ebrahimi",
    role: "Front-End Developer",
  },
  nav: {
    items: [
      { label: "Haqqında", href: "#about" },
      { label: "Təcrübə", href: "#experience" },
      { label: "İşlər", href: "#work" },
      { label: "Bacarıqlar", href: "#skills" },
      { label: "Əlaqə", href: "#contact" },
    ],
  },
  brand: { name: "Abolfazl Ebrahimi", role: "Front-End Developer" },
  getInTouch: "Əlaqə saxla",
  openMenu: "Menyunu aç",
  closeMenu: "Menyunu bağla",

  hero: {
    availability: "Yeni imkanlar üçün açıq",
    nameLabel: "Abolfazl Ebrahimi",
    headline: "Fərqli hiss olunan",
    headlineAccent: "rəqəmsal təcrübələr qururam.",
    sub: "Mən front-enda fokuslanmış full-stack developerəm — React və Next.js ilə cavab verən, interaktiv və yüksək performanslı veb təcrübələri yaradıram.",
    ctaPrimary: "İşlərimi kəşf et",
    ctaSecondary: "Danışaq",
    scroll: "Sürüşdür",
    portraitAlt: "Abolfazl Ebrahimi — Front-End Developer",
    portraitChipRole: "Front-End / Game Developer",
    portraitChipLocation: "Alborz, İran",
  },

  about: {
    eyebrow: "Haqqında",
    title: "Mənim haqqımda bir az",
    description:
      "Fikirləri funksional və cəzbedici rəqəmsal məhsullara çevirən, front-enda fokuslanmış full-stack developer.",
    intro:
      "Mən Abolfazl, fikirləri funksional və cəzbedici rəqəmsal məhsullara çevirməkdən zövq alan, front-enda fokuslanmış full-stack developerəm. Peşəkar komandalarla işləyərək təhsil platformaları, AI təcrübələri, real-vaxt interfeysləri və cavab verən veb saytlar inkişaf etdirmişəm.",
    para2:
      "İstifadəçilərin hiss etdiyi lakin nadirən diqqət etdiyi detallara qayğı göstərirəm — sürətli yüklənmə, proqnozlaşdırılan interaksiyalar, hər ekranda işləyən cavab verən layoutlar və məhsul böyüdükcə qorunub saxlanılan kod. Fokusum peşəkar komanda mühitlərində real məhsulları təhvil vermək olub — işin real istifadəçilər və real məhdudiyyətlər altında işləməli olduğu yerlərdə.",
    emailCta: "Email göndər",
    strengths: [
      {
        title: "Produksiya səviyyəsində React və Next.js",
        description:
          "App Router, SSR və performans büdcələrini nəzərə alaraq real tətbiqlərin qurulması.",
        icon: RocketIcon,
      },
      {
        title: "Cavab verən interfeyslər",
        description:
          "Güclü vizual iyerarxiya və əlçatan interaksiyalarla mobil-üstün layoutlar.",
        icon: BriefcaseIcon,
      },
      {
        title: "Real-vaxt və interaktiv UI",
        description:
          "WebSocket və canlı data ilə cəzbedici real-vaxt təcrübələrinin çatdırılması.",
        icon: ZapIcon,
      },
      {
        title: "Funksiyalararası komanda işi",
        description:
          "Dizaynerlər, backend mühəndisləri və məhsul stakeholderləri ilə əməkdaşlıq.",
        icon: UsersIcon,
      },
      {
        title: "İstifadə qabiliyyəti və performans",
        description:
          "Real istifadəçilər üçün Core Web Vitals, SEO və ümumi təcrübənin optimallaşdırılması.",
        icon: SparklesIcon,
      },
    ],
  },

  experience: {
    eyebrow: "Təcrübə",
    title: "Peşəkar xronologiya",
    description:
      "Peşəkar komanda mühitlərində istehsal veb məhsulları quran dörd real rol.",
    locationLabel: "Yer",
    jobs: [
      {
        company: "Irangard",
        companyTagline: "AI əsaslı səyahət platforması",
        role: "Front-End Developer",
        location: "Tehran",
        dates: "İyul 2023 — Mart 2024",
        dateNote:
          "Müvəqqəti tarixlər — orijinal rezyumedə bu rol üçün 2024–2025 dövrünə də istinad var. Təsdiqləyin.",
        description:
          "Turlar, otellər, büdcə və attraksionları da əhatə edən fərdiləşdirilmiş səyahət marşrutları yaradan AI əsaslı səyahət platforması üzərində işlədim.",
        highlights: [
          "Şəhərlər üzrə fərdiləşdirilmiş marşrutlar yaradan AI əsaslı səyahət yoldaşına töhfə verdim.",
          "Turlar, otellər, büdcə və attraksionları əhatə edən marşrut UI səthlərini vahid axında qurdum.",
          "Backend və məhsul komanda yoldaşları ilə səyyahların istifadə etdiyi real funksiyaları təhdim etdim.",
        ],
        stack: ["React", "JavaScript", "AI Integration"],
        icon: GlobeIcon,
        logo: "/logos/irangard.jpg",
        photo: "/experience/irangard.jpg",
        photoAlt: "Irangard komandası sərgi stendində",
      },
      {
        company: "Fanavaran Sepehr Fardad",
        companyTagline: "Web Application Studio",
        role: "Front-End Developer",
        location: "Tehran",
        dates: "Oktyabr 2025 — Fevral 2026",
        dateNote:
          "Rezyumedə həm də \u201CFardad Yar\u201D adı çəkilir. Təsdiq olmadan bu adların bir-birini əvəz edəcəyini güman etməyin.",
        description:
          "React, Next.js və Tailwind CSS ilə Web Applicationların inkişafı və saxlanması. Feature implementasiyası, UI optimallaşdırması, Code Review və komanda görüşlərində əməkdaşlıq.",
        highlights: [
          "React, Next.js və Tailwind CSS ilə Production Web Applicationlarını təhdim etdim və saxladım.",
          "Feature implementasiyası və UI optimallaşdırmasında dizaynerlə və backend mühəndisləri ilə partnyor oldum.",
          "Yüksək təhvimetmə tempini saxlamaq üçün Code Review, planlama və komanda rituallarında iştirak etdim.",
        ],
        stack: ["React", "Next.js", "Tailwind CSS"],
        icon: Code2Icon,
        logo: "/logos/fanavaran.jpg",
      },
      {
        company: "Luko",
        companyTagline: "AI əsaslı təhsil platforması",
        role: "Front-End Developer",
        secondaryRole: "Game Developer (2 ay sonra)",
        location: "Tehran",
        dates: "Yanvar 2026 — İndi",
        dateNote: "Rezyumedə yalnız bir ay göstərilib; davam edən kimi qəbul edilir.",
        description:
          "İbtidai məktəb şagirdləri üçün Next.js əsaslı təhsil platformasının qurulması və saxlanması — AI əsaslı fərdiləşdirilmiş öyrənmə, Gamification, interaktiv oyunlar, podkastlar, animasiya şouları və müəllim panelləri ilə. İki aydan sonra mənə həm də Game Developer rolu verdilər — Three.js ilə interaktiv veb oyunları qururam, eyni front-end toolseti ilə.",
        highlights: [
          "İbtidai sinif şagirdləri üçün Gamified dərsləri, podkastları və animasiya şoularını gücləndirən əsas Next.js platformasını qurdum.",
          "100+ öyrənmə konsepsiyasında eynivaxtlı yeniləmələri idarə edən SSR və Performance optimallaşdırmalarını implementasiya etdim.",
          "Şagirdlərin fərdi öyrənmə konseptləri üzrə irəliləyişini izləmək üçün Real-time müəllim paneli təhdim etdim.",
          "Game Developer kimi Three.js ilə interaktiv 3D və veb oyunları inkişaf etdirdim.",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WebSocket", "Three.js"],
        icon: RocketIcon,
        logo: "/logos/luko.jpg",
        photo: "/experience/luko-1.jpg",
        photoAlt: "Luko komandası INOTEX Pitch 2026 mərasimində",
      },
      {
        company: "Alaeddin Intelligent Processing",
        companyTagline: "Digital Transformation məhsulları",
        role: "Front-End Developer",
        location: "Alborz",
        dates: "Avqust 2026",
        dateNote: "Rezyumedə yalnız bir ay göstərilib.",
        description:
          "React, Next.js və Tailwind CSS ilə müasir veb interfeysləri və rəqəmsal məhsulların qurulması. Digital Transformation təşəbbüslərində iştirak və yüksək performanslı həllər təhdim etmək üçün Cross-functional komandalarla əməkdaşlıq.",
        highlights: [
          "React, Next.js və Tailwind CSS ilə müasir, cavab verən veb interfeysləri qurdum.",
          "Digital Transformation təşəbbüslərində Cross-functional komandalarla partnyor oldum.",
          "Real biznes prosesləri üçün yüksək performanslı həllərin təhdiminə kömək etdim.",
        ],
        stack: ["React", "Next.js", "Tailwind CSS"],
        icon: SparklesIcon,
        logo: "/logos/alaeddin.jpg",
        photo: "/experience/alaeddin.jpg",
        photoAlt: "Alaeddin neon logosu yaşıl divarda ofisdə",
      },
    ],
  },

  projects: {
    eyebrow: "İşlər",
    title: "Layihələr və məhsullar",
    description:
      "Komandalarda qurduğum məhsullar — Luko panelləri, Alaeddin müştəri portalı və Oshagh 315 saytı. Hamısı front-end.",
    seeMoreOnGithub: "GitHub-da daha çox",
    visitAria: (title: string) => `Bax: ${title}`,
    androidLabel: "Android",
    webLabel: "Sayta bax",
    showMore: "Daha çox layihə göstər",
    noPublicLink: "Açıq link yoxdur",
    items: [
      {
        title: "Luko Tələbə Paneli",
        company: "Luko",
        tagline: "Tələbə portalı və müəllim paneli",
        description:
          "İbtidai sinif şagirdləri və müəllimlər üçün panel — oyunlaşdırılmış dərslər, podkastlar və real vaxt paneli.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        url: "https://my.luko.ir",
        urlLabel: "my.luko.ir",
        androidLinks: [
          { label: "Bazaar", url: "https://cafebazaar.ir/app/my.luko.ir" },
          { label: "Myket", url: "https://myket.ir/app/my.luko.ir" },
        ],
        badge: "Yeni versiya yolda",
        accent: "lime",
        icon: GraduationCapIcon,
      },
      {
        title: "Luko Valideyn Paneli",
        company: "Luko",
        tagline: "Valideyn portalı",
        description:
          "Övladın tərəqqisini izləmək, hesabatlar və müəllimlə əlaqə üçün panel.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        url: "https://panel.luko.ir",
        urlLabel: "panel.luko.ir",
        androidLinks: [
          { label: "Android tətbiq", note: "Hazırlanır" },
        ],
        accent: "violet",
        icon: UsersIcon,
      },
      {
        title: "Luko Beta",
        company: "Luko",
        tagline: "Məhsulun beta versiyası",
        description:
          "Luko platformasının beta versiyası — yeni funksiyaların real istifadəçilərlə sınağı.",
        stack: ["Next.js", "React", "TypeScript"],
        url: "https://beta.luko.ir",
        urlLabel: "beta.luko.ir",
        androidLinks: [
          { label: "Android tətbiq", note: "Hazırlanır" },
        ],
        badge: "Beta",
        accent: "lime",
        icon: RocketIcon,
      },
      {
        title: "Luko Landing",
        company: "Luko",
        tagline: "Məhsul tanıtım saytı",
        description:
          "Lead formları və interaktiv demo ilə responsiv tanıtım səhifəsi, SEO üçün optimallaşdırılıb.",
        stack: ["Next.js", "Tailwind CSS", "SEO"],
        url: "https://luko.ir",
        urlLabel: "luko.ir",
        accent: "violet",
        icon: GlobeIcon,
      },
      {
        title: "Luko Komanda Çatı",
        company: "Luko",
        tagline: "Daxili komanda aləti",
        description:
          "Komanda üçün daxili messencer — yalnız front-end, açıq link yoxdur.",
        stack: ["React", "TypeScript", "WebSocket"],
        badge: "Daxili",
        accent: "lime",
        icon: MessageSquareIcon,
      },
      {
        title: "Alaeddin Müştəri Portalı",
        company: "Alaeddin",
        tagline: "Müştəri portalı",
        description:
          "Xidmət və sorğuların izlənməsi üçün müştəri portalı — açıq link yoxdur.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        accent: "violet",
        icon: BriefcaseIcon,
      },
      {
        title: "Oshagh 315",
        company: "Şəxsi layihə",
        tagline: "Dini sayt",
        description:
          "Tam fars dilində dini sayt — tədbir təqvimi və məzmun; front-end tamamilə mənim.",
        stack: ["React", "Tailwind CSS"],
        url: "https://oshagh315.ir",
        urlLabel: "oshagh315.ir",
        accent: "lime",
        icon: SparklesIcon,
      },
    ],
  },

  skills: {
    eyebrow: "Bacarıqlar",
    title: "Toolbox və yanaşma",
    description:
      "Hər gün istifadə etdiyim texnologiyalar, alətlər, təhsil və dillər.",
    frontendTitle: "Frontend Development",
    frontendTag: "Əsas",
    toolsTitle: "Tools & Technologies",
    toolsTag: "Digər stacklər",
    softTitle: "Soft Skills",
    educationTitle: "Təhsil",
    languagesTitle: "Dillər",
    languagesNote: "Səviyyə",
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
        title: "Sahibkarlıq və Məsuliyyət",
        description:
          "Funksiyalar üçün başlanğıcdan istehsala qədər tam məsuliyyəti götürmək və təhdim etdiyim işi davam etdirmək.",
        icon: ZapIcon,
      },
      {
        title: "Funksiyalararası əməkdaşlıq",
        description:
          "Dizaynerlər, backend mühəndisləri və məhsul menecerləri ilə sıx işləmək.",
        icon: UsersIcon,
      },
      {
        title: "Effektiv kommunikasiya",
        description:
          "Texniki mübadilələri aydın dilə çevirmək və qeyri-müəyyən tələbləri konkret addımlara çevirmək.",
        icon: MessageSquareIcon,
      },
      {
        title: "Problem həlli və analitik düşünmə",
        description:
          "Mürəkkəb problemləri parçalamaq, kök səbəbləri ayırmaq və vaxta davamlı praktik həlləri təhdim etmək.",
        icon: CpuIcon,
      },
      {
        title: "Detallara diqqət",
        description:
          "Kiçik şeylərə qayğı — piksel uyğunluğu, kənar hallar, yüklənmə vəziyyətləri və əlçatanlıq.",
        icon: SparklesIcon,
      },
      {
        title: "Adaptasiya və davamlı öyrənmə",
        description:
          "Yeni alətləri və frameworkləri sürətlə öyrənmək və dəyişən məhsul prioritetlərinə uyğunlaşmaq.",
        icon: RocketIcon,
      },
    ],
    educationItems: [
      {
        qualification: "Tam Orta Məktəb Diplomu",
        field: "Kompüter Məzmun İstehsalı",
        institution: "Tohid",
        duration: "Oktyabr 2023 — İyul 2025",
        icon: GraduationCapIcon,
      },
    ],
    languageItems: [
      { name: "İngilis dili", level: "Başlanğıc", note: "Təkmilləşir" },
      { name: "İtalyan dili", level: "Başlanğıc", note: "Təkmilləşir" },
      { name: "Azərbaycan dili", level: "Ana dili", note: "Ana dili" },
    ],
  },

  contact: {
    eyebrow: "Əlaqə",
    title: "Fərqli hiss olunan",
    titleAccent: "bir şey quraq.",
    description:
      "Front-end rollarına, freelancer layihələrinə və əməkdaşlığa açıqam. Qurmağa dəyər bir fikrin varsa, eşitməyə çox sevinərəm.",
    ctaPrimary: "Email göndər",
    ctaSecondary: "LinkedIn-də qoşul",
    ctaTelegram: "Əlaqə",
    ctaInstagram: "Instagram",
    labels: {
      email: "Email",
      phone: "Telefon",
      github: "GitHub",
      location: "Yer",
      telegram: "Telegram",
      instagram: "Instagram",
    },
    copy: "Kopyala",
    copied: "Kopyalandı",
  },

  footer: {
    tagline:
      "Fərqli hiss olunan rəqəmsal təcrübələr qururam. React, Next.js, TypeScript və Tailwind CSS ilə hazırlanmışdır.",
    navigation: "Bölmələr",
    connect: "Qoşul",
    copyright: "Bütün hüquqlar qorunur.",
    builtWith: "Next.js · Tailwind CSS · Framer Motion ilə qurulub",
    backToTop: "Yuxarıya qayıt",
    ariaEmail: "Email",
    ariaGithub: "GitHub",
    ariaLinkedin: "LinkedIn",
    ariaBackToTop: "Yuxarıya qayıt",
  },
};

// ---------- Italian (it) ----------
export const it: Translation = {
  meta: {
    htmlLang: "it",
    title: "Abolfazl Ebrahimi — Sviluppatore Front-End",
    description:
      "Abolfazl Ebrahimi è uno Sviluppatore Front-End che crea esperienze web reattive, interattive e ad alte prestazioni con React e Next.js.",
  },
  personal: {
    name: "Abolfazl Ebrahimi",
    role: "Sviluppatore Front-End",
  },
  nav: {
    items: [
      { label: "Chi sono", href: "#about" },
      { label: "Esperienza", href: "#experience" },
      { label: "Lavori", href: "#work" },
      { label: "Competenze", href: "#skills" },
      { label: "Contatti", href: "#contact" },
    ],
  },
  brand: { name: "Abolfazl Ebrahimi", role: "Sviluppatore Front-End" },
  getInTouch: "Contattami",
  openMenu: "Apri menu",
  closeMenu: "Chiudi menu",

  hero: {
    availability: "Disponibile per nuove opportunità",
    nameLabel: "Abolfazl Ebrahimi",
    headline: "Costruisco esperienze digitali",
    headlineAccent: "che si sentono diverse.",
    sub: "Sono uno sviluppatore full-stack con focus sul front-end — creo esperienze web reattive, interattive e ad alte prestazioni con React e Next.js.",
    ctaPrimary: "Esplora il mio lavoro",
    ctaSecondary: "Parliamone",
    scroll: "Scorri",
    portraitAlt: "Abolfazl Ebrahimi — Sviluppatore Front-End",
    portraitChipRole: "Front-End / Game Developer",
    portraitChipLocation: "Alborz, Iran",
  },

  about: {
    eyebrow: "Chi sono",
    title: "Qualcosa su di me",
    description:
      "Uno sviluppatore full-stack con focus front-end che trasforma le idee in prodotti digitali funzionali e coinvolgenti.",
    intro:
      "Sono Abolfazl, uno sviluppatore full-stack con focus sul front-end, e amo trasformare le idee in prodotti digitali funzionali e coinvolgenti. Ho lavorato con team professionali per sviluppare piattaforme educative, esperienze basate sull'IA, interfacce in tempo reale e siti web reattivi.",
    para2:
      "Mi interesso dei dettagli che gli utenti sentono ma raramente notano — tempi di caricamento rapidi, interazioni prevedibili, layout reattivi che reggono su ogni schermo, e codice che rimane manutenibile mentre il prodotto cresce. Il mio focus è stato consegnare prodotti reali in ambienti di team professionali, dove il lavoro deve performare sotto veri utenti e veri vincoli.",
    emailCta: "Inviami un'email",
    strengths: [
      {
        title: "React e Next.js di livello produzione",
        description:
          "Costruzione di applicazioni reali con App Router, SSR e budget di performance in mente.",
        icon: RocketIcon,
      },
      {
        title: "Interfacce reattive",
        description:
          "Layout mobile-first con forte gerarchia visiva e interazioni accessibili.",
        icon: BriefcaseIcon,
      },
      {
        title: "UI in tempo reale e interattiva",
        description:
          "Lavoro con WebSocket e dati live per offrire esperienze real-time coinvolgenti.",
        icon: ZapIcon,
      },
      {
        title: "Lavoro di squadra cross-funzionale",
        description:
          "Collaborazione con designer, ingegneri backend e stakeholder di prodotto.",
        icon: UsersIcon,
      },
      {
        title: "Usabilità e performance",
        description:
          "Ottimizzazione di Core Web Vitals, SEO ed esperienza generale per utenti reali.",
        icon: SparklesIcon,
      },
    ],
  },

  experience: {
    eyebrow: "Esperienza",
    title: "Cronologia professionale",
    description:
      "Quattro ruoli reali nella costruzione di prodotti web in produzione in ambienti di team professionali.",
    locationLabel: "Posizione",
    jobs: [
      {
        company: "Irangard",
        companyTagline: "AI-based travel platform",
        role: "Sviluppatore Front-End",
        location: "Teheran",
        dates: "Lug 2023 — Mar 2024",
        dateNote:
          "Date provvisorie — il curriculum originale fa riferimento anche al periodo 2024–2025 per questo ruolo. Si prega di confermare.",
        description:
          "Ho lavorato a una piattaforma di viaggio basata sull'IA che personalizza gli itinerari, inclusi tour, hotel, budget e attrazioni.",
        highlights: [
          "Ho contribuito a un assistente di viaggio basato sull'IA che generava itinerari personalizzati tra le città.",
          "Ho costruito superfici UI per itinerari che coprivano tour, hotel, budget e attrazioni in un unico flusso coerente.",
          "Ho collaborato con i team backend e di prodotto per rilasciare funzionalità reali usate dai viaggiatori.",
        ],
        stack: ["React", "JavaScript", "AI Integration"],
        icon: GlobeIcon,
        logo: "/logos/irangard.jpg",
        photo: "/experience/irangard.jpg",
        photoAlt: "Team Irangard allo stand espositivo",
      },
      {
        company: "Fanavaran Sepehr Fardad",
        companyTagline: "Web Application Studio",
        role: "Sviluppatore Front-End",
        location: "Teheran",
        dates: "Ott 2025 — Feb 2026",
        dateNote:
          "Il curriculum menziona anche il nome \u201CFardad Yar.\u201D Non assumere che i nomi siano interscambiabili senza conferma.",
        description:
          "Sviluppo e manutenzione di Web Application con React, Next.js e Tailwind CSS. Collaborazione su implementazione di Feature, ottimizzazione UI, Code Review e riunioni di team.",
        highlights: [
          "Ho rilasciato e mantenuto Web Application di produzione con React, Next.js e Tailwind CSS.",
          "Ho collaborato con designer e ingegneri backend su implementazione di Feature e ottimizzazione UI.",
          "Ho partecipato a Code Review, pianificazione e rituali di team per mantenere un alto ritmo di consegna.",
        ],
        stack: ["React", "Next.js", "Tailwind CSS"],
        icon: Code2Icon,
        logo: "/logos/fanavaran.jpg",
      },
      {
        company: "Luko",
        companyTagline: "AI-powered educational platform",
        role: "Sviluppatore Front-End",
        secondaryRole: "Game Developer (dopo 2 mesi)",
        location: "Teheran",
        dates: "Gen 2026 — Presente",
        dateNote: "Nel curriculum è indicato un solo mese; trattato come in corso.",
        description:
          "Ho costruito e manutenuto una piattaforma educativa basata su Next.js per studenti delle elementari, con apprendimento personalizzato tramite IA, gamification, giochi interattivi, podcast, show animati e dashboard per insegnanti. Dopo due mesi, mi hanno dato anche il ruolo di Game Developer — costruisco giochi web interattivi con Three.js usando lo stesso toolset front-end.",
        highlights: [
          "Ho costruito la piattaforma core in Next.js che alimenta lezioni gamificate, podcast e show animati per studenti delle elementari.",
          "Ho implementato SSR e ottimizzazioni delle performance per gestire aggiornamenti concorrenti su oltre 100 concetti di apprendimento.",
          "Ho consegnato una dashboard insegnanti in tempo reale per tracciare i progressi degli studenti sui singoli concetti.",
          "Ho sviluppato giochi 3D e web interattivi con Three.js come Game Developer.",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WebSocket", "Three.js"],
        icon: RocketIcon,
        logo: "/logos/luko.jpg",
        photo: "/experience/luko-1.jpg",
        photoAlt: "Team Luko alla cerimonia INOTEX Pitch 2026",
      },
      {
        company: "Alaeddin Intelligent Processing",
        companyTagline: "Digital Transformation products",
        role: "Sviluppatore Front-End",
        location: "Alborz",
        dates: "Ago 2026",
        dateNote: "Nel curriculum è indicato un solo mese.",
        description:
          "Ho costruito interfacce web moderne e prodotti digitali usando React, Next.js e Tailwind CSS. Ho partecipato a iniziative di Digital Transformation e collaborato con team cross-funzionali per consegnare soluzioni ad alte prestazioni.",
        highlights: [
          "Ho costruito interfacce web moderne e reattive usando React, Next.js e Tailwind CSS.",
          "Ho collaborato con team cross-funzionali in iniziative di Digital Transformation.",
          "Ho contribuito a consegnare soluzioni ad alte prestazioni per flussi di lavoro reali.",
        ],
        stack: ["React", "Next.js", "Tailwind CSS"],
        icon: SparklesIcon,
        logo: "/logos/alaeddin.jpg",
        photo: "/experience/alaeddin.jpg",
        photoAlt: "Logo neon Alaeddin sulla parete verde in ufficio",
      },
    ],
  },

  projects: {
    eyebrow: "Lavori",
    title: "Progetti e prodotti",
    description:
      "Prodotti realizzati in team — i pannelli Luko, il portale clienti Alaeddin e il sito Oshagh 315. Tutto front-end.",
    seeMoreOnGithub: "Altro su GitHub",
    visitAria: (title: string) => `Visita ${title}`,
    androidLabel: "Android",
    webLabel: "Visita il sito",
    showMore: "Mostra altri progetti",
    noPublicLink: "Nessun link pubblico",
    items: [
      {
        title: "Pannello Studente Luko",
        company: "Luko",
        tagline: "Portale studenti e dashboard docente",
        description:
          "Pannello per studenti delle elementari e docenti — lezioni gamificate, podcast e dashboard in tempo reale.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        url: "https://my.luko.ir",
        urlLabel: "my.luko.ir",
        androidLinks: [
          { label: "Bazaar", url: "https://cafebazaar.ir/app/my.luko.ir" },
          { label: "Myket", url: "https://myket.ir/app/my.luko.ir" },
        ],
        badge: "Nuova versione in arrivo",
        accent: "lime",
        icon: GraduationCapIcon,
      },
      {
        title: "Pannello Genitori Luko",
        company: "Luko",
        tagline: "Portale genitori",
        description:
          "Segui i progressi dei figli, i report di attività e parla direttamente con i docenti.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        url: "https://panel.luko.ir",
        urlLabel: "panel.luko.ir",
        androidLinks: [
          { label: "App Android", note: "In sviluppo" },
        ],
        accent: "violet",
        icon: UsersIcon,
      },
      {
        title: "Luko Beta",
        company: "Luko",
        tagline: "Versione beta",
        description:
          "Versione beta della piattaforma Luko per testare nuove funzioni con utenti reali.",
        stack: ["Next.js", "React", "TypeScript"],
        url: "https://beta.luko.ir",
        urlLabel: "beta.luko.ir",
        androidLinks: [
          { label: "App Android", note: "In sviluppo" },
        ],
        badge: "Beta",
        accent: "lime",
        icon: RocketIcon,
      },
      {
        title: "Landing Luko",
        company: "Luko",
        tagline: "Sito prodotto",
        description:
          "Landing page responsive con form di contatto e demo interattiva, ottimizzata per la SEO.",
        stack: ["Next.js", "Tailwind CSS", "SEO"],
        url: "https://luko.ir",
        urlLabel: "luko.ir",
        accent: "violet",
        icon: GlobeIcon,
      },
      {
        title: "Chat interna del team Luko",
        company: "Luko",
        tagline: "Strumento interno",
        description:
          "Messaggistica interna del team — solo front-end, nessun link pubblico.",
        stack: ["React", "TypeScript", "WebSocket"],
        badge: "Interno",
        accent: "lime",
        icon: MessageSquareIcon,
      },
      {
        title: "Portale Clienti Alaeddin",
        company: "Alaeddin",
        tagline: "Portale clienti",
        description:
          "Portale per i clienti con monitoraggio di servizi e richieste — nessun link pubblico.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        accent: "violet",
        icon: BriefcaseIcon,
      },
      {
        title: "Oshagh 315",
        company: "Progetto personale",
        tagline: "Sito religioso",
        description:
          "Sito religioso in persiano con calendario eventi e contenuti — front-end completo.",
        stack: ["React", "Tailwind CSS"],
        url: "https://oshagh315.ir",
        urlLabel: "oshagh315.ir",
        accent: "lime",
        icon: SparklesIcon,
      },
    ],
  },

  skills: {
    eyebrow: "Competenze",
    title: "Toolbox e mentalità",
    description:
      "Le tecnologie che uso ogni giorno, insieme a strumenti, formazione e lingue.",
    frontendTitle: "Frontend Development",
    frontendTag: "Principale",
    toolsTitle: "Tools & Technologies",
    toolsTag: "Altri stack",
    softTitle: "Soft Skills",
    educationTitle: "Formazione",
    languagesTitle: "Lingue",
    languagesNote: "Livello",
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
        title: "Ownership e responsabilità",
        description:
          "Prendere responsabilità end-to-end delle funzionalità — dal kickoff alla produzione — e portare a termine ciò che consegno.",
        icon: ZapIcon,
      },
      {
        title: "Collaborazione cross-funzionale",
        description:
          "Lavorare a stretto contatto con designer, ingegneri backend e product manager per allinearsi sugli scope e consegnare insieme.",
        icon: UsersIcon,
      },
      {
        title: "Comunicazione efficace",
        description:
          "Tradurre i trade-off tecnici in un linguaggio chiaro e trasformare requisiti ambigui in passi successivi concreti.",
        icon: MessageSquareIcon,
      },
      {
        title: "Risoluzione dei problemi e pensiero analitico",
        description:
          "Scomporre problemi complessi, isolare le cause radice e consegnare soluzioni pragmatiche che reggono nel tempo.",
        icon: CpuIcon,
      },
      {
        title: "Attenzione ai dettagli",
        description:
          "Curare le piccole cose — allineamento dei pixel, casi limite, stati di caricamento e accessibilità.",
        icon: SparklesIcon,
      },
      {
        title: "Adattabilità e apprendimento continuo",
        description:
          "A mio agio nell'imparare rapidamente nuovi strumenti e framework, e nell'adattarmi a priorità di prodotto in mutamento.",
        icon: RocketIcon,
      },
    ],
    educationItems: [
      {
        qualification: "Diploma di scuola superiore",
        field: "Produzione di contenuti informatici",
        institution: "Tohid",
        duration: "Ott 2023 — Lug 2025",
        icon: GraduationCapIcon,
      },
    ],
    languageItems: [
      { name: "Inglese", level: "Base", note: "In miglioramento" },
      { name: "Italiano", level: "Base", note: "In miglioramento" },
      { name: "Azero", level: "Madrelingua", note: "Madrelingua" },
    ],
  },

  contact: {
    eyebrow: "Contatti",
    title: "Costruiamo qualcosa",
    titleAccent: "che si senta diverso.",
    description:
      "Sono aperto a ruoli front-end, progetti freelance e collaborazioni. Se hai un'idea che merita di essere realizzata, mi piacerebbe sentirla.",
    ctaPrimary: "Invia un'email",
    ctaSecondary: "Connettiti su LinkedIn",
    ctaTelegram: "Contattami",
    ctaInstagram: "Instagram",
    labels: {
      email: "Email",
      phone: "Telefono",
      github: "GitHub",
      location: "Posizione",
      telegram: "Telegram",
      instagram: "Instagram",
    },
    copy: "Copia",
    copied: "Copiato",
  },

  footer: {
    tagline:
      "Costruisco esperienze digitali che si sentono diverse. Realizzato con React, Next.js, TypeScript e Tailwind CSS.",
    navigation: "Sezioni",
    connect: "Connetti",
    copyright: "Tutti i diritti riservati.",
    builtWith: "Costruito con Next.js · Tailwind CSS · Framer Motion",
    backToTop: "Torna su",
    ariaEmail: "Email",
    ariaGithub: "GitHub",
    ariaLinkedin: "LinkedIn",
    ariaBackToTop: "Torna su",
  },
};

// ---------- Arabic (ar) ----------
export const ar: Translation = {
  meta: {
    htmlLang: "ar",
    title: "أبوالفضل إبراهيمي — مطوّر واجهات أمامية",
    description:
      "أبوالفضل إبراهيمي مطوّر واجهات أمامية يصنع تجارب ويب تفاعلية وسريعة الاستجابة وعالية الأداء باستخدام React وNext.js.",
  },
  personal: {
    name: "أبوالفضل إبراهيمي",
    role: "مطوّر واجهات أمامية",
  },
  nav: {
    items: [
      { label: "نبذة", href: "#about" },
      { label: "الخبرة", href: "#experience" },
      { label: "الأعمال", href: "#work" },
      { label: "المهارات", href: "#skills" },
      { label: "تواصل", href: "#contact" },
    ],
  },
  brand: { name: "أبوالفضل إبراهيمي", role: "مطوّر واجهات أمامية" },
  getInTouch: "تواصل معي",
  openMenu: "فتح القائمة",
  closeMenu: "إغلاق القائمة",

  hero: {
    availability: "متاح لفرص جديدة",
    nameLabel: "أبوالفضل إبراهيمي",
    headline: "أبني تجارب رقمية",
    headlineAccent: "تبدو مختلفة.",
    sub: "أنا مطوّر Full-Stack بتركيز على الـ Front-End — أصنع تجارب ويب تفاعلية وسريعة الاستجابة وعالية الأداء باستخدام React وNext.js.",
    ctaPrimary: "استكشف أعمالي",
    ctaSecondary: "لنتحدث",
    scroll: "مرّر",
    portraitAlt: "أبوالفضل إبراهيمي — مطوّر واجهات أمامية",
    portraitChipRole: "Front-End / Game Developer",
    portraitChipLocation: "البرز، إيران",
  },

  about: {
    eyebrow: "نبذة",
    title: "القليل عني",
    description:
      "مطوّر Full-Stack بتركيز على الـ Front-End يحوّل الأفكار إلى منتجات رقمية وظيفية وجذابة.",
    intro:
      "أنا أبوالفضل، مطوّر Full-Stack بتركيز على الـ Front-End، وأستمتع بتحويل الأفكار إلى منتجات رقمية وظيفية وجذابة. عملت مع فرق احترافية لتطوير منصات تعليمية، وتجارب مدعومة بالذكاء الاصطناعي، وواجهات في الوقت الفعلي، ومواقع ويب سريعة الاستجابة.",
    para2:
      "أهتم بالتفاصيل التي يشعر بها المستخدمون ونادرًا ما يلاحظونها — أوقات تحميل سريعة، وتفاعلات يمكن التنبؤ بها، وتخطيطات سريعة الاستجابة تعمل على كل شاشة، وكود يبقى قابلاً للصيانة مع نمو المنتج. تركيزي كان تسليم منتجات حقيقية في بيئات فريق احترافية، حيث يجب أن يؤدي العمل تحت مستخدمين حقيقيين وقيود حقيقية.",
    emailCta: "راسلني",
    strengths: [
      {
        title: "React وNext.js بمستوى الإنتاج",
        description:
          "بناء تطبيقات حقيقية مع App Router وSSR مع مراعاة ميزانيات الأداء.",
        icon: RocketIcon,
      },
      {
        title: "واجهات سريعة الاستجابة",
        description:
          "تخطيطات تبدأ من الجوال بتسلسل بصري قوي وتفاعلات يمكن الوصول إليها.",
        icon: BriefcaseIcon,
      },
      {
        title: "واجهات في الوقت الفعلي وتفاعلية",
        description:
          "العمل مع WebSocket والبيانات الحية لتقديم تجارب لحظية جذابة.",
        icon: ZapIcon,
      },
      {
        title: "العمل الجماعي متعدد الوظائف",
        description:
          "التعاون مع المصممين ومهندسي الواجهات الخلفية وأصحاب المصلحة في المنتج.",
        icon: UsersIcon,
      },
      {
        title: "القابلية للاستخدام والأداء",
        description:
          "تحسين Core Web Vitals وSEO والتجربة العامة للمستخدمين الحقيقيين.",
        icon: SparklesIcon,
      },
    ],
  },

  experience: {
    eyebrow: "الخبرة",
    title: "المسار المهني",
    description:
      "أربعة أدوار حقيقية في بناء منتجات ويب إنتاجية في بيئات فريق احترافية.",
    locationLabel: "الموقع",
    jobs: [
      {
        company: "Irangard",
        companyTagline: "AI-based travel platform",
        role: "مطوّر واجهات أمامية",
        location: "طهران",
        dates: "يوليو 2023 — مارس 2024",
        dateNote:
          "تواريخ مؤقتة — السيرة الذاتية الأصلية تشير أيضًا إلى فترة 2024–2025 لهذا الدور. يرجى التأكيد.",
        description:
          "عملت على منصة سفر مدعومة بالذكاء الاصطناعي تخصص مسارات الرحلات، بما في ذلك الجولات والفنادق والميزانية والمعالم السياحية.",
        highlights: [
          "ساهمت في رفيق سفر مدعوم بالذكاء الاصطناعي كان يولّد مسارات رحلات مخصصة عبر المدن.",
          "بنيت أسطح واجهة للمسارات تغطي الجولات والفنادق والميزانية والمعالم في تدفق متماسك واحد.",
          "تعاونت مع زملاء الواجهة الخلفية والمنتج لتسليم ميزات حقيقية يستخدمها المسافرون.",
        ],
        stack: ["React", "JavaScript", "AI Integration"],
        icon: GlobeIcon,
        logo: "/logos/irangard.jpg",
        photo: "/experience/irangard.jpg",
        photoAlt: "فريق Irangard في كشك المعرض",
      },
      {
        company: "Fanavaran Sepehr Fardad",
        companyTagline: "Web Application Studio",
        role: "مطوّر واجهات أمامية",
        location: "طهران",
        dates: "أكتوبر 2025 — فبراير 2026",
        dateNote:
          "تشير السيرة الذاتية أيضًا إلى اسم \u201CFardad Yar.\u201D لا تفترض أن الأسماء قابلة للتبديل دون تأكيد.",
        description:
          "تطوير وصيانة Web Application باستخدام React وNext.js وTailwind CSS. التعاون في تنفيذ الـ Features وتحسين الـ UI ومراجعات الكود واجتماعات الفريق.",
        highlights: [
          "سلّمت وصمت Web Applications إنتاجية باستخدام React وNext.js وTailwind CSS.",
          "تعاونت مع المصممين ومهندسي الواجهة الخلفية في تنفيذ الـ Features وتحسين الـ UI.",
          "شاركت في Code Review والتخطيط وطقوس الفريق للحفاظ على إيقاع تسليم مرتفع.",
        ],
        stack: ["React", "Next.js", "Tailwind CSS"],
        icon: Code2Icon,
        logo: "/logos/fanavaran.jpg",
      },
      {
        company: "Luko",
        companyTagline: "AI-powered educational platform",
        role: "مطوّر واجهات أمامية",
        secondaryRole: "Game Developer (بعد شهرين)",
        location: "طهران",
        dates: "يناير 2026 — الآن",
        dateNote: "أُشير إلى شهر واحد فقط في السيرة الذاتية؛ يُعامَل كقائم.",
        description:
          "بنيت وصنت منصة تعليمية مبنية على Next.js لطلاب المرحلة الابتدائية، تتميز بتعلم مخصص بالذكاء الاصطناعي، وGamification، وألعاب تفاعلية، وملفات صوتية، وعروض متحركة، ولوحات تحكم للمعلمين. بعد شهرين، أعطوني أيضًا دور Game Developer — أبني ألعاب ويب تفاعلية بـ Three.js باستخدام نفس أدوات الـ Front-End.",
        highlights: [
          "بنيت منصة Next.js الأساسية التي تشغّل الدروس الـ Gamified والملفات الصوتية والعروض المتحركة لطلاب المرحلة الابتدائية.",
          "نفّذت SSR وتحسينات الـ Performance للتعامل مع التحديثات المتزامنة عبر أكثر من 100 مفهوم تعليمي.",
          "سلّمت لوحة تحكم معلم Real-time لتتبع تقدم الطلاب عبر مفاهيم التعلم الفردية.",
          "طوّرت ألعاب ويب و3D تفاعلية بـ Three.js كـ Game Developer.",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WebSocket", "Three.js"],
        icon: RocketIcon,
        logo: "/logos/luko.jpg",
        photo: "/experience/luko-1.jpg",
        photoAlt: "فريق Luko في حفل INOTEX Pitch 2026",
      },
      {
        company: "Alaeddin Intelligent Processing",
        companyTagline: "Digital Transformation products",
        role: "مطوّر واجهات أمامية",
        location: "البرز",
        dates: "أغسطس 2026",
        dateNote: "أُشير إلى شهر واحد فقط في السيرة الذاتية.",
        description:
          "بنيت واجهات ويب حديثة ومنتجات رقمية باستخدام React وNext.js وTailwind CSS. شاركت في مبادرات Digital Transformation وتعاونت مع فرق متعددة الوظائف لتسليم حلول عالية الأداء.",
        highlights: [
          "بنيت واجهات ويب حديثة وسريعة الاستجابة باستخدام React وNext.js وTailwind CSS.",
          "تعاونت مع فرق متعددة الوظائف في مبادرات Digital Transformation.",
          "ساعدت في تسليم حلول عالية الأداء لتدفقات عمل حقيقية.",
        ],
        stack: ["React", "Next.js", "Tailwind CSS"],
        icon: SparklesIcon,
        logo: "/logos/alaeddin.jpg",
        photo: "/experience/alaeddin.jpg",
        photoAlt: "شعار Alaeddin النيون على الجدار الأخضر في المكتب",
      },
    ],
  },

  projects: {
    eyebrow: "الأعمال",
    title: "المشاريع والمنتجات",
    description:
      "منتجات عملت عليها داخل فرق — لوحات لوكو، بوابة عملاء العلاء الدين، وموقع عشاق الرقية. جميعها واجهات أمامية.",
    seeMoreOnGithub: "المزيد على GitHub",
    visitAria: (title: string) => `زيارة ${title}`,
    androidLabel: "أندرويد",
    webLabel: "زيارة الموقع",
    showMore: "عرض المزيد من المشاريع",
    noPublicLink: "لا يوجد رابط عام",
    items: [
      {
        title: "لوحة الطالب — لوكو",
        company: "لوكو",
        tagline: "بوابة الطالب ولوحة المعلم",
        description:
          "لوحة لطلاب المرحلة الابتدائية والمعلمين — دروس تفاعلية وبودكاست ولوحة متابعة فورية.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        url: "https://my.luko.ir",
        urlLabel: "my.luko.ir",
        androidLinks: [
          { label: "بازار", url: "https://cafebazaar.ir/app/my.luko.ir" },
          { label: "مايكت", url: "https://myket.ir/app/my.luko.ir" },
        ],
        badge: "النسخة الجديدة قريبًا",
        accent: "lime",
        icon: GraduationCapIcon,
      },
      {
        title: "لوحة الوالدين — لوكو",
        company: "لوكو",
        tagline: "بوابة الوالدين",
        description:
          "متابعة تقدم الأبناء والتقارير والتواصل المباشر مع المعلمين.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        url: "https://panel.luko.ir",
        urlLabel: "panel.luko.ir",
        androidLinks: [
          { label: "تطبيق أندرويد", note: "قيد التطوير" },
        ],
        accent: "violet",
        icon: UsersIcon,
      },
      {
        title: "لوكو بيتا",
        company: "لوكو",
        tagline: "نسخة تجريبية",
        description:
          "نسخة بيتا من منصة لوكو لاختبار الميزات الجديدة مع مستخدمين حقيقيين.",
        stack: ["Next.js", "React", "TypeScript"],
        url: "https://beta.luko.ir",
        urlLabel: "beta.luko.ir",
        androidLinks: [
          { label: "تطبيق أندرويد", note: "قيد التطوير" },
        ],
        badge: "بيتا",
        accent: "lime",
        icon: RocketIcon,
      },
      {
        title: "صفحة لوكو التعريفية",
        company: "لوكو",
        tagline: "موقع المنتج",
        description:
          "صفحة تعريفية متجاوبة مع نماذج تسجيل وعرض تفاعلي، محسّنة لمحركات البحث.",
        stack: ["Next.js", "Tailwind CSS", "SEO"],
        url: "https://luko.ir",
        urlLabel: "luko.ir",
        accent: "violet",
        icon: GlobeIcon,
      },
      {
        title: "دردشة فريق لوكو",
        company: "لوكو",
        tagline: "أداة داخلية",
        description:
          "مراسلة داخلية للفريق — واجهة أمامية فقط، بدون رابط عام.",
        stack: ["React", "TypeScript", "WebSocket"],
        badge: "داخلي",
        accent: "lime",
        icon: MessageSquareIcon,
      },
      {
        title: "بوابة عملاء العلاء الدين",
        company: "العلاء الدين",
        tagline: "بوابة العملاء",
        description:
          "بوابة لمتابعة الخدمات والطلبات — بدون رابط عام.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        accent: "violet",
        icon: BriefcaseIcon,
      },
      {
        title: "عشاق الرقية ٣١٥",
        company: "مشروع شخصي",
        tagline: "موقع ديني",
        description:
          "موقع ديني باللغة الفارسية — تقويم المناسبات والمحتوى؛ الواجهة الأمامية كاملة.",
        stack: ["React", "Tailwind CSS"],
        url: "https://oshagh315.ir",
        urlLabel: "oshagh315.ir",
        accent: "lime",
        icon: SparklesIcon,
      },
    ],
  },

  skills: {
    eyebrow: "المهارات",
    title: "Toolbox والعقلية",
    description:
      "التقنيات التي أستخدمها يوميًا، مع الأدوات والتعليم واللغات.",
    frontendTitle: "Frontend Development",
    frontendTag: "الأساسي",
    toolsTitle: "Tools & Technologies",
    toolsTag: "Stacks أخرى",
    softTitle: "Soft Skills",
    educationTitle: "التعليم",
    languagesTitle: "اللغات",
    languagesNote: "المستوى",
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
        title: "الملكية والمسؤولية",
        description:
          "تحمّل المسؤولية الكاملة للميزات — من الانطلاق إلى الإنتاج — ومتابعة ما أسلّمه.",
        icon: ZapIcon,
      },
      {
        title: "التعاون متعدد الوظائف",
        description:
          "العمل عن قرب مع المصممين ومهندسي الواجهات الخلفية ومديري المنتج.",
        icon: UsersIcon,
      },
      {
        title: "التواصل الفعّال",
        description:
          "ترجمة المفاضلات التقنية إلى لغة واضحة، وتحويل المتطلبات الغامضة إلى خطوات تالية ملموسة.",
        icon: MessageSquareIcon,
      },
      {
        title: "حل المشكلات والتفكير التحليلي",
        description:
          "تفكيك المشكلات المعقدة، عزل الأسباب الجذرية، وتسليم حلول عملية تصمد مع الوقت.",
        icon: CpuIcon,
      },
      {
        title: "الاهتمام بالتفاصيل",
        description:
          "الاعتناء بالأمور الصغيرة — محاذاة البكسل، والحالات الحدية، وحالات التحميل، وإمكانية الوصول.",
        icon: SparklesIcon,
      },
      {
        title: "القدرة على التكيّف والتعلم المستمر",
        description:
          "الارتياح في تعلم الأدوات والأطر الجديدة بسرعة، والتكيّف مع أولويات المنتج المتغيرة.",
        icon: RocketIcon,
      },
    ],
    educationItems: [
      {
        qualification: "شهادة الثانوية العامة",
        field: "إنتاج المحتوى الحاسوبي",
        institution: "توحيد",
        duration: "أكتوبر 2023 — يوليو 2025",
        icon: GraduationCapIcon,
      },
    ],
    languageItems: [
      { name: "الإنجليزية", level: "مبتدئ", note: "قيد التحسّن" },
      { name: "الإيطالية", level: "مبتدئ", note: "قيد التحسّن" },
      { name: "الأذرية", level: "اللغة الأم", note: "اللغة الأم" },
    ],
  },

  contact: {
    eyebrow: "تواصل",
    title: "لنبنِ شيئًا",
    titleAccent: "يبدو مختلفًا.",
    description:
      "أنا منفتح على أدوار الواجهات الأمامية، والمشاريع المستقلة، والتعاون. إذا كان لديك فكرة تستحق البناء، يسعدني سماعها.",
    ctaPrimary: "أرسل بريدًا إلكترونيًا",
    ctaSecondary: "تواصل على لينكدإن",
    ctaTelegram: "تواصل",
    ctaInstagram: "إنستغرام",
    labels: {
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      github: "GitHub",
      location: "الموقع",
      telegram: "تيليجرام",
      instagram: "إنستغرام",
    },
    copy: "نسخ",
    copied: "تم النسخ",
  },

  footer: {
    tagline:
      "أبني تجارب رقمية تبدو مختلفة. صُمم باستخدام React وNext.js وTypeScript وTailwind CSS.",
    navigation: "الأقسام",
    connect: "تواصل",
    copyright: "جميع الحقوق محفوظة.",
    builtWith: "بُني بـ Next.js · Tailwind CSS · Framer Motion",
    backToTop: "العودة للأعلى",
    ariaEmail: "البريد الإلكتروني",
    ariaGithub: "GitHub",
    ariaLinkedin: "LinkedIn",
    ariaBackToTop: "العودة للأعلى",
  },
};
