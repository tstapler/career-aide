const { execSync } = require('child_process')

const result = execSync('ls "$(npm root)" | grep "jsonresume"').toString()

let lines = result.split('\n')
  .filter(l => l !== '')
  .map(l => l.replace('jsonresume-theme-', ''))

let supportedThemes = []

for (const line of lines) {
  supportedThemes.push(line)
}

module.exports = {
  supportedThemes
}
