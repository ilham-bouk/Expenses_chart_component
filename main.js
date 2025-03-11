let ulContai = document.querySelector("ul");

fetch("./data.json")
  .then((response) => response.json())
  .then((response) => {
    for (let i = 0; i < response.length; i++) {
      let li = document.createElement("li");
      
      let amount = document.createElement("span");
      amount.classList.add("amount");
      amount.innerHTML = `$${response[i].amount}`;
  
      let chart = document.createElement("span");
      chart.classList.add("chart");
      chart.style.height = `${response[i].amount * 3}px`;
  
      let day = document.createElement("span");
      day.classList.add("day");
      day.innerHTML = response[i].day;
  
      li.appendChild(amount);
      li.appendChild(chart);
      li.appendChild(day);
      ulContai.appendChild(li);
    }
    ulContai.children[2].classList.add("active");
  }).catch(error => console.error(error));
