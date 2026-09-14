// Zentrales Datenmodul: Alle benoetigten named exports exakt hier definieren
// WICHTIG: Konsistente, identische Namen ueber alle Dateien hinweg verwenden.

export const brand = {
  logoText: "Nordlicht Digital",
};

export const colors = {
  primary: "#1E40AF", // Blau
  primaryDark: "#0F172A", // sehr dunkles Blau/Slate
  accent: "#F97316", // Orange Akzent
  neutralLight: "#F1F5F9", // sehr helles Grau/Slate-100
  neutral: "#94A3B8", // Slate-400
  white: "#FFFFFF",
  black: "#0B1220",
};

export const projectInfo = {
  name: "Nordlicht Digital",
  owner: "Lea Hartmann",
  tagline: "Performance-orientiertes Webdesign und SEO für ambitionierte Marken.",
  street: "Schulterblatt 88",
  zip: "20357",
  city: "Hamburg",
  country: "Deutschland",
  phone: "+49 40 12345678",
  email: "hallo@nordlicht-digital.de",
};

export const contact = {
  phone: projectInfo.phone,
  email: projectInfo.email,
  addressLines: [
    `${projectInfo.street}`,
    `${projectInfo.zip} ${projectInfo.city}`,
    `${projectInfo.country}`,
  ],
};

export const services = [
  {
    slug: "webdesign",
    title: "Webdesign & Development",
    excerpt:
      "Hochperformante Websites, die Marken präzise inszenieren und Leads messbar steigern.",
    bullets: [
      "Responsives Frontend mit Core-Web-Vitals-Fokus",
      "Astro + Tailwind für maximale Performance",
      "Komponentenbasierte Architektur, leicht erweiterbar",
    ],
  },
  {
    slug: "seo",
    title: "SEO & Content-Strategie",
    excerpt:
      "Strategische SEO mit sauberer Technik, starken Inhalten und nachhaltigen Rankings.",
    bullets: [
      "Technische Audits & Informationsarchitektur",
      "Keyword-Strategien und Content-Hubs",
      "Messung via Search Console & Analytics",
    ],
  },
  {
    slug: "performance",
    title: "Performance-Optimierung",
    excerpt:
      "Millisekunden statt Sekunden: wir holen das Maximum aus Ihrer Seite heraus.",
    bullets: [
      "Lighthouse & WebPageTest-basierte Analysen",
      "Code-Splitting, Bildoptimierung, Caching",
      "CLS/LCP/INP-Optimierung für reale Nutzer",
    ],
  },
  {
    slug: "ecommerce",
    title: "E‑Commerce & Shop",
    excerpt:
      "Konversionsstarke Storefronts mit klarer UX und performanter Technik.",
    bullets: [
      "Headless-Ansätze und schnelle Produktlisten",
      "Checkout-Optimierung & Trust-Elemente",
      "Tracking & Attribution korrekt aufgesetzt",
    ],
  },
  {
    slug: "content",
    title: "Content-Produktion",
    excerpt:
      "On-Brand Copy, Landingpages und Content-Assets, die wirken und konvertieren.",
    bullets: [
      "Tone-of-Voice Guidelines & Messaging",
      "Conversion-Copy für Landingpages",
      "Redaktionspläne & Content-Serien",
    ],
  },
  {
    slug: "ui-ux",
    title: "UX/UI-Design",
    excerpt:
      "Klar, konsistent, barrierearm: Interfaces, die Nutzer lieben und verstehen.",
    bullets: [
      "Design-Systeme & Komponentenbibliotheken",
      "User Flows, Wireframes, Prototyping",
      "Accessibility (WCAG) als Standard",
    ],
  },
];

export const sections = {
  hero: "top",
  services: "leistungen",
  about: "about",
  process: "process",
  contact: "kontakt",
};

export const nav = {
  items: [
    { label: "Start", href: "/" },
    { label: "Über uns", href: "/#about" },
    { label: "Prozess", href: "/#process" },
    { label: "Kontakt", href: "/#kontakt" },
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
};

export const legal = {
  companyName: projectInfo.name,
  owner: projectInfo.owner,
  address: {
    street: projectInfo.street,
    zip: projectInfo.zip,
    city: projectInfo.city,
    country: projectInfo.country,
  },
  contact: {
    phone: projectInfo.phone,
    email: projectInfo.email,
    website: "https://nordlicht-digital.de",
  },
  register: {
    type: "Handelsregister",
    court: "Amtsgericht Hamburg",
    number: "HRB 123456",
  },
  vatId: "DE123456789",
  supervisoryAuthority: "Handwerkskammer Hamburg",
  euDisputeResolutionUrl: "https://ec.europa.eu/consumers/odr",
  consumerDisputeBody:
    "Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
  impressumSections: [
    {
      title: "Haftung für Inhalte",
      paragraphs: [
        "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.",
        "Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
        "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.",
      ],
    },
    {
      title: "Haftung für Links",
      paragraphs: [
        "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.",
        "Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
        "Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.",
      ],
    },
    {
      title: "Urheberrecht",
      paragraphs: [
        "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.",
        "Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
      ],
    },
  ],
  privacyPolicy: [
    {
      title: "1. Verantwortlicher",
      paragraphs: [
        `${projectInfo.name}, ${projectInfo.owner}, ${projectInfo.street}, ${projectInfo.zip} ${projectInfo.city}, ${projectInfo.country}`,
        `Telefon: ${projectInfo.phone} · E-Mail: ${projectInfo.email}`,
      ],
    },
    {
      title: "2. Hosting",
      paragraphs: [
        "Diese Website wird bei einem externen Dienstleister gehostet (Vercel Inc.). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters verarbeitet.",
        "Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) sowie im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO).",
      ],
    },
    {
      title: "3. Server-Logfiles",
      paragraphs: [
        "Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Logfiles, die Ihr Browser automatisch übermittelt.",
        "Dies sind: Browsertyp und -version, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.",
        "Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.",
      ],
    },
    {
      title: "4. Cookies",
      paragraphs: [
        "Unsere Website verwendet nur technisch notwendige Cookies, soweit diese für den Betrieb erforderlich sind. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.",
      ],
    },
    {
      title: "5. Kontaktaufnahme",
      paragraphs: [
        "Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.",
        "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.",
      ],
    },
    {
      title: "6. Ihre Rechte",
      paragraphs: [
        "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten.",
        "Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.",
      ],
    },
    {
      title: "7. Stand",
      paragraphs: [
        "Diese Datenschutzerklärung hat den Stand September 2026 und wird bei Bedarf aktualisiert.",
      ],
    },
  ],
};
