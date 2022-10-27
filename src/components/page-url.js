import urlFromPath from '@components/url-from-path'

/**
 * Make a URL for a comic page.
 *
 * @param  string  parent
 * @param  string  child
 * @return string
 */
 const pageUrl = (parent, child) => {
  return `/${urlFromPath(parent)}/${urlFromPath(child)}`
}

export default pageUrl
