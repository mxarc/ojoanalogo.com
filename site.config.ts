import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '5ea8c5bbfdc34ea4b2fb1a6cc611fcea',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'El ojo analogo',
  domain: 'ojoanalogo.com',
  author: 'Alfonso Reyes',

  // open graph metadata (optional)
  description:
    'Bienvenido a mi pequeño rinconcito de internet, donde podrás encontrar información sobre mi trabajo, mis proyectos y mucho más.',

  // social usernames (optional)
  twitter: 'mxarc',
  github: 'mxarc',
  linkedin: 'mxarc98',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    //'/gallery': 'e24fbd1ec6aa47ef99d6b3e25c118170'
    //'/blog': 'e9e22c15df974d3bb150e27a6f637807'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '🖼️ Fotos',
      pageId: 'e50d255b049a4cae84e6a67d59872d37'
    },
    {
      title: '📝 Blog',
      pageId: '2ca6862b36ac4adfb8ff240e0480e733'
    }
  ]
})
