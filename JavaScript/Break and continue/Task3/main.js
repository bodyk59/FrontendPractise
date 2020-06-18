/* author Bogdan Kurchak */

function find5(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 5) {
            return i;
        }
    }
    return -1;
}

let numbers = [1, 2, 3, 4, 8, 5, 9, 10, 10];
console.log(find5(numbers));