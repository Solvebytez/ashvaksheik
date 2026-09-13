# Entity and page metadata

## Canonical entity

- Name: Ashvak Sheik
- Also listed as: Ashvak Sajidh Pash Sheik
- Role: Realtor
- Brokerage: Re/Max Millennium Real Estate
- Phone: 647-890-0982 (`tel:6478900982`)
- Email: ashvak.realtor07@gmail.com
- Address: 5 Montpelier St Unit 310, Brampton, ON L6Y 6H4
- Site: https://ashvaksheik.com (no www)
- realtor.ca: https://www.realtor.ca/agent/2199715/ashvak-sajidh-pash-sheik-81-zenway-blvd-25a-woodbridge-ontario-l4h0s5
- Areas: Greater Toronto Area, Peel, Durham, Halton, York, Brampton, Mississauga, Oakville, Milton, Caledon, Vaughan, Markham, Richmond Hill, Toronto
- Social: Facebook `profile.php?id=61553027443148`, Instagram `ashvaksheik`, LinkedIn `ashvaksheik7`

## Title templates

Use `pageMetadata({ title, description, path })`. Root title template already appends `| Ashvak Sheik`.

| Path | Title | Description focus |
|---|---|---|
| `/` | Ashvak Sheik \| Re/Max Millennium Real Estate | GTA realtor, buyers and sellers |
| `/about` | GTA Realtor | Bio + brokerage + service area |
| `/home-search` | Home Search in the GTA | Custom property search |
| `/home-valuation` | Home Valuation in the GTA | Pricing proposal |
| `/pre-construction` | GTA Pre-Construction Homes | Exclusive assignments |
| `/neighborhoods` | GTA Neighborhoods | Area guides |
| `/buyers` | First-Time Buyer Guide \| GTA | Buying process |
| `/sellers` | Home Seller Guide \| GTA | Selling process |
| `/faq` | GTA Real Estate FAQ | Citable answers |
| `/blog` | GTA Real Estate Blog | Market articles |
| `/testimonials` | Client Testimonials | Reviews |
| `/privacy` | Privacy Policy | Legal |

## Schema types to use

- Sitewide graph: RealEstateAgent + Person + LocalBusiness + Organization + WebSite
- FAQ: FAQPage
- Blog post: Article + author Person
- Inner pages: BreadcrumbList when visual crumbs exist
