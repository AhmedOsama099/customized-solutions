import type { Locale } from "./config";

/**
 * English is the source of truth. `Dictionary = typeof en` forces every other
 * locale to have the exact same shape at compile time, so a missing/extra key
 * is a build error — not a runtime surprise.
 */
const en = {
  meta: {
    title: "Customized Solutions — software, tailored to fit.",
    description:
      "Customized Solutions is a product studio. We design and ship software end-to-end — from the first sketch to a live product on its own domain. Mihna, our platform for professional websites, is the first of them.",
    ogDescription:
      "A product studio that designs and ships software end-to-end. Mihna is our flagship.",
  },
  a11y: {
    skip: "Skip to content",
  },
  langSwitch: {
    /** The language this control switches TO. */
    label: "العربية",
    aria: "Switch to Arabic",
  },
  nav: {
    whatWeDo: "What we do",
    work: "Work",
    approach: "Approach",
    startProject: "Start a project",
  },
  hero: {
    badge: "Software studio",
    titleLead: "We build software,",
    titleAccent: "tailored to fit.",
    body: "Customized Solutions is a product studio. We design and ship software end-to-end — from the first sketch to a live product on its own domain. {mihna}, our platform for professional websites, is the first of them.",
    mihnaWord: "Mihna",
    ctaPrimary: "Start a project",
    ctaSecondary: "See our work",
  },
  capabilities: [
    { value: "End‑to‑end", note: "idea → design → ship" },
    { value: "AR · EN", note: "bilingual, RTL‑ready" },
    { value: "Owned", note: "your code, your domain" },
    { value: "Built to scale", note: "multi‑tenant from day one" },
  ],
  what: {
    label: "// what we do",
    heading: "Four ways we turn an idea into a product",
    items: [
      {
        n: "01",
        title: "Product design",
        body: "We shape the flows, the screens and the brand before a line of code — so what we build looks made for you, not generic.",
      },
      {
        n: "02",
        title: "Web & app development",
        body: "Modern, fast, SEO-first builds with secure auth, validation and tests — shipped on infrastructure that stays cheap to run.",
      },
      {
        n: "03",
        title: "Custom platforms",
        body: "Multi-tenant systems, dashboards and live theming — one codebase that serves many clients, each with their own site.",
      },
      {
        n: "04",
        title: "Ongoing partnership",
        body: "We host, maintain and keep your product secure — and add to it as you grow. You stay in control from a simple dashboard.",
      },
    ],
  },
  work: {
    label: "// our work",
    heading: "Products we’ve built",
    intro: "Each one started as a problem worth solving. We design, build and run them.",
    mihna: {
      live: "LIVE · malafpro.com",
      body: "Polished, bilingual websites for professionals — doctors, lawyers, engineers, tutors and more. Role-tailored templates, booking, leads and a simple dashboard. A multi-tenant platform that spins up a new client site in minutes.",
      tags: ["Multi-tenant", "Bilingual · RTL", "Live theming", "11 role templates"],
      visit: "Visit mihna",
    },
    next: {
      title: "Your product next",
      body: "Have an idea that needs to become real software? That’s exactly what we do. Tell us about it.",
      cta: "Start a project",
    },
  },
  approach: {
    label: "// how we work",
    heading: "From a conversation to a live product",
    steps: [
      {
        n: "STEP 01",
        title: "Understand",
        body: "We learn the problem, the users and the constraints — and agree on what “done” looks like.",
      },
      {
        n: "STEP 02",
        title: "Design & build",
        body: "Tailored design, then a fast, secure build — shipped in increments you can see and steer.",
      },
      {
        n: "STEP 03",
        title: "Launch & keep",
        body: "Go live on your own domain — then we host, maintain and grow it alongside you.",
      },
    ],
  },
  cta: {
    heading: "Let’s build something tailored.",
    body: "Tell us what you’re trying to make. We’ll come back with how we’d build it.",
    contact: "Contact us",
    whatsapp: "WhatsApp",
  },
  footer: {
    portfolio: "Portfolio",
    rights: "© 2026 Customized Solutions — software, tailored.",
  },
};

/** Structural shape (strings, not literals) so each locale supplies its own copy. */
export type Dictionary = typeof en;

