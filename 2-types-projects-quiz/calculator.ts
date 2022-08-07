/**
 * Let's make a calculator 🧮
 */

type Kind = "add" | "substract" | "multiply" | "divide" | "remainder";

function calculate(kind: Kind, num1: number, num2: number) {
  if (kind === "add") return num1 + num2;
  if (kind === "substract") return num1 - num2;
  if (kind === "multiply") return num1 * num2;
  if (kind === "divide") return num1 / num2;
  if (kind === "remainder") return num1 % num2;
}

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
