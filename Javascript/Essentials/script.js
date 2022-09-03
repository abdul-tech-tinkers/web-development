import Book from "./BookClass.js";
import Backpack from "./BackpackClass.js";

const backpack = new Backpack("name", 123, "December 5, 2018");

console.log(backpack);
console.log(backpack.name);
backpack.UpdateBackpackToggleId(250);
let age = backpack.GetPackbackAge();
console.log(age);

let DeeniIlm = new Book(
  "Deeni Ilm",
  "Shaykh Abu Zaid Zameer",
  "Bengaluru Duroos"
);
let BachoonKiTaleem = new Book(
  "Bachoon Ki Taleem",
  "Shaykh Abu Zaid Zameer",
  "Bengaluru Duroos"
);
let BacheKyunBigdateHain = new Book(
  "Bache Kyun Bigdate Hain",
  "Shaykh Abu Zaid Zameer",
  "Bengaluru Duroos"
);

console.log("Books Available");
console.log(DeeniIlm);
console.log(BachoonKiTaleem);
console.log(BacheKyunBigdateHain);

DeeniIlm.Read();
BachoonKiTaleem.Read();
BacheKyunBigdateHain.Read();

const content = `
<main>
     <article>
      <h1>${DeeniIlm.name}</h1>
      <ul>
        <li id="bookname">Name: ${DeeniIlm.name}</li>
        <li>Author: ${DeeniIlm.author}</li>
        <li>Publisher: ${DeeniIlm.publisher}</li>
      </ul>
    </article>
</main>`;

document.body.innerHTML = content;

//document.getElementById("bookname").style.backgroundColor = "blue";

var color = "red";
console.log(color);
function changetheColor() {
  let color = "blue";
  console.log(color);
}
changetheColor();

let itemArray = ["Mango", "apple", "items"];
printItemArray();
itemArray.pop();
printItemArray();
console.log("sorting");
itemArray.sort();
console.log("items " + itemArray);
printItemArray();

/**
 * Standard function decleration
 */
function printItemArray() {
  console.log(itemArray);
}

/**
 * Adds two numbers
 * @param {a value} a
 * @param {b value} b
 * @returns addition of two values
 */
const Add = function (a = 1, b = 2) {
  let c = a + b;
  return c;
};

const Add_NG = (a, b) => a + b;

//IIFE - immediately invoked function expression
(function () {
  console.log("IIFE Function immediately invoked");
})();

let c = Add(10, 20);
console.log(`add 10, 20 result: ${c}`);
console.log(`Add_NG 10, 20 result: ${Add_NG(10, 28)}`);

const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

const nestedObjects = {
  item01: {
    name: "piggy",
    type: "toy",
    weight: 30,
  },
  item02: {
    name: "headlamp",
    type: "equipment",
    weight: 120,
  },
  item03: {
    name: "pen",
    type: "tool",
    weight: 30,
  },
  item04: {
    name: "pencil",
    type: "tool",
    weight: 30,
  },
  item05: {
    name: "eraser",
    type: "tool",
    weight: 40,
  },
  item03: {
    name: "water bottle",
    type: "equipment",
    weight: 1300,
  },
};
console.log("--------------");
console.log("old for loop:");
for (let i = 0; i < stuff.length; i++) {
  console.log(stuff[i]);
}
console.log("--------------");
console.log("for of:");
for (const item of stuff) {
  console.log(item);
}

console.log("--------------");
console.log("for each:");
stuff.forEach((element) => {
  console.log(`${element}`);
});

console.log("--------------");
console.log("for in:");
for (const item in stuff) {
  console.log(stuff[item]);
}

var article = document.createElement("article");
var list = document.createElement("ul");

for (let item of stuff) {
  let li = document.createElement("li");
  li.innerHTML = item;
  list.append(li);
}
console.log(list);

article.append(list);

console.log(article);

let main = document.querySelector("main");

main.append(article);

const listedItems = stuff.map((item) => {
  let listedItem = document.createElement("li");
  listedItem.innerHTML = item;
  return listedItem;
});

console.log(listedItems);
