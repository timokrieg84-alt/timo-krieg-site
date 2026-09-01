// Zentrale Site-Konfiguration – alle Daten als named exports
// Wichtig: Exporte muessen exakt so heissen, wie in den Seiten/Layouts importiert.

export const brand = {
  name: "Gylsere Januzi Krieg",
  tagline: "Online Marketing Office",
  logoText: "GYLSERE JANUZI KRIEG",
  colors: {
    primary: "#123D2A",
    secondary: "#C8501E",
    accent: "#E58AA0",
    background: "#F5F1E9",
    text: "#1A1A1A",
    muted: "#6B7280",
    gold: "#C8A24B",
  },
};

export const colors = brand.colors;

export const contact = {
  company: "Gylsere Januzi Krieg – Online Marketing Office",
  owner: "Gylsere Januzi Krieg",
  street: "Kitzingstraße 7",
  zip: "73529",
  city: "Schwäbisch Gmünd",
  country: "Deutschland",
  phone: "+49 175 6372395",
  email: "gjanuzikrieg@gmail.com",
};

export const projectInfo = {
  name: brand.name,
  owner: contact.owner,
  tagline: brand.tagline,
  street: contact.street,
  zip: contact.zip,
  city: contact.city,
  country: contact.country,
  phone: contact.phone,
  email: contact.email,
};

export const nav = {
  main: [
    { label: "Start", href: "/" },
    { label: "Über uns", href: "/#about" },
    { label: "Leistungen", href: "/#leistungen" },
    { label: "Prozess", href: "/#prozess" },
    { label: "Kontakt", href: "/#kontakt" },
  ],
  services: [
    { label: "SEO & Local SEO", href: "/leistungen/seo" },
    { label: "Google Ads", href: "/leistungen/google-ads" },
    { label: "SEO-Regio – Umland-Dominanz", href: "/leistungen/seo-regio" },
    { label: "GEO – Generative Engine Optimization", href: "/leistungen/geo" },
    { label: "Webdesign & E-Commerce", href: "/leistungen/webdesign" },
    { label: "AI & Automation", href: "/leistungen/ai-automation" },
    { label: "Online-Terminbuchung", href: "/leistungen/online-terminbuchung" },
    { label: "Reputation & Bewertungen", href: "/leistungen/reputation" },
    { label: "Social Media", href: "/leistungen/social-media" },
    { label: "Premium-Fotografie & Image-Videos", href: "/leistungen/foto-video" },
    { label: "Branding", href: "/leistungen/branding" },
    { label: "Praxis-TV (exklusiv für Mediziner)", href: "/leistungen/praxis-tv" },
    { label: "Code-Exzellenz & Programmierung", href: "/leistungen/programmierung" },
    { label: "Premium-Factoring", href: "/leistungen/factoring" },
  ],
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
};

