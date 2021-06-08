//Write a function that takes in a string and returns the same string with all vowels in reverse positions.

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
