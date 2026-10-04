import { fibRecur } from "./fibonacci.js";

describe("fibRecur", () => {
  test("correctly get the array of the previous sequence of the position given", () => {
    expect(fibRecur(9)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});
