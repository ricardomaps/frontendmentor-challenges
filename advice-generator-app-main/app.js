const idElement = document.getElementById("advice__id");
const adviceElement = document.getElementById("advice-quote")

const fetchQuote = async () => {
    adviceElement.classList.toggle("hide");
    const r = await fetch("https://api.adviceslip.com/advice", {cache: "no-store"});
    const response = await r.json();
    const id = response.slip.id;
    const advice = response.slip.advice;
    setTimeout(() => {
	idElement.textContent = "#" + id;
	adviceElement.textContent = '"' + advice + '"';
	adviceElement.classList.toggle("hide");
    } , 500);
}

fetchQuote();

const btn = document.getElementById("advice-btn");
btn.addEventListener("click", fetchQuote);
