var dictionary = [
  "Wonderful",
  "Joyful",
  "Happiness",
  "Time",
  "Task",
  "12344",
  "Apple",
  "Mark",
  "If",
  "Also",
  "Laptop",
  "Paramounts",
  "Reorganisation",
  "Truthful",
];
const rex = /\b[b-zB-Z]{6,}/;
var result = dictionary.filter((word) => rex.test(word));
console.log(result);
