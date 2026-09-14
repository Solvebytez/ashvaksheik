export type PreconProject = {
  slug: string;
  name: string;
  city: string;
  builder: string;
  homeTypes: string;
  status: string;
  occupancyNote: string;
  locationNote: string;
  title: string;
  description: string;
  keywords: string[];
  heading: string;
  intro: string;
  body: string[];
  faqs: { question: string; answer: string }[];
  cityRealtorPath?: string;
  neighborhoodPath?: string;
};

export const preconProjects: PreconProject[] = [
  {
    slug: "five-oaks-oakville",
    name: "Five Oaks",
    city: "Oakville",
    builder: "Caivan Communities",
    homeTypes: "Townhomes and detached homes",
    status: "Pre-construction / coming soon",
    occupancyNote: "Builder materials have pointed to roughly 2027–2028 occupancy — confirm the date on the agreement.",
    locationNote: "North Oakville along Dundas Street West, near Sixteen Mile Creek valleylands.",
    title: "Five Oaks Oakville Pre-Construction",
    description:
      "Five Oaks Oakville by Caivan Communities — pre-construction townhomes and detached homes in North Oakville. Register with Ashvak Sheik, Realtor at Re/Max Millennium Real Estate.",
    keywords: [
      "Five Oaks Oakville",
      "Five Oaks Caivan",
      "Five Oaks Oakville pre construction",
      "Caivan Five Oaks",
      "Oakville pre construction",
      "North Oakville new homes",
    ],
    heading: "Five Oaks Oakville by Caivan",
    intro:
      "Five Oaks is a Caivan Communities pre-construction neighbourhood in North Oakville with a boutique mix of townhomes and single detached homes. Ashvak Sheik helps buyers register early, compare floor plans, and confirm what is still available.",
    body: [
      "Public marketing for Five Oaks places the community along Dundas Street West in Oakville, beside protected green space near Sixteen Mile Creek. Product mix typically includes back-to-back and traditional townhomes plus detached homes on wider lots — exact inventory changes by release.",
      "Oakville freehold pre-construction is competitive. Ashvak walks deposit structure, assignment rules, and how Five Oaks compares with other Halton launches such as Riverview before you lock a lot.",
      "Pricing, premiums, and incentives change between VIP and public releases. Call 647-890-0982 or use the Interested form on ashvaksheik.com/pre-construction for the current package.",
    ],
    faqs: [
      {
        question: "What is Five Oaks Oakville?",
        answer:
          "Five Oaks is a Caivan Communities pre-construction community in North Oakville with townhomes and detached homes. Ashvak Sheik at Re/Max Millennium Real Estate can register you and confirm current availability at 647-890-0982.",
      },
      {
        question: "Who can help me buy Five Oaks Oakville pre-construction?",
        answer:
          "Ashvak Sheik is a GTA realtor who works Oakville pre-construction including Five Oaks. Start at ashvaksheik.com/pre-construction/five-oaks-oakville or call 647-890-0982.",
      },
    ],
    cityRealtorPath: "/oakville-realtor",
    neighborhoodPath: "/neighborhoods/oakville",
  },
  {
    slug: "aura-lakeview-village",
    name: "Aura at Lakeview Village",
    city: "Mississauga",
    builder: "Caivan Communities",
    homeTypes: "2-storey urban townhomes",
    status: "Selling / final releases marketed",
    occupancyNote: "Builder guidance has referenced late 2027 to early 2028 closings — verify on your agreement.",
    locationNote: "Lakeview Village waterfront community in Mississauga, near Lakeshore Road East and Lake Ontario.",
    title: "Aura Lakeview Village Mississauga Pre-Construction",
    description:
      "Aura at Lakeview Village Mississauga by Caivan — waterfront urban townhomes in Lakeview Village. Register with Ashvak Sheik, Realtor at Re/Max Millennium Real Estate.",
    keywords: [
      "Aura Lakeview Village",
      "Aura Mississauga",
      "Aura Caivan",
      "Lakeview Village townhomes",
      "Mississauga pre construction",
      "Aura Lakeview Village pre construction",
    ],
    heading: "Aura at Lakeview Village, Mississauga",
    intro:
      "Aura is Caivan’s 2-storey urban townhome collection inside Mississauga’s Lakeview Village waterfront master plan. Ashvak Sheik helps buyers get current pricing, deposit schedules, and remaining inventory.",
    body: [
      "Lakeview Village sits along Lake Ontario with parks, trails, and Lakeshore access. Aura is marketed as stacked/urban towns with underground parking included on many packages — always confirm the lot sheet before you reserve.",
      "Recent public marketing has shown entry pricing from roughly the high $500s depending on model and incentives, plus first-time buyer tax messaging that can change. Ashvak verifies the live price list so you do not rely on outdated screenshots.",
      "If you are comparing Aura with other Mississauga or Oakville launches, he maps commute, carrying costs, and assignment rules in plain language. Call 647-890-0982 or tap Interested on the pre-construction page.",
    ],
    faqs: [
      {
        question: "What is Aura Lakeview Village in Mississauga?",
        answer:
          "Aura at Lakeview Village is a Caivan Communities townhome project in Mississauga’s Lakeview Village waterfront community. Ashvak Sheik can share current availability at 647-890-0982 or ashvaksheik.com/pre-construction/aura-lakeview-village.",
      },
      {
        question: "Is Aura Mississauga still selling?",
        answer:
          "Aura has been actively marketed with limited final releases. Inventory moves quickly — Ashvak confirms what is still open before you visit the sales centre.",
      },
    ],
    cityRealtorPath: "/mississauga-realtor",
    neighborhoodPath: "/neighborhoods/mississauga",
  },
  {
    slug: "riverview-oakville",
    name: "Riverview",
    city: "Oakville",
    builder: "Caivan Communities",
    homeTypes: "Townhomes and detached homes",
    status: "Pre-construction / launching",
    occupancyNote: "Early closings have been discussed around 2026–2027 depending on product — confirm with the builder package.",
    locationNote: "South Oakville near Bronte Road and Upper Middle Road West.",
    title: "Riverview Oakville Pre-Construction by Caivan",
    description:
      "Riverview South Oakville by Caivan Communities — townhomes and detached homes near Bronte Road. Register with Ashvak Sheik, Realtor at Re/Max Millennium Real Estate.",
    keywords: [
      "Riverview Oakville",
      "Riverview Caivan",
      "Riverview South Oakville",
      "Oakville pre construction towns",
      "Caivan Riverview",
      "Bronte Road new homes",
    ],
    heading: "Riverview Oakville by Caivan",
    intro:
      "Riverview is a Caivan Communities freehold community in South Oakville with townhomes (including Advantage dual-frontage product) and detached homes. Ashvak Sheik helps buyers register for VIP pricing and compare Riverview with Five Oaks.",
    body: [
      "The site is marketed near Bronte Road and Upper Middle Road West — a South Oakville pocket with highway and Bronte Creek access. Product stories online highlight finished basements and Advantage towns that can support secondary-suite living where permitted.",
      "Published price bands have often shown towns from roughly the high $700s and singles higher — those numbers move with premiums and incentives. Ashvak pulls the current list so your offer math is based on today’s sheet, not last month’s flyer.",
      "Telugu, Hyderabadi, Muslim, and Desi buyers who want Oakville freehold can work with Ashvak in Telugu or English. Call 647-890-0982.",
    ],
    faqs: [
      {
        question: "What is Riverview Oakville by Caivan?",
        answer:
          "Riverview is a Caivan pre-construction community in South Oakville with townhomes and detached homes. Contact Ashvak Sheik at ashvaksheik.com/pre-construction/riverview-oakville or 647-890-0982.",
      },
      {
        question: "Should I buy Riverview or Five Oaks in Oakville?",
        answer:
          "It depends on North vs South Oakville preference, product type, and budget. Ashvak compares both Caivan launches with live inventory before you put a deposit down.",
      },
    ],
    cityRealtorPath: "/oakville-realtor",
    neighborhoodPath: "/neighborhoods/oakville",
  },
  {
    slug: "bravo-condos-vaughan",
    name: "BRAVO at Festival South",
    city: "Vaughan",
    builder: "Menkes Developments & QuadReal",
    homeTypes: "Condo towers at Vaughan Metropolitan Centre",
    status: "Selling / under construction on early phases",
    occupancyNote: "Tower occupancy windows have been marketed across roughly 2028–2029 — confirm per tower.",
    locationNote: "Vaughan Metropolitan Centre (VMC) / Festival South corridor.",
    title: "BRAVO Condos Vaughan VMC Pre-Construction",
    description:
      "BRAVO at Festival South VMC Vaughan by Menkes and QuadReal — pre-construction condos at Vaughan Metropolitan Centre. Register with Ashvak Sheik, Realtor at Re/Max Millennium Real Estate.",
    keywords: [
      "BRAVO Condos Vaughan",
      "BRAVO VMC",
      "Encore at BRAVO",
      "Festival South Vaughan",
      "Vaughan pre construction condo",
      "Menkes BRAVO",
    ],
    heading: "BRAVO Condos at Vaughan Metropolitan Centre",
    intro:
      "BRAVO at Festival South is a multi-tower pre-construction condo community at Vaughan Metropolitan Centre by Menkes and QuadReal. Ashvak Sheik helps buyers choose the right tower, suite mix, and deposit plan.",
    body: [
      "VMC is one of York Region’s highest-profile transit nodes. BRAVO is marketed as three towers (including Encore at BRAVO) with staggered occupancy — early phases have been described as already under construction while later towers remain pre-construction.",
      "Public pricing commentary has shown entry studios and one-bedrooms aimed at first-time buyers and investors, but incentives and suite availability change weekly. Ashvak confirms the live price list and assignment rules before you reserve.",
      "Comparing BRAVO with Brampton or Mississauga precon? He maps carrying costs, rental comps, and commute without inventing returns. Call 647-890-0982 or visit ashvaksheik.com/pre-construction.",
    ],
    faqs: [
      {
        question: "What is BRAVO Condos Vaughan?",
        answer:
          "BRAVO at Festival South is a Menkes and QuadReal condo project at Vaughan Metropolitan Centre. Ashvak Sheik helps buyers register at ashvaksheik.com/pre-construction/bravo-condos-vaughan or 647-890-0982.",
      },
      {
        question: "Is Encore at BRAVO part of the same project?",
        answer:
          "Encore at BRAVO is marketed as a later tower within the BRAVO Festival South community. Ashvak confirms which tower and suites are open when you inquire.",
      },
    ],
    cityRealtorPath: "/vaughan-realtor",
    neighborhoodPath: "/neighborhoods/vaughan",
  },
  {
    slug: "cornerstone-brampton",
    name: "Cornerstone",
    city: "Brampton",
    builder: "Primont Homes",
    homeTypes: "Freehold townhomes and detached homes",
    status: "Launching / selling phases",
    occupancyNote: "Town launches and detached releases have been staged into 2026 — confirm phase timing with Ashvak.",
    locationNote: "Northwest Brampton near Mississauga Road and Sandalwood Parkway West, close to Mount Pleasant GO.",
    title: "Cornerstone Brampton Pre-Construction by Primont",
    description:
      "Cornerstone Brampton by Primont Homes — freehold townhomes and detached homes near Mount Pleasant GO. Register with Ashvak Sheik, Realtor at Re/Max Millennium Real Estate.",
    keywords: [
      "Cornerstone Brampton",
      "Cornerstone Primont",
      "Primont Cornerstone Brampton",
      "Brampton pre construction towns",
      "Mount Pleasant GO new homes",
      "Northwest Brampton freehold",
    ],
    heading: "Cornerstone Brampton by Primont",
    intro:
      "Cornerstone is a Primont Homes freehold community in northwest Brampton with modern townhomes and upcoming detached product near Mount Pleasant GO. Ashvak Sheik registers buyers for VIP access and current pricing.",
    body: [
      "Marketing places Cornerstone along Mississauga Road near Sandalwood Parkway West — a northwest Brampton growth pocket with 407/401/410 access and GO commuting into Toronto.",
      "Town phases have been promoted from roughly the $600s with back-to-back and traditional layouts; detached launches follow on their own schedule. Exact numbers, lot premiums, and smart-home inclusions change by release.",
      "Brampton freehold precon is busy with Telugu and South Asian buyers. Ashvak works in Telugu or English and compares Cornerstone with other Peel launches before you deposit. Call 647-890-0982.",
    ],
    faqs: [
      {
        question: "What is Cornerstone Brampton by Primont?",
        answer:
          "Cornerstone is a Primont Homes pre-construction freehold community in northwest Brampton. Contact Ashvak Sheik at ashvaksheik.com/pre-construction/cornerstone-brampton or 647-890-0982.",
      },
      {
        question: "Is Cornerstone close to Mount Pleasant GO?",
        answer:
          "Yes. The community is marketed near Mount Pleasant GO and major Peel highways. Ashvak can walk commute options when you register.",
      },
    ],
    cityRealtorPath: "/brampton-realtor",
    neighborhoodPath: "/neighborhoods/brampton",
  },
];

export function getPreconProject(slug: string) {
  return preconProjects.find((project) => project.slug === slug);
}

export function preconProjectPath(slug: string) {
  return `/pre-construction/${slug}`;
}
