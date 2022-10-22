import React from 'react'
import { graphql, Link } from 'gatsby'

import HomePage from '@components/home-page'
import SeriesPage from '@components/series-page'
import ComicPage from '@components/comic-page'

const Components = {
  home: HomePage,
  chapter: SeriesPage,
  docs: ComicPage
}

const urlFromPath = (path) => {
  const part = path.split('/').reverse()[1]
  const ordering = /^\d+./gm

  return part.replace(ordering, '')
}

const PageTemplate = ({
  data: {
    page: {
      frontmatter,
      html
    },
    series: {
      tableOfContents
    },
    comics: {
      pages
    }
  },
  pageContext: {
    pageType
  }
}) => {
  const LayoutComponent = Components[pageType]

  return (
    <>
      <header>
        future header component

        <ul>
          {tableOfContents.map(node => (
            <li key={node.id}>
              <Link to={`/${urlFromPath(node.fileAbsolutePath)}`}>
                {node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </header>

      <main id="content">
        {pageType !== 'home' && (
          <ul>
            {pages.map(node => (
              <li key={node.id}>
                <Link to={urlFromPath(node.fileAbsolutePath)}>
                  {node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <LayoutComponent>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </LayoutComponent>
      </main>

      <footer>
        future footer component
      </footer>
    </>
  )
}

export const query = graphql`
  query($id: String!, $series: String) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
    }
    series: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/chapter.md/" } }
      sort: { fields: fileAbsolutePath, order: ASC }
    ) {
      tableOfContents: nodes {
        id
        fileAbsolutePath
        frontmatter {
          title
        }
      }
    }
    comics: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: $series } }
      sort: { fields: fileAbsolutePath, order: ASC }
    ) {
      pages: nodes {
        id
        fileAbsolutePath
        frontmatter {
          title
        }
      }
    }
  }
`

export default PageTemplate
