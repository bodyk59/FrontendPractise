/* author Bogdan Kurchak */

function checkEvenOrOdd(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element == 0) {
            break;
        }

        console.log(element % 2 == 0 ? "even" : "odd");
    }
}

let numbers = [1, 2, 3, 4, 8, 9, 0, 10];
checkEvenOrOdd(numbers);