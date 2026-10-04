// using a loop to sum number to n
function sumto(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

// using recursion to sum munber to n

function recurSumTo(n) {
  if (n === 1) {
    return n;
  } else {
    return n + recurSumTo(n - 1);
  }
}

// using recursion to multiply numbers
function factorial(n) {
  if (typeof n !== "number") return undefined;

  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function searchVal(obj, val) {
  if (typeof val !== "string" || typeof obj !== "object" || obj === null) {
    return false;
  }

  for (const key in obj) {
    const currentVal = obj[key];

    if (currentVal === val) {
      return true;
    }

    if (typeof currentVal === "object" && currentVal !== null) {
      if (searchVal(currentVal, val)) {
        return true;
      }
    }
  }
  return false;
}

function countNumbersRecursively(obj) {
  if (typeof obj !== "object" || obj === null) {
    return 0;
  }
  let intCount = 0;
  for (const key in obj) {
    const value = obj[key];

    if (typeof value === "number") {
      intCount += 1;
    } else if (typeof value === "object" && value !== null) {
      intCount += countNumbersRecursively(value);
    }
  }
  return intCount;
}

function permutations(array) {
  // base case
  if (array.length === 0) {
    return [[]];
  }
  const arrayResult = [];

  for (let i = 0; i < array.length; i++) {
    const currentPosition = array[i];

    const remainingPositions = array.slice(0, i).concat(array.slice(i + 1));

    const recursedPermutaions = permutations(remainingPositions);

    for (const perms of recursedPermutaions) {
      arrayResult.push([currentPosition, ...perms]);
    }
  }
  return arrayResult;
}

export function pascalTraingle(rowNumber) {
  //base case 0
  // base case 1 to build the pascal's triangle
  if (rowNumber === 0) return [];
  if (rowNumber === 1) return [[1]];

  const aboveTraingleArray = pascalTraingle(rowNumber - 1);

  const prevRow = aboveTraingleArray[aboveTraingleArray.length];
  // the pascals triangle starts with 1
  const currentRow = [1];

  for (let i = 0; i < prevRow.length - 1; i++) {
    currentRow.push(prevRow[i] + prevRow[i + 1]);
  }
  // the pascals triangle ends with 1
  currentRow.push[1];
  return [...aboveTraingleArray, currentRow];
}
let object = {
  foo: "foo",
  bar: {
    bar: "bar",
  },
};

export {
  sumto,
  recurSumTo,
  factorial,
  searchVal,
  countNumbersRecursively,
  permutations,
};
