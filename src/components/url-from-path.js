const urlFromPath = (path) => {
  const part = path.split('/').reverse()[1]
  const ordering = /^\d+./gm

  return part.replace(ordering, '')
}

export default urlFromPath
