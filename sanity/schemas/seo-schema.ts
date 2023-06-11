const seo = {
  name: 'seo',
  title: 'SEO',
  type: 'document',
  fields: [
    {
      name: "pathname",
      title: "Page slug",
      type: "string",
    },
    {
      name: "title",
      title: "Page title",
      type: "object",
      fields: [
        { title: "EN", name: "en", type: "string" },
        { title: "FR", name: "fr", type: "string" },
      ],
    },
    {
      name: "description",
      title: "Page description",
      type: "object",
      fields: [
        { title: "EN", name: "en", type: "string" },
        { title: "FR", name: "fr", type: "string" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title.en",
      subtitle: "title.fr",
    },
  },
};

export default seo;