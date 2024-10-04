console.log('Задание 5:');
//4 коллбэк функции
const sum = (a: number, b: number) => {
    console.log('sum is:', a + b)
};

const subtraction = (a: number, b: number) => {
    console.log('subtraction is:', a - b)
};

const multiplying = (a: number, b: number) => {
    console.log('multiplying is:', a * b)
};

const division = (a: number, b: number) => {
    console.log('division is:', a / b)
};


function calc (
    callback: (a: number, b: number)
    
    
    
    
    
    
    => void,
    a: number,
    b: number
): void {
    callback(a, b)
};


calc(sum, 5, 4)
calc(subtraction, 5, 4)
calc(multiplying, 5, 4)
calc(division, 5, 4)