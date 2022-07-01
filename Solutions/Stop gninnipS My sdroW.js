/**
 * Link to the problem: https://www.codewars.com/kata/stop-gninnips-my-sdrow/train/javascript
 * Level: 6 kyu
 */

const spinWords = (words) => {
  let sentence = words.split(" ");
  let reversed = [];

  sentence.forEach((item) => {
    if (item.length >= 5) {
      let tmp = "";

      for (let i = item.length - 1; i >= 0; i--) {
        tmp += item[i];
      }
      reversed.push(tmp);
    } else {
      reversed.push(item);
    }
  });

  return reversed.join(" ");
};
