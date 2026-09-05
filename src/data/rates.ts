export const ratePolicy = {
  currency: "EUR",
  lastVerified: "2026-09-05",
  status: "owner_approval_required",
  minimumStayCandidate: 7,
  changeoverDayCandidate: "Sunday",
  seasons: [],
  poolCottageSupplement: {
    minimumWeekly: 750,
    maximumWeekly: 1490,
    cleaningAndLinen: 120,
    // The two public listings do not show the same range: Airbnb currently
    // states €780–€1,350; Vrbo states €750–€1,490. The published envelope
    // preserves both figures without presenting either as a fixed rate.
    status: "indicative_current_listing_range",
  },
  fees: {
    mainVillaCleaning: null,
    cottageCleaning: null,
    linen: null,
    securityDeposit: null,
    touristTax: {
      amount: null,
      display: "Payable according to current Comune di Camogli regulations and confirmed at reservation.",
    },
  },
} as const;
