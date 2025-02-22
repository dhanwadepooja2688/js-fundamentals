// define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below

function numbers(lower, upper) {
  let array1 = []
  let num1 = upper - lower

  for (i = 0; i <= num1; i++) {
    array1[i] = lower + i
  }
  return array1
}

let mynumbers = numbers(1, 3)
console.log(mynumbers)

// define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below

function value(string1, num) {
  const uppercaseAlphabet = string1.toUpperCase()
  let word = ''
  for (i = 0; i < num; i++) {
    word = word + '!'
    console.log(word)
  }
  return uppercaseAlphabet + word
}

let myvalue = value('disaster', 1)
console.log(myvalue)

// change the exported value to be the name of the function you defined
module.exports = {
  a: numbers, // change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: value // change undefined to be the name of the function defined to return the string with exclamations (the second todo)
}
