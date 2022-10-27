import * as React from 'react'

import * as styles from './external-link.module.scss'

const ExternalLink = ({ href, children }) => {
  return (
    <a
      href={href}
      rel="noreferrer"
      aria-describedby="label-external"
      className={styles.externalLink}
    >
      {children}
    </a>
  )
}

export default ExternalLink
