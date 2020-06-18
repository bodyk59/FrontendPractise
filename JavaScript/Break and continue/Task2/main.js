/* author Bogdan Kurchak */

function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == 0) {
            break;
        }
        sum += numbers[i]
    }
    return sum;
}

let numbers = [1, 2, 3, 4, 8, 9, 10, 10];
console.log(sum(numbers));