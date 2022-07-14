// Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello'

let answerOne
if ( STR_ONE=== 'Hello'){
 
  answerOne = true
}



// Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye'

let answerTwo 
if (STR_TWO === 'Goodbye'){

  answerTwo= true
}





// Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello'
const STR_FOUR = 'Good'

let answerThree
if (STR_THREE> STR_FOUR)
{
  answerThree=true
}


// Use a combination of a loop and conditional statements to set answerFour
// to false if STR_FIVE has an odd number of vowels, or true if it has an
// even number
const STR_FIVE = 'Alex'
let vowels = ["a,e,i,o,u"]
let vowelsnumber=0
for (let i=0;i<STR_FIVE.length; i++)
{
if (STR_FIVE[i]== 'a'|| STR_FIVE[i]=='e'  || STR_FIVE[i]=='i' || STR_FIVE[i]=='o' || STR_FIVE[i]=='u' )
  {
vowelsnumber= vowelsnumber +1

  }

}
let answerFour
if (vowelsnumber % 2===0){
answerFour=false
}
else {
  answerFour=true
}






// Use a combination of a loop and conditional statements to set answerFive
// to false if STR_SIX has an odd number of vowels, or true if it has an
// even number
const STR_SIX = 'Joanna'

let answerFive
//let vowelsnumber=0
for (let i=0; i<STR_SIX.length;i++)
{
  if (STR_SIX[i]=='a'|| STR_SIX[i]=='e' || STR_SIX[i]=='i' || STR_SIX[i]=='o'|| STR_SIX[i]=='u')
  {
    vowelsnumber=vowelsnumber+1
  }
}
if (vowelsnumber %2 ===0)
{
  answerFive= false
}
else{
  answerFour=true
}


// Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla'

let answerSix
if (STR_SEVEN.length % 2 === 1 )
{
  const middle = (STR_SEVEN.length-1)/2
answerSix= STR_SEVEN[middle]
}







// Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex'

let answerSeven
if (STR_EIGHT.length % 2=== 0)
{
  const middle= (STR_EIGHT.slice(1,2))
  answerSeven= STR_EIGHT[middle]
}


// Set answerEight to the appropriate season based on what MONTH is set to
//
// For example, if MONTH is C, answerEight should be 'Winter'
//
// The below table shows the season for each range of months:
//
// March to May: Spring
// June to August: Summer
// September to November: Autumn
// December to February: Winter
//
// Run the test after changing the value of MONTH to check you've covered every month correctly
const MONTH = 'January'
let answerEight 
console.log(answerEight)
if (MONTH==='January'|| MONTH=== 'December'  ||MONTH=== 'February' ) 
{
  answerEight='Winter'
}
else if (MONTH==='March'|| MONTH=== 'April'  ||MONTH=== 'May' ) 
{
  answerEight='Spring'
}
else if (MONTH==='June'|| MONTH=== 'Jully'  ||MONTH=== 'August' ) 
{
  answerEight='Summer'
}
else if (MONTH==='September'|| MONTH=== 'October'  || MONTH=== 'November' ) 
{
  answerEight='Autumn'
}







module.exports = {
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  answerFive,
  answerSix,
  answerSeven,
  MONTH,
  answerEight
}
