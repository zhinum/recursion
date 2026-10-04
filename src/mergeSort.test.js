import { mergeSort } from "./mergeSort.js";

describe.only("mergeSort", () => {
  test("correctly sort an empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("handles 1 array base case", () => {
    expect(mergeSort([73])).toEqual([73]);
  });

  test("returns an already sorted array unchanged", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts an unsorted array with duplicate values", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });

  test("sorts a multi-digit unsorted array", () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
  });
});