export const services = [
  {
    slug: "seo",
    title: "SEO & Local SEO",
    subtitle: "Sichtbar werden, wenn es zählt.",
    features: [
      "Technisches SEO",
      "Content & Keywords",
      "Backlink-Aufbau",
      "Local SEO",
      "Online-Listing in über 30 Portalen (Google, Bing, Apple Maps u.a.)",
      "Google Business Profil-Betreuung inkl. regelmäßiger Google Posts",
    ],
    shortDescription:
      "Technik, Content und Autorität perfekt aufeinander abgestimmt – damit Sie in Ihrer Nische dominieren und lokal wie organisch gefunden werden.",
    longDescription:
      "Wir bauen nachhaltige Sichtbarkeit mit einem ganzheitlichen SEO-Ansatz auf. Zuerst bereinigen wir technische Bremsen (Core Web Vitals, Crawlbarkeit, Indexierung), dann schaffen wir mit Suchintention-optimiertem Content die Basis für Rankings, die Bestand haben. Durch qualitativen Linkaufbau erhöhen wir die Autorität Ihrer Domain, während präzise Local-SEO-Maßnahmen Ihre Präsenz in Karten und lokalen Suchergebnissen stärken.\n\nFür Unternehmen mit Standortrelevanz übernehmen wir die vollständige Pflege Ihres Google Business Profils inklusive regelmäßiger Google Posts, Angebots- und Event-Updates. Flächendeckende Online-Listings in über 30 Portalen sorgen für Datenkonsistenz (NAP) und zusätzliche Touchpoints. Transparente Roadmaps, monatliche Reportings und klare KPI-Steuerung sichern Fortschritt, der sich in Anfragen und Umsatz übersetzt.",
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    subtitle: "Jeder Klick mit Absicht.",
    features: [
      "Search & Performance Max",
      "YouTube Ads",
      "Conversion Tracking",
      "Landing Pages",
      "Retargeting",
      "Klickschutz gegen Mitbewerber- und Fehlklicks",
      "Transparente Budgetstufen ab 200 € mtl.",
    ],
    shortDescription:
      "Präzise Kampagnen mit messbarem ROAS – präsent genau dann, wenn Bedarf besteht. Budgetflexibel, datengetrieben, effizient.",
    longDescription:
      "Wir kombinieren Search, Performance Max und YouTube Ads zu einem performanten Mediamix. Durch sauberes Conversion-Tracking (GA4, Consent-konform, serverseitig optional) und granular strukturiertes Kampagnen-Setup lenken wir Budgets dorthin, wo Abschlusswahrscheinlichkeit und Marge am höchsten sind.\n\nEigene, auf Conversion getrimmte Landing Pages erhöhen die Relevanz und senken die Kosten pro Lead. Retargeting über Keyword-, Intent- und Video-Signale holt unentschlossene Nutzer zurück. Integrierte Klickschutzmechanismen filtern ungültige Klicks und schützen vor Mitbewerbertraffic. Sie erhalten volle Transparenz über Spend, Leads, CPL und ROAS – mit klaren Budgetstufen ab 200 € mtl. skalierbar.",
  },
  {
    slug: "seo-regio",
    title: "SEO-Regio – Umland-Dominanz",
    subtitle: "50 Satelliten-Seiten für die ganze Region.",
    features: [
      "50 eigenständige Ortschaften-Webseiten",
      "Individuelle, einzigartige Texte je Ort",
      "Ihre bestehende Website bleibt zu 100% unangetastet",
      "Flächendeckende lokale Rankings",
    ],
    shortDescription:
      "Ein Netzwerk aus ortsspezifischen Microsites, das lokale Suchanfragen im gesamten Umland abfängt – ohne Ihre bestehende Website zu verändern.",
    longDescription:
      "Mit SEO-Regio bauen wir ein redaktionell sauberes Netzwerk aus 50 eigenständigen Ortschaften-Seiten, die exakt auf lokale Suchintentionen zugeschnitten sind. Jede Seite erhält individuelle, einzigartige Inhalte, lokale Bezüge, häufige Fragen und klare Call-to-Actions – ohne Duplicate-Content-Risiken.\n\nIhre Hauptseite bleibt unangetastet. Alle Anfragen werden zentral auf Ihre Wunschkanäle geleitet (Telefon, Formular, Terminbuchung). Das Ergebnis: flächendeckende Sichtbarkeit für Ihr Einzugsgebiet, mehr qualifizierte Anfragen aus dem Umland und messbare Umsatzsteigerung – zu einem planbaren, fairen Monatsbetrag.",
  },
  {
    slug: "geo",
    title: "GEO – Generative Engine Optimization",
    subtitle: "Sichtbar in ChatGPT, Perplexity & Google AI.",
    features: ["LLM-Crawling", "Entity-SEO", "Citation-Ready Content", "llms.txt & AI Overviews"],
    shortDescription:
      "Wir machen Ihre Marke zitierfähig für generative Suchmaschinen – mit strukturierter Entity-Optimierung und LLM-lesbaren Inhalten.",
    longDescription:
      "GEO erweitert klassisches SEO um die Logik großer Sprachmodelle. Wir modellieren Ihre Marke als eindeutige Entität, verknüpfen sie mit relevanten Knowledge-Graph-Einträgen und erstellen Citation-Ready Content, der von LLMs zuverlässig erkannt, verstanden und zitiert werden kann.\n\nDurch klare Informationsarchitektur, saubere Quellenführung, strukturierte Daten und llms.txt schaffen wir die technischen wie inhaltlichen Voraussetzungen, damit Sie in AI Overviews, Chat-Antworten und generativen SERPs präsent sind – nicht nur in den zehn blauen Links.",
  },
  {
    slug: "webdesign",
    title: "Webdesign & E-Commerce",
    subtitle: "Websites, die verkaufen.",
    features: [
      "Custom Design",
      "Next.js & WordPress",
      "Core Web Vitals",
      "Conversion-Rate-Optimierung (CRO)",
      "DSGVO-Rechtssicherheit",
      "CRM-/Shop-Anbindung via API",
    ],
    shortDescription:
      "Maßgeschneiderte, ultraschnelle Websites und Shops – mit klarem Storytelling, perfekter Usability und rechtssicherem Setup.",
    longDescription:
      "Wir entwickeln performante Websites und E-Commerce-Erlebnisse, die Markenästhetik mit messbarer Conversion vereinen. Von der Informationsarchitektur über High-Fidelity-Designs bis zur produktiven Umsetzung in Next.js oder WordPress – jedes Detail ist auf Ladezeit, Barrierefreiheit und Skalierbarkeit optimiert.\n\nCRO-Best-Practices, Split-Testing und klare Micro-Interactions führen Nutzer intuitiv zum Abschluss. API-basierte Integrationen binden CRM, ERP oder Payment nahtlos an. Cookie- und Consent-Management, rechtssichere Formulare und Datenschutzhinweise sind von Beginn an mitgedacht.",
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    subtitle: "Prozesse, die mitdenken.",
    features: ["Custom AI Agents", "LLM Integration", "Workflow-Automation", "Chatbots"],
    shortDescription:
      "Wir automatisieren Routineaufgaben und schaffen intelligente Touchpoints – von Chatbots bis zu Agenten, die interne Prozesse beschleunigen.",
    longDescription:
      "Mit maßgeschneiderten AI-Agents und LLM-Integrationen verknüpfen wir Ihre Systeme zu automatisierten Workflows: Leads werden angereichert, Tickets priorisiert, Inhalte generiert, Daten synchronisiert. Chatbots mit klarem Conversational Design beraten vorqualifiziert und leiten nahtlos an Ihr Team über.\n\nSichere Architekturen, Rechte- und Rollenmodelle sowie Logging sorgen für Governance und Compliance. Ergebnis: spürbar weniger manuelle Arbeit, kürzere Reaktionszeiten und mehr Kapazität für das Wesentliche.",
  },
  {
    slug: "online-terminbuchung",
    title: "Online-Terminbuchung",
    subtitle: "Termine rund um die Uhr per Klick.",
    features: [
      "Jameda & Doctolib Integration",
      "Echtzeit-API-Anbindung",
      "Platzierung in Suchmaschinen & Branchenportalen",
      "Schlüsselfertige Einrichtung",
    ],
    shortDescription:
      "Wir integrieren effiziente Terminbuchungssysteme direkt in Ihre Website und relevante Portale – automatisiert, DSGVO-konform, kundenfreundlich.",
    longDescription:
      "Ihre Kundschaft bucht, verschiebt oder storniert Termine selbstständig – 24/7. Wir wählen das passende System, integrieren es per API in Ihre Website, Kalender und Portale (z. B. Jameda, Doctolib) und richten Benachrichtigungen, Erinnerungen sowie Auslastungsregeln ein.\n\nSuchmaschinen- und Portalanbindungen erhöhen die Reichweite, klare UI-Patterns senken No-Show-Raten. Schulungen für Ihr Team und dokumentierte Prozesse sorgen dafür, dass das System vom ersten Tag an produktiv läuft.",
  },
  {
    slug: "reputation",
    title: "Reputation & Bewertungen",
    subtitle: "Ihr guter Name, makellos geschützt.",
    features: [
      "Automatisiertes 5-Sterne-Bewertungssystem",
      "Review-Monitoring in Echtzeit",
      "Antwort-Management",
      "Melden & Entfernen ungerechtfertigter Rezensionen",
      "Reputation-Recovery",
    ],
    shortDescription:
      "Mehr echte Spitzenbewertungen, weniger Rufschaden: Wir etablieren ein faires, automatisiertes Bewertungs-Ökosystem mit aktivem Schutz.",
    longDescription:
      "Mit einem DSGVO-konformen Einladungs- und Erinnerungsworkflow erhöhen wir organisch die Zahl positiver Bewertungen auf Google & Co. Zentrales Monitoring alarmiert in Echtzeit bei neuen Rezensionen. Wir erstellen Antwortleitfäden, übernehmen bei Wunsch das Reputations-Management und setzen juristisch belastbare Prozesse auf, um rechtswidrige Bewertungen zu melden und entfernen zu lassen.\n\nBei bestehenden Reputationsproblemen entwickeln wir einen Recovery-Plan aus Content, PR-Touchpoints und Bewertungsarbeit – transparent messbar durch Score-Entwicklung, Sichtbarkeit und Leads.",
  },
  {
    slug: "social-media",
    title: "Social Media",
    subtitle: "Content, der Kunden bringt.",
    features: [
      "Strategie & Kanalaufbau",
      "Foto, Video & Grafik",
      "Community-Management",
      "Paid Social",
    ],
    shortDescription:
      "Von Strategie bis Produktion: Social Media, das Reichweite in Nachfrage verwandelt – kreativ, datenbasiert, kontinuierlich optimiert.",
    longDescription:
      "Wir definieren eine klare Content-Strategie je Kanal (Instagram, TikTok, LinkedIn u. a.), entwickeln Formate mit Hook, Value und Call-to-Action und produzieren Foto-, Video- und Grafik-Assets in konsistenter Markenqualität. Redaktionspläne, automatisierte Veröffentlichungen und Community-Management sichern Takt und Tonalität.\n\nPaid-Social-Kampagnen verstärken Top-Performer gezielt. Brand-Lift, Engagement-Rate, Reichweitenqualität und Cost-per-Result fließen in die laufende Optimierung – für Social Media, das sichtbar verkauft.",
  },
  {
    slug: "foto-video",
    title: "Premium-Fotografie & Image-Videos",
    subtitle: "Echte Bildgewalt schafft Vertrauen.",
    features: [
      "Team- & Businessfotos vor Ort",
      "Geschäftsführer-Porträts",
      "Imagefilme & Recruiting-Videos in 4K/8K",
      "Lizenzierte Drohnenaufnahmen",
    ],
    shortDescription:
      "Professionelle Foto- und Videoproduktion mit High-End-Equipment – visuelle Assets, die Kompetenz und Persönlichkeit greifbar machen.",
    longDescription:
      "Wir produzieren Bild- und Bewegtbild-Content, der Ihre Marke differenziert: authentische Team- und Businessfotos, starke Führungsporträts, Imagefilme und Recruiting-Videos in 4K/8K – auf Wunsch ergänzt um lizenzierte Drohnenaufnahmen. Ein durchgängiges Storyboard, präzises Licht-Setup und Postproduktion auf Agentur-Niveau garantieren konsistente Qualität.\n\nSie erhalten mediengerechte Formate für Website, Social, Ads und Print, inklusive Nutzungsrechten nach Bedarf – bereit für direkte Conversion-Effekte.",
  },
  {
    slug: "branding",
    title: "Branding",
    subtitle: "Markenbildung mit Substanz.",
    features: ["Brand Strategy", "Visual Identity", "Logo & Design System", "Messaging"],
    shortDescription:
      "Eine klare Marken-DNA mit starker visueller Identität und messerscharfem Messaging – Grundlage für alle Touchpoints.",
    longDescription:
      "Wir schärfen Positionierung, Werte und Nutzenversprechen zu einer belastbaren Markenstrategie. Darauf aufbauend entwickeln wir eine visuelle Identität mit Logo, Typografie, Farbklima und Komponentenbibliothek als skalierbares Design System.\n\nMessaging-Guidelines (Tone of Voice, Claims, Value Props) sorgen kanalübergreifend für Wiedererkennung. Ergebnis: eine Marke, die konsistent wirkt, Vertrauen schafft und in Vertrieb wie Marketing spürbar zahlt.",
  },
  {
    slug: "praxis-tv",
    title: "Praxis-TV (exklusiv für Mediziner)",
    subtitle: "Wartezeit wird Aufklärungszeit.",
    features: ["Konzeption & Text", "Visuelle Bildschirmpräsentationen", "Darstellung von IGeL & Behandlungsmethoden"],
    shortDescription:
      "Screen-Präsentationen im Wartezimmer, die patientenverständlich informieren und Nachfrage für Leistungen steigern – seriös, CI-konform.",
    longDescription:
      "Wir konzipieren ein redaktionell sauberes Praxis-TV-Programm, das Wartezeiten sinnvoll nutzt: leicht verständliche Erklärfolien zu Behandlungen, Vorteilen, Prävention und IGeL-Leistungen – visuell hochwertig, medizinisch sorgfältig formuliert und an Ihre Corporate Identity angepasst.\n\nRegelmäßige Updates und ein intuitives Content-Management sichern Aktualität. Diskret platzierte CTAs (z. B. QR-Codes zur Terminbuchung) verbinden Aufklärung mit Conversion – ohne Werbegefühl.",
  },
  {
    slug: "programmierung",
    title: "Code-Exzellenz & Programmierung",
    subtitle: "Fehlerfreier, perfekter Code.",
    features: [
      "Individuelle Softwarelösungen",
      "API-Schnittstellen & CRM-Verknüpfungen",
      "Optimierung von Altsystemen",
      "Code-Reviews & Testing",
    ],
    shortDescription:
      "Wir entwickeln und optimieren Software mit höchstem Qualitätsanspruch – sauber strukturiert, skalierbar und nahtlos integriert.",
    longDescription:
      "Von Microservices über Integrationen bis zu performanten Backends: Wir liefern robuste Softwarelösungen mit klarer Architektur, sauberer Dokumentation und automatisierten Tests. Legacy-Systeme modernisieren wir schrittweise – mit refaktoriertem Code, verbesserter Performance und höherer Sicherheit.\n\nÜber wohldefinierte APIs verknüpfen wir CRM, ERP, Payment und Drittsysteme zu belastbaren Workflows. Code-Reviews, CI/CD-Pipelines und Monitoring sorgen für Qualität, Stabilität und schnelle Iteration.",
  },
  {
    slug: "factoring",
    title: "Premium-Factoring",
    subtitle: "Sofortige Liquidität & Ausfallschutz.",
    features: [
      "Auszahlung in 24–48 Stunden",
      "Bis zu 100% des Rechnungsbetrages",
      "100% Schutz vor Forderungsausfall",
      "Übernahme des Debitorenmanagements",
      "Bessere Bonität durch Bilanzverkürzung",
    ],
    shortDescription:
      "Über ein geprüftes Partnernetzwerk wandeln Sie offene B2B-Forderungen in sofortige Liquidität – inklusive vollständigem Ausfallschutz.",
    longDescription:
      "Wir vermitteln Sie an ausgewählte Premium-Factoring-Partner. Sie verkaufen offene Forderungen und erhalten je nach Bonität Ihres Debitors bis zu 100 % des Rechnungsbetrags innerhalb von 24–48 Stunden. Der Factor übernimmt das Debitorenmanagement, das Ausfallrisiko wird vollständig abgesichert.\n\nIhre Vorteile: planbarer Cashflow, Entlastung der Buchhaltung und verbesserte Bilanzkennzahlen. Wir begleiten Sie von der Prüfung der Voraussetzungen über die Vertragsgestaltung bis zum laufenden Controlling.",
  },
];

