class Book {
  constructor(name, author, publisher) {
    this.name = name;
    this.author = author;
    this.publisher = publisher;
  }
  Read() {
    console.log("reading the book" + this.name);
  }
}

export default Book;
