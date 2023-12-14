//---map() Creates a new array with the results of calling a provided function on every element.

   //  // [🐮,🐔,🥔,🌽].map(cook) = [🍔,🍗,🍟,🍿]
   //  // [🍇,🍎,🥩,🥚].map(make) => [🍷,🥤,🥧,🍳]

    let numbers1 = [1, 2, 3];
    let doubledNumbers = numbers1.map(num1 => num1 * 2);
    console.log(numbers1);
    console.log(doubledNumbers);
    console.log(`doubledNumbers is: ${doubledNumbers}`); // Output: [2, 4, 6]

