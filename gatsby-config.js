module.exports = {
  siteMetadata: {
    title: 'Kiwis by Beat!',
    siteUrl: 'https://kiwisbybeat.net'
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
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
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'tracedSVG'
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
              withWebp: true,
              withAvif: true
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