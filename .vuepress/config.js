module.exports = {
  title: 'NonFungibleTeam',
  ga: 'UA-48750126-1',
  locales: {
    '/': {
      lang: 'en-EN',
      title: 'NonFungibleTeam',
      description: 'Non Fungible Team',
    },
  },
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/vuetify@1.x/dist/vuetify.min.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: `https://fonts.googleapis.com/icon?family=Material+Icons`,
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Cardo&display=swap',
      },
    ],
    ['link', { rel: 'icon', href: `/assets/ccrn-icon.jpg` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  //plugins: [['@vuepress/google-analytics', { ga: 'UA-48750126-1' }]],
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      config.devServer = {
        hot: false,
      }
    }
  },
  serviceWorker: true,
  host: 'localhost',
  themeConfig: {
    search: false,
    repo: 'NonFungibleTeam/NFTeam-website',
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'home',
      },
      {
        text: 'About',
        link: '/about.html',
        icon: 'face',
      },
      {
        text: 'Contact',
        link: '/contact.html',
        icon: 'email',
      },
    ],
    serviceWorker: {
      updatePopup: true,
    },
  },
}
