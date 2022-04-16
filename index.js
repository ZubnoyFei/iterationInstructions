'use strict'

const user ={
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

// for(const key in user) {// При переборе объекта мы создаём переменную key, которая будет ключом, и указываем перебираемый объект
//     console.log(user[key]);// Указываем объект, который перебирается, и ключ, по которому мы обращаемся к какому-то из свойств
// }

const arr = ['b', 'a', 'c'];
Array.prototype.someMethod = function (){}; //Мы создаём пустой метод, который ничего не выполняет.

console.dir(arr);


for(const key in arr) {// При переборе массива мы создаём переменную key, которая будет ключом, и указываем перебираемый массив
    console.log(arr[key]);// Указываем массив, который перебирается, и ключ, по которому мы обращаемся к какому-то из свойств
}


const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function(){
        console.log('Hello');
    }
}

/*Напишем функционал для перебора всех этих зарплат*/

salaries[Symbol.iterator] = function() {// Нам необходимо добавить символ, чтобы метод for of мог работать с этим массивом
return {
    current: this.john,
    last: this.ann,
    next() {
/* Создадим метод, который будет с каждой суммы в 500 будет производить что-то*/
        if (this.current < this.last) { // Если текущая сумма меньше последней зарплаты(т.е. 5000), то с каждой итерацией сумма будет увеличиваться на 500
            this.current = this.current + 500;

            return {done: false, value: this.current}
        } else {
return {done:true}
        }
    }
}
}

const iterator = salaries[Symbol.iterator](); //Т.к. это метод, мы можем его сразу же вызвать, и мы в iterator сразу же получим объект

console.log(iterator.next());
// for(let res of salaries) {
//     console.log(res);
// }