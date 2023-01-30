// logical operator to find the age is between 10 and 20
const ageCalculatior = (age) => {
    if (age >= 10 && age <= 20) {
      console.log("age between 10 and 20");
    }
    else {
      console.log("age is not between 10 and 20");
    }
  
  }
  
  
  
  const printAge = (age) => {
    switch (age) {
      case 55:
        console.log("55");
        break;
  
      case 15:
        console.log("15");
        break;
    }
  
  }
  
  const numberDivisbleByTwoAndThree = (number) => {
    if (number % 2 == 0 && number % 3 == 0) {
      console.log(`number ${number} is divisible by both 3 and 2`);
    }
    else {
      console.log(`number  ${number} is not  divisible by both 3 and 2`);
    }
  }
  
  const numberDivisbleByTwoOrThree = (number) => {
    if (number % 2 == 0 || number % 3 == 0) {
      console.log(`numberDivisbleByTwoOrThree===number ${number} is divisible by both 3 or 2`);
    }
    else {
      console.log(`numberDivisbleByTwoOrThree===number  ${number} is not  divisible by both 3 or 2`);
    }
  }
  
  
  ageCalculatior(15);
  ageCalculatior(55);
  printAge(15);
  printAge(55);
  
  numberDivisbleByTwoAndThree(2);
  numberDivisbleByTwoAndThree(3);
  numberDivisbleByTwoAndThree(7);
  numberDivisbleByTwoAndThree(6);
  numberDivisbleByTwoAndThree(12);
  
  numberDivisbleByTwoOrThree(2);
  numberDivisbleByTwoOrThree(3);
  numberDivisbleByTwoOrThree(7);
  numberDivisbleByTwoOrThree(6);
  numberDivisbleByTwoOrThree(12);