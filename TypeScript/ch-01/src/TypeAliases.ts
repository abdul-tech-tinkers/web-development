// type contact name is aliases of string.
type ContactName = string;

interface IContact {
  id: string;
  name: ContactName;
  birthDate?: Date;
}

let contact: IContact = {
  id: "123",
  name: "erere",
  birthDate: new Date("01/0/2023"),
};
