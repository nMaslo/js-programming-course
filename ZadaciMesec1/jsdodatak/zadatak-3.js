function randomNumbers(array) {
  for (i = 0; array.length < 8; i++) {
    let random_number = Math.round(Math.random() * 28) + 2;
    if (random_number % 2 == 0 && array.length <= 8) {
      if (array.indexOf(random_number) == -1) {
        array.push(random_number);
      }
    }
  }

  return array;
}

let math_array = [];
console.log(randomNumbers(math_array));
