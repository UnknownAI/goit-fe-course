let userInput;
const numbers = [];
let total = 0;
 

do {
    userInput = prompt("Введите число:", "");
    if (userInput) {
        userInput = parseInt(userInput);
        if (!isNaN(userInput)) {
            numbers.push(userInput);
            total += userInput;
        } else {
            alert("Было введено не число, попробуйте еще раз");
        }

    }

} while (userInput !== null)

console.log(numbers);
alert("Общая сумма равна " + total); 


