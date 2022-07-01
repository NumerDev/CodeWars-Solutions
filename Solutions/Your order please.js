/**
 * Link to the problem: https://www.codewars.com/kata/your-order-please/train/javascript
 * Level: 6 kyu
 */

const order = (words) => {
  let sentence = words.split(" ");
  let order = [];

  sentence.forEach((item) => {
    item.split("").forEach((item2) => {
      item2.match(/^[0-9]+$/) ? (order[item2 - 1] = item) : null;
    });
  });

  return order.join(" ");
};
