// 4.	Создать объект типа Promise, который перейдет в состояние fulfilled через 1000 миллисекунд с текстом “resolve”.
// Для ожидания используйте стандартную функцию setTimeout()

const promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Resolve')
    }, 1000)
})

promise.then((value) => {
    console.log('Fulfilled:', value)
})