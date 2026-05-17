export type Service = {
  slug: string;
  category: "junk-removal" | "cleanouts" | "demolition";
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  shortBlurb: string;
  intro: string[];
  whatsIncluded: string[];
  items?: string[];
  process?: { title: string; body: string }[];
  pricingNote?: string;
  relatedSlugs?: string[];
  faq?: { q: string; a: string }[];
};

export const SERVICE_CATEGORIES = [
  {
    slug: "junk-removal",
    name: "Junk Removal",
    blurb: "Single items to whole-house hauls — couches, appliances, electronics, debris.",
  },
  {
    slug: "cleanouts",
    name: "Cleanouts",
    blurb: "Garages, basements, attics, estates, hoarder houses, foreclosures, offices.",
  },
  {
    slug: "demolition",
    name: "Demolition",
    blurb: "Sheds, decks, fences, above-ground pools, light interior demo — debris hauled away.",
  },
] as const;

export const SERVICES: Service[] = [
  // -------- HUBS --------
  {
    slug: "junk-removal",
    category: "junk-removal",
    title: "Junk Removal",
    h1: "Full-Service Junk Removal in Louisville & Southern Indiana",
    metaTitle: "Junk Removal Louisville KY | 502 Junk Dept. — Same-Day Service",
    metaDescription:
      "Fast, friendly junk removal in Louisville, KY and Kentuckiana. Upfront volume pricing, free estimates, same-day pickup. Call (502) 501-9299.",
    shortBlurb:
      "From one couch to a full attic — we load it, haul it, sweep up, and properly dispose of every piece.",
    intro: [
      "If it's bulky, broken, or in your way, we'll take it. 502 Junk Dept. is Louisville's locally owned junk removal crew, and we built this business on one promise: show up on time, work hard, leave the place cleaner than we found it.",
      "We handle everything from a single piece of furniture on a Tuesday afternoon to a packed-out garage on a Saturday morning. Our quote is based on how much room your stuff takes up in the truck — no hidden surcharges, no per-item games, no door-fees.",
      "Booking is simple. Send a couple of photos through the quote form, or call and tell us what you've got. We'll give you a ballpark on the phone, lock in a final, written quote on site before lifting a finger, and we don't start until you give us the green light.",
    ],
    whatsIncluded: [
      "Two-person crew that does all the loading",
      "Truck, fuel, and disposal fees",
      "Recycling and donation of usable items",
      "Sweep-up after the haul",
      "Same-day or next-day pickup when available",
    ],
    items: [
      "Couches, sofas, sectionals",
      "Mattresses & box springs",
      "Dressers, desks, dining sets",
      "Refrigerators, washers, dryers, stoves",
      "TVs, computers, electronics",
      "Yard waste, brush, branches",
      "Construction & remodel debris",
      "Hot tubs, pianos, pool tables",
      "Office furniture & equipment",
    ],
    process: [
      { title: "Tell us what you've got", body: "Call, text, or fill out the quote form with a couple of photos." },
      { title: "Get a clear price", body: "On-site walkthrough, written quote, no surprises." },
      { title: "We haul it", body: "You point. We carry. We sweep up. You get back to your day." },
    ],
    relatedSlugs: ["furniture-removal", "appliance-removal", "mattress-removal", "construction-debris-removal", "yard-waste-removal", "commercial-junk-removal"],
    faq: [
      { q: "How fast can you get here?", a: "Most weeks we can get you on the schedule same-day or next-day. Saturday spots fill up fastest — book early in the week if you can." },
      { q: "Do you do free estimates?", a: "Yes. Phone quotes are free, and the on-site written quote is free with no obligation to book." },
      { q: "What's your service area?", a: "Louisville and the surrounding Kentucky suburbs, plus Jeffersonville, New Albany, Clarksville, Sellersburg and the rest of Southern Indiana." },
    ],
  },
  {
    slug: "cleanouts",
    category: "cleanouts",
    title: "Cleanouts",
    h1: "Property Cleanouts in Louisville, KY & Southern Indiana",
    metaTitle: "Property Cleanouts Louisville KY | 502 Junk Dept.",
    metaDescription:
      "Garage, basement, attic, hoarder, estate, foreclosure and office cleanouts in Louisville and Kentuckiana. Discreet, professional, volume pricing.",
    shortBlurb:
      "We empty entire spaces — discreetly, respectfully, and faster than you think possible.",
    intro: [
      "Cleanouts are our specialty. Whether you're closing out an estate, getting a rental ready for the next tenant, or finally tackling a basement that's been on the to-do list since 2014, we bring the crew and the truck space to clear the whole thing in a single visit.",
      "Hoarding situations, foreclosures, and properties left behind after a difficult life event get our full discretion. Our team is trained to work with sensitivity, sort through belongings carefully, and leave the property broom-clean.",
    ],
    whatsIncluded: [
      "Full sort, load, and haul — you don't have to lift anything",
      "Donation runs for usable furniture, clothing, and housewares",
      "Recycling of metal, electronics, and cardboard",
      "Sweep and broom-finish",
      "Discreet, unmarked-truck options on request",
    ],
    process: [
      { title: "On-site walkthrough", body: "We see the space, ask a few questions, and give you a flat, written quote." },
      { title: "Crew + truck show up", body: "Usually a 2–4 person team depending on scope, with as many truck loads as needed." },
      { title: "Property handed back broom-clean", body: "Final walkthrough together. You only pay when you're satisfied." },
    ],
    relatedSlugs: ["hoarder-cleanouts", "estate-cleanouts", "garage-cleanouts", "basement-cleanouts", "office-cleanouts", "foreclosure-cleanouts"],
  },
  {
    slug: "demolition",
    category: "demolition",
    title: "Demolition",
    h1: "Light Demolition & Tear-Outs in Louisville, KY",
    metaTitle: "Demolition Services Louisville KY | Sheds, Decks, Fences — 502 Junk Dept.",
    metaDescription:
      "Shed, deck, fence, and above-ground pool demolition in Louisville and Kentuckiana. We tear it down, haul it off, and clean the site.",
    shortBlurb:
      "Tear-out and haul-off in one visit — no second contractor, no leftover debris pile.",
    intro: [
      "Got something on the property that needs to come down? We do light demolition the right way: careful disassembly, full debris removal, and a clean site when we leave. No splintered lumber pile in the side yard, no rusted nails for the lawn mower to find in July.",
      "Most of our demo jobs are sheds, decks, fences, above-ground pools, and interior tear-outs ahead of a remodel. If you're not sure whether it falls under our scope, send us a photo — we'll tell you straight.",
    ],
    whatsIncluded: [
      "Hand-disassembly where possible (less site damage)",
      "All debris hauled the same day",
      "Nails, screws, and small metal swept and removed",
      "Recycling of metal and clean lumber",
      "Final site walkthrough",
    ],
    relatedSlugs: ["shed-demolition", "deck-demolition", "fence-removal", "above-ground-pool-removal", "interior-demolition"],
  },

  // -------- JUNK REMOVAL SUB-SERVICES --------
  {
    slug: "furniture-removal",
    category: "junk-removal",
    title: "Furniture Removal",
    h1: "Furniture Removal in Louisville, KY",
    metaTitle: "Furniture Removal Louisville KY | Couch, Sofa, Sectional Pickup",
    metaDescription:
      "Couch, sectional, recliner, dresser, and full furniture removal in Louisville and Kentuckiana. Same-day pickup available. Free quotes.",
    shortBlurb:
      "Couches, sectionals, recliners, dressers, dining sets — out the door and gone.",
    intro: [
      "Old furniture is awkward. It's heavy, it doesn't fit in a sedan, and the city won't take a sectional at the curb. That's where we come in.",
      "We pull furniture out of any room in the house — including basements with tight stairwells and upstairs bedrooms with narrow doorways. Donatable pieces get routed to local charities; the rest goes to the landfill so you don't have to.",
    ],
    whatsIncluded: ["Two-person carry-out from anywhere in the home", "Floor protection on long carries", "Donation routing for usable pieces", "Sweep-up after the haul"],
    items: ["Couches & sectionals", "Recliners & loveseats", "Dressers, armoires, wardrobes", "Beds, headboards, bedframes", "Dining tables & chairs", "Coffee & end tables", "Bookshelves & entertainment centers", "Office desks & filing cabinets"],
    relatedSlugs: ["mattress-removal", "appliance-removal", "junk-removal", "garage-cleanouts"],
  },
  {
    slug: "appliance-removal",
    category: "junk-removal",
    title: "Appliance Removal",
    h1: "Appliance Removal & Recycling in Louisville, KY",
    metaTitle: "Appliance Removal Louisville KY | Fridge, Washer, Stove Pickup",
    metaDescription:
      "Refrigerator, washer, dryer, stove, and water heater removal in Louisville and Southern Indiana. Eco-friendly recycling. Free quotes.",
    shortBlurb:
      "Fridges, washers, dryers, stoves, water heaters — disconnected, carried out, recycled.",
    intro: [
      "Refrigerators full of last summer's leftovers? Washer that finally gave up? We handle every major appliance Louisville households throw at us, and we do it without dinging up your floors or door frames.",
      "Most metal appliances are recycled rather than landfilled — keeps your old fridge out of the dump and recovers the steel.",
    ],
    whatsIncluded: ["Disconnection of standard hookups (water lines, dryer vents)", "Two-person carry-out", "Hand truck and floor protection", "Metal recycling on appliances", "Pickup of any associated boxes or packaging"],
    items: ["Refrigerators & freezers (chest & upright)", "Washers & dryers", "Stoves, ranges, ovens", "Dishwashers", "Microwaves & countertop appliances", "Water heaters (tank & tankless)", "AC window units & dehumidifiers", "Trash compactors"],
    relatedSlugs: ["furniture-removal", "junk-removal", "garage-cleanouts", "basement-cleanouts"],
  },
  {
    slug: "mattress-removal",
    category: "junk-removal",
    title: "Mattress Removal",
    h1: "Mattress & Box Spring Removal in Louisville, KY",
    metaTitle: "Mattress Removal Louisville KY | Box Springs & Bedframes",
    metaDescription:
      "Mattress, box spring, and bedframe removal in Louisville and Kentuckiana. Same-day pickup. Recycled or donated when possible.",
    shortBlurb: "Mattresses, box springs, and bedframes carried out and properly disposed of.",
    intro: [
      "Mattresses are one of the trickiest items to get rid of — they don't fit in trash service, they're too floppy to strap to a car, and donation centers won't take them with stains. We've taken every kind of mattress out of every kind of Louisville home: third-floor apartments in NuLu, narrow staircases in Old Louisville Victorians, you name it.",
    ],
    whatsIncluded: ["Carry-out from any floor", "Mattress bagging on request for sanitary transport", "Box springs and bedframes included in the same pickup", "Recycling routing for clean, undamaged units"],
    relatedSlugs: ["furniture-removal", "junk-removal", "move-out-cleanouts"],
  },
  {
    slug: "hot-tub-removal",
    category: "junk-removal",
    title: "Hot Tub Removal",
    h1: "Hot Tub & Spa Removal in Louisville, KY",
    metaTitle: "Hot Tub Removal Louisville KY | Spa Disposal & Demo",
    metaDescription:
      "Hot tub and spa removal in Louisville, including drain, disconnect, dismantle, and full debris haul. Free quotes.",
    shortBlurb: "Drain, disconnect, cut down to truck-size, haul off. No leftover deck damage.",
    intro: [
      "Hot tubs are basically a fiberglass-and-foam refrigerator. Most haulers won't touch them. We will — and we know how to take one apart without trashing the deck or patio underneath.",
      "We bring the tools to cut the shell into manageable sections, disconnect from any electrical or plumbing, and load every piece into the truck. The pad or deck is left intact for whatever you want to put there next.",
    ],
    whatsIncluded: ["Tub draining", "Electrical disconnect at the unit", "On-site cut-down of the shell", "Full debris haul"],
    relatedSlugs: ["above-ground-pool-removal", "demolition", "junk-removal"],
  },
  {
    slug: "piano-removal",
    category: "junk-removal",
    title: "Piano Removal",
    h1: "Piano & Organ Removal in Louisville, KY",
    metaTitle: "Piano Removal Louisville KY | Upright & Baby Grand Disposal",
    metaDescription:
      "Upright, console, baby grand, and organ removal in Louisville. Carried out safely, donated when possible, hauled off otherwise.",
    shortBlurb: "Uprights, consoles, baby grands, organs — moved out without floor or wall damage.",
    intro: [
      "Pianos are 400–800 pounds of cast iron in a wooden box. We've moved them out of split-level ranches in St. Matthews and second-floor shotgun houses in Germantown. The right gear and the right approach makes it routine.",
      "If your piano is playable and tunable, we'll try to route it to a school or community center. If it's beyond saving, it gets a respectful end.",
    ],
    whatsIncluded: ["Piano dollies and moving straps", "Floor and door-frame protection", "Two-to-four-person crew sized to the instrument", "Donation routing for playable pianos"],
    relatedSlugs: ["furniture-removal", "junk-removal"],
  },
  {
    slug: "tv-electronics-removal",
    category: "junk-removal",
    title: "TV & Electronics Removal",
    h1: "TV & Electronics Removal in Louisville, KY",
    metaTitle: "TV & Electronics Removal Louisville KY | E-Waste Disposal",
    metaDescription:
      "TVs, monitors, computers, printers, and electronics removal in Louisville. Responsible e-waste recycling. Free quotes.",
    shortBlurb: "TVs, computers, printers, stereos — recycled responsibly, not curb-dumped.",
    intro: [
      "Old electronics aren't supposed to go in the trash, and Kentucky's e-waste rules keep tightening. We take TVs (yes, including the heavy CRTs nobody else wants), monitors, computers, printers, stereos, and most other plug-in electronics, then route them to certified recyclers.",
    ],
    whatsIncluded: ["Carry-out from any room", "Wall-mount disconnection (TVs)", "Certified e-waste recycling", "Hard-drive bagging on request"],
    relatedSlugs: ["office-cleanouts", "junk-removal"],
  },
  {
    slug: "yard-waste-removal",
    category: "junk-removal",
    title: "Yard Waste Removal",
    h1: "Yard Waste & Brush Removal in Louisville, KY",
    metaTitle: "Yard Waste Removal Louisville KY | Brush, Limbs, Storm Cleanup",
    metaDescription:
      "Brush piles, limbs, leaves, storm debris, and yard waste removal in Louisville. Same-day service after storms when available.",
    shortBlurb: "Brush piles, storm limbs, leaves, mulch piles, and old fence boards hauled off.",
    intro: [
      "Louisville storms can drop a tree across your driveway in 30 seconds and leave the cleanup on your shoulders. We come in after the chainsaw work is done, load every branch and limb, rake the loose debris, and haul it all to mulch or compost facilities.",
      "We're also a regular call for spring cleanups, fall leaf hauls, and old landscaping that's been pulled out and piled up.",
    ],
    whatsIncluded: ["Hand-loading of brush, limbs, and leaves", "Rake-out after the haul", "Multiple loads if a single truck won't fit it"],
    relatedSlugs: ["construction-debris-removal", "junk-removal"],
  },
  {
    slug: "construction-debris-removal",
    category: "junk-removal",
    title: "Construction Debris Removal",
    h1: "Construction & Remodel Debris Removal in Louisville, KY",
    metaTitle: "Construction Debris Removal Louisville KY | Drywall, Lumber, Carpet",
    metaDescription:
      "Drywall, lumber, carpet, tile, roofing, and remodel debris hauling in Louisville. Faster than a dumpster for most small jobs.",
    shortBlurb: "Drywall, lumber, carpet, tile, roofing — cleared so the next trade can work.",
    intro: [
      "Renovating a Highlands bungalow or finishing out a basement in Jeffersontown? For most small-to-medium remodels, a single call to us is faster, cheaper, and tidier than ordering a dumpster.",
      "We work directly with homeowners, GCs, flippers, and property managers. Show up, point at the pile, get back to work — we'll clear it.",
    ],
    whatsIncluded: ["Hand-load of drywall, lumber, tile, carpet, padding, roofing", "Sweep-out of the work area", "Recycling of clean metal and lumber where possible", "Multi-load jobs welcomed"],
    relatedSlugs: ["yard-waste-removal", "demolition", "commercial-junk-removal"],
  },
  {
    slug: "commercial-junk-removal",
    category: "junk-removal",
    title: "Commercial Junk Removal",
    h1: "Commercial Junk Removal in Louisville, KY",
    metaTitle: "Commercial Junk Removal Louisville KY | Office, Retail, Warehouse",
    metaDescription:
      "Commercial junk removal for Louisville offices, retail stores, warehouses, restaurants, and property managers. Off-hours service available.",
    shortBlurb: "Offices, retail, restaurants, warehouses — cleared with minimal downtime.",
    intro: [
      "Business doesn't stop for cleanup, and we get that. Whether you're closing a location, refreshing a buildout, turning over an apartment, or just need a one-time clear-out of old equipment, we work around your operating hours and your team.",
      "We've cleared retail stores in Middletown, warehouses in Shively, and office suites downtown. After-hours and weekend service available on request.",
    ],
    whatsIncluded: ["Pre-scheduled crew sized to the job", "Off-hours and weekend service options", "Net 15 / Net 30 billing for established accounts", "Recycling of office furniture, electronics, and paper"],
    relatedSlugs: ["office-cleanouts", "property-management-cleanouts", "construction-debris-removal"],
  },
  {
    slug: "property-management-cleanouts",
    category: "junk-removal",
    title: "Property Management Turnovers",
    h1: "Property Management Turnover Cleanouts in Louisville, KY",
    metaTitle: "Property Manager Cleanouts Louisville KY | Apartment Turnovers",
    metaDescription:
      "Reliable apartment, rental, and HOA turnover cleanouts for Louisville property managers. Standing accounts, fast scheduling.",
    shortBlurb: "Apartments, rentals, HOA cleanouts — fast, repeat-friendly, billable to the company.",
    intro: [
      "We're a regular for several Louisville property managers because we do what we say we'll do, on the day we said we'd do it. Standing-account customers get priority scheduling, photo documentation, and consolidated monthly billing.",
    ],
    whatsIncluded: ["Apartment and SFR turnovers", "Eviction debris handling (no judgment, no drama)", "Standing-account scheduling priority", "Photo documentation on request", "Net 15/30 billing"],
    relatedSlugs: ["foreclosure-cleanouts", "move-out-cleanouts", "commercial-junk-removal"],
  },

  // -------- CLEANOUT SUB-SERVICES --------
  {
    slug: "hoarder-cleanouts",
    category: "cleanouts",
    title: "Hoarder House Cleanouts",
    h1: "Hoarder House Cleanouts in Louisville, KY",
    metaTitle: "Hoarder Cleanouts Louisville KY | Discreet, Compassionate",
    metaDescription:
      "Hoarder house cleanouts in Louisville and Southern Indiana. Discreet, compassionate, thorough. Free in-person walkthroughs.",
    shortBlurb: "Discreet, judgment-free, room-by-room. We've cleared every kind of situation.",
    intro: [
      "Hoarding cleanouts ask for a different kind of crew. Patience, discretion, and a respect for the people involved are non-negotiable. We start every job with a quiet on-site walkthrough — no commentary, no surprise — and lay out exactly what the plan will be.",
      "We sort as we go: anything valuable, sentimental, or salvageable gets set aside for the homeowner or family to review. Donatable goods get routed to local charities. Trash, debris, and unsalvageable items go to disposal.",
      "Jobs can take a day or a week. Either way, the property goes back to broom-clean condition.",
    ],
    whatsIncluded: ["Discreet, unmarked-truck option", "Sort-and-save for valuables and sentimental items", "Donation runs for usable goods", "PPE for the crew and odor mitigation", "Final broom-clean and walkthrough"],
    relatedSlugs: ["estate-cleanouts", "foreclosure-cleanouts", "cleanouts"],
  },
  {
    slug: "estate-cleanouts",
    category: "cleanouts",
    title: "Estate Cleanouts",
    h1: "Estate Cleanouts in Louisville, KY",
    metaTitle: "Estate Cleanouts Louisville KY | After-Probate Property Clearing",
    metaDescription:
      "Estate cleanouts in Louisville and Kentuckiana. Compassionate, thorough, sort-and-save approach. Coordinate with executors and realtors.",
    shortBlurb: "After-probate cleanouts handled with care — sort, save, donate, dispose.",
    intro: [
      "Closing out a parent's or relative's estate is hard enough without doing the heavy lifting yourself. We coordinate directly with executors, family members, and listing agents to clear a home on the schedule that fits the probate or sale timeline.",
      "Every estate gets a sort-first approach. Family heirlooms, documents, and photos get pulled aside for your review. Furniture and housewares in good shape go to donation partners. The rest is hauled and properly disposed of.",
    ],
    whatsIncluded: ["Realtor and executor coordination", "Sort-and-save for documents, photos, jewelry, valuables", "Donation routing for furniture and housewares", "Broom-clean finish ready for the listing"],
    relatedSlugs: ["hoarder-cleanouts", "foreclosure-cleanouts", "cleanouts"],
  },
  {
    slug: "garage-cleanouts",
    category: "cleanouts",
    title: "Garage Cleanouts",
    h1: "Garage Cleanouts in Louisville, KY",
    metaTitle: "Garage Cleanouts Louisville KY | Park Your Car Inside Again",
    metaDescription:
      "Garage cleanouts in Louisville and Kentuckiana. Reclaim your space in a single visit. Free quotes, volume pricing.",
    shortBlurb: "Get your garage back. Park the car inside again. Most jobs done in a single visit.",
    intro: [
      "Garages collect a decade of half-used paint cans, broken bikes, old patio furniture, and 'I'll get to it' projects. We sort, load, and clear — usually in one visit — so you can finally see the floor.",
    ],
    whatsIncluded: ["Full sort and load", "Recycling of metal, cardboard, and electronics", "Donation routing", "Sweep-out finish"],
    relatedSlugs: ["basement-cleanouts", "attic-cleanouts", "shed-demolition", "cleanouts"],
  },
  {
    slug: "basement-cleanouts",
    category: "cleanouts",
    title: "Basement Cleanouts",
    h1: "Basement Cleanouts in Louisville, KY",
    metaTitle: "Basement Cleanouts Louisville KY | Damp, Cluttered, Done",
    metaDescription:
      "Basement cleanouts in Louisville. Old furniture, boxes, water-damaged items, and forgotten clutter — hauled out and gone.",
    shortBlurb: "Old furniture, soggy boxes, mystery clutter — out the door, up the stairs, gone.",
    intro: [
      "Louisville basements run the gamut from finished media rooms to damp storage caves. We've worked them all. Narrow stairwells, low ceilings, and tight turns don't slow us down — we bring the right gear and the right crew size.",
      "After flood damage or water issues, we can also clear out water-damaged drywall, carpet, and furniture so the restoration trade can move in.",
    ],
    whatsIncluded: ["Two-to-three-person crew sized for stairwell carries", "Floor protection on the way out", "Water-damaged debris OK", "Sweep-out finish"],
    relatedSlugs: ["attic-cleanouts", "garage-cleanouts", "construction-debris-removal", "cleanouts"],
  },
  {
    slug: "attic-cleanouts",
    category: "cleanouts",
    title: "Attic Cleanouts",
    h1: "Attic Cleanouts in Louisville, KY",
    metaTitle: "Attic Cleanouts Louisville KY | Decades of Storage, Gone",
    metaDescription:
      "Attic cleanouts in Louisville. Decades of stored boxes, old insulation, broken furniture — carried down, hauled away.",
    shortBlurb: "Pull-down stairs, low rafters, decades of boxes — we'll bring it all down.",
    intro: [
      "Attics are where things go to be forgotten. Holiday decorations from 1998, kids' art projects, broken lamps, mystery boxes. We bring the patience and the upper-body endurance for pull-down stairs and tight rafter spaces.",
    ],
    whatsIncluded: ["Hand-carry from attic to truck", "Floor protection on stairs and landings", "Sort-and-save for sentimental finds", "Sweep-up after the haul"],
    relatedSlugs: ["basement-cleanouts", "garage-cleanouts", "cleanouts"],
  },
  {
    slug: "storage-unit-cleanouts",
    category: "cleanouts",
    title: "Storage Unit Cleanouts",
    h1: "Storage Unit Cleanouts in Louisville, KY",
    metaTitle: "Storage Unit Cleanouts Louisville KY | Stop Paying Rent",
    metaDescription:
      "Storage unit cleanouts across Louisville and Southern Indiana. Clear the unit, stop the auto-pay, free your weekend.",
    shortBlurb: "Empty the unit, stop the auto-pay, and stop driving across town to check on it.",
    intro: [
      "If your monthly storage bill outgrew the value of what's inside, we'll clear it out for you. We meet you at the unit, sort what's worth keeping, donate what's usable, haul the rest.",
    ],
    whatsIncluded: ["Meet at any storage facility in our service area", "Sort, donate, and dispose", "Final lock-up and walk-around"],
    relatedSlugs: ["estate-cleanouts", "move-out-cleanouts", "cleanouts"],
  },
  {
    slug: "office-cleanouts",
    category: "cleanouts",
    title: "Office Cleanouts",
    h1: "Office Cleanouts in Louisville, KY",
    metaTitle: "Office Cleanouts Louisville KY | Furniture, Cubicles, Electronics",
    metaDescription:
      "Office cleanouts in Louisville — desks, cubicles, file cabinets, electronics. After-hours service available.",
    shortBlurb: "Desks, cubicles, files, server racks — cleared off-hours so business doesn't stop.",
    intro: [
      "Whether you're downsizing, relocating, or closing a location, we clear offices on your schedule. After-hours and weekend service is standard so your team's workday isn't interrupted.",
    ],
    whatsIncluded: ["Off-hours and weekend availability", "Cubicle disassembly", "Document shredding referrals", "E-waste handling for electronics", "Building loading-dock or freight-elevator coordination"],
    relatedSlugs: ["commercial-junk-removal", "tv-electronics-removal", "cleanouts"],
  },
  {
    slug: "foreclosure-cleanouts",
    category: "cleanouts",
    title: "Foreclosure & Eviction Cleanouts",
    h1: "Foreclosure & Eviction Cleanouts in Louisville, KY",
    metaTitle: "Foreclosure Cleanouts Louisville KY | Eviction Property Clearing",
    metaDescription:
      "Foreclosure and eviction cleanouts in Louisville. Banks, REO firms, landlords. Fast turnaround, professional handling.",
    shortBlurb: "REO, eviction, and trash-out work for banks, asset managers, and landlords.",
    intro: [
      "Foreclosure and eviction cleanouts call for speed and a steady hand. We work with banks, REO firms, asset managers, and landlords across Louisville and Southern Indiana to flip properties from 'just abandoned' to 'broom-clean and ready for the locksmith.'",
    ],
    whatsIncluded: ["Full trash-out", "Photo documentation before / after", "Coordination with locksmiths and inspectors", "Net 15 / Net 30 billing for accounts"],
    relatedSlugs: ["property-management-cleanouts", "hoarder-cleanouts", "cleanouts"],
  },
  {
    slug: "move-out-cleanouts",
    category: "cleanouts",
    title: "Move-Out Cleanouts",
    h1: "Move-Out Cleanouts in Louisville, KY",
    metaTitle: "Move-Out Cleanouts Louisville KY | Get Your Deposit Back",
    metaDescription:
      "Move-out cleanouts in Louisville. Old furniture and clutter left behind — hauled before the final walkthrough.",
    shortBlurb: "The stuff the movers wouldn't take. Gone before the final walkthrough.",
    intro: [
      "Every move generates a pile of stuff the movers wouldn't load — broken furniture, half-empty boxes, the closet you never opened. We come in after the truck pulls away and clear what's left so the next chapter starts clean.",
    ],
    whatsIncluded: ["Same-day or next-day pickup", "Sweep-up finish", "Donation routing"],
    relatedSlugs: ["furniture-removal", "mattress-removal", "cleanouts"],
  },

  // -------- DEMOLITION SUB-SERVICES --------
  {
    slug: "shed-demolition",
    category: "demolition",
    title: "Shed Demolition",
    h1: "Shed Demolition & Removal in Louisville, KY",
    metaTitle: "Shed Demolition Louisville KY | Tear-Down & Haul-Off",
    metaDescription:
      "Wood and metal shed demolition in Louisville. Hand-disassemble, haul off, leave the site clean. Free quotes.",
    shortBlurb: "Backyard sheds disassembled by hand, every board hauled away.",
    intro: [
      "Old wood and metal sheds get hand-disassembled board by board — much cleaner than knocking them over and dragging the pile. Concrete pads can stay or go; let us know which.",
    ],
    whatsIncluded: ["Hand-disassembly", "All lumber, roofing, hardware hauled", "Nail and screw sweep", "Optional concrete pad removal (priced separately)"],
    relatedSlugs: ["deck-demolition", "fence-removal", "demolition"],
  },
  {
    slug: "deck-demolition",
    category: "demolition",
    title: "Deck Demolition",
    h1: "Deck Demolition & Removal in Louisville, KY",
    metaTitle: "Deck Demolition Louisville KY | Tear-Off & Haul-Off",
    metaDescription:
      "Wood and composite deck demolition in Louisville. Tear down, haul off, sweep up. Free quotes, same-week scheduling.",
    shortBlurb: "Rotted, rickety, or just outdated — torn down, hauled off, ground left clean.",
    intro: [
      "Decks are one of our most-requested demo jobs. Whether yours has rotted out, your building plans require it to come down, or you're replacing it with a patio, we tear it off the house cleanly and take every board with us.",
    ],
    whatsIncluded: ["Tear-off down to ledger or footings", "All lumber, screws, hardware hauled", "Nail sweep of the area", "Footings / posts removable on request"],
    relatedSlugs: ["shed-demolition", "fence-removal", "interior-demolition", "demolition"],
  },
  {
    slug: "fence-removal",
    category: "demolition",
    title: "Fence Removal",
    h1: "Fence Removal in Louisville, KY",
    metaTitle: "Fence Removal Louisville KY | Wood, Chain-Link, Vinyl",
    metaDescription:
      "Wood, chain-link, and vinyl fence removal in Louisville. Post-and-all or panels only. Free quotes.",
    shortBlurb: "Old fence panels and posts pulled and hauled — including concrete-set posts.",
    intro: [
      "Wood, chain-link, vinyl — we pull them all. Concrete-footed posts come up with our gear, and we haul off every panel and post in the same visit.",
    ],
    whatsIncluded: ["Panel removal", "Post pulling (including concrete-footed)", "Hole back-fill on request", "Full debris haul"],
    relatedSlugs: ["deck-demolition", "shed-demolition", "demolition"],
  },
  {
    slug: "above-ground-pool-removal",
    category: "demolition",
    title: "Above-Ground Pool Removal",
    h1: "Above-Ground Pool Removal in Louisville, KY",
    metaTitle: "Above-Ground Pool Removal Louisville KY | Drain, Dismantle, Haul",
    metaDescription:
      "Above-ground pool removal in Louisville. Drain, dismantle, haul off, restore the yard. Free quotes.",
    shortBlurb: "Drain, dismantle, haul off. Yard back open for whatever's next.",
    intro: [
      "Above-ground pools are easier to put up than take down. We drain, cut, dismantle, and haul every piece — liner, walls, decking, ladders — so the yard is clear and ready for grass seed.",
    ],
    whatsIncluded: ["Drain coordination", "Cut and dismantle", "Full debris haul including liner and walls", "Optional surrounding deck demo"],
    relatedSlugs: ["hot-tub-removal", "deck-demolition", "demolition"],
  },
  {
    slug: "interior-demolition",
    category: "demolition",
    title: "Light Interior Demolition",
    h1: "Light Interior Demolition in Louisville, KY",
    metaTitle: "Interior Demolition Louisville KY | Kitchens, Baths, Floors",
    metaDescription:
      "Light interior demolition in Louisville — kitchens, bathrooms, flooring, drywall. Tear-out and haul in one visit.",
    shortBlurb: "Kitchens, baths, flooring, drywall — torn out cleanly so the remodel can start.",
    intro: [
      "Renovation projects move faster when demo and debris removal happen in one trip. We handle non-load-bearing interior tear-outs — cabinets, countertops, flooring, drywall, tile — and haul every piece out the same day.",
      "We work alongside homeowners and contractors. Tell us what stays and what goes; we'll handle the rest.",
    ],
    whatsIncluded: ["Cabinet, countertop, vanity removal", "Flooring and tile tear-out", "Drywall tear-out (non-structural)", "All debris hauled the same day"],
    relatedSlugs: ["construction-debris-removal", "deck-demolition", "demolition"],
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));
export const SERVICES_BY_CATEGORY = SERVICE_CATEGORIES.map((c) => ({
  ...c,
  services: SERVICES.filter((s) => s.category === c.slug && s.slug !== c.slug),
  hub: SERVICES.find((s) => s.slug === c.slug)!,
}));
