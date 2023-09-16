export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'text',
    },
    {
      name: 'long_description',
      title: 'Long Description',
      type: 'text',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          name: 'link',
          title: 'Link',
          type: 'link',
        },
      ],
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        {
          name: 'technology',
          title: 'Technology',
          type: 'technology',
        },
      ],
    },
  ],
}
