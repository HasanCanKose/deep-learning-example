function sigmoid(toplam) {
  let sigmoid = 1 / (1 + Math.exp(-toplam));
  return sigmoid;
}

module.exports = sigmoid;
