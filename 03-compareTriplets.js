function compareTriplets(a, b) {
  let ptsAlice = 0;
  let ptsBob = 0;

  for (let index = 0; index < a.length; index++) {
    if (a[index] > b[index]) {
      ptsAlice += 1;
    } else if (a[index] < b[index]) {
      ptsBob += 1;
    }
  }

  return [ptsAlice, ptsBob];
}

