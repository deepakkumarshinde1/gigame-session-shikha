/**
 * @returns {HTMLElement}
 */

function getElement(element) {
  let htmlElement = document.querySelector(element);
  if (htmlElement === null) {
    throw new Error(`${element} not found`);
  }
  return htmlElement;
}

let h1Element = getElement("#h1");
let buttonElement = getElement("button");
// let ulElement = getElement("ul");
let tbodyElement = getElement("tbody");
let formSubmit = getElement("#formSubmit");
let formInput = getElement("#input");

let count = 0;
buttonElement.addEventListener("click", () => {
  count++;
  h1Element.innerHTML = count;
  // h1Element.style.backgroundColor = count % 2 === 0 ? "green" : "red";
  if (count % 2 === 0) {
    h1Element.classList.add("bg-green");
    h1Element.classList.remove("bg-red");
  } else {
    h1Element.classList.add("bg-red");
    h1Element.classList.remove("bg-green");
  }
});

// array
let arr = [1, 2, 3, 4, 5];
let listLis = arr.map((number) => {
  return `<tr>
             <td>${number}</td>
        </tr>`;
});

//ulElement.innerHTML = listLis.join("");
tbodyElement.innerHTML = listLis.join("");

formSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  let inputValue = formInput.value;
  if (inputValue.length === 0) {
    alert("Please enter a value");
    return false;
  }
  console.log("hi");
});
