import { groq } from "next-sanity";

export const allAanbodQuery = groq`
  *[_type == "aanbod"] | order(order asc) {
    _id,
    title,
    slug,
    excerpt,
    image,
    duration,
    requiresExperience,
    featured,
    order
  }
`;

export const featuredAanbodQuery = groq`
  *[_type == "aanbod" && featured == true] | order(order asc) {
    _id,
    title,
    slug,
    excerpt,
    image,
    duration
  }
`;

export const aanbodBySlugQuery = groq`
  *[_type == "aanbod" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    description,
    image,
    duration,
    requiresExperience,
    featured
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    contactEmail,
    phone,
    address
  }
`;
