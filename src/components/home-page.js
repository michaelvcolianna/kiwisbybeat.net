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

        <div className={styles.leadBig}>
          <span>A reimagining of the <strong>Kiwis by Beat!</strong> web site by <em>Ryan Armand</em>.</span>

          <div>
            <a href="#about">
              About
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1" width="1"><path fill="currentColor" d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
            </a>

            <a href="#news">
              Site News
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1" width="1"><path fill="currentColor" d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
            </a>
          </div>
        </div>

        <div className={styles.discord}>
          <h3>searching for kiwis!</h3>

          <p>Thanks to the hard work of <strong>essdee</strong>, there's a Discord server for fans of Ryan's work. Whether you're actively looking for Ryan or just appreciative of his work & would like to chat, join us using the link below! (It should be an open invite but reach out if not.)</p>

          <a
            href="https://discord.gg/S7HYmBQuqE"
            rel="noreferrer"
            aria-describedby="label-external"
          >
            <svg aria-label="Discord" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 725 200" fill="currentColor">
              <path d="M105.9 83.2c-5.7 0-10.2 4.9-10.2 11s4.6 11 10.2 11c5.7 0 10.2-4.9 10.2-11s-4.6-11-10.2-11zm-36.5 0c-5.7 0-10.2 4.9-10.2 11s4.6 11 10.2 11c5.7 0 10.2-4.9 10.2-11 .1-6.1-4.5-11-10.2-11z"/>
              <path d="M154.5 0h-134C9.2 0 0 9.2 0 20.5v134C0 165.8 9.2 175 20.5 175h113.4l-5.3-18.3 12.8 11.8 12.1 11.1 21.6 18.7V20.5C175 9.2 165.8 0 154.5 0zm-38.6 129.5s-3.6-4.3-6.6-8c13.1-3.7 18.1-11.8 18.1-11.8-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.4-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.6-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.2-1.8-1-2.8-1.7-2.8-1.7s4.8 7.9 17.5 11.7c-3 3.8-6.7 8.2-6.7 8.2-22.1-.7-30.5-15.1-30.5-15.1 0-31.9 14.4-57.8 14.4-57.8 14.4-10.7 28-10.4 28-10.4l1 1.2c-18 5.1-26.2 13-26.2 13s2.2-1.2 5.9-2.8C63.5 53 72 51.8 75.5 51.4c.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.5 0 0-7.9-7.5-24.9-12.6l1.4-1.6s13.7-.3 28 10.4c0 0 14.4 25.9 14.4 57.8 0-.1-8.4 14.3-30.5 15zm151-86.7h-33.2v37.3l22.1 19.9V63.8h11.8c7.5 0 11.2 3.6 11.2 9.4v27.7c0 5.8-3.5 9.7-11.2 9.7h-34v21.1h33.2c17.8.1 34.5-8.8 34.5-29.2V72.7c.1-20.8-16.6-29.9-34.4-29.9zm174 59.7V71.9c0-11 19.8-13.5 25.8-2.5L485 62c-7.2-15.8-20.3-20.4-31.2-20.4-17.8 0-35.4 10.3-35.4 30.3v30.6c0 20.2 17.6 30.3 35 30.3 11.2 0 24.6-5.5 32-19.9l-19.6-9c-4.8 12.3-24.9 9.3-24.9-1.4zm-60.5-26.4c-6.9-1.5-11.5-4-11.8-8.3.4-10.3 16.3-10.7 25.6-.8l14.7-11.3c-9.2-11.2-19.6-14.2-30.3-14.2-16.3 0-32.1 9.2-32.1 26.6 0 16.9 13 26 27.3 28.2 7.3 1 15.4 3.9 15.2 8.9-.6 9.5-20.2 9-29.1-1.8l-14.2 13.3c8.3 10.7 19.6 16.1 30.2 16.1 16.3 0 34.4-9.4 35.1-26.6 1-21.7-14.8-27.2-30.6-30.1zm-67 55.5h22.4V42.8h-22.4zm377.7-88.8h-33.2v37.3L680 100V63.8h11.8c7.5 0 11.2 3.6 11.2 9.4v27.7c0 5.8-3.5 9.7-11.2 9.7h-34v21.1h33.3c17.8.1 34.5-8.8 34.5-29.2V72.7c0-20.8-16.7-29.9-34.5-29.9zm-162.9-1.2c-18.4 0-36.7 10-36.7 30.5v30.3c0 20.3 18.4 30.5 36.9 30.5 18.4 0 36.7-10.2 36.7-30.5V72.1c0-20.4-18.5-30.5-36.9-30.5zm14.4 60.8c0 6.4-7.2 9.7-14.3 9.7-7.2 0-14.4-3.1-14.4-9.7V72.1c0-6.5 7-10 14-10 7.3 0 14.7 3.1 14.7 10zm102.9-30.3c-.5-20.8-14.7-29.2-33-29.2H577v88.8h22.7v-28.2h4l20.6 28.2h28l-24.2-30.5c10.7-3.4 17.4-12.7 17.4-29.1zm-32.6 12h-13.2V63.8h13.2c14.1 0 14.1 20.3 0 20.3z"/>
            </svg>
          </a>
        </div>

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
          Feel free to send me a message on GitHub/Twitter/Facebook if you have any of the missing images, or if you have better names for some of the series/parts.
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
          This page has direct links to the comics, featuring some cards I put together for them, and there is a menu to access them from anywhere, too.
          Each comic has a button to begin reading.
          If it's a series, then there are multiple buttons with the names of each portion.
          When you're going through the pages, the previous &amp; next buttons are at the bottom, along with a full list of all the pages.
        </p>

        <p>
          A huge goal for this site to make the comics more accessible.
          A scant few have descriptions right now.
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
