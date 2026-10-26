export const ratePolicy = {
  currency: "EUR",
  lastVerified: "2026-10-05",
  status: "owner_confirmed",
  minimumStayCandidate: 7,
  changeoverDayCandidate: "Sunday",
  seasons: [
    { label: "April", weekly: 3600 },
    { label: "May", weekly: 4100 },
    { label: "June", weekly: 4700 },
    { label: "July", weekly: 5300 },
    { label: "August", weekly: 5600 },
    { label: "September", weeklyMinimum: 3900, weeklyMaximum: 4300 },
    { label: "October", weekly: 3600 },
    { label: "Easter", weekly: 3900 },
  ],
  poolCottageSupplement: {
    minimumWeekly: 990,
    maximumWeekly: 1950,
    cleaningAndLinen: 150,
    status: "owner_confirmed",
  },
  fees: {
    mainVillaCleaning: "included",
    cottageCleaning: 150,
    linen: "one set per guest per week included",
    securityDeposit: 450,
    touristTax: {
      amount: 3,
      appliesTo: "guests over 15",
      display: "€3 per guest over 15 per night, payable on arrival.",
    },
  },
} as const;
