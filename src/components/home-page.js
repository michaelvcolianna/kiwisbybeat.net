import * as React from 'react'
import { Link } from 'gatsby'

import ExternalLink from '@components/external-link'
import Card from '@components/card'

import * as styles from './home-page.module.scss'

const HomePage = ({ toc, body }) => {
  return (
    <>
      <section>
        <h1 className="sr-only">Kiwis by Beat!</h1>

        <p className={styles.leadBig}>
          A reimagining of the Kiwis by Beat! web site by Ryan Armand.

          <a href="#about">
            More
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1" width="1"><path fill="currentColor" d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
          </a>

          <a href="#news">
            Site News
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1" width="1"><path fill="currentColor" d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
          </a>
        </p>

        <div className={styles.comics}>
          <h3>Comics</h3>

          <ul>
            {toc.map(comic => (
              <li key={comic.id}>
                <Card comic={comic} />
              </li>
            ))}

          </ul>
        </div>
      </section>

      <section className={styles.about} id="about">
        <h3>About</h3>

        <p>
          This site was lovingly pieced together by <ExternalLink href="https://github.com/michaelvcolianna">Michael V. Colianna</ExternalLink>.
          In most cases, I have tried to keep the names of parts intact per appearance on the original site, whether those were errors by Ryan or otherwise.
          In some cases I had to guess, though.
          Feel free to send me a message on GitHub if you have any of the missing images, or if you have better names for some of the series/parts.
        </p>

        <p>
          Since the original domain expired, this is a fan archive of the content from kiwisbybeat.com, based off the hard work of <ExternalLink href="https://github.com/tgle/kiwisbybeat-archive">Toggle</ExternalLink>.
          You can <ExternalLink href="https://kiwisbybeat.netlify.com">view a mirror of the original site here</ExternalLink>.
          It also includes some content from <ExternalLink href="http://kiwisbybeat.byethost12.com/">another mirror</ExternalLink> by <ExternalLink href="https://en.wikipedia.org/wiki/User:KiwiEnquirer">KiwiEnquirer</ExternalLink>.
        </p>

        <p>
          <strong>If nothing else, please read <Link to="/minus">minus!</Link> and/or <Link to="/pelen-purul">The Mildly Inconvenient Journey of Pelen Purul</Link>.
          All of Ryan’s comics are great but those two are truly phenomenal.</strong>
        </p>

        <p>
          A huge goal for this site to make the comics more accessible.
          A few have descriptions right now.
          It's a long process to add image captions, but worthwhile so <em>everyone</em> can enjoy Ryan's comics.
          If you're able to contribute some, please reach out!
          Any help is appreciated!
        </p>
      </section>

      <section className={styles.news} id="news">
        <h3>News</h3>

        <div dangerouslySetInnerHTML={{ __html: body }} />
      </section>
    </>
  )
}

export default HomePage
