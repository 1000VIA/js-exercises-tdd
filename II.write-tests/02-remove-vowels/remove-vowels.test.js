let removeVowels = require("./remove-vowels");

test("remove vowels from word", function() {
  let result = removeVowels("samuel");
  let output = removeVowels(result);
  console.log(output);

  expect(output).toEqual(result);
});
