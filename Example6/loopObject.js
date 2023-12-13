//--------------------------------loop through object---------------------------//
const person = {
    firstName: 'Jack',
    age: 30,
    gender: 'male'
 }

 for(property in person) {
    console.log(property + ':' + person[property]);
 }

//-------------------------------Loop through object in object----------------//
   const car = {
        brand: 'Toyota',
        model: 'Camry',
        year: 2022,
        feature:["air conditions", "four wheels drive", "NAV"],
        owner: {
            firstName:'Jack' ,
            lastName:'Jones',
            age: 30
        }
      };
      
      for (let property in car) {
        if (property === 'owner') {
          for (let ownerProperty in car.owner) {
            console.log(ownerProperty + ': ' + car.owner[ownerProperty]);
          }
        } else {
          console.log(property + ': ' + car[property]);
        }
      }
      

    //   for(let carFeature in car.feature ){
    //     console.log(carFeature + ':' + car.feature[carFeature]);
    //   }

    //   for (let ownerOfCar in car.owner){
    //     console.log(ownerOfCar + ':' + car.owner[ownerOfCar]);
    //   }

//-----------------------------for of: iterate over iterable objects like arrays, strings
    const fruits = ['apple', 'banana', 'orange'];
    for (let index of fruits){
     console.log(`fruits is ${index}`);
    }

    const numbers = [30, 15, 2];
    for (let index of numbers){
        // if (index === 15){
        //     break;
        // }
     console.log(`numbers is ${index}`);
    }

    const numbers1 = [30, 15, 2];
    let sum = 0;
        for (let number of numbers) {
        sum += number;
        }
    console.log(`The sum of numbers is ${sum}`);

