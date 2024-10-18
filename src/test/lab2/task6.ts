// 6.	Доработать промис из задания 4, добавить опциональный 2-ой аргумент, через который промис перейдет в состояние reject через 100 миллисекунд.

const promise: Promise<string> = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        reject('Failed');
    }, 100);
    
    setTimeout(() => {
        resolve('Resolve');
    }, 1000);
})

promise.then(value => console.log('Fulfilled:', value), error => console.log('Fulfilled:', error)) 

promise.catch((error) => {
    console.log('Fulfilled:', error)
})