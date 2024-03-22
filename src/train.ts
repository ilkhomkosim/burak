// function getReverse(String: string): string {
//     return String.split('').reverse().join('');
// }

// const reverse: string = getReverse("hello");
// console.log(reverse); 

// Task_H

// function Positive(numbers: number[]): string {
//     const positiveNumbers: number[] = numbers.filter(num => num > 0);
//     const positiveNumbersAsString: string = positiveNumbers.join('');
//     return positiveNumbersAsString;
// }

// // Masalan:
// const result: string = Positive([1, -4, 2]);
// console.log(result);


// TASK_I

// function getDigits(inputString: string): string {
//     const digitsArray: RegExpMatchArray | null = inputString.match(/\d/g);

//     const resultString: string = digitsArray ? digitsArray.join('') : '';

//     return resultString;
// }

// const result: string = getDigits("m14i1t");
// console.log(result); 

// TASK_J

// function findLongestWord(inputString: string): string {
//     const words: string[] = inputString.split(" ");

//     let longestWord: string = "";

//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }

// const result: string = findLongestWord("I come from Uzbekistan");
// console.log(result); 


// TASK_K

// function countVowels(inputString: string): number {
//     const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    
//     const lowercaseInput = inputString.toLowerCase();
    
//     const vowelCount: number = lowercaseInput.split('').filter(char => vowels.includes(char)).length;

//     return vowelCount;
// }

// const result: number = countVowels("string");
// console.log(result); 

// TASK_L

// function reverseSentence(input: string): string {
//     const words = input.split(' ');
//     const reversedWords = words.map(word => word.split('').reverse().join('')); 
//     return reversedWords.join(' '); 
// }


// const reversed = reverseSentence("I like coding!");
// console.log(reversed); 

//TASK_M

// function getSquareNumbers(numbers: number[]): { number: number; square: number }[] {
//     const result: { number: number; square: number }[] = [];

//     for (const num of numbers) {
//         result.push({ number: num, square: num * num });
//     }

//     return result;
// }

// const squaredNumbers = getSquareNumbers([1, 2, 3]);
// console.log(squaredNumbers); 


//TASK_M

// function Palindrome(word: string): boolean {
//     const formattedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
//     const reversedWord = formattedWord.split('').reverse().join('');
//     return formattedWord === reversedWord;
// }

// console.log(Palindrome("dad"));  
// console.log(Palindrome("son")); 

// TASK_N

// function calculateSumOfNumbers(arr: any[]): number {
//     let sum = 0;

//     for (const item of arr) {
//         if (typeof item === 'number') {
//             sum += item;
//         }
//         else if (typeof item === 'string' && !isNaN(Number(item))) {
//             sum += Number(item);
//         }
//     }

//     return sum;
// }

// console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35])); 

// TASK_P

function objectToArray(obj: any) {
    let result = [];

    for (let key in obj) {
        result.push([key, obj[key]]);
    }

    return result;
}

console.log(objectToArray({a: 10, b: 20}));




