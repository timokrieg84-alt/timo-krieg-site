// Zentrale Site-Konfiguration für ListingProfis GmbH
// WICHTIG: Alle Importe in den Seiten/Layouts greifen ausschließlich auf die hier definierten named exports zu.

export const colors = {
  primary: '#0B1220', // Tiefes Nachtblau für Header/Footer/Hero
  secondary: '#1B2A4A', // Abgesetztes Blau für Flächen/Hover
  accent: '#22D3EE', // Akzent/Cyan für CTAs & Links
  highlight: '#F59E0B', // Highlight/Amber für Badges
  muted: '#94A3B8', // Dezentes Grau für Meta/Lines
  light: '#F8FAFC', // Sehr hell für Hintergründe
  dark: '#05070E', // Fast schwarz für Kontrast
} as const;

export const brand = {
  name: 'ListingProfis GmbH',
  logoText: 'ListingProfis',
  colors,
  domain: 'listingprofis.de',
  tagline: 'Sichtbarkeit, die verkauft.'
} as const;

export const contact = {
  phone: '07154 8047800',
  email: 'info@listingprofis.de',
  street: 'Bahnhofstraße 5',
  zip: '70806',
  city: 'Kornwestheim',
  country: 'Deutschland',
  openingHours: 'Montag–Freitag 09:00–16:00 Uhr (Samstag & Sonntag geschlossen)'
} as const;

export const projectInfo = {
  name: brand.name,
  owner: 'ListingProfis GmbH',
  tagline: brand.tagline,
  street: contact.street,
  zip: contact.zip,
  city: contact.city,
  country: contact.country,
  phone: contact.phone,
  email: contact.email,
} as const;

