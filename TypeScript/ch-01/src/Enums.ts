interface IAnotherContact {
  id: string;
  name: ContactName;
  birthDate?: Date | string | undefined;
  status: Status;
  anotherStatus?: AnotherStatus;
}

enum Status {
  Working,
  Leave,
  NotWorking
}

// another way to define enum with union type
type AnotherStatus = "Leave" | "Working" | "Retired";

let anotherContact: IAnotherContact = {
  id: "123",
  name: "erere",
  birthDate: new Date("01/0/2023"),
  status: Status.Leave,
  anotherStatus: "Retired",
};

console.log(anotherContact.status);
