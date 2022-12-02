const fs = require('fs');

const inputFile = 'input_02.txt'

let data
try {
  data = fs.readFileSync(inputFile, 'utf8');
} catch (err) {
  console.error(err);
}

/*

Rock: A X 1
Paper: B Y 2
Scissors: C Z 3

*/

const dataArray = data.split("\n")

const baseScoreMap = {
  X: 1, // rock
  Y: 2, // paper
  Z: 3, // scissors
}

const baseOutcomeMap = {
  X: 0, // lose
  Y: 3, // draw
  Z: 6, // win
}

let total1 = 0, total2 = 0

// calculates score based on outcome
const calculateRound1 = (roundString) => {
  let baseScore = baseScoreMap[roundString[2]]

  if (
    (roundString[0] === 'A' && roundString[2] === 'Y') ||
    (roundString[0] === 'B' && roundString[2] === 'Z') ||
    (roundString[0] === 'C' && roundString[2] === 'X')
  ) {
    return baseScore + 6 // win
  } else if (
    (roundString[0] === 'A' && roundString[2] === 'Z') ||
    (roundString[0] === 'B' && roundString[2] === 'X') ||
    (roundString[0] === 'C' && roundString[2] === 'Y')
  ) {
    return baseScore // lose
  } else {
    return baseScore + 3 // draw
  }
}

const lose = {
  A: 'Z',
  B: 'X',
  C: 'Y'
}

const draw = {
  A: 'X',
  B: 'Y',
  C: 'Z'
}

const win = {
  A: 'Y',
  B: 'Z',
  C: 'X'
}

// calculates score based on selected shape
const calculateRound2 = (roundString) => {
  let baseScore = baseOutcomeMap[roundString[2]] // outcome

  switch (roundString[2]) {
    case 'X':
      return baseScore + baseScoreMap[lose[roundString[0]]]
    case 'Y':
      return baseScore + baseScoreMap[draw[roundString[0]]]
    default:
      return baseScore + baseScoreMap[win[roundString[0]]]
  }
}

dataArray.forEach(round => {
  total1 += calculateRound1(round)
  total2 += calculateRound2(round)
})

// part 1
console.log(`Total 1: ${total1}`) // 11449
// part 2
console.log(`Total 2: ${total2}`) // 13187
