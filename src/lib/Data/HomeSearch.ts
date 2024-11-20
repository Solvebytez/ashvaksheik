import { CheckboxOption } from "@/app/home-search/CheckBox";
import { OptionType1 } from "@/app/home-search/MultiSelectComponent";
import { RedioOption } from "@/app/home-search/RadioOptions";

export const propertyTypeOptions:OptionType1[] = [
    { value: 'detached_house', label: 'Detached House' },
    { value: 'semi_detached_house', label: 'Semi-Detached House' },
    { value: 'townhouse', label: 'Townhouse' },
    { value: 'condo_condominium', label: 'Condo/Condominium' },
    { value: 'duplex', label: 'Duplex' },
    { value: 'triplex', label: 'Triplex' },
    { value: 'fourplex', label: 'Fourplex' },
    { value: 'bungalow', label: 'Bungalow' },
    { value: 'cottage_cabin', label: 'Cottage/Cabin' },
    { value: 'mansion', label: 'Mansion' },
    { value: 'luxury_home', label: 'Luxury Home' },
    { value: 'multi_family_home', label: 'Multi-Family Home' },
    { value: 'apartment_building', label: 'Apartment Building' },
    { value: 'condo_building', label: 'Condo Building' },
    { value: 'farm_ranch', label: 'Farm/Ranch' },
    { value: 'vacant_land', label: 'Vacant Land' },
    { value: 'commercial_property', label: 'Commercial Property' },
    { value: 'industrial_property', label: 'Industrial Property' },
    { value: 'mixed_use_property', label: 'Mixed-Use Property' },
    { value: 'rental_property', label: 'Rental Property' },
    { value: 'vacation_rental', label: 'Vacation Rental' },
    { value: 'fixer_upper', label: 'Fixer-Upper' },
    { value: 'student_housing', label: 'Student Housing' },
    { value: 'retirement_home', label: 'Retirement Home' }
  ];

  // Our data structure
