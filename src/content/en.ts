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
    bookLabel: "Book & contact",
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
      shortCta: "Read our reviews on Airbnb",
      availabilityCta: "Read our reviews on Airbnb",
      externalLabel: "Opens Villa dei Limoni guest reviews on Airbnb in a new tab",
    },
    {
      id: "vrbo",
      name: "Vrbo",
      url: "https://www.vrbo.com/it-it/affitto-vacanze/p8718530",
      shortCta: "Read reviews on Vrbo",
      availabilityCta: "Read reviews on Vrbo",
      externalLabel: "Opens Villa dei Limoni guest reviews on Vrbo in a new tab",
    },
  ],
  hero: {
    eyebrow: "Camogli · Liguria",
    title: "A villa suspended between garden and sea.",
    description:
      "Welcome to a villa surrounded by greenery, with a private pool and views across Golfo Paradiso, just a few minutes from Camogli.",
    exploreLabel: "Explore the villa",
    scrollLabel: "Scroll to discover",
    imageAlt:
      "Villa dei Limoni and its garden overlooking the blue water of Golfo Paradiso",
  },
  facts: factRail.en,
  story: {
    eyebrow: "Villa dei Limoni",
    title: "A nineteenth-century villa above Camogli.",
    lead:
      "Villa dei Limoni is a nineteenth-century house with a private garden and pool, available for weekly stays.",
    paragraphs: [
      "The villa is arranged over three levels: shared rooms, kitchen and sitting room on the ground floor, then six air-conditioned bedrooms and four bathrooms across the two upper floors. It sleeps up to 12 guests.",
      "For more space, add the pool cottage: a small independent house beside the pool, renovated in 2024, which sleeps up to four guests and is only rented with the villa.",
      "Outside you will find a 40 m² sea-view pool, a large terraced garden with fruit trees and flowers, a shaded dining area, barbecue and wood-burning oven.",
      "The villa is reached on foot along an approximately 80-metre path from the nearest road. Two private garages are available for our guests.",
    ],
    imageAlt:
      "A sunlit stone terrace at Villa dei Limoni framed by citrus trees and flowering plants",
  },
  stays: {
    eyebrow: "Ways to stay",
    title: "One villa, two ways to stay.",
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
          "Fast Wi-Fi (82 Mbps)",
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
      { id: "arrival", label: "Arrival", description: "The stone path leading to the villa" },
      { id: "camogli", label: "Around Camogli", description: "Village, beach, marina and nearby park paths" },
    ],
  },
  layout: {
    eyebrow: "Interiors & layout",
    title: "Space to come together. Space to retreat.",
    intro:
      "The main villa unfolds over three levels, separating social rooms from two generous sleeping floors. The optional cottage adds an independent place to stay at pool level.",
    goodForLabel: "The two options",
    goodFor:
      "The main villa accommodates up to 12 guests; adding the pool cottage raises the listed capacity to 16.",
    optionalLabel: "Optional with the villa",
    floors: [
      {
        id: "ground",
        name: "Ground floor",
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
        title: "Barbecue and wood-burning oven",
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
    title: "Camogli, Portofino Park and the Riviera.",
    lead:
      "We are surrounded by greenery above Camogli, at the edge of Portofino Natural Park.",
    paragraphs: [
      "Camogli is 5–10 minutes away by car or bus, or about 20 minutes on foot—downhill on the way there and uphill on the return.",
      "The path to San Rocco, Batterie and San Fruttuoso begins near the house and is one of Liguria’s most scenic walks. Santa Margherita, Rapallo, Portofino and Genoa are all within easy reach.",
    ],
    details: [
      {
        value: "5–10 min",
        label: "Camogli by car or bus",
        description: "Traffic and season permitting",
      },
      {
        value: "≈ 20 min",
        label: "Walk downhill to Camogli",
        description: "The return is uphill",
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
    mapLabel: "Indicative map of Camogli, Portofino and San Fruttuoso",
    imageAlt: "The colourful seafront and beach of Camogli seen from above",
  },
  reviews: {
    eyebrow: "Reviews",
    title: "In the words of our guests.",
    intro:
      "Our guests describe the experience better than we ever could. We have welcomed visitors through Airbnb and Vrbo since 2018.",
    platforms: [
      {
        id: "airbnb",
        name: "Airbnb",
        score: "4.87",
        scale: "out of 5",
        reviewCount: 45,
        reviewCountLabel: "45 verified reviews",
        verifiedAt: "2026-10-26",
        verifiedLabel: "Checked 26 October 2026",
        themes: ["Views", "Pool", "Outdoor spaces", "Hospitality"],
      },
      {
        id: "vrbo",
        name: "Vrbo",
        score: "9.6",
        scale: "out of 10",
        reviewCount: 14,
        reviewCountLabel: "14 verified reviews",
        verifiedAt: "2026-10-26",
        verifiedLabel: "Checked 26 October 2026",
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
      "Write to us to check availability, receive a tailored quote and arrange a direct booking.",
    rateLabel: "Rates",
    rateValue: "Weekly rates from €3,600",
    rateDetail:
      "Write to us with your dates and group size to receive a tailored proposal.",
    weeklyLabel: "Stay rhythm",
    weeklyDetail:
      "The property is rented for at least seven nights, from Sunday to Sunday.",
    taxLabel: "Tourist tax",
    taxDetail:
      "Tourist tax is €3 per guest over 15, per night, and is paid on arrival.",
    platformNote:
      "Reservations are confirmed directly with the owners through a rental agreement and bank transfer.",
  },
  faq: {
    eyebrow: "Good to know",
    title: "A few more questions.",
    intro:
      "Here are the details that will help you decide whether Villa dei Limoni is right for your stay.",
    items: [
      { id: "pets", question: "Can we bring a pet?", answer: "We love animals, but we have chosen not to allow them in the house. Pet hair can remain even after deep cleaning, and we want to protect guests with allergies. We are sorry for the inconvenience; if you have a particular need, please write to us before booking." },
      { id: "services", question: "Are extra cleaning, linen changes or consumables provided during the stay?", answer: "Villa dei Limoni is a private holiday rental, not a hotel or B&B. We cannot provide extra cleaning or linen changes during the stay, nor food or other consumables. Bed linen and towels are supplied for every guest and every rental week." },
      {
        id: "access",
        question: "How does the pedestrian access work?",
        answer:
          "The villa can only be reached on foot. From the nearest road, a few steps and an approximately 80-metre Ligurian stone lane lead gently uphill to the house. The walk takes about one minute, and luggage can be unloaded briefly by the road. Photographs of the route are included in the gallery.",
      },
      { id: "cottage-privacy", question: "Can the pool cottage be rented to other guests during our stay?", answer: "No. The pool cottage is rented only with the main villa. If the villa guests do not need it, it remains closed." },
      { id: "pool-season", question: "Is the pool open all year, and is it heated?", answer: "The pool is not heated. It is open from May to October, when the Mediterranean climate is mild." },
      { id: "rental-contract", question: "Why is a rental agreement required?", answer: "Italian law requires a rental agreement for the reservation to be valid." },
      {
        id: "parking",
        question: "Where can we park during our stay?",
        answer:
          "Two private garages are available about 200 metres from the villa, less than five minutes on foot—downhill on the way there and uphill on the return. Garage 1 measures 550 × 278 × 190 cm; garage 2 measures 550 × 310 × 185 cm. Further cars may be parked in public spaces along the road, subject to availability, around 5–10 minutes from the villa.",
      },
      { id: "walk-to-camogli", question: "Can we walk to Camogli?", answer: "Yes. Camogli is 1.4 km from the villa and takes about 20 minutes on foot. The route is downhill on the way there and uphill on the return. Keen walkers will enjoy it, but it is useful to know about the Riviera’s characteristic slopes before you arrive." },
      { id: "without-car", question: "Can we stay without a car?", answer: "Yes, although we recommend a car for shopping and exploring the area comfortably. Camogli has a railway station and bus service; the nearest stop is about 10 minutes away on foot, on the route linking Ruta, Camogli, Santa Margherita and Recco." },
      {
        id: "mobility",
        question: "Is the property suitable for reduced mobility?",
        answer:
          "Regrettably, no. The steps and sloping path to the house, internal stairs and changes of level in the garden make the property unsuitable for guests with limited mobility. Please contact us before booking and we will gladly provide the details you need.",
      },
      {
        id: "children",
        question: "Are children welcome?",
        answer:
          "Children are very welcome, and we can provide two cots and two high chairs on request. The large garden is arranged in terraces bordered by dry-stone walls, with varying drops between levels, so young children should always be supervised by an adult.",
      },
      {
        id: "direct-booking",
        question: "Why book directly with you rather than through a platform?",
        answer:
          "Booking directly avoids platform service fees. Villa dei Limoni is a registered tourist rental, and our CIN appears at the foot of every page. We have welcomed guests since 2018, with verified reviews on Airbnb and Vrbo. You can still book through either platform if you prefer; the final amount will include its service charges.",
      },
      { id: "stay-length", question: "What is the minimum stay, and when are check-in and check-out?", answer: "The minimum stay is seven nights, from Sunday to Sunday. Check-in is from 16:00 to 19:00 and check-out is by 10:00." },
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
