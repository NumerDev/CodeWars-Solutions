/**
 * Link to the problem: https://www.codewars.com/kata/number-shortening-filter/train/javascript
 * Level: 6 kyu
 */

const shortenNumber = (suffixes, base) => {
  return (number) => {
    if (number.length == 0) return "";
    if (number != Number(number)) return number.toString();

    let i = 0;
    while (number > base && i < suffixes.length - 1) {
      number /= base;
      i++;
    }

    return `${Math.trunc(number)}${suffixes[i]}`;
  };
};