const ar: Dictionary = {
  meta: {
    title: "Customized Solutions — برمجيات على مقاسك.",
    description:
      "‏Customized Solutions استوديو منتجات. نصمّم البرمجيات ونطلقها من الألف إلى الياء — من أول فكرة إلى منتج حيّ على نطاقه الخاص. ومنصّتنا «مهنة» للمواقع الاحترافية هي أولى ثمارها.",
    ogDescription: "استوديو منتجات يصمّم البرمجيات ويطلقها من الألف إلى الياء. «مهنة» منتجنا الرائد.",
  },
  a11y: {
    skip: "تخطَّ إلى المحتوى",
  },
  langSwitch: {
    label: "English",
    aria: "التبديل إلى الإنجليزية",
  },
  nav: {
    whatWeDo: "ماذا نقدّم",
    work: "أعمالنا",
    approach: "منهجيتنا",
    startProject: "ابدأ مشروعك",
  },
  hero: {
    badge: "استوديو برمجيات",
    titleLead: "نبني برمجيات",
    titleAccent: "مصمّمة على مقاسك.",
    body: "‏Customized Solutions استوديو منتجات. نصمّم البرمجيات ونطلقها من الألف إلى الياء — من أول فكرة إلى منتج حيّ على نطاقه الخاص. ومنصّة {mihna} للمواقع الاحترافية هي أولى ثمارها.",
    mihnaWord: "مهنة",
    ctaPrimary: "ابدأ مشروعك",
    ctaSecondary: "شاهد أعمالنا",
  },
  capabilities: [
    { value: "متكامل", note: "من الفكرة إلى الإطلاق" },
    { value: "عربي · إنجليزي", note: "ثنائي اللغة، يدعم RTL" },
    { value: "ملكيتك", note: "شيفرتك ونطاقك" },
    { value: "جاهز للتوسّع", note: "متعدّد المستأجرين منذ البداية" },
  ],
  what: {
    label: "// ماذا نقدّم",
    heading: "أربع طرق نحوّل بها الفكرة إلى منتج",
    items: [
      {
        n: "01",
        title: "تصميم المنتج",
        body: "نرسم التدفّقات والشاشات والهوية قبل كتابة أي سطر برمجي — ليبدو ما نبنيه مصمّماً لك خصيصاً، لا قالباً عاماً.",
      },
      {
        n: "02",
        title: "تطوير الويب والتطبيقات",
        body: "بناء حديث وسريع يراعي محرّكات البحث، مع مصادقة آمنة وتحقّق واختبارات — يعمل على بنية تحتية تبقى منخفضة التكلفة.",
      },
      {
        n: "03",
        title: "منصّات مخصّصة",
        body: "أنظمة متعدّدة المستأجرين ولوحات تحكّم وتنسيق حيّ — شيفرة واحدة تخدم عملاء كثيرين، لكلٍّ موقعه الخاص.",
      },
      {
        n: "04",
        title: "شراكة مستمرّة",
        body: "نستضيف منتجك ونصونه ونحافظ على أمنه — ونطوّره معك كلما نموت. وتبقى أنت المتحكّم من لوحة بسيطة.",
      },
    ],
  },
  work: {
    label: "// أعمالنا",
    heading: "منتجات بنيناها",
    intro: "بدأ كلٌّ منها بمشكلة تستحقّ الحل. نصمّمها ونبنيها ونشغّلها.",
    mihna: {
      live: "مباشر · malafpro.com",
      body: "مواقع احترافية ثنائية اللغة للمهنيين — أطباء ومحامون ومهندسون ومعلّمون وغيرهم. قوالب مخصّصة لكل مهنة، وحجوزات، وعملاء محتملون، ولوحة تحكّم بسيطة. منصّة متعدّدة المستأجرين تُطلق موقع عميل جديد خلال دقائق.",
      tags: ["متعدّد المستأجرين", "ثنائي اللغة · RTL", "تنسيق حيّ", "11 قالب مهنة"],
      visit: "زيارة مهنة",
    },
    next: {
      title: "منتجك التالي",
      body: "لديك فكرة تحتاج أن تصبح برمجيات حقيقية؟ هذا تحديداً ما نفعله. حدّثنا عنها.",
      cta: "ابدأ مشروعك",
    },
  },
  approach: {
    label: "// كيف نعمل",
    heading: "من محادثة إلى منتج حيّ",
    steps: [
      {
        n: "الخطوة 01",
        title: "نفهم",
        body: "نتعرّف على المشكلة والمستخدمين والقيود — ونتّفق على معنى «الإنجاز».",
      },
      {
        n: "الخطوة 02",
        title: "نصمّم ونبني",
        body: "تصميم مخصّص، ثم بناء سريع وآمن — يُسلَّم على دفعات تراها وتوجّهها.",
      },
      {
        n: "الخطوة 03",
        title: "نُطلق ونرعى",
        body: "ننطلق على نطاقك الخاص — ثم نستضيف ونصون ونطوّر معك.",
      },
    ],
  },
  cta: {
    heading: "لنبنِ شيئاً مصمّماً على مقاسك.",
    body: "أخبرنا بما تريد صنعه، وسنعود إليك بكيفية بنائه.",
    contact: "تواصل معنا",
    whatsapp: "واتساب",
  },
  footer: {
    portfolio: "معرض الأعمال",
    rights: "© 2026 Customized Solutions — برمجيات على مقاسك.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
