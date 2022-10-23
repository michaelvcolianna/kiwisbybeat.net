import React from 'react'
import { graphql } from 'gatsby'

import SkipLink from '@components/skip-link'
import Header from '@components/header'
import Footer from '@components/footer'

import HomePage from '@components/home-page'
import SeriesPage from '@components/series-page'
import ComicPage from '@components/comic-page'

// Dynamic resolver for LayoutContainer component
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
      <SkipLink />

      <Header navLinks={tableOfContents} />

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

      <Footer />
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
