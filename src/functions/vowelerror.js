function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  str =str.toLowerCase()
  let vowelCount = 0

  for (let i = 0; i < str.length; i++) {

    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelCount++
      }
      
    }
  }
  return vowelCount

}
console.log(countVowels('HELLO WORLD'))
console.log(countVowels('GoOdbye CrUeL wOrld, dEbugging is hArd'))
}
