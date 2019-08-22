let removeVowelWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function() {
  let result = ["irina", "etza", "Daniel"];
  let output = removeVowelWords(result);

  expected = ["rn", "tz", "Dnl"];

  expect(output).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
