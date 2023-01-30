console.log("js tutorial for var, const and let keywords");

var b = "hello"; // var is global scoped changed the values inside the scoped as well
console.log(b);
var b = "hello again" //possible can be redeclared
console.log(b);
{
  b = "changed"
  console.log(b);
}
console.log(b);
console.log(`type of b is ${typeof (b)}`);


let c = "let_hello";
//let c= 100; // not possible, cannot be redecleared
console.log(c);
{
  let c = "let_inside_block";
  console.log(c);
}
console.log(`let after blocked =  ${c}`);

const c_my = 100;
// const c_my=0909; // redecleration not allowed
console.log(c_my);
//c_my="200"; // Assignment to constant variable is not possible

console.log(`type of c_my is ${typeof (c_my)}`);

