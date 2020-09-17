// 1. addEventListener to each operator btn when is's clicked
// const btn = document.querySelector("#btn");
const add = document.getElementById("add");
const subtract = document.getElementById("subs");
const multiply = document.getElementById("mult");
const divide = document.getElementById("div");

// 2. answer come from string of input num dot value and convert it to number
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const answer = document.getElementById("answer");

// 3.combining 1 and 2
add.addEventListener("click", function (e) {
  e.preventDefault();
  return (answer.innerHTML = Number(num1.value) + Number(num2.value));
});
subtract.addEventListener("click", function (e) {
  e.preventDefault();
  return (answer.innerHTML = Number(num1.value) - Number(num2.value));
});
multiply.addEventListener("click", function (e) {
  e.preventDefault();
  return (answer.innerHTML = Number(num1.value) * Number(num2.value));
});
divide.addEventListener("click", function (e) {
  e.preventDefault();
  return (answer.innerHTML = Number(num1.value) / Number(num2.value));
});

// btn.addEventListener("click", calculator);
// function calculator() {
//   if (btn === add) {
//     return answer.innerHTML = Number(num1.value) + Number(num2.value)
//   } else if (btn === subtract) {
//     return answer.innerHTML = Number(num1.value) - Number(num2.value)
//   } else if (btn === multiply) {
//     return answer.innerHTML = Number(num1.value) * Number(num2.value)
//   } else if (btn === divide) {
//     return answer.innerHTML = Number(num1.value) / Number(num2.value)
//   }}
