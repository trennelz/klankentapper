import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Instellingen",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Sitenaam",
      type: "string",
      initialValue: "Klankentapper",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "contactEmail",
      title: "E-mail",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Telefoon",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Adres",
      type: "string",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Instellingen" }),
  },
});
