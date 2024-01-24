// SNACK 1

const vips = [
  "Dwayne Johnson",
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];

const newArray = vips.map((x, index) => ({
  tableName: "Tavolo Vip",
  guestName: x,
  guestSeat: index,
}));

console.log(newArray);
