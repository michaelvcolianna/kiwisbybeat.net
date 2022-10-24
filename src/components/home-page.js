import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import ExternalLink from '@components/external-link'

import * as styles from './home-page.module.scss'

const HomePage = ({ body }) => {
  return (
    <>
      <section>
        <h1 className="sr-only">Kiwis by Beat!</h1>

        <StaticImage
          src="../images/website.jpg"
          alt="
            A manipulated screenshot of the old website's front page, with a
            list of comics.
          "
          className={styles.oldSiteImage}
        />

        <p className={styles.leadSmall}>
          The image above is what the original Kiwis by Beat! website used to
          look like, from around 2014 or so.
        </p>

        <p>
          <strong>If nothing else, please read <Link to="/minus">minus!</Link> and/or <Link to="/pelen-purul">The Mildly Inconvenient Journey of Pelen Purul</Link>.
          All of Ryan’s comics are great but those two are truly phenomenal.</strong>
        </p>

        <p>
          This is a reimagining of the Kiwis by Beat! web site by <ExternalLink href="https://en.wikipedia.org/wiki/Ryan_Armand">Ryan Armand</ExternalLink>, pieced together by <ExternalLink href="https://github.com/michaelvcolianna">Michael V. Colianna</ExternalLink>.
          In most cases, I have tried to keep the names of parts intact per appearance on the original site, whether those were errors by Ryan or otherwise.
          In some cases I had to guess, though.
          Feel free to send me a message on GitHub if you have any of the missing images, or if you have better names for some of the series/parts.
        </p>

        <p>
          Since the original domain expired, this is a fan archive of the content from kiwisbybeat.com, based off the hard work of <ExternalLink href="https://github.com/tgle/kiwisbybeat-archive">Toggle</ExternalLink>.
          You can <ExternalLink href="https://kiwisbybeat.netlify.com">view the original site here</ExternalLink>.
          It also includes some content from <ExternalLink href="http://kiwisbybeat.byethost12.com/">another mirror</ExternalLink> by <ExternalLink href="https://en.wikipedia.org/wiki/User:KiwiEnquirer">KiwiEnquirer</ExternalLink>.
        </p>

        <p>
          A huge goal for this site to make the comics more accessible.
          A few have descriptions right now.
          It's a long process to add image captions, but worthwhile so <em>everyone</em> can enjoy Ryan's comics.
          If you're able to contribute some, please reach out!
          Any help is appreciated!
        </p>
      </section>

      <section className={styles.news}>
        <h3>News</h3>

        <div dangerouslySetInnerHTML={{ __html: body }} />
      </section>
    </>
  )
}

export default HomePage
