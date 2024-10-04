//task2
const temperature: number = 15;
console.log('Задание 2:');
if (temperature < -10) {
    console.log('Очень холодно')
} else if (temperature < 10) {
    console.log('Холодно')
} else if (temperature < 18) {
    console.log('Прохладно')
} else if (temperature < 25) {
    console.log('Тепло')
} else {
    console.log('Жарко')
}