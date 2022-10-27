import React from 'react'
import { graphql } from 'gatsby'

import Seo from '@components/seo'

import SkipLink from '@components/skip-link'
import Header from '@components/header'
import Footer from '@components/footer'

import HomePage from '@components/home-page'
import SeriesPage from '@components/series-page'
import ComicPage from '@components/comic-page'

import pageUrl from '@components/page-url'
import urlFromPath from '@components/url-from-path'

import '@styles/global.scss'

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

  let description, title, url
  let image = frontmatter.cover ? frontmatter.cover.publicURL : null

  if(pageType === 'chapter') {
    description = frontmatter.description || `The ${frontmatter.title} series on Kiwis by Beat!`
    title = frontmatter.title
    url = urlFromPath(pagePath)
  }

  if(pageType === 'docs') {
    description = `${frontmatter.title} of the ${parent.frontmatter.title} series on Kiwis by Beat!`
    title = `${parent.frontmatter.title} – ${frontmatter.title}`
    url = pageUrl(parent.fileAbsolutePath, pagePath)
  }

  return (
    <>
      <Seo
        customTitle={title}
        customDescription={description}
        customUrl={url}
        customImage={image}
      />

      <SkipLink />

      <Header navLinks={tableOfContents} />

      <main id="content">
        <LayoutComponent
          pagePath={pagePath}
          frontmatter={frontmatter}
          body={html}
          parent={parent}
          toc={tableOfContents}
          pages={pages}
          pageNav={pageNav}
        />
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
        group
        cover {
          publicURL
        }
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
          menu
          title
          cover {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
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
