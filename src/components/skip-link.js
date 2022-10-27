import * as React from 'react'

import * as styles from './skip-link.module.scss'

const SkipLink = () => {
  return (
    <a href="#content" className={styles.skipContent}>Skip to content</a>
  )
}

export default SkipLink
