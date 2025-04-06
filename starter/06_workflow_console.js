// TODO: Create a function 'animateSteps' that logs one step from a list every second
// TODO: Use 'setTimeout' or 'setInterval' to log the steps in order

const steps = [
  "Step 1: Create empty cart",
  "Step 2: Add item to cart",
  "Step 3: Calculate total",
  "Step 4: Apply discount",
  "Step 5: Checkout"
];

function animateSteps() {
  // Your code here
  // For each element:
  for (let index = 0; index < steps.length; index++) {
    const step = steps[index];
    // Do in [index] seconds:
    setTimeout(() => {
      // Log the step
      console.log(step)
    },1000*index)
  }
}

// Run code
animateSteps()

module.exports = { animateSteps };
