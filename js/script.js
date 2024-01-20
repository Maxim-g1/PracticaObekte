let car = {
    color: 'orange',
    engine: '2L',
    brand: 'toyota',
    driver: {
        name: 'Grigory',
        lastName: 'Lopkin',
        old: '256',
        category: 'B',
    },
    park: {},
    start: {},
    stop: {},
} //----------------------------------------------1,2,3

console.log(car);//----------------------------------------------4
car.driver.name = 'Olga';//----------------------------------------------5
for (let key in car.driver) {
    console.log(car.driver[key])
};//---------------------------------------------6

delete car.driver.lastName//---------------------------------------------7
console.log(car.driver)//----------------------------------------------8

function proverka() {
    let aboba = ('model' in car)
    if (aboba == false) {
        console.log('Такого свойства нет')
    }
    if (aboba == true) {
        console.log(car.model)
    }
}//----------------------------------------------9

proverka();//----------------------------------------------9
for (let key in car.driver) {
    console.log(car.driver[key])
};//----------------------------------------------10

for (let key in car) {
    if (typeof car[key] === 'string') {
        console.log(car[key])
    }
};//----------------------------------------------11 

car.driver2 = { name: 'Dimon', category: 'C' }//----------------------------------------------12
console.log(car)//----------------------------------------------13
let tapok = 'driver2'//----------------------------------------------14
console.log(car[tapok])//----------------------------------------------15


