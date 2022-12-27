"use strict";

let showMessage;

if (2 > 1) {
	showMessage = function () {
		console.log('Сообщение');
	}
}
showMessage();

const users = ["Ваня", "Иштван"];
users.push("Оля");

let index = users.indexOf("Иштван");
users.splice(users.indexOf("Иштван"), 1, "Петя")

let firstElement = users.shift()
console.log(firstElement);

users.splice(0, 0, "Вася", "Паша");
console.log(users);

// users.unshift("Вася", "Паша")
// console.log(users);


let arr = ['Ваня', 'Иштван', 'Оля',];
let indexOfElement = arr.indexOf("Иштван");
let removedElement = arr.splice(indexOfElement, 1)

console.log(removedElement);

let str = 'Ваня,Иштван,Оля';
let array = str.split(",")
console.log(array);

