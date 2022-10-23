import * as React from 'react'
import { Link } from 'gatsby'

import urlFromPath from '@components/url-from-path'

const Header = ({ navLinks }) => {
  return (
    <header>
      <Link to="/">
        Kiwis by Beat!
      </Link>

      <ul>
        {navLinks.map(link => (
          <li key={link.id}>
            <Link to={`/${urlFromPath(link.fileAbsolutePath)}`}>
              {link.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
