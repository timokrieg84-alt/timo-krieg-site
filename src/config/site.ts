export const site = {
  projectName: "cafe-sonnenblume",
  brand: {
    name: "Café Sonnenblume",
    tagline: "Warm. Freundlich. Lieblingskaffee in Berlin.",
    logo: {
      type: "text",
      text: "Café Sonnenblume",
      alt: "Logo Café Sonnenblume",
    },
  },
  meta: {
    locale: "de-DE",
    language: "de",
    title: "Café Sonnenblume – Warmes, freundliches Café in Berlin",
    description:
      "Café Sonnenblume in Berlin: Frischer Kaffee, hausgebackener Kuchen und liebevolles Frühstück. Entdecke unsere Speisekarte, Öffnungszeiten und kontaktiere uns direkt.",
    keywords: [
      "Café Berlin",
      "Kaffee",
      "Kuchen",
      "Frühstück",
      "Spezialitätenkaffee",
      "Sonnenblume",
      "Nachbarschaftscafé",
    ],
    canonicalPath: "/",
    og: {
      title: "Café Sonnenblume – Dein Nachbarschaftscafé in Berlin",
      description:
        "Warmes, freundliches Café mit Kaffee, Kuchen, Frühstück und veganen Optionen.",
      image: null,
    },
  },
  theme: {
    colors: {
      primary: "#F6C945",
      primaryDark: "#C99E15",
      secondary: "#386641",
      accent: "#E08E45",
      background: "#FFF9E9",
      surface: "#FFFFFF",
      text: "#2F2A1F",
      muted: "#8A7F6A",
      border: "#E8DFC8",
      success: "#2E7D32",
      warning: "#E65100",
      error: "#C62828",
    },
    typography: {
      fontFamily:
        "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Noto Sans, Apple Color Emoji, Segoe UI Emoji",
      baseSize: 16,
      scale: {
        h1: 40,
        h2: 28,
        h3: 22,
        body: 16,
        small: 14,
      },
      lineHeights: {
        heading: 1.2,
        body: 1.6,
      },
    },
    radius: {
      sm: 6,
      md: 10,
      lg: 16,
      xl: 24,
    },
    shadows: {
      sm: "0 1px 2px rgba(0,0,0,0.06)",
      md: "0 6px 16px rgba(0,0,0,0.08)",
      lg: "0 12px 28px rgba(0,0,0,0.12)",
    },
    layout: {
      containerWidth: 1140,
      sectionSpacing: 72,
      gridGap: 24,
    },
    buttons: {
      primary: {
        bg: "#386641",
        text: "#FFFFFF",
        hoverBg: "#2F5436",
      },
      secondary: {
        bg: "#F6C945",
        text: "#2F2A1F",
        hoverBg: "#EABA2D",
      },
    },
  },
  navigation: {
    primary: [
      { label: "Start", target: "#hero" },
      { label: "Speisekarte", target: "#menu" },
      { label: "Öffnungszeiten", target: "#hours" },
      { label: "Über uns", target: "#about" },
      { label: "Galerie", target: "#gallery" },
      { label: "Kontakt", target: "#contact" },
    ],
    footer: [
      { label: "Speisekarte", target: "#menu" },
      { label: "Kontakt", target: "#contact" },
    ],
    cta: {
      label: "Kontakt",
      target: "#contact",
    },
  },
  sections: [
    {
      id: "hero",
      type: "hero",
      content: {
        eyebrow: "Willkommen im",
        title: "Café Sonnenblume",
        subtitle:
          "Dein warmes, freundliches Nachbarschaftscafé in Berlin – mit frischem Kaffee, hausgebackenem Kuchen und einem Lächeln.",
        ctas: [
          { label: "Speisekarte ansehen", style: "primary", target: "#menu" },
          { label: "Kontakt", style: "secondary", target: "#contact" },
        ],
        uspBadges: [
          "Fair gehandelter Kaffee",
          "Hausgemachte Kuchen",
          "Vegetarische & vegane Optionen",
          "Hunde willkommen",
        ],
        media: {
          type: "image",
          src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit=crop",
          alt: "Sonniges Café-Ambiente mit Kaffee und Gebäck auf Holztisch",
          overlay: 0.25,
          focal: "center",
        },
      },
    },
    {
      id: "menu",
      type: "menu",
      title: "Speisekarte",
      currency: "EUR",
      vatIncluded: true,
      notes: "Alle Preise in EUR inkl. MwSt. Änderungen vorbehalten.",
      categories: [
        {
          id: "hot-drinks",
          name: "Heißgetränke",
          items: [
            {
              name: "Espresso",
              description: "Kräftig und aromatisch, Single Shot",
              priceCents: 220,
              tags: ["vegetarisch", "vegan"],
            },
            {
              name: "Cappuccino",
              description: "Mit feinporigem Milchschaum",
              priceCents: 320,
              tags: ["vegetarisch"],
            },
            {
              name: "Latte Macchiato",
              description: "Sanft und milchig",
              priceCents: 360,
              tags: ["vegetarisch"],
            },
            {
              name: "Filterkaffee",
              description: "Schonend gefiltert, schwarz",
              priceCents: 280,
              tags: ["vegetarisch", "vegan"],
            },
            {
              name: "Heiße Schokolade",
              description: "Kräftige Kakaonote, mit Sahne auf Wunsch",
              priceCents: 350,
              tags: ["vegetarisch"],
            },
            {
              name: "Tee-Auswahl",
              description: "Verschiedene Sorten, lose aufgebrüht",
              priceCents: 290,
              tags: ["vegetarisch", "vegan"],
            },
          ],
        },
        {
          id: "cold-drinks",
          name: "Kaltgetränke",
          items: [
            {
              name: "Hausgemachte Limonade",
              description: "Zitrone–Ingwer, erfrischend",
              priceCents: 390,
              tags: ["vegetarisch", "vegan"],
            },
            {
              name: "Eiskaffee",
              description: "Mit Vanilleeis und kaltem Kaffee",
              priceCents: 450,
              tags: ["vegetarisch"],
            },
            {
              name: "Schorle",
              description: "Apfel oder Rhabarber",
              priceCents: 320,
              tags: ["vegetarisch", "vegan"],
            },
            {
              name: "Mineralwasser 0,33 l",
              description: "Prickelnd oder still",
              priceCents: 220,
              tags: ["vegetarisch", "vegan"],
            },
          ],
        },
        {
          id: "breakfast",
          name: "Frühstück",
          items: [
            {
              name: "Croissant mit Butter & Marmelade",
              description: "Frisch gebacken",
              priceCents: 350,
              tags: ["vegetarisch"],
            },
            {
              name: "Joghurt mit Granola & Obst",
              description: "Hausgemachtes Knuspermüsli, saisonales Obst",
              priceCents: 480,
              tags: ["vegetarisch"],
            },
            {
              name: "Avocado-Stulle mit Kresse",
              description: "Auf Sauerteigbrot, Sesam",
              priceCents: 620,
              tags: ["vegan"],
            },
            {
              name: "Rührei auf Sauerteigbrot",
              description: "Mit Schnittlauch",
              priceCents: 650,
              tags: ["vegetarisch"],
            },
          ],
        },
        {
          id: "cakes",
          name: "Kuchen & Gebäck",
          items: [
            {
              name: "Käsekuchen",
              description: "Cremig, klassisch",
              priceCents: 380,
              tags: ["vegetarisch"],
            },
            {
              name: "Zimtschnecke",
              description: "Saftig, mit Zuckerguss",
              priceCents: 320,
              tags: ["vegetarisch"],
            },
            {
              name: "Möhrenkuchen",
              description: "Mit Frischkäse-Topping",
              priceCents: 390,
              tags: ["vegetarisch"],
            },
            {
              name: "Schokokuchen (glutenfrei)",
              description: "Intensiv schokoladig",
              priceCents: 420,
              tags: ["vegetarisch", "glutenfrei"],
            },
          ],
        },
        {
          id: "snacks",
          name: "Snacks",
          items: [
            {
              name: "Quiche des Tages",
              description: "Wechselnde Sorte, vegetarisch",
              priceCents: 520,
              tags: ["vegetarisch"],
            },
            {
              name: "Tagessuppe",
              description: "Saisonal, mit Brot",
              priceCents: 490,
              tags: ["vegan"],
            },
          ],
        },
      ],
    },
    {
      id: "hours",
      type: "hours",
      title: "Öffnungszeiten",
      regular: {
        monday: { label: "Montag", open: "08:00", close: "18:00", closed: false },
        tuesday: { label: "Dienstag", open: "08:00", close: "18:00", closed: false },
        wednesday: { label: "Mittwoch", open: "08:00", close: "18:00", closed: false },
        thursday: { label: "Donnerstag", open: "08:00", close: "18:00", closed: false },
        friday: { label: "Freitag", open: "08:00", close: "18:00", closed: false },
        saturday: { label: "Samstag", open: "09:00", close: "17:00", closed: false },
        sunday: { label: "Sonntag", open: "09:00", close: "17:00", closed: false },
      },
      exceptions: [],
      notes: "Feiertage können abweichen.",
    },
    {
      id: "about",
      type: "text-media",
      title: "Über uns",
      content: {
        text:
          "Im Café Sonnenblume dreht sich alles um Wärme, Qualität und Gemeinschaft. Wir brühen fair gehandelten Kaffee, backen Kuchen mit viel Liebe und servieren Frühstück, das glücklich macht – vegetarisch und vegan inklusive. Komm vorbei, fühl dich wie zuhause und genieß eine kleine Auszeit vom Alltag.",
        highlights: [
          "Saisonal & hausgemacht",
          "Regionale Lieferanten",
          "Herzliches Team",
        ],
      },
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
        alt: "Barista bereitet Kaffee an einer Siebträgermaschine zu",
      },
      layout: "media-right",
    },
    {
      id: "gallery",
      type: "gallery",
      title: "Ein Blick ins Café",
      items: [
        {
          src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1400&auto=format&fit=crop",
          alt: "Tasse Cappuccino mit Latte Art auf Holztisch",
        },
        {
          src: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=1400&auto=format&fit=crop",
          alt: "Frisch gebackene Zimtschnecken auf Blech",
        },
        {
          src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1400&auto=format&fit=crop",
          alt: "Frühstücksteller mit Avocado-Stulle und Kaffee",
        },
        {
          src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1400&auto=format&fit=crop",
          alt: "Helles, freundliches Café-Interieur mit Pflanzen",
        },
      ],
      columns: 2,
    },
    {
      id: "contact",
      type: "contact-form",
      title: "Kontakt",
      intro:
        "Hast du eine Frage, möchtest reservieren oder Feedback geben? Schreib uns – wir freuen uns auf deine Nachricht.",
      form: {
        method: "POST",
        action: "/api/contact",
        submitLabel: "Nachricht senden",
        successMessage:
          "Danke! Deine Nachricht wurde erfolgreich versendet. Wir melden uns zeitnah.",
        errorMessage:
          "Ups, da ist etwas schiefgelaufen. Bitte versuche es später erneut.",
        fields: [
          {
            type: "text",
            name: "name",
            label: "Name",
            placeholder: "Dein Name",
            required: true,
            minLength: 2,
            maxLength: 80,
          },
          {
            type: "email",
            name: "email",
            label: "E-Mail",
            placeholder: "deine@mail.de",
            required: true,
          },
          {
            type: "textarea",
            name: "message",
            label: "Nachricht",
            placeholder: "Wie können wir helfen?",
            required: true,
            minLength: 10,
            maxLength: 2000,
          },
          {
            type: "checkbox",
            name: "consent",
            label:
              "Ich stimme der Verarbeitung meiner Angaben zum Zweck der Kontaktaufnahme zu.",
            required: true,
          },
        ],
        privacyNote:
          "Hinweis: Deine Daten werden ausschließlich zur Bearbeitung deiner Anfrage verwendet.",
      },
    },
    {
      id: "footer",
      type: "footer",
      content: {
        columns: [
          {
            title: "Café Sonnenblume",
            items: [
              "Warmes, freundliches Nachbarschaftscafé in Berlin.",
              "Fairer Kaffee • Hausgemachte Kuchen • Vegane Optionen",
            ],
          },
          {
            title: "Kontakt",
            items: ["Berlin, Deutschland", "Kontakt über das Formular"],
          },
          {
            title: "Navigation",
            links: [
              { label: "Speisekarte", target: "#menu" },
              { label: "Öffnungszeiten", target: "#hours" },
              { label: "Über uns", target: "#about" },
              { label: "Kontakt", target: "#contact" },
            ],
          },
        ],
        legal: {
          copyright: "© Café Sonnenblume",
          year: 2026,
        },
      },
    },
  ],
  features: {
    holidayNotice: {
      enabled: false,
      variant: "popup",
      message: "",
      period: null,
      dismissForDays: 7,
    },
    dynamicSections: {
      menu: {
        grouping: "categories",
        showTagsLegend: true,
        tagsLegend: {
          vegetarisch: "Vegetarisch",
          vegan: "Vegan",
          glutenfrei: "Glutenfrei",
        },
      },
      hours: {
        showTodayHighlight: true,
        showExceptions: true,
      },
    },
    performance: {
      lazyLoadImages: true,
      preloadHeroMedia: true,
      optimizeFonts: false,
    },
    analytics: {
      enabled: false,
      provider: null,
    },
    cookieBanner: {
      enabled: false,
      region: "DE",
      text: "Wir verwenden Cookies für eine bessere Nutzungserfahrung.",
      actions: {
        accept: "Akzeptieren",
        decline: "Ablehnen",
      },
    },
    structuredData: {
      enabled: false,
      type: "LocalBusiness",
    },
  },
  accessibility: {
    skipLinks: true,
    focusStyle: "outline-2px",
    altTextPolicy: "required",
    ariaLandmarks: true,
  },
} as const;

export default site;
