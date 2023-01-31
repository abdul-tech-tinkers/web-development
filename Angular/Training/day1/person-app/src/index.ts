import { Person } from "./models/person";
import {
  add,
  substract,
  divideWithPromise,
  divideWithAsync,
} from "./opeations";

// calling my promise function
// results are shown when all synchronous functions are done
console.log("calling promise");
let divide = divideWithPromise(20, 10);
divide.then((data) => {
  console.log(`promise went through ${data} and completed now`),
    () => {
      console.log(`promise failed`);
    };
});

const callDivide = async () => {
  try {
    let divideagain = await divideWithAsync(20, 10);
    console.log(`divide with async ${divideagain}`);
  } catch (err: any) {
    console.log(`${err.message}`);
  }
};

callDivide();
console.log(add(10, 20));
console.log(substract(20, 10));
let person = new Person(10, "jame", 34334);
console.log(person.print());
