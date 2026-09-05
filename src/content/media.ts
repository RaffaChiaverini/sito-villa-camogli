/**
 * Temporary media for the local design prototype.
 *
 * Every asset in this manifest was downloaded from the public Airbnb listing
 * below. The files must be replaced with owner-controlled originals (or receive
 * explicit publication clearance) before a production deployment.
 */

export const prototypeListingUrl = "https://www.airbnb.it/rooms/23678485";

export type MediaChapter =
  | "arrival"
  | "the-villa"
  | "interiors"
  | "sleeping"
  | "outdoor-life"
  | "pool-cottage"
  | "camogli"
  | "after-dark";

export type MediaRole =
  | "hero"
  | "story"
  | "stay-mode"
  | "outdoor"
  | "gallery"
  | "layout"
  | "location"
  | "finale";

export interface PrototypeMediaAsset {
  id: string;
  src: string;
  sourceUrl: string;
  listingUrl: typeof prototypeListingUrl;
  source: "airbnb-listing";
  alt: {
    en: string;
    it: string;
    fr?: string;
    es?: string;
  };
  width: number;
  height: number;
  sourceDimensions: {
    width: number;
    height: number;
  };
  focalPosition: `${number}% ${number}%`;
  chapter: MediaChapter;
  roles: readonly MediaRole[];
  destinationOnly?: boolean;
  prototypeOnly: true;
}

export const mediaAlt = (asset: PrototypeMediaAsset, locale: import("../types").Locale) =>
  asset.alt[locale] ?? asset.alt.en;

const airbnb = (path: string) => `https://a0.muscache.com/im/pictures/${path}`;

