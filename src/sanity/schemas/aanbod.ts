import { defineField, defineType } from "sanity";

export const aanbod = defineType({
  name: "aanbod",
  title: "Aanbod",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Korte beschrijving",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "description",
      title: "Volledige beschrijving",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "image",
      title: "Afbeelding",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "duration",
      title: "Duur",
      type: "string",
    }),
    defineField({
      name: "requiresExperience",
      title: "Muzikale voorkennis vereist",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "featured",
      title: "Tonen op homepage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Volgorde",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
});
