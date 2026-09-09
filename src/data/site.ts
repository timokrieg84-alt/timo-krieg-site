// Zentrale Site-Konfiguration (Golden Source)
// HINWEIS: Alle Komponenten/Seiten importieren ausschliesslich benannte Exporte aus dieser Datei.

export const projectInfo = {
  name: "Pixelkraft Digital GmbH",
  owner: "Pixelkraft Digital GmbH",
  tagline: "High-End Websites, die performen und konvertieren.",
  street: "Schulterblatt 55",
  zip: "20357",
  city: "Hamburg",
  country: "Deutschland",
  phone: "+49 40 1234567",
  email: "hallo@pixelkraft.digital",
};

export const brand = {
  logoText: "Pixelkraft",
  slogan: "Exzellentes Frontend. Messbarer Impact.",
  colors: {
    primary: "#0B1221", // Tiefes Navy für Texte/Header
    primaryContrast: "#FFFFFF", // Kontrast auf dunklem Grund
    accent: "#0EA5E9", // Akzent (Links/Buttons)
    accent2: "#F59E0B", // Zweitakzent (Highlights)
    muted: "#64748B", // Sekundärtext
    surface: "#F8FAFC", // Flächen/Hintergründe
    border: "#E2E8F0", // Linien/Divider
    background: "#FFFFFF", // Page-Background
  },
};

// Alias, damit Farben bequem importiert werden koennen
export const colors = brand.colors;

export const contact = {
  email: projectInfo.email,
  phone: projectInfo.phone,
  addressHtml: `${projectInfo.name}<br>${projectInfo.street}<br>${projectInfo.zip} ${projectInfo.city}`,
};

export const services = [
  {
    id: "webdesign",
    slug: "webdesign",
    title: "Webdesign & UI/UX",
    excerpt:
      "Preisgekrönte Interfaces, die Markencharakter und Conversion vereinen.",
    benefits: [
      "Designsysteme mit klarer Typografie und Premium-Ästhetik",
      "Responsiv bis ins Detail – Mobile First, Desktop perfekt",
      "Barrierearme Komponenten und saubere Semantik",
      "Prototyping & Usability-Tests vor dem Go-Live",
    ],
    href: "/leistungen/webdesign",
  },
  {
    id: "seo",
    slug: "seo",
    title: "SEO-Optimierung",
    excerpt:
      "Technisches SEO, Content-Architektur und Performance für Top-Rankings.",
    benefits: [
      "Clean HTML, strukturierte Daten und Indexierbarkeit",
      "Keyword-Mapping und Informationsarchitektur",
      "PageSpeed-Optimierung & CWV-Verbesserungen",
      "Monitoring & kontinuierliche Iteration",
    ],
    href: "/leistungen/seo",
  },
  {
    id: "performance",
    slug: "performance",
    title: "Performance & Core Web Vitals",
    excerpt:
      "Millisekunden zählen: Lighthouse 95+ durch moderne Bundling-Strategien.",
    benefits: [
      "Code-Splitting, Hydration-Strategien, Edge Caching",
      "Bildoptimierung, Fonts und kritisches CSS",
      "Messung mit RUM-Daten statt nur Lab-Traffic",
      "Webworker, Preload/Prefetch und HTTP/2 Push Patterns",
    ],
    href: "/leistungen/performance",
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    title: "Headless E‑Commerce",
    excerpt:
      "Schnelle, skalierende Commerce-Erlebnisse mit Headless-Architektur.",
    benefits: [
      "Storefronts mit Astro/Next auf Headless-Backends",
      "API-first Integrationen (PIM, DAM, Checkout, Search)",
      "A/B-Testing, Merchandising & Personalisierung",
      "SEO-fähige Kategorieseiten und Facettennavigation",
    ],
    href: "/leistungen/ecommerce",
  },
  {
    id: "content",
    slug: "content",
    title: "Content & Redaktion",
    excerpt:
      "Content-Design, das informiert, überzeugt und gefunden wird.",
    benefits: [
      "Content-Strategie und Redaktionsprozesse",
      "UX Writing, Mikrocopy und Tonalität",
      "CMS-Workflows (Headless/Markdown) und Governance",
      "Lokalisierung & Terminologie-Management",
    ],
    href: "/leistungen/content",
  },
  {
    id: "analytics",
    slug: "analytics",
    title: "Analytics & Tracking",
    excerpt:
      "Datenschutzkonformes Tracking und KPI-Frameworks für Wachstum.",
    benefits: [
      "GA4/Server-Side-Tracking & Consent-Strategien",
      "Event-Taxonomie und Data-Layer-Design",
      "Dashboards, Attribution & Experimentation",
      "Privacy-by-Design und Dokumentation",
    ],
    href: "/leistungen/analytics",
  },
] as const;

