// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

function pattern(n) {
    let output = '';
    for (let currentNum = 1; currentNum <= n; currentNum += 1) {
        output += currentNum.toString().repeat(currentNum);
        output += '/n';
    }

    return output;
}