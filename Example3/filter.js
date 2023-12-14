 
//---filter() Creates a new array with all elements that pass the test implemented by the provided function
        // [🍷,🥤,🥧,🍳].map(isDrink) => [🍷,🥤]
    
        // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        // // Using filter to get even numbers from the array
        // let evenNumbers = numbers.filter(number => number % 2 === 0);

        // console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
        // console.log(numbers)



//-----------------------------for loop and if-------------//
//       const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//       const evenNumbers = [];
//       for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] % 2 === 0) {
//          evenNumbers.push(numbers[i]);
//       }
//       }
//       console.log(evenNumbers); // Output: [2, 4]

//----------------------------more example--------------//
        const people = [
            { name: 'James', age: 25 },
            { name: 'Mean', age: 30 },
            { name: 'Jo', age: 22 },
            { name: 'Lak', age: 40 }
          ];
          
          const filteredPeople = people.filter(person => person.age > 25);
          
          console.log(filteredPeople);
          [
            { name: 'Bob', age: 30 },
            { name: 'David', age: 40 }
          ]
 