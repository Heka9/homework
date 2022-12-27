"use strict";

console.log("Я учу JS");

const USER_EYES_COLOR = "#964b00";
console.log(USER_EYES_COLOR);

let user, userName;
userName = "Вася";
user = userName;
console.log(user);

for (let i = 1; i <= 5; i++) {
	console.log(i);
}

let num = 1;
while (num <= 5) {
	console.log(num);
	num++;
}

let number = 1;
do {
	console.log(number);
	number++;
} while (number <= 5)

let int;
for (int = 0; int <= 10; int++) {
	if (int === 0) {
		continue
	} else if (int > 5) {
		break
	} else {
		console.log(int);
	}
}

let integer = 0;
while (integer < 3) {
	console.log(`Число: ${integer}`);
	integer++
}

mainFor: for (let someNum = 0; someNum < 2; someNum++) {
	for (let size = 0; size < 3; size++) {
		if (size === 1) {
			break mainFor
		}
		console.log(size);
	}
}

let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne);

let value = "135.58px";
console.log(parseFloat(value))

let newValue = 58 + "Фрилансер";
if (isNaN(newValue)) {
	console.log('Результат выражения NaN');
}

console.log(Math.max(10, 58, 39, -150, 0));

console.log(Math.floor(58.858));

let text = 'фрилансер';
let letterIndex = text.indexOf("н");
console.log(text[letterIndex]);

let newText = 'фрилансер';
console.log(newText.toUpperCase());

const someString = 'фрилансер';
const subStringValue = 'лан';
let subString = someString.indexOf('лан');

console.log(someString.slice(someString.indexOf('лан'),  someString.indexOf('лан') + subStringValue.length));
