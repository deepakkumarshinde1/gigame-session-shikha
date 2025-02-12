// throttling and debouncing
// 1. Throttling: It will not allow to execute the function more
// than once in a given time interval.
// 2. Debouncing: It will not allow to execute the function until
// a certain time has passed without it being called.

let input = document.querySelector("#input");
input.addEventListener(
  "keyup",
  debounce(500, function (event) {
    console.log("API call", input.value);
  })
);

function debounce(limit, cb) {
  let timer = null;
  return function (event) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      cb(event);
    }, limit);
  };
}

window.addEventListener(
  "scroll",
  throttling(1000, function (event) {
    console.log("Scrolling");
  })
);

function throttling(limit, cb) {
  let isToScroll = true;
  return function (event) {
    if (!isToScroll) {
      return;
    }
    isToScroll = false;
    setTimeout(() => {
      cb(event);
      isToScroll = true;
    }, limit);
  };
}
