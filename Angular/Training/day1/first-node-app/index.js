//console.log(module);
console.log("welcome to js");
//let result = add(12, 15);
//console.log(result);

// constructor function
function person(pname, pid, psalary) {
  this.name = pname;
  this.pid = pid;
  this.salary = psalary;
  this.print = () => {
    return this.name + "  " + this.salary;
  };
}
console.log(person.prototype); //prototype property of person function

let abdul = new person("abdul", 12, "2000");
console.log(abdul.print());
abdul.location = "bangalore";
console.log(abdul);

call = () => {
  console.log(x);
  var x = 10;
  console.log(x);

  console.log(this.y);
  this.y = 10;
  console.log(this.y);

  foo();
  function foo() {
    console.log("foo");
  }
  foo();

  // fn() - this will throw error,
  var fn = function () {
    console.log("fn");
  };
  fn();
};
call();
