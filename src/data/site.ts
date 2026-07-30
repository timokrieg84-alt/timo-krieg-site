export const projectInfo = {
  company_name: "Gylsere Januzi",
  location: "Kitzingstraße 7, 73529 Schwäbisch Gmünd",
  phone: "+49 175 6372395",
  phone_href: "+491756372395",
  email: "info@januzi-bau.de",
  google_maps_embed: true,
};

export const navigation = {
  logo_text: "Gylsere Januzi",
  links: [
    { label: "Home", target: "#home" },
    {
      label: "Leistungen",
      type: "dropdown_interactive",
      sub_links: [
        { label: "SEO", target: "/leistungen/seo" },
        { label: "SEO-Regio (Umland-Dominanz)", target: "/leistungen/seo-regio" },
        { label: "Google Ads", target: "/leistungen/google-ads" },
        { label: "GEO (AI-Search & ChatGPT)", target: "/leistungen/geo" },
        { label: "Webdesign & E-Commerce", target: "/leistungen/webdesign" },
        { label: "Online-Terminvereinbarungen", target: "/leistungen/terminbuchung" },
        { label: "Marketing", target: "/leistungen/marketing" },
        { label: "AI & Automation", target: "/leistungen/ai-automation" },
        { label: "Branding", target: "/leistungen/branding" },
        { label: "Social Media", target: "/leistungen/social-media" },
        { label: "Reputation & Bewertungen", target: "/leistungen/reputation" },
        { label: "Praxis-TV / Display-Systeme", target: "/leistungen/praxis-tv" },
        { label: "Code-Exzellenz & Programmierung", target: "/leistungen/programmierung" },
        { label: "Premium-Factoring", target: "/leistungen/factoring" }
      ]
    },
    { label: "Case Studies", target: "#case-studies" },
    { label: "Wir", target: "#ueber-uns" },
    { label: "Kontakt", target: "#kontakt" }
  ],
  actions: [
    { type: "theme_toggle", icon: "☼" },
    { type: "cta_button", text: "Erstgespräch buchen", style: "glowing_border" },
    { type: "direct_call_button", text: "+49 175 6372395", phone_number: "+491756372395" }
  ]
};

export const hero = {
  kicker_label: "— FACHBETRIEB & DIGITAL-PRÄSENZ SCHWÄBISCH GMÜND",
  headline_h1: "Die richtige Prise Perfektion",
  slogan_styled: "Gylsere • Januzi",
  value_proposition: "Wir machen dein Unternehmen sichtbar – bei Google, bei ChatGPT, auf Instagram. Messbar, persönlich, ohne Agentur-Blabla.",
  cta_area: {
    primary_button: "Kostenloses Erstgespräch",
    secondary_action: { icon: "phone", text: "DIREKT DURCHSTELLEN", phone_number: "+49 175 6372395", phone_href: "+491756372395" },
  },
  bottom_trust_ticker: {
    response_time: "Antworten meist in unter 2h",
    active_clients: "50+ Mandate in DACH",
    news_tag: "➔ Neue Social Media Management & Digital-Lösungen"
  }
};

export const trustBar = {
  badges: [
    { type: "google_partner", text: "ZERTIFIZIERT Google Partner" },
    { type: "reviews", text: "★ ★ ★ ★ ★ Google Bewertungen" },
  ],
  section_headline: "VERTRAUEN VON 50+ UNTERNEHMEN",
  grayscale_logos: [
    "Maler Gerber",
    "MEISTER-FAMILIENBETRIEB GENSMANTEL BAUGESELLSCHAFT",
    "rb=",
    "Cleaning Service",
    "Weitere Partnerunternehmen"
  ]
};

