export default {
  name: "indexPost",
  title: "IndexPost",
  type: "document",
  fields: [
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "href",
      title: "Href",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      title: "publishedAt"
    }
  },
};
