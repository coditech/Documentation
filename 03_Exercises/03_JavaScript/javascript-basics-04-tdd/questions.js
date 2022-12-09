const stringSize = (text) => {
  text = "This text has a certain number of characters";
  const result = text.length;
  return result;
};
const replaceCharacterE = (text) => {
  return text.replace("e", " ");
};
const concatString = (text1, text2) => {
  const result = text1 + text2;
  return result;
};
const showChar5 = (text) => {
  text = "TDD kicks ass";
  const result = text.charAt(4);
  console.log(result);
  return result;
};
const showChar9 = (text) => {
  text = "But it is really annoying to write";
  return text.substring(0, 9);
  console.log(result);
  return result;
};
const toCapitals = (text) => {
  text = "Another useful function";
  return text.toUpperCase();
  return result;
};
const toLowerCase = (text) => {
  text = "This is a sentence!";
  return text.toLowerCase();
  return result;
};
const removeSpaces = (text) => {
  text = " Rome wasn't built in a day ";
  return text.trim();
  return result;
};
const IsString = (text) => {
  text = "Is this a string?";
  return (text.IsString = true);
  return result;
};

const getExtension = (text) => {
  text = "images/photo01.jpg";
  return text.split(".").pop();
  return result;
};
const countSpaces = (text) => {
  text = "Sire open we have a big one!";
  return text.split(" ").length - 1;
  return result;
};
const InverseString = (text) => {
  text = "Après demain, à partir d'aujourd'hui?";
  return text.split("").reverse().join("");
  return result;
};

const power = (x, y) => {
  return Math.pow(x, y);
};
const absoluteValue = (num) => {
  return Math.abs(num);
};
const absoluteValueArray = (array) => {
  return array.map(Math.abs);
};
const circleSurface = (radius) => {
  return Math.round(Math.PI * radius * radius);
};
const hypothenuse = (ab, ac) => {
  return Math.hypot(ab, ac);
};
const BMI = (weight, height) => {
  return parseFloat((weight / (height * height)).toFixed(2));
};

const createLanguagesArray = () => {
  const languages = ["Html", "CSS", "Java", "PHP"];
  return languages;
};

const createNumbersArray = () => {
  const numbers = [0, 1, 2, 3, 4, 5];
  return numbers;
};

const replaceElement = (languages) => {
  languages[2] = "Javascript";
  return languages;
};

const addElement = (languages) => {
  languages.push("Ruby", "Python");
  return languages;
};

const addNumberElement = (numbers) => {
  numbers.unshift(-2, -1);
  return numbers;
};

const removeFirst = (languages) => {
  languages.shift();
  return languages;
};

const removeLast = (languages) => {
  languages.pop();
  return languages;
};

const convertStrToArr = (social_arr) => {
  const tableau = social_arr.split(",");
  return tableau;
};

const convertArrToStr = (languages) => {
  const str = languages.join();
  return str;
};

const sortArr = (social_arr) => {
  social_arr.sort();
  return social_arr;
};

const invertArr = (social_arr) => {
  social_arr.reverse();
  return social_arr;
};
