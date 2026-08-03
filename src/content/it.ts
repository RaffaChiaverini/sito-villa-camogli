import type { SiteContent } from "../types";
import { factRail } from "../data/property-facts";

export const it: SiteContent = {
  locale: "it",
  languageName: "Italiano",
  alternateLocale: "en",
  alternateLanguageName: "English",
  seo: {
    title: "Villa dei Limoni | Una villa ligure privata sopra Camogli",
    description:
      "Una villa con vista mare sopra Camogli, piscina privata, giardino terrazzato e una pool house opzionale per soggiorni fino a 16 ospiti.",
    socialTitle: "Villa dei Limoni — Camogli, Liguria",
    socialDescription:
      "Una villa privata vista mare sopra Camogli, con giardino terrazzato, piscina privata e sentieri del Parco di Portofino nelle vicinanze.",
  },
  brandName: "Villa dei Limoni",
  navigation: {
    menuLabel: "Menu",
    closeLabel: "Chiudi il menu",
    skipLabel: "Vai al contenuto",
    bookLabel: "Verifica disponibilità",
    languageLabel: "View in English",
    items: [
      { id: "experience", label: "La casa", href: "#experience" },
      { id: "stays", label: "Il soggiorno", href: "#stays" },
      { id: "gallery", label: "Galleria", href: "#gallery" },
      { id: "layout", label: "Gli spazi", href: "#layout" },
      { id: "camogli", label: "Camogli", href: "#camogli" },
      { id: "faq", label: "Da sapere", href: "#faq" },
    ],
  },
  platforms: [
    {
      id: "airbnb",
      name: "Airbnb",
      url: "https://www.airbnb.it/rooms/23678485",
      shortCta: "Scopri su Airbnb",
      availabilityCta: "Verifica disponibilità su Airbnb",
      externalLabel: "Apre l’annuncio ufficiale di Villa dei Limoni su Airbnb in una nuova scheda",
    },
    {
      id: "vrbo",
      name: "Vrbo",
      url: "https://www.vrbo.com/it-it/affitto-vacanze/p8718530",
      shortCta: "Scopri su Vrbo",
      availabilityCta: "Verifica disponibilità su Vrbo",
      externalLabel: "Apre l’annuncio ufficiale di Villa dei Limoni su Vrbo in una nuova scheda",
    },
  ],
  hero: {
    eyebrow: "Camogli · Liguria",
    title: "Una villa ligure privata sopra Camogli.",
    description:
      "Vista mare, giardino terrazzato, piscina privata e Camogli a circa cinque minuti in auto o autobus.",
    exploreLabel: "Esplora la villa",
    scrollLabel: "Scorri per scoprire",
    imageAlt:
      "Villa dei Limoni e il suo giardino affacciati sulle acque blu del Golfo Paradiso",
  },
  facts: factRail.it,
  story: {
    eyebrow: "L’esperienza",
    title: "Una villa su tre livelli in un giardino ligure terrazzato.",
    lead:
      "Villa dei Limoni si trova sopra Camogli, in un giardino di alberi da frutto e piante fiorite con vista sul Golfo Paradiso.",
    paragraphs: [
      "La villa principale è disposta su tre livelli, con gli spazi comuni al piano terreno e sei camere climatizzate distribuite sui due piani superiori.",
      "All’esterno, la villa offre una piscina vista mare di 40 metri quadrati, una zona pranzo, un barbecue e un forno a legna.",
      "Una pool house separata, ristrutturata nel 2024, può essere aggiunta per un massimo di quattro ospiti ed è disponibile soltanto insieme alla villa principale.",
    ],
    imageAlt:
      "Una terrazza in pietra illuminata dal sole a Villa dei Limoni, tra agrumi e piante in fiore",
  },
  stays: {
    eyebrow: "Il soggiorno",
    title: "Una villa, due configurazioni di soggiorno.",
    intro:
      "Scegli la villa con sei camere per un massimo di 12 ospiti, oppure aggiungi la pool house indipendente per un gruppo fino a 16 persone. La pool house è disponibile solo insieme alla villa e non viene mai affittata ad altri ospiti.",
    comparisonLabels: {
      guests: "Ospiti",
      bedrooms: "Camere",
      bathrooms: "Bagni",
      idealFor: "Sistemazione",
    },
    modes: [
      {
        id: "villa",
        eyebrow: "La casa principale",
        title: "Solo Villa",
        summary:
          "Tre livelli dedicati alla vita comune e al riposo, aperti sul giardino terrazzato e sul mare.",
        capacity: "Fino a 12",
        bedrooms: "6",
        bathrooms: "4 completi + 1 bagno di servizio",
        idealFor: "La casa principale distribuita su tre livelli",
        features: [
          "Aria condizionata in ogni camera",
          "Cucina attrezzata, soggiorno e sala da pranzo",
          "Wi-Fi veloce, misurato a 82 Mbps",
          "Piscina privata, giardino, pranzo all’aperto e due garage",
        ],
        note: "La tariffa mostrata fino a 12 ospiti comprende soltanto la villa principale.",
      },
      {
        id: "villa-cottage",
        eyebrow: "L’intera proprietà",
        title: "Villa + Pool House",
        summary:
          "La villa principale insieme a una casa indipendente accanto alla piscina, completamente ristrutturata nel 2024.",
        capacity: "Fino a 16",
        bedrooms: "7",
        bathrooms: "6 completi + 1 bagno di servizio",
        idealFor: "La casa principale più la pool house separata",
        features: [
          "Camera matrimoniale con piccolo bagno en suite",
          "Soggiorno con divano letto matrimoniale e secondo bagno",
          "Cucina privata e aria condizionata",
          "Vista sulla piscina e sul Golfo Paradiso",
        ],
        note: "La pool house è un supplemento opzionale e non può essere affittata separatamente dalla villa.",
      },
    ],
  },
  gallery: {
    eyebrow: "La casa in immagini",
    title: "Tra giardino e mare.",
    intro:
      "Una selezione curata degli spazi, dei dettagli e dei panorami che raccontano il carattere di Villa dei Limoni.",
    allLabel: "Tutte le fotografie",
    openLabel: "Apri la fotografia",
    closeLabel: "Chiudi la galleria",
    previousLabel: "Fotografia precedente",
    nextLabel: "Fotografia successiva",
    counterLabel: "Fotografia",
    chapters: [
      { id: "views", label: "Panorami", description: "Vista mare sul Golfo Paradiso" },
      {
        id: "pool-garden",
        label: "Piscina e giardino",
        description: "Terrazze, fiori e acqua sopra il mare",
      },
      {
        id: "outdoor-dining",
        label: "Pranzi all’aperto",
        description: "Zona pranzo, barbecue e forno a legna",
      },
      { id: "living", label: "Spazi comuni", description: "Salotto, sala da pranzo e cucina attrezzata" },
      { id: "bedrooms", label: "Camere", description: "Sei camere climatizzate nella villa principale" },
      { id: "bathrooms", label: "Bagni", description: "Quattro bagni con doccia e un WC al piano terreno" },
      { id: "cottage", label: "Pool house", description: "Camera, soggiorno, due bagni e cucina" },
      { id: "arrival", label: "L’arrivo", description: "Il percorso pedonale in pietra di circa 70 metri" },
      { id: "camogli", label: "Intorno a Camogli", description: "Borgo, spiaggia, marina e sentieri vicini" },
    ],
  },
  layout: {
    eyebrow: "Interni e disposizione",
    title: "Spazio per ritrovarsi. Spazio per sé.",
    intro:
      "La villa principale si sviluppa su tre livelli, separando gli ambienti comuni da due ampi piani notte. La pool house opzionale aggiunge uno spazio indipendente al livello della piscina.",
    goodForLabel: "Configurazioni disponibili",
    goodFor:
      "La villa principale accoglie fino a 12 ospiti; aggiungendo la pool house la capienza indicata sale a 16.",
    optionalLabel: "Opzionale insieme alla villa",
    floors: [
      {
        id: "ground",
        name: "Piano giardino",
        kicker: "Vivere insieme",
        summary: "Soggiorno, sala da pranzo separata, cucina attrezzata e bagno di servizio.",
        rooms: [
          { room: "Soggiorno", detail: "Spazio comune" },
          { room: "Sala da pranzo", detail: "Ambiente interno separato" },
          { room: "Cucina", detail: "Cucina attrezzata" },
          { room: "Bagno di servizio", detail: "WC e lavandino" },
        ],
      },
      {
        id: "first",
        name: "Primo piano",
        kicker: "Tre camere",
        summary:
          "Un piano notte flessibile per adulti e bambini, servito da due bagni con doccia.",
        rooms: [
          { room: "Camera matrimoniale", detail: "Un letto matrimoniale" },
          { room: "Camera con letti a castello", detail: "Un letto a castello" },
          { room: "Camera flessibile", detail: "Letto singolo trasformabile in matrimoniale" },
          { room: "Due bagni", detail: "Entrambi con doccia" },
        ],
      },
      {
        id: "second",
        name: "Secondo piano",
        kicker: "Tre camere",
        summary:
          "Il piano notte superiore, con sistemazioni matrimoniali, singole e a castello.",
        rooms: [
          { room: "Camera matrimoniale", detail: "Un letto matrimoniale" },
          { room: "Camera doppia", detail: "Due letti singoli" },
          { room: "Camera con letti a castello", detail: "Un letto a castello" },
          { room: "Due bagni", detail: "Entrambi con doccia" },
        ],
      },
      {
        id: "cottage",
        name: "Pool house",
        kicker: "Fino a quattro ospiti aggiuntivi",
        summary:
          "Una casa indipendente completamente ristrutturata, accanto alla piscina e affacciata sul golfo.",
        optional: true,
        rooms: [
          { room: "Camera matrimoniale", detail: "Con piccolo bagno en suite" },
          { room: "Soggiorno", detail: "Con divano letto matrimoniale" },
          { room: "Secondo bagno", detail: "Per gli ospiti che dormono in soggiorno" },
          { room: "Cucina", detail: "Sistemazione indipendente con aria condizionata" },
        ],
      },
    ],
  },
  outdoors: {
    eyebrow: "Vivere all’aperto",
    title: "Un giardino terrazzato con vista mare.",
    lead:
      "Un grande giardino a fasce con alberi da frutto e piante fiorite è sostenuto da tradizionali muri in pietra a secco.",
    quote: "Piscina di 40 m². Zona pranzo. Barbecue e forno a legna.",
    features: [
      {
        title: "Piscina vista mare",
        description:
          "Una piscina privata di 40 metri quadrati con vista mare, realizzata nel 2021.",
      },
      {
        title: "La grande tavola",
        description:
          "Una zona pranzo all’aperto affacciata sul giardino, sulla piscina e sul Golfo Paradiso.",
      },
      {
        title: "Fuoco e sapori",
        description:
          "Nella zona esterna sono disponibili un barbecue e un forno a legna.",
      },
      {
        title: "Un paesaggio terrazzato",
        description:
          "Alberi da frutto, piante fiorite e muri di contenimento in pietra a secco compongono il giardino.",
      },
    ],
    imageAlts: [
      "La piscina privata con vista mare di Villa dei Limoni",
      "La tavola per pranzare all’aperto circondata dal giardino terrazzato",
      "Il tradizionale forno a legna tra le terrazze del giardino",
    ],
  },
  location: {
    eyebrow: "Camogli e dintorni",
    title: "Sopra Camogli, vicino al Parco Naturale di Portofino.",
    lead:
      "La villa è immersa nel verde e nella quiete sopra Camogli, vicino al Parco Naturale di Portofino.",
    paragraphs: [
      "Camogli si trova a circa cinque minuti in auto o autobus, oppure a 15–20 minuti a piedi: in discesa all’andata e in salita al ritorno.",
      "Santa Margherita, Rapallo, Portofino e Genova sono raggiungibili in auto, mentre il sentiero Camogli–San Rocco–Batterie–San Fruttuoso parte nelle vicinanze.",
    ],
    details: [
      {
        value: "≈ 5 min",
        label: "Camogli in auto o autobus",
        description: "Traffico e stagione permettendo",
      },
      {
        value: "≈ 15–20 min",
        label: "A piedi in discesa fino a Camogli",
        description: "Il ritorno è in salita",
      },
      {
        value: "≈ 80 km",
        label: "Sentieri segnati nel parco",
        description: "Nella rete del Parco di Portofino",
      },
    ],
    highlightsTitle: "A portata di mano",
    highlights: [
      "La spiaggia e il porticciolo di Camogli",
      "Il sentiero Camogli–San Rocco–Batterie–San Fruttuoso",
      "Il Parco Naturale di Portofino e la sua rete di 80 km di sentieri",
      "Santa Margherita, Rapallo, Portofino e Genova in auto",
    ],
    privacyNote:
      "Per tutelare la privacy, questo sito indica soltanto la zona collinare di Camogli. Gli ospiti confermati devono seguire le indicazioni fornite con la prenotazione.",
    mapLabel: "Posizione indicativa sulle alture di Camogli",
    imageAlt: "Il colorato lungomare e la spiaggia di Camogli visti dall’alto",
  },
  reviews: {
    eyebrow: "Le impressioni degli ospiti",
    title: "Un luogo che resta nella memoria.",
    intro:
      "Le recensioni sugli annunci ufficiali citano ripetutamente la vista, il giardino, la piscina, la disposizione per i gruppi e la comunicazione dell’host.",
    platforms: [
      {
        id: "airbnb",
        name: "Airbnb",
        score: "4,86",
        scale: "su 5",
        reviewCount: 43,
        reviewCountLabel: "43 recensioni degli ospiti",
        verifiedAt: "2026-08-03",
        verifiedLabel: "Dati dell’annuncio verificati il 3 agosto 2026",
        themes: ["Panorama", "Piscina", "Spazi esterni", "Comunicazione dell’host"],
      },
      {
        id: "vrbo",
        name: "Vrbo",
        score: "9,8",
        scale: "su 10",
        reviewCount: 12,
        reviewCountLabel: "12 recensioni degli ospiti",
        verifiedAt: "2026-08-03",
        verifiedLabel: "Dati dell’annuncio verificati il 3 agosto 2026",
        themes: ["Soggiorni di gruppo", "Giardino", "Forno a legna", "Fedele alle immagini"],
      },
    ],
    proofPoints: [
      "Una villa e un panorama all’altezza delle fotografie",
      "Un luogo generoso per famiglie numerose e gruppi",
      "La piscina e il giardino al centro di ogni giornata",
      "Pranzi memorabili all’aperto e comunicazione attenta",
    ],
    disclaimer:
      "Punteggi e numero di recensioni sono dati fotografati in una data precisa e possono cambiare con la pubblicazione di nuove recensioni.",
  },
  booking: {
    eyebrow: "Tariffe e prenotazioni",
    title: "Una settimana sopra Camogli.",
    lead:
      "Disponibilità, prezzi aggiornati, imposte finali e condizioni di cancellazione sono confermati negli annunci ufficiali della villa su Airbnb e Vrbo.",
    rateLabel: "Tariffe",
    rateValue: "Tariffe settimanali stagionali disponibili",
    rateDetail:
      "Seleziona Solo Villa oppure Villa + Pool House sulla piattaforma per visualizzare il totale relativo alle date e al gruppo.",
    weeklyLabel: "Ritmo del soggiorno",
    weeklyDetail:
      "L’annuncio Airbnb presenta attualmente soggiorni di sette notti con inizio la domenica; la piattaforma aggiornata conferma la regola per ogni stagione.",
    taxLabel: "Imposta di soggiorno",
    taxDetail:
      "L’imposta di soggiorno può essere dovuta secondo le norme vigenti del Comune di Camogli ed è confermata dalla piattaforma al momento della prenotazione.",
    platformNote:
      "Villa dei Limoni non accetta pagamenti su questo sito. Completa ogni prenotazione e pagamento su Airbnb o Vrbo.",
  },
  faq: {
    eyebrow: "Da sapere",
    title: "I dettagli pratici, raccontati con chiarezza.",
    intro:
      "Villa dei Limoni è una proprietà in collina con accesso pedonale, scale interne e giardino terrazzato. Queste informazioni aiutano gli ospiti a pianificare il soggiorno.",
    items: [
      {
        id: "access",
        question: "Come si raggiunge la villa?",
        answer:
          "Dalla strada carrabile più vicina, l’ultimo tratto è di circa 70 metri a piedi lungo una tradizionale creuza ligure in pietra con una lieve pendenza. La casa non è raggiungibile direttamente in auto.",
      },
      {
        id: "parking",
        question: "È disponibile un parcheggio privato?",
        answer:
          "Sì. Sono disponibili due garage privati a meno di cinque minuti a piedi dalla villa.",
      },
      {
        id: "mobility",
        question: "La proprietà è adatta a persone con mobilità ridotta?",
        answer:
          "Il percorso pedonale, le scale interne e il giardino terrazzato comprendono pendenze e dislivelli. La proprietà può risultare difficile per chi ha mobilità ridotta: è bene valutare le esigenze individuali con la piattaforma prima di prenotare.",
      },
      {
        id: "children",
        question: "I bambini sono i benvenuti?",
        answer:
          "Sì. Poiché il giardino in collina comprende terrazze, scale, zone sopraelevate e muri di contenimento in pietra a secco, è indispensabile la costante supervisione di un adulto.",
      },
      {
        id: "pool-season",
        question: "Quando è aperta la piscina?",
        answer:
          "La stagione della piscina va da maggio a ottobre. Verifica sulla piattaforma le date esatte di apertura relative al tuo soggiorno.",
      },
      {
        id: "stay-length",
        question: "Qual è la durata minima del soggiorno?",
        answer:
          "L’annuncio Airbnb presenta attualmente soggiorni di sette notti con arrivo la domenica. Per la stagione scelta fanno fede le date aggiornate e la prenotazione confermata.",
      },
      {
        id: "arrival-times",
        question: "Quali sono gli orari di arrivo e partenza?",
        answer:
          "Il check-in inizia tra le 16:00 e le 16:30, a seconda della piattaforma di prenotazione, e il check-out è entro le 10:00. La prenotazione confermata riporta gli orari definitivi.",
      },
      {
        id: "pets-events",
        question: "Sono ammessi animali o eventi?",
        answer: "Gli animali e gli eventi non sono ammessi.",
      },
      {
        id: "smoking-age",
        question: "Ci sono restrizioni per il fumo o limiti di età?",
        answer:
          "Vrbo indica attualmente il fumo solo nelle aree designate e un’età minima di 28 anni per chi prenota. Le regole possono variare per canale: fanno fede le condizioni della prenotazione confermata.",
      },
      {
        id: "services",
        question: "La villa offre servizi alberghieri?",
        answer:
          "No. È una locazione turistica privata, non un hotel o un B&B. Durante il soggiorno non vengono forniti pulizie aggiuntive, cambi di biancheria o prodotti di consumo.",
      },
      {
        id: "tourist-tax",
        question: "L’imposta di soggiorno è inclusa?",
        answer:
          "L’imposta di soggiorno di Camogli può essere dovuta. Poiché le tariffe comunali e le informazioni sulle piattaforme possono cambiare, importo e modalità di riscossione vengono confermati al momento della prenotazione.",
      },
      {
        id: "booking",
        question: "Perché la prenotazione si completa su Airbnb o Vrbo?",
        answer:
          "Questo sito presenta la villa. Disponibilità, pagamenti, condizioni di cancellazione e assistenza alla prenotazione restano sulla piattaforma ufficiale scelta.",
      },
    ],
  },
  footer: {
    strapline: "Una villa privata tra giardino e mare.",
    location: "Camogli · Liguria · Italia",
    rights: "Tutti i diritti riservati.",
    privacyNote: "Gli ospiti confermati devono seguire le indicazioni per l’arrivo fornite con la prenotazione.",
    backToTopLabel: "Torna su",
  },
};
