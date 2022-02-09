export default {
  name: "announcement",
  title: "Announcement",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      title: "Href",
      name: "href",
      type: "url",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: new Date().toISOString(),
    },
  ],
};
