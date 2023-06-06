const project = {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'object',
      fields: [
        {
          title: 'EN',
          name: 'en',
          type: 'string'
        },
        {
          title: 'FR',
          name: 'fr',
          type: 'string'
        }
      ]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'object',
      fields: [
        {
          title: 'EN',
          name: 'en',
          type: 'slug',
          options: { source: 'name.en' }
        },
        {
          title: 'FR',
          name: 'fr',
          type: 'slug',
          options: { source: 'name.fr' }
        }
      ]
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'object',
      fields: [
        {
          title: 'EN',
          name: 'en',
          type: 'array',
          of: [{ type: "block" }],
        },
        {
          title: 'FR',
          name: 'fr',
          type: 'array',
          of: [{ type: "block" }],
        }
      ]
    }
  ]
};

export default project;