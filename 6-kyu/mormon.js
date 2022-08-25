// The Mormons are trying to find new followers and in order to do that they embark on missions.

// Each time they go on a mission, every Mormons converts a fixed number of people (reach) into followers. This continues and every freshly converted Mormon as well as every original Mormon go on another mission and convert the same fixed number of people each. The process continues until they reach a predefined target number of followers (target).
// Converted Mormons are unique so that there's no duplication amongst them.
// Complete the function that calculates how many missions Mormons need to embark on, in order to reach their target. While each correct solution will pass, for more fun try to make a recursive function.

// All inputs are valid positive integers.

const Mormons = (startingNumber, reach, target) => {
    for (let i = 0; ; i++) {
        if (startingNumber >= target) return i;
        startingNumber += startingNumber * reach;
    }
};
