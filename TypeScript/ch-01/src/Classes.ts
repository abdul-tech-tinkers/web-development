abstract class Human {
  constructor(name: string) {}
  CanWalk(): boolean {
    return true;
  }
}
class Employee extends Human {
  constructor(public id: string, public name: string) {
    super(name);
    this.salary = 0;
    this.visitCount = 0;
  }

  private salary: number;
  protected visitCount: number;
  set Salary(salary: number) {
    this.salary = salary;
  }

  get Salary(): number {
    return this.salary;
  }
}

class SiemensEmployee extends Employee {
  constructor(public id: string, public name: string, public location: string) {
    super(id, name);
  }

  setVisitCount(count: number) {
    this.visitCount = count;
  }
}

let emp = new SiemensEmployee("65763179", "abdul", "Gold hill");
console.log(emp.CanWalk());
