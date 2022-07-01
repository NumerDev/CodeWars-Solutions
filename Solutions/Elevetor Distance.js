/**
 * Link to the problem: https://www.codewars.com/kata/elevator-distance/train/javascript
 * Level: 7 kyu
 */

const elevatorDistance = (arr) => {
  return arr
    .map((e, i, a) => a[i] - a[i + 1])
    .filter((e) => !isNaN(e))
    .reduce((p, c) => p + Math.abs(c), 0);
};
