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
  fr: {
    included: "Inclus",
    seasonal: "Saisonnier",
    "on-request": "Sur demande",
    "not-provided": "Non fourni",
    "cottage-only": "Maison de piscine uniquement",
  },
  es: {
    included: "Incluido",
    seasonal: "Estacional",
    "on-request": "Bajo petición",
    "not-provided": "No incluido",
    "cottage-only": "Solo casa de piscina",
  },
};

export const amenityGroups: AmenityGroup[] = [
  {
    id: "setting",
    title: { en: "Views & setting", it: "Vista e contesto", fr: "Vue et cadre", es: "Vistas y entorno" },
    items: [
      { label: { en: "Sea and gulf views", it: "Vista sul mare e sul golfo", fr: "Vue sur la mer et le golfe", es: "Vistas al mar y al golfo" }, status: "included" },
      { label: { en: "Terraced garden with fruit trees and flowers", it: "Giardino terrazzato con alberi da frutto e fiori", fr: "Jardin en terrasses avec arbres fruitiers et fleurs", es: "Jardín en terrazas con frutales y flores" }, status: "included" },
      { label: { en: "Traditional dry-stone walls", it: "Muri tradizionali in pietra a secco", fr: "Murs traditionnels en pierre sèche", es: "Muros tradicionales de piedra seca" }, status: "included" },
    ],
  },
  {
    id: "outdoors",
    title: { en: "Pool & outdoor living", it: "Piscina e vita all’aperto", fr: "Piscine et vie en plein air", es: "Piscina y vida al aire libre" },
    items: [
      { label: { en: "Private 40 m² swimming pool", it: "Piscina privata di 40 m²", fr: "Piscine privée de 40 m²", es: "Piscina privada de 40 m²" }, status: "seasonal", note: { en: "Listed from May through October; exact dates are confirmed on the booking platform.", it: "Indicata da maggio a ottobre; le date esatte sono confermate sulla piattaforma.", fr: "Proposée de mai à octobre ; les dates exactes sont confirmées sur la plateforme.", es: "Disponible de mayo a octubre; las fechas exactas se confirman en la plataforma." } },
      { label: { en: "Outdoor dining area", it: "Zona pranzo all’aperto", fr: "Espace repas extérieur", es: "Zona de comedor exterior" }, status: "included" },
      { label: { en: "Barbecue and wood-burning oven", it: "Barbecue e forno a legna", fr: "Barbecue et four à bois", es: "Barbacoa y horno de leña" }, status: "included" },
    ],
  },
  {
    id: "house",
    title: { en: "Inside the main villa", it: "Nella villa principale", fr: "Dans la villa principale", es: "En la villa principal" },
    items: [
      { label: { en: "Equipped kitchen", it: "Cucina attrezzata", fr: "Cuisine équipée", es: "Cocina equipada" }, status: "included" },
      { label: { en: "Separate living and dining rooms", it: "Soggiorno e sala da pranzo separati", fr: "Salon et salle à manger séparés", es: "Salón y comedor independientes" }, status: "included" },
      { label: { en: "Air conditioning in every bedroom", it: "Aria condizionata in ogni camera", fr: "Climatisation dans chaque chambre", es: "Aire acondicionado en todos los dormitorios" }, status: "included" },
      { label: { en: "Wi-Fi", it: "Wi-Fi", fr: "Wi-Fi", es: "Wi-Fi" }, status: "included" },
      { label: { en: "Washing machine", it: "Lavatrice", fr: "Lave-linge", es: "Lavadora" }, status: "included" },
    ],
  },
  {
    id: "family-access",
    title: { en: "Family, parking & access", it: "Famiglie, parcheggio e accesso", fr: "Familles, stationnement et accès", es: "Familias, aparcamiento y acceso" },
    items: [
      { label: { en: "Two cots and two high chairs", it: "Due lettini e due seggioloni", fr: "Deux lits bébé et deux chaises hautes", es: "Dos cunas y dos tronas" }, status: "on-request" },
      { label: { en: "Two private garages", it: "Due garage privati", fr: "Deux garages privés", es: "Dos garajes privados" }, status: "included" },
      { label: { en: "Final 70 m pedestrian stone path", it: "Ultimi 70 m su percorso pedonale in pietra", fr: "70 derniers mètres sur un chemin piéton en pierre", es: "Últimos 70 m por un camino peatonal de piedra" }, status: "included", note: { en: "The path, internal stairs and terraced grounds may be difficult for reduced mobility.", it: "Il percorso, le scale interne e il giardino terrazzato possono essere difficili per chi ha mobilità ridotta.", fr: "Le chemin, les escaliers et le terrain en terrasses peuvent être difficiles en cas de mobilité réduite.", es: "El camino, las escaleras interiores y el terreno en terrazas pueden ser difíciles para personas con movilidad reducida." } },
    ],
  },
  {
    id: "cottage",
    title: { en: "Optional pool cottage", it: "Pool house opzionale", fr: "Maison de piscine en option", es: "Casa de piscina opcional" },
    items: [
      { label: { en: "Double bedroom and double sofa bed", it: "Camera matrimoniale e divano letto matrimoniale", fr: "Chambre double et canapé-lit double", es: "Dormitorio doble y sofá cama doble" }, status: "cottage-only" },
      { label: { en: "Two bathrooms", it: "Due bagni", fr: "Deux salles de bains", es: "Dos baños" }, status: "cottage-only" },
      { label: { en: "Kitchen and air conditioning", it: "Cucina e aria condizionata", fr: "Cuisine et climatisation", es: "Cocina y aire acondicionado" }, status: "cottage-only" },
    ],
  },
  {
    id: "services",
    title: { en: "Service model", it: "Formula di servizio", fr: "Services proposés", es: "Modelo de servicio" },
    items: [
      { label: { en: "Daily housekeeping", it: "Pulizie giornaliere", fr: "Ménage quotidien", es: "Limpieza diaria" }, status: "not-provided" },
      { label: { en: "In-stay linen changes", it: "Cambio biancheria durante il soggiorno", fr: "Changement du linge pendant le séjour", es: "Cambio de ropa de cama durante la estancia" }, status: "not-provided" },
      { label: { en: "Food and consumable supplies", it: "Alimenti e prodotti di consumo", fr: "Produits alimentaires et consommables", es: "Alimentos y productos consumibles" }, status: "not-provided" },
    ],
  },
];
