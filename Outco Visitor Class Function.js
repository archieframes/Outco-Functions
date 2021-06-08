// Write a function that takes a positive integer as an argument and returns the minimum number of steps required to convert said integer into the number 1, when only the following operations can be completed:
// Divide by 3 (if the integer is divisible by 3)
// Divide by 2 (if the integer is divisible by 2)
// Subtract 1
// Operations can be repeated as many times as necessary.

function oneConverter(n, memo = {}) {
    
    if (n in memo) {
        return memo[n];
    }

    if (n === 1) {
        return 0;   
    }

    let compare = []

    if (n % 3 === 0) {
        compare.push(oneConverter(n / 3, memo));
    }
    if (n % 2 === 0) {
        compare.push(oneConverter(n / 2, memo));
    }
    compare.push(oneConverter(n - 1, memo));

    memo[n] = 1 + compare.reduce((x, y) => x < y ? x : y);
    return memo[n];

}

console.log(oneConverter(5));
console.log(oneConverter(11));
console.log(oneConverter(1001));
