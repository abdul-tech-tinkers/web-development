console.log(hostitedVar); //hoisted but prints undefined
var hostitedVar = 10;

//console.log(letandConstNotHoisted); //prints error
// Cannot access 'letandConstNotHoisted' before initialization
let letandConstNotHoisted = 20;

console.log(letandConstNotHoisted);

hoistedFunction(); // "I am a hoisted function"

function hoistedFunction() {
  console.log("I am a hoisted function");
}

// func(); // func is not a function

var func = function notHostiedFunciton() {
  console.log("I am a not hoisted function");
};
func(); // no problem
//func2();
var func2 = () => {
  console.log("I am a not hoisted function");
};
func2(); // no problem
