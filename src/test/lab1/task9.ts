console.log('Задание 9:')

// даёт != печатать
function printFilteredArray(digits: number[], meaning: string): void {
    console.log(meaning, ': ', digits)
}

function getFilteredDigits(n: number): void {
    let odds: number[] = []
    let evens: number[] = []
    for (let i: number = 0; i <= n; i++) {
        if (i % 2 === 0) {
            evens.push(i)
        } else {
            odds.push(i)
        }
    }
    printFilteredArray(odds, 'Чётные')
    printFilteredArray(evens, 'Нечётные')
}

getFilteredDigits(100)
