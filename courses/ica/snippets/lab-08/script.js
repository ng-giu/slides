// #region step1
// Step 1: your details
const studentName = "Mariam";
const idDigits = 2345;
console.log("Hello, " + studentName);
// #endregion step1

// #region step2
// Step 2: expressions
const lastDigit = idDigits % 10;
const doubled = idDigits * 2;
console.log(`Last digit: ${lastDigit}`);
console.log(`Doubled: ${doubled}`);
// #endregion step2

// #region step3
// Step 3: a function
function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(idDigits));
// #endregion step3

// #region step4
// Step 4: if / else
if (isEven(idDigits)) {
  console.log(`${studentName}, your ID is even`);
} else {
  console.log(`${studentName}, your ID is odd`);
}
// #endregion step4

// #region step5
// Step 5: a loop
for (let i = 1; i <= 5; i++) {
  const result = lastDigit * i;
  console.log(`${lastDigit} x ${i} = ${result}`);
}
// #endregion step5
