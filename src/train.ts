function getReverse(String: string): string {
    return String.split('').reverse().join('');
}

const reverse: string = getReverse("hello");
console.log(reverse); 


