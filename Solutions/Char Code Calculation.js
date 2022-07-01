/**
 * Link to the problem: https://www.codewars.com/kata/char-code-calculation/train/javascript
 * Level: 7 kyu
 */

const calc = (x) => {
  const total1 = x
    .split("")
    .map((e) => (e = e.charCodeAt()))
    .join("");
  const total2 = total1
    .split("")
    .map((e) => (e == 7 ? (e = 1) : e))
    .join("");
  return (
    total1
      .split("")
      .map(Number)
      .reduce((p, c) => p + c) -
    total2
      .split("")
      .map(Number)
      .reduce((p, c) => p + c)
  );
};
