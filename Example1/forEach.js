//---forEach() Executes a provided function once for each array element
 let numbers = [1, 2, 3, 4, 5];

//Using forEach to log each number multiplied by 2
    numbers.forEach((number,index) => {
        let doubledNumber = number * 2;
        console.log(`The numbex index ${index} = ${doubledNumber}`);
        
    });
    console.log(numbers);
    console.log(doubledNumber);

    
