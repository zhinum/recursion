function fibLoop(pos) {
  const sequence = [0, 1];
  if (pos < 2) {
    return sequence;
  } else {
    for (let i = 2; i <= pos; i++) {
      let prevVal = pos - 1 + pos - 2;
      sequence.push(prevVal);
    }
    return sequence;
  }
}

function fibRecur(pos) {
  if (pos <= 0) return [0];
  if (pos === 1) return [0, 1];

  let prevSequence = fibRecur(pos - 1);

  let sequence =
    prevSequence[prevSequence.length - 1] +
    prevSequence[prevSequence.length - 2];

  return [...prevSequence, sequence];
}

export { fibRecur };
