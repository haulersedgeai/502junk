# 502 Junk — Research Notes

Source: https://www.502junk.com/  (scraped 2026-05-17)

## Sitemap (live pages on existing site)
- `/`
- `/junk-removal/`
- `/demolition/` (stub — page exists but body is empty other than title)
- `/pricing/`
- `/contact/` (just shows phone)

That's it — only 5 pages indexed. Lots of room to expand.

## Business Identity

| Field | Value | Notes |
|---|---|---|
| Display name | **502 Junk Dept.** | Used throughout copy |
| Brand title | "502 Junk Department" | Used in browser title / OG title |
| Footer copyright | "502 Junk Depot" | Inconsistent — also in page titles "502 Junk Depot Hunter Rowe" |
| Owner | **Hunter Rowe** | Reviews mention "Hunter delivered a fantastic quote", page titles include his name |
| Phone (display) | **(502) 501-9299** | |
| Phone (raw) | **+15025019299** | tel:5025019299, sms:5025019299 |
| Email | (none published) | Not present on any page. Will use a placeholder/quote-form-only contact |
| Physical address | (not published) | Service area only — Louisville/Kentuckiana |
| Hours | **7 days a week** | "flexible scheduling available seven days a week" |
| Years in business | (not stated) | |
| Google Place ID | `ChIJ40OSJqVMwoURf55aXrKZHIE` | From review link |

**Decision:** standardize as **"502 Junk Dept."** for display (their primary usage), legal as "502 Junk Department" in JSON-LD. Drop "Depot" — it appears to be a typo in their footer.

## Reviews

- **5.0 stars based on 115 Google reviews** (front-page Trustindex widget)
- Featured reviewer names: Jeff Mouttet, James Eldridge, Bernadette Box, Robert Johnson, Daniel Mahony, Louie Leger, Thomas Miller, Shanon Grant, Christopher Palmer, kurtis edelmann
- Strong themes: on time, professional, great communication, fast, cleans up after themselves, fair pricing

## Services Offered (from their copy)

**Junk Removal:**
- appliances
- couches / furniture
- electronics
- mattresses
- cleanouts
- construction debris
- yard waste

**Cleanouts:**
- Hoarder houses
- Office & business cleanouts
- Garage cleanouts
- Basement cleanouts
- Pole barn cleanouts (mentioned in review)
- Property cleanouts / estate cleanouts (mentioned in pricing copy)

**Commercial:**
- Offices
- Retail spaces
- Warehouses
- Construction sites
- Apartment complexes
- Property management turnovers

**Demolition** (separate page exists — currently empty but offered):
- Deck demolition (mentioned in review)
- Light demolition (mentioned in pricing copy)

**Dumpster rentals:** NOT offered (no mention anywhere).

**Recycling/donation:** Yes — "We recycle, donate and properly dispose of junk."

## Pricing (verbatim)

Volume-based, transparent, no hidden fees. Includes: free estimate, labor, transportation, proper disposal, cleanup.

| Tier | Price | Description |
|---|---|---|
| Minimum Load | $125 | single large item, a couple items, small pile |
| 1/4 Load | $225 | few large items or small-medium pile |
| 1/2 Load | $350 | medium cleanouts, no full trailer |
| 3/4 Load | $475 | multiple large bulky items, couches, furniture, construction debris |
| Full Load | $650 | major work, garages, basements |
| XL Load | $975 | property cleanouts, estate cleanouts, extreme |

## Service Area (cities currently listed on their site)

**Louisville KY side:**
Louisville, St. Matthews, Lyndon, Germantown, Jeffersontown, Prospect, Crestwood, Highlands, Clifton, Old Louisville, Fern Creek, Okolona, Shively, Middletown, Anchorage, La Grange, Pewee Valley, Shepherdsville

**Southern Indiana side:**
Jeffersonville, Clarksville, Sellersburg, New Albany, Georgetown, Floyds Knobs, Charlestown, Corydon, Greenville, Henryville

## Social

