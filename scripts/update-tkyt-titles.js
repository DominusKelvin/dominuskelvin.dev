#!/usr/bin/env node

const fs = require('node:fs/promises')
const path = require('node:path')

const [_, __, ...args] = process.argv

async function updateTkytTitles(pathToSessions = '../src/content/tkyt') {
  console.log(`Updating titles in: ${pathToSessions}`)

  try {
    const files = await fs.readdir(pathToSessions)
    let counter = 1

    for (const file of files) {
      if (path.extname(file) === '.json') {
        const filePath = path.join(pathToSessions, file)
        const data = await fs.readFile(filePath, 'utf8')
        const json = JSON.parse(data)

        if (!json.title.includes('TKYT #')) {
          json.title = `TKYT #${counter}: ${json.title}`
          counter++

          await fs.writeFile(filePath, JSON.stringify(json, null, 2))
          console.log(`Updated: ${file}`)
        } else {
          console.log(`Skipped: ${file} (already contains TKYT #)`)
        }
      }
    }

    console.log('Title update complete.')
  } catch (error) {
    console.error('Error updating titles:', error)
  }
}

updateTkytTitles(args[0])
