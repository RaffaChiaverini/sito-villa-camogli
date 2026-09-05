import type { SiteContent } from "../types";
import { factRail } from "../data/property-facts";
import { en } from "./en";

export const es: SiteContent = {
  ...en,
  locale: "es",
  languageName: "Español",
  alternateLocale: "en",
  alternateLanguageName: "English",
  seo: {
    title: "Villa dei Limoni | Una villa privada de Liguria sobre Camogli",
    description: "Una villa con vistas al mar sobre Camogli, piscina privada, jardines en terrazas y casa de piscina opcional para estancias de hasta 16 huéspedes.",
    socialTitle: "Villa dei Limoni — Camogli, Liguria",
    socialDescription: "Una villa privada con vistas al mar sobre Camogli, jardín en terrazas, piscina y senderos del parque de Portofino muy cerca.",
  },
  navigation: {
    menuLabel: "Menú", closeLabel: "Cerrar el menú", skipLabel: "Ir al contenido", bookLabel: "Ver disponibilidad", languageLabel: "Cambiar idioma",
    items: [
      { id: "experience", label: "La casa", href: "#experience" },
      { id: "stays", label: "Estancias", href: "#stays" },
      { id: "gallery", label: "Galería", href: "#gallery" },
      { id: "layout", label: "Distribución", href: "#layout" },
      { id: "camogli", label: "Camogli", href: "#camogli" },
      { id: "faq", label: "Información", href: "#faq" },
    ],
  },
  platforms: en.platforms.map((platform) => ({
    ...platform,
    shortCta: `Ver en ${platform.name}`,
    availabilityCta: `Ver disponibilidad en ${platform.name}`,
    externalLabel: `Abre el anuncio oficial de Villa dei Limoni en ${platform.name} en una pestaña nueva`,
  })),
  hero: {
    eyebrow: "Camogli · Liguria", title: "Una villa privada de Liguria sobre Camogli.",
    description: "Vistas al mar, jardín en terrazas, piscina privada y Camogli a unos cinco minutos en coche o autobús.",
    exploreLabel: "Descubrir la villa", scrollLabel: "Desplázate para descubrir", imageAlt: "Villa dei Limoni y su jardín sobre las aguas azules del Golfo Paradiso",
  },
  facts: factRail.es,
  story: {
    eyebrow: "La experiencia", title: "Una villa de tres plantas en un jardín ligur en terrazas.",
    lead: "Villa dei Limoni se encuentra en un jardín de frutales y plantas con flores sobre Camogli, con vistas al Golfo Paradiso.",
    paragraphs: ["La villa principal se distribuye en tres plantas, con las zonas comunes en la planta baja y seis dormitorios climatizados en las dos superiores.", "En el exterior hay una piscina de 40 m² con vistas al mar, zona de comedor, barbacoa y horno de leña.", "Una casa de piscina independiente, renovada en 2024, permite alojar hasta cuatro huéspedes más y solo se ofrece junto con la villa principal."],
    imageAlt: "Terraza de piedra iluminada por el sol entre cítricos y plantas con flores",
  },
  stays: {
    eyebrow: "Estancias", title: "Una villa, dos configuraciones.",
    intro: "Elige la villa de seis dormitorios para un máximo de 12 huéspedes o añade la casa de piscina independiente para un grupo de hasta 16. Solo se ofrece con la casa principal y nunca se alquila a otros huéspedes.",
    comparisonLabels: { guests: "Huéspedes", bedrooms: "Dormitorios", bathrooms: "Baños", idealFor: "Alojamiento" },
    modes: [
      { id: "villa", eyebrow: "La casa principal", title: "Solo villa", summary: "Tres plantas para convivir y descansar, abiertas al jardín en terrazas y al mar.", capacity: "Hasta 12", bedrooms: "6", bathrooms: "4 completos + 1 aseo", idealFor: "La casa principal en tres plantas", features: ["Aire acondicionado en todos los dormitorios", "Cocina equipada, salón y comedor", "Wi-Fi rápido medido a 82 Mbps", "Piscina privada, jardín, comedor exterior y dos garajes"], note: "La tarifa indicada para un máximo de 12 huéspedes incluye solo la villa principal." },
      { id: "villa-cottage", eyebrow: "La propiedad completa", title: "Villa + casa de piscina", summary: "La villa principal junto con una casa privada al lado de la piscina, totalmente renovada en 2024.", capacity: "Hasta 16", bedrooms: "7", bathrooms: "6 completos + 1 aseo", idealFor: "La casa principal y la casa de piscina independiente", features: ["Dormitorio doble con pequeño baño en suite", "Salón con sofá cama doble y un segundo baño", "Cocina privada y aire acondicionado", "Vistas a la piscina y al Golfo Paradiso"], note: "La casa de piscina es un suplemento opcional y no puede alquilarse por separado." },
    ],
  },
  gallery: {
    eyebrow: "La casa en imágenes", title: "Entre el jardín y el mar.", intro: "Una selección de los espacios, detalles y vistas que dan carácter a Villa dei Limoni.",
    allLabel: "Todas las fotografías", openLabel: "Abrir fotografía", closeLabel: "Cerrar galería", previousLabel: "Fotografía anterior", nextLabel: "Fotografía siguiente", counterLabel: "Fotografía",
    chapters: [
      { id: "views", label: "Vistas", description: "Vistas al mar sobre el Golfo Paradiso" },
      { id: "pool-garden", label: "Piscina y jardín", description: "Terrazas, flores y agua sobre el mar" },
      { id: "outdoor-dining", label: "Comedor exterior", description: "Comedor al aire libre, barbacoa y horno de leña" },
      { id: "living", label: "Zonas de estar", description: "Salón, comedor y cocina equipada" },
      { id: "bedrooms", label: "Dormitorios", description: "Seis dormitorios climatizados en la villa" },
      { id: "bathrooms", label: "Baños", description: "Cuatro baños con ducha y un aseo en la planta baja" },
      { id: "cottage", label: "Casa de piscina", description: "Dormitorio, salón, dos baños y cocina" },
      { id: "arrival", label: "Llegada", description: "Unos 70 metros de sendero peatonal de piedra" },
      { id: "camogli", label: "Alrededores de Camogli", description: "Pueblo, playa, puerto y senderos cercanos" },
    ],
  },
  layout: {
    eyebrow: "Interiores y distribución", title: "Espacio para reunirse. Espacio para descansar.",
    intro: "La villa principal se desarrolla en tres plantas, separando las zonas sociales de los dos amplios pisos de dormitorios. La casa de piscina añade un alojamiento independiente al nivel de la piscina.",
    goodForLabel: "Configuraciones disponibles", goodFor: "La villa principal aloja hasta 12 huéspedes; al añadir la casa de piscina, la capacidad aumenta a 16.", optionalLabel: "Opcional con la villa",
    floors: [
      { id: "ground", name: "Nivel del jardín", kicker: "Vivir juntos", summary: "Salón, comedor independiente, cocina equipada y aseo.", rooms: [{ room: "Salón", detail: "Zona de estar compartida" }, { room: "Comedor", detail: "Comedor interior independiente" }, { room: "Cocina", detail: "Cocina equipada" }, { room: "Aseo", detail: "Inodoro y lavabo" }] },
      { id: "first", name: "Primera planta", kicker: "Tres dormitorios", summary: "Una planta flexible para adultos y niños, con dos baños con ducha.", rooms: [{ room: "Dormitorio doble", detail: "Una cama doble" }, { room: "Dormitorio con literas", detail: "Una litera" }, { room: "Dormitorio flexible", detail: "Cama individual convertible en doble" }, { room: "Dos baños", detail: "Ambos con ducha" }] },
      { id: "second", name: "Segunda planta", kicker: "Tres dormitorios", summary: "La planta superior combina dormitorios dobles, de dos camas y con literas.", rooms: [{ room: "Dormitorio doble", detail: "Una cama doble" }, { room: "Dormitorio con dos camas", detail: "Dos camas individuales" }, { room: "Dormitorio con literas", detail: "Una litera" }, { room: "Dos baños", detail: "Ambos con ducha" }] },
      { id: "cottage", name: "Casa de piscina", kicker: "Hasta cuatro huéspedes adicionales", summary: "Una casa independiente totalmente renovada junto a la piscina, con vistas al golfo.", optional: true, rooms: [{ room: "Dormitorio doble", detail: "Con pequeño baño en suite" }, { room: "Salón", detail: "Con sofá cama doble" }, { room: "Segundo baño", detail: "Para quienes duermen en el salón" }, { room: "Cocina", detail: "Alojamiento independiente y climatizado" }] },
    ],
  },
  outdoors: {
    eyebrow: "Vida al aire libre", title: "Un jardín ligur en terrazas con vistas al mar.", lead: "Un amplio jardín en terrazas con frutales y plantas con flores, sostenido por muros tradicionales de piedra seca.", quote: "Piscina de 40 m². Comedor exterior. Barbacoa y horno de leña.",
    features: [{ title: "Piscina con vistas al mar", description: "Piscina privada de 40 m² con vistas al mar, construida en 2021." }, { title: "La mesa larga", description: "Una zona de comedor exterior con vistas al jardín, la piscina y el Golfo Paradiso." }, { title: "Fuego y sabor", description: "La zona exterior cuenta con barbacoa y horno de leña." }, { title: "Un paisaje en terrazas", description: "Frutales, flores y muros tradicionales de piedra seca dan forma al jardín." }],
    imageAlts: ["Piscina privada de Villa dei Limoni con vistas al mar", "Mesa exterior rodeada por el jardín en terrazas", "Horno de leña tradicional entre las terrazas del jardín"],
  },
  location: {
    eyebrow: "Camogli y alrededores", title: "Sobre Camogli, cerca del parque natural de Portofino.", lead: "La villa se encuentra en una zona tranquila y verde sobre Camogli, cerca del parque natural de Portofino.",
    paragraphs: ["Camogli está a unos cinco minutos en coche o autobús, o a 15–20 minutos a pie: cuesta abajo al ir y cuesta arriba al volver.", "Santa Margherita, Rapallo, Portofino y Génova están a poca distancia en coche, y el sendero Camogli–San Rocco–Batterie–San Fruttuoso comienza cerca."],
    details: [{ value: "≈ 5 min", label: "Camogli en coche o autobús", description: "Según el tráfico y la temporada" }, { value: "≈ 15–20 min", label: "Paseo cuesta abajo a Camogli", description: "El regreso es cuesta arriba" }, { value: "≈ 80 km", label: "Senderos señalizados", description: "En la red del parque de Portofino" }],
    highlightsTitle: "Muy cerca", highlights: ["Playa y puerto de Camogli", "Sendero Camogli–San Rocco–Batterie–San Fruttuoso", "Parque natural de Portofino y sus 80 km de senderos", "Santa Margherita, Rapallo, Portofino y Génova por carretera"],
    privacyNote: "Por privacidad, este sitio solo indica la zona alta de Camogli. Los huéspedes con reserva deben seguir las indicaciones de llegada facilitadas con ella.", mapLabel: "Ubicación aproximada en la zona alta de Camogli", imageAlt: "El colorido paseo marítimo y la playa de Camogli vistos desde arriba",
  },
  reviews: {
    eyebrow: "Opiniones de huéspedes", title: "Un lugar que se recuerda.", intro: "Las opiniones de los anuncios oficiales mencionan a menudo las vistas, el jardín, la piscina, la distribución para grupos y la comunicación con el anfitrión.",
    platforms: [
      { ...en.reviews.platforms[0], scale: "sobre 5", reviewCountLabel: "43 opiniones de huéspedes", verifiedLabel: "Datos del anuncio verificados el 3 de agosto de 2026", themes: ["Vistas", "Piscina", "Espacios exteriores", "Comunicación con el anfitrión"] },
      { ...en.reviews.platforms[1], scale: "sobre 10", reviewCountLabel: "12 opiniones de huéspedes", verifiedLabel: "Datos del anuncio verificados el 3 de agosto de 2026", themes: ["Estancias en grupo", "Jardín", "Horno de piedra", "Fiel a las fotos"] },
    ],
    proofPoints: ["Una villa y unas vistas a la altura de las fotos", "Un entorno generoso para familias y grupos grandes", "La piscina y el jardín como centro de cada día", "Comidas memorables al aire libre y comunicación atenta"],
    disclaimer: "Las puntuaciones y el número de opiniones son capturas fechadas de los anuncios oficiales y pueden cambiar.",
  },
  booking: {
    eyebrow: "Tarifas y reservas", title: "Planea una semana sobre Camogli.", lead: "La disponibilidad, los precios actualizados, los impuestos finales y las condiciones de cancelación se confirman en los anuncios oficiales de Airbnb y Vrbo.",
    rateLabel: "Tarifas", rateValue: "Tarifas semanales de temporada disponibles", rateDetail: "Elige Solo villa o Villa + casa de piscina en la plataforma para ver el total de tus fechas y grupo.",
    weeklyLabel: "Ritmo de la estancia", weeklyDetail: "El anuncio de Airbnb muestra actualmente estancias de siete noches a partir del domingo; la plataforma confirma la regla para cada temporada.",
    taxLabel: "Tasa turística", taxDetail: "La tasa turística puede aplicarse conforme a la normativa vigente de Camogli y se confirma en la plataforma al reservar.",
    platformNote: "Villa dei Limoni no acepta pagos en este sitio. Completa todas las reservas y pagos en Airbnb o Vrbo.",
  },
  faq: {
    eyebrow: "Información práctica", title: "Los detalles prácticos, explicados con claridad.", intro: "Villa dei Limoni es una propiedad en una ladera, con acceso peatonal, escaleras interiores y terreno en terrazas. Estos detalles ayudan a preparar la estancia.",
    items: [
      { id: "access", question: "¿Cómo se llega a la villa?", answer: "Desde la carretera transitable más cercana, los últimos 70 metros se recorren a pie por un camino tradicional de piedra de Liguria con una ligera pendiente. No se llega directamente en coche." },
      { id: "parking", question: "¿Hay aparcamiento privado?", answer: "Sí. Hay dos garajes privados a menos de cinco minutos a pie de la villa." },
      { id: "mobility", question: "¿La propiedad es adecuada para personas con movilidad reducida?", answer: "El acceso peatonal, las escaleras interiores y el jardín en terrazas incluyen pendientes y desniveles. Consulta tus necesidades con la plataforma antes de reservar." },
      { id: "children", question: "¿Se admiten niños?", answer: "Sí. El jardín incluye terrazas, escalones, zonas elevadas y muros de piedra seca, por lo que es esencial la supervisión atenta de un adulto." },
      { id: "pool-season", question: "¿Cuándo está abierta la piscina?", answer: "La temporada de piscina va de mayo a octubre. Confirma en la plataforma las fechas exactas para tu estancia." },
      { id: "stay-length", question: "¿Cuál es la estancia mínima?", answer: "El anuncio de Airbnb muestra actualmente estancias de siete noches con llegada el domingo. Las fechas en línea y la reserva confirmada son definitivas." },
      { id: "arrival-times", question: "¿Cuáles son los horarios de llegada y salida?", answer: "La llegada comienza entre las 16:00 y las 16:30 según la plataforma, y la salida es antes de las 10:00. La reserva confirmada incluye el horario definitivo." },
      { id: "pets-events", question: "¿Se permiten mascotas o eventos?", answer: "No se permiten mascotas ni eventos." },
      { id: "smoking-age", question: "¿Hay restricciones de tabaco o edad?", answer: "Vrbo indica actualmente que solo se puede fumar en las zonas designadas y una edad mínima de 28 años para quien reserva. Prevalecen las condiciones de la reserva confirmada." },
      { id: "services", question: "¿La villa ofrece servicios de hotel?", answer: "No. Es un alquiler turístico privado, no un hotel ni un B&B. No se incluyen limpiezas adicionales, cambios de ropa de cama ni productos consumibles durante la estancia." },
      { id: "tourist-tax", question: "¿Está incluida la tasa turística?", answer: "Puede aplicarse la tasa turística de Camogli. El importe y la forma de cobro se confirman al reservar." },
      { id: "booking", question: "¿Por qué se reserva en Airbnb o Vrbo?", answer: "Este sitio presenta la villa. La disponibilidad, los pagos, las cancelaciones y la asistencia se gestionan en la plataforma oficial elegida." },
    ],
  },
  footer: { strapline: "Una villa privada entre el jardín y el mar.", location: "Camogli · Liguria · Italia", rights: "Todos los derechos reservados.", privacyNote: "Los huéspedes con reserva deben seguir las indicaciones de llegada facilitadas con ella.", backToTopLabel: "Volver arriba" },
};