- Facebook: https://www.facebook.com/502junk/
- Instagram: https://www.instagram.com/502junk/
- Google Reviews: place ID `ChIJ40OSJqVMwoURf55aXrKZHIE`
- (No TikTok / YouTube / Yelp linked)

## Images found on CDN

Only 3 unique photos exist on their site:
- Logo / circular photo: `/wp-content/uploads/2025/08/EBEEAC6E-B712-49D3-823E-EE0CD3BD4D47.jpg` (1200x1200)
- Hero photo 1: `/wp-content/uploads/2026/03/IMG_0193.jpeg` (1320x1582) — front-page hero
- Hero photo 2: `/wp-content/uploads/2026/03/IMG_4187-scaled.jpeg` — junk-removal page hero

All downloaded to `/tmp/502scrape/images/`. Will be moved into `/public/images/` during build.

**Implication:** there is no real gallery to scrape. We'll need branded/gradient placeholders for additional gallery slots, or just feature the 3 real photos prominently.

## Brand Colors (detected)

The existing site uses Hello Elementor default theme colors:
- Primary: `#6EC1E4` (sky blue)
- Secondary: `#54595F` (gray)
- Accent: `#61CE70` (light green)
- Text: `#7A7A7A`

These are generic theme defaults — **not** a real brand identity. The hero CTA buttons appeared in `#fb8e28` (orange) which is closer to intentional. Logo image has dark colors on a light background.

**Decision (will confirm with you in the pause):** Rebuild with a stronger, more Louisville-coded palette:
- Primary: **Cardinal/Derby Red** `#C8102E` (Louisville Cardinals red, Derby City)
- Accent: **Bourbon Amber** `#D89B4A` (whiskey/bourbon warmth)
- Dark: **Charcoal** `#0F1115`
- Light: **Off-white** `#F8F5F1`

Bolder, more memorable, ties to Louisville culture. If you'd rather match what they have or pick different colors, say so during the pause.

## Voice / Tone / Taglines

- **"We Want Louisville's Junk"** (primary hero headline)
- **"Your Go-To Solution for Junk Removal in Louisville, KY!"**
- **"Fast. Local. Same-Day."**
- "Junk Removal Made Easy In 3 Simple Steps"
- "The Stress Free Way To Clear Your Space"
- "Time to Take Back Your Space?"
- "Need Space? Let's Clear It."

Voice: direct, working-class, friendly, confident. Short imperative sentences. Local pride. "Stress-free," "hassle-free," "no job too small."

## Unique Selling Points

- 5.0 ★ from 115+ Google reviews
- Locally owned (Louisville-based)
- Same-day service available
- 7 days a week
- Free, no-obligation estimates
- Upfront pricing — no hidden fees
- Volume-based pricing (truck-load tiers)
- Recycle / donate / proper disposal
- Professional crew, on-time, cleans up after itself
- Owner-operated feel (Hunter is named in reviews — relationship business)

Not explicitly stated but reasonable to claim based on industry norms: **licensed and insured** (will add to copy — standard for the trade).

---

# Expanded Service Area Plan (Phase 3)

## Cities (KY side — Jefferson County and adjacent counties)

From their existing list + expansion:
1. **Louisville** (anchor) — Jefferson Co.
2. **St. Matthews** — Jefferson
3. **Jeffersontown (J-town)** — Jefferson
4. **Lyndon** — Jefferson
5. **Middletown** — Jefferson
6. **Anchorage** — Jefferson
7. **Prospect** — Jefferson/Oldham
8. **Hurstbourne** — Jefferson *(new)*
9. **Fern Creek** — Jefferson
10. **Okolona** — Jefferson
11. **Shively** — Jefferson
12. **Pleasure Ridge Park** — Jefferson *(new)*
13. **Valley Station** — Jefferson *(new)*
14. **Fairdale** — Jefferson *(new)*
15. **Goshen** — Oldham *(new)*
16. **La Grange** — Oldham
17. **Crestwood** — Oldham
18. **Pewee Valley** — Oldham
19. **Mt. Washington** — Bullitt *(new)*
20. **Shepherdsville** — Bullitt
21. **Brandenburg** — Meade *(new)*

