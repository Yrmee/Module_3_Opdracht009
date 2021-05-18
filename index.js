// Function Declaration

function declaration(number1, number2) {
    return (Math.sqrt((number1 * number1) + (number2 * number2)));
}

console.log(declaration(3, 4));

// Function Expression

const expression = function(number1, number2) {
    return (Math.sqrt((number1 * number1) + (number2 * number2)));
};

console.log(expression(5, 12));

// Arrow Function

const arrow = (number1, number2) => {
    return (Math.sqrt((number1 * number1) + (number2 * number2)));
};

console.log(arrow(3, 8));