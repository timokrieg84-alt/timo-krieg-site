// Zentrale Site-Konfiguration (einzige Datenquelle). Alle Komponenten/Seiten importieren NUR benannte Exporte aus dieser Datei.
// WICHTIG: Exporte exakt wie gefordert benannt lassen (brand, colors, contact, projectInfo, nav, services, sections, legal).

export const projectInfo = {
  name: "Nordlicht Digital",
  owner: "Nordlicht Digital GmbH",
  tagline: "High-End Websites, die performen und verkaufen",
  street: "Alstertor 9",
  zip: "20095",
  city: "Hamburg",
  country: "Deutschland",
  phone: "+49 40 1234567",
  email: "hallo@nordlicht-digital.de",
};

export const colors = {
  primary: "#0A84FF",      // Königsblau
  secondary: "#0F172A",    // Tiefes Navy
  accent: "#F59E0B",       // Premium-Gold/Orange
  highlight: "#10B981",    // Smaragd (Signals)
  dark: "#111827",         // Fast-Schwarz
  light: "#F8FAFC",        // Fast-Weiß
  muted: "#E5E7EB",        // Linien/Border
  ink: "#1F2937",          // Lesetext
};

export const brand = {
  logoText: "Nordlicht Digital",
  colors,
};

export const contact = {
  headline: "Lassen Sie uns Ihr nächstes Kapitel schreiben.",
  subline: "Kostenlose Erstberatung innerhalb von 24 Stunden.",
  phone: projectInfo.phone,
  email: projectInfo.email,
  address: `${projectInfo.street}, ${projectInfo.zip} ${projectInfo.city}`,
};

