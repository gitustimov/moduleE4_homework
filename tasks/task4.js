// Задание 4. E4.3
// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создать экземпляры каждого прибора.
// Вывести в консоль и посмотреть результаты работы, гордиться собой. :)

function Computer(name,power) {
    this.name = name;
    this.power = power;
    this.getSwitch = function (turnOn) {
        console.log(this.name + ' состояние ' + turnOn);
        if (turnOn === 'on') {
          sumpower = parseInt(sumpower)+parseInt(this.power);
         }
    }
}

function TableLamp(name, lumen, power){
    this.name = name;
    this.lumen = lumen;
    this.power = power;
    this.getLamp = function (){
        console.log(`Настольная лампа: освещённость ${lumen} люменов`)}
}
TableLamp.prototype = new Computer();

let sumpower=0;
const lamp = new TableLamp('Лампа', 600, 40);
const intel = new Computer('Компьютер', 1300);

lamp.getSwitch('on')
intel.getSwitch('on')
lamp.getLamp()

if (sumpower > 3000){
  console.log(`Общая мощность ${sumpower} Вт.`);
} else {
  console.log(`Общая мощность ${sumpower} Вт.`);
}