export const servicesGrid = {
  kicker_label: "LEISTUNGEN",
  headline_h2: "Was wir für dich tun.",
  grid_cards: [
    { card_id: "service_1", title: "SEO", icon: "🔍", sub_headline: "Sichtbar werden, wenn es zählt.", description: "Technisches SEO, Content-Strategie und Backlinks – damit Ihre Kunden Sie finden, bevor es Ihre Wettbewerber tun.", tags: ["Technisches SEO","Content & Keywords","Backlink-Aufbau","Local SEO"], link: "/leistungen/seo", slug: "seo" },
    { card_id: "service_2", title: "SEO-Regio", icon: "🟢", sub_headline: "Die absolute Umland-Dominanz.", description: "Das geniale Prinzip: Ihre Original-Website bleibt zu 100% unangetastet! Wir erstellen ein Netzwerk aus 50 zusätzlichen, eigenständigen Webseiten für 50 umliegende Ortschaften mit individuell maßgeschneiderten Texten.", tags: ["50 Satelliten-Seiten","Kein Risiko für Original-Site","Umland-Abdeckung","Local SEO Boost"], link: "/leistungen/seo-regio", slug: "seo-regio" },
    { card_id: "service_3", title: "Google Ads", icon: "🌐", sub_headline: "Jeder Klick mit Absicht.", description: "Performance Max, Search, YouTube – mit messbarem ROAS, exklusivem Klickschutz gegen Mitbewerber und ohne Budgetverschwendung.", tags: ["Search & PMax","Conversion Tracking","Klickschutz","Retargeting"], link: "/leistungen/google-ads", slug: "google-ads" },
    { card_id: "service_4", title: "GEO", icon: "📱", sub_headline: "Sichtbar in ChatGPT, Perplexity & Google AI.", description: "Generative Engine Optimization – deine Marke wird in AI-Antworten zitiert, nicht nur bei Google gerankt. LLM-crawlbare Inhalte, Entity-SEO, llms.txt und Citation-Ready Content.", tags: ["LLM-Crawling","Entity-SEO","Citation-Ready Content","llms.txt & AI Overviews"], link: "/leistungen/geo", slug: "geo" },
    { card_id: "service_5", title: "Webdesign & E-Commerce", icon: "💻", sub_headline: "Websites, die verkaufen.", description: "Maßgeschneidertes Design mit Next.js – schnell, skalierbar, konversionsstark mit blitzschnellen Ladezeiten, DSGVO-Rechtssicherheit und Verkaufspsychologie.", tags: ["Custom Design","Next.js & WordPress","Core Web Vitals","CRO & APIs"], link: "/leistungen/webdesign", slug: "webdesign" },
    { card_id: "service_6", title: "Online-Terminvereinbarung", icon: "📅", sub_headline: "24/7 Terminbuchungen automatisieren.", description: "Einbindung professioneller Online-Terminbuchungssysteme (inkl. Jameda & Doctolib Schnittstellen) direkt in Ihre Webpräsenz und Suchmaschinen für lückenlose Auslastung.", tags: ["API-Schnittstellen","24/7 Buchung","Automatisierte Abläufe","Echtzeit-Synch"], link: "/leistungen/terminbuchung", slug: "terminbuchung" },
    { card_id: "service_7", title: "Marketing", icon: "📣", sub_headline: "Der Mix, der wirkt.", description: "Von Content über Social bis Email – ganzheitliches Marketing, das auf Ihre Zahlen einzahlt.", tags: ["Content","Social Media","Analytics"], link: "/leistungen/marketing", slug: "marketing" },
    { card_id: "service_8", title: "AI & Automation", icon: "✨", sub_headline: "Prozesse, die mitdenken.", description: "Custom-AI-Agenten, LLM-Integrationen und Workflow-Automation – damit Sie Zeit für das Wesentliche haben.", tags: ["Custom-AI-Agenten","LLM-Integrationen","Workflow-Automation"], link: "/leistungen/ai-automation", slug: "ai-automation" },
    { card_id: "service_9", title: "Branding", icon: "✏️", sub_headline: "Markenbildung mit Substanz.", description: "Brand DNA, Visual Identity und Messaging – eine Marke, die bleibt.", tags: ["Brand Strategy","Visual Identity","Logo & Design System","Messaging"], link: "/leistungen/branding", slug: "branding" },
    { card_id: "service_10", title: "Social Media", badge: "● NEU", icon: "🔗", sub_headline: "Content, der Kunden bringt.", description: "Strategie, Content-Produktion und Kanal-Management für Instagram, TikTok, LinkedIn & Co. – Social Media, das messbar Anfragen und Umsatz liefert.", tags: ["Strategie & Kanalaufbau","Foto, Video & Grafik","Community-Management","Paid Social"], link: "/leistungen/social-media", slug: "social-media" },
    { card_id: "service_11", title: "Reputation & Bewertungen", icon: "🛡️", sub_headline: "Automatisierte Top-Bewertungen & Schutz.", description: "Google-Rezensionen vollautomatisch sammeln sowie unfaire, böswillige oder gefälschte Bewertungen prüfen, melden und rechtskonform entfernen lassen.", tags: ["Rezensionen löschen","Review-Monitoring","5-Sterne-System","Reputation-Recovery"], link: "/leistungen/reputation", slug: "reputation" },
    { card_id: "service_12", title: "Praxis- & Wartezimmer-TV", icon: "📺", sub_headline: "Hochkonvertierende Präsentationen.", description: "Visuell überragende Bildschirmpräsentationen für Wartezimmer zur Patientenaufklärung und Förderung von Zusatzleistungen.", tags: ["Wartezimmer-TV","Patienten-Aufklärung","Zusatzleistungen","Visuelle Konzepte"], link: "/leistungen/praxis-tv", slug: "praxis-tv" },
    { card_id: "service_13", title: "Code-Exzellenz & Software", icon: "💻", sub_headline: "Custom Programmierarbeiten.", description: "Entwicklung individueller Softwarelösungen, Custom-Tools, API-Schnittstellen, CRM-Verknüpfungen und Erneuerung von Altsystemen.", tags: ["Custom Software","API Integration","Logo & Briefköpfe","Prozessautomatisierung"], link: "/leistungen/programmierung", slug: "programmierung" },
    { card_id: "service_14", title: "Premium-Factoring", badge: "● NEU", icon: "💶", sub_headline: "Sofortige Liquidität & Ausfallschutz.", description: "Verkauf offener B2B-Forderungen für Geldeingang innerhalb von 24–48 Stunden inkl. 100% Übernahme des Ausfallrisikos.", tags: ["100% Ausfallschutz","Sofort-Liquidität","Bessere Bonität","Debitorenmanagement"], link: "/leistungen/factoring", slug: "factoring" },
  ]
};

