// TODO: Write a function 'applyDiscount' that takes a price and a callback function
// TODO: The callback should apply a discount to the price
// TODO: Also create a function 'tenPercentOff' that returns 90% of a given value



function applyDiscount(price, discountFn) {
  // Your code here
  let discounted = discountFn(price) // puts discounted value in a variable
  console.log(discounted) // prints the discounted amount
}

function tenPercentOff(amount) { // this actually does the math
  // Your code here
  return 0.9 * amount // calculates 10% off by multiplying by .9
}

applyDiscount(100,tenPercentOff)

module.exports = { applyDiscount, tenPercentOff };
