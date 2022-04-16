function getRandomQuery() {
  let options = [
    "exile",
    "lover",
    "blank space baby",
    "big reputation",
    "secret",
    "handsome",
    "remember",
    "die",
  ];
  let randIndex = Math.floor(Math.random() * options.length);
  return options[randIndex];
}

module.exports = { getRandomQuery };
