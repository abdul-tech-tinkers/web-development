let arr = [1, 2, 3, 4, 5, 6];

console.log(arr);
console.log(arr.length);
console.log(delete arr[0]);
console.log(arr);
console.log(arr.length);
console.log("----------------------------foreach----------------------------");
arr.forEach((element) => {
  console.log(element);
});

let items = {
  items: ["KIC", "IIC"],
};
console.log(
  "----------------------------Array.from----------------------------"
);
let itemsArray = Array.from(items.items);
console.log(itemsArray);

console.log("----------------------------for of----------------------------");
for (let i of arr) {
  console.log(i);
}

const person = {
  name: "abdul",
  id: 1,
};
for (let p in person) {
  console.log(`${p} is ${person[p]}`);
}

console.log("----------------------------for in----------------------------");
for (let i in arr) {
  console.log(i);
}

const person1 = {
  name: "abdul",
  id: 1,
};

console.log("----------------------------map----------------------------");
let returnArray = arr.map((ele, index) => {
  return ele * 10;
});
console.log(returnArray);

console.log("----------------------------filter----------------------------");
let returnArray1 = arr.filter((ele) => {
  return ele % 2 == 0;
});
console.log(returnArray1);

console.log("----------------------------reduce----------------------------");
let returnArray2 = arr.filter((ele1, ele2) => {
  return ele1 + ele2;
});
console.log(returnArray2);
