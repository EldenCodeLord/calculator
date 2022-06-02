// Business logic:

function add(number1, number2) {
  return number1 + number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = add(number1, number2);
alert(result);

function subtract(number1, number2) {
  return number1 - number2;
}
$(document).ready(function() {
  const number1 = parseInt($("#add1").val());
  const number2 = parseInt($("#add2").val());
  const result = subtract(number1, number2);
  alert(result);
});

function multiply(number1, number2) {
  return number1 * number2;
}
$(document).ready(function() {
  const number1 = parseInt($("#add1").val());
  const number2 = parseInt($("#add2").val());
  const result = multiply(number1, number2);
  alert(result);
});

function divide(number1, number2) {
  return number1 / number2;
}

$(document).ready(function() {
  const number1 = parseInt($("#add1").val());
  const number2 = parseInt($("#add2").val());
  const result = divide(number1, number2);
  alert(result);
});


// Interface Logic: 

$(document).ready(function() {
  const number1 = parseInt($("#add1").val());
  const number2 = parseInt($("#add2").val());
  const result = add(number1, number2);
  alert(result);
});