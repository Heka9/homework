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

const userInfo = {};
userInfo.name = "Вася";
userInfo.age = 30;
userInfo.name = "Лена"
delete userInfo.name

//==============================================================DOM==========================================================================================

let elementWithDataAttr = document.querySelector("[data-say-hi]");
console.log(elementWithDataAttr.dataset.sayHi);
console.log(elementWithDataAttr.getAttribute("data-say-hi"));


let listElements = document.querySelectorAll("li")
let liWithNecessaryText;

for (let listElement of listElements) {
	if (listElement.innerHTML === "Йончи") {
		liWithNecessaryText = listElement;
		break
	}
}
console.log(liWithNecessaryText);

// let liWithNecessaryText = listElements.forEach((listElement) => {
// 	if (listElement.innerHTML === "Йончи") {
// 		return listElement
// 	}
// })

let elementsWithClassLike = document.querySelectorAll(".like")
console.log(elementsWithClassLike);
// let elementsWithClassLike = document.getElementsByClassName("like")
// console.log(elementsWithClassLike);

const documentWidth = window.innerWidth;
const viewportWidth = document.body.clientWidth;
const scrollWidth = window.innerWidth - document.body.clientWidth;

function scrollPageDown(value) {
	window.scrollTo({
		left: 0,
		top: value,
		behavior: "smooth"
	})
}

function showScrollFromTop() {
	console.log(window.scrollY);
}

setTimeout(scrollPageDown, 1000, 100)
setTimeout(showScrollFromTop, 2000)

const lessonValue = document.querySelector(".lesson__value span");
const coordinatesLessonValue = lessonValue.getBoundingClientRect();
console.log(lessonValue);
console.log(coordinatesLessonValue);

const randomElement = document.elementFromPoint(200, 200);
const coordRandomElement = randomElement.getBoundingClientRect();
console.log(randomElement);
console.log(coordRandomElement);

//========================================================================================================================================================

const parentBlock = document.querySelector(".footer__block");
const form = document.querySelector(".footer__form");

function openMenu() {
	parentBlock.classList.toggle("_active");
}
function closeMenu() {
	parentBlock.classList.remove("_active");
}

document.addEventListener("click", function (e) {
	if (e.target.closest(".footer__block")) {
		openMenu();
	}
	if (e.target.closest(".footer__form")) {
		parentBlock.classList.add("_active");
	}
	if (!e.target.closest(".footer__block")) {
		closeMenu()
	}
});
document.addEventListener("keyup", function (e) {
	if (e.code === "Escape") {
		closeMenu()
	}
});

const searchInput = document.querySelector("#search");
const searchMaxLength = searchInput.getAttribute("maxlength");
const searchCounterMax = document.querySelector(".form__counter .max-length");
const searchCounterCurrent = document.querySelector(".form__counter .current");

searchCounterMax.innerHTML = searchMaxLength;
searchCounterCurrent.innerHTML = searchMaxLength;

searchInput.addEventListener("keyup", calcCounterValue);

searchInput.addEventListener("keydowm", function (e) {
	if (e.repeat) calcCounterValue();
});

function calcCounterValue() {
	searchCounterCurrent.innerHTML = searchMaxLength - searchInput.value.length;
}

//========================================================================================================================================================

const mainForm = document.forms.main;

const mainFormElements = mainForm.elements;

const mainFormTextarea = mainForm.text;

const mainFormTextareaParent = mainForm.text.form;

mainFormTextarea.addEventListener("paste", function (e) {
	if (mainFormTextarea.parentElement.nextElementSibling) {
		mainFormTextarea.parentElement.nextElementSibling.remove();
	}
	mainFormTextarea.parentElement.insertAdjacentHTML(
		"afterend",
		`<div class="form__error">
			Нельзя вставить
  		</div>`
	)
	e.preventDefault();
})
mainFormTextarea.addEventListener("copy", function (e) {
	if (mainFormTextarea.parentElement.nextElementSibling) {
		mainFormTextarea.parentElement.nextElementSibling.remove();
	}
	mainFormTextarea.parentElement.insertAdjacentHTML(
		"afterend",
		`<div class="form__error">
			Нельзя копировать
  		</div>`
	)
	e.preventDefault();
})
mainFormTextarea.addEventListener("cut", function (e) {
	if (mainFormTextarea.parentElement.nextElementSibling) {
		mainFormTextarea.parentElement.nextElementSibling.remove();
	}
	mainFormTextarea.parentElement.insertAdjacentHTML(
		"afterend",
		`<div class="form__error">
			Нельзя вырезать
  		</div>`
	)
	e.preventDefault();
})

mainFormTextarea.addEventListener("blur", function (e) {
	if (mainFormTextarea.parentElement.nextElementSibling) {
		mainFormTextarea.parentElement.nextElementSibling.remove();
	}
})


const textareaMaxLength = mainFormTextarea.getAttribute("maxlength");
const textareaCounter = document.querySelector(".form__counter span");
textareaCounter.innerHTML = textareaMaxLength;

mainFormTextarea.addEventListener("input", calcTextareaCounterValue);

function calcTextareaCounterValue() {
	textareaCounter.innerHTML = textareaMaxLength - mainFormTextarea.value.length;
}

const email = mainForm.email;
console.log(email.parentElement);

mainForm.addEventListener("submit", function (e) {
	if (emailTest(email)) {
		email.parentElement.insertAdjacentHTML(
			"afterend",
			`<div class="form__error">
				Неверный формать данных
			  </div>`
		)
		e.preventDefault();
	}
})

email.addEventListener("focus", function (e) {
	if (email.parentElement.nextElementSibling) {
		email.parentElement.nextElementSibling.remove();
	}
})

function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}


