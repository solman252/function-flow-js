// TODO: Write a function 'move' that simulates a rocket moving back and forth in the console
// TODO: Use 'console.clear()', 'console.log()', and basic logic with position

const rocketString = 'X=>'
let rocketMargin = 0

function move(speed) {
  // Your code here
  console.clear()
  console.log(' '.repeat(rocketMargin)+rocketString)
  rocketMargin += speed
}

for (let i = 0; i < 20; i++) {
  setTimeout(() => {
    move(1)
  }, 500*i);
}

module.exports = { move };
