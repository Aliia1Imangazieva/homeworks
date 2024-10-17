function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(3));



function findMax(numbers) {
    if (numbers.length === 0) {
        return null; 
    }
 
    let max = numbers[0]; 
 
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]; 
        }
    }
 
    return max;
 }
 

 console.log(findMax([1, 2, 3, 4, 5])); 
 console.log(findMax([-1, -2, -3, -4])); 