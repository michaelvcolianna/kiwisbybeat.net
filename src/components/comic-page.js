import * as React from 'react'
import { Link } from 'gatsby'

import urlFromPath from '@components/url-from-path'

const ComicPage = ({ parent, pagePath, pageNav, children }) => {
  const edge = pageNav.filter(nav => {
    return nav.node.fileAbsolutePath === pagePath
  })

  const previous = edge[0].previous ?? null
  const next = edge[0].next ?? null

  return (
    <div>
      <Link to={`/${urlFromPath(parent.fileAbsolutePath)}`}>
        ^ Back to {parent.frontmatter.title}
      </Link>

      {children}

      <ul>
        <li>
          {previous
            ? <Link to={`../${urlFromPath(previous.fileAbsolutePath)}`}>‹ Previous</Link>
            : <span>‹ Previous</span>
          }
        </li>

        <li>
          {next
            ? <Link to={`../${urlFromPath(next.fileAbsolutePath)}`}>Next ›</Link>
            : <span>Next ›</span>
          }
        </li>
      </ul>
    </div>
  )
}

export default ComicPage
