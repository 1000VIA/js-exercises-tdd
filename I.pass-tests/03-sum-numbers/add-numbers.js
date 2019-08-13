// let sum = 0;
// function addNumbers(numbers) {
//   for (i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }

// function addNumbers(numbers) {
//   numbers.forEach(number => console.log(number));
// }

// const suma = addNumbers();
// numbers => numbers.forEach(number => number + number);
let sum = 0;

function addNumbers(numbers) {
  numbers.forEach(function(number) {
    sum = sum + number;
  });
  return sum;
}

module.exports = addNumbers;
