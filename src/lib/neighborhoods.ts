export type NeighborhoodGuide = {
  slug: string;
  name: string;
  city: string;
  region: string;
  kind: "city" | "neighborhood";
  cardDescription: string;
  image: string;
  intro: string;
  housing: string;
  whoItSuits: string;
  nearby: string;
};

export const neighborhoodGuides: NeighborhoodGuide[] = [
  {
    slug: "brampton",
    name: "Brampton",
    city: "Brampton",
    region: "Peel",
    kind: "city",
    cardDescription: "Ashvak’s home city — family neighbourhoods, new builds, and a large South Asian community.",
    image: "https://images.pexels.com/photos/7937225/pexels-photo-7937225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Brampton is a Peel Region city of detached homes, towns, and new-build pockets, with a large South Asian community. Ashvak Sheik is based here at 5 Montpelier St Unit 310 and works as a Telugu-speaking Hyderabadi Muslim realtor for Brampton buyers and sellers.",
    housing:
      "Housing ranges from older bungalows and two-storey detached homes to townhouses and pre-construction in north and west Brampton. Downtown Brampton and Mount Pleasant add mid-rise and transit-oriented options.",
    whoItSuits:
      "It suits first-time buyers, multi-generational families, and anyone who wants space in Peel without giving up Highway 410, the GO line, or Pearson access.",
    nearby: "Mississauga, Caledon, Vaughan, and Toronto are the usual comparison cities.",
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    city: "Mississauga",
    region: "Peel",
    kind: "city",
    cardDescription: "Lake to 401 living — Port Credit, Streetsville, City Centre, and Meadowvale.",
    image: "https://images.pexels.com/photos/8142972/pexels-photo-8142972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Mississauga is Peel’s lakefront and employment city, from Port Credit and Clarkson to Square One, Streetsville, and Meadowvale. Ashvak Sheik helps Mississauga buyers and sellers through Re/Max Millennium Real Estate.",
    housing:
      "Stock includes waterfront condos, 1960s–1990s detached streets, towns near Hurontario, and high-rise around City Centre and the LRT corridor.",
    whoItSuits:
      "It suits commuters to downtown Toronto or the airport, downsizers who want condos, and families comparing Mississauga to Brampton or Oakville.",
    nearby: "Brampton, Oakville, Toronto Etobicoke, and Milton sit on all sides.",
  },
  {
    slug: "toronto",
    name: "Toronto",
    city: "Toronto",
    region: "Toronto",
    kind: "city",
    cardDescription: "Condo cores, east-end houses, and midtown streets across the City of Toronto.",
    image: "https://images.pexels.com/photos/667221/pexels-photo-667221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Toronto buying is neighbourhood-specific: condos downtown and midtown, houses in the east end and North York, and a different process than a 905 detached search. Ashvak Sheik works Toronto files alongside Peel, York, Durham, and Halton.",
    housing:
      "Expect condos in the core, Liberty Village, and Yorkville; freehold and semis in Leslieville and The Beaches; and a wide mix in North York and Scarborough.",
    whoItSuits:
      "It suits professionals who need a TTC or GO commute, investors comparing condo vs 905 towns, and families moving from Brampton or Mississauga into the city.",
    nearby: "Mississauga, Vaughan, Markham, and Pickering are the usual next cities.",
  },
  {
    slug: "oakville",
    name: "Oakville",
    city: "Oakville",
    region: "Halton",
    kind: "city",
    cardDescription: "Halton lakeside streets, downtown Oakville, and Bronte.",
    image: "https://images.pexels.com/photos/7937294/pexels-photo-7937294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Oakville is a Halton lakeside city with downtown shops, Bronte Harbour, and established streets north of the QEW. Ashvak Sheik represents Oakville buyers and sellers with Re/Max Millennium Real Estate.",
    housing:
      "Housing includes older lakeside detached, newer north Oakville towns and singles, and a smaller condo pocket downtown and along Trafalgar.",
    whoItSuits:
      "It suits families comparing Oakville to Mississauga or Burlington, and buyers who want GO service into Union without living in Toronto.",
    nearby: "Mississauga, Burlington, Milton, and Toronto.",
  },
  {
    slug: "milton",
    name: "Milton",
    city: "Milton",
    region: "Halton",
    kind: "city",
    cardDescription: "Newer Halton homes under the Niagara Escarpment.",
    image: "https://images.pexels.com/photos/12891324/pexels-photo-12891324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Milton is a Halton growth city of newer detached homes and towns under the Niagara Escarpment. Ashvak Sheik helps Milton buyers comparing it to Brampton, Mississauga, and Oakville.",
    housing:
      "Most stock is post-2000 singles and towns, with older streets near downtown Milton and more land toward the escarpment.",
    whoItSuits:
      "It suits families who want newer floor plans and 401 access, including South Asian buyers comparing Milton to west Brampton.",
    nearby: "Mississauga, Oakville, Georgetown, and Brampton.",
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    city: "Vaughan",
    region: "York",
    kind: "city",
    cardDescription: "York Region condos at VMC plus Woodbridge and Maple streets.",
    image: "https://images.pexels.com/photos/313691/pexels-photo-313691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Vaughan mixes subway-connected condos at Vaughan Metropolitan Centre with freehold streets in Woodbridge, Maple, and Kleinburg. Ashvak Sheik works Vaughan purchases and sales across York Region.",
    housing:
      "VMC is high-rise. Woodbridge and Maple are largely detached and towns. Kleinburg and Nashville lean larger lots.",
    whoItSuits:
      "It suits buyers who want a TTC subway end point, and families comparing Vaughan to Brampton or Richmond Hill.",
    nearby: "Brampton, Toronto North York, Richmond Hill, and Caledon.",
  },
  {
    slug: "markham",
    name: "Markham",
    city: "Markham",
    region: "York",
    kind: "city",
    cardDescription: "Unionville, Cornell, and established York Region streets.",
    image: "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Markham is a York Region city known for Unionville’s main street, Cornell’s newer streets, and a large South and East Asian community. Ashvak Sheik helps Markham buyers and sellers as a GTA realtor.",
    housing:
      "You will see heritage streets in Unionville, 1990s–2010s detached in Cornell and Wismer, and condos near Highway 7.",
    whoItSuits:
      "It suits families who want York Region schools and a 404 commute, including Telugu and South Asian buyers comparing Markham to Scarborough or Richmond Hill.",
    nearby: "Richmond Hill, Toronto Scarborough, Pickering, and Vaughan.",
  },
  {
    slug: "caledon",
    name: "Caledon",
    city: "Caledon",
    region: "Peel",
    kind: "city",
    cardDescription: "Larger lots north of Brampton — Bolton, Mayfield, and rural Caledon.",
    image: "https://images.pexels.com/photos/17095081/pexels-photo-17095081/free-photo-of-residential-houses-in-cityscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Caledon sits north of Brampton in Peel, with Bolton, Mayfield West, and more rural lots. Ashvak Sheik regularly works Caledon files from his Brampton base.",
    housing:
      "Expect larger detached lots, newer Mayfield West towns and singles, and estate properties outside the settlement areas.",
    whoItSuits:
      "It suits buyers who have outgrown a Brampton lot and still want Peel, 410, and Highway 50 access.",
    nearby: "Brampton, Vaughan, Orangeville, and Georgetown.",
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    city: "Richmond Hill",
    region: "York",
    kind: "city",
    cardDescription: "Established York streets including Bayview Hill and Oak Ridges.",
    image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Richmond Hill is an established York Region city between Vaughan and Markham, with Bayview Hill, Oak Ridges, and Yonge Street corridors. Ashvak Sheik helps buyers comparing it to Markham and North York.",
    housing:
      "Bayview Hill and similar pockets are larger detached. Yonge and Highway 7 have condos. Oak Ridges mixes houses with more green space.",
    whoItSuits:
      "It suits families who want York Region and a north-south Yonge or 404 commute into Toronto.",
    nearby: "Markham, Vaughan, Aurora, and Toronto North York.",
  },
  {
    slug: "mississauga-city-centre",
    name: "Mississauga City Centre",
    city: "Mississauga",
    region: "Peel",
    kind: "neighborhood",
    cardDescription: "Known for its vibrant urban lifestyle with plenty of shopping, dining, and entertainment.",
    image: "https://images.pexels.com/photos/8142972/pexels-photo-8142972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Mississauga City Centre is the high-rise and shopping core around Square One. Buying here is usually a condo decision, with Hurontario LRT and 403 access nearby.",
    housing: "Most listings are condo apartments and a smaller set of townhouses on the edges of the core.",
    whoItSuits: "It suits downsizers, investors, and commuters who want amenities without a detached lot.",
    nearby: "Port Credit, Streetsville, and Cooksville.",
  },
  {
    slug: "port-credit",
    name: "Port Credit",
    city: "Mississauga",
    region: "Peel",
    kind: "neighborhood",
    cardDescription: "A beautiful lakeside community with a charming, small-town feel and a popular waterfront.",
    image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Port Credit is Mississauga’s lakeside village — boardwalk, GO station, and a tighter street grid than Meadowvale or Streetsville. Inventory is a mix of condos, older houses, and infill.",
    housing: "Waterfront and mid-rise condos sit beside older detached and semis a few streets inland.",
    whoItSuits: "It suits buyers who want Lake Ontario and a GO ride to Union more than a large backyard.",
    nearby: "Lakeview, Clarkson, and Mississauga City Centre.",
  },
  {
    slug: "streetsville",
    name: "Streetsville",
    city: "Mississauga",
    region: "Peel",
    kind: "neighborhood",
    cardDescription: "Known as 'The Village in the City,' it offers a cozy, community vibe with historic charm.",
    image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Streetsville is Mississauga’s village core on the Credit River, with a main street and older houses that feel different from City Centre condos.",
    housing: "Mostly freehold detached and semis, with some towns on the edges.",
    whoItSuits: "It suits families who want a walkable main street inside Mississauga.",
    nearby: "Meadowvale, Erin Mills, and downtown Streetsville GO.",
  },
  {
    slug: "meadowvale",
    name: "Meadowvale",
    city: "Mississauga",
    region: "Peel",
    kind: "neighborhood",
    cardDescription: "Family-friendly with plenty of parks, trails, and schools.",
    image: "https://images.pexels.com/photos/2968141/pexels-photo-2968141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Meadowvale is a northwest Mississauga community of 1970s–1990s houses, parks, and 401 access. It is a common comparison for west Brampton buyers.",
    housing: "Detached, semis, and towns dominate. Condos are limited compared with City Centre.",
    whoItSuits: "It suits families who want Peel schools and a highway commute toward the airport or Milton.",
    nearby: "Streetsville, Lisgar, and Milton.",
  },
  {
    slug: "brampton-downtown",
    name: "Brampton Downtown",
    city: "Brampton",
    region: "Peel",
    kind: "neighborhood",
    cardDescription: "A rapidly growing urban area with diverse communities and cultural events.",
    image: "https://images.pexels.com/photos/7937225/pexels-photo-7937225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Downtown Brampton is the older civic core around Garden Square and the GO station, with more mid-rise and rental/condo plans than the city’s north subdivisions.",
    housing: "Older detached streets, some semis, and a growing set of mid-rise condos near Queen and Main.",
    whoItSuits: "It suits buyers who want walkability and GO service rather than a new-build lot in north Brampton.",
    nearby: "Bramalea, Mount Pleasant, and Mississauga.",
  },
  {
    slug: "pickering-village",
    name: "Pickering Village",
    city: "Ajax",
    region: "Durham",
    kind: "neighborhood",
    cardDescription: "A historic area with a mix of quaint shops, cafes, and restaurants.",
    image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Pickering Village sits on the Ajax–Pickering line in Durham, with a historic main street and older lots than the newer lakeside streets.",
    housing: "A mix of older detached, some infill, and nearby newer towns toward the 401.",
    whoItSuits: "It suits buyers comparing Durham prices with Scarborough or Markham.",
    nearby: "Ajax Waterfront, downtown Pickering, and Whitby.",
  },
  {
    slug: "ajax-waterfront",
    name: "Ajax Waterfront",
    city: "Ajax",
    region: "Durham",
    kind: "neighborhood",
    cardDescription: "Ideal for nature lovers, with scenic views and walking trails along the lake.",
    image: "https://images.pexels.com/photos/772177/pexels-photo-772177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Ajax Waterfront is the lakeside band of Ajax, with trails, parks, and a mix of older houses and newer infill south of the 401.",
    housing: "Mostly freehold with some condos closer to the GO and downtown Ajax.",
    whoItSuits: "It suits buyers who want Lake Ontario in Durham and a GO commute to Toronto.",
    nearby: "Pickering Village, Whitby Shores, and Scarborough.",
  },
  {
    slug: "whitby-shores",
    name: "Whitby Shores",
    city: "Whitby",
    region: "Durham",
    kind: "neighborhood",
    cardDescription: "A popular lakeside neighborhood known for its family-friendly environment.",
    image: "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Whitby Shores is a planned lakeside neighbourhood in south Whitby with parks and a more uniform street pattern than older downtown Whitby.",
    housing: "Mostly detached and towns from the 2000s onward.",
    whoItSuits: "It suits families who want newer Durham homes and lake access.",
    nearby: "Brooklin, downtown Whitby, and Ajax.",
  },
  {
    slug: "brooklin",
    name: "Brooklin",
    city: "Whitby",
    region: "Durham",
    kind: "neighborhood",
    cardDescription: "A charming small town within Whitby, featuring a historic main street.",
    image: "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Brooklin is the northern Whitby community with a historic main street and a large amount of newer housing around it.",
    housing: "Older village houses plus extensive post-2000 detached and towns.",
    whoItSuits: "It suits buyers who want a small-town main street with 407 and 412 access.",
    nearby: "Whitby Shores, Oshawa, and Ajax.",
  },
  {
    slug: "oshawa-centre",
    name: "Oshawa Centre",
    city: "Oshawa",
    region: "Durham",
    kind: "neighborhood",
    cardDescription: "Offers a blend of suburban life and urban amenities, with great shopping and dining options.",
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Oshawa Centre is the retail and mid-city area around the shopping node, with a wider mix of housing types than the lakeshore.",
    housing: "Detached, semis, towns, and some condos near the mall and transit.",
    whoItSuits: "It suits Durham buyers who want amenities and 401 access more than a waterfront lot.",
    nearby: "Whitby, Courtice, and Bowmanville.",
  },
  {
    slug: "markham-unionville",
    name: "Markham Unionville",
    city: "Markham",
    region: "York",
    kind: "neighborhood",
    cardDescription: "Famous for its heritage buildings, upscale shops, and a lively main street.",
    image: "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Unionville is Markham’s heritage main street, with older lots near the village and newer housing as you move toward Highway 7 and 407.",
    housing: "Heritage and older detached near Main Street, plus towns and some condos toward the 407.",
    whoItSuits: "It suits families who want a walkable York Region village and 404/407 access.",
    nearby: "Cornell, Richmond Hill, and Scarborough.",
  },
  {
    slug: "richmond-hill-bayview-hill",
    name: "Richmond Hill Bayview Hill",
    city: "Richmond Hill",
    region: "York",
    kind: "neighborhood",
    cardDescription: "A well-established area with beautiful homes and excellent schools.",
    image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Bayview Hill is an established Richmond Hill pocket of larger detached homes east of Bayview, often compared with Markham and North York.",
    housing: "Primarily larger two-storey detached homes on quieter streets.",
    whoItSuits: "It suits families trading a 905 town for more lot and a north Toronto commute.",
    nearby: "Unionville, Oak Ridges, and Toronto North York.",
  },
  {
    slug: "vaughan-metropolitan-centre",
    name: "Vaughan Metropolitan Centre",
    city: "Vaughan",
    region: "York",
    kind: "neighborhood",
    cardDescription: "A growing urban area with high-rise condos, offices, and entertainment.",
    image: "https://images.pexels.com/photos/313691/pexels-photo-313691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Vaughan Metropolitan Centre is the subway-end condo district at Highway 7 and Jane, different from Woodbridge or Maple freehold streets.",
    housing: "Almost entirely high-rise condos and some stacked towns.",
    whoItSuits: "It suits buyers who want a TTC commute and do not need a detached lot.",
    nearby: "Woodbridge, North York, and Brampton.",
  },
  {
    slug: "aurora-village",
    name: "Aurora Village",
    city: "Aurora",
    region: "York",
    kind: "neighborhood",
    cardDescription: "Known for its historic homes, parks, and community-centered atmosphere.",
    image: "https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Aurora Village is the older Yonge Street core of Aurora, with historic streets and a GO station, distinct from the newer north Aurora subdivisions.",
    housing: "Older detached and some infill, with newer homes as you leave the village.",
    whoItSuits: "It suits buyers comparing north York Region to Richmond Hill or Newmarket.",
    nearby: "Newmarket, Richmond Hill, and Oak Ridges.",
  },
  {
    slug: "newmarket-downtown",
    name: "Newmarket Downtown",
    city: "Newmarket",
    region: "York",
    kind: "neighborhood",
    cardDescription: "A family-friendly area with a charming main street and various events.",
    image: "https://images.pexels.com/photos/9716284/pexels-photo-9716284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Downtown Newmarket centres on Main Street South, with older lots and a more walkable grid than the 404 corridor subdivisions.",
    housing: "Older detached and semis downtown, newer towns and singles toward the 404.",
    whoItSuits: "It suits families who want a York Region main street and GO or 404 access.",
    nearby: "Aurora, East Gwillimbury, and Bradford.",
  },
  {
    slug: "oakville-downtown",
    name: "Oakville Downtown",
    city: "Oakville",
    region: "Halton",
    kind: "neighborhood",
    cardDescription: "A picturesque lakeside community with upscale shopping and dining.",
    image: "https://images.pexels.com/photos/7937294/pexels-photo-7937294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Downtown Oakville is the Lakeshore and harbour core — shops, GO, and a tighter lot pattern than north Oakville.",
    housing: "A mix of older houses, infill, and condos near the harbour and Kerr Village.",
    whoItSuits: "It suits buyers who want Halton walkability and a GO ride more than a new-build lot.",
    nearby: "Bronte, Clarkson, and Midtown Oakville.",
  },
  {
    slug: "bronte-creek",
    name: "Bronte Creek",
    city: "Oakville",
    region: "Halton",
    kind: "neighborhood",
    cardDescription: "Known for its beautiful trails, parks, and natural scenery.",
    image: "https://images.pexels.com/photos/12300254/pexels-photo-12300254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Bronte Creek refers to the Oakville and Burlington-edge area near Bronte Creek Provincial Park — more trails and family streets than downtown Oakville.",
    housing: "Mostly detached and towns from the 1990s onward.",
    whoItSuits: "It suits families who want park access and a QEW commute.",
    nearby: "Bronte Harbour, Burlington Aldershot, and north Oakville.",
  },
  {
    slug: "burlington-aldershot",
    name: "Burlington Aldershot",
    city: "Burlington",
    region: "Halton",
    kind: "neighborhood",
    cardDescription: "Offers a mix of suburban living with easy access to the waterfront and natural spaces.",
    image: "https://images.pexels.com/photos/9150621/pexels-photo-9150621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Aldershot is Burlington’s east end toward Oakville, with GO service, older streets, and easier QEW access than downtown Burlington.",
    housing: "Older detached, some infill, and towns closer to the highway and station.",
    whoItSuits: "It suits buyers splitting time between Halton and Hamilton or Oakville.",
    nearby: "Bronte, downtown Burlington, and Waterdown.",
  },
  {
    slug: "milton-escarpment-view",
    name: "Milton Escarpment View",
    city: "Milton",
    region: "Halton",
    kind: "neighborhood",
    cardDescription: "A serene area with breathtaking views and great outdoor activities.",
    image: "https://images.pexels.com/photos/12891324/pexels-photo-12891324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Escarpment-view streets in Milton sit closer to the Niagara Escarpment than the 401 retail corridor, with newer homes and more elevation than downtown Milton.",
    housing: "Mostly newer detached and towns.",
    whoItSuits: "It suits families who want newer Halton housing and trail access.",
    nearby: "Downtown Milton, Georgetown, and west Mississauga.",
  },
  {
    slug: "georgetown",
    name: "Georgetown",
    city: "Halton Hills",
    region: "Halton",
    kind: "neighborhood",
    cardDescription: "A small-town charm with plenty of green space and community activities.",
    image: "https://images.pexels.com/photos/17095081/pexels-photo-17095081/free-photo-of-residential-houses-in-cityscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Georgetown is the main community in Halton Hills, with a historic downtown, GO service, and more of a town feel than Milton or Brampton.",
    housing: "Older downtown houses plus newer subdivisions on the edges.",
    whoItSuits: "It suits buyers who want Halton space and a GO option without Oakville prices.",
    nearby: "Milton, Brampton, and Acton.",
  },
  {
    slug: "the-beaches",
    name: "The Beaches",
    city: "Toronto",
    region: "Toronto",
    kind: "neighborhood",
    cardDescription: "A popular neighborhood with sandy beaches, boardwalks, and charming shops.",
    image: "https://images.pexels.com/photos/18604178/pexels-photo-18604178/free-photo-of-a-view-of-a-city-at-sunset-with-buildings-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "The Beaches (The Beach) is Toronto’s east-end boardwalk neighbourhood — Queen Street East, Kew Beach, and a freehold market that is very different from a 905 search.",
    housing: "Mostly houses and semis, with some low-rise condos on Queen.",
    whoItSuits: "It suits buyers who want a Toronto street and the lake, not a Peel subdivision.",
    nearby: "Leslieville, Upper Beaches, and Scarborough southwest.",
  },
  {
    slug: "liberty-village",
    name: "Liberty Village",
    city: "Toronto",
    region: "Toronto",
    kind: "neighborhood",
    cardDescription: "A trendy area with modern condos, tech startups, and a lively social scene.",
    image: "https://images.pexels.com/photos/7078500/pexels-photo-7078500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Liberty Village is a west-end Toronto condo district beside Exhibition GO — almost no freehold, high walkability, and a different buy than Brampton or Mississauga.",
    housing: "Condo apartments and some loft conversions.",
    whoItSuits: "It suits first-time downtown buyers and people who work in the west core.",
    nearby: "King West, Parkdale, and Exhibition Place.",
  },
  {
    slug: "yorkville",
    name: "Yorkville",
    city: "Toronto",
    region: "Toronto",
    kind: "neighborhood",
    cardDescription: "Upscale shopping, dining, and luxury condos in one of Toronto’s most prestigious neighborhoods.",
    image: "https://images.pexels.com/photos/667221/pexels-photo-667221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Yorkville is midtown Toronto’s luxury retail and condo pocket north of Bloor. Purchases here are usually condo or boutique residences, not 905 freehold.",
    housing: "High-rise and boutique condos dominate.",
    whoItSuits: "It suits downsizers and buyers who want a Bloor-Yonge address.",
    nearby: "The Annex, Rosedale, and downtown Toronto.",
  },
  {
    slug: "leslieville",
    name: "Leslieville",
    city: "Toronto",
    region: "Toronto",
    kind: "neighborhood",
    cardDescription: "Known for its art galleries, coffee shops, and a family-friendly atmosphere.",
    image: "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    intro:
      "Leslieville is an east-end Toronto neighbourhood of Queen Street shops, older houses, and some new condos — a common alternative to The Beaches.",
    housing: "Victorian and Edwardian houses, semis, and a growing condo inventory on Queen and Eastern.",
    whoItSuits: "It suits families and first-time city buyers who want a street village, not a Peel subdivision.",
    nearby: "The Beaches, Riverside, and Corktown.",
  },
];

