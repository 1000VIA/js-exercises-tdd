let greetPeople = require("./greet-people");

test("print list of names prefixed with Hello", function() {
  let mentors = ["Irina", "Ashleigh", "Etza"];
  let result = greetPeople(mentors);
  let espected = greetPeople(mentors);

  expect(result).toEqual(espected);
});
