import * as React from 'react'
import { Link } from 'gatsby'

import pageUrl from '@components/page-url'
import urlFromPath from '@components/url-from-path'

import * as styles from './comic-page.module.scss'

// Inline component for the previous/next navigation
const PageLink = ({ href, children }) => {
  return (
    <>
      {href
        ? <Link to={href}>{children}</Link>
        : <button disabled>{children}</button>
      }
    </>
  )
}

const ComicPage = ({ frontmatter, body, parent, pagePath, pages, pageNav }) => {
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
      <section className={styles.comicBody}>
        <Link to={`/${urlFromPath(parent.fileAbsolutePath)}`} className={styles.backLink}>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="1" width="0.75"><path fill="currentColor" d="M32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c53 0 96-43 96-96l0-306.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 416c0 17.7-14.3 32-32 32l-96 0z"/></svg>

          Back
        </Link>

        <h1>{parent.frontmatter.title}: {frontmatter.title}</h1>

        <article className={styles.markdown} dangerouslySetInnerHTML={{ __html: body }} />
      </section>

      <nav aria-labelledby="label-pages-nav">
        <span className="sr-only" id="label-pages-nav">
          {parent.frontmatter.title} pages
        </span>

        <ul className={styles.pageNav}>
          <li className={styles.previous}>
            <PageLink href={previous}>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="1" width="0.625"><path fill="currentColor" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>

              <span className="sr-only">Previous page</span>
            </PageLink>
          </li>

          <li className={styles.allLinks}>
            <h3>All pages</h3>

            <ul>
              {pages.map(link => (
                <li key={link.id}>
                  <Link to={pageUrl(parent.fileAbsolutePath, link.fileAbsolutePath)}>
                    {link.frontmatter.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className={styles.next}>
            <PageLink href={next} className={styles.next}>
              <span className="sr-only">Next page</span>

              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="1" width="0.625"><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
            </PageLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default ComicPage
