// TODO: Write a function 'move' that simulates a rocket moving back and forth in the console
// TODO: Use 'console.clear()', 'console.log()', and basic logic with position

const rocketString = 'X=>'
let rocketMargin = ''

function move() {
  // Your code here
  console.clear()
  console.log(rocketMargin+rocketString)
  rocketMargin += ' '
}

for (let i = 0; i < 20; i++) {
  setTimeout(move,i*500)
}

module.exports = { move };