export const resultsProcess = {
  kicker_label: "ERGEBNISSE",
  headline_h2: "Handwerk, nicht Highlight-Reel.",
  intro_text: "Einzelne Case-Studies beeindrucken niemanden mehr – jede Agentur hat sie. Wir zeigen lieber wie wir arbeiten und was über alle Mandate hinweg entsteht. Aggregate statt Anekdoten.",
  left_column_steps: [
    { step_number: "01", title: "Audit", description: "Bestandsaufnahme in Zahlen. GSC, GA4, Ads-Accounts, Backlinks, technisches SEO. Wir finden was blockiert, bevor wir skalieren.", duration: "— DAUER 5-10 TAGE" },
    { step_number: "02", title: "Strategie", description: "Priorisierung nach Impact, nicht nach Buzzword-Trend. Klare Roadmap mit messbaren Zielen und Budget-Empfehlung.", duration: "— WORKSHOP 1 TAG" },
    { step_number: "03", title: "Umsetzung", description: "Sprints à 2 Wochen, wöchentliche Syncs, gemeinsamer Linear-Zugang. Du siehst live was läuft, keine Blackbox.", duration: "— LAUFEND" }
  ],
  right_column_stats: [
    { value: "50+", text: "aktive Mandate in DACH, Schweiz und International", tag: "● STAND APR 2026" },
    { value: "12M+", text: "organische Impressionen pro Monat über alle Mandate", tag: "● QUELLE: GSC" },
    { value: "340+", text: "Top-3-Rankings erreicht in den letzten 12 Monaten", tag: "● DEUTSCHLAND, AT, CH, GB" },
    { value: "~3h", text: "durchschnittliche Antwortzeit auf Kundenanfragen", tag: "● WERKTAGS 9-18 UHR" }
  ],
  fine_print: "Transparenz: Alle Zahlen sind aggregiert über unser gesamtes Portfolio, keine einzelnen Kunden sichtbar. Stichprobengrundlage und Messmethoden teilen wir gerne im Erstgespräch."
};

