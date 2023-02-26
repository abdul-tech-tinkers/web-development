class ClassWithPrivate {
  #name;
  #age;
  #salary;
  constructor(name, age, salary) {
    this.#name = name;
    this.#age = age;
    this.#salary = salary;
  }
  print() {
    this.#privateStaticMethod();
    console.log(
      `${this.#name} with age ${this.#age} has salary of ${this.#salary}`
    );
  }

  #privateStaticMethod() {
    console.log("inside private method");
  }

  get age() {
    return this.#age;
  }

  set age(age) {
    this.#age = age;
  }
}
let privateClass = new ClassWithPrivate("jameel", 20, 1222);
privateClass.print();
console.log(privateClass.age);
privateClass.age = 100;
console.log(privateClass.age);
