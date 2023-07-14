import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
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
