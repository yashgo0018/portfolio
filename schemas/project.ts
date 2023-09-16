import {Rule} from 'sanity'

export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
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
          type: 'projectlink',
        },
      ],
    },
  ],
}
