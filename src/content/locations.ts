export type Location = {
  slug: string;
  name: string;
  fullName: string;
  type: "city" | "neighborhood";
  state: "KY" | "IN";
  county: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  highlights: string[]; // landmarks
  neighborhoods?: string[]; // sub-neighborhoods/areas
  roads: string[];
};

export const LOCATIONS: Location[] = [
  // ============ KY CITIES ============
  {
    slug: "louisville",
    name: "Louisville",
    fullName: "Louisville, KY",
    type: "city",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal Louisville KY | 502 Junk Dept.",
    metaDescription:
      "Locally owned junk removal, cleanouts, and demolition serving every Louisville zip code. Same-day pickup, upfront pricing. Call (502) 501-9299.",
    intro:
      "Louisville is our backyard. We run trucks across Jefferson County from the river to the Watterson, and we know the city's quirks — the narrow alleys behind Bardstown Road, the steep driveways in the Highlands, the loading docks behind the buildings on Main Street. Whatever you've got to move, we've probably moved it from a Louisville address already.",
    highlights: ["Churchill Downs", "Louisville Slugger Museum", "Big Four Bridge", "Waterfront Park", "Muhammad Ali Center", "KFC Yum! Center", "Mega Cavern", "Iroquois Park"],
    neighborhoods: ["Highlands", "NuLu", "Old Louisville", "Crescent Hill", "Clifton", "Germantown", "St. Matthews", "Portland", "Butchertown", "Cherokee Triangle"],
    roads: ["Bardstown Rd", "Frankfort Ave", "Dixie Hwy", "Preston Hwy", "Shelbyville Rd", "I-64", "I-65", "I-264 (Watterson Expressway)", "I-265 (Gene Snyder)"],
  },
  {
    slug: "st-matthews",
    name: "St. Matthews",
    fullName: "St. Matthews, KY",
    type: "city",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal St. Matthews KY | 502 Junk Dept.",
    metaDescription:
      "Same-day junk removal and cleanouts in St. Matthews, KY. Furniture, appliances, garages, basements. Free quotes — (502) 501-9299.",
    intro:
      "St. Matthews homes mix mid-century ranches, Cape Cods, and newer builds along Shelbyville Road and Westport Road, and basement cleanouts are our most-frequent call in the neighborhood. We work fast off Chenoweth Lane, Breckenridge Lane, and the Mall St. Matthews corridor.",
    highlights: ["Mall St. Matthews", "Oxmoor Center", "Brown Park", "Beargrass Creek", "Seneca Park (adjacent)"],
    neighborhoods: ["Browns Lane", "Westport Village", "Cherokee Seneca", "Mockingbird Valley", "Norbourne Estates"],
    roads: ["Shelbyville Rd", "Westport Rd", "Chenoweth Ln", "Breckenridge Ln", "I-264"],
  },
  {
    slug: "jeffersontown",
    name: "Jeffersontown",
    fullName: "Jeffersontown, KY",
    type: "city",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal Jeffersontown KY (J-town) | 502 Junk Dept.",
    metaDescription:
      "Junk removal and cleanouts in Jeffersontown / J-town. Garages, basements, furniture, appliances. Same-day service available.",
    intro:
      "J-town is a long-haul service area for us — we cover everything from the Bluegrass Industrial Park down to Taylorsville Lake Road. Plenty of two-car garage cleanouts and patio-furniture hauls in the subdivisions off Six Mile Lane and Watterson Trail.",
    highlights: ["Jeffersontown Veterans Memorial Park", "Skyview Park", "Bluegrass Industrial Park", "Charlie Vettiner Park"],
    neighborhoods: ["Plantside", "Tucker Station", "Forest Springs", "Watterson Woods", "Skyview"],
    roads: ["Taylorsville Rd", "Six Mile Ln", "Watterson Trail", "Bluegrass Pkwy", "Hurstbourne Pkwy"],
  },
  {
    slug: "lyndon",
    name: "Lyndon",
    fullName: "Lyndon, KY",
    type: "city",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal Lyndon KY | 502 Junk Dept.",
    metaDescription:
      "Junk removal, garage cleanouts, and appliance haul-off in Lyndon, KY. Same-day pickup available — (502) 501-9299.",
    intro:
      "Lyndon sits just north of Westport Road, and we work it constantly — small lots, older trees, plenty of one-car-garages packed three years deep. Whitfield Avenue, Robinwood Avenue, the whole Lyndon Lane corridor.",
    highlights: ["Robsion Park", "Lyndon Lane Park", "Westport Village (nearby)"],
    neighborhoods: ["Old Lyndon", "Whitfield", "Robinwood"],
    roads: ["Westport Rd", "LaGrange Rd", "Lyndon Ln", "New LaGrange Rd"],
  },
  {
    slug: "middletown",
    name: "Middletown",
    fullName: "Middletown, KY",
    type: "city",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal Middletown KY | 502 Junk Dept.",
    metaDescription:
      "Junk removal, demolition, and cleanouts in Middletown, KY. Sheds, decks, appliances, full property cleanouts. Free quotes.",
    intro:
      "Middletown stretches from the Watterson out to the Gene Snyder, and we cover the whole spread — Shelbyville Road, Old Henry, Aiken Road. Plenty of shed demos and deck tear-offs in the back yards out here.",
    highlights: ["Middletown Square", "The Forum at Brookside (nearby)", "Beckley Creek Park", "Parklands of Floyds Fork"],
    neighborhoods: ["Old Middletown", "Springhurst (border)", "Lake Forest"],
    roads: ["Shelbyville Rd", "Old Henry Rd", "Aiken Rd", "Evergreen Rd", "I-265 (Gene Snyder)"],
  },
  {
    slug: "anchorage",
    name: "Anchorage",
    fullName: "Anchorage, KY",
    type: "city",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal Anchorage KY | 502 Junk Dept.",
    metaDescription:
      "Discreet, professional junk removal and estate cleanouts in Anchorage, KY. Large-property specialists. Free quotes.",
    intro:
      "Anchorage runs on big lots, mature trees, and longer driveways. We've cleared coach houses, pool houses, and full estate properties out here. Discretion and care for the grounds are non-negotiable — and we know how to back a truck down a quarter-mile drive without leaving ruts.",
    highlights: ["Anchorage Trail", "Owl Creek Country Club (nearby)", "Anchorage Public School (historic)"],
    neighborhoods: ["Owl Creek", "Bellewood", "Mockingbird Gardens (nearby)"],
    roads: ["Evergreen Rd", "Old Harrods Creek Rd", "Bellewood Rd", "LaGrange Rd"],
  },
  {
    slug: "prospect",
    name: "Prospect",
    fullName: "Prospect, KY",
    type: "city",
    state: "KY",
    county: "Jefferson / Oldham",
    metaTitle: "Junk Removal Prospect KY | 502 Junk Dept.",
    metaDescription:
      "Junk removal, hot tub removal, and large-property cleanouts in Prospect, KY. Free estimates — (502) 501-9299.",
    intro:
      "Prospect properties skew larger — three-car garages, finished basements, big back yards with hot tubs, sheds, and the occasional above-ground pool. We get out there often, especially along US-42 and Wolf Pen Branch.",
    highlights: ["Hunting Creek Country Club", "Harrods Creek", "Captain's Quarters Riverside Grille area"],
    neighborhoods: ["Hunting Creek", "Glen Oaks", "River Bluffs", "Westwind"],
    roads: ["US-42 (Brownsboro Rd)", "Wolf Pen Branch Rd", "Covered Bridge Rd"],
  },
  {
    slug: "hurstbourne",
    name: "Hurstbourne",
    fullName: "Hurstbourne, KY",
    type: "city",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal Hurstbourne KY | 502 Junk Dept.",
    metaDescription:
      "Junk removal, garage cleanouts, and office-building cleanouts in Hurstbourne and along Hurstbourne Parkway.",
    intro:
      "Hurstbourne is a working corridor for us — office park cleanouts, condo turnovers, and residential furniture removal along the Hurstbourne Parkway / Linn Station Road area.",
    highlights: ["Hurstbourne Country Club", "Linn Station office corridor", "The Summit shopping center"],
    neighborhoods: ["Lake Forest (adjacent)", "Stonelake", "Hurstbourne Estates"],
    roads: ["Hurstbourne Pkwy", "Linn Station Rd", "Shelbyville Rd"],
  },
  {
    slug: "fern-creek",
    name: "Fern Creek",
    fullName: "Fern Creek, KY",
    type: "city",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal Fern Creek KY | 502 Junk Dept.",
    metaDescription:
      "Junk removal, basement cleanouts, and yard waste hauling in Fern Creek, KY. Same-day pickup available.",
    intro:
      "Fern Creek's the southeastern stretch out toward Bardstown Road — lots of older subdivisions, mature trees, deep garages, and the occasional back-yard barn. We're here constantly.",
    highlights: ["Fern Creek Park", "Cooper Memorial Cemetery", "Beckley Creek Park (adjacent)"],
    neighborhoods: ["Mary Helen", "Hikes Point (adjacent)", "Buechel (adjacent)"],
    roads: ["Bardstown Rd", "Fern Valley Rd", "Beulah Church Rd", "I-265 (Gene Snyder)"],
  },
  {
    slug: "okolona",
    name: "Okolona",
    fullName: "Okolona, KY",
    type: "city",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal Okolona KY | 502 Junk Dept.",
    metaDescription:
      "Junk removal, appliance pickup, and property cleanouts in Okolona, KY. Volume pricing, free quotes.",
    intro:
      "Okolona stretches along Preston Highway and Outer Loop, and it's one of our busiest service areas — lots of mid-century homes, established families, and decades of accumulated stuff finally heading out the door.",
    highlights: ["Jefferson Mall (adjacent)", "Iroquois Park (nearby)", "Buechel Park"],
    neighborhoods: ["Auburndale", "Hazelwood", "South Park"],
    roads: ["Preston Hwy", "Outer Loop", "Fern Valley Rd", "I-65"],
  },
  {
    slug: "shively",
    name: "Shively",
    fullName: "Shively, KY",
    type: "city",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal Shively KY | 502 Junk Dept.",
    metaDescription:
      "Junk removal, foreclosure cleanouts, and commercial junk hauling in Shively, KY. Free quotes.",
    intro:
      "Shively runs the corridor along Dixie Highway just southwest of downtown Louisville. We do a lot of property turnovers and commercial cleanouts out here, plus standard residential furniture and appliance hauls.",
    highlights: ["Shively Community Center", "Bobby Nichols Golf Course (nearby)", "Stop Six (historic district)"],
    neighborhoods: ["Wyandotte Park", "Cane Run", "Park Hill"],
    roads: ["Dixie Hwy", "Cane Run Rd", "Crums Ln", "I-264"],
  },
  {
    slug: "pleasure-ridge-park",
    name: "Pleasure Ridge Park",
    fullName: "Pleasure Ridge Park, KY",
    type: "city",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal Pleasure Ridge Park (PRP) | 502 Junk Dept.",
    metaDescription:
      "Junk removal and cleanouts in Pleasure Ridge Park (PRP). Free quotes, same-day service available.",
    intro:
      "PRP sits along Dixie Highway south of Shively, and the neighborhoods are full of long-tenured families with garages and basements that need a serious purge. We're frequent fliers along Cane Run, Greenwood, and Lower Hunters Trace.",
    highlights: ["Riverview Park", "Pleasure Ridge Park", "Dixie Highway corridor"],
    neighborhoods: ["Greenwood", "Lower Hunters Trace area", "Lake Dreamland"],
    roads: ["Dixie Hwy", "Greenwood Rd", "Lower Hunters Trace", "Cane Run Rd"],
  },
  {
    slug: "valley-station",
    name: "Valley Station",
    fullName: "Valley Station, KY",
    type: "city",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal Valley Station KY | 502 Junk Dept.",
    metaDescription:
      "Junk removal and cleanouts in Valley Station, KY. Same-day pickup, volume pricing, free quotes.",
    intro:
      "Valley Station stretches south along Dixie Highway and the Ohio River. Lots of single-family homes with big yards out here — yard-waste hauls, shed tear-downs, and full garage cleanouts are weekly work for us.",
    highlights: ["Riverside Gardens", "Riverside, the Farnsley-Moremen Landing", "Waverly Park"],
    neighborhoods: ["Riverside Gardens", "Pleasure Ridge area", "Stonestreet"],
    roads: ["Dixie Hwy", "Stonestreet Rd", "Lower River Rd"],
  },
  {
    slug: "fairdale",
    name: "Fairdale",
    fullName: "Fairdale, KY",
    type: "city",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal Fairdale KY | 502 Junk Dept.",
    metaDescription:
      "Junk removal, brush hauling, and rural-property cleanouts in Fairdale, KY. Free quotes — (502) 501-9299.",
    intro:
      "Fairdale's tucked at the southern edge of Jefferson County near Jefferson Memorial Forest, and rural-property cleanouts are common — barns, sheds, outbuildings, plus seasonal yard waste hauls.",
    highlights: ["Jefferson Memorial Forest", "Mitchell Hill Lake", "Coral Ridge Rd corridor"],
    neighborhoods: ["Hillview (adjacent)", "Kosmosdale (nearby)"],
    roads: ["Coral Ridge Rd", "Mitchell Hill Rd", "Manslick Rd"],
  },
  {
    slug: "goshen",
    name: "Goshen",
    fullName: "Goshen, KY",
    type: "city",
    state: "KY",
    county: "Oldham",
    metaTitle: "Junk Removal Goshen KY | 502 Junk Dept.",
    metaDescription:
      "Junk removal, estate cleanouts, and large-property work in Goshen, KY. Discreet, professional service.",
    intro:
      "Goshen along the Ohio River in Oldham County is mostly large-lot estates, horse properties, and equestrian setups. We're set up for the long driveways and the careful work this kind of property demands.",
    highlights: ["Hermitage Farm", "Yew Dell Botanical Gardens (nearby)", "Ohio River shoreline"],
    neighborhoods: ["River Bluffs", "Westport Rd corridor"],
    roads: ["US-42", "Wolf Pen Branch Rd", "Old Westport Rd"],
  },
  {
    slug: "la-grange",
    name: "La Grange",
    fullName: "La Grange, KY",
    type: "city",
    state: "KY",
    county: "Oldham",
    metaTitle: "Junk Removal La Grange KY | 502 Junk Dept.",
    metaDescription:
      "Junk removal, basement cleanouts, and demolition in La Grange, KY (Oldham County). Free quotes.",
    intro:
      "La Grange is the Oldham County seat and runs on a charming Main Street with trains rolling right down the middle. We work La Grange residential and the surrounding farmland regularly — appliance hauls, attic cleanouts, and the occasional barn purge.",
    highlights: ["La Grange Railroad Museum", "Oldham County Courthouse", "Old La Grange downtown"],
    neighborhoods: ["Historic downtown La Grange", "Stonewall", "Bluegrass Pkwy area"],
    roads: ["Hwy 53", "Old Hwy 146", "I-71"],
  },
  {
    slug: "crestwood",
    name: "Crestwood",
    fullName: "Crestwood, KY",
    type: "city",
    state: "KY",
    county: "Oldham",
    metaTitle: "Junk Removal Crestwood KY | 502 Junk Dept.",
    metaDescription:
      "Junk removal, shed demolition, and garage cleanouts in Crestwood, KY. Volume pricing, free quotes.",
    intro:
      "Crestwood in Oldham County is full of newer subdivisions and growing families — translation: garages stuffed with the last decade of life, plus a lot of swingsets and trampolines reaching the end of their run.",
    highlights: ["South Oldham High area", "Floydsburg Cemetery", "Briar Hill Park"],
    neighborhoods: ["Floydsburg", "Briar Hill", "South Oldham"],
    roads: ["Hwy 22 (Crestwood Rd)", "I-71", "Old Hwy 146"],
  },
  {
    slug: "pewee-valley",
    name: "Pewee Valley",
    fullName: "Pewee Valley, KY",
    type: "city",
    state: "KY",
    county: "Oldham",
    metaTitle: "Junk Removal Pewee Valley KY | 502 Junk Dept.",
    metaDescription:
      "Junk removal and estate cleanouts in historic Pewee Valley, KY. Discreet, professional service.",
    intro:
      "Pewee Valley is small, historic, and full of beautiful old homes — many of them inherited and ready for a careful clear-out. We work the area with extra care for original details.",
    highlights: ["Historic Pewee Valley (Annie Fellows Johnston / Little Colonel)", "St. Aloysius Church"],
    neighborhoods: ["Historic Pewee Valley"],
    roads: ["Old Floydsburg Rd", "LaGrange Rd", "Hwy 22"],
  },
  {
    slug: "mt-washington",
    name: "Mt. Washington",
    fullName: "Mt. Washington, KY",
    type: "city",
    state: "KY",
    county: "Bullitt",
    metaTitle: "Junk Removal Mt. Washington KY | 502 Junk Dept.",
    metaDescription:
      "Junk removal, garage cleanouts, and demolition in Mt. Washington, KY (Bullitt County). Free quotes.",
    intro:
      "Mt. Washington's grown fast over the last decade — newer subdivisions, two-car garages, finished basements. We cover the area constantly off Bardstown Road and the Gene Snyder.",
    highlights: ["Crystal Springs Park", "Mt. Washington City Park", "Paroquet Springs Conference Center (nearby)"],
    neighborhoods: ["Stillwood", "Glades", "Crystal Springs"],
    roads: ["Bardstown Rd", "Hwy 44", "I-265 (Gene Snyder)", "Hwy 480"],
  },
  {
    slug: "shepherdsville",
    name: "Shepherdsville",
    fullName: "Shepherdsville, KY",
    type: "city",
    state: "KY",
    county: "Bullitt",
    metaTitle: "Junk Removal Shepherdsville KY | 502 Junk Dept.",
    metaDescription:
      "Junk removal, foreclosure cleanouts, and commercial hauling in Shepherdsville, KY. Same-day available.",
    intro:
      "Shepherdsville is the Bullitt County seat and sits right on I-65 — easy reach for us, and a busy service area for both residential and commercial cleanouts.",
    highlights: ["Bullitt County Courthouse", "Bernheim Forest (nearby)", "Paroquet Springs Conference Center"],
    neighborhoods: ["Hillview (adjacent)", "Pioneer Village (adjacent)"],
    roads: ["I-65", "Hwy 44", "Preston Hwy"],
  },
  {
    slug: "brandenburg",
    name: "Brandenburg",
    fullName: "Brandenburg, KY",
    type: "city",
    state: "KY",
    county: "Meade",
    metaTitle: "Junk Removal Brandenburg KY | 502 Junk Dept.",
    metaDescription:
      "Junk removal, rural property cleanouts, and shed demolition in Brandenburg, KY (Meade County). Free quotes.",
    intro:
      "Brandenburg sits along the Ohio River in Meade County, and we cover it for larger rural cleanouts, outbuilding demolition, and seasonal yard-waste hauls.",
    highlights: ["Buttermilk Falls", "Otter Creek Park", "Meade County Courthouse"],
    neighborhoods: ["Downtown Brandenburg", "Doe Run"],
    roads: ["Hwy 79", "Hwy 144", "Hwy 1638"],
  },

  // ============ LOUISVILLE NEIGHBORHOODS ============
  {
    slug: "highlands",
    name: "Highlands",
    fullName: "The Highlands, Louisville KY",
    type: "neighborhood",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal Highlands Louisville | 502 Junk Dept.",
    metaDescription:
      "Junk removal and cleanouts in the Highlands. Old houses, tight stairwells, narrow driveways — we know the neighborhood.",
    intro:
      "The Highlands' shotgun houses, Victorians, and Craftsman bungalows along Bardstown Road have basements with low ceilings and stairwells that turn at the wrong angle. We've moved everything you can imagine in and out of these places.",
    highlights: ["Cherokee Park", "Bardstown Road", "Cherokee Triangle", "Bardstown Road Aglow", "Tyler Park"],
    roads: ["Bardstown Rd", "Baxter Ave", "Eastern Pkwy", "Lexington Rd"],
  },
  {
    slug: "nulu",
    name: "NuLu",
    fullName: "NuLu (New Louisville), Louisville KY",
    type: "neighborhood",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal NuLu Louisville | 502 Junk Dept.",
    metaDescription:
      "Junk removal and commercial cleanouts in NuLu. Restaurant turnovers, retail debris, condo move-outs.",
    intro:
      "NuLu (the East Market District) runs on restaurants, retail, design shops, and converted lofts. We do regular commercial junk runs along East Market Street and condo move-outs in the upper floors above the storefronts.",
    highlights: ["East Market Street", "Logan Street Market", "Garage Bar / NuLu Marketplace", "Butchertown (adjacent)"],
    roads: ["E Market St", "Hancock St", "Story Ave"],
  },
  {
    slug: "old-louisville",
    name: "Old Louisville",
    fullName: "Old Louisville",
    type: "neighborhood",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal Old Louisville | 502 Junk Dept.",
    metaDescription:
      "Junk removal and estate cleanouts in Old Louisville. Historic mansions, tight streets, third-floor walk-outs.",
    intro:
      "Old Louisville's Victorian mansions are gorgeous and a logistical workout — three-story carry-outs, narrow service entrances, original stairs you absolutely cannot scrape. We work carefully and patiently down here.",
    highlights: ["St. James Court", "Central Park", "Speed Art Museum", "U of L Belknap Campus", "Old Louisville Historic District"],
    roads: ["S 4th St", "Magnolia Ave", "Oak St", "Ormsby Ave"],
  },
  {
    slug: "crescent-hill",
    name: "Crescent Hill",
    fullName: "Crescent Hill, Louisville KY",
    type: "neighborhood",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal Crescent Hill Louisville | 502 Junk Dept.",
    metaDescription:
      "Junk removal, basement cleanouts, and furniture haul-off in Crescent Hill. Same-day pickup available.",
    intro:
      "Crescent Hill along Frankfort Avenue is a mix of Craftsman houses, foursquares, and shotgun homes — most with low-ceiling basements that fill up over the decades. We're here weekly.",
    highlights: ["Crescent Hill Reservoir", "Peterson-Dumesnil House", "Frankfort Avenue"],
    roads: ["Frankfort Ave", "Lexington Rd", "Brownsboro Rd"],
  },
  {
    slug: "clifton",
    name: "Clifton",
    fullName: "Clifton, Louisville KY",
    type: "neighborhood",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal Clifton Louisville | 502 Junk Dept.",
    metaDescription:
      "Junk removal and cleanouts in Clifton, Louisville. Shotgun houses, old basements, narrow side yards.",
    intro:
      "Clifton sits between Frankfort Ave and Brownsboro, full of restored shotgun houses and small storefronts. We work the area constantly and we know how to fit a truck on the narrow side streets.",
    highlights: ["Frankfort Avenue corridor", "Saints Pizza Pub corner", "Clifton Center"],
    roads: ["Frankfort Ave", "Brownsboro Rd", "Mellwood Ave"],
  },
  {
    slug: "germantown",
    name: "Germantown",
    fullName: "Germantown, Louisville KY",
    type: "neighborhood",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal Germantown Louisville | 502 Junk Dept.",
    metaDescription:
      "Junk removal and cleanouts in Germantown, Louisville. Shotgun houses, tight alleys, old fixtures hauled off.",
    intro:
      "Germantown's tight grid of shotgun houses and brick storefronts is one of our favorite parts of the city to work in. We know which alleys are wide enough for the truck and which call for a hand-cart.",
    highlights: ["Germantown Mill Lofts", "The Post (Goss Avenue)", "Lydia House (historic)"],
    roads: ["Goss Ave", "Shelby St", "Texas Ave"],
  },
  {
    slug: "schnitzelburg",
    name: "Schnitzelburg",
    fullName: "Schnitzelburg, Louisville KY",
    type: "neighborhood",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal Schnitzelburg Louisville | 502 Junk Dept.",
    metaDescription:
      "Junk removal and cleanouts in Schnitzelburg, Louisville. Shotgun houses, small lots, big history.",
    intro:
      "Schnitzelburg sits south of Germantown — small lots, tight blocks, and a tight-knit feel. We work the neighborhood often, including the houses around Hauck's Corner and Goss Avenue.",
    highlights: ["Hauck's Corner", "Goss Avenue", "Germantown Mill Lofts (adjacent)"],
    roads: ["Goss Ave", "Hickory St", "Texas Ave"],
  },
  {
    slug: "portland",
    name: "Portland",
    fullName: "Portland, Louisville KY",
    type: "neighborhood",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal Portland Louisville | 502 Junk Dept.",
    metaDescription:
      "Junk removal, foreclosure cleanouts, and property turnovers in Portland, Louisville.",
    intro:
      "Portland along the Ohio River west of downtown has gone through major changes. We're often called for property turnovers, foreclosure cleanouts, and rehabs in progress along Northwestern Parkway and Portland Avenue.",
    highlights: ["Portland Wharf Park", "Portland Museum", "Ohio River shoreline"],
    roads: ["Portland Ave", "Northwestern Pkwy", "26th St"],
  },
  {
    slug: "butchertown",
    name: "Butchertown",
    fullName: "Butchertown, Louisville KY",
    type: "neighborhood",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal Butchertown Louisville | 502 Junk Dept.",
    metaDescription:
      "Junk removal, restaurant cleanouts, and condo turnovers in Butchertown, Louisville.",
    intro:
      "Butchertown blends warehouses, breweries, distilleries, and restored worker houses. We handle both residential and commercial calls here — and yes, we've cleared out our share of distillery scrap.",
    highlights: ["Copper & Kings Distillery", "Butchertown Market", "Beargrass Creek"],
    roads: ["Story Ave", "Frankfort Ave", "Mellwood Ave"],
  },
  {
    slug: "cherokee-triangle",
    name: "Cherokee Triangle",
    fullName: "Cherokee Triangle, Louisville KY",
    type: "neighborhood",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal Cherokee Triangle Louisville | 502 Junk Dept.",
    metaDescription:
      "Junk removal and estate cleanouts in Cherokee Triangle, Louisville. Historic homes handled with care.",
    intro:
      "Cherokee Triangle along the edge of Cherokee Park is full of beautifully kept historic homes — and the basements and carriage houses behind them frequently hold a century of accumulation. We're careful with the details.",
    highlights: ["Cherokee Park", "Daniel Boone statue", "Hogan's Fountain", "Big Rock"],
    roads: ["Cherokee Pkwy", "Cherokee Rd", "Eastern Pkwy", "Bardstown Rd"],
  },
  {
    slug: "audubon-park",
    name: "Audubon Park",
    fullName: "Audubon Park, Louisville KY",
    type: "neighborhood",
    state: "KY",
    county: "Jefferson",
    metaTitle: "Junk Removal Audubon Park Louisville | 502 Junk Dept.",
    metaDescription:
      "Junk removal, garage cleanouts, and large-tree yard waste removal in Audubon Park, Louisville.",
    intro:
      "Audubon Park's tree-lined streets and 1920s brick homes call for careful work — original hardwoods, narrow driveways, and tall mature oaks that drop a lot of brush every storm. We're frequent visitors.",
    highlights: ["Audubon Country Club", "Lone Oak", "Preston Hwy corridor"],
    roads: ["Preston Hwy", "Eastern Pkwy", "Buechel Bank Rd"],
  },

  // ============ SOUTHERN INDIANA ============
  {
    slug: "jeffersonville",
    name: "Jeffersonville",
    fullName: "Jeffersonville, IN",
    type: "city",
    state: "IN",
    county: "Clark",
    metaTitle: "Junk Removal Jeffersonville IN | 502 Junk Dept.",
    metaDescription:
      "Junk removal and cleanouts in Jeffersonville, Indiana. Big Four Bridge area, downtown, NoCo District. Free quotes.",
    intro:
      "Jeffersonville is the closest stop on the Indiana side — over the Big Four or the Kennedy Bridge in minutes. We do lots of downtown work near Spring Street and over in the NoCo / Watson area.",
    highlights: ["Big Four Bridge", "Schimpff's Confectionery", "Howard Steamboat Museum", "Falls of the Ohio (nearby)"],
    neighborhoods: ["Downtown Jeffersonville", "Spring Street", "NoCo", "Hidden Bay"],
    roads: ["Spring St", "10th St", "Eastern Blvd", "I-65", "I-265"],
  },
  {
    slug: "new-albany",
    name: "New Albany",
    fullName: "New Albany, IN",
    type: "city",
    state: "IN",
    county: "Floyd",
    metaTitle: "Junk Removal New Albany IN | 502 Junk Dept.",
    metaDescription:
      "Junk removal, basement cleanouts, and demolition in New Albany, Indiana. Historic homes, modern hauling.",
    intro:
      "New Albany has some of the best-kept historic neighborhoods on either side of the river — Mansion Row, Silver Hills, downtown. We work them all, with extra care for original woodwork on the carry-outs.",
    highlights: ["Mansion Row", "Silver Hills", "Culbertson Mansion", "Riverfront Amphitheater"],
    neighborhoods: ["Mansion Row", "Silver Hills", "Downtown New Albany", "Edwardsville"],
    roads: ["Spring St", "Charlestown Rd", "Grant Line Rd", "I-64"],
  },
  {
    slug: "clarksville",
    name: "Clarksville",
    fullName: "Clarksville, IN",
    type: "city",
    state: "IN",
    county: "Clark",
    metaTitle: "Junk Removal Clarksville IN | 502 Junk Dept.",
    metaDescription:
      "Junk removal and commercial cleanouts in Clarksville, IN. Free quotes, same-day pickup available.",
    intro:
      "Clarksville sits between Jeffersonville and New Albany along the river — lots of commercial work along the Veterans Parkway corridor and steady residential calls in the older neighborhoods.",
    highlights: ["Falls of the Ohio State Park", "Lewis and Clark Statue", "Greentree Mall"],
    neighborhoods: ["Carriage Hill", "Park Place", "Heritage"],
    roads: ["Veterans Pkwy", "Lewis & Clark Pkwy", "Hwy 31", "I-65"],
  },
  {
    slug: "sellersburg",
    name: "Sellersburg",
    fullName: "Sellersburg, IN",
    type: "city",
    state: "IN",
    county: "Clark",
    metaTitle: "Junk Removal Sellersburg IN | 502 Junk Dept.",
    metaDescription:
      "Junk removal, shed demolition, and rural property cleanouts in Sellersburg, Indiana.",
    intro:
      "Sellersburg's a fast call from Louisville off I-65, and we cover the area regularly — residential cleanouts, shed and deck demos, plus the occasional farm-property purge.",
    highlights: ["Silver Creek", "Covered Bridge Golf Club", "Hwy 60 corridor"],
    neighborhoods: ["Speed", "Mill Creek", "Covered Bridge"],
    roads: ["Hwy 60", "Hwy 31", "I-65"],
  },
  {
    slug: "charlestown",
    name: "Charlestown",
    fullName: "Charlestown, IN",
    type: "city",
    state: "IN",
    county: "Clark",
    metaTitle: "Junk Removal Charlestown IN | 502 Junk Dept.",
    metaDescription:
      "Junk removal, basement cleanouts, and property turnovers in Charlestown, Indiana. Free quotes.",
    intro:
      "Charlestown sits east of Jeffersonville along Hwy 62 — a steady mix of older homes, newer subdivisions, and Charlestown State Park to our north. Standard residential cleanouts dominate our calls out here.",
    highlights: ["Charlestown State Park", "Greenway Park", "Downtown Charlestown"],
    neighborhoods: ["Downtown Charlestown", "Pleasant Ridge"],
    roads: ["Hwy 62", "Hwy 3", "Charlestown New Albany Pike"],
  },
  {
    slug: "floyds-knobs",
    name: "Floyds Knobs",
    fullName: "Floyds Knobs, IN",
    type: "city",
    state: "IN",
    county: "Floyd",
    metaTitle: "Junk Removal Floyds Knobs IN | 502 Junk Dept.",
    metaDescription:
      "Junk removal and large-property cleanouts in Floyds Knobs, IN. Free quotes, careful work on steep driveways.",
    intro:
      "Floyds Knobs is hilly country with big-lot homes — steep driveways and panoramic views. We're set up to back trucks down a grade and do the work without leaving tire tracks behind.",
    highlights: ["Floyds Knobs scenic overlook", "Knobstone Trail (region)", "St. Mary-of-the-Knobs"],
    neighborhoods: ["The Knobs", "Mount St. Francis area"],
    roads: ["Paoli Pike", "Hwy 150", "Old Vincennes Rd"],
  },
  {
    slug: "georgetown",
    name: "Georgetown",
    fullName: "Georgetown, IN",
    type: "city",
    state: "IN",
    county: "Floyd",
    metaTitle: "Junk Removal Georgetown IN | 502 Junk Dept.",
    metaDescription:
      "Junk removal, shed demolition, and rural cleanouts in Georgetown, Indiana. Free quotes.",
    intro:
      "Georgetown is rural and growing — newer subdivisions next to old farm parcels. We handle both, from garage cleanouts in the developments to barn purges out on the rural roads.",
    highlights: ["Edwardsville (nearby)", "Greenville (nearby)", "Old Floyd County farmland"],
    neighborhoods: ["Edwardsville", "Hwy 64 corridor"],
    roads: ["Hwy 64", "Hwy 150", "Bethany Rd"],
  },
  {
    slug: "greenville",
    name: "Greenville",
    fullName: "Greenville, IN",
    type: "city",
    state: "IN",
    county: "Floyd",
    metaTitle: "Junk Removal Greenville IN | 502 Junk Dept.",
    metaDescription:
      "Junk removal, brush hauling, and rural property cleanouts in Greenville, Indiana.",
    intro:
      "Greenville is small-town Indiana — single-family homes on big lots, mature trees, and plenty of seasonal brush hauls. We're a steady call for storm cleanup work here.",
    highlights: ["Downtown Greenville", "Greenville Park", "Hwy 150 corridor"],
    neighborhoods: ["Downtown Greenville"],
    roads: ["Hwy 150", "Hwy 64", "Hwy 11"],
  },
  {
    slug: "corydon",
    name: "Corydon",
    fullName: "Corydon, IN",
    type: "city",
    state: "IN",
    county: "Harrison",
    metaTitle: "Junk Removal Corydon IN | 502 Junk Dept.",
    metaDescription:
      "Junk removal and cleanouts in Corydon, IN (Harrison County). Historic homes handled with care.",
    intro:
      "Corydon is Indiana's first state capital — historic downtown, mid-century neighborhoods, and a lot of inherited homes. We work the area carefully and respect the architecture.",
    highlights: ["Indiana's First State Capitol", "Corydon Battle Site", "Squire Boone Caverns (nearby)"],
    neighborhoods: ["Historic downtown Corydon"],
    roads: ["Hwy 62", "I-64", "Old Hwy 135"],
  },
  {
    slug: "henryville",
    name: "Henryville",
    fullName: "Henryville, IN",
    type: "city",
    state: "IN",
    county: "Clark",
    metaTitle: "Junk Removal Henryville IN | 502 Junk Dept.",
    metaDescription:
      "Junk removal, storm cleanup, and property cleanouts in Henryville, Indiana. Free quotes.",
    intro:
      "Henryville is north of Sellersburg along I-65 — rural with a steady stream of property cleanouts and storm-cleanup work, especially after the spring tornado season.",
    highlights: ["Clark State Forest (nearby)", "Henryville Memorial Park"],
    neighborhoods: ["Downtown Henryville"],
    roads: ["I-65", "Hwy 160", "Hwy 31"],
  },
];

export const LOCATION_BY_SLUG = Object.fromEntries(LOCATIONS.map((l) => [l.slug, l]));
export const KY_CITIES = LOCATIONS.filter((l) => l.type === "city" && l.state === "KY");
export const IN_CITIES = LOCATIONS.filter((l) => l.type === "city" && l.state === "IN");
export const LOUISVILLE_NEIGHBORHOODS = LOCATIONS.filter((l) => l.type === "neighborhood");
