function getNumbers(words) {
    words.splice(6, 1)
    return Math.max(...words)
}

module.exports = getNumbers;