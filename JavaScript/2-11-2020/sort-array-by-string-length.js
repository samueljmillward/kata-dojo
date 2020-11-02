// sort array by string length

function sortByLength (array) {
    return array.sort(function(a, b){
      return a.length - b.length;
    });
  };
  