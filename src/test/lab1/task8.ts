console.log('Задание 8:')

function getRandomString(len: number): string {
    let string = ''
    while (string.length < len) 
        string += Math.random().toString(36).substring(2)
    return string.substring(0, len)
}

const output = getRandomString(10)
console.log(output)
