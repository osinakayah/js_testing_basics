exports.capitalize = function (word) {
  return word.charAt(0).toUpperCase()+word.substr(1)
}

exports.reverseString = function (word) {
  return word.split('').reverse().join('')
}

exports.calculator = function () {
  const add = (a,b) => a + b
  const subtract =  (a,b) => a - b
  const divide =  (a,b) => a / b
  const multiply =  (a,b) => a * b

  return {
    add,
    subtract,
    divide,
    multiply
  }
}()

exports.anaylze = function(arrayOfNumbers){
  const average = arrayOfNumbers.reduce((sum, c) => sum + c)/arrayOfNumbers.length;
  const min = Math.min(...arrayOfNumbers);
  const max = Math.max(...arrayOfNumbers);
  const length = arrayOfNumbers.length;

  return {
    average,
    min,
    max,
    length
  }
}


exports.decryption = function (word, step) {
  const capitals = generateUpperCaseLetters();
  const lowCapitals = generateLowerCaseLettes()

  const wordsAsArray = word.split('');
  const encryptedWordsOfArray = []
  wordsAsArray.forEach((item) => {
    if (isCharUpperCase(item)) {
      encryptedWordsOfArray.push(getDecryptCeaserChar(capitals, item, step))
    }
    else {
      encryptedWordsOfArray.push(getDecryptCeaserChar(lowCapitals, item, step))
    }
  })

  return encryptedWordsOfArray.join('')
}


exports.encryption = function (word, step) {
  const capitals = generateUpperCaseLetters();
  const lowCapitals = generateLowerCaseLettes()

  const wordsAsArray = word.split('');
  const encryptedWordsOfArray = []
  wordsAsArray.forEach((item) => {
    if (isCharUpperCase(item)) {
      encryptedWordsOfArray.push(getCeaserChar(capitals, item, step))
    }
    else {
      encryptedWordsOfArray.push(getCeaserChar(lowCapitals, item, step))
    }
  })

  return encryptedWordsOfArray.join('')
}

function generateLowerCaseLettes() {
  const lowCapitals = []
  for(let i=10; i < 36; i++){
    lowCapitals.push(i.toString(36))
  }
  return lowCapitals
}

function generateUpperCaseLetters() {
  const capitals = [];
  for(let i=10; i < 36; i++){
    capitals.push(i.toString(36).toUpperCase())
  }
  return capitals
}

function isCharUpperCase(char) {

  if (char === char.toUpperCase()) return true
  return false
}

function getCeaserChar(arrayOfAlphabet, char, step) {
  for(let i = 0; i < arrayOfAlphabet.length; i++){
    const singleChar = arrayOfAlphabet[i]
    if (singleChar === char) {
      return arrayOfAlphabet[(i + step)]
    }
  }
  return ' '
}
function getDecryptCeaserChar(arrayOfAlphabet, char, step) {
  for(let i = 0; i < arrayOfAlphabet.length; i++){
    const singleChar = arrayOfAlphabet[i]
    if (singleChar === char) {
      return arrayOfAlphabet[(i - step)]
    }
  }
  return ' '
}
