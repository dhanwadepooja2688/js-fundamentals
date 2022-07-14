function transformString(string1, number) {
  let text = string1.toUpperCase()

  for (let i = 0; i <number; i++) {
    text = text + '!'
  }
  return text
}

console.log(transformString('disaster', 2))
console.log(transformString('emergency', 5))
console.log(transformString('not too bad', 1))
