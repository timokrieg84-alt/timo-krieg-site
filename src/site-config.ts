export const siteConfig = {
  site: {
    name: "Zahnarztpraxis Dr. Test",
    tagline: "Moderne Zahnheilkunde mit Zeit und Zuhören – in Berlin-Mitte",
    baseUrl: "https://www.dr-test-berlin.de",
    language: "de",
    industry: "Zahnarztpraxis",
    region: "Berlin",
    brand: {
      styleKeywords: ["modern", "edel", "vertrauenswürdig"],
      logo: {
        light: "/assets/brand/logo-light.svg",
        dark: "/assets/brand/logo-dark.svg",
        alt: "Logo Zahnarztpraxis Dr. Test"
      },
      favicon: "/assets/brand/favicon.png",
      colors: {
        primary: "#0F2B46",
        primaryDark: "#0B2236",
        accent: "#C6A667",
        accentDark: "#A78B52",
        background: "#FFFFFF",
        surface: "#F6F7F9",
        text: "#1F2937",
        mutedText: "#6B7280",
        success: "#0E9F6E",
        warning: "#F59E0B",
        error: "#DC2626"
      },
      typography: {
        headings: {
          family: "Playfair Display",
          fallback: "Times New Roman, serif",
          weights: [400, 600, 700]
        },
        body: {
          family: "Inter",
          fallback: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
          weights: [300, 400, 500, 600]
        },
        sizes: {
          h1: "44px",
          h2: "36px",
          h3: "28px",
          body: "18px",
          small: "15px"
        }
      },
      ui: {
        radius: { sm: 6, md: 10, lg: 16 },
        shadow: {
          sm: "0 2px 8px rgba(0,0,0,0.06)",
          md: "0 6px 18px rgba(0,0,0,0.08)"
        },
        buttons: {
          primary: { bg: "#0F2B46", text: "#FFFFFF", hoverBg: "#0B2236" },
          secondary: { bg: "#C6A667", text: "#0F2B46", hoverBg: "#A78B52" },
          ghost: { bg: "transparent", text: "#0F2B46", hoverBg: "rgba(15,43,70,0.06)" }
        }
      }
    },
    contact: {
      practiceName: "Zahnarztpraxis Dr. Test",
      owner: "Dr. med. dent. Julia Test",
      street: "Friedrichstraße 123",
      postalCode: "10117",
      city: "Berlin",
      district: "Mitte",
      country: "Deutschland",
      geo: { lat: 52.5187, lng: 13.3884 },
      phone: { display: "+49 30 12345678", e164: "+493012345678" },
      email: "praxis@dr-test-berlin.de",
      appointmentUrl: "https://www.dr-test-berlin.de/termin-buchen",
      emergencyInfo: {
        text: "Bei akuten Zahnschmerzen versuchen wir am selben Tag einen Termin zu ermöglichen. Außerhalb unserer Öffnungszeiten informiert der zahnärztliche Notdienst.",
        notdienstUrl: "https://www.kzv-berlin.de/patienten/notdienst.html"
      },
      parkingAndArrival: {
        publicTransport: [
          "S-/U Friedrichstraße (S1, S2, S25, S26, U6) – ca. 2 Gehminuten",
          "Buslinien 147, 245 – Haltestelle Friedrichstraße/Reinhardtstraße"
        ],
        parking: "Öffentliche Parkhäuser in der Friedrichstraße und an der Dorotheenstraße (gebührenpflichtig).",
        accessibility: "Barrierefreier Zugang, Aufzug vorhanden, stufenloser Eingangsbereich."
      },
      openingHours: [
        { day: "Montag", opens: "08:00", closes: "18:00" },
        { day: "Dienstag", opens: "08:00", closes: "18:00" },
        { day: "Mittwoch", opens: "08:00", closes: "13:00" },
        { day: "Donnerstag", opens: "10:00", closes: "20:00" },
        { day: "Freitag", opens: "08:00", closes: "15:00" },
        { day: "Samstag", opens: null, closes: null },
        { day: "Sonntag", opens: null, closes: null }
      ],
      notes: "Täglich reservieren wir kurzfristige Slots für Schmerzpatientinnen und -patienten."
    },
    seo: {
      titleTemplate: "%s | Zahnarztpraxis Dr. Test Berlin",
      defaultTitle: "Zahnarztpraxis Dr. Test – Ihre Zahnärztin in Berlin-Mitte",
      defaultDescription:
        "Moderne, einfühlsame Zahnheilkunde in Berlin-Mitte: Prophylaxe, Ästhetik, Implantologie, Parodontologie, Endodontie und Kinderzahnheilkunde. Termin online buchen.",
      ogImage: "/assets/seo/og-default.jpg",
      twitterHandle: "@drtestpraxis",
      schema: {
        organization: {
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: "Zahnarztpraxis Dr. Test",
          url: "https://www.dr-test-berlin.de",
          telephone: "+49 30 12345678",
          email: "praxis@dr-test-berlin.de",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Friedrichstraße 123",
            addressLocality: "Berlin",
            postalCode: "10117",
            addressCountry: "DE"
          },
          geo: { "@type": "GeoCoordinates", latitude: 52.5187, longitude: 13.3884 }
        }
      }
    },
    legal: {
      impressum: {
        provider: "Zahnarztpraxis Dr. Test",
        owner: "Dr. med. dent. Julia Test",
        address: "Friedrichstraße 123, 10117 Berlin",
        contact: {
          phone: "+49 30 12345678",
          email: "praxis@dr-test-berlin.de",
          web: "https://www.dr-test-berlin.de"
        },
        profession: {
          title: "Zahnärztin (verliehen in Deutschland)",
          chamber: "Zahnärztekammer Berlin",
          chamberUrl: "https://www.zaek-berlin.de",
          kzv: "Kassenzahnärztliche Vereinigung Berlin",
          kzvUrl: "https://www.kzv-berlin.de",
          regulations: [
            { name: "Berufsordnung der Zahnärztekammer Berlin", url: "https://www.zaek-berlin.de/recht/berufsordnung/" },
            { name: "Heilberufekammergesetz Berlin", url: "https://gesetze.berlin.de/" }
          ]
        },
        vat: "Keine Umsatzsteuer-ID gem. § 19 UStG (Kleinunternehmerregelung) oder nicht erforderlich.",
        responsibleContent: "Dr. med. dent. Julia Test (Anschrift wie oben)",
        disclaimer:
          "Inhalte dieser Website wurden sorgfältig erstellt. Für externe Links wird keine Haftung übernommen. Medizinische Informationen ersetzen keine persönliche Untersuchung und Beratung."
      },
      privacy: {
        controller: {
          name: "Zahnarztpraxis Dr. Test – Dr. med. dent. Julia Test",
          address: "Friedrichstraße 123, 10117 Berlin",
          email: "praxis@dr-test-berlin.de",
          phone: "+49 30 12345678"
        },
        processingPurposes: [
          "Terminverwaltung und Beantwortung von Anfragen",
          "Websitestatistik (anonymisiert, selbst gehostet)",
          "Darstellung von Karten (OpenStreetMap)",
          "Sicherheit und Betrugsprävention (Server-Logfiles)"
        ],
        legalBases: [
          "Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Anfrage)",
          "Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse – sichere, nutzerfreundliche Website)",
          "Art. 6 Abs. 1 lit. a DSGVO (Einwilligung für optionale Statistik)"
        ],
        dataRecipients: ["Hosting-Provider (Deutschland/EU)", "Eigenes Matomo-Analytics (selbst gehostet)"],
        retention:
          "Kontaktanfragen: 12 Monate. Server-Logs: 14 Tage. Bewerbungen: 6 Monate. Gesetzliche Aufbewahrungsfristen bleiben unberührt.",
        cookies: { essential: ["session_id", "cookie_consent"], analytics: ["_pk_id.*", "_pk_ses.*"] },
        rights: [
          "Auskunft, Berichtigung, Löschung, Einschränkung",
          "Widerspruch gegen Verarbeitung",
          "Datenübertragbarkeit",
          "Widerruf von Einwilligungen mit Wirkung für die Zukunft",
          "Beschwerderecht bei einer Aufsichtsbehörde"
        ],
        dpo: null,
        thirdCountryTransfer: "Keine Übermittlung in Drittländer geplant.",
        contactForRights: "praxis@dr-test-berlin.de"
      }
    }
  },
  navigation: {
    main: [
      { label: "Startseite", path: "/", pageId: "startseite" },
      { label: "Leistungen", path: "/leistungen", pageId: "leistungen" },
      { label: "Team", path: "/team", pageId: "team" },
      { label: "Kontakt", path: "/kontakt", pageId: "kontakt" }
    ],
    cta: [
      { label: "Termin buchen", path: "/termin-buchen", style: "secondary" },
      { label: "Anrufen", href: "tel:+493012345678", style: "primary" }
    ],
    footer: [
      { label: "Impressum", path: "/impressum", pageId: "impressum" },
      { label: "Datenschutz", path: "/datenschutz", pageId: "datenschutz" },
      { label: "Notdienst", external: "https://www.kzv-berlin.de/patienten/notdienst.html" }
    ]
  },
  integrations: {
    analytics: {
      type: "matomo",
      enabled: true,
      url: "https://analytics.dr-test-berlin.de",
      siteId: "1",
      useCookies: true,
      respectDNT: true,
      cookieDomain: ".dr-test-berlin.de",
      anonymizeIp: true,
      enabledOnConsentCategory: "analytics"
    },
    map: {
      provider: "OpenStreetMap",
      tileServer: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      marker: {
        lat: 52.5187,
        lng: 13.3884,
        title: "Zahnarztpraxis Dr. Test",
        popup: "Friedrichstraße 123, 10117 Berlin"
      },
      attribution: "© OpenStreetMap-Mitwirkende"
    },
    cookieConsent: {
      mode: "opt-in",
      position: "bottom",
      palette: {
        popupBg: "#0F2B46",
        popupText: "#FFFFFF",
        buttonBg: "#C6A667",
        buttonText: "#0F2B46"
      },
      texts: {
        headline: "Datenschutzeinstellungen",
        intro:
          "Wir verwenden Cookies, um unsere Website sicher zu betreiben und – nach Ihrer Zustimmung – zur anonymen Statistik.",
        acceptAll: "Alle akzeptieren",
        rejectAll: "Nur notwendige",
        manage: "Einstellungen",
        details: {
          essential: "Erforderlich für den Betrieb der Website.",
          analytics:
            "Anonyme Statistik zur Verbesserung unseres Angebots (Matomo, selbst gehostet)."
        }
      },
      categories: [
        { id: "essential", label: "Notwendig", required: true, default: true },
        { id: "analytics", label: "Statistik", required: false, default: false }
      ]
    }
  },
  features: {
    announcements: [
      {
        id: "urlaub-aug-2026",
        type: "modal",
        title: "Urlaubspause",
        message:
          "Unsere Praxis bleibt vom 15.08.2026 bis einschließlich 26.08.2026 geschlossen. Ab dem 27.08.2026 sind wir wie gewohnt für Sie da. In dringenden Fällen wenden Sie sich bitte an den zahnärztlichen Notdienst der KZV Berlin.",
        cta: {
          label: "Notdienst anzeigen",
          external: "https://www.kzv-berlin.de/patienten/notdienst.html"
        },
        activeFrom: "2026-08-15",
        activeUntil: "2026-08-26",
        dismissible: true,
        showOnPages: ["startseite", "leistungen", "team", "kontakt"]
      }
    ],
    dynamic: {
      availabilityWidget: {
        enabled: true,
        source: "/api/appointments/next-slots",
        refreshIntervalSec: 300,
        displayCount: 3
      }
    }
  },
  data: {
    services: [
      {
        id: "prophylaxe-pzr",
        title: "Prophylaxe & Professionelle Zahnreinigung (PZR)",
        slug: "prophylaxe-pzr",
        category: "Prophylaxe",
        summary:
          "Vorbeugung statt Reparatur: Sanfte Reinigung, Beratung und individuelle Prophylaxepläne.",
        duration: "45–60 Minuten",
        indications: ["Zahnstein und Beläge", "Verfärbungen", "Parodontitis-Prävention"],
        procedure: [
          "Befundaufnahme und Plaque-Index",
          "Schonende Entfernung harter und weicher Beläge (Ultraschall & Handinstrumente)",
          "Air-Polishing zur Entfernung von Verfärbungen",
          "Fluoridierung und individuelle Mundhygieneinstruktion"
        ],
        aftercare: "24 Stunden auf stark färbende Lebensmittel und Rauchen verzichten.",
        suitableFor: ["Erwachsene", "Jugendliche", "Schwangere (in Absprache)"],
        contraindications: ["Akute Entzündungen der Mundschleimhaut"],
        notes: "Empfehlung: Alle 6 Monate, bei Parodontitis alle 3–4 Monate.",
        image: {
          src: "/assets/images/services/pzr.jpg",
          alt: "Professionelle Zahnreinigung in Berlin-Mitte"
        },
        cta: { label: "PZR-Termin buchen", path: "/termin-buchen?p=prophylaxe-pzr" }
      },
      {
        id: "fuellungen-inlays",
        title: "Füllungen & Inlays",
        slug: "fuellungen-inlays",
        category: "Restaurative Zahnheilkunde",
        summary:
          "Zahnfarbene Kompositfüllungen und hochwertige Keramikinlays für langlebige Ergebnisse.",
        duration: "30–90 Minuten",
        indications: ["Karies", "Frakturen kleiner Defekte"],
        procedure: [
          "Lokalanästhesie nach Bedarf",
          "Schonende Kariesentfernung",
          "Adhäsive Füllungstechnik oder Abdruck/Scan für Inlay",
          "Hochglanzpolitur und Okklusionskontrolle"
        ],
        aftercare:
          "Empfindlichkeiten sind kurzfristig möglich, klingen i. d. R. ab.",
        suitableFor: ["Erwachsene", "Jugendliche"],
        contraindications: [],
        image: { src: "/assets/images/services/fuellung.jpg", alt: "Zahnfarbene Füllung" },
        cta: { label: "Beratung anfragen", path: "/kontakt?thema=fuellung" }
      },
      {
        id: "wurzelbehandlung-endodontie",
        title: "Wurzelbehandlung (Endodontie)",
        slug: "wurzelbehandlung-endodontie",
        category: "Endodontie",
        summary:
          "Zahnerhalt durch maschinelle Aufbereitung und elektrometrische Längenbestimmung.",
        duration: "60–120 Minuten",
        indications: ["Tiefe Karies", "Pulpitis", "Apikale Parodontitis"],
        procedure: [
          "Anästhesie und Kofferdam",
          "Maschinelle Aufbereitung mit NiTi-Instrumenten",
          "Spülprotokoll und medikamentöse Einlage",
          "Wurzelfüllung und bakteriendichter Verschluss"
        ],
        aftercare:
          "Nachkontrolle vereinbaren; ggf. definitive Krone zur Stabilisierung.",
        suitableFor: ["Erwachsene"],
        contraindications: ["Nicht erhaltungswürdige Zähne"],
        image: { src: "/assets/images/services/endodontie.jpg", alt: "Endodontische Behandlung" },
        cta: {
          label: "Termin zur Schmerzabklärung",
          path: "/termin-buchen?p=wurzelbehandlung-endodontie"
        }
      },
      {
        id: "parodontologie",
        title: "Parodontologie",
        slug: "parodontologie",
        category: "Parodontologie",
        summary:
          "Systematische Parodontitistherapie mit Nachsorge im Recall-Programm.",
        duration: "Sitzungen à 60–90 Minuten",
        indications: ["Zahnfleischbluten", "Taschenbildung", "Lockerungen"],
        procedure: [
          "Initiale Diagnostik (PSI, Sondierungstiefen, Röntgen)",
          "Antiinfektiöse Therapie (geschlossenes Debridement)",
          "Reevaluation und unterstützende Parodontaltherapie (UPT)"
        ],
        aftercare:
          "Regelmäßige UPT-Termine und häusliche Mundhygiene sind zentral.",
        suitableFor: ["Erwachsene", "Risikopatienten (Rauchen, Diabetes)"],
        contraindications: ["Unkontrollierter Diabetes", "Akute Allgemeinerkrankungen"],
        image: { src: "/assets/images/services/parodontologie.jpg", alt: "Parodontale Behandlung" },
        cta: { label: "Befundtermin vereinbaren", path: "/termin-buchen?p=parodontologie" }
      },
      {
        id: "zahnersatz-kronen-bruecken",
        title: "Zahnersatz (Kronen, Brücken)",
        slug: "zahnersatz-kronen-bruecken",
        category: "Prothetik",
        summary:
          "Festsitzender Zahnersatz aus Keramik – präzise gefertigt und ästhetisch.",
        duration: "2–3 Termine",
        indications: ["Stark zerstörte Zähne", "Zahnlücken"],
        procedure: [
          "Digitale Abformung mit Intraoralscanner",
          "Provisorium und Farbbestimmung",
          "Eingliederung und Feinanpassung"
        ],
        aftercare:
          "Regelmäßige Kontrolle und Prophylaxe verlängern die Lebensdauer.",
        suitableFor: ["Erwachsene"],
        contraindications: ["Unzureichende Mundhygiene (vorübergehend)"],
        image: { src: "/assets/images/services/kronen.jpg", alt: "Keramikkrone" },
        cta: { label: "Beratungstermin", path: "/termin-buchen?p=zahnersatz-kronen-bruecken" }
      },
      {
        id: "implantologie",
        title: "Implantologie",
        slug: "implantologie",
        category: "Chirurgie",
        summary:
          "Zahnimplantate als hochwertige Lösung für Einzelzahnlücken und Prothesenhalt.",
        duration: "Chirurgie 45–90 Minuten, Einheilung 3–6 Monate",
        indications: ["Einzelzahnlücke", "Freiendsituation", "Prothesenstabilisierung"],
        procedure: [
          "3D-Planung (DVT extern) und Risikoaufklärung",
          "Minimalinvasive Implantation, Nahtentfernung nach 7–10 Tagen",
          "Freilegung und prothetische Versorgung"
        ],
        aftercare: "Rauchkarenz und gute Mundhygiene fördern die Einheilung.",
        suitableFor: ["Erwachsene"],
        contraindications: [
          "Unkontrollierte Allgemeinerkrankungen",
          "Bisphosphonattherapie (relativ)"
        ],
        image: { src: "/assets/images/services/implantat.jpg", alt: "Zahnimplantat" },
        cta: { label: "Implantat-Beratung", path: "/termin-buchen?p=implantologie" }
      },
      {
        id: "aesthetik-bleaching-veneers",
        title: "Ästhetik (Bleaching & Veneers)",
        slug: "aesthetik-bleaching-veneers",
        category: "Ästhetische Zahnheilkunde",
        summary:
          "Schonende Aufhellung und Keramikveneers für ein natürliches Lächeln.",
        duration: "Bleaching: 60–90 Minuten, Veneers: 2–3 Termine",
        indications: ["Verfärbungen", "Form- und Stellungsanomalien (kleinere)"],
        procedure: [
          "Fotodokumentation und Farbnahme",
          "Professionelle Zahnreinigung vorab empfohlen",
          "In-Office-Bleaching oder Home-Bleaching-Schienen",
          "Mock-up/Schablone und minimalinvasive Präparation für Veneers"
        ],
        aftercare:
          "Weiße Diät 48 Stunden nach Bleaching; Schienenpflege beachten.",
        suitableFor: ["Erwachsene"],
        contraindications: ["Aktive Karies", "Parodontitis (zuerst therapieren)"],
        image: { src: "/assets/images/services/aesthetik.jpg", alt: "Ästhetische Zahnbehandlung" },
        cta: { label: "Ästhetik-Beratung", path: "/termin-buchen?p=aesthetik-bleaching-veneers" }
      },
      {
        id: "kinderzahnheilkunde",
        title: "Kinderzahnheilkunde",
        slug: "kinderzahnheilkunde",
        category: "Kinder",
        summary:
          "Einfühlsame Behandlung und Prophylaxe für Kinder – spielerisch erklärt.",
        duration: "20–45 Minuten",
        indications: [
          "Früherkennungsuntersuchungen",
          "Fissurenversiegelung",
          "Kreidezähne (MIH)"
        ],
        procedure: [
          "Angstfreie Eingewöhnung",
          "Altersgerechte Prophylaxe und Ernährungsberatung",
          "Schonende Behandlung kleiner Defekte"
        ],
        aftercare: "Regelmäßige Kontrollintervalle gemäß Vorsorgeheft.",
        suitableFor: ["Kinder", "Jugendliche"],
        contraindications: [],
        image: { src: "/assets/images/services/kinder.jpg", alt: "Kinderzahnheilkunde" },
        cta: { label: "Kindertermin vereinbaren", path: "/termin-buchen?p=kinderzahnheilkunde" }
      },
      {
        id: "aligner-schienen",
        title: "Unsichtbare Zahnschienen (Aligner)",
        slug: "aligner-schienen",
        category: "Kieferorthopädie (Erwachsene)",
        summary:
          "Transparente Aligner zur Korrektur leichter bis moderater Zahnfehlstellungen.",
        duration: "6–12 Monate (indikationsabhängig)",
        indications: ["Engstand", "Lückenstand", "Frontzahnrotationen (leicht)"],
        procedure: [
          "Intraoralscan und Simulation",
          "Anpassung von Attachments und Schientragetraining",
          "Kontrollen im 4–6-Wochen-Rhythmus"
        ],
        aftercare: "Retention mit Schienen oder festsitzendem Retainer.",
        suitableFor: ["Erwachsene"],
        contraindications: ["Komplexe skelettale Fehlstellungen"],
        image: { src: "/assets/images/services/aligner.jpg", alt: "Transparente Aligner-Schiene" },
        cta: { label: "Aligner-Check", path: "/termin-buchen?p=aligner-schienen" }
      },
      {
        id: "angstpatienten",
        title: "Behandlung von Angstpatienten",
        slug: "angstpatienten",
        category: "Besondere Betreuung",
        summary:
          "Zeit, Ruhe und schonende Methoden – wir nehmen Ihre Sorgen ernst.",
        duration: "Individuell",
        indications: ["Zahnarztangst", "Längere Behandlungsvermeidung"],
        procedure: [
          "Ausführliches Vorgespräch ohne Instrumente",
          "Stufenweises Vorgehen mit Pausen",
          "Lokalanästhesie mit Oberflächenanästhetikum, auf Wunsch Lachgaspartner extern"
        ],
        aftercare:
          "Rückmeldung erwünscht; weitere Schritte gemeinsam planen.",
        suitableFor: ["Erwachsene", "Jugendliche"],
        contraindications: [],
        image: { src: "/assets/images/services/angst.jpg", alt: "Einfühlsame Zahnbehandlung" },
        cta: { label: "Erstgespräch vereinbaren", path: "/kontakt?thema=angst" }
      },
      {
        id: "schmerzsprechstunde",
        title: "Akut- & Schmerzsprechstunde",
        slug: "schmerzsprechstunde",
        category: "Akut",
        summary:
          "Schnelle Hilfe bei akuten Beschwerden – täglich reservierte Notfalltermine.",
        duration: "10–30 Minuten",
        indications: ["Zahnschmerz", "Schwellung", "abgebrochener Zahn"],
        procedure: [
          "Kurz-Anamnese und Diagnostik",
          "Schmerzlindernde Erstversorgung",
          "Folgetermin zur Definitivbehandlung"
        ],
        aftercare: "Hinweise zur Medikation und Kontrolle beachten.",
        suitableFor: ["Alle"],
        contraindications: [],
        image: { src: "/assets/images/services/akut.jpg", alt: "Akute Zahnschmerzen Behandlung" },
        cta: { label: "Akuttermin anfragen", path: "/kontakt?thema=akut" }
      }
    ],
    team: [
      {
        id: "dr-julia-test",
        name: "Dr. med. dent. Julia Test",
        role: "Inhaberin, Zahnärztin",
        bio:
          "Ganzheitliche Zahnmedizin mit Fokus auf Zahnerhalt, Ästhetik und Parodontologie. Ruhige, verständliche Kommunikation ist ihr Markenzeichen.",
        qualifications: [
          "Studium der Zahnmedizin (Deutschland)",
          "Curriculum Ästhetische Zahnheilkunde (DGÄZ)",
          "Fortbildungen Parodontologie und Endodontie"
        ],
        memberships: ["DGZMK", "DGParo"],
        languages: ["Deutsch", "Englisch"],
        image: {
          src: "/assets/images/team/dr-julia-test.jpg",
          alt: "Dr. med. dent. Julia Test"
        }
      },
      {
        id: "martin-keller",
        name: "M. Keller",
        role: "Zahnarzt (angestellt)",
        bio:
          "Schwerpunkte in konservierender Zahnheilkunde und Endodontie. Einfühlsame Betreuung von Angstpatienten.",
        qualifications: [
          "Zahnmedizinisches Staatsexamen (Deutschland)",
          "Fortbildung Endodontie (maschinell)"
        ],
        memberships: ["DGZMK"],
        languages: ["Deutsch", "Englisch"],
        image: { src: "/assets/images/team/martin-keller.jpg", alt: "Zahnarzt M. Keller" }
      },
      {
        id: "sophie-nguyen",
        name: "S. Nguyen",
        role: "Dentalhygienikerin (DH)",
        bio:
          "Professionelle Prophylaxe, UPT und Motivation – für stabile, gesunde Verhältnisse.",
        qualifications: ["Dentalhygienikerin (DH)", "ZMP"],
        memberships: [],
        languages: ["Deutsch", "Englisch"],
        image: { src: "/assets/images/team/sophie-nguyen.jpg", alt: "Dentalhygienikerin S. Nguyen" }
      },
      {
        id: "laura-richter",
        name: "L. Richter",
        role: "Praxismanagement",
        bio:
          "Organisation, Qualitätsmanagement und Ihre erste Ansprechpartnerin am Telefon.",
        qualifications: ["ZMV – Zahnmedizinische Verwaltungsassistentin"],
        memberships: [],
        languages: ["Deutsch", "Englisch"],
        image: { src: "/assets/images/team/laura-richter.jpg", alt: "Praxismanagerin L. Richter" }
      },
      {
        id: "tumay-oezdemir",
        name: "T. Özdemir",
        role: "Zahnmedizinische Fachangestellte (ZFA)",
        bio:
          "Assistenz, Aufbereitung und empathische Betreuung – besonders bei Kindern.",
        qualifications: ["ZFA"],
        memberships: [],
        languages: ["Deutsch", "Türkisch"],
        image: { src: "/assets/images/team/tumay-oezdemir.jpg", alt: "ZFA T. Özdemir" }
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "M. S.",
        text:
          "Sehr freundliches Team, gründliche Aufklärung und moderne Geräte. Habe mich jederzeit wohl gefühlt.",
        rating: 5
      },
      {
        id: "t2",
        name: "A. K.",
        text:
          "Kurzfristig in die Schmerzsprechstunde gekommen – schnelle Hilfe und klare Empfehlungen.",
        rating: 5
      },
      {
        id: "t3",
        name: "J. R.",
        text:
          "Top Prophylaxe! Meine Zähne fühlen sich wie neu an. Absolut empfehlenswert.",
        rating: 5
      }
    ],
    faqs: [
      {
        q: "Nehmen Sie neue Patientinnen und Patienten an?",
        a: "Ja, wir freuen uns auf neue Gesichter. Termine können online oder telefonisch vereinbart werden."
      },
      {
        q: "Behandeln Sie gesetzlich und privat Versicherte?",
        a: "Ja, wir behandeln gesetzlich und privat Versicherte sowie Selbstzahler. Wir beraten transparent zu Leistungen und möglichen Eigenanteilen."
      },
      { q: "Welche Sprachen sprechen Sie?", a: "Deutsch und Englisch, in Teilen auch Türkisch." },
      { q: "Ist die Praxis barrierefrei?", a: "Ja, die Praxis ist stufenlos erreichbar; ein Aufzug ist vorhanden." },
      { q: "Welche Zahlungsmöglichkeiten gibt es?", a: "Kartenzahlung (EC), Kreditkarte und Überweisung sind möglich." }
    ],
    technology: {
      highlights: [
        "Digitales Röntgen mit Dosisreduktion",
        "Intraoralscanner für präzise Abformungen",
        "Air-Flow Prophylaxe",
        "Lupenbrille für mikroskopnahe Präzision"
      ],
      images: [
        { src: "/assets/images/tech/roentgen.jpg", alt: "Digitales Röntgengerät" },
        { src: "/assets/images/tech/scanner.jpg", alt: "Intraoralscanner in der Anwendung" }
      ]
    }
  },
  content: {
    pages: {
      startseite: {
        slug: "/",
        title: "Zahnarztpraxis Dr. Test in Berlin-Mitte",
        seo: {
          title: "Zahnarzt Berlin-Mitte – Zahnarztpraxis Dr. Test",
          description:
            "Zahnmedizin auf hohem Niveau: Prophylaxe, Ästhetik, Implantate, Parodontologie und Kinderzahnheilkunde. Termin online buchen."
        },
        sections: [
          {
            type: "hero",
            style: "split",
            headline: "Moderne Zahnheilkunde mit Zeit und Zuhören",
            subline: "Persönlich, schonend und evidenzbasiert – mitten in Berlin.",
            primaryCta: { label: "Termin online buchen", path: "/termin-buchen" },
            secondaryCta: { label: "Anrufen", href: "tel:+493012345678" },
            image: {
              src: "/assets/images/hero/praxis-wartebereich.jpg",
              alt: "Eleganter Wartebereich der Zahnarztpraxis Dr. Test"
            }
          },
          {
            type: "usp",
            items: [
              {
                icon: "shield-check",
                title: "Vertrauen & Transparenz",
                text: "Klare Aufklärung, gemeinsam entscheiden – ohne Überraschungen."
              },
              {
                icon: "sparkles",
                title: "Ästhetik & Funktion",
                text: "Natürliche Ergebnisse, die sich gut anfühlen und gut aussehen."
              },
              { icon: "cpu", title: "Moderne Technik", text: "Digitales Röntgen, Intraoralscan und schonende Prophylaxe." }
            ]
          },
          {
            type: "services-preview",
            headline: "Unsere Schwerpunkte",
            serviceIds: [
              "prophylaxe-pzr",
              "aesthetik-bleaching-veneers",
              "implantologie",
              "parodontologie",
              "wurzelbehandlung-endodontie",
              "kinderzahnheilkunde"
            ],
            cta: { label: "Alle Leistungen", path: "/leistungen" }
          },
          {
            type: "availability",
            headline: "Nächste freie Termine",
            source: "/api/appointments/next-slots",
            placeholderText: "Termine werden geladen...",
            emptyText: "Aktuell keine Online-Slots verfügbar – bitte anrufen.",
            cta: { label: "Mehr Termine", path: "/termin-buchen" }
          },
          {
            type: "intro-lead",
            image: { src: "/assets/images/team/dr-julia-test.jpg", alt: "Dr. med. dent. Julia Test" },
            headline: "Willkommen, ich bin Dr. Julia Test",
            text:
              "Mir ist wichtig, dass Sie verstehen, was wir warum tun. Wir nehmen uns Zeit, planen vorausschauend und behandeln so minimalinvasiv wie möglich."
          },
          {
            type: "technology",
            headline: "Präzision und Komfort",
            bullets: [
              "Digitale Diagnostik für planbare Ergebnisse",
              "Abformung ohne Paste: Intraoralscanner",
              "Schonende Reinigung: Air-Flow Technology"
            ],
            images: [
              { src: "/assets/images/tech/roentgen.jpg", alt: "Digitales Röntgengerät" },
              { src: "/assets/images/tech/scanner.jpg", alt: "Intraoralscanner" }
            ]
          },
          {
            type: "testimonials",
            headline: "Was unsere Patientinnen und Patienten sagen",
            items: ["t1", "t2", "t3"]
          },
          {
            type: "location-hours",
            map: true,
            address: "Friedrichstraße 123, 10117 Berlin",
            openingHours: true,
            cta: { label: "Route planen", external: "https://maps.google.com/?q=Friedrichstraße+123,+10117+Berlin" }
          },
          {
            type: "info-cards",
            items: [
              { title: "Gesetzlich & Privat", text: "Wir behandeln gesetzlich und privat Versicherte sowie Selbstzahler." },
              { title: "Barrierefrei", text: "Stufenloser Zugang, Aufzug vorhanden." },
              { title: "Sprachen", text: "Deutsch, Englisch – teils Türkisch." }
            ]
          },
          {
            type: "cta-banner",
            headline: "Bereit für Ihren nächsten Zahnarzttermin?",
            subline: "Einfach online buchen oder anrufen – wir freuen uns auf Sie.",
            primaryCta: { label: "Online buchen", path: "/termin-buchen" },
            secondaryCta: { label: "030 12345678 anrufen", href: "tel:+493012345678" }
          }
        ]
      },
      leistungen: {
        slug: "/leistungen",
        title: "Leistungen",
        seo: {
          title: "Leistungen – Prophylaxe, Ästhetik, Implantologie u. v. m.",
          description:
            "Übersicht unserer Leistungen: Prophylaxe, Füllungen, Endodontie, Parodontologie, Zahnersatz, Implantologie, Ästhetik, Kinder, Aligner und Akutsprechstunde."
        },
        sections: [
          {
            type: "service-categories",
            categories: [
              { name: "Prophylaxe", serviceIds: ["prophylaxe-pzr"] },
              { name: "Restaurativ", serviceIds: ["fuellungen-inlays", "wurzelbehandlung-endodontie"] },
              { name: "Parodontologie", serviceIds: ["parodontologie"] },
              { name: "Prothetik & Implantate", serviceIds: ["zahnersatz-kronen-bruecken", "implantologie"] },
              { name: "Ästhetik", serviceIds: ["aesthetik-bleaching-veneers", "aligner-schienen"] },
              { name: "Kinder", serviceIds: ["kinderzahnheilkunde"] },
              { name: "Besondere Betreuung", serviceIds: ["angstpatienten"] },
              { name: "Akut", serviceIds: ["schmerzsprechstunde"] }
            ]
          },
          {
            type: "service-details",
            serviceIds: [
              "prophylaxe-pzr",
              "fuellungen-inlays",
              "wurzelbehandlung-endodontie",
              "parodontologie",
              "zahnersatz-kronen-bruecken",
              "implantologie",
              "aesthetik-bleaching-veneers",
              "kinderzahnheilkunde",
              "aligner-schienen",
              "angstpatienten",
              "schmerzsprechstunde"
            ],
            disclaimer: "Therapieentscheidungen erfolgen nach individueller Untersuchung und Aufklärung."
          },
          {
            type: "faq",
            items: [
              { q: "Wie oft sollte ich zur Prophylaxe kommen?", a: "In der Regel halbjährlich, bei Parodontitis alle 3–4 Monate." },
              { q: "Bieten Sie Ratenzahlung an?", a: "Ja, über unseren Abrechnungsdienstleister sind flexible Modelle möglich." }
            ]
          }
        ]
      },
      team: {
        slug: "/team",
        title: "Team",
        seo: {
          title: "Unser Team – Zahnarztpraxis Dr. Test",
          description:
            "Lernen Sie das Team kennen: Dr. Julia Test und Kolleginnen sowie Assistenz, Prophylaxe und Praxismanagement."
        },
        sections: [
          { type: "team-grid", members: ["dr-julia-test", "martin-keller", "sophie-nguyen", "laura-richter", "tumay-oezdemir"] },
          {
            type: "values",
            headline: "Werte, die uns leiten",
            items: [
              { title: "Respekt", text: "Wir hören zu und nehmen Ihre Anliegen ernst." },
              { title: "Qualität", text: "Fortbildung und moderne Technik sichern nachhaltige Ergebnisse." },
              { title: "Transparenz", text: "Sie kennen alle sinnvollen Optionen und entscheiden mit." }
            ]
          },
          { type: "cta", headline: "Lernen Sie uns persönlich kennen", primaryCta: { label: "Ersttermin buchen", path: "/termin-buchen" } }
        ]
      },
      kontakt: {
        slug: "/kontakt",
        title: "Kontakt",
        seo: {
          title: "Kontakt & Anfahrt – Zahnarztpraxis Dr. Test",
          description:
            "Adresse, Öffnungszeiten, Online-Terminbuchung und Kontaktformular. Zentral in Berlin-Mitte, nahe S-/U Friedrichstraße."
        },
        sections: [
          {
            type: "contact-cards",
            items: [
              { icon: "phone", title: "Telefon", text: "+49 30 12345678", href: "tel:+493012345678" },
              { icon: "mail", title: "E-Mail", text: "praxis@dr-test-berlin.de", href: "mailto:praxis@dr-test-berlin.de" },
              { icon: "location", title: "Adresse", text: "Friedrichstraße 123, 10117 Berlin" }
            ]
          },
          {
            type: "map",
            provider: "OpenStreetMap",
            lat: 52.5187,
            lng: 13.3884,
            title: "Zahnarztpraxis Dr. Test",
            routeCta: { label: "Route planen", external: "https://maps.google.com/?q=Friedrichstraße+123,+10117+Berlin" }
          },
          {
            type: "hours",
            items: [
              { day: "Montag", opens: "08:00", closes: "18:00" },
              { day: "Dienstag", opens: "08:00", closes: "18:00" },
              { day: "Mittwoch", opens: "08:00", closes: "13:00" },
              { day: "Donnerstag", opens: "10:00", closes: "20:00" },
              { day: "Freitag", opens: "08:00", closes: "15:00" }
            ],
            note: "Für Schmerzfälle halten wir kurzfristige Termine frei."
          },
          {
            type: "contact-form",
            headline: "Kontaktformular",
            action: "/api/forms/contact",
            method: "POST",
            consentText:
              "Ich stimme der Verarbeitung meiner Angaben zur Beantwortung meiner Anfrage gemäß Datenschutzerklärung zu.",
            consentRequired: true,
            successMessage: "Vielen Dank! Wir melden uns zeitnah.",
            errorMessage: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
            fields: [
              { name: "vorname", label: "Vorname", type: "text", required: true, maxLength: 60 },
              { name: "nachname", label: "Nachname", type: "text", required: true, maxLength: 60 },
              { name: "telefon", label: "Telefon", type: "tel", required: true, pattern: "^[0-9+()\\-\\s]{6,}$" },
              { name: "email", label: "E-Mail", type: "email", required: false },
              {
                name: "anliegen",
                label: "Anliegen",
                type: "select",
                required: true,
                options: ["Terminwunsch", "Beratung", "Akutfall", "Rückruf"]
              },
              { name: "nachricht", label: "Nachricht", type: "textarea", required: false, maxLength: 1200 },
              { name: "wunschtermin", label: "Wunschtermin", type: "date", required: false }
            ]
          },
          {
            type: "emergency",
            headline: "Akutfall oder Notdienst",
            text:
              "Bei akuten Schmerzen rufen Sie bitte an. Außerhalb der Öffnungszeiten informiert der zahnärztliche Notdienst.",
            cta: { label: "Notdienst Berlin", external: "https://www.kzv-berlin.de/patienten/notdienst.html" }
          }
        ]
      },
      impressum: {
        slug: "/impressum",
        title: "Impressum",
        seo: {
          title: "Impressum – Zahnarztpraxis Dr. Test",
          description: "Anbieterkennzeichnung gemäß § 5 TMG und § 55 RStV."
        },
        sections: [
          {
            type: "richtext",
            html:
              "<h2>Anbieter</h2><p>Zahnarztpraxis Dr. Test<br>Inhaberin: Dr. med. dent. Julia Test<br>Friedrichstraße 123<br>10117 Berlin</p><p>Telefon: +49 30 12345678<br>E-Mail: praxis@dr-test-berlin.de<br>Web: https://www.dr-test-berlin.de</p><h2>Berufsrechtliche Angaben</h2><p>Berufsbezeichnung: Zahnärztin (verliehen in Deutschland)<br>Zuständige Kammer: Zahnärztekammer Berlin – <a href='https://www.zaek-berlin.de' rel='nofollow noopener'>www.zaek-berlin.de</a><br>Zuständige KZV: Kassenzahnärztliche Vereinigung Berlin – <a href='https://www.kzv-berlin.de' rel='nofollow noopener'>www.kzv-berlin.de</a><br>Berufsordnung und weitere Regelungen: siehe Websites der genannten Institutionen.</p><h2>Umsatzsteuer</h2><p>Keine Umsatzsteuer-ID gem. § 19 UStG (Kleinunternehmerregelung) oder nicht erforderlich.</p><h2>Verantwortlich für Inhalte</h2><p>Dr. med. dent. Julia Test (Anschrift wie oben)</p><h2>Haftungshinweis</h2><p>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für externe Links. Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.</p>"
          }
        ]
      },
      datenschutz: {
        slug: "/datenschutz",
        title: "Datenschutzerklärung",
        seo: {
          title: "Datenschutz – Zahnarztpraxis Dr. Test",
          description:
            "Informationen zur Datenverarbeitung, Cookies, Analytics und Ihren Rechten."
        },
        sections: [
          {
            type: "richtext",
            html:
              "<h2>1. Verantwortliche Stelle</h2><p>Zahnarztpraxis Dr. Test – Dr. med. dent. Julia Test, Friedrichstraße 123, 10117 Berlin, E-Mail: praxis@dr-test-berlin.de, Telefon: +49 30 12345678</p><h2>2. Zwecke und Rechtsgrundlagen</h2><p>Wir verarbeiten personenbezogene Daten zur Terminverwaltung und Beantwortung von Anfragen (Art. 6 Abs. 1 lit. b DSGVO), zur Sicherstellung des technischen Betriebs (Art. 6 Abs. 1 lit. f DSGVO) sowie – nach Einwilligung – zur anonymen Statistik (Art. 6 Abs. 1 lit. a DSGVO).</p><h2>3. Empfänger</h2><p>Hosting-Provider in Deutschland/EU; eigen gehostetes Matomo-Analytics.</p><h2>4. Cookies</h2><p>Notwendig: session_id, cookie_consent. Statistik (optional): _pk_id.*, _pk_ses.* (Matomo, IP-Anonymisierung aktiviert).</p><h2>5. Speicherdauer</h2><p>Kontaktanfragen 12 Monate; Server-Logs 14 Tage; gesetzliche Aufbewahrungspflichten bleiben unberührt.</p><h2>6. Rechte der Betroffenen</h2><p>Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit sowie Widerruf erteilter Einwilligungen. Beschwerderecht bei einer Aufsichtsbehörde.</p><h2>7. Drittlandtransfer</h2><p>Kein Drittlandtransfer geplant.</p><h2>8. OpenStreetMap</h2><p>Zur Anfahrtsdarstellung nutzen wir OpenStreetMap. Beim Aufruf der Karte werden technisch notwendige Daten (z. B. IP-Adresse) verarbeitet. Einbindung erfolgt datenschutzfreundlich.</p>"
          }
        ]
      }
    }
  }
} as const

export default siteConfig
