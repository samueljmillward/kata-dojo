// On this day, millions of pilgrims sojourn to their local centers of capitalism to stand in long lines and trade currency for flat-screen TVs and two-dollar DVDs.
// Your first task at this job is create a blackFriday function which accepts an integer year, and returns the day of the month of November that Black Friday falls on in that year.
// Your function only needs to support years after 1752*.

const blackFriday = (year) => {
    let i = 29;

    while (new Date(year, 10, i).getDay() !== 5) {
        i--;
    }

    return new Date(year, 10, i).getDate();
};
