console.log('Задание 9:')

function getFilteredArray(digits: number[], meaning: string): void {
    console.log(meaning, ': ', digits)
}

function getDigits(n: number): void {
    let odds: number[] = []
    let evens: number[] = []
    for (let i: number = 0; i <= n; i++) {
        if (i % 2 === 0) {
            evens.push(i)
        } else {
            odds.push(i)
        }
    }
    getFilteredArray(evens, 'Чётные')
    getFilteredArray(odds, 'Нечётные')
}

getDigits(100)
