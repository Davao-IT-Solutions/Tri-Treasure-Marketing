// index.js
const fs = require('fs')
const parseMarkdown = require('front-matter-markdown')
const allFiles = []
// const allTypes = []
/**
 * getFiles - Get list of files in directory
 * @param {string} dir
 * @returns {Array} Array of objects
 */
const getFiles = (dir, fname) => {
  const filelist = []

  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir)
    files.forEach((file) => {
      const markdownFile = fs.readFileSync(`${dir}${file}`, 'utf-8')
      const fileContents = parseMarkdown(markdownFile)
      const date = fileContents.date
      const slug = file
        .split('.')
        .slice(0, -1)
        .join('.')
      const type = fileContents.type
      const obj = { date, slug }
      const obj2 = { date, fname, slug }

      filelist.push(obj)
      allFiles.push(obj2)
      // allTypes.push(type)
    })
  }
  return filelist
}

/**
 * Write blogs json file
 */
const writeJsonRoutes = async (dir, fname) => {
  const fileArray = await getFiles(dir, fname)

  // Order array by date (default asc)
  const sortedArray = await fileArray.sort((a, b) => {
    return a.date.getTime() - b.date.getTime()
  })

  // Reverse array and write to JSON
  const reversedArray = await sortedArray.reverse()
  const jsonContent = await JSON.stringify(reversedArray)

  fs.writeFile(`content/${fname}.json`, jsonContent, (err) => {
    if (err) { throw new Error(err) }
  })
}

writeJsonRoutes('content/products/', 'products')

const writeAllRoutes = async () => {
  // Order array by date (default asc)
  const sortedArray = await allFiles.sort((a, b) => {
    return a.date.getTime() - b.date.getTime()
  })

  // Reverse array and write to JSON
  const reversedArray = await sortedArray.reverse()
  const jsonContent = await JSON.stringify(reversedArray)

  fs.writeFile('content/all.json', jsonContent, (err) => {
    if (err) { throw new Error(err) }
  })
}

writeAllRoutes()

// const writeAllTypes = async () => {
//   const uniqueSet = Array.from(new Set(allTypes))
//   const sortedArray = await uniqueSet.sort()
//   const jsonContent = await JSON.stringify(sortedArray)

//   fs.writeFile('content/allTypes.json', jsonContent, (err) => {
//     if (err) { throw new Error(err) }
//   })
// }

// writeAllTypes()
