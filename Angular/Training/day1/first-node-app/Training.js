class Person {
  constructor(name, id, salary) {
    this.name = name;
    this.id = id;
    this.salary = salary;
  }
  print() {
    return this.name + " " + this.salary;
  }
}
class Training extends Person {
  constructor(name, id, salary, classroom) {
    super(name, id, salary);
    this.classroom = classroom;
  }

  print() {
    return super.print() + " " + this.classroom;
  }
}

var trainer = new Training("joy", 10, 1000, "t=5th folloer");
console.log(trainer);
console.log(trainer.__proto__);
