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


function addNumbers(numbers) {
    let sum = 0
    numbers.forEach(function(number) {
        sum += number
    })
    return sum
}

module.exports = addNumbers