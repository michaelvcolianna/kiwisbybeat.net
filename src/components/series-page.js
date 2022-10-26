import * as React from 'react'
import { Link } from 'gatsby'

import urlFromPath from '@components/url-from-path'

import * as styles from './series-page.module.scss'

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

const SeriesPage = ({ frontmatter, body, parent, pages }) => {
  const { title, group } = frontmatter

  return (
    <>
      <article className={styles.seriesBlock}>
        <h1>{title}</h1>

        <div
          className={styles.seriesMd}
          dangerouslySetInnerHTML={{ __html: body }}
        />

        <div className={styles.seriesPages}>
          <p>This {group ? 'series' : 'comic'} has {pages.length} pages.</p>

          {group
            ? (
            <nav aria-labelledby="label-comics-nav">
              <span className="sr-only" id="label-comics-nav">
                {parent.frontmatter.title} pages
              </span>

              <ul>
                {pages.map(link => (
                  <li key={link.id}>
                    <Link to={pageUrl(parent.fileAbsolutePath, link.fileAbsolutePath)}>
                      {link.frontmatter.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            )
            : (
            <Link to="part-1" className={styles.readLink}>
              Begin Reading ›
            </Link>
            )
          }
        </div>
      </article>
    </>
  )
}

export default SeriesPage
