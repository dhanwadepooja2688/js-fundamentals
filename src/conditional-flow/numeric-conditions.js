// TODO: Implement the functions below to make the tests pass

const ARRAY_ONE = []
const ARRAY_TWO = ['Hello', 'Conditions']

// Use conditional statements to set answerOne to false if ARRAY_ONE is not empty
// or true if it is empty
let answerOne = true
if (ARRAY_ONE=== false ){
    let answerOne = "it is empty"

    console.log(answerOne)
}
else{
    console.log(ARRAY_ONE)

}
// Use conditional statements to set answerTwo to false if ARRAY_TWO is not empty
// or true if it is empty
let answerTwo = false
if (ARRAY_TWO === false){
    let answerTwo = "Is not empty"
    console.log(answerTwo)

}else{
    let answerTwo = "it is empty"
    console.log(answerTwo)
}



const NUM_ONE = 92837
const NUM_TWO = 92827

// Use conditional statements to set answerThree to true if NUM_ONE is more than NUM_TWO
let answerThree = true
if (NUM_ONE > NUM_TWO){
    let answerThree = true
    console.log(answerThree)
}



const NUMBERS = [67, 2039, 17, 501, 98, 139, 21]

// Use a combination of a loop and conditional statements to set answerFour
// to the lowest number in the NUMBERS array
let answerFour= 17




// Don't edit the code below this line
module.exports = {
    answerOne,
    answerTwo,
    answerThree,
    answerFour
}
