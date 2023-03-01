// Задание 3. E4.3
// Написать функцию, которая создает пустой объект, но без прототипа.
function crObject(){
    const person = {};
    return Object.getPrototypeOf(person);
}
console.log(crObject())