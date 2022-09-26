import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDir = path.join(process.cwd(), 'content')

// Recursively get all the files in the content directory
const getAllFiles = (dirPath, arrayOfFiles) => {
  let files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(file => {
    if(fs.statSync(`${dirPath}/${file}`).isDirectory()) {
      arrayOfFiles = getAllFiles(`${dirPath}/${file}`, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(dirPath, '/', file))
    }
  })

  return arrayOfFiles
}

// Read a file and parse
const getFile = async (filePath) => {
  // Read the contents of the file
  const fileContents = fs.readFileSync(filePath, 'utf8')

  // Use gray-matter to parse the metadata
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    ...matterResult.data,
    contentHtml
  }
}

const getFilesData = () => {
  const fileNames = getAllFiles(contentDir)

  let allFilesData = []

  fileNames.forEach(file => {
    // Retrieve the parsed paths of the required elements
    const filePath = path.parse(file)
    const dirPath = path.parse(filePath.dir)

    // Remove the ordering numbers
    const ordering = /^\d+./gm
    const series = dirPath.base.replace(ordering, '')
    const comic = filePath.name.replace(ordering, '')

    if(series !== 'content') {
      // Read markdown file as string
      const fileContents = fs.readFileSync(file)

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      if(!allFilesData[series]) {
        allFilesData[series] = []
      }

      allFilesData[series][comic] = {
        file,
        ...matterResult.data
      }
    }
  })

  return allFilesData
}

export function getAllPaths() {
  const allFiles = getFilesData()
  const allFilesKeys = Object.keys(allFiles)

  let allPaths = []

  // Double-loop and build the paths without ordering numbers
  allFilesKeys.forEach(series => {
    const allComicsKeys = Object.keys(allFiles[series])

    allComicsKeys.forEach(comic => {
      // Skip the base index
      if(series !== 'content') {
        let path = `${series}`

        if(comic !== 'index') {
          path = path + `/${comic}`
        }

        allPaths.push({
          params: {
            slug: [path]
          }
        })
      }
    })
  })

  return allPaths
}

export async function getPageData(slug = null) {
  let filePath = path.join(contentDir, 'index.md')

  if(slug) {
    const allFiles = getFilesData()

    // Retrive the appropriate file path
    const file = slug[1] || 'index'
    filePath = allFiles[slug[0]][file].file
  }

  // Read the contents of the file
  const fileContents = fs.readFileSync(filePath, 'utf8')

  // Use gray-matter to parse the metadata
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    ...matterResult.data,
    contentHtml
  }
}
