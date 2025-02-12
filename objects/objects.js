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

// object
let student = [1, 2, 3, 4, 5];

localStorage.setItem("student", JSON.stringify(student));
let data = localStorage.getItem("student");
console.log(JSON.parse(data));

// Promises
async function getData() {
  try {
    let url = `https://jsonplaceholder.typicode.com/users`;
    let response = await fetch(url, {
      method: "GET",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify(obj1),
    });

    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData();

// HTTP Methods => Read (GET) , CREATE (POST) , Update (PUT), Delete (DELETE)
