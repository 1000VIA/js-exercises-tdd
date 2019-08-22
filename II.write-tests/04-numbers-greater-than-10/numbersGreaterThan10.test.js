let largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
  let input = [4, 10, 32, 9, 21];
  let expected = [32, 21];

  let output = largerThanTen(input);

  expect(output).toEqual(expected);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
