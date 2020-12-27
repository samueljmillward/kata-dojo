// If　a = 1, b = 2, c = 3 ... z = 26
// Then l + o + v + e = 54
// and f + r + i + e + n + d + s + h + i + p = 108
// So friendship is twice stronger than love :-)

function wordsToMarks(word){
    let wordTotal = 0;
    
    for (i = 0; i < word.length; i++) {
      wordTotal += word.charCodeAt(i);
    }
  
    wordTotal -= word.length * 96;
    
    return wordTotal;
  }