export const mediaAssets = [
  {
    id: "hero-pool",
    src: "/media/prototype/villa/hero-pool.jpg",
    sourceUrl: airbnb("miso/Hosting-23678485/original/551036a2-4d6d-4346-a15d-e45edfb2c8a1.jpeg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "Private pool above the green hills and blue curve of Golfo Paradiso",
      it: "Piscina privata sopra le colline verdi e la curva azzurra del Golfo Paradiso",
    },
    width: 1200,
    height: 1293,
    sourceDimensions: { width: 2815, height: 3033 },
    focalPosition: "50% 55%",
    chapter: "outdoor-life",
    roles: ["hero", "gallery"],
    prototypeOnly: true,
  },
  {
    id: "hero-view",
    src: "/media/prototype/villa/hero-view.jpg",
    sourceUrl: airbnb("hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MjM2Nzg0ODU%3D/original/aac2fcdf-27c6-4830-97f0-c9f5b72ff0d2.jpeg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "The rose-coloured villa rising behind citrus trees in the garden",
      it: "La villa color rosa che si alza dietro gli alberi di agrumi del giardino",
    },
    width: 1200,
    height: 1600,
    sourceDimensions: { width: 3024, height: 4032 },
    focalPosition: "45% 52%",
    chapter: "the-villa",
    roles: ["hero", "story", "gallery"],
    prototypeOnly: true,
  },
  {
    id: "story-facade",
    src: "/media/prototype/villa/story-facade.jpg",
    sourceUrl: airbnb("53fa397a-8a55-4216-965e-b8fe7124666b.jpg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "Three-storey rose facade with deep green Ligurian shutters",
      it: "Facciata rosa su tre piani con persiane liguri verde intenso",
    },
    width: 1200,
    height: 1600,
    sourceDimensions: { width: 2448, height: 3264 },
    focalPosition: "55% 50%",
    chapter: "arrival",
    roles: ["story", "gallery"],
    prototypeOnly: true,
  },
  {
    id: "story-sunset",
    src: "/media/prototype/villa/story-sunset.jpg",
    sourceUrl: airbnb("miso/Hosting-23678485/original/7ad25e11-e5da-479f-a636-d0cdc79d70eb.jpeg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "Warm sunset over Golfo Paradiso, viewed from the garden",
      it: "Tramonto caldo sul Golfo Paradiso visto dal giardino",
    },
    width: 1200,
    height: 900,
    sourceDimensions: { width: 4032, height: 3024 },
    focalPosition: "50% 48%",
    chapter: "after-dark",
    roles: ["story", "gallery"],
    prototypeOnly: true,
  },
  {
    id: "story-citrus",
    src: "/media/prototype/villa/story-citrus.jpg",
    sourceUrl: airbnb("fba5dfb2-8665-4a82-8ac9-bdddc550789a.jpg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "Citrus trees growing in the terraced garden",
      it: "Alberi di agrumi nel giardino terrazzato",
    },
    width: 1200,
    height: 900,
    sourceDimensions: { width: 3264, height: 2448 },
    focalPosition: "52% 54%",
    chapter: "outdoor-life",
    roles: ["story", "gallery"],
    prototypeOnly: true,
  },
  {
    id: "story-garden",
    src: "/media/prototype/villa/story-garden.jpg",
    sourceUrl: airbnb("79f6eee5-e415-4e91-ad06-8e27dca9421e.jpg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "Flowering plants along the villa garden",
      it: "Piante fiorite lungo il giardino della villa",
    },
    width: 1200,
    height: 900,
    sourceDimensions: { width: 3264, height: 2448 },
    focalPosition: "50% 50%",
    chapter: "outdoor-life",
    roles: ["story", "gallery"],
    prototypeOnly: true,
  },
  {
    id: "outdoor-dining",
    src: "/media/prototype/villa/outdoor-dining.jpg",
    sourceUrl: airbnb("123fd4ee-cfb8-46d8-ba41-33bee7ba52cd.jpg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "Shaded outdoor dining terrace overlooking the pool and sea",
      it: "Terrazza ombreggiata per pranzare all'aperto con vista su piscina e mare",
    },
    width: 1200,
    height: 900,
    sourceDimensions: { width: 3264, height: 2448 },
    focalPosition: "50% 56%",
    chapter: "outdoor-life",
    roles: ["outdoor", "gallery"],
    prototypeOnly: true,
  },
  {
    id: "outdoor-table",
    src: "/media/prototype/villa/outdoor-table.jpg",
    sourceUrl: airbnb("07e3da0b-a0ad-431c-8845-8a35a4ce7585.jpg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "Long summer table set for twelve beneath the garden trees",
      it: "Lungo tavolo estivo apparecchiato per dodici sotto gli alberi del giardino",
    },
    width: 1200,
    height: 698,
    sourceDimensions: { width: 3216, height: 1869 },
    focalPosition: "48% 54%",
    chapter: "outdoor-life",
    roles: ["outdoor", "gallery"],
    prototypeOnly: true,
  },
  {
    id: "outdoor-oven",
    src: "/media/prototype/villa/outdoor-oven.jpg",
    sourceUrl: airbnb("e0caf6be-82bb-4a37-a0e9-f0b129d4da56.jpg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "Wood-fired oven built into the outdoor dining area",
      it: "Forno a legna integrato nella zona pranzo esterna",
    },
    width: 1200,
    height: 900,
    sourceDimensions: { width: 4032, height: 3024 },
    focalPosition: "48% 50%",
    chapter: "outdoor-life",
    roles: ["outdoor", "gallery"],
    prototypeOnly: true,
  },
  {
    id: "outdoor-pool-wide",
    src: "/media/prototype/villa/outdoor-pool-wide.jpg",
    sourceUrl: airbnb("miso/Hosting-23678485/original/7e719a06-28a1-4202-afbf-9358920a696f.jpeg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "Panoramic swimming pool opening toward Golfo Paradiso",
      it: "Piscina panoramica aperta verso il Golfo Paradiso",
    },
    width: 1200,
    height: 900,
    sourceDimensions: { width: 4032, height: 3024 },
    focalPosition: "50% 55%",
    chapter: "outdoor-life",
    roles: ["outdoor", "gallery", "finale"],
    prototypeOnly: true,
  },
  {
    id: "interior-living",
    src: "/media/prototype/villa/interior-living.jpg",
    sourceUrl: airbnb("28575258-6bac-4cb9-976c-f941d58df1bb.jpg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "Relaxed villa sitting room with French doors to the garden",
      it: "Salotto informale della villa con porta finestra sul giardino",
    },
    width: 1200,
    height: 900,
    sourceDimensions: { width: 3264, height: 2448 },
    focalPosition: "50% 52%",
    chapter: "interiors",
    roles: ["stay-mode", "gallery"],
    prototypeOnly: true,
  },
  {
    id: "interior-kitchen",
    src: "/media/prototype/villa/interior-kitchen.jpg",
    sourceUrl: airbnb("df47c016-6b02-4cf6-b690-63b70a1d66d5.jpg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "Bright, equipped villa kitchen with green cabinets",
      it: "Cucina attrezzata e luminosa della villa con mobili verdi",
    },
    width: 1200,
    height: 945,
    sourceDimensions: { width: 3065, height: 2414 },
    focalPosition: "50% 52%",
    chapter: "interiors",
    roles: ["gallery"],
    prototypeOnly: true,
  },
  {
    id: "interior-dining",
    src: "/media/prototype/villa/interior-dining.jpg",
    sourceUrl: airbnb("519f88fb-137d-4c6b-8e6b-7ea5626914c8.jpg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "Indoor dining room with a long table and garden light",
      it: "Sala da pranzo interna con tavolo lungo e luce dal giardino",
    },
    width: 1200,
    height: 746,
    sourceDimensions: { width: 3258, height: 2025 },
    focalPosition: "50% 50%",
    chapter: "interiors",
    roles: ["gallery"],
    prototypeOnly: true,
  },
  {
    id: "bedroom-first-double",
    src: "/media/prototype/villa/bedroom-first-double.jpg",
    sourceUrl: airbnb("610f45d0-34b0-494b-8fa2-7dbb88bcf8f4.jpg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "First-floor double bedroom with striped headboard",
      it: "Camera matrimoniale al primo piano con testiera a righe",
    },
    width: 1200,
    height: 828,
    sourceDimensions: { width: 3191, height: 2201 },
    focalPosition: "50% 50%",
    chapter: "sleeping",
    roles: ["layout", "gallery"],
    prototypeOnly: true,
  },
  {
    id: "bedroom-first-flex",
    src: "/media/prototype/villa/bedroom-first-flex.jpg",
    sourceUrl: airbnb("d5e597ee-8fe8-4d96-a55f-f7581888feef.jpg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "First-floor flexible bedroom with a daybed beside the window",
      it: "Camera flessibile al primo piano con divano letto accanto alla finestra",
    },
    width: 1200,
    height: 900,
    sourceDimensions: { width: 3264, height: 2448 },
    focalPosition: "50% 51%",
    chapter: "sleeping",
    roles: ["layout", "gallery"],
    prototypeOnly: true,
  },
  {
    id: "bedroom-second-double",
    src: "/media/prototype/villa/bedroom-second-double.jpg",
    sourceUrl: airbnb("54460be9-88f1-4731-ba91-f55798c57d87.jpg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "Second-floor double bedroom lit by two windows",
      it: "Camera matrimoniale al secondo piano illuminata da due finestre",
    },
    width: 1200,
    height: 900,
    sourceDimensions: { width: 3264, height: 2448 },
    focalPosition: "50% 48%",
    chapter: "sleeping",
    roles: ["layout", "gallery"],
    prototypeOnly: true,
  },
  {
    id: "bedroom-second-twins",
    src: "/media/prototype/villa/bedroom-second-twins.jpg",
    sourceUrl: airbnb("eb146789-d940-436f-b9af-0dac5f3a98bb.jpg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "Second-floor bedroom arranged with two single beds",
      it: "Camera al secondo piano con due letti singoli",
    },
    width: 1200,
    height: 900,
    sourceDimensions: { width: 3176, height: 2382 },
    focalPosition: "50% 52%",
    chapter: "sleeping",
    roles: ["layout", "gallery"],
    prototypeOnly: true,
  },
  {
    id: "cottage-exterior",
    src: "/media/prototype/cottage/exterior.jpg",
    sourceUrl: airbnb("hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MjM2Nzg0ODU%3D/original/506bf950-4fce-4f11-91d0-6a0d444237d0.jpeg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "Stone pool cottage facing the water across the lawn",
      it: "Pool cottage in pietra affacciato sull'acqua oltre il prato",
    },
    width: 1200,
    height: 900,
    sourceDimensions: { width: 3977, height: 2982 },
    focalPosition: "50% 55%",
    chapter: "pool-cottage",
    roles: ["stay-mode", "gallery"],
    prototypeOnly: true,
  },
  {
    id: "cottage-bedroom",
    src: "/media/prototype/cottage/bedroom.jpg",
    sourceUrl: airbnb("hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MjM2Nzg0ODU%3D/original/6f6564d3-2230-465f-8333-5ca0e4f6dfe4.jpeg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "Pool cottage double bedroom with an ensuite doorway",
      it: "Camera matrimoniale del pool cottage con accesso al bagno ensuite",
    },
    width: 1200,
    height: 900,
    sourceDimensions: { width: 3835, height: 2876 },
    focalPosition: "50% 52%",
    chapter: "pool-cottage",
    roles: ["stay-mode", "gallery", "layout"],
    prototypeOnly: true,
  },
  {
    id: "cottage-lounge",
    src: "/media/prototype/cottage/lounge.jpg",
    sourceUrl: airbnb("hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MjM2Nzg0ODU%3D/original/f75d474a-10e3-477e-ae30-3012abb34348.jpeg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "Pool cottage lounge with a sofa bed and glass doors to the pool",
      it: "Salotto del pool cottage con divano letto e vetrate verso la piscina",
    },
    width: 1200,
    height: 912,
    sourceDimensions: { width: 3978, height: 3024 },
    focalPosition: "50% 52%",
    chapter: "pool-cottage",
    roles: ["stay-mode", "gallery"],
    prototypeOnly: true,
  },
  {
    id: "cottage-kitchen",
    src: "/media/prototype/cottage/kitchen.jpg",
    sourceUrl: airbnb("hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MjM2Nzg0ODU%3D/original/8e4491e9-31e6-4993-8213-f6f0dd1f76ea.jpeg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "Pool cottage kitchen with a picture window toward the coast",
      it: "Cucina del pool cottage con grande finestra verso la costa",
    },
    width: 1200,
    height: 900,
    sourceDimensions: { width: 3959, height: 2968 },
    focalPosition: "50% 50%",
    chapter: "pool-cottage",
    roles: ["stay-mode", "gallery"],
    prototypeOnly: true,
  },
  {
    id: "access-creuza",
    src: "/media/prototype/villa/access-creuza.jpg",
    sourceUrl: airbnb("dc5e00e0-8a38-4190-b543-3033d41ae053.jpg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "The short stone creuza footpath leading toward the villa",
      it: "La breve creuza in pietra che conduce verso la villa",
    },
    width: 1200,
    height: 900,
    sourceDimensions: { width: 3264, height: 2448 },
    focalPosition: "50% 54%",
    chapter: "arrival",
    roles: ["layout", "gallery"],
    prototypeOnly: true,
  },
  {
    id: "camogli-destination",
    src: "/media/prototype/destination/camogli.jpg",
    sourceUrl: airbnb("2a69dbff-0180-4287-988a-c13162c2c535.jpg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "Destination image: Camogli's waterfront and colourful houses",
      it: "Immagine della destinazione: il lungomare e le case colorate di Camogli",
    },
    width: 1024,
    height: 683,
    sourceDimensions: { width: 1024, height: 683 },
    focalPosition: "50% 50%",
    chapter: "camogli",
    roles: ["location", "gallery"],
    destinationOnly: true,
    prototypeOnly: true,
  },
  {
    id: "villa-from-camogli-beach",
    src: "/media/prototype/destination/villa-from-camogli-beach.jpg",
    sourceUrl: airbnb("miso/Hosting-23678485/original/d221301d-60f0-44d7-befc-7476833f808a.jpeg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "Destination context: the green hillside above Camogli beach",
      it: "Contesto della destinazione: la collina verde sopra la spiaggia di Camogli",
    },
    width: 1200,
    height: 900,
    sourceDimensions: { width: 4032, height: 3024 },
    focalPosition: "50% 45%",
    chapter: "camogli",
    roles: ["location", "gallery"],
    destinationOnly: true,
    prototypeOnly: true,
  },
  {
    id: "finale-night",
    src: "/media/prototype/villa/finale-night.jpg",
    sourceUrl: airbnb("miso/Hosting-23678485/original/3dae5a6d-a572-4b9e-bf1a-4f1d160a748a.jpeg"),
    listingUrl: prototypeListingUrl,
    source: "airbnb-listing",
    alt: {
      en: "The illuminated Riviera coastline seen from the villa at night",
      it: "La costa della Riviera illuminata vista dalla villa di notte",
    },
    width: 1200,
    height: 900,
    sourceDimensions: { width: 4032, height: 3024 },
    focalPosition: "50% 48%",
    chapter: "after-dark",
    roles: ["finale", "gallery"],
    prototypeOnly: true,
  },
] as const satisfies readonly PrototypeMediaAsset[];

