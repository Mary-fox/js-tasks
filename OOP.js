// Задания по ООП
// 65. Основы работы с ООП в JavaScript

// 1.Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname
//  (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен 
//  иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) 
//  ставки rate на количество отработанных дней days.С помощью нашего класса создайте двух рабочих и найдите сумму их зарплат

class Worker {
    constructor(name, surname,rate,days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days
    }
}

let workerOne = new Worker("Игорь", "Петрович" , 500, 20)
let workerTwo = new Worker("Павел", "Тестович" , 1500, 20)

// console.log(workerOne.name); 
// console.log(workerOne.surname); 
// console.log(workerOne.rate); 
// console.log(workerOne.days); 
// console.log(workerOne.getSalary()); 
// console.log(workerTwo.getSalary()); 
// console.log(workerTwo.getSalary() + workerOne.getSalary()); 


// 2.Модифицируйте класс Worker из предыдущей задачи следующим образом:
//  сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.

class WorkerBla {
    constructor(name, surname,rate,days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    getName() {
        return this._name;
    }

    getSurname() {
        return this._surname;
    }
    getRate() {
        return this._rate;
    }
    getDays() {
        return this._days;
    }
    getSalary() {
        return this._rate * this._days
    }
}

let worker= new WorkerBla("Игорь", "Петрович" , 500, 20)
console.log(worker.getName());
console.log(worker.getSurname()); 
console.log(worker.getRate()); 
console.log(worker.getDays()); 
console.log(worker.getSalary()); 


// 3.Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства 
// rate и для свойства days сделайте еще и методы-сеттеры.

class WorkerSeter {
    constructor(name, surname,rate,days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    getName() {
        return this._name;
    }

    getSurname() {
        return this._surname;
    }
    getRate() {
        return this._rate;
    }
    getDays() {
        return this._days;
    }
    getSalary() {
        return this._rate * this._days;
    }
    setRate(rate) {
        this._rate = rate;
    }
    setDays(days) {
        this._days= days;
    }
}

let workerSeter= new WorkerSeter("Марк", "Бла" , 500, 10)
console.log(workerSeter.getRate());
console.log(workerSeter.getDays());
console.log(workerSeter.getSalary());
workerSeter.setRate(250);
workerSeter.setDays(5);
console.log(workerSeter.getRate());
console.log(workerSeter.getSalary());

// 4.Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
//  который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
//   который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной 
//   и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой
//    строки.

class MyString {
    reverse(str) {
        return str.split("").reverse().join("")
    } 

    ucFirst(str) {
        return str.slice(0, 1).toUpperCase() + str.slice(1)
    }

    ucWords(str) {
        return str.split(" ").map(a => this.ucFirst(a)).join(" ")
    }
}

let x = new MyString()
console.log(x.reverse('Bla')); 
console.log(x.ucFirst('test')); 
console.log(x.ucWords('bla test test'))


// 5.Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail
//  параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является
//   - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы:
//    метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки
//     телефона.

class Validator {
    isEmail(str) {
        return /^[^@]+@[^@.]+\.[^@]+$/.test(str);
    }
    isDomain(str) {
        return /^(?:[A-Za-z0-9]+\.)+[A-Za-z]{2,6}$/.test(str);
    }
    isDate(str) {
        return /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(str);
    }
    isPhone(str) {
        return /^\+{1}\d{3}\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/.test(str);
    }
}

let validator = new Validator();

console.log(validator.isEmail('blabla@mail.ru'));
console.log(validator.isDomain('eee.net'));
console.log(validator.isDate('11.06.2021'));
console.log(validator.isPhone('+344 (29) 817-68-92'));
