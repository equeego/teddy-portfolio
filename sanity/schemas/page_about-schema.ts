const about_page = {
  name: "about_page",
  title: "About us page",
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
          type: "string"
        },
        {
          title: "FR",
          name: "fr",
          type: "string"
        }
      ]
    },
    {
      name: "subtitle",
      title: "subtitle",
      type: "object",
      fields: [
        {
          title: "EN",
          name: "en",
          type: "string"
        },
        {
          title: "FR",
          name: "fr",
          type: "string"
        }
      ]
    },
    {
      name: "content",
      title: "Content",
      type: "object",
      fields: [
        {
          title: "EN",
          name: "en",
          type: "array",
          of: [{ type: "block" }]
        },
        {
          title: "FR",
          name: "fr",
          type: "array",
          of: [{ type: "block" }]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle"
    },
    prepare(selection: any) {
      const { title, subtitle } = selection;
      return {
        title: `${title.en} ${subtitle.en}`,
        subtitle: `${title.fr} ${subtitle.fr}`
      };
    }
  }
};

export default about_page;
