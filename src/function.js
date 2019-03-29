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
