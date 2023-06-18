const service = {
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Service Name",
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
      title: "Small description of the service",
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
        "service url - Do not manually change the FR and EN values bellow, use the Generate button instead",
      type: "object",
      fields: [
        {
          title: "EN",
          name: "en",
          type: "slug",
          options: { source: "name.en" },
        },
        {
          title: "FR",
          name: "fr",
          type: "slug",
          options: { source: "name.fr" },
        },
      ],
    },
    {
      name: "icon",
      title: "icon",
      type: "iconPicker",
      options: {
        storeSvg: true
      }
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
      title: "name.en",
      subtitle: "name.fr",
    },
  },
};

export default service;
