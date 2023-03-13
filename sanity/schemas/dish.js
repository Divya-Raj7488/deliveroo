export default {
    name: 'Dishes',
    type: 'document',
    title: 'Dishes',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Dishes',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'Image',
        type: 'image',
        title: 'Image of the Dish',
      },
    ],
  }
  