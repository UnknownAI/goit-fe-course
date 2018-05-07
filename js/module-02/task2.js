
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;

do {
    let userPasword = prompt("Enter your password:", "");

    if (userPasword === null) {
        break;
    } else {
        if (!passwords.includes(userPasword)) {
            attempts--;
            if (attempts === 0) {
                alert("У вас закончились попытки, аккаунт заблокирован!");
            } else {
                alert("Вы ввели НЕ верный пароль, у вас осталось " + attempts + " попыток");
            }
        } else {
            alert("Добро пожаловать");
            break;
        }
    }
} while (attempts !== 0)
