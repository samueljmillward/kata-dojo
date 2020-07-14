// Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

String.prototype.isUpperCase = function (str) {
    if (this.toString() == this.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}