import { amenityGroups } from "../data/amenities";
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
  "location",
  "arrival",
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
  showLocationMap?: boolean;
  updatedLabel?: string;
}

const tr = (locale: Locale, en: string, it: string, fr = en, es = en) => ({ en, it, fr, es })[locale];

export const primaryPageNavigation = (locale: Locale) => [
  { slug: "villa" as const, label: tr(locale, "Property", "Proprietà", "La propriété", "La propiedad") },
  { slug: "location" as const, label: tr(locale, "Surroundings", "Dintorni", "Les environs", "Alrededores") },
  { slug: "arrival" as const, label: tr(locale, "Getting here", "Come arrivare", "Comment venir", "Cómo llegar") },
  { slug: "gallery" as const, label: tr(locale, "Gallery", "Galleria", "Galerie", "Galería") },
  { slug: "reviews" as const, label: tr(locale, "Reviews", "Recensioni", "Avis", "Opiniones") },
  { slug: "rates" as const, label: tr(locale, "Rates", "Tariffe", "Tarifs", "Tarifas") },
  { slug: "contact" as const, label: tr(locale, "Book & contact us", "Prenotate e contattateci", "Réservez et contactez-nous", "Reservad y contactadnos") },
];

const directBookingNotice = (locale: Locale) =>
  tr(
    locale,
    "To check availability or arrange a direct reservation, email villadeilimonicamogli@gmail.com. Reservations are confirmed directly with the owners through a rental agreement and bank transfer; no public availability calendar is published.",
    "Per conoscere la disponibilità o organizzare una prenotazione diretta, scriveteci a villadeilimonicamogli@gmail.com. Confermiamo le prenotazioni tramite contratto di locazione e bonifico; non pubblichiamo un calendario delle disponibilità.",
    "Pour connaître les disponibilités ou réserver directement, écrivez-nous à villadeilimonicamogli@gmail.com. Nous confirmons les réservations par contrat de location et virement bancaire ; aucun calendrier public n’est publié.",
    "Para consultar la disponibilidad o reservar directamente, escribidnos a villadeilimonicamogli@gmail.com. Confirmamos las reservas mediante contrato de alquiler y transferencia bancaria; no publicamos un calendario de disponibilidad.",
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
      navLabel: tr(locale, "The villa", "La villa", "La villa", "La villa"),
      eyebrow: tr(locale, "The estate", "La proprietà", "La propriété", "La propiedad"),
      title: tr(locale, "A private house between garden and gulf.", "Una dimora privata tra giardino e golfo.", "Une maison privée entre jardin et golfe.", "Una casa privada entre el jardín y el golfo."),
      intro: site.story.lead,
      seoDescription: site.seo.description,
      heroImageId: "story-facade",
      sections: [
        {
          id: "main-villa",
          eyebrow: tr(locale, "The main house", "La casa principale", "La maison principale", "La casa principal"),
          title: tr(locale, "Three levels, with space to be together and unwind.", "Tre livelli, per stare insieme e ritrovare il proprio spazio.", "Trois niveaux pour se retrouver et profiter de son espace.", "Tres plantas para estar juntos y disfrutar de vuestro espacio."),
          paragraphs: site.story.paragraphs.slice(0, 2),
          items: site.layout.floors.slice(0, 3).map((floor) => ({
            title: floor.name,
            description: floor.summary,
            meta: floor.rooms.map((room) => `${room.room}: ${room.detail}`).join(" · "),
          })),
        },
        {
          id: "pool-cottage",
          eyebrow: tr(locale, "Optional with the villa", "Opzionale con la villa", "En option avec la villa", "Opcional con la villa"),
          title: tr(locale, "The pool cottage gives four guests more privacy.", "Il pool cottage offre maggiore privacy a quattro ospiti.", "Le pool cottage offre plus d’intimité à quatre personnes.", "El pool cottage ofrece más intimidad a cuatro huéspedes."),
          paragraphs: [site.stays.modes[1].summary, site.stays.modes[1].note],
          items: site.stays.modes[1].features.map((feature) => ({ title: feature, description: "" })),
        },
        {
          id: "pedestrian-access",
          eyebrow: tr(locale, "Arriving", "L’arrivo", "L’arrivée", "La llegada"),
          title: tr(locale, "A typically Ligurian approach.", "Un tipico accesso ligure.", "Un accès typiquement ligure.", "Un acceso típicamente ligur."),
          paragraphs: [site.faq.items.find((item) => item.id === "access")!.answer, site.faq.items.find((item) => item.id === "mobility")!.answer],
          notice: tr(locale, "Please consider your access needs before confirming a stay.", "Valutate le vostre esigenze di accesso prima di confermare il soggiorno.", "Tenez compte de vos besoins d’accès avant de confirmer votre séjour.", "Tened en cuenta vuestras necesidades de acceso antes de confirmar la estancia."),
        },
      ],
    };
  }

  if (slug === "gallery") {
    return {
      ...common,
      navLabel: tr(locale, "Gallery", "Galleria", "Galerie", "Galería"),
      eyebrow: site.gallery.eyebrow,
      title: site.gallery.title,
      intro: site.gallery.intro,
      seoDescription: tr(locale, "See Villa dei Limoni through its sea views, terraced garden, pool, interiors, bedrooms and pool cottage.", "Scoprite Villa dei Limoni attraverso la vista mare, il giardino terrazzato, la piscina, gli interni, le camere e il pool cottage.", "Découvrez Villa dei Limoni à travers ses vues sur la mer, son jardin en terrasses, sa piscine, ses intérieurs, ses chambres et son pool cottage.", "Descubrid Villa dei Limoni a través de las vistas al mar, el jardín en terrazas, la piscina, los interiores, los dormitorios y el pool cottage."),
      heroImageId: "story-sunset",
      showGallery: true,
      sections: [{
        id: "publication-note",
        title: tr(locale, "The final photo collection is being prepared.", "La collezione fotografica definitiva è in preparazione.", "La sélection photographique définitive est en préparation.", "La selección fotográfica definitiva está en preparación."),
        paragraphs: [tr(locale, "The photographs shown in this local prototype are temporary listing images and must be replaced by owner-approved originals before publication.", "Le fotografie mostrate in questo prototipo locale derivano temporaneamente dagli annunci e devono essere sostituite con originali autorizzati dal proprietario prima della pubblicazione.", "Les photographies de ce prototype local proviennent temporairement des annonces et devront être remplacées par des originaux approuvés par le propriétaire avant publication.", "Las fotografías de este prototipo local proceden temporalmente de los anuncios y deberán sustituirse por originales aprobados por el propietario antes de su publicación.")],
      }],
    };
  }

  if (slug === "rooms-floorplans") {
    return {
      ...common,
      navLabel: tr(locale, "Rooms & floorplans", "Camere e planimetrie", "Chambres et plans", "Habitaciones y planos"),
      eyebrow: site.layout.eyebrow,
      title: site.layout.title,
      intro: site.layout.intro,
      seoDescription: tr(locale, "Compare the six-bedroom main villa for 12 guests with the optional pool cottage for up to 16.", "Confrontate la villa principale con sei camere per 12 ospiti e la formula con pool cottage opzionale fino a 16.", "Comparez la villa principale de six chambres pour 12 personnes et la formule avec pool cottage, jusqu’à 16 personnes.", "Comparad la villa principal de seis dormitorios para 12 huéspedes con la opción del pool cottage, hasta 16."),
      heroImageId: "interior-living",
      sections: [
        {
          id: "configurations",
          title: tr(locale, "Two ways to stay.", "Le due formule.", "Deux façons de séjourner.", "Dos formas de alojarse."),
          items: site.stays.modes.map((mode) => ({ title: mode.title, description: mode.summary, meta: `${mode.capacity} · ${mode.bedrooms} ${site.stays.comparisonLabels.bedrooms.toLowerCase()} · ${mode.bathrooms}` })),
        },
        {
          id: "floor-by-floor",
          title: tr(locale, "The house, floor by floor.", "La casa, piano per piano.", "La maison, étage par étage.", "La casa, planta por planta."),
          items: site.layout.floors.map((floor) => ({ title: floor.name, description: floor.summary, meta: floor.rooms.map((room) => `${room.room}: ${room.detail}`).join(" · ") })),
          notice: tr(locale, "Verified floorplans and an accessible PDF are still being prepared. This room list is not a plan to scale.", "Le planimetrie verificate e il PDF accessibile sono ancora in preparazione. Questo elenco degli ambienti non è una planimetria in scala.", "Les plans vérifiés et le PDF accessible sont encore en préparation. Cette liste des pièces n’est pas un plan à l’échelle.", "Los planos verificados y el PDF accesible están todavía en preparación. Esta lista de estancias no es un plano a escala."),
        },
      ],
    };
  }

  if (slug === "amenities") {
    const visibleAmenityGroups = amenityGroups.filter((group) => group.id !== "services");
    return {
      ...common,
      navLabel: tr(locale, "Amenities", "Dotazioni", "Équipements", "Servicios"),
      eyebrow: tr(locale, "At the villa", "In villa", "À la villa", "En la villa"),
      title: tr(locale, "Everything available at the villa.", "Tutto ciò che trovate in villa.", "Tout ce que vous trouverez à la villa.", "Todo lo que encontraréis en la villa."),
      intro: tr(locale, "Amenities in the villa, garden and optional pool cottage.", "Le dotazioni della villa, del giardino e del pool cottage opzionale.", "Les équipements de la villa, du jardin et du pool cottage en option.", "Los servicios de la villa, el jardín y el pool cottage opcional."),
      seoDescription: tr(locale, "Amenities at Villa dei Limoni, including the private pool, sea-view garden, air-conditioned bedrooms, garages and optional cottage.", "Le dotazioni di Villa dei Limoni, tra cui piscina privata, giardino vista mare, camere climatizzate, garage e pool cottage opzionale.", "Les équipements de Villa dei Limoni : piscine privée, jardin avec vue sur la mer, chambres climatisées, garages et pool cottage en option.", "Los servicios de Villa dei Limoni: piscina privada, jardín con vistas al mar, dormitorios con aire acondicionado, garajes y pool cottage opcional."),
      heroImageId: "outdoor-table",
      sections: visibleAmenityGroups.map((group) => ({
        id: group.id,
        title: group.title[locale],
        items: group.items.map((item) => ({
          title: item.label[locale],
          description: item.note?.[locale] ?? "",
          meta: undefined,
        })),
      })),
    };
  }

  if (slug === "rates") {
    const numberLocale = { en: "en-GB", it: "it-IT", fr: "fr-FR", es: "es-ES" }[locale];
    const euro = (value: number) => new Intl.NumberFormat(numberLocale, { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
    const monthNames: Record<Locale, Record<string, string>> = {
      en: { April: "April", May: "May", June: "June", July: "July", August: "August", September: "September", October: "October", Easter: "Easter" },
      it: { April: "Aprile", May: "Maggio", June: "Giugno", July: "Luglio", August: "Agosto", September: "Settembre", October: "Ottobre", Easter: "Pasqua" },
      fr: { April: "Avril", May: "Mai", June: "Juin", July: "Juillet", August: "Août", September: "Septembre", October: "Octobre", Easter: "Pâques" },
      es: { April: "Abril", May: "Mayo", June: "Junio", July: "Julio", August: "Agosto", September: "Septiembre", October: "Octubre", Easter: "Semana Santa" },
    };
    return {
      ...common,
      navLabel: tr(locale, "Rates", "Tariffe", "Tarifs", "Tarifas"),
      eyebrow: tr(locale, "Rates", "Tariffe", "Tarifs", "Tarifas"),
      title: tr(locale, "Weekly villa rates.", "Tariffe settimanali della villa.", "Tarifs hebdomadaires de la villa.", "Tarifas semanales de la villa."),
      intro: tr(locale, "The property is rented from Sunday to Sunday. Rates are for the main villa, for up to 12 guests.", "La proprietà viene affittata da domenica a domenica. Le tariffe si riferiscono alla villa principale, per un massimo di 12 ospiti.", "La propriété est louée du dimanche au dimanche. Les tarifs concernent la villa principale, pour un maximum de 12 personnes.", "La propiedad se alquila de domingo a domingo. Las tarifas corresponden a la villa principal, para un máximo de 12 huéspedes."),
      seoDescription: tr(locale, "Weekly rates, pool cottage supplement, included costs and booking terms for Villa dei Limoni.", "Tariffe settimanali, supplemento per il pool cottage, costi inclusi e condizioni di prenotazione di Villa dei Limoni.", "Tarifs hebdomadaires, supplément du pool cottage, prestations incluses et conditions de réservation de Villa dei Limoni.", "Tarifas semanales, suplemento del pool cottage, costes incluidos y condiciones de reserva de Villa dei Limoni."),
      heroImageId: "outdoor-dining",
      sections: [
        {
          id: "weekly-rates",
          title: tr(locale, "Main villa rates.", "Tariffe della villa principale.", "Tarifs de la villa principale.", "Tarifas de la villa principal."),
          items: ratePolicy.seasons.map((season) => ({
            title: monthNames[locale][season.label],
            description: tr(locale, "Main villa, up to 12 guests", "Villa principale, fino a 12 ospiti", "Villa principale, jusqu’à 12 personnes", "Villa principal, hasta 12 huéspedes"),
            meta: "weekly" in season
              ? `${euro(season.weekly)} ${tr(locale, "/ week", "/ settimana", "/ semaine", "/ semana")}`
              : `${euro(season.weeklyMinimum)}–${euro(season.weeklyMaximum)} ${tr(locale, "/ week", "/ settimana", "/ semaine", "/ semana")}`,
          })),
          notice: tr(locale, "The minimum stay is seven nights, with arrival and departure on Sunday.", "Il soggiorno minimo è di sette notti, con arrivo e partenza la domenica.", "Le séjour minimum est de sept nuits, avec arrivée et départ le dimanche.", "La estancia mínima es de siete noches, con llegada y salida el domingo."),
        },
        {
          id: "pool-cottage-rate",
          title: tr(locale, "Optional pool cottage.", "Pool cottage opzionale.", "Pool cottage en option.", "Pool cottage opcional."),
          paragraphs: [tr(locale, "The pool cottage can only be added to the main villa and is never rented separately.", "Il pool cottage può essere aggiunto esclusivamente alla villa principale e non viene mai affittato separatamente.", "Le pool cottage peut uniquement être ajouté à la villa principale et n’est jamais loué séparément.", "El pool cottage solo puede añadirse a la villa principal y nunca se alquila por separado.")],
          items: [
            {
              title: tr(locale, "Weekly supplement", "Supplemento settimanale", "Supplément hebdomadaire", "Suplemento semanal"),
              description: tr(locale, "The amount varies by season.", "L’importo varia in base al periodo.", "Le montant varie selon la période.", "El importe varía según la temporada."),
              meta: `${euro(ratePolicy.poolCottageSupplement.minimumWeekly)}–${euro(ratePolicy.poolCottageSupplement.maximumWeekly)}`,
            },
            { title: tr(locale, "Cleaning and linen", "Pulizia e biancheria", "Ménage et linge", "Limpieza y ropa de cama"), description: tr(locale, "Additional cost for the pool cottage.", "Costo aggiuntivo per il pool cottage.", "Coût supplémentaire pour le pool cottage.", "Coste adicional para el pool cottage."), meta: euro(ratePolicy.poolCottageSupplement.cleaningAndLinen) },
          ],
        },
        {
          id: "rate-status",
          title: tr(locale, "What is included.", "Cosa è incluso.", "Ce qui est inclus.", "Qué está incluido."),
          items: [
            { title: tr(locale, "Use of the property", "Uso della proprietà", "Usage de la propriété", "Uso de la propiedad"), description: tr(locale, "Villa, garden, pool from May to October and two private garages.", "Villa, giardino, piscina da maggio a ottobre e due garage privati.", "Villa, jardin, piscine de mai à octobre et deux garages privés.", "Villa, jardín, piscina de mayo a octubre y dos garajes privados.") },
            { title: tr(locale, "Linen", "Biancheria", "Linge", "Ropa de cama y baño"), description: tr(locale, "One set of bed linen and towels per guest for each week of the stay.", "Un set di lenzuola e asciugamani per persona per ogni settimana di soggiorno.", "Un jeu de draps et de serviettes par personne et par semaine de séjour.", "Un juego de sábanas y toallas por persona y por cada semana de estancia.") },
            { title: tr(locale, "Final cleaning", "Pulizia finale", "Ménage de fin de séjour", "Limpieza final"), description: tr(locale, "Final cleaning of the main villa is included.", "La pulizia finale della villa principale è compresa.", "Le ménage final de la villa principale est inclus.", "La limpieza final de la villa principal está incluida.") },
          ],
        },
        {
          id: "not-included",
          title: tr(locale, "What is not included.", "Cosa non è incluso.", "Ce qui n’est pas inclus.", "Qué no está incluido."),
          items: [
            { title: tr(locale, "Security deposit", "Deposito cauzionale", "Dépôt de garantie", "Depósito de garantía"), description: tr(locale, "Returned after the stay, subject to a check for damage.", "Viene restituito dopo il soggiorno, previa verifica di eventuali danni.", "Restitué après le séjour, après vérification d’éventuels dommages.", "Se devuelve después de la estancia, tras comprobar que no haya daños."), meta: tr(locale, "€450 refundable", "€ 450 rimborsabili", "450 € remboursables", "450 € reembolsables") },
            { title: tr(locale, "Tourist tax", "Tassa di soggiorno", "Taxe de séjour", "Tasa turística"), description: tr(locale, "Payable on arrival by guests over 15.", "Si versa all’arrivo ed è dovuta dagli ospiti di età superiore a 15 anni.", "À régler à l’arrivée par les personnes de plus de 15 ans.", "Se abona a la llegada y se aplica a los huéspedes mayores de 15 años."), meta: tr(locale, "€3 per person / night", "€ 3 per persona / notte", "3 € par personne / nuit", "3 € por persona / noche") },
          ],
          notice: directBookingNotice(locale),
        },
      ],
    };
  }


  if (slug === "location") {
    return {
      ...common,
      navLabel: tr(locale, "Surroundings", "Dintorni", "Les environs", "Alrededores"),
      eyebrow: tr(locale, "Camogli and surroundings", "Camogli e dintorni", "Camogli et ses environs", "Camogli y sus alrededores"),
      title: tr(locale, "Sea, villages and Riviera paths.", "Il mare, i borghi e i sentieri della Riviera.", "La mer, les villages et les sentiers de la Riviera.", "El mar, los pueblos y los senderos de la Riviera."),
      intro: tr(locale, "Villa dei Limoni is a convenient base for exploring Camogli, Portofino Natural Park and Golfo Paradiso.", "Villa dei Limoni è un punto di partenza comodo per scoprire Camogli, il Parco di Portofino e il Golfo Paradiso.", "Villa dei Limoni est un point de départ idéal pour découvrir Camogli, le parc de Portofino et le Golfo Paradiso.", "Villa dei Limoni es un punto de partida cómodo para descubrir Camogli, el Parque de Portofino y el Golfo Paradiso."),
      seoDescription: tr(locale, "Places to visit near Villa dei Limoni: Camogli, Portofino Natural Park, San Fruttuoso, Portofino, Santa Margherita, Rapallo and Genoa.", "Cosa vedere vicino a Villa dei Limoni: Camogli, il Parco di Portofino, San Fruttuoso, Portofino, Santa Margherita, Rapallo e Genova.", "Que voir près de Villa dei Limoni : Camogli, le parc de Portofino, San Fruttuoso, Portofino, Santa Margherita, Rapallo et Gênes.", "Qué visitar cerca de Villa dei Limoni: Camogli, el Parque de Portofino, San Fruttuoso, Portofino, Santa Margherita, Rapallo y Génova."),
      heroImageId: "camogli-destination",
      showLocationMap: true,
      sections: [
        { id: "map", title: tr(locale, "Where we are.", "Dove siamo.", "Où nous sommes.", "Dónde estamos."), paragraphs: [tr(locale, "A simple map to place Camogli, San Fruttuoso and Portofino.", "Una mappa essenziale per orientarsi tra Camogli, San Fruttuoso e Portofino.", "Une carte simple pour situer Camogli, San Fruttuoso et Portofino.", "Un mapa sencillo para situar Camogli, San Fruttuoso y Portofino.")] },
        { id: "camogli", title: "Camogli.", paragraphs: [tr(locale, "Camogli is a few minutes from the house: 5–10 minutes by car or bus, or about 20 minutes on foot, downhill on the way out and uphill on the way back. Its tall coloured houses, pebble beach, Santa Maria Assunta church and harbour restaurants are all easy to explore on foot.", "Camogli si trova a pochi minuti da casa: 5–10 minuti in auto o in autobus, oppure circa 20 minuti a piedi, in discesa all’andata e in salita al ritorno. È uno dei borghi marinari più autentici della Riviera, con le case alte e colorate sul porto, la spiaggia di ciottoli, la chiesa di Santa Maria Assunta e i ristoranti lungo il molo. Si visita tutto a piedi.", "Camogli se trouve à quelques minutes de la maison : 5 à 10 minutes en voiture ou en bus, ou environ 20 minutes à pied, en descente à l’aller et en montée au retour. Ses hautes maisons colorées, sa plage de galets, l’église Santa Maria Assunta et les restaurants du port se découvrent facilement à pied.", "Camogli está a pocos minutos de la casa: 5–10 minutos en coche o autobús, o unos 20 minutos a pie, cuesta abajo a la ida y cuesta arriba a la vuelta. Sus casas altas y coloridas, la playa de guijarros, la iglesia de Santa Maria Assunta y los restaurantes del puerto se recorren fácilmente a pie.")] },
        { id: "portofino-park", title: tr(locale, "Portofino Natural Park.", "Il Parco Naturale di Portofino.", "Le parc naturel de Portofino.", "El Parque Natural de Portofino."), paragraphs: [tr(locale, "We are at the gateway to one of the Mediterranean’s most beautiful natural areas, with more than 80 km of marked paths. The route to San Rocco, Batterie and San Fruttuoso begins close to the house.", "Siamo alle porte del Parco di Portofino, una delle aree naturalistiche più belle del Mediterraneo, con oltre 80 km di sentieri segnalati. Il percorso per San Rocco, le Batterie e San Fruttuoso parte vicino a casa ed è tra i più panoramici della Liguria.", "Nous sommes aux portes de l’une des plus belles zones naturelles de Méditerranée, avec plus de 80 km de sentiers balisés. L’itinéraire vers San Rocco, les Batterie et San Fruttuoso part près de la maison.", "Estamos a las puertas de una de las zonas naturales más bellas del Mediterráneo, con más de 80 km de senderos señalizados. La ruta hacia San Rocco, las Batterie y San Fruttuoso comienza cerca de la casa.")] },
        { id: "san-fruttuoso", title: "San Fruttuoso.", paragraphs: [tr(locale, "The small bay and its Benedictine abbey are among the area’s most memorable sights. Reach them on foot through the park or, in summer, by boat from Camogli or Portofino.", "La piccola baia con l’abbazia benedettina sul mare è una delle mete più suggestive della zona. Si raggiunge a piedi lungo i sentieri del parco oppure, nei mesi estivi, in battello da Camogli e Portofino.", "La petite baie et son abbaye bénédictine comptent parmi les lieux les plus marquants de la région. On y accède à pied par les sentiers du parc ou, en été, en bateau depuis Camogli ou Portofino.", "La pequeña bahía y su abadía benedictina son uno de los lugares más especiales de la zona. Se llega a pie por los senderos del parque o, en verano, en barco desde Camogli o Portofino.")] },
        { id: "portofino", title: "Portofino.", paragraphs: [tr(locale, "The Riviera’s best-known village is about half an hour away by car, or by scheduled boat from Camogli in summer. Allow a day for the piazzetta, Castello Brown and the panoramic walk to the lighthouse.", "Il borgo più celebre della Riviera si raggiunge in circa mezz’ora in auto oppure, in estate, con i battelli di linea da Camogli. Vale una giornata tra la piazzetta, Castello Brown e la passeggiata panoramica fino al faro.", "Le village le plus célèbre de la Riviera se trouve à environ une demi-heure en voiture ou, en été, en bateau depuis Camogli. Prévoyez une journée pour la piazzetta, le Castello Brown et la promenade panoramique jusqu’au phare.", "El pueblo más famoso de la Riviera está a media hora en coche o, en verano, en barco desde Camogli. Merece un día entre la piazzetta, el Castello Brown y el paseo panorámico hasta el faro.")] },
        { id: "riviera-and-genoa", title: tr(locale, "Santa Margherita, Rapallo and Genoa.", "Santa Margherita, Rapallo e Genova.", "Santa Margherita, Rapallo et Gênes.", "Santa Margherita, Rapallo y Génova."), items: [
          { title: tr(locale, "Santa Margherita Ligure and Rapallo", "Santa Margherita Ligure e Rapallo", "Santa Margherita Ligure et Rapallo", "Santa Margherita Ligure y Rapallo"), description: tr(locale, "A 15–20 minute drive away, with waterfront promenades, shops, restaurants and rail connections to Genoa and the rest of Liguria.", "A 15–20 minuti in auto, offrono lungomare, negozi, ristoranti e collegamenti ferroviari verso Genova e il resto della Liguria.", "À 15–20 minutes en voiture, avec promenades en bord de mer, boutiques, restaurants et liaisons ferroviaires vers Gênes et le reste de la Ligurie.", "A 15–20 minutos en coche, con paseos marítimos, tiendas, restaurantes y conexiones ferroviarias con Génova y el resto de Liguria.") },
          { title: tr(locale, "Genoa", "Genova", "Gênes", "Génova"), description: tr(locale, "The Aquarium, the old town’s caruggi and the city’s museums are about half an hour away by car or can be reached by train from Camogli.", "L’Acquario, i caruggi del centro storico e i musei del capoluogo ligure si raggiungono in circa mezz’ora in auto oppure in treno dalla stazione di Camogli.", "L’Aquarium, les caruggi du centre historique et les musées sont à environ une demi-heure en voiture ou accessibles en train depuis Camogli.", "El Acuario, los caruggi del casco histórico y los museos están a una media hora en coche o se alcanzan en tren desde Camogli.") },
        ] },
      ],
    };
  }

  if (slug === "arrival") {
    return {
      ...common,
      navLabel: tr(locale, "Getting here", "Come arrivare", "Comment venir", "Cómo llegar"),
      eyebrow: tr(locale, "Travel information", "Informazioni di viaggio", "Informations pratiques", "Información de viaje"),
      title: tr(locale, "Reaching Villa dei Limoni.", "Come raggiungere Villa dei Limoni.", "Comment rejoindre Villa dei Limoni.", "Cómo llegar a Villa dei Limoni."),
      intro: tr(locale, "Practical information for reaching Camogli and completing the final pedestrian approach to the villa.", "Tutte le informazioni utili per arrivare a Camogli e percorrere l’ultimo breve tratto a piedi fino alla villa.", "Toutes les informations utiles pour rejoindre Camogli et parcourir le dernier court trajet à pied jusqu’à la villa.", "Toda la información necesaria para llegar a Camogli y recorrer el último tramo a pie hasta la villa."),
      seoDescription: tr(locale, "How to reach Villa dei Limoni by plane, train or car, including the final pedestrian approach and private garages.", "Come raggiungere Villa dei Limoni in aereo, treno o auto, con informazioni sull’accesso pedonale e sui garage privati.", "Comment rejoindre Villa dei Limoni en avion, en train ou en voiture, avec les informations sur l’accès piéton et les garages privés.", "Cómo llegar a Villa dei Limoni en avión, tren o coche, con información sobre el acceso peatonal y los garajes privados."),
      heroImageId: "access-creuza",
      sections: [
        {
          id: "by-plane",
          title: tr(locale, "By plane.", "In aereo.", "En avion.", "En avión."),
          paragraphs: [tr(locale, "Genoa Cristoforo Colombo Airport is approximately 40 minutes by car from Camogli. From the airport, continue by hire car, private transfer, or Volabus to Genova Piazza Principe or Genova Brignole railway station and then by train to Camogli.", "L’aeroporto più vicino è Genova Cristoforo Colombo, a circa 40 minuti d’auto da Camogli. Potete noleggiare un’auto, prenotare un transfer privato oppure prendere il Volabus fino alle stazioni di Genova Piazza Principe o Genova Brignole e proseguire in treno fino a Camogli.", "L’aéroport le plus proche est Genova Cristoforo Colombo, à environ 40 minutes en voiture de Camogli. Vous pouvez louer une voiture, réserver un transfert privé ou prendre le Volabus jusqu’aux gares de Genova Piazza Principe ou Genova Brignole, puis le train jusqu’à Camogli.", "El aeropuerto más cercano es Génova Cristoforo Colombo, a unos 40 minutos en coche de Camogli. Podéis alquilar un coche, reservar un traslado privado o tomar el Volabus hasta las estaciones de Genova Piazza Principe o Genova Brignole y continuar en tren hasta Camogli.")],
        },
        {
          id: "by-train",
          title: tr(locale, "By train.", "In treno.", "En train.", "En tren."),
          paragraphs: [tr(locale, "Camogli-San Fruttuoso station has direct services from Genoa. From the station, the villa is 1.4 km uphill on foot, or can be approached by local bus or taxi before the final pedestrian section.", "La stazione di Camogli-San Fruttuoso è collegata direttamente a Genova in 30–40 minuti e a Milano con cambio a Genova. Dalla stazione potete raggiungerci a piedi, percorrendo 1,4 km in salita in circa 20–25 minuti; in autobus fino alla fermata più vicina e poi a piedi per circa 10 minuti; oppure in taxi fino alla strada carrabile più vicina.", "La gare de Camogli-San Fruttuoso est reliée directement à Gênes en 30–40 minutes et à Milan avec un changement à Gênes. Depuis la gare, comptez 1,4 km de montée à pied, environ 20–25 minutes ; vous pouvez aussi prendre le bus puis marcher 10 minutes, ou un taxi jusqu’à la route la plus proche.", "La estación de Camogli-San Fruttuoso conecta directamente con Génova en 30–40 minutos y con Milán haciendo transbordo en Génova. Desde la estación podéis subir a pie 1,4 km en unos 20–25 minutos, tomar el autobús y caminar unos 10 minutos, o ir en taxi hasta la carretera más cercana.")],
        },
        {
          id: "by-car",
          title: tr(locale, "By car.", "In auto.", "En voiture.", "En coche."),
          paragraphs: [tr(locale, "Drive to the nearest accessible road, where luggage can be unloaded briefly. Two private garages are available less than five minutes on foot from the villa.", "Potete raggiungere la strada carrabile più vicina, dove è possibile sostare brevemente per scaricare i bagagli. Durante il soggiorno avrete a disposizione due garage privati a meno di cinque minuti a piedi dalla villa: in discesa dalla villa ai garage e in salita al ritorno.", "Vous pouvez rejoindre la route carrossable la plus proche et vous y arrêter brièvement pour décharger les bagages. Deux garages privés se trouvent à moins de cinq minutes à pied de la villa : en descente à l’aller et en montée au retour.", "Podéis llegar hasta la carretera más cercana y deteneros brevemente para descargar el equipaje. Hay dos garajes privados a menos de cinco minutos a pie de la villa: cuesta abajo desde la villa y cuesta arriba al volver.")],
        },
        {
          id: "final-walk",
          title: tr(locale, "The final walk.", "L’ultimo tratto a piedi.", "Le dernier trajet à pied.", "El último tramo a pie."),
          paragraphs: [tr(locale, "The final approach follows steps and an approximately 80 m stone path with a gentle incline. The villa cannot be reached directly by car and may not suit guests with reduced mobility.", "Dalla strada carrabile si prosegue a piedi lungo alcuni gradini e una tipica creuza ligure in pietra di circa 80 metri, in lieve salita. Il percorso richiede circa un minuto e non è particolarmente impegnativo; poiché la villa non è raggiungibile direttamente in auto, può però risultare poco adatta a persone con mobilità ridotta. Scriveteci: saremo felici di darvi maggiori informazioni per aiutarvi a capire se la soluzione fa al caso vostro.", "Depuis la route, quelques marches puis une creuza ligure en pierre d’environ 80 mètres montent doucement vers la villa. Le trajet dure environ une minute et reste facile, mais l’absence d’accès direct en voiture peut ne pas convenir aux personnes à mobilité réduite. Écrivez-nous pour en parler avant de réserver.", "Desde la carretera se continúa a pie por unos escalones y una creuza ligur de piedra de unos 80 metros, con una pendiente suave. El trayecto dura alrededor de un minuto y no es especialmente difícil, pero al no haber acceso directo en coche puede no ser adecuado para personas con movilidad reducida. Escribidnos antes de reservar si tenéis dudas.")],
          notice: tr(locale, "Contact us before booking if you have any access concerns.", "Contattateci prima di prenotare se avete dubbi sull’accessibilità del percorso.", "Contactez-nous avant de réserver si vous avez la moindre question sur l’accès.", "Contactadnos antes de reservar si tenéis dudas sobre el acceso."),
        },
      ],
    };
  }

  if (slug === "experiences") {
    return {
      ...common,
      navLabel: tr(locale, "Experiences", "Esperienze", "Découvertes", "Experiencias"),
      eyebrow: tr(locale, "Around Camogli", "Intorno a Camogli", "Autour de Camogli", "Alrededores de Camogli"),
      title: tr(locale, "The gulf, the paths and the village.", "Il golfo, i sentieri e il borgo.", "Le golfe, les sentiers et le village.", "El golfo, los senderos y el pueblo."),
      intro: tr(locale, "A starting point for exploring the landscape around Villa dei Limoni. These are ideas for independent outings.", "Un punto di partenza per esplorare il paesaggio intorno a Villa dei Limoni. Sono idee per escursioni in autonomia.", "Un point de départ pour découvrir les paysages autour de Villa dei Limoni. Il s’agit d’idées de sorties en autonomie.", "Un punto de partida para descubrir el paisaje alrededor de Villa dei Limoni. Son ideas para excursiones por vuestra cuenta."),
      seoDescription: tr(locale, "Explore Camogli beach and marina, the paths of Portofino park and the eastern Ligurian Riviera from Villa dei Limoni.", "Esplorate la spiaggia e il porticciolo di Camogli, i sentieri del Parco di Portofino e la Riviera ligure di Levante da Villa dei Limoni.", "Découvrez depuis Villa dei Limoni la plage et le port de Camogli, les sentiers du parc de Portofino et la Riviera ligure orientale.", "Descubrid desde Villa dei Limoni la playa y el puerto de Camogli, los senderos del Parque de Portofino y la Riviera ligur oriental."),
      heroImageId: "villa-from-camogli-beach",
      sections: [
        { id: "camogli", title: "Camogli", items: [{ title: tr(locale, "Beach & marina", "Spiaggia e porticciolo"), description: tr(locale, "Camogli is about five minutes by car or bus, or 15–20 minutes downhill on foot; the return is uphill.", "Camogli è a circa cinque minuti in auto o autobus, oppure 15–20 minuti a piedi in discesa; il ritorno è in salita."), meta: tr(locale, "Destination recommendation", "Suggerimento sulla destinazione") }] },
        { id: "park", title: tr(locale, "Portofino Natural Park", "Parco Naturale di Portofino"), items: [{ title: tr(locale, "The Camogli–San Rocco–Batterie–San Fruttuoso route", "Il percorso Camogli–San Rocco–Batterie–San Fruttuoso"), description: tr(locale, "A nearby route within the park’s approximately 80 km marked trail network. Check current trail conditions with the park authority before setting out.", "Un itinerario vicino, nella rete di circa 80 km di sentieri segnati del parco. Verificate le condizioni aggiornate presso l’ente parco prima di partire."), meta: tr(locale, "Independent outing", "Escursione autonoma") }] },
        { id: "beyond", title: tr(locale, "Along the Riviera", "Lungo la Riviera"), items: ["Santa Margherita Ligure", "Rapallo", "Portofino", "Genova"].map((place) => ({ title: place, description: tr(locale, "Within driving reach; journey time varies with season and traffic.", "Raggiungibile in auto; i tempi variano con stagione e traffico."), meta: tr(locale, "Independent visit", "Visita autonoma") })) },
      ],
    };
  }

  if (slug === "reviews") {
    return {
      ...common,
      navLabel: tr(locale, "Reviews", "Recensioni", "Avis", "Opiniones"),
      eyebrow: site.reviews.eyebrow,
      title: site.reviews.title,
      intro: site.reviews.intro,
      seoDescription: tr(locale, "Verified Airbnb and Vrbo guest reviews for Villa dei Limoni in Camogli.", "Recensioni verificate degli ospiti di Villa dei Limoni su Airbnb e Vrbo.", "Avis vérifiés des hôtes de Villa dei Limoni sur Airbnb et Vrbo.", "Opiniones verificadas de los huéspedes de Villa dei Limoni en Airbnb y Vrbo."),
      heroImageId: "outdoor-pool-wide",
      sections: [
        { id: "platform-ratings", title: tr(locale, "What our guests say.", "Cosa dicono di noi i nostri ospiti.", "Ce que disent nos hôtes.", "Qué dicen nuestros huéspedes."), items: site.reviews.platforms.map((review) => ({ title: review.name, description: `${review.score} ${review.scale} · ${review.reviewCountLabel}`, meta: review.verifiedLabel, href: site.platforms.find((platform) => platform.id === review.id)!.url, external: true })), notice: site.reviews.disclaimer },
        { id: "themes", title: tr(locale, "What guests often remember.", "Cosa ricordano spesso gli ospiti.", "Ce que nos hôtes retiennent souvent.", "Lo que nuestros huéspedes recuerdan a menudo."), items: site.reviews.proofPoints.map((point) => ({ title: point, description: "" })) },
      ],
    };
  }

  if (slug === "policies") {
    return {
      ...common,
      navLabel: tr(locale, "Booking conditions", "Condizioni di prenotazione", "Conditions de réservation", "Condiciones de reserva"),
      eyebrow: tr(locale, "Booking and cancellation", "Prenotazione e cancellazione", "Réservation et annulation", "Reserva y cancelación"),
      title: tr(locale, "Clear terms for booking your stay.", "Le condizioni per prenotare con chiarezza.", "Des conditions claires pour réserver votre séjour.", "Condiciones claras para reservar vuestra estancia."),
      intro: tr(locale, "Here you will find payment terms, the cancellation policy and answers to frequently asked questions.", "Qui trovate modalità di pagamento, politica di cancellazione e risposte alle domande più frequenti.", "Vous trouverez ici les modalités de paiement, la politique d’annulation et les réponses aux questions fréquentes.", "Aquí encontraréis las condiciones de pago, la política de cancelación y las respuestas a las preguntas más frecuentes."),
      seoDescription: tr(locale, "Booking and cancellation terms, access, pool, children, pets and practical information for Villa dei Limoni.", "Condizioni di prenotazione e cancellazione, accesso, piscina, bambini, animali e informazioni pratiche per Villa dei Limoni.", "Conditions de réservation et d’annulation, accès, piscine, enfants, animaux et informations pratiques pour Villa dei Limoni.", "Condiciones de reserva y cancelación, acceso, piscina, niños, mascotas e información práctica de Villa dei Limoni."),
      heroImageId: "access-creuza",
      sections: [
        {
          id: "direct-booking",
          title: tr(locale, "How to book.", "Come prenotare.", "Comment réserver.", "Cómo reservar."),
          paragraphs: [tr(locale, "Email us at villadeilimonicamogli@gmail.com or call +39 339 378 1680 to ask about availability and arrange a direct reservation with us.", "Scriveteci a villadeilimonicamogli@gmail.com o chiamateci al +39 339 378 1680 per conoscere le disponibilità e organizzare una prenotazione diretta con noi.", "Écrivez-nous à villadeilimonicamogli@gmail.com ou appelez-nous au +39 339 378 1680 pour connaître les disponibilités et réserver directement avec nous.", "Escribidnos a villadeilimonicamogli@gmail.com o llamadnos al +39 339 378 1680 para consultar la disponibilidad y organizar una reserva directa con nosotros.")],
          items: [
            { title: tr(locale, "Rental agreement", "Contratto di locazione", "Contrat de location", "Contrato de alquiler"), description: tr(locale, "Booking requires the standard rental agreement provided for by Italian law.", "Per prenotare è necessario sottoscrivere il contratto di locazione previsto dalla legge italiana.", "La réservation nécessite la signature du contrat de location prévu par la loi italienne.", "Para reservar es necesario firmar el contrato de alquiler previsto por la legislación italiana.") },
            { title: tr(locale, "Deposit", "Caparra", "Acompte", "Anticipo"), description: tr(locale, "A 50% deposit is paid by bank transfer when booking.", "Alla prenotazione viene versato tramite bonifico bancario il 50% del canone.", "Un acompte de 50 % est versé par virement bancaire lors de la réservation.", "Al reservar se abona por transferencia bancaria el 50 % del alquiler.") },
            { title: tr(locale, "Balance and security deposit", "Saldo e cauzione", "Solde et dépôt de garantie", "Saldo y depósito de garantía"), description: tr(locale, "The remaining 50% and the refundable €450 security deposit are due 60 days before arrival.", "Il restante 50% e il deposito cauzionale rimborsabile di € 450 devono essere corrisposti entro 60 giorni dall’arrivo.", "Les 50 % restants et le dépôt de garantie remboursable de 450 € sont dus 60 jours avant l’arrivée.", "El 50 % restante y el depósito reembolsable de 450 € deben abonarse 60 días antes de la llegada.") },
          ],
          notice: tr(locale, "We return the security deposit after the stay, subject to a check for damage.", "Restituiamo la cauzione dopo il soggiorno, previa verifica di eventuali danni.", "Nous restituons le dépôt après le séjour, après vérification d’éventuels dommages.", "Devolvemos el depósito después de la estancia, tras comprobar que no haya daños."),
        },
        {
          id: "cancellation-policy",
          title: tr(locale, "Cancellation policy.", "Politica di cancellazione.", "Politique d’annulation.", "Política de cancelación."),
          items: [
            { title: tr(locale, "Up to 61 days before arrival", "Fino a 61 giorni prima dell’arrivo", "Jusqu’à 61 jours avant l’arrivée", "Hasta 61 días antes de la llegada"), description: tr(locale, "100% refund of the rent paid.", "Rimborso del 100% del canone corrisposto.", "Remboursement de 100 % du loyer versé.", "Reembolso del 100 % del alquiler abonado.") },
            { title: tr(locale, "60 to 31 days before arrival", "Da 60 a 31 giorni prima dell’arrivo", "De 60 à 31 jours avant l’arrivée", "De 60 a 31 días antes de la llegada"), description: tr(locale, "50% refund of the rent paid.", "Rimborso del 50% del canone corrisposto.", "Remboursement de 50 % du loyer versé.", "Reembolso del 50 % del alquiler abonado.") },
            { title: tr(locale, "From 30 days before arrival", "Da 30 giorni prima dell’arrivo", "À partir de 30 jours avant l’arrivée", "Desde 30 días antes de la llegada"), description: tr(locale, "No rent refund is due for cancellation, no-show or an interrupted stay.", "Non è previsto alcun rimborso in caso di cancellazione, mancata presentazione o interruzione del soggiorno.", "Aucun remboursement du loyer n’est prévu en cas d’annulation, de non-présentation ou d’interruption du séjour.", "No se reembolsa el alquiler en caso de cancelación, no presentación o interrupción de la estancia.") },
          ],
          notice: tr(locale, "For cancellations before arrival, the €450 security deposit is always returned. If the stay is interrupted, it is returned after checking for damage.", "In caso di cancellazione prima dell’arrivo, restituiamo sempre il deposito cauzionale di € 450. In caso di interruzione del soggiorno, lo restituiamo previa verifica di eventuali danni.", "En cas d’annulation avant l’arrivée, le dépôt de garantie de 450 € est toujours restitué. Si le séjour est interrompu, il est restitué après vérification d’éventuels dommages.", "En caso de cancelación antes de la llegada, el depósito de 450 € se devuelve siempre. Si se interrumpe la estancia, se devuelve tras comprobar que no haya daños."),
        },
        { id: "frequently-asked", title: tr(locale, "Good to know: a few more questions.", "Da sapere: qualche domanda in più.", "À savoir : quelques questions supplémentaires.", "Conviene saber: algunas preguntas más."), items: site.faq.items.map((item) => ({ title: item.question, description: item.answer })), notice: tr(locale, "The final rental agreement sets out the terms applicable to your stay.", "Il contratto di locazione definitivo riporta le condizioni applicabili al soggiorno.", "Le contrat de location définitif précise les conditions applicables à votre séjour.", "El contrato de alquiler definitivo recoge las condiciones aplicables a vuestra estancia.") },
      ],
    };
  }

  if (slug === "contact") {
    return {
      ...common,
      navLabel: tr(locale, "Book & contact us", "Prenotate e contattateci", "Réservez et contactez-nous", "Reservad y contactadnos"),
      eyebrow: tr(locale, "Direct reservations", "Prenotazioni dirette", "Réservations directes", "Reservas directas"),
      title: tr(locale, "Plan your stay directly with us.", "Organizzate il vostro soggiorno direttamente con noi.", "Préparez votre séjour directement avec nous.", "Organizad vuestra estancia directamente con nosotros."),
      intro: tr(locale, "Write or call us to check dates, receive a proposal and arrange your direct reservation.", "Scriveteci o chiamateci per verificare le date, ricevere una proposta e organizzare la prenotazione diretta.", "Écrivez-nous ou appelez-nous pour vérifier les dates, recevoir une proposition et organiser votre réservation directe.", "Escribidnos o llamadnos para consultar las fechas, recibir una propuesta y organizar vuestra reserva directa."),
      seoDescription: tr(locale, "Contact Villa dei Limoni in Camogli for direct reservations, availability and tailored quotes.", "Contattate Villa dei Limoni a Camogli per prenotazioni dirette, disponibilità e preventivi personalizzati.", "Contactez Villa dei Limoni à Camogli pour les réservations directes, les disponibilités et un devis personnalisé.", "Contactad con Villa dei Limoni en Camogli para reservas directas, disponibilidad y presupuestos personalizados."),
      heroImageId: "story-citrus",
      sections: [{ id: "contact-options", title: tr(locale, "Get in touch.", "Contattateci.", "Contactez-nous.", "Contactadnos."), paragraphs: [directBookingNotice(locale)], items: [
        { title: tr(locale, "Email", "Email"), description: propertyIdentity.email, href: `mailto:${propertyIdentity.email}` },
        { title: tr(locale, "Telephone", "Telefono", "Téléphone", "Teléfono"), description: propertyIdentity.telephone, href: `tel:${propertyIdentity.telephone.replaceAll(" ", "")}` },
      ], notice: tr(locale, "Sending a message does not reserve dates; we will confirm availability and next steps by email.", "L’invio di un messaggio non blocca le date; confermeremo disponibilità e passaggi successivi via email.", "L’envoi d’un message ne bloque pas les dates ; nous confirmerons les disponibilités et les prochaines étapes par e-mail.", "Enviar un mensaje no bloquea las fechas; confirmaremos la disponibilidad y los siguientes pasos por correo.") }],
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
