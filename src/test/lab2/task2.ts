// 2.	Опишите тип объекта студент, в котором будут поля name и age. 
// -	Создайте список группы из 4 студентов(массив объектов)
// -	обойдите список студентов и напечатайте в консоль их имена и возраст (Юля, 18 лет).

type Student = {
    name: string,
    age: number
}

let students: Student[] = [
    {
        name: "Anya",
        age: 21
    },
    {
        name: "Anya",
        age: 22
    },
    {
        name: "Dasha",
        age: 20
    },
    {
        name: "Irina",
        age: 33
    }
]


for (let student of students) {
    console.log(student.name, ' ', student.age, ' лет')  
}
