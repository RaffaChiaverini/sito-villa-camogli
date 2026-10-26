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
    bookLabel: "Prenotate e contattateci",
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
      shortCta: "Leggete le recensioni su Airbnb",
      availabilityCta: "Leggete le recensioni su Airbnb",
      externalLabel: "Apre le recensioni degli ospiti di Villa dei Limoni su Airbnb in una nuova scheda",
    },
    {
      id: "vrbo",
      name: "Vrbo",
      url: "https://www.vrbo.com/it-it/affitto-vacanze/p8718530",
      shortCta: "Leggete le recensioni su Vrbo",
      availabilityCta: "Leggete le recensioni su Vrbo",
      externalLabel: "Apre le recensioni degli ospiti di Villa dei Limoni su Vrbo in una nuova scheda",
    },
  ],
  hero: {
    eyebrow: "Camogli · Liguria",
    title: "Una villa sospesa tra giardino e mare.",
    description:
      "Vi accogliamo in una villa immersa nel verde, con piscina privata e vista sul Golfo Paradiso, a pochi minuti da Camogli.",
    exploreLabel: "Esplorate la villa",
    scrollLabel: "Scorri per scoprire",
    imageAlt:
      "Villa dei Limoni e il suo giardino affacciati sulle acque blu del Golfo Paradiso",
  },
  facts: factRail.it,
  story: {
    eyebrow: "Villa dei Limoni",
    title: "Una villa ottocentesca sopra il borgo di Camogli.",
    lead:
      "Villa dei Limoni è un’antica villa ottocentesca con giardino e piscina privati, disponibile per soggiorni settimanali.",
    paragraphs: [
      "La villa si sviluppa su tre livelli: al piano terra si trovano gli spazi comuni, la cucina e il salotto; ai due piani superiori sei camere climatizzate e quattro bagni. La capienza massima è di 12 persone.",
      "Chi desidera più spazio può aggiungere il pool cottage: una piccola casa indipendente accanto alla piscina, ristrutturata nel 2024, che ospita fino a quattro persone e viene affittata soltanto insieme alla villa.",
      "All’esterno vi aspettano una piscina di 40 m² con vista mare, un ampio giardino a fasce con alberi da frutto e piante fiorite, una zona pranzo ombreggiata, un barbecue e un forno a legna.",
      "La villa è raggiungibile a piedi dalla strada carrabile più vicina percorrendo circa 80 metri; due garage privati sono a disposizione dei nostri ospiti.",
    ],
    imageAlt:
      "Una terrazza in pietra illuminata dal sole a Villa dei Limoni, tra agrumi e piante in fiore",
  },
  stays: {
    eyebrow: "Il soggiorno",
    title: "Una villa, due modi di soggiornarci.",
    intro:
      "Scegliete la villa con sei camere per un massimo di 12 ospiti, oppure aggiungete il pool cottage indipendente per un gruppo fino a 16 persone. Il pool cottage è disponibile solo insieme alla villa e non viene mai affittato ad altri ospiti.",
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
          "Wi-Fi veloce (82 Mbps)",
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
    openLabel: "Aprite la fotografia",
    closeLabel: "Chiudi la galleria",
    previousLabel: "Fotografia precedente",
    nextLabel: "Fotografia successiva",
    counterLabel: "Fotografia",
    chapters: [
      { id: "views", label: "Panorami", description: "Vista dal terrazzo e sul Golfo Paradiso" },
      {
        id: "pool-garden",
        label: "Piscina e giardino",
        description: "Piscina vista mare e giardino a fasce",
      },
      {
        id: "outdoor-dining",
        label: "Pranzi all’aperto",
        description: "Zona pranzo, barbecue e forno a legna",
      },
      { id: "living", label: "Spazi comuni", description: "Salotto, sala da pranzo e cucina" },
      { id: "bedrooms", label: "Camere", description: "Le camere della villa" },
      { id: "bathrooms", label: "Bagni", description: "I bagni della villa" },
      { id: "cottage", label: "Pool cottage", description: "Gli spazi del pool cottage" },
      { id: "arrival", label: "L’arrivo", description: "La creuza che conduce alla villa" },
      { id: "camogli", label: "Camogli", description: "Il borgo e il Golfo Paradiso" },
    ],
  },
  layout: {
    eyebrow: "Interni e disposizione",
    title: "Spazio per ritrovarsi. Spazio per sé.",
    intro:
      "La villa principale si sviluppa su tre livelli, separando gli ambienti comuni da due ampi piani notte. La pool house opzionale aggiunge uno spazio indipendente al livello della piscina.",
    goodForLabel: "Le due formule",
    goodFor:
      "La villa principale accoglie fino a 12 ospiti; aggiungendo la pool house la capienza indicata sale a 16.",
    optionalLabel: "Opzionale insieme alla villa",
    floors: [
      {
        id: "ground",
        name: "Piano terra",
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
        title: "Barbecue e forno a legna",
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
    title: "Camogli, il Parco di Portofino e la Riviera.",
    lead:
      "Siamo immersi nel verde sopra Camogli, alle porte del Parco Naturale di Portofino.",
    paragraphs: [
      "Camogli si trova a 5–10 minuti in auto o in autobus, oppure a circa 20 minuti a piedi: in discesa all’andata e in salita al ritorno.",
      "Il percorso per San Rocco, le Batterie e San Fruttuoso parte vicino a casa ed è tra i più panoramici della Liguria. Santa Margherita, Rapallo, Portofino e Genova sono facilmente raggiungibili.",
    ],
    details: [
      {
        value: "5–10 min",
        label: "Camogli in auto o autobus",
        description: "Traffico e stagione permettendo",
      },
      {
        value: "≈ 20 min",
        label: "A piedi in discesa fino a Camogli",
        description: "Il ritorno è in salita",
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
    mapLabel: "Mappa indicativa di Camogli, Portofino e San Fruttuoso",
    imageAlt: "Il colorato lungomare e la spiaggia di Camogli visti dall’alto",
  },
  reviews: {
    eyebrow: "Recensioni",
    title: "Le parole dei nostri ospiti.",
    intro:
      "Le recensioni raccontano meglio di noi cosa si prova a soggiornare a Villa dei Limoni. Dal 2018 accogliamo ospiti tramite Airbnb e Vrbo.",
    platforms: [
      {
        id: "airbnb",
        name: "Airbnb",
        score: "4,87",
        scale: "su 5",
        reviewCount: 45,
        reviewCountLabel: "45 recensioni verificate",
        verifiedAt: "2026-10-26",
        verifiedLabel: "Dati verificati il 26 ottobre 2026",
        themes: ["Vista", "Piscina", "Spazi all’aperto", "Ospitalità"],
      },
      {
        id: "vrbo",
        name: "Vrbo",
        score: "9,6",
        scale: "su 10",
        reviewCount: 14,
        reviewCountLabel: "14 recensioni verificate",
        verifiedAt: "2026-10-26",
        verifiedLabel: "Dati verificati il 26 ottobre 2026",
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
      "Scriveteci per conoscere le disponibilità, ricevere un preventivo e organizzare una prenotazione diretta con noi.",
    rateLabel: "Tariffe",
    rateValue: "Tariffe settimanali stagionali disponibili",
    rateDetail:
      "Scriveteci indicando le date e il numero di ospiti per ricevere una proposta personalizzata.",
    weeklyLabel: "Ritmo del soggiorno",
    weeklyDetail:
      "La proprietà viene affittata per almeno sette notti, da domenica a domenica.",
    taxLabel: "Imposta di soggiorno",
    taxDetail:
      "La tassa di soggiorno è di € 3 per ospite di età superiore a 15 anni per notte e si versa all’arrivo.",
    platformNote:
      "Le prenotazioni vengono confermate direttamente con i proprietari tramite contratto di locazione e bonifico.",
  },
  faq: {
    eyebrow: "Da sapere",
    title: "Qualche domanda in più.",
    intro:
      "Abbiamo raccolto qui le informazioni che possono aiutarvi a capire se Villa dei Limoni è la casa giusta per il vostro soggiorno.",
    items: [
      {
        id: "pets",
        question: "Si possono portare animali?",
        answer:
          "Amiamo molto gli animali, ma abbiamo scelto di non ammetterli in casa: il pelo può restare anche dopo una pulizia a fondo e vogliamo tutelare gli ospiti allergici che soggiorneranno da noi in seguito. Ci scusiamo con chi viaggia con il proprio animale; per esigenze particolari, scriveteci prima di prenotare.",
      },
      {
        id: "services",
        question: "Durante il soggiorno sono previste pulizie extra, cambi di biancheria o beni di consumo?",
        answer:
          "Villa dei Limoni è una casa in locazione turistica, non un bed & breakfast o una struttura alberghiera. Durante il soggiorno non possiamo offrire pulizie extra o cambi di biancheria, né fornire generi alimentari o altri beni di consumo. All’arrivo forniamo lenzuola e asciugamani per ogni ospite e per ogni settimana di affitto.",
      },
      {
        id: "access",
        question: "Come funziona l’accesso pedonale alla casa?",
        answer:
          "Villa dei Limoni è accessibile soltanto a piedi. Dalla strada carrabile più vicina si percorrono alcuni gradini e una tipica creuza ligure in pietra di circa 80 metri, in lieve salita. Il tragitto richiede circa un minuto; sulla strada è possibile sostare brevemente per scaricare i bagagli. Nella galleria trovate alcune fotografie del percorso.",
      },
      {
        id: "cottage-privacy",
        question: "Il pool cottage può essere affittato ad altre persone durante il nostro soggiorno?",
        answer:
          "No. Il pool cottage viene affittato esclusivamente insieme alla villa principale. Se gli ospiti della villa non ne hanno bisogno, resta chiuso.",
      },
      {
        id: "pool-season",
        question: "La piscina è aperta tutto l’anno? È riscaldata?",
        answer:
          "La piscina non è riscaldata ed è aperta da maggio a ottobre, mesi in cui il clima mediterraneo è mite.",
      },
      {
        id: "rental-contract",
        question: "Perché è richiesto il contratto di locazione?",
        answer:
          "La legge italiana richiede la stipula di un contratto di locazione affinché la prenotazione sia valida.",
      },
      {
        id: "parking",
        question: "Dove posso parcheggiare l’auto durante il soggiorno?",
        answer:
          "Avrete a disposizione due box auto privati a circa 200 metri dalla villa, meno di cinque minuti a piedi: in discesa per raggiungerli e in salita al ritorno. Il box 1 misura 550 × 278 × 190 cm; il box 2 misura 550 × 310 × 185 cm. Ulteriori auto possono essere parcheggiate, salvo disponibilità, nei posteggi pubblici lungo la strada, a circa 5–10 minuti a piedi dalla villa.",
      },
      {
        id: "walk-to-camogli",
        question: "Il paese di Camogli si raggiunge a piedi?",
        answer:
          "Sì. Camogli dista 1,4 km dalla villa e si raggiunge a piedi in circa 20 minuti. Il tragitto è in discesa all’andata e in salita al ritorno: chi ama camminare lo troverà piacevole, ma è giusto conoscere prima le pendenze tipiche della Riviera Ligure.",
      },
      {
        id: "without-car",
        question: "È possibile venire senza automobile?",
        answer:
          "Sì, anche se consigliamo l’auto per muoversi comodamente, fare la spesa e visitare i dintorni. Camogli ha una stazione ferroviaria e un servizio di autobus; la fermata più vicina è a circa 10 minuti a piedi, sulla linea tra Ruta, Camogli, Santa Margherita e Recco.",
      },
      {
        id: "mobility",
        question: "La villa è consigliata per persone con mobilità ridotta?",
        answer:
          "Con rammarico, no. L’accesso a piedi tramite alcuni gradini e un breve sentiero in pendenza, le scale interne e i dislivelli del giardino rendono la casa poco adatta a chi ha difficoltà di movimento. Contattateci prima di prenotare: saremo felici di darvi tutti i dettagli per valutare se la villa fa al caso vostro.",
      },
      {
        id: "children",
        question: "La proprietà è adatta ai bambini?",
        answer:
          "Siamo felici di accogliere i bambini a Villa dei Limoni e, su richiesta, possiamo fornire due lettini e due seggioloni. Il grande giardino è articolato su fasce delimitate da muretti a secco e presenta dislivelli variabili; raccomandiamo quindi che i bambini piccoli siano sempre sorvegliati da un adulto.",
      },
      {
        id: "direct-booking",
        question: "Perché dovrei prenotare direttamente con voi e non tramite i portali?",
        answer:
          "Prenotando direttamente con noi evitate le commissioni applicate dai portali. Villa dei Limoni è una locazione turistica regolarmente registrata presso il Ministero del Turismo: il CIN è riportato in fondo a ogni pagina. Accogliamo ospiti dal 2018 e potete leggere le recensioni verificate su Airbnb e Vrbo. Se preferite, potete comunque prenotare tramite uno dei due portali; l’importo finale includerà i relativi costi di servizio.",
      },
      {
        id: "stay-length",
        question: "Qual è il periodo minimo di affitto e quali sono gli orari di check-in e check-out?",
        answer:
          "Il periodo minimo di affitto è di sette notti. Arrivo e partenza sono di domenica; il check-in è dalle 16:00 alle 19:00 e il check-out entro le 10:00.",
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
