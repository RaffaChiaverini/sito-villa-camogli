export const ratePolicy = {
  currency: "EUR",
  lastVerified: null,
  status: "owner_approval_required",
  minimumStayCandidate: 7,
  changeoverDayCandidate: "Sunday",
  seasons: [],
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
