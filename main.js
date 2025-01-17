fun();
// var => function scope
// let => block
// const => block
console.log(c); // undefined
// let a = 10;
var c = 10;
let a; // undefine
const b = 10;

if (true) {
  let a = 10;
}

function fun() {
  var b = 20;
  let a = 10;

  if (true) {
    let a = 10;
  }

  console.log(a);
} // pure function

// fun para are fixed
// we get a expected output
// all variables must be local

window.fun();

// function definition
function fun() {}
// function expression
let fun1 = function () {}; // 8
let fun11 = () => {}; // 8
fun1();
// function callback

// fun2(function () {
//   // callback | inline    }
// });

// fun2(() => {
//   // callback | inline    }
// });
// function arrow
// IIFE

// function  ==> context as window ( this => with window reference)
// => has not context on there own ( but they can use a neatest context)

class Example {
  print() {
    // return function(){
    //     console.log(this)// window object instance
    // }
    return () => {
      console.log(this); // example object instance
    };
  }
}

(function () {
  let a = 10;
  let b = 10;
  window.c = 10;
})();

(function () {
  let a = 30;
  console.log(c);
})();

function foo1() {
  return "hello";
}

// function foo2() {
//   return {
//     name: "deepakkumar",
//   };
// }
//
// function fun1() {
//   let a = 10;
//   return {
//     add() {
//       console.log(a);
//     },
//     sub() {},
//   };
// }
console.clear();

function funA(a) {
  return function funB(b) {
    return function funC(c) {
      return a + b + c;
    };
  };
}

console.log(funA(10)(20)(30));

function dynamicAdd(...args1) {
  // [10,10,30,40,30]
  // rest para [10,20]
  return function (...args2) {
    // rest para []
    if (args2.length === 0) {
      return args1.reduce((sum, val) => sum + val, 0);
    }
    return dynamicAdd(...args1, ...args2); // spread [10,10]
  };
}

//console.log(dynamicAdd(10)(20)(30)());
console.clear();
async function div(a, b) {
  try {
    if (b === 0) throw new Error(`Can't divide by zero`);
    return Promise.resolve(a / b);
  } catch (error) {
    return Promise.reject(error.message);
  }
}
console.log("start");

setTimeout(() => {
  //console.log("timeout");
  //console.clear();
}, 0);

div(10, 20)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

console.log("end");

// await & async
// rest api call (client and server)
async function _fetch(url) {
  return await fetch(url);
}

async function getData(...path) {
  for (let i = 0; i < path.length; i++) {
    path[i] = _fetch(path[i]);
  }
  try {
    let response = await Promise.allSettled(path);

    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}

let api1 = `https://jsonplaceholder.typicode.com/users`;
let api2 = `https://jsonplaceholder.typicode.com/posts`;
let api3 = `https://fakestoreapi/users`;
getData(api1, api1, api3);
// single => proFun().then().catch();
// 1st => 2nd => 3rd => try-catch + async-await

// async fun(){
//  await 1st
//  await 2nd
//  await 3rd
// }
