# Website content provenance

Last audited: **3 August 2026**

This file is the editorial source of truth for factual claims published on the Villa dei Limoni website. Public copy should not add a property fact unless it can be traced to one of the approved sources below or is confirmed in writing by the owner.

## Approved sources

1. [Official Airbnb listing](https://www.airbnb.it/rooms/23678485)
2. [Official Vrbo listing](https://www.vrbo.com/it-it/affitto-vacanze/p8718530)
3. Owner-supplied documents or written confirmation, once provided
4. The listing photographs, only for literal image descriptions such as alt text

The imported `deep-research-report.md` is a research and implementation brief. It is useful for locating claims, but it is not treated as an independent factual source when the claim cannot also be verified on a current official listing or by the owner.

## Published claim register

| Website topic | Published information | Verified source |
| --- | --- | --- |
| Property and setting | Entire villa in Camogli; private sea-view pool; terraced garden; Golfo Paradiso views | Airbnb listing overview and description; Vrbo property description |
| Main-villa capacity | Six bedrooms; up to 12 guests at the displayed villa-only rate | Airbnb “Lo spazio” and pricing notes |
| Main-villa bathrooms | Four shower bathrooms plus one ground-floor WC | Airbnb floor-by-floor layout |
| Main-villa layout | Ground-floor living room, dining room, kitchen and WC; three bedrooms and two shower rooms on each upper floor | Airbnb floor-by-floor layout |
| Air conditioning | Every main-villa bedroom is air-conditioned | Airbnb “Lo spazio” |
| Pool cottage | Optional; up to four additional guests; renovated in 2024; one double bedroom, living room with double sofa bed, two bathrooms, kitchen and air conditioning; never rented to third parties | Airbnb “Lo spazio” and pricing notes |
| Full-estate capacity | Main villa plus pool cottage: up to 16 guests, seven bedrooms and six full bathrooms plus one WC | Derived only by adding the explicitly listed villa and cottage configurations above |
| Pool and garden | Private 40 m² sea-view pool; large terraced garden with fruit trees, flowering plants and dry-stone walls; Vrbo states pool built in 2021 | Airbnb description and safety notes; Vrbo property description |
| Outdoor amenities | Outdoor dining area, barbecue and wood-burning oven | Airbnb and Vrbo property descriptions |
| Internet and parking | Airbnb-measured Wi-Fi of 82 Mbps; two private garages | Airbnb listing highlights and description |
| Pedestrian access | About 70 m / one minute from the nearest drivable road on a slightly inclined stone lane; garages are under five minutes from the house; may be difficult for reduced mobility | Airbnb and Vrbo access descriptions |
| Camogli access | About five minutes by car or bus and 15–20 minutes on foot, downhill outward and uphill on return | Airbnb property and neighbourhood descriptions |
| Nearby places | Camogli beach and marina; Camogli–San Rocco–Batterie–San Fruttuoso trail; Portofino Natural Park and an 80 km trail network; Santa Margherita, Rapallo, Portofino and Genoa within driving reach | Airbnb neighbourhood description; Vrbo area panel and property description |
| Stay length | Airbnb states a seven-night minimum and tells guests to select Sunday as the starting date to reveal available weeks | Airbnb “Lo spazio” |
| Pool season | May to October | Airbnb guest-access section |
| Children and safety | Children allowed; supervision required around terraced height changes; Airbnb flags an unfenced pool/hot tub and elevated areas without rails | Airbnb safety and property notes; Vrbo house rules |
| Pets and events | No pets on Airbnb and Vrbo; no events on Vrbo | Airbnb house rules; Vrbo house rules |
| Smoking and booking age | Vrbo permits smoking only in designated areas and states a minimum renter age of 28 | Vrbo house rules |
| Check-in and checkout | Airbnb: 16:00–19:00; Vrbo: from 16:30; both: checkout by 10:00 | Airbnb and Vrbo house rules |
| Rental services | The property is a tourist rental, not a B&B; extra cleaning, linen changes and consumable goods are not provided during the stay | Airbnb and Vrbo property notes |
| Guest review snapshots | Airbnb 4.86/5 from 43 reviews; Vrbo 9.8/10 from 12 reviews | Official listing pages, checked 3 August 2026 |
| Review themes | Views, pool, garden, large-group layout, outdoor dining/stone oven, accuracy to photographs and host communication | Review text and review category panels on Airbnb and Vrbo |

## Deliberately not published as fact

- **Olive-mill / 1940s family history:** present in the imported research brief, but not visible in the current official listing text reviewed on 3 August 2026. It has been removed from the public website until the owner confirms it.
- **Hydromassage specification:** Airbnb currently groups the amenity under “pool and hot tub,” but the precise physical feature is not described consistently enough for standalone marketing copy. The website publishes only the verified pool size, privacy, sea view and Vrbo’s 2021 construction statement.
- **Exact tourist-tax amount:** Airbnb, Vrbo and municipal information have shown conflicting values. The website says only that the current amount and collection method are confirmed at booking.
- **Exact drive times to towns beyond Camogli:** current Airbnb and Vrbo wording differs. The website names the destinations without presenting one platform’s times as canonical.
- **Direct rates or final totals:** live prices, fees, taxes and cancellation terms remain on Airbnb and Vrbo.
- **Generic destination claims or imagined sensory details:** copy about boat services, birdsong, pebble beaches, a working harbour and similar unsourced flourishes was removed.

## Editing rule

When a fact changes, update both `src/content/en.ts` and `src/content/it.ts`, update this register, change the visible verification date where relevant, and run the build and browser tests before publishing.
