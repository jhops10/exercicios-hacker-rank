function miniMaxSum(arr) {
  let sortedArray = arr.sort((a, b) => a - b);
  let minSum = sortedArray.slice(0, 4).reduce((valorAcumulado, valorAtual) => valorAcumulado + valorAtual, 0);
  let maxSum = sortedArray.slice(1).reduce((valorAcumulado, valorAtual) => valorAcumulado + valorAtual, 0);
  console.log(minSum, maxSum)
}
