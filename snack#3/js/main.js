// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const bikes = [
  {
    name: "mountainBike",
    weight: 20,
  },
  {
    name: "cityBike",
    weight: 10,
  },
  {
    name: "crossBike",
    weight: 7,
  },
  {
    name: "bmx",
    weight: 5,
  },
];

const [...weight] = bikes.map((item) => item.weight);
console.log(Math.min(...weight));
