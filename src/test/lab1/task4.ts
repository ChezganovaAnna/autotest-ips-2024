console.log('Задание 4:')
function checkAccess(age: number): void {
    if (age >= 18) {
        console.log('Страница доступна')
    } else {
        console.log('Страница не доступна')
    }
}

checkAccess(-12)