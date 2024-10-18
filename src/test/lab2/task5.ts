// 5.	Написать асинхронную функцию print(), которая будет печатать результат успешного выполнения промиса из задания 4.

const promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Resolve')
    }, 1000)
})

async function print(): Promise<void> {
    console.log('Fulfilled: ', await promise)
}

print()