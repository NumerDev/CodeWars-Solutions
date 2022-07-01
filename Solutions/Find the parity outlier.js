/**
 * Link to the problem: https://www.codewars.com/kata/find-the-parity-outlier/train/javascript
 * Level: 6 kyu
 */

const findOutlier = (integers) => {
  let odd = [];
  let even = [];

  integers.forEach((item) => {
    item % 2 == 0 ? even.push(item) : odd.push(item);
  });

  return odd.length < even.length ? odd[0] : even[0];
};
