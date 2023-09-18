import {Rule} from 'sanity'

export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
    },
    {
      name: 'href',
      title: 'Href',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image'
    }
  ],
}
