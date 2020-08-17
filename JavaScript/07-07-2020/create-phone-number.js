// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
    let phoneNumber = '(xxx) xxx-xxxx';

    numbers.forEach(element => {
        phoneNumber = phoneNumber.replace('x', element)
    })

    return phoneNumber;
}