export const sections = {
  heroId: "hero",
  servicesId: "leistungen",
  aboutId: "about",
  processId: "process",
  contactId: "contact",
  hero: {
    headline: "Websites, die Eindruck machen und Umsatz schaffen.",
    subline:
      "Wir entwerfen und entwickeln High-End Frontends mit Astro und Tailwind – ultraschnell, präzise, markenkonform.",
    primaryCta: { label: "Projekt anfragen", href: "#contact" },
    secondaryCta: { label: "Leistungen ansehen", href: "#leistungen" },
  },
  about: {
    title: "Über uns",
    text:
      "Wir sind eine fokussierte, seniorige Frontend-Agentur. Design, UX und Technik greifen bei uns nahtlos ineinander. Unser Anspruch: Reibungslose User Journeys, makelloser Code und sichtbarer Business-Impact.",
  },
  process: {
    title: "Unser Prozess",
    steps: [
      {
        title: "Discovery",
        text: "Ziele, Nutzerbedürfnisse und Markenleitplanken präzise verstehen.",
      },
      {
        title: "Design",
        text: "Systematisches UI mit Komponenten, States und Barrierefreiheit.",
      },
      {
        title: "Build",
        text: "Astro-Komponenten, saubere Semantik und Performance by Default.",
      },
      {
        title: "Launch & Learn",
        text: "Stabile Deployments, Monitoring und datengetriebene Iteration.",
      },
    ],
  },
  contact: {
    title: "Kontakt",
    text:
      "Erzählen Sie uns kurz von Ihrem Vorhaben – wir melden uns innerhalb von 24 Stunden mit einer ersten Einschätzung.",
  },
} as const;

export const nav = {
  main: [
    { label: "Start", href: "/" },
    { label: "Leistungen", href: "/#leistungen" },
    { label: "Über uns", href: "/#about" },
    { label: "Prozess", href: "/#process" },
    { label: "Kontakt", href: "/#contact" },
  ],
  serviceAnchors: services.map((s) => ({ label: s.title, href: `/#${s.id}` })),
  servicePages: services.map((s) => ({ label: s.title, href: s.href })),
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
} as const;

export const legal = {
  impressum: `
    <h1>Impressum</h1>
    <p><strong>${projectInfo.name}</strong><br>${projectInfo.street}<br>${projectInfo.zip} ${projectInfo.city}<br>${projectInfo.country}</p>
    <p>Telefon: ${projectInfo.phone}<br>E-Mail: <a href="mailto:${projectInfo.email}">${projectInfo.email}</a></p>
    <p>Vertreten durch die Geschäftsführung: ${projectInfo.owner}</p>
    <p>Handelsregister: Amtsgericht Hamburg, HRB 999999<br>USt-IdNr.: DE999999999</p>
    <h2>Haftung für Inhalte</h2>
    <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
    <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
    <h2>Haftung für Links</h2>
    <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
    <h2>Urheberrecht</h2>
    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
    <h2>EU-Streitschlichtung</h2>
    <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" rel="nofollow noopener" target="_blank">ec.europa.eu/consumers/odr</a>.</p>
  `,
  datenschutz: `
    <h1>Datenschutzerklärung</h1>
    <p>Wir freuen uns über Ihr Interesse an unserem Online-Angebot. Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen.</p>
    <h2>Verantwortlicher</h2>
    <p>${projectInfo.name}<br>${projectInfo.street}<br>${projectInfo.zip} ${projectInfo.city}<br>E-Mail: <a href="mailto:${projectInfo.email}">${projectInfo.email}</a></p>
    <h2>Zugriffsdaten/Server-Logfiles</h2>
    <p>Wir (beziehungsweise unser Webspace-Provider) erheben Daten über jeden Zugriff auf das Angebot (so genannte Serverlogfiles). Zu den Zugriffsdaten gehören Name der abgerufenen Webseite, Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL, IP-Adresse und der anfragende Provider. Wir verwenden die Protokolldaten nur für statistische Auswertungen zum Zweck des Betriebs, der Sicherheit und der Optimierung des Angebotes.</p>
    <h2>Reichweitenmessung & Cookies</h2>
    <p>Dieses Angebot verwendet Cookies zur pseudonymisierten Reichweitenmessung, die entweder von unserem Server oder dem Server Dritter an den Browser des Nutzers übertragen werden. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
    <h2>Einbindung von Diensten und Inhalten Dritter</h2>
    <p>Es kann vorkommen, dass innerhalb dieses Onlineangebotes Inhalte Dritter, wie zum Beispiel Videos, Kartenmaterial, RSS-Feeds oder Grafiken von anderen Webseiten eingebunden werden. Dies setzt immer voraus, dass die Anbieter dieser Inhalte die IP-Adresse der Nutzer wahrnehmen. Ohne die IP-Adresse könnten sie die Inhalte nicht an den Browser des jeweiligen Nutzers senden.</p>
    <h2>Rechte der Nutzer</h2>
    <p>Nutzer haben das Recht, auf Antrag unentgeltlich Auskunft zu erhalten über die personenbezogenen Daten, die über sie gespeichert wurden. Zusätzlich haben Nutzer das Recht auf Berichtigung unrichtiger Daten, Einschränkung der Verarbeitung und Löschung ihrer personenbezogenen Daten, soweit dem keine gesetzliche Aufbewahrungspflicht entgegensteht.</p>
    <h2>Kontakt</h2>
    <p>Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten sowie bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an uns: <a href="mailto:${projectInfo.email}">${projectInfo.email}</a>.</p>
  `,
} as const;
