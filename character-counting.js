function countLetters(string) {
  var letObj = {};
  var nospaces = string.split(" ").join("");
  var array = nospaces.split("");
  for (var i = 0; i < array.length; i++) {
    if (letObj[array[i]]) {
      letObj[array[i]]++;
    } else {
      letObj[array[i]] = 1;
    }
  }
  return letObj;
}

console.log(countLetters('lighthouse is in the house'));

// choose a default value and continually update e.g. object

