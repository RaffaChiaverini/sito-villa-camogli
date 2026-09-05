export type Locale = "en" | "it" | "fr" | "es";

export type SectionId =
  | "experience"
  | "stays"
  | "gallery"
  | "layout"
  | "outdoors"
  | "camogli"
  | "reviews"
  | "booking"
  | "faq";

export type PlatformId = "airbnb" | "vrbo";
export type StayModeId = "villa" | "villa-cottage";

export interface SeoContent {
  title: string;
  description: string;
  socialTitle: string;
  socialDescription: string;
}

export interface NavigationItem {
  id: SectionId;
  label: string;
  href: `#${SectionId}`;
}

export interface NavigationContent {
  menuLabel: string;
  closeLabel: string;
  skipLabel: string;
  bookLabel: string;
  languageLabel: string;
  items: NavigationItem[];
}

export interface PlatformLink {
  id: PlatformId;
  name: string;
  url: string;
  shortCta: string;
  availabilityCta: string;
  externalLabel: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;
  exploreLabel: string;
  scrollLabel: string;
  imageAlt: string;
}

export interface PropertyFact {
  id:
    | "location"
    | "capacity"
    | "bedrooms"
    | "pool"
    | "view"
    | "parking"
    | "stay";
  value: string;
  label: string;
  detail?: string;
}

export interface EditorialSection {
  eyebrow: string;
  title: string;
  lead: string;
  paragraphs: string[];
  imageAlt: string;
}

export interface StayMode {
  id: StayModeId;
  title: string;
  eyebrow: string;
  summary: string;
  capacity: string;
  bedrooms: string;
  bathrooms: string;
  idealFor: string;
  features: string[];
  note: string;
}

export interface StayModesContent {
  eyebrow: string;
  title: string;
  intro: string;
  comparisonLabels: {
    guests: string;
    bedrooms: string;
    bathrooms: string;
    idealFor: string;
  };
  modes: StayMode[];
}

export interface GalleryChapter {
  id:
    | "views"
    | "pool-garden"
    | "outdoor-dining"
    | "living"
    | "bedrooms"
    | "bathrooms"
    | "cottage"
    | "arrival"
    | "camogli";
  label: string;
  description: string;
}

export interface GalleryContent {
  eyebrow: string;
  title: string;
  intro: string;
  allLabel: string;
  openLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
  counterLabel: string;
  chapters: GalleryChapter[];
}

export interface RoomGroup {
  room: string;
  detail: string;
}

export interface FloorLayout {
  id: "ground" | "first" | "second" | "cottage";
  name: string;
  kicker: string;
  summary: string;
  rooms: RoomGroup[];
  optional?: boolean;
}

export interface LayoutContent {
  eyebrow: string;
  title: string;
  intro: string;
  goodForLabel: string;
  goodFor: string;
  optionalLabel: string;
  floors: FloorLayout[];
}

export interface Feature {
  title: string;
  description: string;
}

export interface OutdoorContent {
  eyebrow: string;
  title: string;
  lead: string;
  quote: string;
  features: Feature[];
  imageAlts: string[];
}

export interface LocationDetail {
  value: string;
  label: string;
  description: string;
}

export interface LocationContent {
  eyebrow: string;
  title: string;
  lead: string;
  paragraphs: string[];
  details: LocationDetail[];
  highlightsTitle: string;
  highlights: string[];
  privacyNote: string;
  mapLabel: string;
  imageAlt: string;
}

export interface ReviewPlatform {
  id: PlatformId;
  name: string;
  score: string;
  scale: string;
  reviewCount: number;
  reviewCountLabel: string;
  verifiedAt: string;
  verifiedLabel: string;
  themes: string[];
}

export interface ReviewsContent {
  eyebrow: string;
  title: string;
  intro: string;
  platforms: ReviewPlatform[];
  proofPoints: string[];
  disclaimer: string;
}

export interface BookingContent {
  eyebrow: string;
  title: string;
  lead: string;
  rateLabel: string;
  rateValue: string;
  rateDetail: string;
  weeklyLabel: string;
  weeklyDetail: string;
  taxLabel: string;
  taxDetail: string;
  platformNote: string;
}

export interface FaqItem {
  id:
    | "access"
    | "parking"
    | "mobility"
    | "children"
    | "pool-season"
    | "stay-length"
    | "arrival-times"
    | "pets-events"
    | "smoking-age"
    | "services"
    | "tourist-tax"
    | "booking";
  question: string;
  answer: string;
}

export interface FaqContent {
  eyebrow: string;
  title: string;
  intro: string;
  items: FaqItem[];
}

export interface FooterContent {
  strapline: string;
  location: string;
  rights: string;
  privacyNote: string;
  backToTopLabel: string;
}

export interface SiteContent {
  locale: Locale;
  languageName: string;
  alternateLocale: Locale;
  alternateLanguageName: string;
  seo: SeoContent;
  brandName: string;
  navigation: NavigationContent;
  platforms: PlatformLink[];
  hero: HeroContent;
  facts: PropertyFact[];
  story: EditorialSection;
  stays: StayModesContent;
  gallery: GalleryContent;
  layout: LayoutContent;
  outdoors: OutdoorContent;
  location: LocationContent;
  reviews: ReviewsContent;
  booking: BookingContent;
  faq: FaqContent;
  footer: FooterContent;
}

export interface GalleryAsset {
  id: string;
  chapter: GalleryChapter["id"];
  src: string;
  width: number;
  height: number;
  alt: Partial<Record<Locale, string>> & Pick<Record<Locale, string>, "en" | "it">;
  caption?: Partial<Record<Locale, string>>;
  focalPoint?: `${number}% ${number}%`;
  prototypeOnly: boolean;
  provenance: string;
}