export const sections = {
  hero: {
    headline: "Online Marketing, das nachweislich verkauft.",
    subheadline:
      "Gylsere Januzi Krieg – Online Marketing Office. High-End-Konzepte, präzise Umsetzung, klare KPIs. Premium-Look, edle Typografie, sanfte Animationen – und messbare Ergebnisse.",
    ctaPrimary: { label: "Kostenloses Erstgespräch", href: "/#kontakt" },
    ctaSecondary: { label: "Leistungen ansehen", href: "/#leistungen" },
  },
  about: {
    headline: "Exzellenz in Strategie, Design und Performance",
    text:
      "Wir verbinden Markenästhetik mit messbarer Nachfrage. Jede Maßnahme folgt einer klaren Wachstums-These, wird sauber getestet und anhand von echten Geschäftszahlen optimiert. Transparenz in Budgets, nachvollziehbare Reportings und eine partnerschaftliche Zusammenarbeit auf Augenhöhe sind unser Standard.",
    bullets: [
      "Premium-Qualität: High-End-Design, klare UX, feinjustierte Micro-Interactions",
      "Ganzheitlich: Von Branding über Web bis Performance – alles aus einem Guss",
      "Messbar: Klare KPIs, sauberes Tracking, transparente Reportings",
      "Sicher: DSGVO-first, rechtssichere Setups und dokumentierte Prozesse",
    ],
  },
  process: {
    headline: "So arbeiten wir – präzise, transparent, skalierbar",
    steps: [
      {
        title: "1. Diagnose & Zielbild",
        text:
          "Kick-off, Daten- und Marktanalyse, Wettbewerbs- und Zielgruppenverständnis. Wir definieren Ziele, KPIs und die Roadmap.",
      },
      {
        title: "2. Strategie & Prototyp",
        text:
          "Content- und Kanalstrategie, IA/Wireframes, Creative-Konzepte, MVP-Plan. Früh validieren wir Hypothesen mit Prototypen.",
      },
      {
        title: "3. Umsetzung & Setup",
        text:
          "Design, Development, Tracking, Consent, Integrationen. Sauberes Go-Live mit QA, Performance- und Security-Checks.",
      },
      {
        title: "4. Traffic & Conversion",
        text:
          "SEO, Ads, Social, E-Mail. Landing Pages, Angebote, A/B-Tests. Fokus auf CPL/CPA, ROAS und Pipeline-Qualität.",
      },
      {
        title: "5. Scale & Enablement",
        text:
          "Skalierung funktionierender Hebel, Automatisierung, Team-Enablement. Fortlaufendes Reporting und aktive Steuerung.",
      },
    ],
  },
  contact: {
    headline: "Sprechen wir über Wachstum.",
    subheadline:
      "Ein kurzes Gespräch, klare nächste Schritte. Wir melden uns innerhalb von 24 Stunden.",
    address:
      "Gylsere Januzi Krieg – Online Marketing Office, Kitzingstraße 7, 73529 Schwäbisch Gmünd",
    phone: "+49 175 6372395",
    email: "gjanuzikrieg@gmail.com",
    form: {
      enabled: true,
      successMessage:
        "Vielen Dank! Wir melden uns innerhalb von 24 Stunden.",
      privacyNote:
        "Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben zur Beantwortung Ihrer Anfrage gemäß Datenschutzerklärung zu.",
    },
  },
};

