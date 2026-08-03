import { amenityGroups, amenityStatusLabels } from "../data/amenities";
import { pendingOwnerApprovals, propertyIdentity } from "../data/property-facts";
import { ratePolicy } from "../data/rates";
import type { Locale } from "../types";
import { getSiteContent } from ".";

export const pageSlugs = [
  "villa",
  "gallery",
  "rooms-floorplans",
  "amenities",
  "rates",
  "availability",
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
  showPlatforms?: boolean;
  updatedLabel?: string;
}

const tr = (locale: Locale, en: string, it: string) => (locale === "en" ? en : it);

export const primaryPageNavigation = (locale: Locale) => [
  { slug: "villa" as const, label: tr(locale, "Villa", "Villa") },
  { slug: "gallery" as const, label: tr(locale, "Gallery", "Galleria") },
  { slug: "rates" as const, label: tr(locale, "Rates", "Tariffe") },
  { slug: "location" as const, label: tr(locale, "Location", "Posizione") },
  { slug: "experiences" as const, label: tr(locale, "Experiences", "Esperienze") },
];

const bookingNotice = (locale: Locale) =>
  tr(
    locale,
    "This website does not accept reservations or payments. Current dates, final pricing, taxes, cancellation terms and booking are handled by the official Airbnb and Vrbo listings.",
    "Questo sito non accetta prenotazioni o pagamenti. Date aggiornate, prezzo finale, imposte, condizioni di cancellazione e prenotazione sono gestiti dagli annunci ufficiali Airbnb e Vrbo.",
  );

