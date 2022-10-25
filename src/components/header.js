import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'gatsby'

import urlFromPath from '@components/url-from-path'

import * as styles from './header.module.scss'

const Header = ({ navLinks }) => {
  const [navOpen, setNavOpen] = useState(false)

  // Handler for the menu button
  const toggleMenu = () => setNavOpen(prev => !prev)

  // Click away handler
  const menuNode = useRef()
  useEffect(() => {
    const clickAwayListener = event => {
      if(!menuNode.current || menuNode.current.contains(event.target)) {
        return
      }

      setNavOpen(false)
    }

    document.addEventListener('mousedown', clickAwayListener)

    return() => {
      document.removeEventListener('mousedown', clickAwayListener)
    }
  }, [menuNode])

  // Escape key handler
  useEffect(() => {
    const keyDownHandler = event => {
      if(event.key === 'Escape' && navOpen) {
        setNavOpen(false)
      }
    }

    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [navOpen])

  return (
    <header className={styles.siteHeader}>
      <a href="/" className={styles.branding}>
        Kiwis by Beat!
      </a>

      <nav
        aria-labelledby="label-series-nav"
        ref={menuNode}
        className={`${styles.menu} ${navOpen ? styles.menuOpen : ''}`}
      >
        <button
          aria-haspopup="true"
          id="label-series-nav"
          onClick={toggleMenu}
          className={styles.toggleButton}
        >
          <span className="sr-only">Comics menu</span>
        </button>

        <div aria-hidden={!navOpen}>
          <ul>
            {navLinks.map(link => (
              <li key={link.id}>
                <Link to={`/${urlFromPath(link.fileAbsolutePath)}`}>
                  {link.frontmatter.menu || link.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
