//-------------------------findIndex()--------------//
     // [🍷,🥤,🥧,🍳].findex(🥤) => 1
    //  const numbers = [10, 20, 30, 40, 50];

    //  const index = numbers.findIndex(number => number > 30);
    // console.log(`index of the first number greater than 30: ${index}`); // 3 


//-------------------------IndexOf-----------------//
    // const numbers = [10, 20, 30, 40, 50];           
    // const indexOf30 = numbers.indexOf(30);
    // console.log(indexOf30); // Output: 2

//---------------------------findIndex---------------//
    const numbers = [10, 20, 30, 40, 50, 30, 60];

    const firstIndex = numbers.findIndex(number => number === 30);
        console.log(firstIndex);
    if (firstIndex !== -1) {
    const nextIndex = numbers.findIndex((number, index) => index > firstIndex && number === 30);
    console.log(nextIndex); // 5 (index of the second occurrence of 30)
    } else {
    console.log('Element not found.');
    }
