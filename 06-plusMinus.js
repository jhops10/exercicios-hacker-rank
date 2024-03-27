function plusMinus(arr) {
  let positives = 0;
  let negatives = 0;
  let zero = 0;

  for (let index in arr) {
    if (arr[index] > 0) {
      positives += 1;
    } else if (arr[index] < 0) {
      negatives += 1;
    } else {
      zero += 1;
    }
  }
  positives = (positives / arr.length).toFixed(6);
  negatives = (negatives / arr.length).toFixed(6);
  zero = (zero / arr.length).toFixed(6);

  console.log(positives)
  console.log(negatives)
  console.log(zero)

}
