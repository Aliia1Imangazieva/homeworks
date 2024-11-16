// задание первое 
function findIndex(arr, num) {
    const length = arr.length;
    for (let i = length - 1; i ≥ 0; i--) {
        if (arr[i]=== num) {
            return i;
        }
    }
    return -1;
}
const array = [3, 5, 7, 9, 2, 7];
const numbertoFind = 7;
const index = findIndex(array, numberToFind);
console.log(`Индекс числа ${numberToFind}: ${index}`);


// задание второе

function findIndex(arr, num) {
    const length = arr.length;  
    for (let i = length - 1; i >= 0; i--) {
        if (arr[i] === num) { 
            return i; 
        }
    }
    return -1; 
}

const array = [3, 5, 7, 9, 2, 7];
const numberToFind = 7;
const index = findIndex(array, numberToFind);
console.log(`Индекс числа ${numberToFind}: ${index}`);