export const services = [
  {
    name: "Webdesign & Development",
    slug: "webdesign",
    anchor: "webdesign",
    teaser: "Pixelperfekte, schnelle Websites auf Enterprise-Niveau – mit Astro und Tailwind.",
    description:
      "Wir konzipieren und entwickeln maßgeschneiderte Websites, die Marken schärfen und Umsätze steigern. Technisch modern, suchmaschinenfreundlich und kompromisslos schnell.",
    benefits: [
      "Astro für maximale Performance und Core Web Vitals",
      "Barrierearme, zugängliche UI-Komponenten",
      "Headless- und CMS-Integrationen nach Bedarf",
    ],
    process: ["Discovery & UX", "Design System", "Entwicklung", "QA & Launch"],
    faqs: [
      { q: "Wie lange dauert ein Projekt?", a: "Je nach Umfang 4–12 Wochen. Wir arbeiten iterativ und transparent." },
      { q: "Bieten Sie Wartung an?", a: "Ja, mit klaren SLAs inklusive Monitoring und Security-Updates." },
    ],
    related: ["seo", "performance", "branding", "content", "ecommerce"],
  },
  {
    name: "SEO & Content-Strategie",
    slug: "seo",
    anchor: "seo",
    teaser: "Nachhaltiges Wachstum durch technische Exzellenz und suchrelevanten Content.",
    description:
      "Wir verbinden technische SEO mit Content-Strategie. So erzielen Sie stabile Rankings, mehr Sichtbarkeit und planbaren Traffic.",
    benefits: [
      "Technisches Audit & Quick Wins",
      "Informationsarchitektur & Keyword-Map",
      "Content-Guidelines & Redaktionsplan",
    ],
    process: ["Audit", "IA & Keywords", "OnPage-Fixes", "Content & Monitoring"],
    faqs: [
      { q: "Wann sehe ich Ergebnisse?", a: "Erste Verbesserungen oft in 4–8 Wochen, nachhaltige Effekte in 3–6 Monaten." },
      { q: "Arbeiten Sie mit unserem CMS?", a: "Ja. Wir unterstützen Headless, WordPress, Sanity, Contentful u. a." },
    ],
    related: ["webdesign", "performance", "content"],
  },
  {
    name: "Performance-Optimierung",
    slug: "performance",
    anchor: "performance",
    teaser: "Schneller als die Konkurrenz – messbar in Lighthouse, spürbar für Nutzer:innen.",
    description:
      "Wir jagen jede Millisekunde: von Code-Splitting über Bildpipelines bis Caching-Strategien. Ergebnis: bessere UX, Rankings und Conversion-Rates.",
    benefits: [
      "Web Vitals-Optimierung (LCP, CLS, INP)",
      "Bild-/Asset-Pipelines & Caching",
      "Monitoring & kontinuierliche Verbesserungen",
    ],
    process: ["Audit", "Roadmap", "Implementierung", "Monitoring"],
    faqs: [
      { q: "Welche Metriken verbessern Sie?", a: "Vor allem LCP, CLS und INP – aber auch TTFB, FCP und TBT." },
      { q: "Brauche ich einen Neuaufbau?", a: "Nicht zwingend. Häufig reichen gezielte Eingriffe mit hoher Wirkung." },
    ],
    related: ["webdesign", "seo", "ecommerce"],
  },
  {
    name: "E‑Commerce & Shop UX",
    slug: "ecommerce",
    anchor: "ecommerce",
    teaser: "Shop-Erlebnisse, die konvertieren – von Katalog bis Checkout.",
    description:
      "Wir gestalten performante Shopping-Flows mit klarer UX, schnellen Produktlisten und vertrauensbildenden Micro-Interactions.",
    benefits: [
      "Checkout-Optimierung & Trust-Elemente",
      "Produktdaten, Suche & Filterung",
      "Headless-Integrationen (Shopify, Medusa, Saleor)",
    ],
    process: ["Discovery", "UX & Flows", "Implementierung", "A/B-Tests"],
    faqs: [
      { q: "Unterstützen Sie internationale Shops?", a: "Ja, inkl. Währungen, Sprachen und Steuerlogiken." },
      { q: "Welche KPIs messen Sie?", a: "CR, AOV, Bounce Rate, Load Times und Funnel-Abbrüche." },
    ],
    related: ["performance", "seo", "content", "branding"],
  },
  {
    name: "Branding & Designsysteme",
    slug: "branding",
    anchor: "branding",
    teaser: "Klarer Markenauftritt mit skalierbaren Komponenten und Guidelines.",
    description:
      "Vom Logo bis zur Pattern Library: Wir schaffen visuelle Systeme, die Wiedererkennung stiften und in jedem Kanal funktionieren.",
    benefits: [
      "Design Tokens & Komponentenbibliothek",
      "Barrierefreiheit & Lesbarkeit",
      "Dokumentation & Übergabe an Teams",
    ],
    process: ["Markenkern", "Visuelle Leitplanken", "Komponenten", "Docs"],
    faqs: [
      { q: "Arbeiten Sie mit bestehenden Marken?", a: "Ja – von sanftem Refresh bis kompletter Neuausrichtung." },
      { q: "Liefern Sie Figma-Dateien?", a: "Selbstverständlich, inkl. Prototypen und Variants." },
    ],
    related: ["webdesign", "content"],
  },
  {
    name: "Content & Copywriting",
    slug: "content",
    anchor: "content",
    teaser: "Worte, die führen – UX-Microcopy bis SEO-Landingpages.",
    description:
      "Wir schreiben Inhalte, die Nutzer:innen leiten und Suchmaschinen verstehen – präzise, markenkonform und messbar wirksam.",
    benefits: [
      "Tone-of-Voice & Styleguide",
      "Strukturierte Landingpages",
      "Conversion-orientierte Microcopy",
    ],
    process: ["Voice & Guidelines", "Gliederung", "Drafting", "Finalisierung"],
    faqs: [
      { q: "Bieten Sie Übersetzungen an?", a: "Ja, mit muttersprachlichen Partner:innen und SEO-Fokus." },
      { q: "Ghostwriting?", a: "Auf Anfrage, inkl. Fact-Checking und Quellenarbeit." },
    ],
    related: ["seo", "branding", "webdesign"],
  },
] as const;

