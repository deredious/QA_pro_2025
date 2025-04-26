const arr = [
  {
    userName: "Test",
    lastName: "Test",
    email: "test.test@gmail.com",
  },
  {
    userName: "Dmitro",
    lastName: "Porohov",
    "<email": "dmitro.porohov@yahoo.com>",
  },
  {
    userName: "Andrii",
    lastName: "",
    email: "andrii@mail.ru", // Нам такі не підходять
  },
];
const rex = /[\w\.]+@([\w-]+\.)+(com|net|org)/;
let newarr = arr.filter(checker);

function checker(element) {
  let mailtest = element.email || element["<email"];
  return mailtest && rex.test(mailtest);
}
