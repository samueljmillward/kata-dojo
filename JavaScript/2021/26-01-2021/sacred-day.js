// create a blackFriday function which accepts an integer year, and returns the day of the month of November that Black Friday falls on in that year. Your function only needs to support years after 1752*.

function blackFriday(year) {
  let i = 29;

  while (new Date(year, 10, i).getDay() !== 5) {
    i--;
  }

  return new Date(year, 10, i).getDate();
}
