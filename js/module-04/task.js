const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    pork: 80,
    cheese: 60,
    tea: 20,
    candy: 25
  };

  const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
  }

function Cashier(name, products) {
    this.name = name;
    this.products = products;
    let totalPrice = 0;
    let customerMoney = 0;
    let changeAmount = 0;

    this.countTotalPrice = function (order) {
        for (let item in order) {
            for (let product in products) {
                if (item === product) {
                    totalPrice += order[item] * products[product];
                }
            }
        }
    }

    this.getCustomerMoney = function () {
        let userInput;
        do {
            userInput = prompt("Введите сумму", "");
            if (userInput === null) {
                return null;
            } else {
                customerMoney += +userInput;
            }
        } while (customerMoney < totalPrice)

    }

    this.countChange = function () {
        changeAmount = customerMoney - totalPrice;
    }

    this.reset = function () {
        totalPrice = 0;
        customerMoney = 0;
        changeAmount = 0;
    }

    this.serve = function (order) {
        this.countTotalPrice(order);
        this.getCustomerMoney();
        if (customerMoney === 0) {
            alert("Очень жаль, что-то пошло не так, приходите еще");
        } else {
            this.countChange();
            alert(`Спасибо за покупку, ваша сдача ${changeAmount}`);
        }
        this.reset();
    }
}

const cashier = new Cashier('Mango', products);
cashier.serve(order);