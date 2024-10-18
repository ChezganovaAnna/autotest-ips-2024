// 3.	Написать класс Car. Объект машины, эмулирующий ее работу после создания экземпляра. 
// -	Машина может находиться в двух состояниях: включена и выключена. По умолчанию состояние автомобиля - выключено.
// -	У класса должны быть реализованы методы turnOn() и turnOff() - включающие и выключающие двигатель автомобиля соответственно. 
// -	Метод getState(), который печатает состояние автомобиля в консоль.
// Задание: Создайте экземпляр класса. Выведите текущее состояние авто. Включите авто и выведите состояние повторно.


class Car {
    private isTurnedOn: boolean = false

    public turnOn() {
        this.isTurnedOn = true
    }

    public turnOff() {
        this.isTurnedOn = false
    } 

    public getState() {
        console.log('Состояние машины:')
        if (this.isTurnedOn) {
            console.log('включена')
        } else {
            console.log('выключена')
        }
    }
}

const car: Car = new Car()
car.getState()
car.turnOn()
car.getState()