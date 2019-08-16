// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function getNumbers(numbers) {
    const arrNumbers = numbers.filter(element => typeof element === 'number')
    const sum = arrNumbers.reduce((previous, current) => current += previous);
    return sum / arrNumbers.length
}

module.exports = getNumbers;