export const metricsUSPS = {
  banner_metrics: [
    { number: "50+", label: "Kunden" },
    { number: "200+", label: "Projekte" },
    { number: "13+", label: "Jahre" },
    { number: "98%", label: "Zufriedenheit" },
  ],
  usps_section: {
    kicker_label: "WARUM WIR",
    headline_h2: "Was uns ausmacht",
    cards: [
      { icon: "🎛️", title: "AI-Native Workflow", text: "Künstliche Intelligenz ist bei uns kein Buzzword. Sie steckt in jedem Prozess – von der Analyse bis zur Umsetzung." },
      { icon: "👥", title: "Persönlich statt Fabrik", text: "Du sprichst direkt mit den Machern. Keine Praktikanten, keine Callcenter, keine Warteschleifen." },
      { icon: "📊", title: "Ergebnisgetrieben", text: "Alle Maßnahmen richten sich strikt an messbarem Erfolg und ROI aus." },
      { icon: "👁️", title: "Volle Transparenz", text: "Echtzeit-Einblick in alle Arbeitsabläufe und Anpassungen jederzeit." },
    ]
  }
};

export const processTimeline = {
  kicker_label: "PROZESS",
  headline_h2: "So arbeiten wir zusammen.",
  steps: [
    { step: "01", title: "Erstgespräch", text: "Wir lernen dein Business, deine Ziele und deine Herausforderungen kennen." },
    { step: "02", title: "Analyse", text: "Wettbewerb, Markt und Potenziale – wir finden wo die Chancen liegen." },
    { step: "03", title: "Strategie", text: "Ein klarer, messbarer Plan für dein digitales Wachstum." },
    { step: "04", title: "Umsetzung", text: "Wir bauen, optimieren und liefern – mit wöchentlichen Updates." },
    { step: "05", title: "Wachstum", text: "Skalieren was funktioniert. Optimieren was noch besser werden kann." },
  ]
};

export const legalPlaceholders = {
  impressum: {
    title: "Impressum",
    content: "Angaben gemäß § 5 TMG:\nGylsere Januzi\nKitzingstraße 7\n73529 Schwäbisch Gmünd\n\nKontakt:\nTelefon: +49 175 6372395\nE-Mail: info@januzi-bau.de\n\nUmsatzsteuer-ID: [PLATZHALTER_UST_ID]\nWirtschafts-ID: [PLATZHALTER_WIRTSCHAFTS_ID]\nAufsichtsbehörde: [PLATZHALTER_AUFSICHTSBEHOERDE]"
  },
  datenschutz: {
    title: "Datenschutzerklärung",
    content: "1. Datenschutz auf einen Blick\n[PLATZHALTER_DATENSCHUTZ_ALLGEMEIN]\n\n2. Datenerfassung auf unserer Website\n[PLATZHALTER_DATENERFASSUNG]\n\n3. Analyse-Tools und Tools von Drittanbietern\n[PLATZHALTER_ANALYSE_TOOLS]\n\n4. Google Maps und Cookie-Einstellungen\n[PLATZHALTER_MAPS_COOKIES]"
  }
};
