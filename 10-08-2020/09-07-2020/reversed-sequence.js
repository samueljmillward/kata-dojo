// Get the number n (n>0) to return the reversed sequence from n to 1.

const reverseSeq = n => {
    const values = [];
    for (let i = n; n > 0; n--) {
        values.push(n)
    }

    return values;
};