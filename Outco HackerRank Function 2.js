//Write a function that takes in a string and returns the same string with all vowels in reverse positions.

/*function reverseVowels(word) {
    let xord = word.split('');
    console.log(xord);

    let arr = [];

    for (let letter of xord) {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U') {
            arr.push(letter);
        }
    }
    console.log(arr);
    arr = arr.reverse();
    console.log(arr);


    for (let i = 0; i < xord.length; i++) {

!!!This solution overall was sloppy, but the issue and the reason it didn't pass all tests was in the following if statement; I accidentally checked for an uppercase E twice, instead of an A and an E.!!!

        if (xord[i] === 'a' || xord[i] === 'e' || xord[i] === 'i' || xord[i] === 'o' || xord[i] === 'u' || xord[i] === 'A' || xord[i] === 'E' || xord[i] === 'I' || xord[i] === 'O' || xord[i] === 'U') {
            xord[i] = arr[0];
            arr = arr.slice(1);
        }
    }

    return xord.join('');
}

console.log(reverseVowels('A man, a plan, a canal: Panama'));*/

// Here is the solution I wish I would've come up with. I just needed a refresher on regexp and ran out of time to look for it.

function reverseVowels(word) {

    let reg = /[aeiou]/gi;
    
    let revVowels = [...word.match(reg)].reverse();
    
    let arr = revVowels.map(x => x[0]);

    let wordArr = word.split('');

    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i].match(reg)) {
            wordArr[i] = arr[0];
            arr.shift();
        }
    }

    return wordArr.join('');

}

console.log(reverseVowels('A man, a plan, a canal: Panama'));