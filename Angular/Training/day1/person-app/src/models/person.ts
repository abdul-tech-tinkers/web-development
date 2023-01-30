export class Person {
  //   private id: number;
  //   private name: string;
  //   private salary: number;
  //   constructor(id: number, name: string, salary: number) {
  //     this.id = id;
  //     this.name = name;
  //     this.salary = salary;
  //   }

  // this one will create local variable and assign it.
  constructor(public id: number, public name: string, public salary: number) {}
  print() {
    return `${this.name}  ${this.salary}`;
  }
}