export function neighborhoodPath(slug: string) {
  return `/neighborhoods/${slug}`;
}

export function getNeighborhood(slug: string) {
  return neighborhoodGuides.find((item) => item.slug === slug);
}

export function cityGuides() {
  return neighborhoodGuides.filter((item) => item.kind === "city");
}

export function communityGuides() {
  return neighborhoodGuides.filter((item) => item.kind === "neighborhood");
}

export function neighborhoodTitle(area: NeighborhoodGuide) {
  return `${area.name} Real Estate`;
}

export function neighborhoodDescription(area: NeighborhoodGuide) {
  const place =
    area.kind === "neighborhood" ? `${area.name} in ${area.city}` : area.name;
  return `Ashvak Sheik helps buyers and sellers with ${place} real estate in the GTA. Realtor at Re/Max Millennium Real Estate. Call 647-890-0982.`;
}

export function neighborhoodKeywords(area: NeighborhoodGuide) {
  const base = [
    `${area.name} real estate`,
    `${area.name} realtor`,
    `realtor in ${area.name}`,
    `${area.name} homes for sale`,
    `${area.city} realtor`,
  ];
  if (area.kind === "city") {
    return [
      ...base,
      `Telugu realtor ${area.name}`,
      `Muslim realtor ${area.name}`,
      `${area.name} pre-construction`,
    ];
  }
  return base;
}

