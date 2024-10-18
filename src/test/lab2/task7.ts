// 7.	Доработать функцию  print() из задания 5, чтобы печатался результат промиса  в состоянии rejected из задания 6.

// 5.	Написать асинхронную функцию print(), которая будет печатать результат успешного выполнения промиса из задания 4.

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Failed')
    }, 100)
    setTimeout(() => {
        resolve('Resolve')
    }, 10)
})

async function print(): Promise<void> {
    try {
        console.log('Fulfilled: ', await promise)
    } catch (err) {
        console.log('Rejected: ', err)
    }
}

print()