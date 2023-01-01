export default {
    name: 'blogs',
    title: 'Blogs',
    type: 'document',
    fields: [

        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },



          {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
              { type: 'block' },
              
              
            ]
            
          },
          {
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
          },


    ]};