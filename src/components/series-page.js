import * as React from 'react'
import { Link } from 'gatsby'

import urlFromPath from '@components/url-from-path'

/**
 * Make a URL for a comic page.
 *
 * @param  string  parent
 * @param  string  child
 * @return string
 */
const pageUrl = (parent, child) => {
  return `/${urlFromPath(parent)}/${urlFromPath(child)}`
}

const SeriesPage = ({ title, body, parent, pages, children }) => {
  return (
    <>
      <ul>
        <li>
          <Link to={`/${urlFromPath(parent.fileAbsolutePath)}`}>
            {parent.frontmatter.title}
          </Link>
        </li>

        {pages.map(link => (
          <li key={link.id}>
            <Link to={pageUrl(parent.fileAbsolutePath, link.fileAbsolutePath)}>
              {link.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>

      <h1>{title}</h1>

      <p><em>@todo Adjust layout when implementing design.</em></p>

      <div dangerouslySetInnerHTML={{ __html: body }} />

      <Link to="part-1">
        Begin Reading ›
      </Link>
    </>
  )
}

export default SeriesPage
