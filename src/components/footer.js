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
        <br />
        <span>
          <ExternalLink href="https://twitter.com/KiwisByBeat">Twitter</ExternalLink> | <ExternalLink href="https://facebook.com/kiwisbybeat">Facebook</ExternalLink>
        </span>
      </footer>

      <div hidden>
        <span id="label-external">Opens an external site</span>
        {`<!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->`}
      </div>
    </>
  )
}

export default Footer
