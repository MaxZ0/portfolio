export default {
    name:"project",
    title:"projects",
    type:"document",
    fields:[
        {
            name:"title",
            title:"Title",
            type:"string",
        },
        {
            name:"slug",
            title:"slug",
            type:"slug",
            options:{
                source:"title",
                maxLength: 96,
            }
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
            fields: [
                {
                  name: 'link',
                  type: 'url',
                  options: {
                    isHighlighted: true
                  }
                }
              ]
        },
        {
            name: "tools",
            title: "Tools",
            type: "array",
            of: [
                {
                  type: 'reference',
                  to: [
                    {type: 'skill'}
                  ]
                }
            ]
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },

        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
          },
        
    ]
}