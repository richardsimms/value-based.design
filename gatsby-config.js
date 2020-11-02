module.exports = {
  siteMetadata: {
    title: 'Richard Simms',
    description: 'Richard Simms is a user experience and interaction design expert in Melbourne. He is focused on optimisations and value-based design practices for eCommerce.',
    keywords: 'UX, Design, Product, human-centered, UI, Strategy, value-based, service, Lean UX, App, Website, sketch, figma, prototypes, startup, ',
    siteUrl: `https://www.rsimms.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: `images`,
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet', 
    //'gatsby-plugin-favicon',
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.rsimms.com',
        sitemap: 'https://www.rsimms.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-56512737-4",
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Fira Sans\:300,400,500,700`, 
          `Fira Sans Condensed\:500`, 
          `Roboto`, 
          `Pacifico`
        ],
        
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 295758,
        sv: 6
      },
    },

  ],
};