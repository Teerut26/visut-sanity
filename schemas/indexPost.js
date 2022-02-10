export default {
  name: "indexPost",
  title: "IndexPost",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    // {
    //   name: "body",
    //   title: "Body",
    //   type: "blockContent",
    //   validation: (Rule) => Rule.required(),
    // },
    {
      name: "href",
      title: "Href",
      type: "string",
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
      title: "title"
    }
  },
};