export const services = [
  {
    title: 'SEO & Local SEO',
    slug: 'seo',
    short: 'Ganzheitliches SEO: Technik, Content, Backlinks. Plus lokale Sichtbarkeit über Google Business & Branchenportale.',
    features: [
      'Technisches SEO-Audit & Fixes',
      'Content-Strategie & Redaktionsplan',
      'Linkaufbau & Digital PR',
      'Google Business Profil Optimierung',
      'Listing-Management in 30+ Portalen'
    ],
    seo: {
      title: 'SEO & Local SEO | ListingProfis GmbH',
      description: 'Nachhaltige Rankings durch Technik, Content und Backlinks. Lokale Sichtbarkeit via Google Business und über 30 Branchenportale.',
      keywords: 'SEO, Local SEO, Google Business, Branchenportale, Linkaufbau, Content SEO'
    }
  },
  {
    title: 'Google Ads',
    slug: 'google-ads',
    short: 'Performance-getriebene Kampagnen in Search, Performance Max und YouTube. Conversion Tracking inklusive.',
    features: [
      'Search & Performance Max Kampagnen',
      'YouTube Ads & Remarketing',
      'Conversion-Tracking & Attributionsanalyse',
      'A/B-Tests und Landingpages'
    ],
    seo: {
      title: 'Google Ads Agentur | ListingProfis GmbH',
      description: 'Skalierbare Google Ads mit klarem Performance-Fokus. Tracking, Testing und Landingpages aus einem Guss.',
      keywords: 'Google Ads, Performance Max, YouTube Ads, SEA, Conversion Tracking'
    }
  },
  {
    title: 'SEO-Regio',
    slug: 'seo-regio',
    short: 'Umland-Dominanz: 50 eigenständige Ortschaften-Seiten für regionale Suchanfragen – Hauptdomain bleibt unberührt.',
    features: [
      'Skalierbare Ortschaften-Websites (50+)',
      'Individueller Content je Ort',
      'Technische Trennung zur Hauptseite',
      'Lokale Signale & Citations'
    ],
    seo: {
      title: 'SEO-Regio: Regionale Dominanz | ListingProfis GmbH',
      description: 'Regionale Sichtbarkeit mit eigenständigen Ortschaften-Seiten. Individueller Content, starke lokale Signale.',
      keywords: 'Local SEO, Ortschaften, regionale Sichtbarkeit, Citations'
    }
  },
  {
    title: 'GEO – Generative Engine Optimization',
    slug: 'geo',
    short: 'Optimierung für ChatGPT, Perplexity & Google AI Overviews: Entity-SEO, LLM-Crawling & Citation-Ready Content.',
    features: [
      'Entity-SEO & Knowledge-Graph-Aufbau',
      'LLM-Crawling & Prompt-Indexing',
      'Strukturierte Daten & Quellenfähigkeit',
      'Antwortformate für AI Overviews'
    ],
    seo: {
      title: 'GEO – Generative Engine Optimization | ListingProfis GmbH',
      description: 'Sichtbarkeit in generativen Antworten: Entity-SEO, strukturierte Daten und zitierfähiger Content für LLMs.',
      keywords: 'GEO, Generative Engine Optimization, AI Overviews, Entity SEO, LLM SEO'
    }
  },
  {
    title: 'Webdesign & E-Commerce',
    slug: 'webdesign-ecommerce',
    short: 'Ultraschnelle Websites & Shops: Custom Design, Next.js/WordPress, Core Web Vitals & CRO.',
    features: [
      'UX-Konzept & Prototyping',
      'Headless/Next.js & WordPress',
      'Core Web Vitals & Performance',
      'CRO & A/B-Testing'
    ],
    seo: {
      title: 'Webdesign & E‑Commerce | ListingProfis GmbH',
      description: 'Konversionsstarke Websites & Shops mit exzellenten Core Web Vitals. Design, Development und CRO aus einer Hand.',
      keywords: 'Webdesign, E-Commerce, Core Web Vitals, CRO, Next.js, WordPress'
    }
  },
  {
    title: 'AI & Automation',
    slug: 'ai-automation',
    short: 'Prozessautomatisierung mit Custom AI Agents, LLM-Integration & Chatbots.',
    features: [
      'Individuelle AI Agents & Tools',
      'LLM-Integration in Prozesse',
      'RAG, Vektor-Suche & Datenpipelines',
      'Chatbots & Support-Automation'
    ],
    seo: {
      title: 'AI & Automation | ListingProfis GmbH',
      description: 'Automatisieren Sie Marketing und Support mit maßgeschneiderten AI Agents, LLM-Integrationen und Chatbots.',
      keywords: 'AI, Automation, LLM, Chatbots, RAG, Vektorsuche'
    }
  },
  {
    title: 'Online-Terminbuchung',
    slug: 'online-terminbuchung',
    short: 'Schnittstellen & Echtzeit-API-Anbindung – z. B. Jameda & Doctolib Integration.',
    features: [
      'Jameda & Doctolib Integration',
      'Realtime-APIs & Synchronisation',
      'Kalender- und Ressourcen-Logik',
      'Reminder & No-Show-Reduktion'
    ],
    seo: {
      title: 'Online‑Terminbuchung | ListingProfis GmbH',
      description: 'Nahtlose Online-Terminbuchung mit Echtzeit-APIs und Schnittstellen. Ideal für Praxen und Dienstleister.',
      keywords: 'Online-Termin, Doctolib, Jameda, API, Kalender'
    }
  },
  {
    title: 'Reputation & Bewertungen',
    slug: 'reputation-bewertungen',
    short: 'Automatisiertes 5‑Sterne‑System, Review‑Monitoring & Antwort‑Management.',
    features: [
      'Bewertungs-Automation & Anfragen',
      'Monitoring & Alerts',
      'Antwort-Templates & Eskalation',
      'Widget-Integration auf Website'
    ],
    seo: {
      title: 'Reputation & Bewertungen | ListingProfis GmbH',
      description: 'Mehr 5‑Sterne‑Bewertungen durch Automation, Monitoring und professionelles Antwort‑Management.',
      keywords: 'Reputation, Bewertungen, Reviews, Monitoring, Sterne'
    }
  },
  {
    title: 'Social Media',
    slug: 'social-media',
    short: 'Content-Produktion, Community-Management & Paid Social – aus einer Hand.',
    features: [
      'Redaktion & Content-Produktion',
      'Community-Management',
      'Paid Social & Funnels',
      'Social Analytics'
    ],
    seo: {
      title: 'Social Media Marketing | ListingProfis GmbH',
      description: 'Von Content bis Paid Social: Social Media, das Reichweite in Kunden verwandelt.',
      keywords: 'Social Media, Content, Paid Social, Community Management'
    }
  },
  {
    title: 'Premium-Fotografie & Image-Videos',
    slug: 'premium-fotografie-image-videos',
    short: 'Businessfotos vor Ort, 4K/8K Recruiting-Videos & lizenzierte Drohnenaufnahmen.',
    features: [
      'On-Location Business-Fotografie',
      '4K/8K Video & Schnitt',
      'Drohnenaufnahmen (lizenziert)',
      'Brand-Story & Script'
    ],
    seo: {
      title: 'Premium‑Fotografie & Image‑Videos | ListingProfis GmbH',
      description: 'Starke Bilder, die verkaufen: Businessfotografie, Imagefilme und Drohnenaufnahmen in Premium‑Qualität.',
      keywords: 'Fotografie, Imagefilm, Drohne, Recruiting-Video'
    }
  },
  {
    title: 'Branding',
    slug: 'branding',
    short: 'Brand Strategy, Visual Identity, Logo & Design Systems.',
    features: [
      'Markenworkshop & Positionierung',
      'Visuelle Identität & Logo',
      'Design System & Guidelines',
      'Go‑Live‑Assets'
    ],
    seo: {
      title: 'Branding & Markenaufbau | ListingProfis GmbH',
      description: 'Markenstrategie, visuelle Identität und skalierbare Design‑Systeme für nachhaltige Differenzierung.',
      keywords: 'Branding, Markenstrategie, Corporate Design, Logo'
    }
  },
  {
    title: 'Praxis-TV (Exklusiv für Mediziner)',
    slug: 'praxis-tv',
    short: 'Wartezimmer-TV zur Aufklärung & Bewerbung von Wunschleistungen (IGeL).',
    features: [
      'Content-Programmierung & Redaktion',
      'Hardware-Setup & Betrieb',
      'IGeL‑Leistungen promoten',
      'Compliance & Datenschutz'
    ],
    seo: {
      title: 'Praxis‑TV für Mediziner | ListingProfis GmbH',
      description: 'Wartezimmer-TV mit aufklärenden Inhalten und IGeL‑Promotions – rechtssicher und patientenfreundlich.',
      keywords: 'Praxis TV, Wartezimmer, IGeL, Medizin Marketing'
    }
  },
  {
    title: 'Code-Exzellenz & Programmierung',
    slug: 'code-exzellenz-programmierung',
    short: 'Individuelle Software, API‑Schnittstellen, CRM‑Verknüpfung & Code‑Audits.',
    features: [
      'Individuelle Web‑Apps & Tools',
      'API‑Design & Integrationen',
      'CRM‑Verknüpfungen',
      'Code‑Reviews & Audits'
    ],
    seo: {
      title: 'Code‑Exzellenz & Programmierung | ListingProfis GmbH',
      description: 'Robuste Softwarelösungen, saubere APIs und Code‑Audits – Qualität, die skaliert.',
      keywords: 'Programmierung, API, CRM, Code Audit'
    }
  },
  {
    title: 'Premium-Factoring',
    slug: 'premium-factoring',
    short: 'Sofortige Liquidität für B2B‑Forderungen (Auszahlung in 24–48h) mit 100% Ausfallschutz.',
    features: [
      'Schnelle Auszahlung 24–48h',
      '100% Ausfallschutz',
      'Bonitätsprüfung & Debitorenmanagement',
      'Transparente Konditionen'
    ],
    seo: {
      title: 'Premium‑Factoring | ListingProfis GmbH',
      description: 'Liquidität ohne Wartezeit: Factoring für B2B‑Forderungen mit vollständigem Ausfallschutz.',
      keywords: 'Factoring, Liquidität, Ausfallschutz, B2B'
    }
  }
] as const;

