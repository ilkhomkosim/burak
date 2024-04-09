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

// function objectToArray(obj: any) {
//     let result = [];

//     for (let key in obj) {
//         result.push([key, obj[key]]);
//     }

//     return result;
// }

// console.log(objectToArray({a: 10, b: 20}));

// TASK_Q

// function hasProperty(obj: object, prop: string): boolean {
//     return obj.hasOwnProperty(prop);
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));  // false


// TASK_R

// function calculate(expression: string): number {
//     const operands = expression.split('+');
    
//     const sum = operands.reduce((acc, curr) => acc + parseInt(curr), 0);
    
//     return sum;
// }
// console.log(calculate("1+3")); // 4

//TASK_S

// function missingNumber(nums: number[]): number {
//     const n = nums.length;
//     const expectedSum = n * (n + 1) / 2;
//     const actualSum = nums.reduce((acc, curr) => acc + curr, 0);
//     const missing = expectedSum - actualSum;
//     return missing;
// }

// console.log(missingNumber([3, 0, 1]));

//TASK_T

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//     const mergedArray: number[] = [];
//     let i = 0;
//     let j = 0; 

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             mergedArray.push(arr1[i]);
//             i++; 
//         } else {
//             mergedArray.push(arr2[j]); 
//             j++; 
//         }
//     }

//     while (i < arr1.length) {
//         mergedArray.push(arr1[i]); 
//         i++;
//     }

//     while (j < arr2.length) {
//         mergedArray.push(arr2[j]); 
//         j++;
//     }

//     return mergedArray;
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); 

// TASK_U

// function sumOdds(n: number): number {
//     let count = 0;
//     for (let i = 1; i <= n; i += 2) {
//         count++;
//     }
//     return count;
// }

// console.log(sumOdds(9)); 
// console.log(sumOdds(11));

// TASK_V
// function countChars(str: string): { [key: string]: number } {
//     const charCount: { [key: string]: number } = {};
//     for (const char of str) {
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//     }
//     return charCount;
// }

// console.log(countChars("hello")); 

// TASK_W

// function chunkArray(arr: any[], size: number): any[][] {
//     const result: any[][] = [];
//     for (let i = 0; i < arr.length; i += size) {
//         result.push(arr.slice(i, i + size));
//     }
//     return result;
// }


// console.log(chunkArray([1,2,3,4,5,6,7,8,9,10], 3)); 

// TASK_X

interface AnyObject {
    [key: string]: any;
}

function countOccurrences(obj: AnyObject, key: string): number {
    let count = 0;

    if (typeof obj[key] === 'string') {
        if (obj[key] === key) {
            count++;
        }
    }

    for (const nestedKey in obj) {
        if (typeof obj[nestedKey] === 'object') {
            count += countOccurrences(obj[nestedKey], key);
        }
    }

    return count;
}

const obj: AnyObject = {
    model: 'Bugatti',
    steer: {
        model: 'HANKOOK',
        size: 30
    }
};

console.log(countOccurrences(obj, 'model')); 





