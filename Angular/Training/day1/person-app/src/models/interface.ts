interface IOpertaions {
  add(a: number, b: number): number;
}

interface IPerson {
  name: string;
  id: number;
  salary: number;
  print(): string;
}

class Operations implements IOpertaions {
  add(a: number, b: number): number {
    throw new Error("Method not implemented.");
  }
}

// class Person implements IPerson
// {
//     name: string;
//     id: number;
//     salary: number;
//     print(): string {
//         throw new Error("Method not implemented.");
//     }
    
// }
