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
  author: 'Alfonso Reyes <@mxarc>',

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
    '/gallery': '03f70423afab4b6b8bcaf1c97b1aa734',
    '/blog': 'e9e22c15df974d3bb150e27a6f637807'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'default',
  navigationLinks: [
    {
      title: '💬 Yo',
      pageId: 'f1199d37579b41cbabfc0b5174f4256a'
    },
    {
      title: '🖼️ Fotografía',
      pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
    }
  ]
})
