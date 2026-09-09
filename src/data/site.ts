// Zentrale Site-Konfiguration – alle Seiten/Komponenten importieren NUR aus dieser Datei.
// WICHTIG: Nur named exports verwenden und Bezeichner konsistent halten.

export const brand = {
  logoText: "NEON & NOISE",
  colors: {
    primary: "#0F172A", // Tiefes Navy für Text/Heading
    secondary: "#1E293B", // Dunkler Sekundärton z.B. für Header/Footer-Hintergründe
    accent: "#C026D3", // Akzentfarbe für CTAs/Links
    highlight: "#06B6D4", // Sekundärer Akzent (Hover/Details)
    surface: "#FFFFFF", // Grundfläche (Weiß)
    muted: "#F1F5F9" // Zarte Flächen/Divider
  }
};

export const colors = brand.colors;

export const projectInfo = {
  name: "NEON & NOISE GmbH",
  owner: "Max Beispiel",
  tagline: "High-End Web Experiences, die messenbar performen.",
  street: "Beispielstraße 12",
  zip: "10115",
  city: "Berlin",
  country: "Deutschland",
  phone: "+49 30 1234567",
  email: "hello@neon-noise.de"
};

export const contact = {
  phone: projectInfo.phone,
  email: projectInfo.email,
  address: `${projectInfo.street}, ${projectInfo.zip} ${projectInfo.city}, ${projectInfo.country}`,
  availability: "Mo–Fr 9–18 Uhr",
  cta: "Projekt anfragen"
};

export const sections = {
  hero: "hero",
  leistungen: "leistungen",
  about: "ueber-uns",
  prozess: "prozess",
  kontakt: "kontakt"
};

export const services = [
  {
    name: "Webdesign",
    slug: "webdesign",
    id: "webdesign",
    excerpt: "Preisgekröntes Interface- und Visual-Design für Marken mit Ambition.",
    description: "Wir gestalten aus einer klaren Strategie heraus digitale Interfaces, die Marke und Conversion vereinen.",
    longDescription:
      "Unser Webdesign ist die Synthese aus Brand, Usability und messbarer Conversion. Wir denken modular, skalierbar und systemisch – für ein Design, das heute begeistert und morgen noch performt.",
    features: [
      "Design-Systeme & UI Libraries",
      "Responsive Komponentenmuster",
      "Accessible Color & Type Scales",
      "Motion & Microinteractions"
    ],
    benefits: [
      "Markenkonsistenz über alle Touchpoints",
      "Klarheit, Fokus und bessere Nutzbarkeit",
      "Höhere Conversion und geringere Bounce-Rates"
    ]
  },
  {
    name: "Webentwicklung",
    slug: "webentwicklung",
    id: "webentwicklung",
    excerpt: "Astro, React & Tailwind – ultraschnell, wartbar und SEO-stark.",
    description: "Wir entwickeln statische und hybride Frontends mit modernem Stack und Fokus auf Core Web Vitals.",
    longDescription:
      "Unsere Frontend-Architektur ist auf Performance, Barrierefreiheit und Wartbarkeit ausgelegt. Sauberer Code, sinnvolle Abstraktionen und ein Build, der unter Last Bestand hat.",
    features: [
      "Astro Islands & Partial Hydration",
      "TypeScript-first Codebase",
      "CI/CD & Preview Deployments",
      "Headless CMS Anbindung"
    ],
    benefits: [
      "Ladezeiten im grünen Bereich",
      "Skalierbarkeit ohne Tech-Schulden",
      "Stabile Deployments und kurze Time-to-Market"
    ]
  },
  {
    name: "SEO",
    slug: "seo",
    id: "seo",
    excerpt: "Technik, Content und Authority – ganzheitlich, nachhaltig, transparent.",
    description: "Wir optimieren Struktur, Content und Performance für organisches Wachstum und stabile Rankings.",
    longDescription:
      "SEO ist ein System. Wir verbinden technische Exzellenz mit suchintentionstauglichem Content und messbarer Erfolgskontrolle. Kein Voodoo – nur konsequente, nachhaltige Optimierung.",
    features: [
      "Technisches SEO & CWV-Optimierung",
      "Keyword-Strategie & Content-Hubs",
      "Schema.org & Rich Snippets",
      "Monitoring & Reporting"
    ],
    benefits: [
      "Bessere Sichtbarkeit und Reichweite",
      "Qualifizierter Traffic statt Vanity-Metriken",
      "Langfristig niedrigere Akquisekosten"
    ]
  },
  {
    name: "Content & Copy",
    slug: "content",
    id: "content",
    excerpt: "Story, Struktur, Substance – Content, der informiert und konvertiert.",
    description: "Editorial Workflows, UX Writing und suchmaschinenfähige Texte aus einem Guss.",
    longDescription:
      "Wir entwickeln Content, der Zielgruppen entlang ihrer Journey führt. Klar, präzise und im Ton Ihrer Marke – für Vertrauen, Verständnis und Conversion.",
    features: [
      "Informationsarchitektur & UX Copy",
      "Tone-of-Voice Guidelines",
      "Redaktion & Lektorat",
      "Content Operations"
    ],
    benefits: [
      "Konsistente Markenstimme",
      "Besseres Verständnis komplexer Produkte",
      "Mehr Leads durch klare Botschaften"
    ]
  },
  {
    name: "Performance-Optimierung",
    slug: "performance",
    id: "performance",
    excerpt: "Millisekunden zählen – wir holen das Maximum aus Ihrem Frontend.",
    description: "Analyse, Audits und Maßnahmenplan für messbar schnellere Ladezeiten.",
    longDescription:
      "Wir messen, analysieren und optimieren. Von Bildpipelines über Code-Splitting bis hin zu Caching-Strategien – für ein spürbar schnelleres Erlebnis.",
    features: [
      "Core Web Vitals Audit",
      "Code-Splitting & Lazy Hydration",
      "Asset-Pipelines & Caching",
      "Monitoring & Alerting"
    ],
    benefits: [
      "Bessere Rankings & Conversion",
      "Weniger Abbrüche auf Mobilgeräten",
      "Stabile Performance unter Last"
    ]
  },
  {
    name: "UX & UI Audit",
    slug: "ux-ui-audit",
    id: "ux-ui-audit",
    excerpt: "Frischer Blick, klare Befunde – Prioritäten statt Bauchgefühl.",
    description: "Heuristische Evaluation, Nutzertests und klare Handlungsempfehlungen.",
    longDescription:
      "Wir identifizieren Reibungen in Flows, Informationsarchitektur und Interaktionsmustern – priorisiert nach Impact und Aufwand, direkt umsetzbar.",
    features: [
      "Heuristische Evaluation",
      "Remote-Usertests",
      "Analytics-Review",
      "Roadmap mit Quick Wins"
    ],
    benefits: [
      "Höhere Task-Erfolgsraten",
      "Weniger Supportaufwand",
      "Fundierte Roadmap statt Zufallsoptimierung"
    ]
  }
];

