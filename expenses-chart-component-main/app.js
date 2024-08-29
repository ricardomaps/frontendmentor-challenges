const fetchSpending = async () => {
    const response = await fetch("data.json");
    const weekSpending = await response.json();
    console.log(weekSpending);
    const weekTotal = weekSpending.reduce((acc, curr) => Math.max(acc, curr.amount), weekSpending[0].amount);
    console.log(weekTotal);
    const bars = document.getElementsByClassName("bar");
    const heightChart = document.getElementById("histogram").scrollHeight-120;
    for (let i = 0; i < weekSpending.length; i++){
	bars[i].style.height = (weekSpending[i]["amount"]/weekTotal)*heightChart + "px";
    }

    const quantities = document.getElementsByClassName("spending");
    for (let i = 0; i < quantities.length; i++){
	quantities[i].textContent = "$" + weekSpending[i]["amount"];
    }
    console.log(quantities[0].scrollHeight);
}

fetchSpending();
