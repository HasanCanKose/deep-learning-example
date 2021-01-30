const errorValue = require('./util/errorValue');
const layerErrorValue = require('./util/layerErrorValue');

// multiLayerCalculator(
//   [10, 30, 20],
//   [
//     [0.2, -0.1, 0.4], h1
//     [0.7, -1.2, 1.2], h2
//     [0.7, -1.2, 1.2], h3
//     [1.1, 0.1],       t1
//     [3.1, 1.17],      t2
//     [3.1, 1.17],      t3
//     [1.1, 0.1],       q1

//   ],
//   [1, 0],
//   0.1
// );

function calculateError(qSigmoid, hSigmoid, tSigmoid, agirlik, beklenenCikis) {
  let q1HataDegeri = errorValue(qSigmoid[0], beklenenCikis[0]);

  // T nodelari hata hesaplama

  let t1BagilHata = agirlik[6][0] * q1HataDegeri;
  let t1HataDegeri = layerErrorValue(t1BagilHata, tSigmoid[0]);

  let t2BagilHata = agirlik[6][1] * q1HataDegeri;
  let t2HataDegeri = layerErrorValue(t2BagilHata, tSigmoid[1]);

  let t3BagilHata = agirlik[6][2] * q1HataDegeri;
  let t3HataDegeri = layerErrorValue(t3BagilHata, tSigmoid[2]);

  // H nodelari hata hesaplama

  let h1BagilHata = agirlik[3][0] * t1HataDegeri + agirlik[4][0] * t2HataDegeri + agirlik[5][0] * t3HataDegeri;
  let h1HataDegeri = layerErrorValue(h1BagilHata, hSigmoid[0]);

  let h2BagilHata = agirlik[3][1] * t1HataDegeri + agirlik[4][1] * t2HataDegeri + agirlik[5][1] * t3HataDegeri;
  let h2HataDegeri = layerErrorValue(h2BagilHata, hSigmoid[1]);

  let h3BagilHata = agirlik[3][2] * t1HataDegeri + agirlik[4][2] * t2HataDegeri + agirlik[5][2] * t3HataDegeri;
  let h3HataDegeri = layerErrorValue(h3BagilHata, hSigmoid[2]);

  console.log('q1 hata degeri = ', q1HataDegeri);

  console.log('-----------------');

  console.log('t1 bagil hata = ', t1BagilHata);
  console.log('t1 hata degeri = ', t1HataDegeri);
  console.log('t2 bagil hata = ', t2BagilHata);
  console.log('t2 hata degeri = ', t2HataDegeri);
  console.log('t3 bagil hata = ', t3BagilHata);
  console.log('t3 hata degeri = ', t3HataDegeri);

  console.log('-----------------');

  console.log('h1 bagil hata = ', h1BagilHata);
  console.log('h1 hata degeri = ', h1HataDegeri);
  console.log('h2 bagil hata = ', h2BagilHata);
  console.log('h2 hata degeri = ', h2HataDegeri);
  console.log('h3 bagil hata = ', h3BagilHata);
  console.log('h3 hata degeri = ', h3HataDegeri);

  let hHataDegeri = [h1HataDegeri, h2HataDegeri, h3HataDegeri];
  let tHataDegeri = [t1HataDegeri, t2HataDegeri, t3HataDegeri];
  let qHataDegeri = [q1HataDegeri];

  return { hHataDegeri, tHataDegeri, qHataDegeri };
}

module.exports = calculateError;
