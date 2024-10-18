//1.	Создайте тип данных описывающий собак/кошек, придумайте свойства и сделайте вывод свойств в консоль

type Animal = {
    name: string,
    age: number,
    color: string
}

const dog: Animal = {
    name: "Hela",
    age: 12,
    color: "black"
}

const cat: Animal = {
    name: "Hola",
    age: 5,
    color: 'white'
}

console.log(dog.name, ' ', dog.name, ' ', dog.color)
console.log(cat.name, ' ', cat.name, ' ', cat.color)