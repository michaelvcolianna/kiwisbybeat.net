import * as React from 'react'
import { Link } from 'gatsby'

import urlFromPath from '@components/url-from-path'

// Inline component for the previous/next navigation
const PageLink = ({ href, label }) => {
  return (
    <li>
      {href
        ? <Link to={href}>{label}</Link>
        : <span>{label}</span>
      }
    </li>
  )
}

const ComicPage = ({ title, body, parent, pagePath, pageNav }) => {
  // Get the edge for this page
  const edge = pageNav.find(nav => {
    return nav.node.fileAbsolutePath === pagePath
  })

  // Set the URLs for previous/next, if present
  const previous = edge.previous
    ? `../${urlFromPath(edge.previous.fileAbsolutePath)}`
    : null
  const next = edge.next
    ? `../${urlFromPath(edge.next.fileAbsolutePath)}`
    : null

  return (
    <>
      <section>
        <Link to={`/${urlFromPath(parent.fileAbsolutePath)}`}>
          ^ Back to {parent.frontmatter.title}
        </Link>

        <h1>{parent.frontmatter.title}: {title}</h1>

        <div dangerouslySetInnerHTML={{ __html: body }} />
      </section>

      <nav aria-labelledby="label-pages-nav">
        <span id="label-pages-nav">{parent.frontmatter.title} pages</span>

        <ul>
          <PageLink href={previous} label="‹ Previous" />
          <PageLink href={next} label="Next ›" />
        </ul>
      </nav>
    </>
  )
}

export default ComicPage
