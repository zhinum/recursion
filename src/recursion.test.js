import {
  sumto,
  recurSumTo,
  factorial,
  searchVal,
  countNumbersRecursively,
  permutations,
  fibionacci,
} from "./recursionPractice.js";

let object = {
  foo: "foo",
  bar: {
    bar: "bar",
  },
};
const totalIntegers2 = [[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]; // returns 7
const totalIntegers = { a: 1, b: { a: [5, 10], b: 11 } };

test("correctly sums numbers up to n", () => {
  expect(sumto(5)).toBe(15);
});

test("correctly sums numbers up to n with recursion", () => {
  expect(recurSumTo(5)).toBe(15);
});

test("factorial of numbers with recursion", () => {
  expect(factorial(3)).toBe(6);
});

test("correctly checks for a value in an object", () => {
  expect(searchVal(object, "bar")).toBe(true);
});
test("correctly count numbers nested in an object", () => {
  expect(countNumbersRecursively(totalIntegers)).toBe(4);
});

describe("permutations", () => {
  test("1 possible permutation for a set containing 0 numbers", () => {
    expect(permutations([])).toEqual([[]]);
  });

  test("1 possible permutation for a set containing 1 number", () => {
    expect(permutations([1])).toEqual([[1]]);
  });

  test("2 possible permutations for a set containing 2 numbers", () => {
    expect(permutations([1, 2]).sort()).toEqual(
      [
        [1, 2],
        [2, 1],
      ].sort(),
    );
  });

  test("6 possible permutations for a set containing 3 numbers", () => {
    expect(permutations([1, 2, 3]).sort()).toEqual(
      [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ].sort(),
    );
  });

  test("24 possible permutations for a set containing 4 numbers", () => {
    expect(permutations([1, 2, 3, 4]).sort()).toEqual(
      [
        [1, 2, 3, 4],
        [1, 2, 4, 3],
        [1, 3, 2, 4],
        [1, 3, 4, 2],
        [1, 4, 2, 3],
        [1, 4, 3, 2],
        [2, 1, 3, 4],
        [2, 1, 4, 3],
        [2, 3, 1, 4],
        [2, 3, 4, 1],
        [2, 4, 1, 3],
        [2, 4, 3, 1],
        [3, 1, 2, 4],
        [3, 1, 4, 2],
        [3, 2, 1, 4],
        [3, 2, 4, 1],
        [3, 4, 1, 2],
        [3, 4, 2, 1],
        [4, 1, 2, 3],
        [4, 1, 3, 2],
        [4, 2, 1, 3],
        [4, 2, 3, 1],
        [4, 3, 1, 2],
        [4, 3, 2, 1],
      ].sort(),
    );
  });
});
