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
for (int = 0; int <= 7; int++) {
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

mainFor:for (let someNum = 0; someNum < 2; someNum++) {
	for (let size = 0; size < 3; size++) {
		if(size === 1){
			break mainFor
		}
		console.log(size);
	}
}