export const sections = {
  hero: {
    headline: 'Performance‑Marketing, das in Umsatz messbar ist.',
    subheadline: 'SEO, Ads, GEO & Web – mit Premium‑Content, Automatisierung und exzellenter Technik.',
    ctaPrimary: { label: 'Kostenloses Erstgespräch', href: '#kontakt' },
    ctaSecondary: { label: 'Leistungen entdecken', href: '#leistungen' }
  },
  about: {
    id: 'ueber-uns',
    title: 'Über ListingProfis',
    text: 'Wir sind Ihre Sparringspartner für digitale Sichtbarkeit: tief technisch, kreativ im Content und kompromisslos in der Performance. Unsere Lösungen verbinden Strategie, Exekution und Automatisierung – für nachhaltiges Wachstum.',
  },
  process: {
    id: 'prozess',
    title: 'So arbeiten wir',
    steps: [
      { title: 'Audit & Strategie', text: 'Messbarer Status‑quo, klare Zielarchitektur und Roadmap.' },
      { title: 'Setup & Quick Wins', text: 'Technik-Fixes, Tracking, Kampagnen und Content‑Grundlagen.' },
      { title: 'Scale & Automate', text: 'Systematische Skalierung, Testing und Automatisierung.' }
    ]
  },
  contact: {
    id: 'kontakt',
    title: 'Sprechen wir über Ihre Ziele',
    text: 'Ob Lead‑Generierung, E‑Commerce oder regionale Dominanz – wir zeigen in 30 Minuten auf, wie Sie planbar wachsen.',
  }
} as const;

