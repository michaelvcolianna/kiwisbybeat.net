import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import urlFromPath from '@components/url-from-path'

import * as styles from './card.module.scss'

const Card = ({ comic }) => {
  return (
    <Link
      to={`/${urlFromPath(comic.fileAbsolutePath)}`}
      className={styles.card}
    >
      <GatsbyImage
        image={comic.frontmatter.cover.childImageSharp.gatsbyImageData}
        alt=""
      />

      <span>{comic.frontmatter.title}</span>
    </Link>
  )
}

export default Card
