export const siteConfig = {
  configVersion: "1.0.0",
  project: {
    name: "Café Sonnenblume",
    slug: "cafe-sonnenblume",
    language: "de",
    locale: "de-DE",
    timezone: "Europe/Berlin",
    industry: "Gastronomie",
    brandTone: "warm, freundlich, einladend",
  },
  branding: {
    logo: {
      src: "/assets/branding/logo-cafe-sonnenblume.svg",
      alt: "Logo Café Sonnenblume",
    },
    favicon: "/assets/branding/favicon-cafe-sonnenblume.png",
    colors: {
      primary: "#F2C94C",
      primaryDark: "#D9A72C",
      secondary: "#8B5E3C",
      accent: "#F2994A",
      text: "#3A2F28",
      mutedText: "#6B5B52",
      background: "#FFF9ED",
      surface: "#FFFFFF",
      success: "#2EB872",
      warning: "#E6A23C",
      error: "#E74C3C",
    },
    typography: {
      heading: {
        fontFamily: "Poppins",
        weights: [400, 600, 700],
      },
      body: {
        fontFamily: "Inter",
        weights: [300, 400, 500],
      },
      baseSizePx: 16,
    },
    radii: {
      sm: 6,
      md: 12,
      lg: 20,
      xl: 28,
    },
    shadows: {
      card: "0 6px 24px rgba(0,0,0,0.08)",
      elevated: "0 10px 36px rgba(0,0,0,0.12)",
    },
    illustrationStyle: "warm-natural",
  },
  routing: {
    pages: [
      { path: "/", title: "Start" },
      { path: "/impressum", title: "Impressum" },
      { path: "/datenschutz", title: "Datenschutz" },
    ],
    anchors: [
      { id: "home", hash: "#home", title: "Start" },
      { id: "ueber-uns", hash: "#ueber-uns", title: "Über uns" },
      { id: "menu", hash: "#menu", title: "Speisekarte" },
      { id: "zeiten", hash: "#zeiten", title: "Öffnungszeiten" },
      { id: "galerie", hash: "#galerie", title: "Galerie" },
      { id: "kontakt", hash: "#kontakt", title: "Kontakt" },
    ],
  },
  navigation: {
    main: [
      { label: "Über uns", href: "#ueber-uns" },
      { label: "Speisekarte", href: "#menu" },
      { label: "Öffnungszeiten", href: "#zeiten" },
      { label: "Galerie", href: "#galerie" },
      { label: "Kontakt", href: "#kontakt" },
    ],
    cta: {
      label: "Tisch reservieren",
      href: "#kontakt",
      variant: "primary",
    },
    mobile: {
      collapseBreakpoint: "lg",
    },
    a11y: {
      skipToContentLabel: "Zum Inhalt springen",
    },
  },
  seo: {
    defaultTitle: "Café Sonnenblume | Berlin Neukölln",
    titleTemplate: "%s | Café Sonnenblume Berlin",
    metaDescription:
      "Warm, freundlich und lecker: Das Café Sonnenblume in Berlin-Neukölln bietet frisch gerösteten Kaffee, hausgemachte Kuchen, Frühstück, Brunch und vegane Optionen.",
    keywords: [
      "Café Berlin",
      "Neukölln Café",
      "Frühstück Berlin",
      "Brunch Berlin",
      "Kaffee",
      "Hausgemachter Kuchen",
      "Vegane Optionen",
    ],
    openGraph: {
      type: "website",
      image: {
        src: "/assets/og/cafe-sonnenblume-og.jpg",
        alt: "Gemütliches Café Sonnenblume mit sonnigem Interieur",
      },
    },
    twitter: {
      card: "summary_large_image",
      image: "/assets/og/cafe-sonnenblume-og.jpg",
    },
    schema: {
      type: "CafeOrCoffeeShop",
      name: "Café Sonnenblume",
      image: "/assets/og/cafe-sonnenblume-og.jpg",
      address: {
        streetAddress: "Sonnenallee 75",
        postalCode: "12045",
        addressLocality: "Berlin",
        addressRegion: "Berlin",
        addressCountry: "DE",
      },
      geo: {
        latitude: 52.4866,
        longitude: 13.4364,
      },
      telephone: "+49 30 5490 1234",
      email: "hallo@cafe-sonnenblume.berlin",
      servesCuisine: ["Cafe", "Frühstück", "Kuchen", "Vegetarisch", "Vegan"],
      priceRange: "€€",
      openingHoursSpecification: [
        {
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        { dayOfWeek: ["Saturday", "Sunday"], opens: "09:00", closes: "18:00" },
      ],
      sameAs: [
        "https://www.instagram.com/cafesonnenblume.berlin",
        "https://www.facebook.com/cafesonnenblume.berlin",
        "https://maps.app.goo.gl/5m2jQxCafSonnenblume",
      ],
    },
  },
  assets: {
    images: [
      {
        src: "/assets/images/hero/sonnenblume-hero.jpg",
        alt: "Sonnendurchfluteter Innenraum des Café Sonnenblume",
      },
      { src: "/assets/images/galerie/kaffee-latte-art.jpg", alt: "Latte Art im Cappuccino" },
      {
        src: "/assets/images/galerie/hausgemachter-kuchen.jpg",
        alt: "Hausgemachter Käsekuchen auf einem Holzteller",
      },
      {
        src: "/assets/images/galerie/fruehstueck-teller.jpg",
        alt: "Frühstücksteller mit frischem Obst und Brot",
      },
      {
        src: "/assets/images/galerie/aussenbereich.jpg",
        alt: "Außenbereich des Cafés an der Sonnenallee",
      },
    ],
  },
  content: {
    hero: {
      id: "home",
      headline: "Willkommen im Café Sonnenblume",
      subheadline: "Kaffee, Kuchen und gute Laune – mitten in Neukölln.",
      primaryCta: { label: "Speisekarte ansehen", href: "#menu" },
      secondaryCta: { label: "Tisch reservieren", href: "#kontakt" },
      bgImage: "/assets/images/hero/sonnenblume-hero.jpg",
      badge: {
        text: "Frühstück täglich",
        icon: "sun",
      },
    },
    highlights: [
      {
        icon: "coffee",
        title: "Frisch gerösteter Kaffee",
        text: "Sorgfältig ausgewählte Bohnen, fair gehandelt und perfekt zubereitet.",
      },
      {
        icon: "cake",
        title: "Hausgemachte Kuchen",
        text: "Täglich frisch gebacken – klassisch und vegan.",
      },
      {
        icon: "leaf",
        title: "Vegane Optionen",
        text: "Leckere pflanzliche Alternativen für jeden Geschmack.",
      },
      {
        icon: "sun",
        title: "Frühstück & Brunch",
        text: "Herzhafte und süße Favoriten – den ganzen Vormittag.",
      },
    ],
    about: {
      id: "ueber-uns",
      title: "Über uns",
      intro:
        "Café Sonnenblume ist ein familiengeführtes Nachbarschaftscafé – warm, freundlich und mit viel Liebe zum Detail.",
      text:
        "Wir glauben an ehrliche Zutaten, Handwerk und Zeit für einen guten Kaffee. Unsere Kuchen backen wir täglich in unserer kleinen Küche. Ob zum Frühstück, für die Arbeitspause oder den gemütlichen Nachmittag – bei uns findest du einen Ort zum Wohlfühlen.",
      image: "/assets/images/galerie/aussenbereich.jpg",
      values: [
        { title: "Nachhaltig", detail: "Mehrweg, lokale Lieferanten und Ökostrom." },
        { title: "Saisonal", detail: "Zutaten nach Saison – frisch und geschmackvoll." },
        { title: "Gemeinschaft", detail: "Ein Ort für Nachbarschaft, Gespräche und Kultur." },
      ],
    },
    gallery: {
      id: "galerie",
      title: "Einblicke",
      images: [
        { src: "/assets/images/galerie/kaffee-latte-art.jpg", alt: "Latte Art – Herz im Cappuccino" },
        { src: "/assets/images/galerie/hausgemachter-kuchen.jpg", alt: "Käsekuchen mit Beeren" },
        { src: "/assets/images/galerie/fruehstueck-teller.jpg", alt: "Frühstücksteller mit Granola und Obst" },
      ],
      layout: "masonry",
    },
  },
  menu: {
    id: "menu",
    title: "Speisekarte",
    currency: "EUR",
    note: "Alle Preise in Euro. Hafer-, Soja- oder Mandelmilch als Alternative erhältlich.",
    categories: [
      {
        id: "hot-drinks",
        title: "Kaffee & Heißgetränke",
        items: [
          {
            id: "espresso",
            name: "Espresso",
            description: "Kräftig und aromatisch",
            variants: [
              { name: "einfach", price: 2.2 },
              { name: "doppio", price: 3.6 },
            ],
            tags: ["vegan", "glutenfrei"],
          },
          {
            id: "cappuccino",
            name: "Cappuccino",
            description: "Mit cremigem Milchschaum",
            variants: [
              { name: "klein", price: 3.5 },
              { name: "groß", price: 4.2 },
            ],
            tags: ["vegetarisch"],
            addOns: [
              { name: "Hafermilch", price: 0.5, tags: ["vegan"] },
              { name: "Sirup (Vanille/Haselnuss/Karamell)", price: 0.4 },
            ],
          },
          {
            id: "flat-white",
            name: "Flat White",
            description: "Doppio mit samtigem Mikroschaum",
            price: 4.2,
            tags: ["vegetarisch"],
          },
          {
            id: "latte-macchiato",
            name: "Latte Macchiato",
            description: "Sanft und milchig",
            variants: [
              { name: "klein", price: 4.0 },
              { name: "groß", price: 4.8 },
            ],
            tags: ["vegetarisch"],
          },
          {
            id: "filterkaffee",
            name: "Filterkaffee",
            description: "Hell geröstet, klar im Geschmack",
            price: 3.0,
            tags: ["vegan", "glutenfrei"],
          },
          {
            id: "heisse-schokolade",
            name: "Heiße Schokolade",
            description: "Feine Schokolade mit Sahne optional",
            price: 3.8,
            tags: ["vegetarisch"],
          },
          {
            id: "tee-auswahl",
            name: "Tee-Auswahl",
            description: "Pfefferminz, Kräuter, Earl Grey, Grüntee",
            price: 3.2,
            tags: ["vegan", "glutenfrei"],
          },
        ],
      },
      {
        id: "cold-drinks",
        title: "Kaltgetränke",
        items: [
          {
            id: "hauslimonade",
            name: "Hausgemachte Limonade",
            description: "Zitrone-Ingwer, frisch und spritzig",
            price: 4.5,
            tags: ["vegan", "glutenfrei"],
          },
          {
            id: "eiskaffee",
            name: "Eiskaffee",
            description: "Mit Vanilleeis und Sahne",
            price: 4.8,
            tags: ["vegetarisch"],
          },
          {
            id: "iced-latte",
            name: "Iced Latte",
            description: "Gekühlter Espresso mit Milch",
            price: 4.5,
            tags: ["vegetarisch"],
          },
          {
            id: "rhabarberschorle",
            name: "Rhabarberschorle",
            description: "Fruchtig und prickelnd",
            price: 3.2,
            tags: ["vegan", "glutenfrei"],
          },
          {
            id: "wasser",
            name: "Wasser 0,33 l",
            description: "Still oder sprudelnd",
            price: 2.5,
            tags: ["vegan", "glutenfrei"],
          },
        ],
      },
      {
        id: "breakfast",
        title: "Frühstück",
        items: [
          {
            id: "sonnenblumen-fruehstueck",
            name: "Sonnenblumen-Frühstück",
            description: "Brotkorb, Konfitüre, Käse, Obst und Butter",
            price: 9.5,
            tags: ["vegetarisch"],
            allergens: ["Gluten", "Milch"],
          },
          {
            id: "veganes-fruehstueck",
            name: "Veganes Frühstück",
            description:
              "Hummus, Avocado, Tomate, Gurke, Oliven, Saaten und Brot",
            price: 9.8,
            tags: ["vegan"],
            allergens: ["Gluten", "Sesam"],
          },
          {
            id: "joghurt-granola",
            name: "Joghurt mit Granola & Beeren",
            description:
              "Naturjoghurt, hausgemachtes Granola, saisonale Beeren",
            price: 5.8,
            tags: ["vegetarisch"],
            allergens: ["Milch", "Schalenfrüchte"],
          },
          {
            id: "ruehrei",
            name: "Rührei von Bio-Eiern",
            description: "Mit Kräutern und Landbrot",
            price: 6.2,
            tags: ["vegetarisch"],
            addOns: [
              { name: "Speck", price: 1.5 },
              { name: "Avocado", price: 1.5 },
            ],
            allergens: ["Ei", "Gluten"],
          },
        ],
      },
      {
        id: "lunch",
        title: "Mittag",
        items: [
          {
            id: "tagessuppe",
            name: "Tagessuppe",
            description: "Saisonal wechselnd, mit Brot",
            price: 6.5,
            tags: ["vegetarisch"],
            note: "Frage nach der veganen Option",
          },
          {
            id: "quiche",
            name: "Quiche des Tages mit Salat",
            description: "Hausgemacht, mit kleinem Beilagensalat",
            price: 8.5,
            tags: ["vegetarisch"],
            allergens: ["Milch", "Ei", "Gluten"],
          },
          {
            id: "avocado-sandwich",
            name: "Avocado-Sandwich",
            description: "Sauerteigbrot, Avocado, Tomate, Rucola",
            price: 7.9,
            tags: ["vegan möglich"],
            allergens: ["Gluten"],
          },
          {
            id: "salat-feta",
            name: "Gemischter Salat mit Feta",
            description: "Bunt gemischt, Zitronen-Olivenöl-Dressing",
            price: 7.5,
            tags: ["vegetarisch"],
            allergens: ["Milch"],
          },
        ],
      },
      {
        id: "cakes",
        title: "Kuchen & Gebäck",
        items: [
          {
            id: "kaesekuchen",
            name: "Käsekuchen",
            description: "Klassisch, cremig",
            price: 3.8,
            tags: ["vegetarisch"],
            allergens: ["Milch", "Ei", "Gluten"],
          },
          {
            id: "apfelkuchen",
            name: "Apfelkuchen",
            description: "Mit Zimt und Streuseln",
            price: 3.6,
            tags: ["vegetarisch"],
            allergens: ["Gluten"],
          },
          {
            id: "brownie",
            name: "Schoko-Brownie",
            description: "Saftig, intensiver Kakao",
            price: 3.2,
            tags: ["vegetarisch"],
            allergens: ["Gluten", "Ei"],
          },
          {
            id: "zimtschnecke",
            name: "Zimtschnecke",
            description: "Zimtig, weich und buttrig",
            price: 3.4,
            tags: ["vegetarisch"],
            allergens: ["Gluten", "Milch"],
          },
          {
            id: "karottenkuchen",
            name: "Karottenkuchen",
            description: "Mit Frischkäsefrosting",
            price: 3.8,
            tags: ["vegetarisch"],
            allergens: ["Gluten", "Milch", "Schalenfrüchte"],
          },
        ],
      },
      {
        id: "extras",
        title: "Extras",
        items: [
          {
            id: "hafermilch",
            name: "Hafermilch",
            description: "Pflanzliche Milchalternative",
            price: 0.5,
            tags: ["vegan"],
          },
          {
            id: "sojamilch",
            name: "Sojamilch",
            description: "Pflanzliche Milchalternative",
            price: 0.4,
            tags: ["vegan"],
          },
          { id: "sirup", name: "Sirup", description: "Vanille / Haselnuss / Karamell", price: 0.4 },
          {
            id: "extra-shot",
            name: "Extra Espresso Shot",
            description: "Mehr Kaffeepower",
            price: 1.2,
            tags: ["vegan", "glutenfrei"],
          },
        ],
      },
    ],
  },
  openingHours: {
    id: "zeiten",
    title: "Öffnungszeiten",
    timezone: "Europe/Berlin",
    hours: [
      { days: ["Mo", "Di", "Mi", "Do", "Fr"], open: "08:00", close: "18:00" },
      { days: ["Sa", "So"], open: "09:00", close: "18:00" },
    ],
    exceptions: [
      {
        title: "Sommerpause",
        range: { start: "2026-08-19", end: "2026-08-25" },
        status: "closed",
        message:
          "Wir machen eine kurze Sommerpause. Ab 26.08. sind wir wieder für euch da.",
      },
      {
        title: "Heiligabend",
        date: "2026-12-24",
        status: "closed",
        message: "Am 24.12. bleibt das Café geschlossen.",
      },
      {
        title: "Silvester",
        date: "2026-12-31",
        status: "open",
        open: "09:00",
        close: "14:00",
        message: "Am 31.12. haben wir bis 14:00 Uhr geöffnet.",
      },
    ],
    note: "Küche schließt 30 Minuten vor Ladenschluss.",
  },
  dynamic: {
    dailySpecials: [
      {
        weekdays: ["Mo", "Di", "Mi", "Do", "Fr"],
        title: "Mittagsdeal",
        time: { start: "12:00", end: "15:00" },
        items: [
          { name: "Quiche + kleiner Salat", price: 9.5 },
          { name: "Tagessuppe + Brot", price: 6.5 },
        ],
      },
      {
        date: "2026-08-15",
        title: "Sommer-Special",
        items: [
          { name: "Eiskaffee", price: 4.5 },
          { name: "Zitrone-Ingwer-Limo", price: 4.0 },
        ],
      },
    ],
  },
  contact: {
    id: "kontakt",
    title: "Kontakt",
    address: {
      street: "Sonnenallee 75",
      postalCode: "12045",
      city: "Berlin",
      district: "Neukölln",
      country: "Deutschland",
      geo: { lat: 52.4866, lng: 13.4364 },
    },
    phone: "+49 30 5490 1234",
    email: "hallo@cafe-sonnenblume.berlin",
    map: {
      provider: "openstreetmap",
      latitude: 52.4866,
      longitude: 13.4364,
      zoom: 16,
      markerTitle: "Café Sonnenblume",
    },
    social: {
      instagram: "https://www.instagram.com/cafesonnenblume.berlin",
      facebook: "https://www.facebook.com/cafesonnenblume.berlin",
      googleMaps: "https://maps.app.goo.gl/5m2jQxCafSonnenblume",
    },
  },
  forms: {
    contactReservation: {
      id: "contact-reservation",
      title: "Schreib uns – Reservierung oder Frage",
      description: "Wir melden uns so schnell wie möglich.",
      endpoint: {
        type: "email",
        to: "hallo@cafe-sonnenblume.berlin",
        subject: "Neue Nachricht von der Website (Café Sonnenblume)",
      },
      autoresponse: {
        enabled: true,
        from: "hallo@cafe-sonnenblume.berlin",
        subject: "Danke für deine Nachricht an das Café Sonnenblume",
        body:
          "Hallo,\n\nDanke für deine Nachricht an das Café Sonnenblume. Wir melden uns in der Regel innerhalb von 24 Stunden. Für kurzfristige Reservierungen ruf uns bitte an: +49 30 5490 1234.\n\nSonnige Grüße\nCafé Sonnenblume",
      },
      fields: [
        { name: "anliegen", type: "select", label: "Anliegen", required: true, options: ["Reservierung", "Allgemeine Anfrage"] },
        { name: "name", type: "text", label: "Name", required: true, minLength: 2, maxLength: 80 },
        { name: "email", type: "email", label: "E-Mail", required: true },
        { name: "telefon", type: "tel", label: "Telefon (optional)", required: false, pattern: "^[0-9+()\\-\\s]{6,}$" },
        {
          name: "datum",
          type: "date",
          label: "Datum",
          required: false,
          visibleIf: { field: "anliegen", equals: "Reservierung" },
        },
        {
          name: "uhrzeit",
          type: "time",
          label: "Uhrzeit",
          required: false,
          visibleIf: { field: "anliegen", equals: "Reservierung" },
        },
        {
          name: "personen",
          type: "number",
          label: "Personenanzahl",
          required: false,
          min: 1,
          max: 10,
          visibleIf: { field: "anliegen", equals: "Reservierung" },
        },
        { name: "nachricht", type: "textarea", label: "Nachricht", required: true, minLength: 10, maxLength: 1000 },
        {
          name: "datenschutz",
          type: "checkbox",
          label: "Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.",
          required: true,
          link: "/datenschutz",
        },
      ],
      successMessage: "Danke! Deine Nachricht wurde verschickt.",
      errorMessage: "Leider ist ein Fehler aufgetreten. Bitte versuche es erneut oder ruf uns an.",
    },
  },
  popups: {
    vacationNotice: {
      enabled: true,
      schedule: { start: "2026-08-19", end: "2026-08-25" },
      display: {
        showFrom: "2026-08-01",
        showOnPages: ["/"],
        position: "center",
        dismissible: true,
      },
      content: {
        title: "Sommerpause 19.–25. August",
        message:
          "Wir machen eine kurze Pause und sind ab dem 26. August wieder da. Danke für euer Verständnis!",
        buttons: [
          { label: "Verstanden", action: "dismiss", variant: "ghost" },
          { label: "Kontakt", action: "scrollTo", target: "#kontakt", variant: "primary" },
        ],
      },
    },
    cookieConsent: {
      enabled: true,
      type: "banner",
      position: "bottom",
      content: {
        message:
          "Wir verwenden nur essenzielle Cookies und anonyme Statistiken, um dein Erlebnis zu verbessern.",
        acceptLabel: "Alle akzeptieren",
        rejectLabel: "Nur Essenzielles",
        policyLabel: "Details",
        policyLink: "/datenschutz",
      },
    },
    specialsBanner: {
      enabled: true,
      showOn: ["Mo", "Di", "Mi", "Do", "Fr"],
      timeWindow: { start: "11:30", end: "14:30" },
      text: "Mittagsdeal: Quiche + Salat oder Tagessuppe – jetzt probieren!",
    },
  },
  layout: {
    containerWidth: 1200,
    sectionSpacing: {
      y: 72,
    },
    heroHeight: "70vh",
    animations: {
      enableFadeIn: true,
      enableParallaxHero: false,
    },
  },
  footer: {
    columns: [
      {
        title: "Café Sonnenblume",
        items: [
          { label: "Über uns", href: "#ueber-uns" },
          { label: "Speisekarte", href: "#menu" },
          { label: "Öffnungszeiten", href: "#zeiten" },
          { label: "Galerie", href: "#galerie" },
        ],
      },
      {
        title: "Rechtliches",
        items: [
          { label: "Impressum", href: "/impressum" },
          { label: "Datenschutz", href: "/datenschutz" },
        ],
      },
      {
        title: "Kontakt",
        items: [
          {
            label: "Sonnenallee 75, 12045 Berlin",
            href: "https://maps.app.goo.gl/5m2jQxCafSonnenblume",
            external: true,
          },
          { label: "+49 30 5490 1234", href: "tel:+493054901234" },
          { label: "hallo@cafe-sonnenblume.berlin", href: "mailto:hallo@cafe-sonnenblume.berlin" },
        ],
      },
    ],
    social: [
      { label: "Instagram", href: "https://www.instagram.com/cafesonnenblume.berlin" },
      { label: "Facebook", href: "https://www.facebook.com/cafesonnenblume.berlin" },
    ],
    copyright: "© 2026 Café Sonnenblume. Alle Rechte vorbehalten.",
  },
  legal: {
    impressum: {
      company: "Café Sonnenblume – Anna Müller",
      legalForm: "Einzelunternehmen",
      owner: "Anna Müller",
      street: "Sonnenallee 75",
      postalCode: "12045",
      city: "Berlin",
      country: "Deutschland",
      phone: "+49 30 5490 1234",
      email: "hallo@cafe-sonnenblume.berlin",
      vatId: "DE309876543",
      responsibleContent: "Anna Müller (Anschrift wie oben)",
      disputeResolution:
        "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/",
      liabilityNote:
        "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für Inhalte externer Links. Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.",
    },
    privacy: {
      controller: "Café Sonnenblume – Anna Müller",
      contact: "hallo@cafe-sonnenblume.berlin",
      dataProcessing: [
        "Betrieb der Website (Server-Logs, essenzielle Cookies).",
        "Kontaktanfragen/Reservierungen (Bearbeitung und Rückmeldung per E-Mail/Telefon).",
        "Anonyme Nutzungsstatistiken (ohne Tracking-Cookies).",
      ],
      legalBases: [
        "Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Anbahnung) für Anfragen/Reservierungen.",
        "Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) für sichere, stabile Website.",
      ],
      retention:
        "Kontakt-/Reservierungsdaten werden nach abschließender Bearbeitung und gesetzlichen Aufbewahrungsfristen gelöscht.",
      rights:
        "Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit sowie Beschwerde bei einer Aufsichtsbehörde.",
    },
  },
  accessibility: {
    contrastRatioMin: 4.5,
    focusVisible: true,
    altTextPolicy: "Alle Bilder haben beschreibende Alt-Texte.",
  },
  performance: {
    imageOptimization: {
      lazyLoad: true,
      formats: ["webp", "avif", "jpeg"],
      responsiveBreakpoints: [480, 768, 1024, 1440],
    },
    cache: {
      staticMaxAgeSeconds: 86400,
    },
  },
  integrations: {
    analytics: {
      enabled: false,
      provider: "none",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
