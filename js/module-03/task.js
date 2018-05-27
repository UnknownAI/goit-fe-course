const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = prompt("Введите логин", ""); 

addLogin(logins, login); 
console.log(logins);


function addLogin(logins, login) {

    if (!checkLoginValidity(login)) {
        console.log("Ошибка! Логин должен быть от 4 до 16 символов");
    } else {
        if (checkIfLoginExists(logins, login)) {
            console.log("Такой логин уже используется!");
        } else {
            logins.push(login);
            console.log("Логин успешно добавлен!");
        }
    }
}


function checkLoginValidity(login) {

    if (login.length >= 4 && login.length <= 16) {
        return true;
    } else {
        return false;
    }
}

function checkIfLoginExists(logins, login) {
    if (logins.includes(login)) {
        return true;
    } else {
        return false;
    }
}

