export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e018fa4de051004574bc4ef',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ft9js3ae',
                  apiId: 'e5425122-f0f9-4505-b9e0-e4aa2bb376cc'
                },
                {
                  buildHookId: '5e018fa4e9ce84ba962ae225',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2xbsv8xy',
                  apiId: '9bc102b5-acde-471c-9eb7-ff1f49b8cf06'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Battleham/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2xbsv8xy.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
