/**
 * Create a URL from a file path.
 *
 * @param  string  path
 * @return string
 */
const urlFromPath = (path) => {
  // Split, reverse, get second item
  const part = path.split('/').reverse()[1]

  // Strip the numbering and return
  return part.replace(/^\d+./gm, '')
}

export default urlFromPath
