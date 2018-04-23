let taba = 6;
let sharm = 15;
let hurgada = 25;
let isConfirm;
let verify = true;
let sorryString = "Нам очень жаль, приходите еще!";



let userNumber = prompt("Введите число необходимых мест:", "");

if (userNumber < 0) {
    alert("Error");
    verify = false;
}

if (verify == true) {
    if (userNumber <= taba) {
        isConfirm = confirm("Место есть в группе taba, согласны ли Вы быть в этой группе?");
        if (isConfirm == true) {
            alert("Приятного путешествия в группе taba");
            taba = taba - userNumber;
        } else {
            if (userNumber <= sharm) {
                isConfirm = confirm("Место есть в группе sharm, согласны ли Вы быть в этой группе?");
                if (isConfirm == true) {
                    alert("Приятного путешествия в группе sharm");
                    sharm = sharm - userNumber;
                } else {
                    if (userNumber <= hurgada) {
                        isConfirm = confirm("Место есть в группе hurgada, согласны ли Вы быть в этой группе?");
                        if (isConfirm == true) {
                            alert("Приятного путешествия в группе hurgada ");
                            hurgada = hurgada - userNumber;
                        } else {
                            alert(sorryString);
                        }
                    }
                }
            }
        }
    } else if (userNumber <= sharm) {
        isConfirm = confirm("Место есть в группе sharm, согласны ли Вы быть в этой группе?");
        if (isConfirm == true) {
            alert("Приятного путешествия в группе sharm");
            sharm = sharm - userNumber;
        } else {
            if (userNumber <= hurgada) {
                isConfirm = confirm("Место есть в группе hurgada, согласны ли Вы быть в этой группе?");
                if (isConfirm == true) {
                    alert("Приятного путешествия в группе hurgada ");
                    hurgada = hurgada - userNumber;
                } else {
                    alert(sorryString);
                }
            }
        }
    } else if (userNumber <= hurgada) {
        isConfirm = confirm("Место есть в группе hurgada, согласны ли Вы быть в этой группе?");
        if (isConfirm == true) {
            alert("Приятного путешествия в группе hurgada");
            hurgada = hurgada - userNumber;
        } else {
            alert(sorryString);
        }
    } else {
        alert("Извините, мест нету нигде!");
    }
}


