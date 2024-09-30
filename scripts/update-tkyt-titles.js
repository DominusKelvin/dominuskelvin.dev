#!/usr/bin/env node

const fs = require('fs').promises
const path = require('path')

const [_, __, ...args] = process.argv

async function updateTkytTitles(pathToSessions = '../src/content/tkyt') {
  console.log(`Updating titles in: ${pathToSessions}`)

  try {
    const files = await fs.readdir(pathToSessions)
    let jsonFiles = []

    // Read all JSON files and store their content
    for (const file of files) {
      if (path.extname(file) === '.json') {
        const filePath = path.join(pathToSessions, file)
        const data = await fs.readFile(filePath, 'utf8')
        const json = JSON.parse(data)
        jsonFiles.push({ file, json })
      }
    }

    // Sort files based on the date field
    jsonFiles.sort((a, b) => new Date(a.json.date) - new Date(b.json.date))

    // Update titles
    for (let i = 0; i < jsonFiles.length; i++) {
      const { file, json } = jsonFiles[i]
      const filePath = path.join(pathToSessions, file)

      if (!json.title.includes('TKYT')) {
        json.title = `TKYT #${i + 1} ${json.title}`
        await fs.writeFile(filePath, JSON.stringify(json, null, 2))
        console.log(`Updated: ${file}`)
      } else {
        console.log(`Skipped: ${file} (already contains TKYT #)`)
      }
    }

    console.log('Title update complete.')
  } catch (error) {
    console.error('Error updating titles:', error)
  }
}

updateTkytTitles(args[0])
