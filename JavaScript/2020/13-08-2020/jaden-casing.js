// When Jaden Smith tweets, he capitalises every word. Your task is to convert strings to how they would be written by Jaden Smith. 

String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)[a-z]/g, function (capitalize) {
        return capitalize.toUpperCase();
    })
};