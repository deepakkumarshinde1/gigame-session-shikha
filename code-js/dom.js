let btn = document.querySelector("#btn-click");
let div = document.querySelector("#div");

div.addEventListener(
  "click",
  function (event) {
    alert("div");
  },
  true
);

btn.addEventListener("click", function (event) {
  alert("button");
});

// dom tree
