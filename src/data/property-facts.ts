import type { Locale, PropertyFact } from "../types";

export const propertyIdentity = {
  name: "Villa dei Limoni",
  locality: "Camogli",
  region: "Liguria",
  country: "IT",
  cin: "IT010007C2DQK53S7U",
  citra: "010007-LT-0063",
  email: "villadeilimonicamogli@gmail.com",
  telephone: "+39 339 378 1680",
  lastAudited: "2026-10-26",
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
    pedestrianPathMetres: 80,
    privateGarages: 2,
    garageWalkMinutesMaximum: 5,
  },
  stay: {
    minimumNightsCandidate: 7,
    changeoverDayCandidate: "Sunday",
    ruleStatus: "owner_confirmed_2026-10-05",
    checkin: "16:00–19:00",
    checkout: "10:00",
  },
  policies: {
    petsAllowed: false,
    eventsAllowed: false,
    dailyHousekeepingIncluded: false,
  },
} as const;

export const pendingOwnerApprovals = [
  "Exact annual pool opening and closing dates",
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
    { id: "stay", value: "On request", label: "Availability confirmed by email" },
  ],
  it: [
    { id: "location", value: "Camogli", label: "Riviera ligure" },
    { id: "capacity", value: "12–16", label: "Ospiti", detail: "Villa principale con pool house opzionale" },
    { id: "bedrooms", value: "6 + 1", label: "Camere da letto", detail: "Più il soggiorno della pool house con divano letto" },
    { id: "pool", value: "40 m²", label: "Piscina privata vista mare" },
    { id: "view", value: "Golfo Paradiso", label: "Vista aperta sul mare" },
    { id: "parking", value: "2", label: "Garage privati" },
    { id: "stay", value: "Su richiesta", label: "Disponibilità confermata via email" },
  ],
  fr: [
    { id: "location", value: "Camogli", label: "Riviera ligure" },
    { id: "capacity", value: "12–16", label: "Voyageurs", detail: "Villa principale avec maison de piscine en option" },
    { id: "bedrooms", value: "6 + 1", label: "Chambres", detail: "Plus le salon de la maison de piscine avec canapé-lit" },
    { id: "pool", value: "40 m²", label: "Piscine privée avec vue mer" },
    { id: "view", value: "Golfo Paradiso", label: "Vue dégagée sur la mer" },
    { id: "parking", value: "2", label: "Garages privés" },
    { id: "stay", value: "Sur demande", label: "Disponibilités confirmées par e-mail" },
  ],
  es: [
    { id: "location", value: "Camogli", label: "Riviera de Liguria" },
    { id: "capacity", value: "12–16", label: "Huéspedes", detail: "Villa principal con casa de piscina opcional" },
    { id: "bedrooms", value: "6 + 1", label: "Dormitorios", detail: "Más el salón de la casa de piscina con sofá cama" },
    { id: "pool", value: "40 m²", label: "Piscina privada con vistas al mar" },
    { id: "view", value: "Golfo Paradiso", label: "Vistas abiertas al mar" },
    { id: "parking", value: "2", label: "Garajes privados" },
    { id: "stay", value: "Bajo petición", label: "Disponibilidad confirmada por correo" },
  ],
};

export const publicPropertyFacts = {
  identity: propertyIdentity,
  facts: canonicalFacts,
  contact: {
    email: propertyIdentity.email,
    telephone: propertyIdentity.telephone,
  },
  pendingOwnerApprovals,
  notice:
    "For availability and direct reservations, contact Villa dei Limoni by email or telephone. The tourist tax is the only cost not included and is paid locally on arrival.",
} as const;
