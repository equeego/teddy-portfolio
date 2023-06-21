const logo = {
  name: "logo",
  title: "Logo",
  type: "document",
  fields: [
    {
      name: "logo_lg",
      title: "Logo large",
      type: "image",
      options: { hotspot: true }
    },
    {
      name: "logo_sm",
      title: "Logo small",
      type: "image",
      options: { hotspot: true }
    },
    {
      name: "title",
      title: "Logo alt",
      type: "string"
    }
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "title"
    }
  }
};

export default logo;
