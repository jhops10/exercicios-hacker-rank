function diagonalDifference(arr) {
  let leftToRightDiagonal = 0;
  let rightToLeftDiagonal = 0;

  for (let index = 0; index < arr.length; index++) {
    leftToRightDiagonal += arr[index][index];
    rightToLeftDiagonal += arr[index][(arr.length - 1) - index];
  }

  return Math.abs(leftToRightDiagonal - rightToLeftDiagonal);
}