"use strict";
// PROBLEM BREAKDOWN
// 1. User can click a button of a interger which will store the particular button value and will show it in the display box.
// 2. User should be able to select multiple buttons to get a certain number (For now it's integer)
// 3. User will select an operator (Add, Subtract, Multiply, Divide). THis will again be shown in the display field and stored in a variable
// 4. User will select the second integer and it will get saved in a variable and displayed in the field.
// 5. If user clicks equal to operator button the operation will get evaluated.
// 6. If user clicks 'Reset' button everythin will reset back to the orignal state.
// 7. If user clicks 'Del' the last value (either number or operator will get removed)

let number1 = 0;
let operator = "";
let number2 = 0;

let displayBox = document.querySelector(".display-box");

// Handle button click function
function handleButtonClick(event) {
  const buttonValue = event.target.textContent;
  displayBox.textContent += buttonValue;
}

const numberButtons = document.querySelectorAll(".btn.number");

numberButtons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});
