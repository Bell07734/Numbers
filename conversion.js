let input = document.getElementById("input");
let GOutput = document.getElementById("Goutput");
let EOutput = document.getElementById("Eoutput");

let enter = document.getElementById("enter");
enter.addEventListener("click", convert);

GNumbers = [
  "Zero",
  "Ein",
  "Zwei",
  "Drei",
  "Vier",
  "Fünf",
  "Sechs",
  "Sieben",
  "Acht",
  "Neun",
  "Zehn",
  "Elf",
  "Zwölf",
  "Dreizehn",
  "Vierzehn",
  "Fünfzehn",
  "Sechzehn",
  "Siebzehn",
  "Achtzehn",
  "Neunzehn",
];
ENumbers = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];

function convert() {
  let digits = parseInt(input.value);
  GOutput.innerHTML = convertToGerman(digits);
  EOutput.innerHTML = convertToEnglish(digits);
}

function convertToGerman(digits) {
  let text = "";
  if (digits == 0) {
    text = "Null";
    return text;
  }
  if (digits % 20 == 0) {
    text = "Zehnzehn";
    text += " und zehnzehn".repeat(Math.floor(digits / 20) - 1);
    return text;
  }
  text = GNumbers[digits % 20];
  text += " und zehnzehn".repeat(Math.floor(digits / 20));
  return text;
}

function convertToEnglish(digits) {
  let text = "";
  if (digits == 0) {
    text = "Zero";
    return text;
  }
  if (digits % 20 == 0) {
    text = "Tenten";
    text += " and tenten".repeat(Math.floor(digits / 20) - 1);
    return text;
  }
  text = ENumbers[digits % 20];
  text += " and tenten".repeat(Math.floor(digits / 20));
  return text;
}
