// Your task is to write a function that takes a string and return a new string with all vowels removed.

function disemvowel(str) {
    let splitStr = str.split("");
    let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    for (i = 0; i < str.length; i++) {
      for (j = 0; j < vowel.length; j++) {
        if(splitStr[i] === vowel[j]) {
          splitStr.splice(i, 1, "")
          }
      }
    }
    var str = splitStr.join("");
    
    return str;
  }