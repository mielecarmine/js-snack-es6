// Snack 5: dato un array di oggetti che rappresentano delle auto,
// chiedete all'utente con quante persone deve viaggiare e trovate la prima auto che soddisfa la richiesta:

let cars = [
  {
    color: "purple",
    type: "minivan",
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    capacity: 5,
  },
  {
    color: "blue",
    type: "suv",
    capacity: 8,
  },
  {
    color: "green",
    type: "citycar",
    capacity: 4,
  },
  {
    color: "yellow",
    type: "smart",
    capacity: 2,
  },
];

const userPeople = parseInt(prompt("quante persone siete?"));

let isFound = false;
let rightCar;

let i = 0;
while (isFound == false && i < cars.length) {
  let carCapacity = cars[i].capacity;

  if (cars[i].capacity >= userPeople) {
    console.log("userPeople", userPeople, "carCapacity", carCapacity);

    isFound = true;
    rightCar = cars[i];
  }

  console.log(isFound);

  i++;
}

console.log(isFound, rightCar);