export function neighborhoodFaqs(area: NeighborhoodGuide) {
  const place =
    area.kind === "neighborhood" ? `${area.name}, ${area.city}` : area.name;
  const faqs = [
    {
      question: `What is ${area.name} like to buy in?`,
      answer: area.intro,
    },
    {
      question: `Who is a realtor in ${area.name}?`,
      answer: `Ashvak Sheik is a realtor with Re/Max Millennium Real Estate who helps buyers and sellers in ${place} and across the Greater Toronto Area. Start at ashvaksheik.com/home-search or call 647-890-0982.`,
    },
    {
      question: `How do I sell a home in ${area.name}?`,
      answer: `Start with a pricing proposal at ashvaksheik.com/home-valuation, then prepare, market, and negotiate. Ashvak Sheik lists and markets ${place} homes through Re/Max Millennium Real Estate. Call 647-890-0982.`,
    },
  ];

  if (area.kind === "city") {
    faqs.push(
      {
        question: `Is there a Telugu realtor in ${area.name}?`,
        answer: `Yes. Ashvak Sheik is a Telugu-speaking realtor who helps buyers and sellers in ${area.name} and the GTA. See ashvaksheik.com/telugu-realtor or call 647-890-0982.`,
      },
      {
        question: `Is there a Muslim or Hyderabadi realtor for ${area.name}?`,
        answer: `Ashvak Sheik is a Hyderabadi Muslim realtor with Re/Max Millennium Real Estate who works in ${area.name}. See ashvaksheik.com/muslim-realtor and ashvaksheik.com/hyderabadi-realtor.`,
      }
    );
  }

  return faqs;
}
