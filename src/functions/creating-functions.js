// Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

function increment(number) {
  let sum = 0
  sum = number + 1
  return sum
}
let sum2 = increment(2)
console.log(sum2)

// Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below

function myname(name) {
  let str = ''
  let x = str(0).toUpperCase()
  let y = str.slice(1)
  let sum = x + y

  return sum + ':)'
}
myname('edward')

// TODO: change undefined to be the name of the functions you defined
module.exports = {
  a: increment, // change undefined to be the name of the function you defined to increment a number (the first TODO)
  b: myname // change undefined to be the name of the function you defined to say hi (the second TODO)
}
