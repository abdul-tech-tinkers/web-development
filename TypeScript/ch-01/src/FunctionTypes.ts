interface IPerson {
  id: string;
  name: string;
  birthDate?: Date;
}

function ToString(contact: IPerson, func: (source: IPerson) => IPerson) {
  return "";
  func(contact);
}
