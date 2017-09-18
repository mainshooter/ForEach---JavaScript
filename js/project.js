var numbers = [2, 6, 11, 5, 9, 8, 3, 46, 4];

numbers.forEach((function(value, index, array) {
  // To log function
  var lastValue = array[array.length - 1];

  if (lastValue == value) {
    // If we are at the end
    console.log(value);
  }

  else {
    var result = value + array[index + 1];
    console.log("Item " + index + " = " + result);
  }
}));
