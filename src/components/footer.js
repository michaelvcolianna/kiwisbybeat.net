import * as React from 'react'

import ExternalLink from '@components/external-link'

import * as styles from './footer.module.scss'

const Footer = () => {
  return (
    <>
      <footer className={styles.siteFooter}>
        <span>Comics © 2003-2015 by <ExternalLink href="https://en.wikipedia.org/wiki/Ryan_Armand">Ryan Armand</ExternalLink></span>
        <br />
        <span>Site 2019-{new Date().getFullYear()} by <ExternalLink href="https://github.com/michaelvcolianna">MVC</ExternalLink></span>
      </footer>

      <div hidden>
        <span id="label-external">Opens in a new window/tab</span>
      </div>
    </>
  )
}

export default Footer
