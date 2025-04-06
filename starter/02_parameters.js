// TODO: Write a function 'totalScores' that takes an array of numbers
// TODO: Return the sum of all numbers in the array

let ExampleScores = [0,12,8,5]

function totalScores(scores) {
  // Your code here
  // Iterare through the array of scores
  let total = 0
  for (let index = 0; index < scores.length; index++) {
    const element = scores[index];
      // Add to the total
      total += element
  }
  // Print the total
  console.log(total)
}

totalScores(ExampleScores)

module.exports = { totalScores };
