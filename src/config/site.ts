// Auto-generated site configuration for Café Sonnenblume
// Exported as a typed constant for easy imports across components/pages

const siteConfig = {
  project: {
    id: "cafe-sonnenblume",
    name: "Café Sonnenblume",
    language: "de",
    locale: "de-DE",
    domain: "www.cafe-sonnenblume.de",
    createdAt: "2026-08-05",
  },
  brand: {
    name: "Café Sonnenblume",
    tagline: "Warm. Freundlich. Handgemacht.",
    description:
      "Gemütliches Nachbarschaftscafé in Berlin Prenzlauer Berg mit Spezialitätenkaffee, hausgebackenem Kuchen und herzlicher Atmosphäre.",
    logo: {
      primary: "/assets/branding/logo-sonnenblume-primary.svg",
      monochrome: "/assets/branding/logo-sonnenblume-mono.svg",
      favicon: "/assets/branding/favicon.png",
      alt: "Logo Café Sonnenblume mit Sonnenblume-Signet",
    },
    colors: {
      primary: "#F2B705",
      primaryDark: "#C28E04",
      secondary: "#6B8E23",
      accent: "#E07A5F",
      text: "#3B3B3B",
      mutedText: "#666666",
      background: "#FFF9EC",
      surface: "#FFFFFF",
      border: "#E9E2D0",
    },
    typography: {
      heading: {
        family: "Playfair Display",
        weights: [400, 600, 700],
      },
      body: {
        family: "Inter",
        weights: [400, 500, 600],
      },
      controls: {
        radius: 10,
      },
    },
    images: {
      defaultOg: "/assets/images/og/cafe-sonnenblume-hero.jpg",
      attribution: "Eigene Aufnahmen Café Sonnenblume",
    },
    tone: "warm-freundlich",
  },
  contact: {
    address: {
      street: "Pappelallee 11",
      postalCode: "10437",
      city: "Berlin",
      country: "Deutschland",
    },
    coordinates: {
      lat: 52.5446,
      lng: 13.4121,
    },
    email: "hallo@cafe-sonnenblume.de",
    phone: "+49 30 91432233",
    social: {
      instagram: "https://www.instagram.com/cafe.sonnenblume",
      facebook: "https://www.facebook.com/cafesonnenblume.berlin",
      maps: "https://www.openstreetmap.org/?mlat=52.5446&mlon=13.4121#map=18/52.5446/13.4121",
    },
  },
  seo: {
    defaultTitle:
      "Café Sonnenblume Berlin | Spezialitätenkaffee & hausgebackener Kuchen in Prenzlauer Berg",
    defaultDescription:
      "Das Café Sonnenblume in Berlin Prenzlauer Berg: Frischer Spezialitätenkaffee, hausgebackener Kuchen, Frühstück und Snacks. Gemütlich, freundlich und regional.",
    keywords: [
      "Café Berlin",
      "Prenzlauer Berg",
      "Kaffee",
      "Kuchen",
      "Frühstück",
      "Hausgemacht",
      "Vegan",
    ],
    openGraph: {
      type: "website",
      image: "/assets/images/og/cafe-sonnenblume-hero.jpg",
      imageAlt:
        "Gemütlicher Holztisch mit Cappuccino und Blumen im Café Sonnenblume",
      siteName: "Café Sonnenblume",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CafeOrCoffeeShop",
      name: "Café Sonnenblume",
      image:
        "https://www.cafe-sonnenblume.de/assets/images/og/cafe-sonnenblume-hero.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Pappelallee 11",
        postalCode: "10437",
        addressLocality: "Berlin",
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 52.5446,
        longitude: 13.4121,
      },
      url: "https://www.cafe-sonnenblume.de",
      telephone: "+49 30 91432233",
      servesCuisine: "Kaffee, Kuchen, Frühstück",
      priceRange: "€",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "17:00",
        },
      ],
    },
  },
  accessibility: {
    skipLinks: [
      { href: "#main", label: "Zum Inhalt springen" },
      { href: "#menu", label: "Zum Menü springen" },
      { href: "#contact", label: "Zum Kontakt springen" },
    ],
    contrast: "wcag-aa",
    focusStyle: "outline-3px-primary",
  },
  performance: {
    images: {
      lazy: true,
      formats: ["avif", "webp", "jpg"],
      placeholder: "blur",
    },
    scripts: {
      defer: true,
      asyncAnalytics: true,
    },
    caching: {
      staticMaxAge: 604800,
      imagesMaxAge: 2592000,
    },
  },
  navigation: {
    main: [
      { label: "Start", href: "/", type: "link" },
      { label: "Über uns", href: "/#about", type: "anchor" },
      { label: "Menü", href: "/#menu", type: "anchor" },
      { label: "Öffnungszeiten", href: "/#hours", type: "anchor" },
      { label: "Galerie", href: "/#gallery", type: "anchor" },
      { label: "Kontakt", href: "/#contact", type: "anchor" },
    ],
    footer: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
    cta: {
      label: "Zum Menü",
      href: "/#menu",
      style: "solid",
    },
  },
  data: {
    openingHours: [
      { day: "Montag", opens: "08:00", closes: "18:00" },
      { day: "Dienstag", opens: "08:00", closes: "18:00" },
      { day: "Mittwoch", opens: "08:00", closes: "18:00" },
      { day: "Donnerstag", opens: "08:00", closes: "18:00" },
      { day: "Freitag", opens: "08:00", closes: "18:00" },
      { day: "Samstag", opens: "09:00", closes: "17:00" },
      { day: "Sonntag", opens: null, closes: null, note: "geschlossen" },
    ],
    menu: {
      currency: "EUR",
      categories: [
        {
          id: "coffee",
          title: "Kaffee & Heißgetränke",
          items: [
            {
              name: "Espresso",
              description: "Siebträger, Single Origin",
              size: "30 ml",
              price: { value: 2.2, display: "2,20 €" },
              diet: [],
              allergens: [],
            },
            {
              name: "Doppio",
              description: "Doppelter Espresso",
              size: "60 ml",
              price: { value: 3.2, display: "3,20 €" },
              diet: [],
              allergens: [],
            },
            {
              name: "Americano",
              description: "Espresso mit heißem Wasser",
              size: "250 ml",
              price: { value: 3.1, display: "3,10 €" },
              diet: [],
              allergens: [],
            },
            {
              name: "Cappuccino",
              description: "Mit cremigem Milchschaum",
              size: "200 ml",
              price: { value: 3.6, display: "3,60 €" },
              diet: [],
              allergens: ["Milch"],
              options: [
                { label: "Hafermilch", priceDiff: { value: 0.4, display: "+0,40 €" } },
                { label: "Laktosefrei", priceDiff: { value: 0.4, display: "+0,40 €" } },
              ],
            },
            {
              name: "Flat White",
              description: "Doppelter Espresso, seidige Milch",
              size: "200 ml",
              price: { value: 4.2, display: "4,20 €" },
              diet: [],
              allergens: ["Milch"],
            },
            {
              name: "Latte Macchiato",
              description: "Viel Milch, mild",
              size: "300 ml",
              price: { value: 4, display: "4,00 €" },
              diet: [],
              allergens: ["Milch"],
            },
            {
              name: "Heiße Schokolade",
              description: "Echte Schokolade, Sahne optional",
              size: "250 ml",
              price: { value: 3.9, display: "3,90 €" },
              diet: ["vegetarisch"],
              allergens: ["Milch"],
            },
            {
              name: "Tee Auswahl",
              description: "Grün, Schwarz, Kräuter (Bio)",
              size: "300 ml",
              price: { value: 3.2, display: "3,20 €" },
              diet: ["vegan"],
              allergens: [],
            },
          ],
        },
        {
          id: "cold",
          title: "Kaltgetränke",
          items: [
            {
              name: "Hausgemachte Limonade Zitrone-Ingwer",
              description: "Frisch, leicht scharf",
              size: "300 ml",
              price: { value: 3.8, display: "3,80 €" },
              diet: ["vegan"],
              allergens: [],
            },
            {
              name: "Eiskaffee",
              description: "Espresso auf Eis mit Milch",
              size: "300 ml",
              price: { value: 4.2, display: "4,20 €" },
              diet: [],
              allergens: ["Milch"],
            },
            {
              name: "Apfelschorle",
              description: "Direktsaft, spritzig",
              size: "330 ml",
              price: { value: 2.9, display: "2,90 €" },
              diet: ["vegan"],
              allergens: [],
            },
          ],
        },
        {
          id: "breakfast",
          title: "Frühstück",
          items: [
            {
              name: "Sonnenblumen-Frühstück",
              description:
                "Sauerteigbrot, Butter, Marmelade, Käse, Obst",
              price: { value: 7.9, display: "7,90 €" },
              diet: ["vegetarisch"],
              allergens: ["Gluten", "Milch"],
            },
            {
              name: "Joghurt-Granola-Becher",
              description:
                "Naturjoghurt, hausgemachtes Granola, Beeren, Honig",
              price: { value: 4.9, display: "4,90 €" },
              diet: ["vegetarisch"],
              allergens: ["Milch", "Nüsse"],
            },
            {
              name: "Avocado-Toast",
              description: "Sauerteig, Avocado, Limette, Chili, Kresse",
              price: { value: 6.5, display: "6,50 €" },
              diet: ["vegan"],
              allergens: ["Gluten"],
            },
          ],
        },
        {
          id: "bakery",
          title: "Kuchen & Gebäck",
          items: [
            {
              name: "Apfelkuchen",
              description: "Mit Zimt und knusprigen Streuseln",
              price: { value: 3.5, display: "3,50 €" },
              diet: ["vegetarisch"],
              allergens: ["Gluten", "Milch"],
            },
            {
              name: "Schoko-Brownie",
              description: "Saftig, mit Walnüssen",
              price: { value: 3.2, display: "3,20 €" },
              diet: ["vegetarisch"],
              allergens: ["Gluten", "Nüsse", "Milch", "Ei"],
            },
            {
              name: "Zitronen-Mohn-Kuchen (vegan)",
              description: "Frisch, zitronig",
              price: { value: 3.6, display: "3,60 €" },
              diet: ["vegan"],
              allergens: ["Gluten"],
            },
            {
              name: "Zimtschnecke",
              description: "Hefeteig mit Zimtzucker",
              price: { value: 2.8, display: "2,80 €" },
              diet: ["vegetarisch"],
              allergens: ["Gluten", "Milch", "Ei"],
            },
          ],
        },
        {
          id: "snacks",
          title: "Snacks",
          items: [
            {
              name: "Quiche des Tages",
              description: "Mit saisonalem Gemüse",
              price: { value: 4.9, display: "4,90 €" },
              diet: ["vegetarisch"],
              allergens: ["Gluten", "Milch", "Ei"],
            },
            {
              name: "Hummus mit Gemüsesticks",
              description: "Kichererbsen, Sesam, Zitronensaft",
              price: { value: 4.5, display: "4,50 €" },
              diet: ["vegan"],
              allergens: ["Sesam"],
            },
          ],
        },
      ],
    },
    testimonials: [
      {
        name: "Mara K.",
        text:
          "Mein Lieblingscafé in Prenzlauer Berg – toller Cappuccino und super freundlicher Service.",
      },
      {
        name: "Jonas R.",
        text:
          "Kuchen wie bei Oma, dazu ruhige Ecke zum Arbeiten. Absolute Empfehlung!",
      },
      {
        name: "Lea S.",
        text:
          "Viele vegane Optionen und eine gemütliche Atmosphäre. Komme immer wieder gern.",
      },
    ],
  },
  ui: {
    announcementBar: {
      enabled: false,
      message: "Willkommen im Café Sonnenblume – schön, dass du da bist!",
      style: "subtle",
      dismissible: true,
    },
    theme: "warm",
    sections: [
      {
        id: "hero",
        type: "hero",
        props: {
          eyebrow: "Café in Berlin Prenzlauer Berg",
          title: "Café Sonnenblume",
          subtitle:
            "Frischer Spezialitätenkaffee, hausgebackener Kuchen und ein Lächeln – jeden Tag.",
          primaryCta: { label: "Unser Menü", href: "#menu" },
          secondaryCta: { label: "Kontakt", href: "#contact" },
          image: {
            src: "/assets/images/hero/sonnenblume-hero-table.jpg",
            alt: "Holztisch mit Cappuccino, Stück Kuchen und Sonnenblume im Café Sonnenblume",
            overlay: 0.25,
            focalPoint: "center",
          },
          decoration: { type: "sunflower-illustration", position: "bottom-right" },
        },
      },
      {
        id: "about",
        type: "content",
        props: {
          title: "Warm. Regional. Handgemacht.",
          text:
            "Im Café Sonnenblume rösten wir Qualität hoch: sorgfältig ausgewählte Bohnen, fair gehandelt und frisch zubereitet. Unsere Kuchen und Snacks entstehen täglich in der eigenen Küche – mit saisonalen Zutaten aus der Region. Ob kurze Kaffeepause oder gemütliches Frühstück: Bei uns bist du willkommen.",
          features: [
            { icon: "coffee", title: "Spezialitätenkaffee", text: "Sorgfältig extrahiert, präzise zubereitet." },
            { icon: "leaf", title: "Saisonal & regional", text: "Frische Zutaten aus Berlin und Umgebung." },
            { icon: "heart", title: "Vegan freundlich", text: "Viele vegane und vegetarische Optionen." },
          ],
          image: {
            src: "/assets/images/about/barista-pouring-latte-art.jpg",
            alt: "Barista gießt Latte Art in einer Tasse Cappuccino",
          },
        },
      },
      {
        id: "menu",
        type: "menu",
        props: {
          title: "Unser Menü",
          subtitle: "Kaffee, Kuchen, Frühstück & mehr",
          showCategoryNav: true,
          categories: ["coffee", "cold", "breakfast", "bakery", "snacks"],
        },
      },
      {
        id: "specials",
        type: "cards",
        props: {
          title: "Saisonale Highlights",
          subtitle: "Frisch, hausgemacht und nur für kurze Zeit",
          items: [
            {
              title: "Sommer-Limonade Zitrone-Ingwer",
              text:
                "Leicht scharf, herrlich erfrischend – perfekt für warme Tage.",
              meta: "3,80 €",
              image: {
                src: "/assets/images/specials/lemon-ginger-lemonade.jpg",
                alt: "Glas Limonade mit Zitrone und Ingwer auf Eis",
              },
            },
            {
              title: "Aprikosen-Streuselkuchen",
              text:
                "Buttrige Streusel, saftige Aprikosen – täglich frisch gebacken.",
              meta: "3,60 €",
              image: {
                src: "/assets/images/specials/apricot-crumble-cake.jpg",
                alt: "Stück Aprikosen-Streuselkuchen auf Teller",
              },
            },
          ],
        },
      },
      {
        id: "hours",
        type: "hours",
        props: {
          title: "Öffnungszeiten",
          note: "Feiertage und besondere Öffnungszeiten teilen wir auf Instagram.",
          hours: "@data.openingHours",
        },
      },
      {
        id: "gallery",
        type: "gallery",
        props: {
          title: "Einblicke",
          images: [
            {
              src: "/assets/images/gallery/interior-cozy-corner.jpg",
              alt: "Gemütliche Sitzecke mit Kissen und Pflanzen",
            },
            { src: "/assets/images/gallery/cake-display.jpg", alt: "Vitrine mit verschiedenen hausgebackenen Kuchen" },
            { src: "/assets/images/gallery/latte-art-closeup.jpg", alt: "Nahaufnahme von Latte Art in Cappuccino" },
            { src: "/assets/images/gallery/outdoor-seating.jpg", alt: "Sitzplätze vor dem Café bei Sonnenschein" },
            { src: "/assets/images/gallery/avocado-toast.jpg", alt: "Avocado-Toast auf Holzbrett" },
            {
              src: "/assets/images/gallery/bakery-cinnamon-rolls.jpg",
              alt: "Frisch gebackene Zimtschnecken auf Blech",
            },
          ],
        },
      },
      {
        id: "testimonials",
        type: "testimonials",
        props: {
          title: "Was Gäste sagen",
          items: "@data.testimonials",
        },
      },
      {
        id: "contact",
        type: "contact",
        props: {
          title: "Kontakt & Anfahrt",
          text:
            "Fragen, Feedback oder Vorbestellungen? Schreib uns gern – wir melden uns schnellstmöglich.",
          address: "@contact.address",
          phone: "@contact.phone",
          email: "@contact.email",
          map: {
            provider: "openstreetmap",
            coordinates: "@contact.coordinates",
            zoom: 16,
            markerLabel: "Café Sonnenblume",
          },
          directions:
            "Tram M1 bis Pappelallee, 2 Minuten zu Fuß. Fahrradständer vor dem Café.",
          form: "contact",
        },
      },
    ],
  },
  forms: {
    contact: {
      id: "contact",
      title: "Schreib uns",
      submit: {
        method: "POST",
        endpoint: "/api/forms/contact",
        successRedirect: "/danke",
      },
      notifications: {
        sendEmail: true,
        to: ["hallo@cafe-sonnenblume.de"],
        subject: "Neue Nachricht über das Kontaktformular",
        autoReply: {
          enabled: true,
          subject: "Danke für deine Nachricht an das Café Sonnenblume",
          message:
            "Hallo,\n\nvielen Dank für deine Nachricht! Wir melden uns in der Regel innerhalb von 24 Stunden.\n\nHerzliche Grüße\nCafé Sonnenblume\nPappelallee 11, 10437 Berlin",
        },
      },
      fields: [
        { type: "text", name: "vorname", label: "Vorname", required: true, minLength: 2, maxLength: 60 },
        { type: "text", name: "nachname", label: "Nachname", required: false, maxLength: 60 },
        { type: "email", name: "email", label: "E-Mail", required: true },
        { type: "tel", name: "telefon", label: "Telefon", required: false, pattern: "^\\+?[0-9\\s\\-\\/]{6,}$" },
        {
          type: "select",
          name: "betreff",
          label: "Betreff",
          required: true,
          options: [
            { label: "Allgemeine Anfrage", value: "allgemein" },
            { label: "Vorbestellung", value: "vorbestellung" },
            { label: "Feedback", value: "feedback" },
            { label: "Catering/Gruppe", value: "catering" },
          ],
        },
        { type: "textarea", name: "nachricht", label: "Nachricht", required: true, minLength: 10, maxLength: 2000 },
        {
          type: "checkbox",
          name: "datenschutz",
          label:
            "Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Angaben zur Beantwortung der Anfrage zu.",
          required: true,
          link: { label: "Datenschutzerklärung", href: "/datenschutz" },
        },
      ],
      privacy: {
        dataRetentionDays: 90,
        storeSubmissions: true,
        captcha: { enabled: true, provider: "hcaptcha" },
      },
    },
  },
  pages: [
    {
      path: "/",
      title: "Café Sonnenblume – Berlin Prenzlauer Berg",
      layout: "default",
      sections: [
        "hero",
        "about",
        "menu",
        "specials",
        "hours",
        "gallery",
        "testimonials",
        "contact",
      ],
    },
    {
      path: "/impressum",
      title: "Impressum – Café Sonnenblume",
      layout: "legal",
      content: {
        heading: "Impressum",
        body:
          "Angaben gemäß § 5 TMG\n\nCafé Sonnenblume – Einzelunternehmen\nInhaberin: Anna Müller\nPappelallee 11, 10437 Berlin, Deutschland\nTelefon: +49 30 91432233\nE-Mail: hallo@cafe-sonnenblume.de\n\nVerantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Anna Müller, Pappelallee 11, 10437 Berlin\n\nHaftung für Inhalte: Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.\n\nHaftung für Links: Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.\n\nUrheberrecht: Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.\n\nAußergerichtliche Streitbeilegung: Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
      },
    },
    {
      path: "/datenschutz",
      title: "Datenschutzerklärung – Café Sonnenblume",
      layout: "legal",
      content: {
        heading: "Datenschutzerklärung",
        body:
          "1. Verantwortlicher\nCafé Sonnenblume – Anna Müller\nPappelallee 11, 10437 Berlin, Deutschland\nE-Mail: hallo@cafe-sonnenblume.de\nTelefon: +49 30 91432233\n\n2. Zwecke der Verarbeitung\nWir verarbeiten personenbezogene Daten zur Bereitstellung dieser Website, zur Beantwortung von Kontaktanfragen und zur Systemsicherheit.\n\n3. Server-Logfiles\nBeim Aufruf der Website werden automatisch Informationen durch den Hosting-Provider erhoben (z. B. IP-Adresse, Datum und Uhrzeit, aufgerufene Seiten, Referrer-URL, Browsertyp). Diese Daten sind technisch erforderlich, um die Inhalte der Website korrekt auszuliefern und dienen der Sicherheit. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.\n\n4. Kontaktformular\nBei Nutzung des Kontaktformulars verarbeiten wir die von dir angegebenen Daten (Name, E-Mail, optional Telefon, Betreff, Nachricht) zur Bearbeitung der Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten werden nach spätestens 90 Tagen gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.\n\n5. Cookies\nWir verwenden ausschließlich technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Analytische oder Marketing-Cookies werden nur mit deiner Einwilligung gesetzt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO bzw. Art. 6 Abs. 1 lit. a DSGVO bei Einwilligung.\n\n6. Eingebettete Karten (OpenStreetMap)\nZur Darstellung der Anfahrt verwenden wir OpenStreetMap. Beim Aufruf der Karte können Verbindungen zu Servern von openstreetmap.org entstehen. Es werden dabei technische Nutzungsdaten übertragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Du kannst die Karte blockieren; in diesem Fall wird kein Inhalt geladen.\n\n7. Auftragsverarbeitung & Hosting\nDas Hosting erfolgt bei einem europäischen Anbieter. Mit dem Dienstleister besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO.\n\n8. Rechte der betroffenen Personen\nDu hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch. Zudem besteht ein Beschwerderecht bei einer Aufsichtsbehörde.\n\n9. Kontakt Datenschutz\nFür Anfragen zum Datenschutz: hallo@cafe-sonnenblume.de\n\nStand: 05.08.2026",
      },
    },
    {
      path: "/danke",
      title: "Danke – Wir melden uns!",
      layout: "default",
      content: {
        heading: "Vielen Dank für deine Nachricht!",
        text:
          "Wir haben deine Anfrage erhalten und melden uns so bald wie möglich. Du kannst uns in der Zwischenzeit gern auf Instagram folgen.",
        cta: { label: "Zur Startseite", href: "/" },
      },
    },
  ],
  legal: {
    cookieConsent: {
      enabled: true,
      position: "bottom",
      policyLink: "/datenschutz",
      categories: [
        {
          key: "essential",
          label: "Essentiell",
          description: "Erforderlich für den Betrieb der Website.",
          required: true,
          cookies: ["session_id", "consent_state"],
        },
        {
          key: "analytics",
          label: "Statistik",
          description:
            "Anonyme Statistik zur Verbesserung unseres Angebots.",
          required: false,
          cookies: [],
          enabledByDefault: false,
        },
      ],
    },
  },
  integrations: {
    map: {
      provider: "openstreetmap",
      tiles: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: "© OpenStreetMap-Mitwirkende",
    },
    analytics: {
      provider: "none",
      anonymizeIp: true,
    },
    email: {
      provider: "smtp",
      from: "Café Sonnenblume <no-reply@cafe-sonnenblume.de>",
    },
  },
  footer: {
    slogan: "Dein Nachbarschaftscafé mit Herz.",
    address: "@contact.address",
    phone: "@contact.phone",
    email: "@contact.email",
    openingNote: "Mo–Fr 08:00–18:00 · Sa 09:00–17:00 · So geschlossen",
    navigation: "@navigation.footer",
    social: "@contact.social",
  },
} as const;

export default siteConfig;
