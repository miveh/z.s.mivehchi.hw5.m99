let users = [
  { name: "John", age: 22 },
  { name: "Peter", age: 20 },
  { name: "Mark", age: 23 },
  { name: "Zack", age: 23 },
  { name: "English", age: 77 },
  { name: "Math", age: 81 },
  { name: "Physics", age: 84 },
  { name: "Chemistry", age: 87 },
];

function sorting(array) {
  return array.sort((a, b) => a.age - b.age);
}

console.log(sorting(users));
