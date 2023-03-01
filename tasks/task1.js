// Задание 1. E4.3

// Написать, функцию, которая принимает в качестве 
// аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.
const person = {
    name: "Alex",
    city: "Moscow",
}
const developer = Object.create(person);
developer.ownCity = "Piter";
developer.ownName = "Max";
function prop(developer){
    for(let key in developer){
        if(developer.hasOwnProperty(key)){
            console.log(key)
        }
    }
}
console.log(developer.ownCity)
console.log(developer.ownName)
prop(developer)