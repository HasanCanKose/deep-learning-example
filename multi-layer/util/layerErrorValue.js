function layerErrorValue(bagilHata, sigmoid) {
  let layerError = bagilHata * (sigmoid * (1 - sigmoid));
  return layerError;
}

module.exports = layerErrorValue;
