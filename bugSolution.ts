function printNumber(num: number): void {
  console.log(num);
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function printNumberSafe(num: any): void {
  if (isNumber(num)) {
    printNumber(num);
  } else {
    console.error("Error: Invalid input. Expected a number.");
  }
}

printNumberSafe(10); // Works
printNumberSafe("hello"); // Prints error message.