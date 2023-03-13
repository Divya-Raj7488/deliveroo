export default {
  name: 'Category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category Name',
      validation: (Rule) => Rule.required(),
    },
    {
        name: 'Image',
        type: 'image',
        title: 'Image of the Restaurent',
        
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
      },
      {
        name: 'Description',
        type: 'string',
        title: 'Description',
      },

  ]
}
