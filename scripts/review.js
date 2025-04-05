const hi = document.querySelector("#hi");

let numVisits = localStorage.getItem("numberOfVisits");

hi.innerHTML = `${parseInt(numVisits) + 1}`;

numVisits++;

localStorage.setItem("numberOfVisits", numVisits);