export const sections = {
  hero: { id: "hero", title: "Websites, die wirken.", sub: projectInfo.tagline },
  leistungen: { id: "leistungen", title: "Unsere Leistungen" },
  about: { id: "ueber-uns", title: "Über uns" },
  process: { id: "prozess", title: "Unser Prozess" },
  contact: { id: "kontakt", title: "Kontakt" },
};

export const nav = {
  main: [
    { label: "Start", href: "/" },
    { label: "Leistungen", href: `/#${sections.leistungen.id}` },
    { label: "Über uns", href: `/#${sections.about.id}` },
    { label: "Prozess", href: `/#${sections.process.id}` },
    { label: "Kontakt", href: `/#${sections.contact.id}` },
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
  services: services.map((s) => ({
    label: s.name,
    href: `/leistungen/${s.slug}`,
    anchorHref: `/#${s.anchor}`,
  })),
};

export const legal = {
  company: projectInfo.owner,
  managingDirector: "Lea Köster",
  register: {
    court: "Amtsgericht Hamburg",
    number: "HRB 123456",
  },
  vatId: "DE123456789",
  responsibleForContent: "Lea Köster",
  imprintHtml: `
    <h2>Impressum</h2>
    <p>${projectInfo.owner}</p>
    <p>${projectInfo.street}<br/>${projectInfo.zip} ${projectInfo.city}<br/>${projectInfo.country}</p>
    <p>Telefon: ${projectInfo.phone}<br/>E-Mail: <a href="mailto:${projectInfo.email}">${projectInfo.email}</a></p>
    <p>Vertretungsberechtigt: ${"Lea Köster"}</p>
    <p>Registergericht: ${"Amtsgericht Hamburg"}, Registernummer: ${"HRB 123456"}</p>
    <p>Umsatzsteuer-ID: ${"DE123456789"}</p>
    <h3>Haftung für Inhalte</h3>
    <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
    <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
    <h3>Haftung für Links</h3>
    <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
    <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
    <h3>Urheberrecht</h3>
    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
    <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
  `,
  privacyHtml: `
    <h2>Datenschutzerklärung</h2>
    <p>Wir freuen uns über Ihr Interesse an unserem Online-Angebot. Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie über die Verarbeitung personenbezogener Daten bei Nutzung unserer Website.</p>
    <h3>Verantwortlicher</h3>
    <p>${projectInfo.owner}, ${projectInfo.street}, ${projectInfo.zip} ${projectInfo.city}, ${projectInfo.country}<br/>E-Mail: <a href="mailto:${projectInfo.email}">${projectInfo.email}</a>, Telefon: ${projectInfo.phone}</p>
    <h3>Hosting</h3>
    <p>Diese Website wird bei einem Dienstleister gehostet. Der Einsatz erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und effizienten Bereitstellung unseres Online-Angebots). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.</p>
    <h3>Server-Logfiles</h3>
    <p>Unser Provider erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.</p>
    <h3>Cookies & Consent</h3>
    <p>Sofern wir Cookies oder ähnliche Technologien einsetzen, informieren wir Sie hierüber in einem Consent-Banner. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) oder unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).</p>
    <h3>Kontaktaufnahme</h3>
    <p>Bei Kontaktaufnahme per E-Mail verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Die Daten werden gelöscht, sobald sie für die Zweckerreichung nicht mehr erforderlich sind.</p>
    <h3>Ihre Rechte</h3>
    <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie das Recht auf Datenübertragbarkeit und Widerspruch. Sie haben außerdem das Recht, sich bei einer Aufsichtsbehörde zu beschweren.</p>
    <h3>Datensicherheit</h3>
    <p>Wir treffen technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen Manipulation, Verlust, Zerstörung oder unbefugten Zugriff zu schützen.</p>
    <h3>Änderungen</h3>
    <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.</p>
  `,
};
