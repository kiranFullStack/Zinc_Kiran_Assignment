// COPY FROM HERE ⭐️⭐️⭐️⭐️⭐️⭐️⭐️

const queries = [
  ['Q', ['Ford']],
  ['Q', ['Car']],
  ['Q', ['Review']],
  ['Q', ['Ford', 'Review']],
  ['Q', ['Ford', 'Car']],
  ['Q', ['cooking', 'French']],
]

const pages = [
  ['P', ['Ford', 'Car', 'Review']],
  ['P', ['Review', 'Car']],
  ['P', ['Review', 'Ford']],
  ['P', ['Toyota', 'Car']],
  ['P', ['Honda', 'Car']],
  ['P', ['Car']],
]

function matchStrength(queryKeywords, pageKeywords, n) {
  let strength = 0
  for (let i = 0; i < queryKeywords.length; i++) {
    for (let j = 0; j < pageKeywords.length; j++) {
      if (queryKeywords[i] === pageKeywords[j]) {
        strength += (n - i) * (n - j)
      }
    }
  }
  return strength
}

function printOutput(queries, pages) {
  for (let i = 0; i < queries.length; i++) {
    let strength = {}
    for (let j = 0; j < pages.length; j++) {
      strength[j] = matchStrength(queries[i][1], pages[j][1], 8)
    }
    strength = Object.entries(strength).sort((a, b) => b[1] - a[1])
    let output = 'Q' + (i + 1) + ': '
    for (let k = 0; k < 5 && k < strength.length; k++) {
      if (strength[k][1] !== 0) {
        output += 'P' + (Number(strength[k][0]) + 1) + ' '
      }
    }
    // Output as expected
    console.log(output)
  }
}

printOutput(queries, pages)

// END COPY HERE AND PASTE IT IN YOUR BROWSER CONSOLE👈🏻⭐️⭐️⭐️⭐️⭐️⭐️⭐️
















// Test case for matchStrength
test('matchStrength returns correct strength for query and page', () => {
  const queryKeywords = ['Ford', 'Car']
  const pageKeywords = ['Ford', 'Car', 'Review']
  const n = 8
  const expectedStrength = 113
  const result = matchStrength(queryKeywords, pageKeywords, n)
  expect(result).toBe(expectedStrength)
})

// Test case for printOutput
test('printOutput correctly prints output for queries and pages', () => {
  const queries = [
    ['Q', ['Ford']],
    ['Q', ['Car']],
    ['Q', ['Review']],
  ]
  const pages = [
    ['P', ['Ford', 'Car', 'Review']],
    ['P', ['Review', 'Car']],
    ['P', ['Review', 'Ford']],
  ]
  const expectedOutput = 'Q1: P1 P3 \nQ2: P3 P1 P2 \nQ3: P2 P3 P1 \n'
  const log = console.log
  console.log = jest.fn()
  printOutput(queries, pages)
  expect(console.log.mock.calls[0][0]).toBe(expectedOutput)
  console.log = log
})
