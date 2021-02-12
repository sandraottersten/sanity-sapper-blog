export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6026867b1ee8f0e192198e4a',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-5746tguc',
                  apiId: 'b811886c-dfc7-404d-a2cd-14f97350748d'
                },
                {
                  buildHookId: '6026867b1ee8f0dc7c199158',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-54wv26uv',
                  apiId: 'eca325da-bd82-4400-ab86-df82920a9f5e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sandraottersten/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-54wv26uv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
