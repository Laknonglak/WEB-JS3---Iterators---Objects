//---reduce(acc+curr) - used to iterate over an array and accumulate a single value through the application of a given callback function
  //[🍷,🥤,🥧,🍳].reduce(eat) => [🥗]

        //array.reduce(callback, initialValue);
        // numbers.reduce((accumulator, currentValue) => {
        //     //doing something or return something
        // }, initialValue);

         //example 1
         let numbers = [9,8,7,6,5];

         let sum = numbers.reduce((accumulator, currentValue) => {
             console.log(`accumulator: ${accumulator}`);
             console.log(`currentValue: ${currentValue}`);
             return (accumulator + currentValue);
         }, 9);

         console.log(sum); // Output: 15