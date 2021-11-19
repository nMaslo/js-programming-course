let niz = [4, 2, 6, 3, 19, 55, 6, 26, 11, 6, 22, 6, 9];

let zameniMesta = niz.map((item, i, array) => {
  let item1 = "";
  let item2 = "";
  //   let tempItem = "";
  //   tempItem = item1;
  //   item1 = item2;
  //   item2 = tempItem;
  if (item == 4) {
    item1 = item;
  } else if (item == 3) {
    item2 = item;
  }

  return item;
});
console.log(zameniMesta);
