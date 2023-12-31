"use strict";
// PROBLEM BREAKDOWN
// 1. User can click a button of a interger which will store the particular button value and will show it in the display box.
// 2. User should be able to select multiple buttons to get a certain number (For now it's integer)
// 3. User will select an operator (Add, Subtract, Multiply, Divide). THis will again be shown in the display field and stored in a variable
// 4. User will select the second integer and it will get saved in a variable and displayed in the field.
// 5. If user clicks equal to operator button the operation will get evaluated.
// 6. If user clicks 'Reset' button everythin will reset back to the orignal state.
// 7. If user clicks 'Del' the last value (either number or operator will get removed)

// Get the first integer Value
let displayBox = document.querySelector(".display-box");

function buttonClickValue(event) {
  const buttonValue = event.target.textContent;

  displayBox.textContent += buttonValue;
}

const numberButtons = document.querySelectorAll(".btn.number");

numberButtons.forEach((button) => {
  button.addEventListener("click", buttonClickValue);
});

// Get the Operator
const operatorButton = document.querySelectorAll(".btn.operator");
// let operatorType = operatorButton.textContent;

operatorButton.forEach((button) => {
  button.addEventListener("click", buttonClickValue);
});

// Getting the final Value
const equalsTo = document.querySelector(".btn.equals").textContent;

document.querySelector(".equals").addEventListener("click", function () {
  displayBox.textContent = eval(displayBox.textContent);
});

// Deleting the last number or operator (Del)
document.querySelector(".backspace").addEventListener("click", function () {
  displayBox.textContent = displayBox.textContent.slice(0, -1);

  if (displayBox.textContent === "") {
    displayBox.textContent;
  }
});

// Reset the calculator after the Reset button
document.querySelector(".reset").addEventListener("click", function () {
  displayBox.textContent = "";
});
