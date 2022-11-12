module.exports = {
  siteMetadata: {
    title: 'Kiwis by Beat!',
    description: 'A reimagining of the Kiwis by Beat! web site by Ryan Armand.',
    image: '/kiwishare.jpg',
    siteUrl: process.env.NODE_ENV === 'production'
      ? 'https://kiwisbybeat.net'
      : 'http://localhost:8000'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: `@import "${__dirname}/src/styles/variables"; @import "${__dirname}/src/styles/mixins";`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        'icon': 'src/images/minus.png'
      }
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          placeholder: 'blurred'
        }
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
              maxWidth: 1200,
              withWebp: true
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'images',
        'path': './src/images'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'pages',
        'path': './src/pages/'
      },
      __key: 'pages'
    },
    {

      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'markdown-pages',
        'path': './content'
      },
      __key: 'pages'
    }
  ]
};