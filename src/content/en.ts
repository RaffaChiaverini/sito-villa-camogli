import type { SiteContent } from "../types";
import { factRail } from "../data/property-facts";

export const en: SiteContent = {
  locale: "en",
  languageName: "English",
  alternateLocale: "it",
  alternateLanguageName: "Italiano",
  seo: {
    title: "Villa dei Limoni | A private Ligurian villa above Camogli",
    description:
      "A sea-view villa above Camogli with a private pool, terraced gardens and an optional pool cottage for stays of up to 16 guests.",
    socialTitle: "Villa dei Limoni — Camogli, Liguria",
    socialDescription:
      "A private sea-view villa above Camogli, with a terraced garden, private pool and nearby Portofino park trails.",
  },
  brandName: "Villa dei Limoni",
  navigation: {
    menuLabel: "Menu",
    closeLabel: "Close menu",
    skipLabel: "Skip to content",
    bookLabel: "Check availability",
    languageLabel: "View in Italian",
    items: [
      { id: "experience", label: "The house", href: "#experience" },
      { id: "stays", label: "Ways to stay", href: "#stays" },
      { id: "gallery", label: "Gallery", href: "#gallery" },
      { id: "layout", label: "Layout", href: "#layout" },
      { id: "camogli", label: "Camogli", href: "#camogli" },
      { id: "faq", label: "Good to know", href: "#faq" },
    ],
  },
  platforms: [
    {
      id: "airbnb",
      name: "Airbnb",
      url: "https://www.airbnb.it/rooms/23678485",
      shortCta: "View on Airbnb",
      availabilityCta: "Check availability on Airbnb",
      externalLabel: "Opens the official Villa dei Limoni listing on Airbnb in a new tab",
    },
    {
      id: "vrbo",
      name: "Vrbo",
      url: "https://www.vrbo.com/it-it/affitto-vacanze/p8718530",
      shortCta: "View on Vrbo",
      availabilityCta: "Check availability on Vrbo",
      externalLabel: "Opens the official Villa dei Limoni listing on Vrbo in a new tab",
    },
  ],
  hero: {
    eyebrow: "Camogli · Liguria",
    title: "A private Ligurian villa above Camogli.",
    description:
      "Sea views, a terraced garden, a private pool and Camogli about five minutes away by car or bus.",
    exploreLabel: "Explore the villa",
    scrollLabel: "Scroll to discover",
    imageAlt:
      "Villa dei Limoni and its garden overlooking the blue water of Golfo Paradiso",
  },
  facts: factRail.en,
  story: {
    eyebrow: "The experience",
    title: "A three-level villa in a terraced Ligurian garden.",
    lead:
      "Villa dei Limoni sits in a garden of fruit trees and flowering plants above Camogli, with views across Golfo Paradiso.",
    paragraphs: [
      "The main villa is arranged over three levels, with shared living spaces on the ground floor and six air-conditioned bedrooms across the two upper floors.",
      "Outside, the villa has a 40-square-metre sea-view pool, an outdoor dining area, a barbecue and a wood-burning oven.",
      "A separate pool cottage, renovated in 2024, can be added for up to four guests and is offered only with the main villa.",
    ],
    imageAlt:
      "A sunlit stone terrace at Villa dei Limoni framed by citrus trees and flowering plants",
  },
  stays: {
    eyebrow: "Ways to stay",
    title: "One villa, two listed configurations.",
    intro:
      "Choose the six-bedroom villa for up to 12 guests, or add the independent pool cottage for a group of up to 16. The cottage is only offered with the main house and is never rented to other guests.",
    comparisonLabels: {
      guests: "Guests",
      bedrooms: "Bedrooms",
      bathrooms: "Bathrooms",
      idealFor: "Accommodation",
    },
    modes: [
      {
        id: "villa",
        eyebrow: "The main house",
        title: "Villa Only",
        summary:
          "Three levels of shared living and sleeping space, opening onto the terraced garden and sea.",
        capacity: "Up to 12",
        bedrooms: "6",
        bathrooms: "4 full + 1 powder room",
        idealFor: "The main house across three levels",
        features: [
          "Air conditioning in every bedroom",
          "Equipped kitchen, living room and dining room",
          "Fast Wi-Fi measured at 82 Mbps",
          "Private pool, garden, outdoor dining and two garages",
        ],
        note: "The displayed rate for up to 12 guests covers the main villa only.",
      },
      {
        id: "villa-cottage",
        eyebrow: "The complete estate",
        title: "Villa + Pool Cottage",
        summary:
          "The main villa together with a private cottage beside the pool, fully renovated in 2024.",
        capacity: "Up to 16",
        bedrooms: "7",
        bathrooms: "6 full + 1 powder room",
        idealFor: "The main house plus the separate pool cottage",
        features: [
          "Double bedroom with compact ensuite bathroom",
          "Living room with double sofa bed and a second bathroom",
          "Private kitchen and air conditioning",
          "Views across the pool and Golfo Paradiso",
        ],
        note: "The cottage is an optional supplement and cannot be rented separately from the villa.",
      },
    ],
  },
  gallery: {
    eyebrow: "The house in pictures",
    title: "Between garden and sea.",
    intro:
      "A considered edit of the spaces, details and views that give Villa dei Limoni its character.",
    allLabel: "All photographs",
    openLabel: "Open photograph",
    closeLabel: "Close gallery",
    previousLabel: "Previous photograph",
    nextLabel: "Next photograph",
    counterLabel: "Photograph",
    chapters: [
      { id: "views", label: "Views", description: "Sea views across Golfo Paradiso" },
      {
        id: "pool-garden",
        label: "Pool & garden",
        description: "Terraces, flowers and water above the sea",
      },
      {
        id: "outdoor-dining",
        label: "Outdoor dining",
        description: "Outdoor dining, barbecue and wood-burning oven",
      },
      { id: "living", label: "Living spaces", description: "Living room, dining room and equipped kitchen" },
      { id: "bedrooms", label: "Bedrooms", description: "Six air-conditioned bedrooms in the main villa" },
      { id: "bathrooms", label: "Bathrooms", description: "Four shower rooms and a ground-floor WC" },
      { id: "cottage", label: "Pool cottage", description: "Bedroom, living room, two bathrooms and kitchen" },
      { id: "arrival", label: "Arrival", description: "The approximately 70-metre stone footpath" },
      { id: "camogli", label: "Around Camogli", description: "Village, beach, marina and nearby park paths" },
    ],
  },
  layout: {
    eyebrow: "Interiors & layout",
    title: "Space to come together. Space to retreat.",
    intro:
      "The main villa unfolds over three levels, separating social rooms from two generous sleeping floors. The optional cottage adds an independent place to stay at pool level.",
    goodForLabel: "Listed configurations",
    goodFor:
      "The main villa accommodates up to 12 guests; adding the pool cottage raises the listed capacity to 16.",
    optionalLabel: "Optional with the villa",
    floors: [
      {
        id: "ground",
        name: "Garden level",
        kicker: "Living together",
        summary: "Living room, separate dining room, equipped kitchen and guest WC.",
        rooms: [
          { room: "Living room", detail: "Shared living space" },
          { room: "Dining room", detail: "Separate indoor dining room" },
          { room: "Kitchen", detail: "Equipped kitchen" },
          { room: "Guest WC", detail: "WC and washbasin" },
        ],
      },
      {
        id: "first",
        name: "First floor",
        kicker: "Three bedrooms",
        summary: "A flexible sleeping floor for adults and children, served by two shower rooms.",
        rooms: [
          { room: "Double bedroom", detail: "One double bed" },
          { room: "Bunk room", detail: "One set of bunk beds" },
          { room: "Flexible bedroom", detail: "Single bed convertible to a double" },
          { room: "Two bathrooms", detail: "Both with showers" },
        ],
      },
      {
        id: "second",
        name: "Second floor",
        kicker: "Three bedrooms",
        summary: "The upper sleeping floor, with a mix of double, twin and bunk accommodation.",
        rooms: [
          { room: "Double bedroom", detail: "One double bed" },
          { room: "Twin bedroom", detail: "Two single beds" },
          { room: "Bunk room", detail: "One set of bunk beds" },
          { room: "Two bathrooms", detail: "Both with showers" },
        ],
      },
      {
        id: "cottage",
        name: "Pool cottage",
        kicker: "Up to four additional guests",
        summary: "A fully renovated, self-contained cottage beside the pool with views of the gulf.",
        optional: true,
        rooms: [
          { room: "Double bedroom", detail: "With a compact ensuite bathroom" },
          { room: "Living room", detail: "With a double sofa bed" },
          { room: "Second bathroom", detail: "For guests using the living room" },
          { room: "Kitchen", detail: "Independent and air-conditioned accommodation" },
        ],
      },
    ],
  },
  outdoors: {
    eyebrow: "Outdoor life",
    title: "A sea-view garden on Ligurian terraces.",
    lead:
      "A large terraced garden with fruit trees and flowering plants is supported by traditional dry-stone walls.",
    quote: "40 m² pool. Outdoor dining. Barbecue and wood-burning oven.",
    features: [
      {
        title: "Sea-view pool",
        description:
          "A private 40-square-metre pool with sea views, built in 2021.",
      },
      {
        title: "The long table",
        description:
          "A dedicated outdoor dining area overlooking the garden, pool and Golfo Paradiso.",
      },
      {
        title: "Fire & flavour",
        description:
          "A barbecue and wood-burning oven are provided in the outdoor area.",
      },
      {
        title: "A terraced landscape",
        description:
          "Fruit trees, flowering plants and traditional dry-stone retaining walls shape the garden.",
      },
    ],
    imageAlts: [
      "The private pool overlooking the sea at Villa dei Limoni",
      "The outdoor dining table surrounded by the terraced garden",
      "A traditional wood-burning oven among the garden terraces",
    ],
  },
  location: {
    eyebrow: "Camogli & beyond",
    title: "Above Camogli, near Portofino Natural Park.",
    lead:
      "The villa is set in a quiet, green area above Camogli, close to Portofino Natural Park.",
    paragraphs: [
      "Camogli is about five minutes away by car or bus, or 15–20 minutes on foot—downhill on the way there and uphill on the return.",
      "Santa Margherita, Rapallo, Portofino and Genoa are within driving reach, while the Camogli–San Rocco–Batterie–San Fruttuoso trail begins nearby.",
    ],
    details: [
      {
        value: "≈ 5 min",
        label: "Camogli by car or bus",
        description: "Traffic and season permitting",
      },
      {
        value: "≈ 15–20 min",
        label: "Walk downhill to Camogli",
        description: "The return is uphill",
      },
      {
        value: "≈ 80 km",
        label: "Marked park trails",
        description: "Across the Portofino park network",
      },
    ],
    highlightsTitle: "Close at hand",
    highlights: [
      "Camogli beach and marina",
      "The Camogli–San Rocco–Batterie–San Fruttuoso trail",
      "Portofino Natural Park and its 80 km trail network",
      "Santa Margherita, Rapallo, Portofino and Genoa by road",
    ],
    privacyNote:
      "For privacy, this website indicates upper Camogli only. Confirmed guests should follow the arrival directions supplied with their reservation.",
    mapLabel: "Approximate location in upper Camogli",
    imageAlt: "The colourful seafront and beach of Camogli seen from above",
  },
  reviews: {
    eyebrow: "Guest impressions",
    title: "A place guests remember.",
    intro:
      "Guest reviews on the official listings repeatedly mention the view, garden, pool, group layout and host communication.",
    platforms: [
      {
        id: "airbnb",
        name: "Airbnb",
        score: "4.86",
        scale: "out of 5",
        reviewCount: 43,
        reviewCountLabel: "43 guest reviews",
        verifiedAt: "2026-08-03",
        verifiedLabel: "Listing snapshot verified 3 August 2026",
        themes: ["Views", "Pool", "Outdoor spaces", "Host communication"],
      },
      {
        id: "vrbo",
        name: "Vrbo",
        score: "9.8",
        scale: "out of 10",
        reviewCount: 12,
        reviewCountLabel: "12 guest reviews",
        verifiedAt: "2026-08-03",
        verifiedLabel: "Listing snapshot verified 3 August 2026",
        themes: ["Group stays", "Garden", "Stone oven", "As pictured"],
      },
    ],
    proofPoints: [
      "A villa and view that live up to the photographs",
      "A generous setting for large families and groups",
      "The pool and garden as the centre of each day",
      "Memorable meals outdoors and attentive communication",
    ],
    disclaimer:
      "Scores and review counts are dated snapshots from the official listings and may change as new reviews are published.",
  },
  booking: {
    eyebrow: "Rates & booking",
    title: "Plan a week above Camogli.",
    lead:
      "Availability, live pricing, final taxes and cancellation terms are confirmed on the villa’s official Airbnb and Vrbo listings.",
    rateLabel: "Rates",
    rateValue: "Seasonal weekly rates available",
    rateDetail:
      "Choose Villa Only or Villa + Pool Cottage on the booking platform to see the total for your dates and group.",
    weeklyLabel: "Stay rhythm",
    weeklyDetail:
      "The Airbnb listing currently presents seven-night stays from a Sunday start date; the live platform confirms the rule for each season.",
    taxLabel: "Tourist tax",
    taxDetail:
      "Tourist tax may apply under current Camogli municipal rules and is confirmed on the booking platform at the time of reservation.",
    platformNote:
      "Villa dei Limoni does not take payments on this website. Complete every reservation and payment on Airbnb or Vrbo.",
  },
  faq: {
    eyebrow: "Good to know",
    title: "The practical details, clearly told.",
    intro:
      "Villa dei Limoni is a hillside property with a pedestrian approach, internal stairs and terraced grounds. These details help guests plan their stay.",
    items: [
      {
        id: "access",
        question: "How do guests reach the villa?",
        answer:
          "From the nearest drivable road, the final approach is about 70 metres on foot along a traditional Ligurian stone lane with a gentle incline. The house is not reached directly by car.",
      },
      {
        id: "parking",
        question: "Is private parking available?",
        answer:
          "Yes. Two private garages are available less than five minutes on foot from the villa.",
      },
      {
        id: "mobility",
        question: "Is the property suitable for reduced mobility?",
        answer:
          "The pedestrian approach, internal stairs and terraced garden include inclines and level changes. The property may be difficult for guests with reduced mobility; review individual needs with the booking platform before reserving.",
      },
      {
        id: "children",
        question: "Are children welcome?",
        answer:
          "Children are welcome. Because the hillside garden has terraces, steps, elevated areas and dry-stone retaining walls, close adult supervision is essential.",
      },
      {
        id: "pool-season",
        question: "When is the pool open?",
        answer:
          "The pool season runs from May to October. Confirm the exact opening dates for your stay on the booking platform.",
      },
      {
        id: "stay-length",
        question: "What is the minimum stay?",
        answer:
          "The Airbnb listing currently presents seven-night stays around Sunday arrivals. Live dates and the confirmed reservation are definitive for the selected season.",
      },
      {
        id: "arrival-times",
        question: "What are the arrival and departure times?",
        answer:
          "Check-in begins between 16:00 and 16:30 depending on the booking platform, and check-out is by 10:00. Your confirmed reservation contains the definitive timing.",
      },
      {
        id: "pets-events",
        question: "Are pets or events allowed?",
        answer: "Pets and events are not permitted.",
      },
      {
        id: "smoking-age",
        question: "Are there smoking or age restrictions?",
        answer:
          "Vrbo currently lists smoking only in designated areas and a minimum renter age of 28. Rules may differ by channel, so the terms attached to the confirmed reservation prevail.",
      },
      {
        id: "services",
        question: "Is the villa serviced like a hotel?",
        answer:
          "No. This is a private tourist rental, not a hotel or B&B. Extra cleaning, linen changes and consumable goods are not provided during the stay.",
      },
      {
        id: "tourist-tax",
        question: "Is tourist tax included?",
        answer:
          "Camogli tourist tax may apply. As municipal tariffs and platform information can change, the amount and collection method are confirmed when you reserve.",
      },
      {
        id: "booking",
        question: "Why is booking completed on Airbnb or Vrbo?",
        answer:
          "The website is a showcase for the villa. Availability, payments, cancellation terms and reservation support remain within the official booking platform you choose.",
      },
    ],
  },
  footer: {
    strapline: "A private villa between garden and sea.",
    location: "Camogli · Liguria · Italy",
    rights: "All rights reserved.",
    privacyNote: "Confirmed guests should follow the arrival details supplied with their reservation.",
    backToTopLabel: "Back to top",
  },
};
