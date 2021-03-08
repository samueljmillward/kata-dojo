// Create a function Mormons(startingNumber, reach, target) that calculates how many missions Mormons need to embark on, in order to reach their target. While each correct solution will pass, for more fun try to make a recursive function.

function Mormons(startingNumber, reach, target) {
  for (var i = 0; ; i++) {
    if (startingNumber >= target) return i;
    startingNumber += startingNumber * reach;
  }
}
