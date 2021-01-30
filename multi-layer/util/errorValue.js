function errorValue(sigmoid, beklenenCikis) {
  let error = sigmoid * (1 - sigmoid) * (beklenenCikis - sigmoid);
  return error;
}

module.exports = errorValue;