export const nav = {
  main: [
    { label: "Home", href: "/" },
    { label: "Leistungen", href: `/#${sections.leistungen}` },
    { label: "Über uns", href: `/#${sections.about}` },
    { label: "Prozess", href: `/#${sections.prozess}` },
    { label: "Kontakt", href: `/#${sections.kontakt}` },
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" }
  ],
  services: services.map((s) => ({ label: s.name, href: `/leistungen/${s.slug}` }))
};

export const legal = {
  imprint: {
    company: projectInfo.name,
    legalForm: "Gesellschaft mit beschränkter Haftung (GmbH)",
    representedBy: projectInfo.owner,
    registeredOffice: `${projectInfo.zip} ${projectInfo.city}`,
    commercialRegister: {
      court: "Amtsgericht Berlin (Charlottenburg)",
      number: "HRB 123456 B"
    },
    vatId: "DE123456789",
    contact: {
      phone: projectInfo.phone,
      email: projectInfo.email
    },
    address: {
      street: projectInfo.street,
      zip: projectInfo.zip,
      city: projectInfo.city,
      country: projectInfo.country
    },
    disclaimer: {
      content: "Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.",
      links: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.",
      copyright: "Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
      dispute: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum."
    }
  },
  privacy: {
    responsible: {
      name: projectInfo.name,
      representative: projectInfo.owner,
      address: `${projectInfo.street}, ${projectInfo.zip} ${projectInfo.city}, ${projectInfo.country}`,
      contact: `${projectInfo.email}, Tel. ${projectInfo.phone}`
    },
    hosting: {
      provider: "Vercel Inc.",
      note: "Hosting über Vercel. Es können personenbezogene Daten (z.B. IP-Adressen) in Drittländer übermittelt werden. Es wurden Standardvertragsklauseln abgeschlossen.",
      dpa: "Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO vorhanden."
    },
    serverLogs: "Bei jedem Zugriff werden automatisch Server-Logfiles erfasst (IP-Adresse, Datum/Uhrzeit, Browser, Referrer, Anfrage-URL). Die Speicherung erfolgt aus Sicherheitsgründen und zur Fehleranalyse für max. 30 Tage.",
    cookies: "Diese Website verwendet primär technisch notwendige Cookies. Sofern optionale Cookies/Tracking eingesetzt werden, holen wir vorab Ihre Einwilligung ein (Art. 6 Abs. 1 lit. a DSGVO).",
    analytics: "Sofern Webanalyse-Tools eingesetzt werden, erfolgt dies mit IP-Anonymisierung und auf Basis Ihrer Einwilligung. Details (Anbieter, Speicherdauer, Widerruf) werden hier transparent aufgeführt.",
    dataSubjectsRights: [
      "Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und Datenübertragbarkeit",
      "Recht auf Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft",
      "Recht auf Beschwerde bei einer Aufsichtsbehörde"
    ],
    processorList: [
      "Hosting: Vercel Inc.",
      "CI/CD & Repo: GitHub, Inc."
    ],
    contactForPrivacy: projectInfo.email,
    lastUpdated: "01.09.2026"
  }
};