export const locationOption: OptionType1[] = [
    {
      label: 'Toronto',
      value: 'toronto',
      options: [
        { label: 'Downtown Toronto', value: 'downtown_toronto' },
        { label: 'North York', value: 'north_york' },
        { label: 'Etobicoke', value: 'etobicoke' },
        { label: 'Scarborough', value: 'scarborough' },
        { label: 'York', value: 'york' },
        { label: 'East York', value: 'east_york' },
      ],
    },
    {
      label: 'Peel Region',
      value: 'peel_region',
      options: [
        { label: 'Mississauga', value: 'mississauga' },
        { label: 'Brampton', value: 'brampton' },
        { label: 'Caledon', value: 'caledon' },
      ],
    },
    {
      label: 'York Region',
      value: 'york_region',
      options: [
        { label: 'Vaughan', value: 'vaughan' },
        { label: 'Markham', value: 'markham' },
        { label: 'Richmond Hill', value: 'richmond_hill' },
        { label: 'Newmarket', value: 'newmarket' },
        { label: 'Aurora', value: 'aurora' },
        { label: 'King City', value: 'king_city' },
        { label: 'Whitchurch-Stouffville', value: 'whitchurch_stouffville' },
        { label: 'East Gwillimbury', value: 'east_gwillimbury' },
        { label: 'Georgina', value: 'georgina' },
      ],
    },
    {
      label: 'Durham Region',
      value: 'durham_region',
      options: [
        { label: 'Pickering', value: 'pickering' },
        { label: 'Ajax', value: 'ajax' },
        { label: 'Whitby', value: 'whitby' },
        { label: 'Oshawa', value: 'oshawa' },
        { label: 'Clarington', value: 'clarington' },
        { label: 'Uxbridge', value: 'uxbridge' },
        { label: 'Scugog', value: 'scugog' },
        { label: 'Brock', value: 'brock' },
      ],
    },
    {
      label: 'Halton Region',
      value: 'halton_region',
      options: [
        { label: 'Oakville', value: 'oakville' },
        { label: 'Burlington', value: 'burlington' },
        { label: 'Milton', value: 'milton' },
        { label: 'Halton Hills', value: 'halton_hills' },
      ],
    },
    {
      label: 'Other Surrounding Areas',
      value: 'other_areas',
      options: [
        { label: 'Hamilton', value: 'hamilton' },
        { label: 'Guelph', value: 'guelph' },
        { label: 'Cambridge', value: 'cambridge' },
        { label: 'Kitchener', value: 'kitchener' },
        { label: 'Waterloo', value: 'waterloo' },
        { label: 'Barrie', value: 'barrie' },
        { label: 'Orangeville', value: 'orangeville' },
        { label: 'Bradford West Gwillimbury', value: 'bradford_west_gwillimbury' },
        { label: 'Innisfil', value: 'innisfil' },
        { label: 'New Tecumseth', value: 'new_tecumseth' },
        { label: 'Caledon', value: 'caledon' },
        { label: 'Shelburne', value: 'shelburne' },
      ],
    },
  ]
  

  export const bedroomOptions: OptionType1[] = [
    { value: '1_plus_bedrooms', label: '1+ Bedrooms' },
    { value: '2_plus_bedrooms', label: '2+ Bedrooms' },
    { value: '3_plus_bedrooms', label: '3+ Bedrooms' },
    { value: '4_plus_bedrooms', label: '4+ Bedrooms' },
    { value: '5_plus_bedrooms', label: '5+ Bedrooms' }
  ];
  

  export const bathroomOptions: OptionType1[] = [
    { value: '1_plus_bathrooms', label: '1+ Bathrooms' },
    { value: '2_plus_bathrooms', label: '2+ Bathrooms' },
    { value: '3_plus_bathrooms', label: '3+ Bathrooms' },
    { value: '4_plus_bathrooms', label: '4+ Bathrooms' },
    { value: '5_plus_bathrooms', label: '5+ Bathrooms' }
  ];
  

  export const squareFootageOptions: OptionType1[] = [
    { value: '500_1000_sqft', label: '500 - 1,000 Sq Ft' },
    { value: '1000_1500_sqft', label: '1,000 - 1,500 Sq Ft' },
    { value: '1500_2000_sqft', label: '1,500 - 2,000 Sq Ft' },
    { value: '2000_2500_sqft', label: '2,000 - 2,500 Sq Ft' },
    { value: '2500_3000_sqft', label: '2,500 - 3,000 Sq Ft' },
    { value: '3000_4000_sqft', label: '3,000 - 4,000 Sq Ft' },
    { value: 'over_4000_sqft', label: 'Over 4,000 Sq Ft' }
  ];
  

  export const priceRangeOptions: OptionType1[] = [
    { value: 'under_500k', label: 'Under $500,000' },
    { value: '500k_750k', label: '$500,000 - $750,000' },
    { value: '750k_1m', label: '$750,000 - $1,000,000' },
    { value: '1m_1_5m', label: '$1,000,000 - $1,500,000' },
    { value: '1_5m_2m', label: '$1,500,000 - $2,000,000' },
    { value: 'over_2m', label: 'Over $2,000,000' }
  ];
  

  export const planningToBuyOptions: OptionType1[] = [
    { value: 'within_1_month', label: 'Within 1 Month' },
    { value: '1_3_months', label: '1-3 Months' },
    { value: '3_6_months', label: '3-6 Months' },
    { value: '6_12_months', label: '6-12 Months' },
    { value: 'over_1_year', label: 'Over 1 Year' },
    { value: 'just_browsing', label: 'Just Browsing' }
  ];
  export const purposeForBuyingOptions: OptionType1[] = [
    { value: 'primary_residence', label: 'Primary Residence' },
    { value: 'investment_property', label: 'Investment Property' },
    { value: 'vacation_home', label: 'Vacation Home' },
    { value: 'relocation', label: 'Relocation' },
    { value: 'upsizing_downsizing', label: 'Upsizing/Downsizing' }
  ];
    
  export const mortgageApprovalOptions: RedioOption[] = [
    { id: 'mortgage-option-1', value: 'yes', label: 'Yes' },
    { id: 'mortgage-option-2', value: 'no', label: 'No' },
    { id: 'mortgage-option-3', value: 'planning_to_get_pre_approved', label: 'Planning to Get Pre-Approved' },
    { id: 'mortgage-option-4', value: 'paying_cash', label: 'Paying Cash' }
  ];

 export const checkboxOptions: CheckboxOption[] = [
    { id: 'email', label: 'Email', value: 'email' },
    { id: 'phone-call', label: 'Phone Call', value: 'phone-call' },
    { id: 'text-message', label: 'Text Message', value: 'text-message' },
];
export const realtorOptions:RedioOption[] = [
  { id: 'realtor-option-1', value: 'yes', label: 'Yes' },
  { id: 'realtor-option-2', value: 'no', label: 'No' },
  { id: 'realtor-option-3', value: 'considering', label: 'Considering It' }
];