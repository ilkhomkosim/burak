// G_TASK

function getHighestIndex(arr) {
    if (arr.length === 0) {
        return null;
    }

    let maxIndex = 0;
    let maxValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }

    return maxIndex;
}

let array = [5, 21, 12, 21, 8];
let highestIndex = getHighestIndex(array);
console.log(highestIndex); 
