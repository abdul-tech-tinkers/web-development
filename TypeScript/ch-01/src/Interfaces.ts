interface IPerson {
  id: string;
  name: string;
  birthDate?: Date;
}

let person: IPerson = {
  id: "123",
  name: "erere",
  birthDate: new Date("01/0/2023"),
};

let anotherPerson: IPerson = {
  id: "123",
  name: "erere",
  //birthDate: new Date("01/0/2023"), birth date is defined with ? in interface and its optional.
};
