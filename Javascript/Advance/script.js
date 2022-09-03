let item = 0; // let for inline  - local
console.log(`item is ${item}`);

const planetEarth = "Earth"; // you cannot change this value
//planetEarth = 232;
console.log("Earth starts with Ear " + planetEarth.startsWith("Ear"));
console.log("Earth starts with ear " + planetEarth.startsWith("ear"));
console.log("Earth ends with th " + planetEarth.endsWith("th"));
console.log("Earth includes with th " + planetEarth.includes("th"));
console.log("Earth search with th " + planetEarth.search("th"));

const id = Symbol();
//console.log(`id is ${id}`);

const courseInfo = {
  title: "JavaScript",
  topics: ["object", "maps", "arrays", "methods", "functions", "classes"],
  id: "js-",
};

// MAP
const topicItems = courseInfo.topics.map((item) => {
  item = "javascript  - " + item;
  return item;
});

for (let item of courseInfo.topics) {
  console.log("Course item " + item);
}

for (let item in courseInfo.topics) {
  console.log("Course item " + item);
}

courseInfo[id] = 2500;

console.log(courseInfo);
console.log(topicItems);

// MAP
let course = new Map();

course.set("react", { description: "ui" });
course.set("jest", { description: "testing" });

console.log(course);
console.log(course.react);
console.log(course.get("react"));

// MAP
let details = new Map([
  [new Date(), "today"],
  [1, { temp: 234 }],
]);

details.forEach((item) => {
  console.log(item);
});

let books = new Set();
books.add("Pride");
books.add("war and peace");

console.log(books);

books.delete("Pride");
books.add("Origin/main");

console.log(books);

books.forEach((book) => {
  console.log(book);
});

//function returning object

function skier(name, sound) {
  return {
    name,
    sound,
    powderYell: function () {
      let yell = this.sound.toUpperCase();
      console.log(`${yell}! - ${yell}!`);
    },
  };
}

skier("Hello", "World").powderYell();

// REPEAT Method

console.log("Hello ".repeat(10));

// Promise
const spacePeople = () => {
  return new Promise((resolves, rejects) => {
    let items = ["Haleem", "Kaleem", "Jameel"];
    resolves(items);
  });
};

spacePeople().then((items) => {
  items.forEach((item) => {
    console.log("Space person " + item);
  });
});

// async await

const githubRequest = async (login) => {
  let response = await fetch(`https://api.github.com/users/${login}`);
  let json = await response.json();
  console.log(`${json.login} - ${json.company}`);
};

console.log(githubRequest("abduljameelb"));
githubRequest("eveporcello");
