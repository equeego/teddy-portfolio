const homepage_banner = {
  name: "homepage_banner",
  title: "Home page - Banner",
  type: "document",
  fields: [
    {
      name: "title_white",
      title: "White title",
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
      name: "title_blue",
      title: "Blue title",
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
      name: "description",
      title: "Description",
      type: "object",
      fields: [
        {
          title: "EN",
          name: "en",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          title: "FR",
          name: "fr",
          type: "array",
          of: [{ type: "block" }],
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
  preview: {
    select: {
      title_white: "title_white",
      title_blue: "title_blue",
    },
    prepare(selection: any) {
      const { title_white, title_blue } = selection;
      return {
        title: `${title_white.en} ${title_blue.en}`,
        subtitle: `${title_white.fr} ${title_blue.fr}`,
      };
    },
  },
};

export default homepage_banner;