export function getDetailPage(locale: Locale, slug: PageSlug): DetailPageContent {
  const site = getSiteContent(locale);
  const common = {
    slug,
    heroImageId: "hero-view",
    showPlatforms: true,
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
      title: tr(locale, "Clear guidance, without a misleading total.", "Indicazioni chiare, senza totali fuorvianti."),
      intro: bookingNotice(locale),
      seoDescription: tr(locale, "How to check current weekly rates and fees for Villa dei Limoni on Airbnb or Vrbo.", "Come verificare tariffe settimanali e costi aggiornati di Villa dei Limoni su Airbnb o Vrbo."),
      heroImageId: "outdoor-dining",
      sections: [
        {
          id: "rate-status",
          title: tr(locale, "Owner-approved seasonal rates are not yet available.", "Le tariffe stagionali approvate dal proprietario non sono ancora disponibili."),
          paragraphs: [tr(locale, "The Airbnb and Vrbo listings currently differ on cottage supplements and cleaning fees. No amount is published here until one canonical seasonal table is approved.", "Gli annunci Airbnb e Vrbo riportano differenze per supplemento della pool house e pulizie. Nessun importo viene pubblicato qui finché non sarà approvata una tabella stagionale unica.")],
          items: [
            { title: tr(locale, "Stay pattern", "Formula di soggiorno"), description: tr(locale, "The Airbnb listing currently presents seven-night stays with Sunday arrivals.", "L’annuncio Airbnb presenta attualmente soggiorni di sette notti con arrivo la domenica."), meta: tr(locale, "Verify the selected season online", "Verifica online la stagione scelta") },
            { title: tr(locale, "Tourist tax", "Imposta di soggiorno"), description: tr(locale, ratePolicy.fees.touristTax.display, "Dovuta secondo le regole aggiornate del Comune di Camogli e confermata alla prenotazione."), meta: tr(locale, "Amount intentionally omitted", "Importo volutamente omesso") },
            { title: tr(locale, "Final total", "Totale finale"), description: tr(locale, "Includes the platform’s current fees, taxes, terms and any promotion.", "Comprende costi, imposte, condizioni ed eventuali promozioni correnti della piattaforma."), meta: tr(locale, "Shown externally", "Mostrato esternamente") },
          ],
          notice: bookingNotice(locale),
        },
      ],
    };
  }

  if (slug === "availability") {
    return {
      ...common,
      navLabel: tr(locale, "Availability", "Disponibilità"),
      eyebrow: tr(locale, "Availability & booking", "Disponibilità e prenotazione"),
      title: tr(locale, "Your stay begins on Airbnb or Vrbo.", "Il soggiorno inizia su Airbnb o Vrbo."),
      intro: bookingNotice(locale),
      seoDescription: tr(locale, "Check current Villa dei Limoni dates, pricing and booking terms on the official Airbnb or Vrbo listing.", "Verifica date, prezzi e condizioni di prenotazione di Villa dei Limoni sugli annunci ufficiali Airbnb o Vrbo."),
      heroImageId: "finale-night",
      sections: [
        {
          id: "how-it-works",
          title: tr(locale, "Choose the platform you prefer.", "Scegli la piattaforma che preferisci."),
          paragraphs: [tr(locale, "Both buttons open the villa’s official listing in a new tab. Review the configuration, dates, final total and cancellation terms there before confirming.", "Entrambi i pulsanti aprono l’annuncio ufficiale della villa in una nuova scheda. Prima di confermare, verifica lì configurazione, date, totale finale e condizioni di cancellazione.")],
          items: [
            { title: "Airbnb", description: tr(locale, "Current dates, messaging and Airbnb terms.", "Date aggiornate, messaggistica e condizioni Airbnb."), href: site.platforms[0].url, external: true },
            { title: "Vrbo", description: tr(locale, "Current dates, messaging and Vrbo terms.", "Date aggiornate, messaggistica e condizioni Vrbo."), href: site.platforms[1].url, external: true },
          ],
          notice: tr(locale, "This site has no calendar, checkout, deposit or direct-booking flow.", "Questo sito non contiene calendario, checkout, deposito o prenotazione diretta."),
        },
      ],
    };
  }

  if (slug === "location") {
    return {
      ...common,
      navLabel: tr(locale, "Location & access", "Posizione e accesso"),
      eyebrow: site.location.eyebrow,
      title: site.location.title,
      intro: site.location.lead,
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
      seoDescription: tr(locale, "Dated Airbnb and Vrbo rating snapshots and recurring guest themes for Villa dei Limoni.", "Valutazioni Airbnb e Vrbo datate e temi ricorrenti nelle recensioni di Villa dei Limoni."),
      heroImageId: "outdoor-pool-wide",
      sections: [
        { id: "platform-ratings", title: tr(locale, "Ratings stay separate and attributed.", "Le valutazioni restano separate e attribuite."), items: site.reviews.platforms.map((review) => ({ title: review.name, description: `${review.score} ${review.scale} · ${review.reviewCountLabel}`, meta: review.verifiedLabel, href: site.platforms.find((platform) => platform.id === review.id)!.url, external: true })), notice: site.reviews.disclaimer },
        { id: "themes", title: tr(locale, "What guests mention repeatedly.", "Cosa ricordano spesso gli ospiti."), items: site.reviews.proofPoints.map((point) => ({ title: point, description: "" })) },
      ],
    };
  }

  if (slug === "policies") {
    return {
      ...common,
      navLabel: tr(locale, "Policies & FAQ", "Regole e FAQ"),
      eyebrow: site.faq.eyebrow,
      title: site.faq.title,
      intro: site.faq.intro,
      seoDescription: tr(locale, "Access, safety, arrival, pool, children, pets, events, services, tax and booking answers for Villa dei Limoni.", "Risposte su accesso, sicurezza, arrivo, piscina, bambini, animali, eventi, servizi, imposte e prenotazione di Villa dei Limoni."),
      heroImageId: "access-creuza",
      sections: [{ id: "frequently-asked", title: tr(locale, "Before you confirm a stay.", "Prima di confermare il soggiorno."), items: site.faq.items.map((item) => ({ title: item.question, description: item.answer })), notice: tr(locale, "The terms attached to the confirmed platform reservation prevail.", "Fanno fede le condizioni associate alla prenotazione confermata sulla piattaforma.") }],
    };
  }

  if (slug === "contact") {
    return {
      ...common,
      navLabel: tr(locale, "Contact", "Contatti"),
      eyebrow: tr(locale, "Questions", "Domande"),
      title: tr(locale, "Ask through the official listing.", "Scrivi tramite l’annuncio ufficiale."),
      intro: tr(locale, "Until a dedicated business mailbox and privacy-reviewed form processor are approved, questions should be sent through Airbnb or Vrbo.", "Finché non saranno approvati una casella aziendale dedicata e un servizio form verificato sotto il profilo privacy, le domande devono essere inviate tramite Airbnb o Vrbo."),
      seoDescription: tr(locale, "Contact Villa dei Limoni through its official Airbnb or Vrbo listing for property and booking questions.", "Contatta Villa dei Limoni tramite l’annuncio ufficiale Airbnb o Vrbo per domande sulla proprietà e sulla prenotazione."),
      heroImageId: "story-citrus",
      sections: [{ id: "contact-options", title: tr(locale, "Keep your question with your booking context.", "Mantieni la domanda nel contesto della prenotazione."), paragraphs: [bookingNotice(locale)], items: site.platforms.map((platform) => ({ title: platform.name, description: platform.externalLabel, href: platform.url, external: true })), notice: tr(locale, "Sending a message does not reserve dates.", "L’invio di un messaggio non riserva alcuna data.") }],
    };
  }

  const legalPages = {
    privacy: {
      navLabel: tr(locale, "Privacy", "Privacy"),
      eyebrow: tr(locale, "Privacy", "Privacy"),
      title: tr(locale, "A minimal-data showcase.", "Una vetrina con raccolta dati minima."),
      intro: tr(locale, "This prototype does not use analytics, advertising trackers, embedded maps or a contact form.", "Questo prototipo non usa analytics, tracker pubblicitari, mappe incorporate o moduli di contatto."),
      sections: [
        { id: "data", title: tr(locale, "What this site processes.", "Cosa tratta questo sito."), paragraphs: [tr(locale, "The static pages can be viewed without creating an account or submitting personal details. The hosting provider may process standard technical request logs under its own terms.", "Le pagine statiche possono essere consultate senza creare un account o fornire dati personali. Il fornitore di hosting può trattare log tecnici standard secondo le proprie condizioni.") ] },
        { id: "external", title: tr(locale, "External booking platforms.", "Piattaforme di prenotazione esterne."), paragraphs: [tr(locale, "Following an Airbnb or Vrbo link leaves this website. The selected platform’s privacy notice and terms then apply.", "Seguendo un link Airbnb o Vrbo si lascia questo sito. Si applicano quindi informativa privacy e condizioni della piattaforma scelta.")], notice: tr(locale, "Qualified Italian legal review is required before publication.", "Prima della pubblicazione è necessaria una revisione legale qualificata in Italia.") },
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
          { title: tr(locale, "Keyboard", "Tastiera"), description: tr(locale, "Menus, booking sheet and gallery support keyboard operation and Escape.", "Menu, pannello disponibilità e galleria funzionano da tastiera e con Esc.") },
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
        { id: "booking", title: tr(locale, "Booking responsibility.", "Responsabilità della prenotazione."), paragraphs: [bookingNotice(locale)], notice: tr(locale, "Final legal wording and operator details require owner and qualified-advisor approval before publication.", "Il testo legale finale e i dati del gestore richiedono l’approvazione del proprietario e di un consulente qualificato prima della pubblicazione.") },
      ],
    },
  } as const;

  const legal = legalPages[slug as keyof typeof legalPages];
  return {
    ...common,
    ...legal,
    seoDescription: legal.intro,
    heroImageId: slug === "accessibility" ? "interior-dining" : "story-garden",
    showPlatforms: slug === "legal",
    updatedLabel: tr(locale, "Prototype statement · 3 August 2026", "Dichiarazione del prototipo · 3 agosto 2026"),
  } as DetailPageContent;
}

export const editorialPendingItems = pendingOwnerApprovals;
