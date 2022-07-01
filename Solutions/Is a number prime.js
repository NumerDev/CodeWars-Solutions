/**
 * Link to the problem: https://www.codewars.com/kata/is-a-number-prime/train/javascript
 * Level: 6 kyu
 */

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) return false;
  }

  return true;
};
