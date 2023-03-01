//задача 2. E4.3
//Написать функцию, которая принимает в качестве аргументов строку и объект, 
//а затем проверяет есть ли у переданного объекта свойство с данным именем. 
//Функция должна возвращать true или false.

const name = "name";
const obj = {
  Age : 12,
  name : "Maks",
  city : "Moscow"  
};

function find (str, object) {
  if (str in object){
    console.log("+");
    return true; 
  } else {
  console.log("-");
   return false;
     }
}
find(name,obj);