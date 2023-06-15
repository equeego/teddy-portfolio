const homepage_portfolio = {
  name: "homepage_portfolio",
  title: "Home page - Portfolio",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      type: "object",
      fields: [
        {
          title: "EN",
          name: "en",
          type: "string",
        },
        {
          title: "FR",
          name: "fr",
          type: "string",
        },
      ],
    },
    {
      name: "subtitle",
      title: "subtitle",
      type: "object",
      fields: [
        {
          title: "EN",
          name: "en",
          type: "string",
        },
        {
          title: "FR",
          name: "fr",
          type: "string",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
    prepare(selection: any) {
      const { title, subtitle } = selection;
      return {
        title: `${title.en} ${subtitle.en}`,
        subtitle: `${title.fr} ${subtitle.fr}`,
      };
    },
  },
};

export default homepage_portfolio;
