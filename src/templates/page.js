import React from 'react'
import { graphql, Link } from 'gatsby'

import HomePage from '@components/home-page'
import SeriesPage from '@components/series-page'
import ComicPage from '@components/comic-page'

import ExternalLink from '@components/external-link'
import urlFromPath from '@components/url-from-path'

const Components = {
  home: HomePage,
  chapter: SeriesPage,
  docs: ComicPage
}

const PageTemplate = ({
  data: {
    page: {
      pagePath,
      frontmatter,
      html
    },
    parent,
    series: {
      tableOfContents
    },
    comics: {
      pages,
      pageNav
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
        <Link to="/">
          Kiwis by Beat!
        </Link>

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
        <LayoutComponent
          parent={parent}
          pages={pages}
          pagePath={pagePath}
          pageNav={pageNav}
        >
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </LayoutComponent>
      </main>

      <footer>
        Comics © 2003-2015 by <ExternalLink href="https://en.wikipedia.org/wiki/Ryan_Armand">Ryan Armand</ExternalLink>.
        <br />
        Site 2019-now by <ExternalLink href="https://github.com/michaelvcolianna">MVC</ExternalLink>.
      </footer>

      <div hidden>
        <span id="label-external">Opens in a new window/tab</span>
      </div>
    </>
  )
}

export const query = graphql`
  query($id: String!, $parent: String, $series: String) {
    page: markdownRemark(id: { eq: $id }) {
      id
      pagePath: fileAbsolutePath
      frontmatter {
        title
      }
      html
    }
    parent: markdownRemark(fileAbsolutePath: { regex: $parent }) {
      id
      fileAbsolutePath
      frontmatter {
        title
      }
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
      pageNav: edges {
        node {
          id
          fileAbsolutePath
        }
        next {
          id
          fileAbsolutePath
          frontmatter {
            title
          }
        }
        previous {
          id
          fileAbsolutePath
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default PageTemplate
