import { amenityGroups, amenityStatusLabels } from "../data/amenities";
import { pendingOwnerApprovals, propertyIdentity } from "../data/property-facts";
import type { Locale } from "../types";
import { getSiteContent } from ".";

export const pageSlugs = [
  "villa",
  "gallery",
  "rooms-floorplans",
  "amenities",
  "rates",
  "location",
  "experiences",
  "reviews",
  "policies",
  "contact",
  "privacy",
  "cookies",
  "accessibility",
  "legal",
] as const;

export type PageSlug = (typeof pageSlugs)[number];

export interface DetailItem {
  title: string;
  description: string;
  meta?: string;
  href?: string;
  external?: boolean;
}

export interface DetailSection {
  id: string;
  eyebrow?: string;
  title: string;
  paragraphs?: readonly string[];
  items?: readonly DetailItem[];
  notice?: string;
}

export interface DetailPageContent {
  slug: PageSlug;
  navLabel: string;
  eyebrow: string;
  title: string;
  intro: string;
  seoDescription: string;
  heroImageId: string;
  sections: readonly DetailSection[];
  showGallery?: boolean;
  updatedLabel?: string;
}

// Detailed editorial copy is currently authored in English and Italian. Until
// dedicated French and Spanish copy is approved, English is the safer fallback
// than showing Italian text on those routes.
const tr = (locale: Locale, en: string, it: string) => (locale === "it" ? it : en);

export const primaryPageNavigation = (locale: Locale) => [
  { slug: "villa" as const, label: tr(locale, "Property", "Proprietà") },
  { slug: "location" as const, label: tr(locale, "Surroundings", "Dintorni") },
  { slug: "gallery" as const, label: tr(locale, "Gallery", "Galleria") },
  { slug: "reviews" as const, label: tr(locale, "Reviews", "Recensioni") },
  { slug: "rates" as const, label: tr(locale, "Rates", "Tariffe") },
  { slug: "contact" as const, label: tr(locale, "Book & contact", "Prenota e contattaci") },
];

const directBookingNotice = (locale: Locale) =>
  tr(
    locale,
    "To check availability or arrange a direct reservation, email villadeilimonicamogli@gmail.com. Reservations are confirmed directly with the owners through a rental agreement and bank transfer; no public availability calendar is published.",
    "Per conoscere la disponibilità o organizzare una prenotazione diretta, scriva a villadeilimonicamogli@gmail.com. Le prenotazioni vengono confermate direttamente con i proprietari tramite contratto di locazione e bonifico; non pubblichiamo un calendario delle disponibilità.",
  );

