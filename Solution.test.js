const solution = require("./SolutionAND");

test("returns all the distinct AND-Siblings", () => {
  expect(solution("326")).toEqual(["632","623","362","326","263","236"]);
})

test("one length string input returns input", () => {
  expect(solution("3")).toMatch(/3/);
})

test("non-string input", () => {
   expect(() => solution(23)).toThrow(Error);
})

test("non-string input", () => {
   expect(() => solution(3)).toThrow(Error);
})

test("extracts integers in non-integer input and returns AND-Siblings", () => {
    expect(solution("A 3B2 C6D")).toEqual(["632","623","362","326","263","236"]);
})

test("throws exception if input is empty", () => {
  expect(() => solution("")).toThrow(Error);
});

test("throws exception if input is falsy value", () => {
  expect(() => solution("")).toThrow(Error);
});

test("throws exception if input does not contain integer", () => {
  expect(() => solution("ABC")).toThrow(Error);
});

