// bus.js

// Initialiseer passagiers array
let passengers = [
  "Anna",
  "Bram",
  "Celine",
  "David",
  "Eva",
  "Frank",
  "Gina",
  "Henk",
  "Iris",
  "Joost",
];

// Functie om de passagierslijst te tonen
function displayPassengers(passengers) {
  const passengerList = document.getElementById("passenger-list");
  passengerList.innerHTML = "";
  passengers.forEach((passenger, index) => {
    const passengerDiv = document.createElement("div");
    passengerDiv.className = "passenger";
    passengerDiv.innerText = `Passagier ${index + 1}: ${passenger}`;
    passengerList.appendChild(passengerDiv);
  });
}

// Functie om de passagiersteller bij te werken
function updatePassengerCounter(passengers) {
  const passengerCounter = document.getElementById("passenger-counter");
  passengerCounter.innerText = `Aantal passagiers in de bus: ${passengers.length}`;
}

// Functie om de array te schudden
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Functie om passagiers één voor één uit te laten stappen
function passengersExit(array) {
  const intervalId = setInterval(() => {
    if (array.length > 0) {
      array.pop();
      displayPassengers(array);
      updatePassengerCounter(array);
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}

document
  .getElementById("show-passengers-button")
  .addEventListener("click", () => {
    passengers = [
      "Anna",
      "Bram",
      "Celine",
      "David",
      "Eva",
      "Frank",
      "Gina",
      "Henk",
      "Iris",
      "Joost",
    ];
    displayPassengers(passengers);
    updatePassengerCounter(passengers);
  });

document
  .getElementById("add-passenger-button")
  .addEventListener("click", () => {
    passengers.push("Klaas");
    displayPassengers(passengers);
    updatePassengerCounter(passengers);
  });

document
  .getElementById("remove-fifth-passenger-button")
  .addEventListener("click", () => {
    passengers.splice(4, 1);
    displayPassengers(passengers);
    updatePassengerCounter(passengers);
  });

document
  .getElementById("shuffle-passengers-button")
  .addEventListener("click", () => {
    shuffleArray(passengers);
    displayPassengers(passengers);
    updatePassengerCounter(passengers);
  });

document
  .getElementById("remove-all-passengers-button")
  .addEventListener("click", () => {
    passengersExit(passengers);
  });
