let number1 = +prompt("nhập số a");
let number2 = +prompt("nhập số b");
let number3 = prompt("nhập phép tính (+, -, *, /)");

let total = number1 + number2;
let signal = number1 - number2;
let accumulation = number1 / number2;
let quotient = number1 * number2;

if (number3 == "+" ) {
    alert(`Kết quả: ${total} `);
} else if (number3 == "-") {
    alert(`Kết quả: ${signal}`);
} else if (number3 == "/") {
    alert(`Kết quả: ${accumulation}`);
} else {
    alert(`Kết quả: ${quotient}`);
}
