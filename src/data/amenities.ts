import type { Locale } from "../types";

export type AmenityStatus = "included" | "seasonal" | "on-request" | "not-provided" | "cottage-only";

export interface AmenityGroup {
  id: string;
  title: Record<Locale, string>;
  items: Array<{
    label: Record<Locale, string>;
    status: AmenityStatus;
    note?: Record<Locale, string>;
  }>;
}

export const amenityStatusLabels: Record<Locale, Record<AmenityStatus, string>> = {
  en: {
    included: "Included",
    seasonal: "Seasonal",
    "on-request": "On request",
    "not-provided": "Not provided",
    "cottage-only": "Pool cottage only",
  },
  it: {
    included: "Incluso",
    seasonal: "Stagionale",
    "on-request": "Su richiesta",
    "not-provided": "Non fornito",
    "cottage-only": "Solo pool house",
  },
};

export const amenityGroups: AmenityGroup[] = [
  {
    id: "setting",
    title: { en: "Views & setting", it: "Vista e contesto" },
    items: [
      { label: { en: "Sea and gulf views", it: "Vista sul mare e sul golfo" }, status: "included" },
      { label: { en: "Terraced garden with fruit trees and flowers", it: "Giardino terrazzato con alberi da frutto e fiori" }, status: "included" },
      { label: { en: "Traditional dry-stone walls", it: "Muri tradizionali in pietra a secco" }, status: "included" },
    ],
  },
  {
    id: "outdoors",
    title: { en: "Pool & outdoor living", it: "Piscina e vita all’aperto" },
    items: [
      { label: { en: "Private 40 m² swimming pool", it: "Piscina privata di 40 m²" }, status: "seasonal", note: { en: "Listed from May through October; exact dates are confirmed on the booking platform.", it: "Indicata da maggio a ottobre; le date esatte sono confermate sulla piattaforma." } },
      { label: { en: "Outdoor dining area", it: "Zona pranzo all’aperto" }, status: "included" },
      { label: { en: "Barbecue and wood-burning oven", it: "Barbecue e forno a legna" }, status: "included" },
    ],
  },
  {
    id: "house",
    title: { en: "Inside the main villa", it: "Nella villa principale" },
    items: [
      { label: { en: "Equipped kitchen", it: "Cucina attrezzata" }, status: "included" },
      { label: { en: "Separate living and dining rooms", it: "Soggiorno e sala da pranzo separati" }, status: "included" },
      { label: { en: "Air conditioning in every bedroom", it: "Aria condizionata in ogni camera" }, status: "included" },
      { label: { en: "Wi-Fi", it: "Wi-Fi" }, status: "included" },
      { label: { en: "Washing machine", it: "Lavatrice" }, status: "included" },
    ],
  },
  {
    id: "family-access",
    title: { en: "Family, parking & access", it: "Famiglie, parcheggio e accesso" },
    items: [
      { label: { en: "Two cots and two high chairs", it: "Due lettini e due seggioloni" }, status: "on-request" },
      { label: { en: "Two private garages", it: "Due garage privati" }, status: "included" },
      { label: { en: "Final 70 m pedestrian stone path", it: "Ultimi 70 m su percorso pedonale in pietra" }, status: "included", note: { en: "The path, internal stairs and terraced grounds may be difficult for reduced mobility.", it: "Il percorso, le scale interne e il giardino terrazzato possono essere difficili per chi ha mobilità ridotta." } },
    ],
  },
  {
    id: "cottage",
    title: { en: "Optional pool cottage", it: "Pool house opzionale" },
    items: [
      { label: { en: "Double bedroom and double sofa bed", it: "Camera matrimoniale e divano letto matrimoniale" }, status: "cottage-only" },
      { label: { en: "Two bathrooms", it: "Due bagni" }, status: "cottage-only" },
      { label: { en: "Kitchen and air conditioning", it: "Cucina e aria condizionata" }, status: "cottage-only" },
    ],
  },
  {
    id: "services",
    title: { en: "Service model", it: "Formula di servizio" },
    items: [
      { label: { en: "Daily housekeeping", it: "Pulizie giornaliere" }, status: "not-provided" },
      { label: { en: "In-stay linen changes", it: "Cambio biancheria durante il soggiorno" }, status: "not-provided" },
      { label: { en: "Food and consumable supplies", it: "Alimenti e prodotti di consumo" }, status: "not-provided" },
    ],
  },
];
