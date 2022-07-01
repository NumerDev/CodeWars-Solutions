/**
 * Link to the problem: https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
 * Level: 6 kyu
 */

const arrayDiff = (a, b) => {
  let arr = a;

  b.forEach((e, i) => {
    arr = arr.filter((i) => i !== e);
  });

  return arr;
};
