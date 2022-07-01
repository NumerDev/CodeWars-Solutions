/**
 * Link to the problem: https://www.codewars.com/kata/the-hashtag-generator/train/javascript
 * Level: 5 kyu
 */

const generateHashtag = (str) => {
  let firstResult = str.split(" ").filter((e) => e);
  if (firstResult.length == 0) return false;

  let result = `#${firstResult
    .map((e) => `${e[0].toUpperCase()}${e.slice(1)}`)
    .join("")}`;

  if (result.length > 140) return false;
  return result;
};
