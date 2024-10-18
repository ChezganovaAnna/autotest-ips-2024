//1 пример

let n: number = 5

//1 инструкция - можно обойтись без скобок
if (n == 5) console.log('Hello\n')

//две инструкции, которые должны использоваться если n == 5, обернуты в скобки, чтобы это было единым блоком
if (n == 5) {
    console.log(n, 'Hello')
    console.log('world\n')
}


console.log('4 раза напечатается hello');

//4 раза напечатается hello
for (let i: number = 1; i <= 4; i++) console.log('hello')
 
console.log('4 раза напечатается hello и 1 раз world');    
//4 раза напечатается hello и 1 раз world
for (let i: number = 1; i <= 4; i++) console.log('hello') 
console.log('world')


console.log('4 раза напечатается hello и 4 раз world'); 
//4 раза напечатается hello и 4 раз world
for (let i: number = 1; i <= 4; i++) {
    console.log('hello') 
    console.log('world')
}    