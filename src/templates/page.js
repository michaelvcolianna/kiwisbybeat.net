import React from 'react'
import { graphql } from 'gatsby'

import HomePage from '@components/home-page'
import SeriesPage from '@components/series-page'
import ComicPage from '@components/comic-page'

const Components = {
  home: HomePage,
  chapter: SeriesPage,
  docs: ComicPage
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
    <LayoutComponent>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <pre>TOC {JSON.stringify(tableOfContents, null, 2)}</pre>
      <pre>COMICS {JSON.stringify(pages, null, 2)}</pre>
    </LayoutComponent>
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
    series: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/chapter.md/" } }) {
      tableOfContents: nodes {
        id
        fileAbsolutePath
      }
    }
    comics: allMarkdownRemark(filter: { fileAbsolutePath: { regex: $series } }) {
      pages: nodes {
        id
        fileAbsolutePath
      }
    }
  }
`

export default PageTemplate
