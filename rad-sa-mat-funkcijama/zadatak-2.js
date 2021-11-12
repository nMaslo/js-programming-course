function niz(a) {
  let nizOdDeset = [];

  for (i = 0; nizOdDeset.length < a; i++) {
    let b = Math.round(Math.random() * 50);

    if (nizOdDeset.indexOf(b) === -1) {
      nizOdDeset.push(b);
    }
  }
  console.log(nizOdDeset);
}
niz(10);
niz(5);
