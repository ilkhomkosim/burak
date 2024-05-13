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

// interface AnyObject {
//     [key: string]: any;
// }

// function countOccurrences(obj: AnyObject, key: string): number {
//     let count = 0;

//     if (typeof obj[key] === 'string') {
//         if (obj[key] === key) {
//             count++;
//         }
//     }

//     for (const nestedKey in obj) {
//         if (typeof obj[nestedKey] === 'object') {
//             count += countOccurrences(obj[nestedKey], key);
//         }
//     }

//     return count;
// }

// const obj: AnyObject = {
//     model: 'Bugatti',
//     steer: {
//         model: 'HANKOOK',
//         size: 30
//     }
// };

// console.log(countOccurrences(obj, 'model')); 

// TASK_V

// function findIntersection(arr1: any[], arr2: any[]): any[] {
//     const intersection: any[] = [];

//     for (const item1 of arr1) {
//         if (arr2.includes(item1)) {
//             intersection.push(item1);
//         }
//     }

//     return intersection;
// }

// console.log(findIntersection([1,2,3], [3,2,0]));

// TASK_Z

// function sumEvens(nums: number[]): number {
//     let sum = 0;
//     for (const num of nums) {
//         if (num % 2 === 0) {
//             sum += num;
//         }
//     }
//     return sum;
// }

// console.log(sumEvens([1, 2, 3]));

// TASK_ZA

// function sortByAge(arr: { age: number }[]): { age: number }[] {
//     return arr.sort((a, b) => a.age - b.age);
// }

// const arr = [{ age: 23 }, { age: 21 }, { age: 13 }];

// const sortedArr = sortByAge(arr);
// console.log(sortedArr);

// TASK_ZB

// function randomBetween(min: number, max: number): number {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const randomNumber = randomBetween(30, 50);
// console.log(randomNumber); 

//  TASK_ZC 

// function celsiusToFahrenheit(celsius: number): number {
//     return (celsius * 9/5) + 32;
// }


// console.log(celsiusToFahrenheit(0)); 


// TASK_ZD

// function changeNumberInArray(index: number, array: number[], newNumber: number): number[] {
//     if (index >= 0 && index < array.length) { 
//         const newArray = [...array]; 
//         newArray[index] = newNumber;
//         return newArray; 
//     } else {
//         console.error("Invalid index!"); 
//         return array; 
//     }
// }

// console.log(changeNumberInArray(1, [1,3,7,2], 2));


// TASK_ZE

// function removeDuplicate(str: string): string {
//     const charMap: { [key: string]: boolean } = {};

//     let result = '';
//     for (let char of str) {
//         if (!charMap[char]) {
//             charMap[char] = true;
//             result += char;
//         }
//     }

//     return result;
// }

// console.log(removeDuplicate('stringg')); 

// TASK_ZF

// function capitalizeWords(input: string): string {
//     const words: string[] = input.split(" ");
    
//     const capitalizedWords: string[] = words.map(word => {
//         if (word.length <= 2) {
//             return word;
//         }
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });
    
//     return capitalizedWords.join(" ");
// }

// const result: string = capitalizeWords('name should be a string');
// console.log(result); 

// TASK_ZG

// function toSnakeCase(input: string): string {
//     return input.replace(/\s+/g, '_').toLowerCase();
// }

// const result = toSnakeCase('name should be a string');
// console.log(result); 

// TASK_ZH

// function findDisappearedNumbers(nums: number[]): number[] {
//     const maxNum = Math.max(...nums); 
//     const allNumbers = Array.from({ length: maxNum }, (_, index) => index + 1); // Barcha raqamlar to'plami

//     const disappearedNumbers: number[] = [];
//     for (let i = 0; i < allNumbers.length; i++) {
//         if (!nums.includes(allNumbers[i])) {
//             disappearedNumbers.push(allNumbers[i]);
//         }
//     }

//     return disappearedNumbers;
// }

// console.log(findDisappearedNumbers([1, 3, 4, 7])); 

// TASK_ZI

// function delayHelloWorld(message: string): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(message);
//         }, 3000); 
//     });
// }
// delayHelloWorld("Hello World")
//     .then((result) => {
//         console.log(result); 
//     })
//     .catch((error) => {
//         console.error(error);
//     });


// TASK_ZJ

// function reduceNestedArray(arr: any[]): number {
//     return arr.reduce((acc, curr) => {
//         if (Array.isArray(curr)) {
//             return acc + reduceNestedArray(curr);
//         } else {
//             return acc + (typeof curr === 'number' ? curr : 0);
//         }
//     }, 0);
// }

// console.log(reduceNestedArray([1, [1, 2, [4]]])); 


// TASK_ZK

// function printNumbers(): void {
//     for (let i = 1; i <= 5; i++) {
//         console.log(i);
//     }
// }

// printNumbers();
// setTimeout(() => {
//     console.log("Ish to'xtatildi");
// }, 5000);

// TASK_ZL

function stringToKebab(input: string): string {
    return input.toLowerCase().replace(/\s+/g, '-');
}


console.log(stringToKebab("I love Kebab"));











