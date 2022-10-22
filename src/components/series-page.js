import * as React from 'react'
import { Link } from 'gatsby'

import urlFromPath from '@components/url-from-path'

const SeriesPage = ({ parent, pages, children }) => {
  return (
    <div>
      <ul>
        <li key={parent.id}>
          <Link to={`/${urlFromPath(parent.fileAbsolutePath)}`}>
            {parent.frontmatter.title}
          </Link>
        </li>

        {pages.map(node => (
          <li key={node.id}>
            <Link to={`/${urlFromPath(parent.fileAbsolutePath)}/${urlFromPath(node.fileAbsolutePath)}`}>
              {node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>

      {children}

      <Link to="part-1">
        Begin Reading ›
      </Link>
    </div>
  )
}

export default SeriesPage
