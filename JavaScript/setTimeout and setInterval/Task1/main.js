/* author Bogdan Kurchak */

function showPromo(a, b, c) {
    return `${a}% discount on ${b} until ${c}`;
}

let timerId = setTimeout(showPromo, 5000);
clearTimeout(timerId);