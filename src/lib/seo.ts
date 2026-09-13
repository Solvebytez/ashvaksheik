import type { Metadata } from "next";

export const SITE_URL = "https://ashvaksheik.com";

export const REALTOR_CA_URL =
  "https://www.realtor.ca/agent/2199715/ashvak-sajidh-pash-sheik-81-zenway-blvd-25a-woodbridge-ontario-l4h0s5";

export const ENTITY = {
  name: "Ashvak Sheik",
  jobTitle: "Realtor",
  description:
    "Telugu-speaking Hyderabadi Muslim realtor in the Greater Toronto Area with Re/Max President Realty Brokerage. Helps Telugu, Hyderabadi, Muslim, Indian, and Desi buyers and sellers in Brampton, Mississauga, Toronto, and the GTA.",
  alternateNames: [
    "Ashvak Sajidh Pash Sheik",
    "Telugu realtor GTA",
    "Hyderabadi realtor Toronto",
    "Muslim realtor Brampton",
  ],
  languages: [
    { name: "English", code: "en" },
    { name: "Telugu", code: "te" },
  ],
  brokerage: "Re/Max President Realty Brokerage",
  phoneDisplay: "647-890-0982",
  phone: "+1-647-890-0982",
  email: "ashvak.realtor07@gmail.com",
  street: "155 Salvation Rd",
  city: "Brampton",
  region: "ON",
  postal: "L7A 0W7",
  country: "CA",
  image: "/profile.jpeg",
  sameAs: [
    REALTOR_CA_URL,
    "https://www.facebook.com/profile.php?id=61553027443148",
    "https://www.instagram.com/ashvaksheik/",
    "https://www.linkedin.com/in/ashvaksheik7/",
  ],
  areas: [
    "Greater Toronto Area",
    "Peel Region",
    "Durham Region",
    "Halton Region",
    "York Region",
    "Brampton",
    "Mississauga",
    "Oakville",
    "Milton",
    "Caledon",
    "Vaughan",
    "Markham",
    "Richmond Hill",
    "Toronto",
  ],
};

export function pageMetadata({
  title,
  description,
  path,
  image = ENTITY.image,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const ogTitle = path === "/" ? title : `${title} | ${ENTITY.name}`;
  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: ENTITY.name,
      images: [
        {
          url: image,
          width: 800,
          height: 1000,
          alt: `${ENTITY.name}, ${ENTITY.jobTitle} at ${ENTITY.brokerage}`,
        },
      ],
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
    },
  };
}

export function siteGraph() {
  const id = `${SITE_URL}/#ashvak`;
  const brokerageId = `${SITE_URL}/#brokerage`;
  const websiteId = `${SITE_URL}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Person", "RealEstateAgent"],
        "@id": id,
        name: ENTITY.name,
        alternateName: ENTITY.alternateNames,
        description: ENTITY.description,
        url: SITE_URL,
        image: `${SITE_URL}${ENTITY.image}`,
        telephone: ENTITY.phone,
        email: ENTITY.email,
        jobTitle: ENTITY.jobTitle,
        knowsLanguage: ENTITY.languages.map((language) => ({
          "@type": "Language",
          name: language.name,
          alternateName: language.code,
        })),
        knowsAbout: [
          "GTA real estate",
          "Telugu-speaking home buyers",
          "Hyderabadi families in Canada",
          "Muslim home buyers in Ontario",
          "South Asian buyers and sellers in the GTA",
        ],
        worksFor: { "@id": brokerageId },
        address: {
          "@type": "PostalAddress",
          streetAddress: ENTITY.street,
          addressLocality: ENTITY.city,
          addressRegion: ENTITY.region,
          postalCode: ENTITY.postal,
          addressCountry: ENTITY.country,
        },
        areaServed: ENTITY.areas.map((name) => ({ "@type": "AdministrativeArea", name })),
        sameAs: ENTITY.sameAs,
      },
      {
        "@type": ["RealEstateAgent", "LocalBusiness"],
        "@id": brokerageId,
        name: ENTITY.brokerage,
        url: SITE_URL,
        telephone: ENTITY.phone,
        email: ENTITY.email,
        image: `${SITE_URL}${ENTITY.image}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: ENTITY.street,
          addressLocality: ENTITY.city,
          addressRegion: ENTITY.region,
          postalCode: ENTITY.postal,
          addressCountry: ENTITY.country,
        },
        areaServed: ENTITY.areas.map((name) => ({ "@type": "AdministrativeArea", name })),
        employee: { "@id": id },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: ENTITY.name,
        description:
          "GTA realtor helping buyers and sellers across Peel, Durham, Halton, and York.",
        publisher: { "@id": id },
        inLanguage: "en-CA",
      },
    ],
  };
}

export function breadcrumbGraph(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqGraph(
  questions: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleGraph({
  title,
  description,
  slug,
  image,
  datePublished,
  dateModified,
}: {
  title: string;
  description?: string;
  slug: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}/blog/${slug}`,
    image: image ? [image] : [`${SITE_URL}${ENTITY.image}`],
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: ENTITY.name,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Person",
      name: ENTITY.name,
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
  };
}
