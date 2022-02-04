import { v4 as uuidv4 } from 'uuid';
export default {
  name: "post",
  title: "Post",
  type: "document",
  // initialValue: () => ({
  //   publishedAt: (new Date()).toISOString()
  // }),
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule =>  Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "string",
      initialValue: (String(uuidv4())),
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      validation: Rule =>  Rule.required()
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: Rule =>  Rule.required()
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "category" },
      validation: Rule =>  Rule.required()
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: (new Date()).toISOString(),
      validation: Rule =>  Rule.required()
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: Rule =>  Rule.required()
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