export const legal = {
  impressum: {
    title: "Impressum",
    provider: {
      unternehmen: "Gylsere Januzi Krieg – Online Marketing Office",
      inhaberin: "Gylsere Januzi Krieg",
      anschrift: "Kitzingstraße 7, 73529 Schwäbisch Gmünd, Deutschland",
      kontakt: {
        telefon: "+49 175 6372395",
        eMail: "gjanuzikrieg@gmail.com",
      },
    },
    vertretungsberechtigt: "Gylsere Januzi Krieg (Inhaberin)",
    verantwortlichNachMStV:
      "Gylsere Januzi Krieg, Kitzingstraße 7, 73529 Schwäbisch Gmünd",
    verbraucherstreitbeilegung:
      "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    haftungFuerInhalte:
      "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG/§ 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG/DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.",
    haftungFuerLinks:
      "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte verlinkter Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.",
    urheberrecht:
      "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung der jeweiligen Urheberin bzw. des jeweiligen Urhebers.",
  },
  datenschutz: {
    title: "Datenschutzerklärung",
    verantwortlicher: {
      name: "Gylsere Januzi Krieg – Online Marketing Office",
      ansprechperson: "Gylsere Januzi Krieg",
      anschrift: "Kitzingstraße 7, 73529 Schwäbisch Gmünd, Deutschland",
      telefon: "+49 175 6372395",
      eMail: "gjanuzikrieg@gmail.com",
    },
    allgemeines:
      "Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Personenbezogene Daten werden vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO, BDSG) sowie dieser Datenschutzerklärung verarbeitet.",
    hostingUndServerLogs:
      "Diese Website wird auf Servern eines externen Webhosting-Anbieters betrieben. Beim Aufruf der Seiten erfasst der Provider automatisch Server-Logfiles: IP-Adresse, Datum und Uhrzeit der Anfrage, Zeitzonendifferenz, Request/URL, HTTP-Statuscode, übertragene Datenmenge, Referrer, User-Agent (Browser, Betriebssystem, Gerät). Die Verarbeitung erfolgt zur technischen Bereitstellung, Stabilität und Sicherheit der Website (Art. 6 Abs. 1 lit. f DSGVO). Logdaten werden in der Regel nach kurzer Zeit gelöscht, sofern keine sicherheitsrelevante Aufbewahrung erforderlich ist.",
    sslTls:
      "Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an 'https://' und dem Schloss-Symbol im Browser.",
    cookies:
      "Wir setzen nur technisch notwendige Cookies ein, die für den Betrieb der Website erforderlich sind (z. B. zur Sitzungssteuerung). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Nicht notwendige Cookies oder Tracking-Tools werden nur nach ausdrücklicher Einwilligung eingesetzt.",
    kontaktformular:
      "Wenn Sie uns per Formular kontaktieren, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche/vertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Kommunikation). Daten werden nur so lange gespeichert, wie es für die Bearbeitung notwendig ist oder gesetzliche Aufbewahrungspflichten bestehen.",
    kommunikation:
      "Bei Kontaktaufnahme per E-Mail oder Telefon werden die übermittelten Daten zum Zwecke der Bearbeitung der Anfrage verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. f DSGVO.",
    auftragsverarbeitung:
      "Sofern wir Dienstleister mit der Verarbeitung beauftragen (z. B. Hosting), erfolgt dies auf Grundlage von Art. 28 DSGVO und geschlossenen Verträgen zur Auftragsverarbeitung.",
    drittlandtransfer:
      "Eine Übermittlung in Drittländer findet nur statt, wenn dies zur Vertragserfüllung erforderlich ist, Sie eingewilligt haben oder geeignete Garantien nach Art. 44 ff. DSGVO bestehen.",
    speicherdauer:
      "Wir verarbeiten und speichern personenbezogene Daten nur so lange, wie es für die Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Nach Zweckfortfall bzw. Fristablauf werden die Daten gelöscht.",
    ihreRechte:
      "Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch gegen Verarbeitungen (Art. 21 DSGVO). Sie haben zudem das Recht, erteilte Einwilligungen jederzeit mit Wirkung für die Zukunft zu widerrufen (Art. 7 Abs. 3 DSGVO).",
    beschwerderecht:
      "Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren (Art. 77 DSGVO).",
    pflichtZurBereitstellung:
      "Die Bereitstellung personenbezogener Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Für die Nutzung des Kontaktformulars sind bestimmte Angaben erforderlich, ohne die eine Bearbeitung nicht möglich ist.",
    aenderungen:
      "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder Änderungen unserer Leistungen abzubilden.",
  },
};
