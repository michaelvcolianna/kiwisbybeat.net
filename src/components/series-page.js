import * as React from 'react'
import { Link } from 'gatsby'

import urlFromPath from '@components/url-from-path'

const pageUrl = (parent, child) => {
  return `/${urlFromPath(parent)}/${urlFromPath(child)}`
}

const SeriesPage = ({ parent, pages, children }) => {
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

      {children}

      <Link to="part-1">
        Begin Reading ›
      </Link>
    </>
  )
}

export default SeriesPage
