function countLetters(string) {
  var letObj = {};

  // var nospaces = string.split(" ").join("");
  // var array = nospaces.split("");

  for (var i = 0; i < string.length; i++) {
    if (string[i] == ' ') {
      continue;
    }
     if (letObj[string[i]]) {
      letObj[string[i]].push(i); // array
    } else {
      letObj[string[i]] = [i]; // (default) new array w/ current index
    }
  }
  return letObj;
}

console.log(countLetters('lighthouse is in the house'));

// string.indexOf(searchvalue, start)
//
// searchvalue  Required. The string to search for
//

// 1 l: 1
// 2 i: 2,...
// 3 g: 3
// 4 h: 4,...
// 5 t
// 6 o
// 7 u
// 8 s
// 9 e
// 10 n

// SPACE