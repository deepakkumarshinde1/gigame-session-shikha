let obj1 = {
  name: "Deepak",
  address: {
    location: "nashik",
    country: "india",
    state: "Maharashtra",
  },
};

// let obj2 = Object.assign({}, obj1);
let obj2 = { ...obj1 };
console.log(obj1, obj2);
obj2.age = 23;
obj2.address.country = "US";
console.log(obj1, obj2);

// iterators
let array = [1, 2, 3, 4, 5];
let iterator = array[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
