import * as React from 'react'
import { Link } from 'gatsby'

import pageUrl from '@components/page-url'

import * as styles from './series-page.module.scss'

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
          <p>This {group ? 'series' : 'comic'} has {pages.length} page{pages.length !== 1 ? 's' : '' }.</p>

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
              Begin Reading

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1" width="1"><path fill="currentColor" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
            </Link>
            )
          }
        </div>
      </article>
    </>
  )
}

export default SeriesPage