export const nav = {
  main: [
    { label: 'Start', href: '/' },
    { label: 'Leistungen', href: '/#leistungen' },
    { label: 'Über uns', href: '/#ueber-uns' },
    { label: 'Prozess', href: '/#prozess' },
    { label: 'Kontakt', href: '/#kontakt' },
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' }
  ]
} as const;

export const legal = {
  impressum: {
    company: brand.name,
    street: contact.street,
    zip: contact.zip,
    city: contact.city,
    country: contact.country,
    phone: contact.phone,
    email: contact.email,
    representative: 'Geschäftsführung: Angaben folgen',
    register: 'Handelsregister: Angaben folgen',
    vatId: 'USt‑IdNr.: Angaben folgen',
    responsibility: 'Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV: ListingProfis GmbH',
  },
  privacy: {
    controller: brand.name,
    address: `${contact.street}, ${contact.zip} ${contact.city}, ${contact.country}`,
    email: contact.email,
    phone: contact.phone,
    scope: 'Diese Datenschutzerklärung informiert über die Verarbeitung personenbezogener Daten beim Besuch dieser Website.',
    hosting: 'Das Hosting erfolgt bei einem europäischen Anbieter. Es werden Server‑Logfiles (IP‑Adresse gekürzt, Datum/Uhrzeit, Referrer, User‑Agent) zur Sicherstellung des Betriebs erhoben und nach 30 Tagen gelöscht.',
    cookies: 'Wir verwenden ausschließlich technisch notwendige Cookies, um die Website bereitzustellen. Eine Verarbeitung zu Werbezwecken findet nicht statt.',
    analytics: 'Es kommt keine externe Webanalyse zum Einsatz. Es werden nur aggregierte, nicht‑personalisierte Zugriffsdaten verarbeitet.',
    contactForms: 'Bei Kontaktaufnahme (Telefon, E‑Mail) verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.',
    rights: 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch. Zudem besteht ein Beschwerderecht bei einer Aufsichtsbehörde.',
    dpo: 'Ein Datenschutzbeauftragter ist nicht bestellt, da keine gesetzliche Pflicht besteht.',
    updates: 'Wir passen diese Datenschutzerklärung an, sobald Änderungen der Datenverarbeitung dies erforderlich machen.'
  }
} as const;
