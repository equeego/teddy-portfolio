const about_us = {
  name: "about_us",
  title: "About Us",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title of the feature",
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
      title: "Subtitle of the feature",
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
      title: "Small description of the feature",
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
      name: "slug",
      title:
        "Project url - Do not manually change the FR and EN values bellow, use the Generate button instead",
      type: "object",
      fields: [
        {
          title: "EN",
          name: "en",
          type: "slug",
          options: { source: "title.en" },
        },
        {
          title: "FR",
          name: "fr",
          type: "slug",
          options: { source: "title.fr" },
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
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
  ],
  preview: {
    select: {
      title: "title.en",
      subtitle: "subtitle.en",
    },
  },
};

export default about_us;
