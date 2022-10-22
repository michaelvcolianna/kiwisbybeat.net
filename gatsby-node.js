const path = require('path')
const pageTemplate = path.resolve('./src/templates/page.js')

// Add import aliases
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components')
      }
    }
  })
}

exports.createPages = async({ graphql, actions, reporter }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          id
          fileAbsolutePath
        }
      }
    }
  `)

  if(result.errors) {
    reporter.panicOnBuild('Error loading markdownRemark result', result.errors)
  }

  const posts = result.data.allMarkdownRemark.nodes

  posts.forEach(node => {
    // Retrieve the parsed paths for the required elements
    const filePath = path.parse(node.fileAbsolutePath)
    const dirPath = path.parse(filePath.dir)
    const outerPath = path.parse(dirPath.dir)

    // Series and comic start blank
    let series = ''
    let comic = ''

    if(filePath.name !== 'home') {
      // Expression to remove the ordering numbers
      const ordering = /^\d+./gm

      // Update the series accordingly
      series = filePath.name === 'chapter'
        ? dirPath.base.replace(ordering, '')
        : outerPath.base.replace(ordering, '')

      // Update the comic if needed
      if(filePath.name === 'docs') {
        comic = `/${dirPath.base.replace(ordering, '')}`
      }
    }

    // Add the page
    actions.createPage({
      path: `/${series}${comic}`,
      component: pageTemplate,
      context: {
        id: node.id,
        pageType: filePath.name,
        parent: `/${series}\/chapter.md/`,
        series: `/${series}\/(?!chapter)/`
      }
    })
  })
}