## Louisville Neighborhoods (separate `/locations/[slug]` pages, type: neighborhood)

1. **Highlands** *(already listed)*
2. **NuLu** *(new)*
3. **Old Louisville** *(already listed)*
4. **Crescent Hill** *(new)*
5. **Clifton** *(already listed)*
6. **Germantown** *(already listed)*
7. **Schnitzelburg** *(new)*
8. **Portland** *(new)*
9. **Butchertown** *(new)*
10. **Cherokee Triangle** *(new)*
11. **Audubon Park** *(new)*

## Southern Indiana

1. **Jeffersonville** — Clark Co.
2. **New Albany** — Floyd Co.
3. **Clarksville** — Clark Co.
4. **Sellersburg** — Clark Co.
5. **Charlestown** — Clark Co.
6. **Floyds Knobs** — Floyd Co.
7. **Georgetown** — Floyd Co.
8. **Greenville** — Floyd Co.
9. **Corydon** — Harrison Co.
10. **Henryville** — Clark Co.

**Grand total locations: ~42 pages** (21 KY cities + 11 neighborhoods + 10 IN cities). Well above the 25-35 target.

## Service Pages Plan (Phase 3)

**Hubs (3):**
- `/services/junk-removal`
- `/services/cleanouts`
- `/services/demolition`

**Junk removal sub-services (~10):**
- Furniture removal
- Appliance removal (fridge, washer/dryer, etc.)
- Mattress removal
- Hot tub removal
- Piano removal
- TV / electronics removal
- Yard waste removal
- Construction debris removal
- Commercial junk removal
- Property management / turnover cleanouts

**Cleanouts sub-services (~8):**
- Hoarder cleanouts
- Estate cleanouts
- Garage cleanouts
- Basement cleanouts
- Attic cleanouts
- Storage unit cleanouts
- Office cleanouts
- Foreclosure / eviction cleanouts
- Move-out cleanouts

**Demolition sub-services (~5):**
- Shed demolition
- Deck demolition
- Fence removal
- Above-ground pool removal
- Light interior demolition

**Total service pages: ~26** (within the 20-28 target).

## Real Louisville geography for location pages

- Counties: Jefferson, Oldham, Bullitt, Shelby, Meade (KY); Clark, Floyd, Harrison (IN)
- Highways: I-64, I-65, I-71, I-264 (Watterson Expressway), I-265 (Gene Snyder Freeway), KY-841
- Major roads: Bardstown Rd, Frankfort Ave, Shelbyville Rd, Dixie Hwy, Preston Hwy, Taylorsville Rd, Brownsboro Rd
- Landmarks: Churchill Downs, Louisville Slugger Museum, Big Four Bridge, Cherokee Park, Waterfront Park, KFC Yum! Center, Muhammad Ali Center, Belle of Louisville, Mega Cavern, Iroquois Park, Bernheim Forest, Speed Art Museum, Frazier History Museum, Kentucky Derby Museum, Bourbon Trail/Urban Bourbon Trail
- IN-side landmarks: Big Four Bridge (Jeffersonville), Falls of the Ohio State Park (Clarksville), Schimpff's Confectionery, Floyd Memorial Hospital area
- Geo coords for LocalBusiness JSON-LD: **38.2527, -85.7585** (Louisville center)

## Open Questions / Things to Flag

1. **No public email.** Quote form will need a target — will use placeholder `quotes@502junk.com` in `.env.example` for you to configure, with fallback to `/tmp` log when `RESEND_API_KEY` not set.
2. **"Department" vs "Depot"** — going with "Dept." (their primary copy usage). Flag if you'd rather one or the other.
3. **Demolition page is empty** on their site — they offer it but haven't written content. We'll build it out properly.
4. **Brand colors** — picking Cardinal Red + Bourbon Amber as a stronger Louisville-coded identity since their existing colors are default theme. Open to swap.
5. **Licensed/insured** — not stated on site but industry-standard. Will include as USP unless you say otherwise.
6. **Only 3 real photos exist.** Hero + service grid will use them; remaining slots will be brand-gradient placeholders.
