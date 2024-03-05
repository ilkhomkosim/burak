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

function getDigits(inputString: string): string {
    const digitsArray: RegExpMatchArray | null = inputString.match(/\d/g);

    const resultString: string = digitsArray ? digitsArray.join('') : '';

    return resultString;
}

const result: string = getDigits("m14i1t");
console.log(result); 