export const mediaById = Object.fromEntries(
  mediaAssets.map((asset) => [asset.id, asset]),
) as Record<(typeof mediaAssets)[number]["id"], (typeof mediaAssets)[number]>;

export const galleryChapters = {
  arrival: mediaAssets.filter((asset) => asset.chapter === "arrival"),
  "the-villa": mediaAssets.filter((asset) => asset.chapter === "the-villa"),
  interiors: mediaAssets.filter((asset) => asset.chapter === "interiors"),
  sleeping: mediaAssets.filter((asset) => asset.chapter === "sleeping"),
  "outdoor-life": mediaAssets.filter((asset) => asset.chapter === "outdoor-life"),
  "pool-cottage": mediaAssets.filter((asset) => asset.chapter === "pool-cottage"),
  camogli: mediaAssets.filter((asset) => asset.chapter === "camogli"),
  "after-dark": mediaAssets.filter((asset) => asset.chapter === "after-dark"),
} satisfies Record<MediaChapter, readonly PrototypeMediaAsset[]>;

export const hasPrototypeOnlyMedia = mediaAssets.some((asset) => asset.prototypeOnly);

/** Modern renditions are generated beside each JPEG with the same basename. */
export const mediaSources = (asset: Pick<PrototypeMediaAsset, "src">) => ({
  avif: asset.src.replace(/\.jpg$/, ".avif"),
  webp: asset.src.replace(/\.jpg$/, ".webp"),
  jpeg: asset.src,
});
