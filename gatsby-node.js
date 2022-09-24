const path = require('path')
const postTemplate = path.resolve(`./src/templates/post.jsx`)

exports.createPages = async({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if(result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach(node => {
    // Retrieve the parsed paths of the required elements
    const filePath = path.parse(node.internal.contentFilePath)
    const dirPath = path.parse(filePath.dir)

    // Remove the ordering numbers
    const ordering = /^\d+./gm
    const series = dirPath.base.replace(ordering, '')
    const comic = filePath.name.replace(ordering, '')

    if(series !== 'content') {
      let pagePath = `/${series}`

      // Add the end of the path if necessary
      if(comic !== 'index') {
        pagePath = pagePath + `/${comic}`
      }

      createPage({
        path: pagePath,
        component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          id: node.id
        }
      })
    }
  })
}
