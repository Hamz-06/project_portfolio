import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'all_images',
      title: 'All Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'tools_used',
      title: 'Tools & Frameworks',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'title_color',
      title: 'Title color',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'secondary_color',
      title: 'secondary color',
      type: 'string',
    }),
    defineField({
      name: 'background_color',
      title: 'Background color',
      type: 'string',
    }),
    defineField({
      name: 'year_created',
      title: 'year created',
      type: 'string',
    }),
    defineField({
      name: 'project_order',
      title: 'Project Order',
      type: 'number',
    }),

    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'url_link',
      title: 'URL Link',
      type: 'url',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),

  ],
})
