const billInput = document.getElementById("bill-amount");
const tipInput = document.getElementById("custom-tip");
const peopleInput = document.getElementById("num-people");
const tipResult = document.getElementById("tip-result"); 
const totalResult = document.getElementById("total-result");
const resetBtn = document.querySelector(".reset-btn");

let tipValue = 0;
let billValue = 0;
let peopleValue = 1;

const updateTip = () => {
	tipValue = parseFloat(tipInput.value)/100;
	calculate();
}

const updateBill = () => {
	billValue = billInput.value;
	calculate();
}

const updatePeople = () => {
	peopleValue = peopleInput.value;
	calculate();
}

const reset = () => {
	peopleInput.value = 1;
	updatePeople();
	billInput.value = 0;
	updateBill();
	tipInput.value = undefined;
	updateTip();
	handleTip();
}

billInput.addEventListener("input", updateBill);
tipInput.addEventListener("input", updateTip);
peopleInput.addEventListener("input", updatePeople);
resetBtn.addEventListener("click", reset);

const tips = document.querySelectorAll(".tip");

const handleTip = () => {
	for (const tip of tips) {
		console.log(tip);
		tip.classList.remove("active-tip");
		if (tip.innerHTML === event.target.innerHTML) {
			tip.classList.add("active-tip");
			tipValue = parseFloat(event.target.innerHTML)/100;
			calculate();
		}
	}
}

for (const tip of tips) {
	tip.addEventListener("click", handleTip);
}

function calculate() {
	console.log(tipValue, billValue);
	const tipAmount = tipValue * billValue;
	const totalPerPerson = (+billValue + tipAmount)/peopleValue;
	tipResult.textContent = "$" + tipAmount.toFixed(2);
	totalResult.textContent = "$" + totalPerPerson.toFixed(2);
	console.log(totalPerPerson, tipAmount);
}