export function getDetailPage(locale: Locale, slug: PageSlug): DetailPageContent {
  const site = getSiteContent(locale);
  const common = {
    slug,
    heroImageId: "hero-view",
  };

  if (slug === "villa") {
    return {
      ...common,
      navLabel: tr(locale, "The villa", "La villa"),
      eyebrow: tr(locale, "The estate", "La proprietà"),
      title: tr(locale, "A private house shaped by garden and gulf.", "Una dimora privata disegnata tra giardino e golfo."),
      intro: site.story.lead,
      seoDescription: site.seo.description,
      heroImageId: "story-facade",
      sections: [
        {
          id: "main-villa",
          eyebrow: tr(locale, "The main house", "La casa principale"),
          title: tr(locale, "Three levels, with room to gather and retreat.", "Tre livelli, per stare insieme e ritrovare il proprio spazio."),
          paragraphs: site.story.paragraphs.slice(0, 2),
          items: site.layout.floors.slice(0, 3).map((floor) => ({
            title: floor.name,
            description: floor.summary,
            meta: floor.rooms.map((room) => `${room.room}: ${room.detail}`).join(" · "),
          })),
        },
        {
          id: "pool-cottage",
          eyebrow: tr(locale, "Optional with the villa", "Opzionale con la villa"),
          title: tr(locale, "The pool cottage adds privacy for four.", "La pool house aggiunge privacy per quattro ospiti."),
          paragraphs: [site.stays.modes[1].summary, site.stays.modes[1].note],
          items: site.stays.modes[1].features.map((feature) => ({ title: feature, description: "" })),
        },
        {
          id: "pedestrian-access",
          eyebrow: tr(locale, "Arriving", "L’arrivo"),
          title: tr(locale, "An authentic Ligurian approach.", "Un autentico accesso ligure."),
          paragraphs: [site.faq.items.find((item) => item.id === "access")!.answer, site.faq.items.find((item) => item.id === "mobility")!.answer],
          notice: tr(locale, "Review access needs before confirming a stay.", "Valuta le esigenze di accesso prima di confermare il soggiorno."),
        },
      ],
    };
  }

  if (slug === "gallery") {
    return {
      ...common,
      navLabel: tr(locale, "Gallery", "Galleria"),
      eyebrow: site.gallery.eyebrow,
      title: site.gallery.title,
      intro: site.gallery.intro,
      seoDescription: tr(locale, "Explore Villa dei Limoni through its sea views, garden terraces, pool, interiors, bedrooms and pool cottage.", "Scopri Villa dei Limoni attraverso la vista mare, il giardino terrazzato, la piscina, gli interni, le camere e la pool house."),
      heroImageId: "story-sunset",
      showGallery: true,
      sections: [{
        id: "publication-note",
        title: tr(locale, "A publication-ready collection is in preparation.", "La collezione fotografica per la pubblicazione è in preparazione."),
        paragraphs: [tr(locale, "The photographs shown in this local prototype are temporary listing-derived assets. They demonstrate the sequence and interaction, but must be replaced by owner-cleared originals before publication.", "Le fotografie mostrate in questo prototipo locale derivano temporaneamente dagli annunci. Dimostrano sequenza e interazione, ma devono essere sostituite con originali autorizzati dal proprietario prima della pubblicazione.")],
      }],
    };
  }

  if (slug === "rooms-floorplans") {
    return {
      ...common,
      navLabel: tr(locale, "Rooms & floorplans", "Camere e planimetrie"),
      eyebrow: site.layout.eyebrow,
      title: site.layout.title,
      intro: site.layout.intro,
      seoDescription: tr(locale, "Compare the six-bedroom main villa for 12 guests with the optional pool cottage configuration for up to 16.", "Confronta la villa principale con sei camere per 12 ospiti e la configurazione con pool house opzionale fino a 16."),
      heroImageId: "interior-living",
      sections: [
        {
          id: "configurations",
          title: tr(locale, "Two clearly separated configurations.", "Due configurazioni chiaramente distinte."),
          items: site.stays.modes.map((mode) => ({ title: mode.title, description: mode.summary, meta: `${mode.capacity} · ${mode.bedrooms} ${site.stays.comparisonLabels.bedrooms.toLowerCase()} · ${mode.bathrooms}` })),
        },
        {
          id: "floor-by-floor",
          title: tr(locale, "The house, floor by floor.", "La casa, piano per piano."),
          items: site.layout.floors.map((floor) => ({ title: floor.name, description: floor.summary, meta: floor.rooms.map((room) => `${room.room}: ${room.detail}`).join(" · ") })),
          notice: tr(locale, "Architecturally verified drawings and an accessible PDF are still required. This HTML room inventory is the current accessible equivalent and is not a plan to scale.", "Sono ancora necessari disegni verificati e un PDF accessibile. Questo inventario HTML è l’equivalente accessibile attuale e non è una planimetria in scala."),
        },
      ],
    };
  }

  if (slug === "amenities") {
    return {
      ...common,
      navLabel: tr(locale, "Amenities", "Dotazioni"),
      eyebrow: tr(locale, "At the villa", "In villa"),
      title: tr(locale, "What is included, seasonal or on request.", "Cosa è incluso, stagionale o su richiesta."),
      intro: tr(locale, "A clear inventory of the amenities verified on the official listings. Individual equipment and dimensions should be reconfirmed before publication.", "Un inventario chiaro delle dotazioni verificate negli annunci ufficiali. Attrezzature e dimensioni specifiche devono essere riconfermate prima della pubblicazione."),
      seoDescription: tr(locale, "Verified amenities at Villa dei Limoni, including the private pool, sea-view garden, air-conditioned bedrooms, garages and optional cottage.", "Le dotazioni verificate di Villa dei Limoni, tra cui piscina privata, giardino vista mare, camere climatizzate, garage e pool house opzionale."),
      heroImageId: "outdoor-table",
      sections: amenityGroups.map((group) => ({
        id: group.id,
        title: group.title[locale],
        items: group.items.map((item) => ({
          title: item.label[locale],
          description: item.note?.[locale] ?? "",
          meta: amenityStatusLabels[locale][item.status],
        })),
      })),
    };
  }

  if (slug === "rates") {
    return {
      ...common,
      navLabel: tr(locale, "Rates", "Tariffe"),
      eyebrow: tr(locale, "Rates", "Tariffe"),
      title: tr(locale, "Seasonal rates for the villa.", "Tariffe stagionali della villa."),
      intro: tr(locale, "A clear guide to rates and what is included. Ask us directly for dates, a tailored quote and the booking conditions; no public availability calendar is published.", "Una guida chiara alle tariffe e a ciò che è incluso. Ci contatti direttamente per date, preventivo e condizioni di prenotazione; non pubblichiamo un calendario delle disponibilità."),
      seoDescription: tr(locale, "Direct booking rates, what is included and tourist-tax information for Villa dei Limoni in Camogli.", "Tariffe per la prenotazione diretta, cosa è incluso e informazioni sulla tassa di soggiorno per Villa dei Limoni a Camogli."),
      heroImageId: "outdoor-dining",
      sections: [
        {
          id: "rate-status",
          title: tr(locale, "Seasonal rates, clearly explained.", "Tariffe stagionali, spiegate con chiarezza."),
          paragraphs: [tr(locale, "Rates are confirmed directly according to dates, group size and the chosen villa configuration. Contact us for a tailored proposal.", "Le tariffe vengono confermate direttamente in base alle date, al numero di ospiti e alla configurazione scelta. Ci contatti per una proposta personalizzata.")],
          items: [
            {
              title: tr(locale, "Villa configuration", "Configurazione della villa"),
              description: tr(locale, "The villa can be rented on its own or with the optional pool cottage. We will confirm the applicable rate with your quote.", "La villa può essere affittata da sola oppure con la pool house opzionale. Confermeremo la tariffa applicabile nel preventivo."),
              meta: tr(locale, "On request", "Su richiesta"),
            },
            { title: tr(locale, "What is included", "Cosa è incluso"), description: tr(locale, "The agreed rental price includes the services stated in your quotation and rental agreement. The tourist tax is the only cost not included.", "Il prezzo di locazione concordato include i servizi indicati nel preventivo e nel contratto. L’unico costo non incluso è la tassa di soggiorno."), meta: tr(locale, "Please read your quote", "Faccia riferimento al preventivo") },
            { title: tr(locale, "Tourist tax", "Tassa di soggiorno"), description: tr(locale, "The tourist tax is paid locally on arrival, in accordance with the current Comune di Camogli rules.", "La tassa di soggiorno viene versata in loco all’arrivo, secondo le regole vigenti del Comune di Camogli."), meta: tr(locale, "Not included", "Non inclusa") },
            { title: tr(locale, "How to book", "Come prenotare"), description: tr(locale, "Write to us to check dates. We will send the proposal, rental agreement and bank-transfer instructions directly.", "Ci scriva per verificare le date. Le invieremo direttamente proposta, contratto di locazione e istruzioni per il bonifico."), meta: tr(locale, "Direct reservation", "Prenotazione diretta") },
          ],
          notice: directBookingNotice(locale),
        },
      ],
    };
  }


  if (slug === "location") {
    return {
      ...common,
      navLabel: tr(locale, "Surroundings", "Dintorni"),
      eyebrow: tr(locale, "Camogli & surroundings", "Camogli e dintorni"),
      title: tr(locale, "Explore Camogli, Portofino and the Ligurian coast.", "Scopri Camogli, Portofino e la Riviera."),
      intro: tr(locale, "Ideas and practical starting points for planning time around Villa dei Limoni.", "Idee e informazioni pratiche per organizzare il tempo nei dintorni di Villa dei Limoni."),
      seoDescription: tr(locale, "Villa dei Limoni is above Camogli, near Portofino Natural Park, with a final pedestrian approach and two private garages.", "Villa dei Limoni si trova sopra Camogli, vicino al Parco di Portofino, con un tratto finale pedonale e due garage privati."),
      heroImageId: "camogli-destination",
      sections: [
        { id: "camogli", title: tr(locale, "Camogli below. Portofino park nearby.", "Camogli sotto. Il Parco di Portofino vicino."), paragraphs: site.location.paragraphs, items: site.location.details.map((detail) => ({ title: detail.label, description: detail.description, meta: detail.value })) },
        { id: "pedestrian-access", title: tr(locale, "The final approach is on foot.", "L’ultimo tratto è pedonale."), paragraphs: [site.faq.items.find((item) => item.id === "access")!.answer, site.faq.items.find((item) => item.id === "parking")!.answer, site.faq.items.find((item) => item.id === "mobility")!.answer], notice: site.location.privacyNote },
      ],
    };
  }

  if (slug === "experiences") {
    return {
      ...common,
      navLabel: tr(locale, "Experiences", "Esperienze"),
      eyebrow: tr(locale, "Around Camogli", "Intorno a Camogli"),
      title: tr(locale, "The gulf, the paths and the village.", "Il golfo, i sentieri e il borgo."),
      intro: tr(locale, "A concise starting point for exploring the landscape around Villa dei Limoni. These are destination ideas, not services supplied by the villa.", "Un punto di partenza essenziale per esplorare il paesaggio intorno a Villa dei Limoni. Sono idee sulla destinazione, non servizi forniti dalla villa."),
      seoDescription: tr(locale, "Explore Camogli beach and marina, the nearby Portofino park trail network and the eastern Ligurian Riviera from Villa dei Limoni.", "Esplora la spiaggia e il porticciolo di Camogli, i sentieri del Parco di Portofino e la Riviera ligure di Levante da Villa dei Limoni."),
      heroImageId: "villa-from-camogli-beach",
      sections: [
        { id: "camogli", title: "Camogli", items: [{ title: tr(locale, "Beach & marina", "Spiaggia e porticciolo"), description: tr(locale, "Camogli is about five minutes by car or bus, or 15–20 minutes downhill on foot; the return is uphill.", "Camogli è a circa cinque minuti in auto o autobus, oppure 15–20 minuti a piedi in discesa; il ritorno è in salita."), meta: tr(locale, "Destination recommendation", "Suggerimento sulla destinazione") }] },
        { id: "park", title: tr(locale, "Portofino Natural Park", "Parco Naturale di Portofino"), items: [{ title: tr(locale, "The Camogli–San Rocco–Batterie–San Fruttuoso route", "Il percorso Camogli–San Rocco–Batterie–San Fruttuoso"), description: tr(locale, "A nearby route within the park’s approximately 80 km marked trail network. Check current trail conditions with the park authority before setting out.", "Un itinerario vicino, nella rete di circa 80 km di sentieri segnati del parco. Verifica le condizioni aggiornate presso l’ente parco prima di partire."), meta: tr(locale, "Independent outing", "Escursione autonoma") }] },
        { id: "beyond", title: tr(locale, "Along the Riviera", "Lungo la Riviera"), items: ["Santa Margherita Ligure", "Rapallo", "Portofino", "Genova"].map((place) => ({ title: place, description: tr(locale, "Within driving reach; journey time varies with season and traffic.", "Raggiungibile in auto; i tempi variano con stagione e traffico."), meta: tr(locale, "Independent visit", "Visita autonoma") })) },
      ],
    };
  }

  if (slug === "reviews") {
    return {
      ...common,
      navLabel: tr(locale, "Reviews", "Recensioni"),
      eyebrow: site.reviews.eyebrow,
      title: site.reviews.title,
      intro: site.reviews.intro,
      seoDescription: tr(locale, "Vrbo guest reviews and recurring guest themes for Villa dei Limoni in Camogli.", "Recensioni degli ospiti su Vrbo e temi ricorrenti per Villa dei Limoni a Camogli."),
      heroImageId: "outdoor-pool-wide",
      sections: [
        { id: "platform-ratings", title: tr(locale, "Independent guest feedback on Vrbo.", "Le recensioni degli ospiti su Vrbo."), items: site.reviews.platforms.filter((review) => review.id === "vrbo").map((review) => ({ title: review.name, description: `${review.score} ${review.scale} · ${review.reviewCountLabel}`, meta: review.verifiedLabel, href: site.platforms.find((platform) => platform.id === review.id)!.url, external: true })), notice: site.reviews.disclaimer },
        { id: "themes", title: tr(locale, "What guests mention repeatedly.", "Cosa ricordano spesso gli ospiti."), items: site.reviews.proofPoints.map((point) => ({ title: point, description: "" })) },
      ],
    };
  }

  if (slug === "policies") {
    return {
      ...common,
      navLabel: tr(locale, "Booking conditions & FAQ", "Condizioni di prenotazione"),
      eyebrow: site.faq.eyebrow,
      title: site.faq.title,
      intro: tr(locale, "Clear practical information and the key conditions to know before requesting a direct reservation.", "Informazioni pratiche chiare e le principali condizioni da conoscere prima di richiedere una prenotazione diretta."),
      seoDescription: tr(locale, "Access, safety, arrival, pool, children, pets, events, services, tax and booking answers for Villa dei Limoni.", "Risposte su accesso, sicurezza, arrivo, piscina, bambini, animali, eventi, servizi, imposte e prenotazione di Villa dei Limoni."),
      heroImageId: "access-creuza",
      sections: [
        {
          id: "direct-booking",
          title: tr(locale, "How direct booking works.", "Come funziona la prenotazione diretta."),
          paragraphs: [directBookingNotice(locale)],
          items: [
            { title: tr(locale, "1. Ask about dates", "1. Chiedi le date"), description: tr(locale, "Email or call us with your preferred dates, group size and villa configuration.", "Scrivici o chiamaci indicando date desiderate, numero di ospiti e configurazione della villa.") },
            { title: tr(locale, "2. Receive the proposal", "2. Ricevi la proposta"), description: tr(locale, "We will confirm availability and send the applicable rate, what is included and the rental conditions.", "Confermeremo la disponibilità e invieremo tariffa applicabile, cosa è incluso e condizioni di locazione.") },
            { title: tr(locale, "3. Confirm directly", "3. Conferma direttamente"), description: tr(locale, "The reservation is completed with the rental agreement and bank transfer. The tourist tax is paid locally on arrival.", "La prenotazione viene conclusa con contratto di locazione e bonifico. La tassa di soggiorno si versa in loco all’arrivo.") },
          ],
        },
        { id: "frequently-asked", title: tr(locale, "Important practical information.", "Informazioni pratiche importanti."), items: site.faq.items.filter((item) => ["access", "parking", "children"].includes(item.id)).map((item) => ({ title: item.question, description: item.answer })), notice: tr(locale, "The final rental agreement sets out the terms applicable to your stay.", "Il contratto di locazione definitivo riporta le condizioni applicabili al soggiorno.") },
      ],
    };
  }

  if (slug === "contact") {
    return {
      ...common,
      navLabel: tr(locale, "Book & contact", "Prenota e contattaci"),
      eyebrow: tr(locale, "Direct reservations", "Prenotazioni dirette"),
      title: tr(locale, "Plan your stay directly with us.", "Organizza il tuo soggiorno direttamente con noi."),
      intro: tr(locale, "Write or call us to check dates, receive a proposal and arrange your direct reservation.", "Ci scriva o ci chiami per verificare le date, ricevere una proposta e organizzare la prenotazione diretta."),
      seoDescription: tr(locale, "Contact Villa dei Limoni in Camogli for direct reservations, availability and tailored quotes.", "Contatta Villa dei Limoni a Camogli per prenotazioni dirette, disponibilità e preventivi personalizzati."),
      heroImageId: "story-citrus",
      sections: [{ id: "contact-options", title: tr(locale, "Get in touch.", "Scrivici."), paragraphs: [directBookingNotice(locale)], items: [
        { title: tr(locale, "Email", "Email"), description: propertyIdentity.email, href: `mailto:${propertyIdentity.email}` },
        { title: tr(locale, "Telephone", "Telefono"), description: propertyIdentity.telephone, href: `tel:${propertyIdentity.telephone.replaceAll(" ", "")}` },
      ], notice: tr(locale, "Sending a message does not reserve dates; we will confirm availability and next steps by email.", "L’invio di un messaggio non blocca le date; confermeremo disponibilità e passaggi successivi via email.") }],
    };
  }

  const legalPages = {
    privacy: {
      navLabel: tr(locale, "Privacy", "Privacy"),
      eyebrow: tr(locale, "Privacy", "Privacy"),
      title: tr(locale, "A minimal-data showcase.", "Una vetrina con raccolta dati minima."),
      intro: tr(locale, "This website does not use analytics, advertising trackers, embedded maps or third-party booking widgets.", "Questo sito non usa analytics, tracker pubblicitari, mappe incorporate o widget di prenotazione di terze parti."),
      sections: [
        { id: "data", title: tr(locale, "What this site processes.", "Cosa tratta questo sito."), paragraphs: [tr(locale, "The static pages can be viewed without creating an account or submitting personal details. The hosting provider may process standard technical request logs under its own terms.", "Le pagine statiche possono essere consultate senza creare un account o fornire dati personali. Il fornitore di hosting può trattare log tecnici standard secondo le proprie condizioni.") ] },
        { id: "contact", title: tr(locale, "Contact requests.", "Richieste di contatto."), paragraphs: [tr(locale, "Messages sent through the contact form open the visitor’s own email program and are not stored by this website. Email correspondence is processed only to respond to the request and manage any booking.", "I messaggi inviati tramite il modulo di contatto aprono il programma email del visitatore e non vengono memorizzati dal sito. La corrispondenza email è trattata solo per rispondere alla richiesta e gestire un’eventuale prenotazione.")], notice: tr(locale, "Qualified Italian legal review is required before publication.", "Prima della pubblicazione è necessaria una revisione legale qualificata in Italia.") },
      ],
    },
    cookies: {
      navLabel: tr(locale, "Cookies", "Cookie"), eyebrow: tr(locale, "Cookies", "Cookie"),
      title: tr(locale, "No non-essential cookies in this prototype.", "Nessun cookie non essenziale in questo prototipo."),
      intro: tr(locale, "The current static implementation does not load analytics, advertising, embedded video, maps or social widgets.", "L’attuale implementazione statica non carica analytics, pubblicità, video incorporati, mappe o widget social."),
      sections: [{ id: "future", title: tr(locale, "If measurement is added later.", "Se in futuro verrà aggiunta la misurazione."), paragraphs: [tr(locale, "Any non-essential technology must remain disabled until a valid consent choice, with a persistent way to revisit that choice.", "Qualsiasi tecnologia non essenziale dovrà restare disattivata fino a una scelta di consenso valida, con un modo permanente per modificarla.")], notice: tr(locale, "This page must be updated whenever the site’s storage or third-party services change.", "Questa pagina deve essere aggiornata ogni volta che cambiano archiviazione o servizi di terze parti del sito.") }],
    },
    accessibility: {
      navLabel: tr(locale, "Accessibility", "Accessibilità"), eyebrow: tr(locale, "Accessibility", "Accessibilità"),
      title: tr(locale, "Designed to be read, reached and understood.", "Progettato per essere letto, raggiunto e compreso."),
      intro: tr(locale, "The site uses semantic landmarks, keyboard-operable navigation and gallery controls, visible focus, responsive layouts and reduced-motion support.", "Il sito usa landmark semantici, navigazione e galleria da tastiera, focus visibile, layout responsivi e supporto alla riduzione del movimento."),
      sections: [
        { id: "features", title: tr(locale, "Current accessibility measures.", "Misure di accessibilità attuali."), items: [
          { title: tr(locale, "Keyboard", "Tastiera"), description: tr(locale, "Menus, contact form and gallery support keyboard operation.", "Menu, modulo di contatto e galleria funzionano da tastiera.") },
          { title: tr(locale, "Motion", "Movimento"), description: tr(locale, "Non-essential motion is removed when reduced motion is requested.", "Il movimento non essenziale viene rimosso quando è richiesta la riduzione del movimento.") },
          { title: tr(locale, "Property access", "Accesso alla proprietà"), description: tr(locale, "The physical pedestrian path, stairs and terraced grounds are described separately from website accessibility.", "Il percorso pedonale fisico, le scale e il giardino terrazzato sono descritti separatamente dall’accessibilità del sito.") },
        ] },
        { id: "limitations", title: tr(locale, "Known limitations.", "Limitazioni note."), paragraphs: [tr(locale, "Professional floorplan drawings and an accessible floorplan PDF are not yet available. No public accessibility contact address has been approved.", "Non sono ancora disponibili planimetrie professionali e relativo PDF accessibile. Non è stato approvato un indirizzo pubblico per le segnalazioni di accessibilità.")] },
      ],
    },
    legal: {
      navLabel: tr(locale, "Legal", "Note legali"), eyebrow: tr(locale, "Legal notice", "Note legali"),
      title: propertyIdentity.name,
      intro: tr(locale, "A private tourist-rental showcase for a property in Camogli, Liguria, Italy.", "Una vetrina per una locazione turistica privata a Camogli, Liguria, Italia."),
      sections: [
        { id: "registration", title: tr(locale, "Registration identifiers.", "Codici identificativi."), items: [
          { title: "CIN", description: propertyIdentity.cin },
          { title: "CITRA", description: propertyIdentity.citra },
        ] },
        { id: "booking", title: tr(locale, "Direct booking.", "Prenotazione diretta."), paragraphs: [directBookingNotice(locale)], notice: tr(locale, "Final legal wording and operator details require owner and qualified-advisor approval before publication.", "Il testo legale finale e i dati del gestore richiedono l’approvazione del proprietario e di un consulente qualificato prima della pubblicazione.") },
      ],
    },
  } as const;

  const legal = legalPages[slug as keyof typeof legalPages];
  return {
    ...common,
    ...legal,
    seoDescription: legal.intro,
    heroImageId: slug === "accessibility" ? "interior-dining" : "story-garden",
    updatedLabel: tr(locale, "Prototype statement · 3 August 2026", "Dichiarazione del prototipo · 3 agosto 2026"),
  } as DetailPageContent;
}

export const editorialPendingItems = pendingOwnerApprovals;
