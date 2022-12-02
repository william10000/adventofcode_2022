const fs = require('fs');

const inputFile = 'input_01.txt'

let data, max = 0, tally = 0, tallies = []

try {
  data = fs.readFileSync(inputFile, 'utf8');
} catch (err) {
  console.error(err);
}

const dataArray = data.split("\n")

dataArray.forEach(element => {
  if (element.length > 0) {
    tally += parseInt(element)
  } else {
    max = Math.max(max, tally)
    tallies.push(tally)
    tally = 0
  }
})

// part 1
console.log(`Total: ${max}`)

// part 2
tallies.sort((a, b) => b - a)
const topThreeSum = tallies.slice(0,3).reduce((sum, element) => sum += element, 0)
console.log(`Sum top three: ${topThreeSum}`)
