import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql }  from 'gatsby'

const Seo = ({ customTitle, customDescription, customUrl, customImage }) => {
  const {
    site: {
      siteMetadata: { siteUrl, title, image, description }
    }
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
          title
          image
          description
        }
      }
    }
  `)

  const seoTitle = customTitle
    ? `${customTitle} | ${title}`
    : title
  const seoDescription = customDescription || description
  const seoUrl = customUrl ? `${siteUrl}/${customUrl}` : siteUrl
  const seoImage = `${siteUrl}${customImage || image}`

  return (
    <Helmet>
      <html lang="en-US" />
      <title>{seoTitle}</title>
      <link rel="canonical" href={seoUrl} />
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta name="image" content={seoImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta property="fb:app_id" content="944126416562574" />
    </Helmet>
  )
}

export default Seo
