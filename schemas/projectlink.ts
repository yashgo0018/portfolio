import {Rule} from 'sanity'

export default {
  name: 'projectlink',
  title: 'ProjectLink',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['Demo', 'Code', 'Live'],
      },
    },
    {
      name: 'href',
      title: 'Href',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
