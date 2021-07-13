const output2 = document.querySelector(".outputtwo");
const output1 = document.querySelector(".outputone");
const btns = document.querySelectorAll(".btn");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const clearAll = document.querySelector(".clearAll");

//on click it will come up.
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let data = btn.getAttribute("data-number");
    output2.textContent += data;
  });
});

//clear all
clearAll.addEventListener("click", () => {
  output2.textContent = "";
  output1.textContent = "";
});

//equal event
equal.addEventListener("click", () => {
  let expression = output2.textContent;
  output2.textContent = eval(expression);
  output1.textContent = eval(expression);
});

//clear event
clear.addEventListener("click", () => {
  let string = output1.textContent;
  let arr = string.split("");
  arr.pop();
  output2.textContent = arr.join("");
});
