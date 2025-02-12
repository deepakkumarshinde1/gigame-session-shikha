// es6 in javascript
// topic
// 1. let and const

let a;
const b = 20;
//b = 30; // error

// 2. template literals
let s_name = "Deepak";
let age = 30;
let text = `My name is ${s_name} 
and age is ${age}`;
console.log(text);

// 3. arrow functions
let add = (a, b) => a + b;
console.log(add(10, 20));
let array = [1, 2, 3, 4, 5];
let newArray = array.map((value) => value * 2);
console.log(newArray);

// 4. default parameters
let sum = (a = 0, b = 0) => a + b;
console.log(sum(10)); // 10

// 5. rest operator
let sum1 = (...values) => {
  console.log(values);
};
sum1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// 6. spread operator
// deep copy of a object & array
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3, d: 4 };
obj1.a = 100;
console.log(obj2);

let numberArray = [1, 2, 3, 4, 5];
let newArray1 = [100, 200, ...numberArray, 6, 7, 8, 9, 10];
console.log(newArray1);

// 7. destructuring
let obj = { studentName: "Deepak", studentAge: 30 };
let { studentAge, studentName } = obj;
console.log(studentName); // Deepak

let array1 = [1, 2, 3, 4, 5];
let [n1, n2, ...nList] = array1;
console.log(n1, n2, nList);

// 8. object literal shorthand
let name1 = "Deepak";
let age1 = 30;
let studentData = {
  name1,
  age1,
};
console.log(studentData);
console.clear();
// 9. *promises
// 10. *async/await
// 11. *classes
// 12. *modules
// 13. *import/export
// 14. generators
// definition: A generator is a function that can stop midway and then continue from where it stopped.
function* genId(max) {
  let i = 0;
  while (i < max) {
    let id = Math.floor(Math.random() * 1000);
    i++;
    yield id;
  }
}

let ids = genId(10);
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());

// 15. maps
// definition: A Map is a collection of key-value pairs.
let map = new Map();
map.set("name", "Deepak");
map.set("age", 30);
console.log(map.get("name"));
console.log(map.has("name1"));
console.log(map.size);

// 16. sets
// definition: A Set is a collection of unique values.
let set = new Set([1, 2, 3, 4, 4, 4, 4, 4, 4]);
set.add(1);
set.add(2);
set.add(3);
set.add(1);
set.add(2);
console.log(set.has(1));

// 17. symbols
let s = Symbol("hello_s");
let s1 = Symbol("hello_s1");
let s2 = "text";
console.log(s == s1); // false
let object = {
  [s]: "value",
  [s1]: "value1",
  [s2]: "value2",
};
console.log(object[s]); // value
console.log(Object.getOwnPropertySymbols(object));
// 18. iterators
let array_1 = [1, 2, 3, 4, 5];
let iterator = array_1[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// 22. number helper methods
/* 
       list of number helper methods es6
        Number.isSafeInteger()
        Number.parseFloat()
        Number.parseInt() 
*/
// 23. object helper methods
// list of object helper methods
// Object.assign()
// Object.create()
// Object.entries()
// Object.freeze()
// Object.keys()
