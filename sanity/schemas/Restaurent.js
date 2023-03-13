
export default {
    name: 'Restaurent',
    type: 'document',
      title: 'Restaurent',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Restaurent Name',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'Image',
        type: 'image',
        title: 'Image of the Restaurent',
        
      },
      {
        name: 'Description',
        type: 'string',
        title: 'Short Description',
        validation: (Rule) => Rule.max(200),
      },
      {
        name: 'Location',
        type: 'string',
        title: 'restaurant Address',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Rating',
        validation: (Rule) => Rule.required()
        .min(1)
        .max(5)
        .error('please enter a value between 1 to 5')
        ,
      },
      {
        name: 'type',
        type: 'reference',
        title: 'Category',
        validation: (Rule) => Rule.required(),
        to: [{type:"Category"}],
      },
      {
        name: "dishes",
        type: "array",
        title: "Dishes",
        of:[{type: 'reference', to: [{type: 'Dishes'}] }]
      }
    ]
  }