// 8.	Добавьте в класс автомобиля метод установки скорости setSpeed(). 
// Минимальная скорость 0, максимальная 100. При выключенном автомобиле скорость устанавливать нельзя. 
// Ошибки выводить в консоль текстом.
const MAX_SPEED: number = 100
const MIN_SPEED: number = 0 

class Car {
    private isTurnedOn: boolean = false
    private speed: number = 0

    public turnOn() {
        this.isTurnedOn = true
    }

    public turnOff() {
        this.isTurnedOn = false
    } 

    public setSpeed(speed: number){
        if (this.isTurnedOn) {
            if (speed < MIN_SPEED) {
                console.log('Не удалось установить отрицательную скорость')
            } else if (speed > MAX_SPEED) {
                console.log('Не удалось установить скорость. Выберите скорость ниже')
            } else {
                this.speed = speed
                console.log('Установлена скорость - ', speed)
            }
        } else {
            console.log("Не удалось установить скорость. Машина выключена. Включите")
        }
    }

    public getState() {
        console.log('Состояние машины:')
        if (this.isTurnedOn) {
            console.log('включена')
        } else {
            console.log('выключена')
        }
        console.log('Скорость - ', this.speed)
    }
}

const car: Car = new Car()
car.getState()
car.setSpeed(20)

car.turnOn()
car.getState()
car.setSpeed(-40)
car.setSpeed(0)
car.setSpeed(99)
car.setSpeed(100)