import type { Locale, PropertyFact } from "../types";

export const propertyIdentity = {
  name: "Villa dei Limoni",
  locality: "Camogli",
  region: "Liguria",
  country: "IT",
  cin: "IT010007C2DQK53S7U",
  citra: "010007-LT-0063",
  lastAudited: "2026-08-03",
} as const;

export const bookingPlatforms = {
  airbnb: "https://www.airbnb.it/rooms/23678485",
  vrbo: "https://www.vrbo.com/it-it/affitto-vacanze/p8718530",
} as const;

export const canonicalFacts = {
  mainVilla: {
    guests: 12,
    bedrooms: 6,
    fullBathrooms: 4,
    powderRooms: 1,
    floors: 3,
  },
  poolCottage: {
    optional: true,
    onlyWithMainVilla: true,
    additionalGuests: 4,
    bedrooms: 1,
    convertibleLivingRooms: 1,
    fullBathrooms: 2,
    renovated: 2024,
  },
  estate: {
    guests: 16,
    bedrooms: 7,
    fullBathrooms: 6,
    powderRooms: 1,
  },
  pool: {
    private: true,
    areaSquareMetres: 40,
    seasonalMonths: { from: 5, through: 10 },
  },
  access: {
    pedestrianPathMetres: 70,
    privateGarages: 2,
    garageWalkMinutesMaximum: 5,
  },
  stay: {
    minimumNightsCandidate: 7,
    changeoverDayCandidate: "Sunday",
    ruleStatus: "pending_owner_approval",
    checkout: "10:00",
  },
  policies: {
    petsAllowed: false,
    eventsAllowed: false,
    dailyHousekeepingIncluded: false,
  },
} as const;

export const pendingOwnerApprovals = [
  "Seasonal villa and cottage rates",
  "Cleaning fees, linen charges and security deposit",
  "Universal check-in window",
  "Whether Sunday changeovers apply in every season",
  "Exact annual pool opening and closing dates",
  "Current tourist-tax amount and collection method",
  "Final smoking wording and minimum renter age across channels",
  "Architecturally verified floorplans and bed dimensions",
] as const;

export const factRail: Record<Locale, PropertyFact[]> = {
  en: [
    { id: "location", value: "Camogli", label: "Ligurian Riviera" },
    { id: "capacity", value: "12–16", label: "Guests", detail: "Main villa, with optional pool cottage" },
    { id: "bedrooms", value: "6 + 1", label: "Bedrooms", detail: "Plus a cottage living room with sofa bed" },
    { id: "pool", value: "40 m²", label: "Private sea-view pool" },
    { id: "view", value: "Golfo Paradiso", label: "Open sea views" },
    { id: "parking", value: "2", label: "Private garages" },
    { id: "stay", value: "Seasonal", label: "Stay pattern confirmed online" },
  ],
  it: [
    { id: "location", value: "Camogli", label: "Riviera ligure" },
    { id: "capacity", value: "12–16", label: "Ospiti", detail: "Villa principale con pool house opzionale" },
    { id: "bedrooms", value: "6 + 1", label: "Camere da letto", detail: "Più il soggiorno della pool house con divano letto" },
    { id: "pool", value: "40 m²", label: "Piscina privata vista mare" },
    { id: "view", value: "Golfo Paradiso", label: "Vista aperta sul mare" },
    { id: "parking", value: "2", label: "Garage privati" },
    { id: "stay", value: "Stagionale", label: "Formula confermata online" },
  ],
};

export const publicPropertyFacts = {
  identity: propertyIdentity,
  facts: canonicalFacts,
  bookingPlatforms,
  pendingOwnerApprovals,
  notice:
    "Availability, live pricing, cancellation terms, payment and reservations are handled by the official Airbnb and Vrbo listings.",
} as const;
