// SNACK 4

// Usa l'array allegato alla traccia per completare i seguenti punti:
// Valorizzare le proprietà dei punti fatti e dei falli subiti con numeri randomici
// Creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti, recuperandoli con il destructuring, e stampiamo tutto in console.

const teams = [
  {
    name: "Team Turtle",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Frog",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Penguin",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Hippopotamus",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Seal",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Crocodile",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Dolphin",
    score: 0,
    foul: 0,
  },
];

function getRandomNumber(min, max) {
  const randomNum = Math.round(Math.random() * max) + min;
  return randomNum;
}

for (let team of teams) {
  team.score = getRandomNumber(1, 100);
  team.foul = getRandomNumber(1, 50);
}

const foulTeam = teams.map(({ name, foul }) => ({ name, foul }));
console.log(foulTeam);
