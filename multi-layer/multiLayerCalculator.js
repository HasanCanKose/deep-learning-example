const yeniAgirlik = require('./util/yeniAgirlik');
const calculateForward = require('./calculateForward');
const calculateError = require('./calculateError');

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

// let h1Yeni = [1.72869, 1.93288, 1.74463, -1.059];
// let h2Yeni = [-2.71001, 2.01914, 0.969449, -1.0299];
// let h3Yeni = [-1.86019, -0.766373, 2.05386, 1.12757];

// let t1Yeni = [1.38885, -2.8454, -0.819075];
// let t2Yeni = [-1.1483, 1.91965, -0.476331];
// let t3Yeni = [-2.22964, 1.95811, 2.29737];

// let q1Yeni = [0.176135, 2.2448, -2.53311];

function multiLayerCalculator(giris, agirlik, beklenenCikis, katsayi) {
  // giris ve agirlik alinip, toplam ve sigmoidler hesaplaniyor
  const { hSigmoid, tSigmoid, qSigmoid } = calculateForward(giris, agirlik);

  console.log('\nGeriye donus basladi\n');
  console.log('--------');

  // sigmoidler , agirlik ve beklenen cikis alinip, hatadegerleri ve bagil hatalar hesaplaniyor.
  const { hHataDegeri, tHataDegeri, qHataDegeri } = calculateError(
    qSigmoid,
    hSigmoid,
    tSigmoid,
    agirlik,
    beklenenCikis
  );

  console.log('\nYeni agirliklar\n');

  // giris h1 arasi
  let i1_h1 = yeniAgirlik(katsayi, hHataDegeri[0], giris[0], agirlik[0][0]);
  let i2_h1 = yeniAgirlik(katsayi, hHataDegeri[0], giris[1], agirlik[0][1]);
  let i3_h1 = yeniAgirlik(katsayi, hHataDegeri[0], giris[2], agirlik[0][2]);
  let i4_h1 = yeniAgirlik(katsayi, hHataDegeri[0], giris[3], agirlik[0][3]);


  // giris h2 arasi
  let i1_h2 = yeniAgirlik(katsayi, hHataDegeri[1], giris[0], agirlik[1][0]);
  let i2_h2 = yeniAgirlik(katsayi, hHataDegeri[1], giris[1], agirlik[1][1]);
  let i3_h2 = yeniAgirlik(katsayi, hHataDegeri[1], giris[2], agirlik[1][2]);
  let i4_h2 = yeniAgirlik(katsayi, hHataDegeri[1], giris[3], agirlik[1][3]);

  let i1_h3 = yeniAgirlik(katsayi, hHataDegeri[2], giris[0], agirlik[2][0]);
  let i2_h3 = yeniAgirlik(katsayi, hHataDegeri[2], giris[1], agirlik[2][1]);
  let i3_h3 = yeniAgirlik(katsayi, hHataDegeri[2], giris[2], agirlik[2][2]);
  let i4_h3 = yeniAgirlik(katsayi, hHataDegeri[2], giris[3], agirlik[2][3]);


  // h1 t1 arasi
  let h1_t1 = yeniAgirlik(katsayi, tHataDegeri[0], hSigmoid[0], agirlik[3][0]);
  let h2_t1 = yeniAgirlik(katsayi, tHataDegeri[0], hSigmoid[1], agirlik[3][1]);
  let h3_t1 = yeniAgirlik(katsayi, tHataDegeri[0], hSigmoid[2], agirlik[3][2]);


  // h2 t2 arasi
  let h1_t2 = yeniAgirlik(katsayi, tHataDegeri[1], hSigmoid[0], agirlik[4][0]);
  let h2_t2 = yeniAgirlik(katsayi, tHataDegeri[1], hSigmoid[1], agirlik[4][1]);
  let h3_t2 = yeniAgirlik(katsayi, tHataDegeri[1], hSigmoid[2], agirlik[4][2]);

  let h1_t3 = yeniAgirlik(katsayi, tHataDegeri[2], hSigmoid[0], agirlik[5][0]);
  let h2_t3 = yeniAgirlik(katsayi, tHataDegeri[2], hSigmoid[1], agirlik[5][1]);
  let h3_t3 = yeniAgirlik(katsayi, tHataDegeri[2], hSigmoid[2], agirlik[5][2]);


  // t1 q1 arasi
  let t1_q1 = yeniAgirlik(katsayi, qHataDegeri[0], tSigmoid[0], agirlik[6][0]);

  let t2_q1 = yeniAgirlik(katsayi, qHataDegeri[0], tSigmoid[1], agirlik[6][1]);

  let t3_q1 = yeniAgirlik(katsayi, qHataDegeri[0], tSigmoid[2], agirlik[6][2]);

 

  console.log('giris 1 - h1 arasi  = ', i1_h1);
  console.log('giris 1 - h2 arasi  = ', i1_h2);
  console.log('giris 1 - h3 arasi  = ', i1_h3);

  console.log('giris 2 - h1 arasi  = ', i2_h1);
  console.log('giris 2 - h2 arasi  = ', i2_h2);
  console.log('giris 2 - h3 arasi  = ', i2_h3);

  console.log('giris 3 - h1 arasi  = ', i3_h1);
  console.log('giris 3 - h2 arasi  = ', i3_h2);
  console.log('giris 3 - h3 arasi  = ', i3_h3);

  console.log('giris 4 - h1 arasi  = ', i4_h1);
  console.log('giris 4 - h2 arasi  = ', i4_h2);
  console.log('giris 4 - h3 arasi  = ', i4_h3);


  console.log('----------------------');

  console.log('h1 - t1 arasi       = ', h1_t1);
  console.log('h1 - t2 arasi arasi = ', h1_t2);
  console.log('h1 - t3 arasi arasi = ', h1_t3);

  console.log('h2 - t1 arasi arasi = ', h2_t1);
  console.log('h2 - t2 arasi arasi = ', h2_t2);
  console.log('h2 - t3 arasi arasi = ', h2_t3);

  console.log('h3 - t1 arasi arasi = ', h3_t1);
  console.log('h3 - t2 arasi arasi = ', h3_t2);
  console.log('h3 - t3 arasi arasi = ', h3_t3);


  console.log('----------------------');

  console.log('t1 - cikis 1 arasi = ', t1_q1);
  console.log('t2 - cikis 1 arasi = ', t2_q1);
  console.log('t3 - cikis 1 arasi = ', t3_q1);


  let h1Yeni = [i1_h1, i2_h1, i3_h1, i4_h1];
  let h2Yeni = [i1_h2, i2_h2, i3_h2, i4_h2];
  let h3Yeni = [i1_h3, i2_h3, i3_h3, i4_h3];

  let t1Yeni = [h1_t1, h2_t1, h3_t1];
  let t2Yeni = [h1_t2, h2_t2, h3_t2];
  let t3Yeni = [h1_t3, h2_t3, h3_t3];

  let q1Yeni = [t1_q1, t2_q1, t3_q1];

  return { h1Yeni, h2Yeni, h3Yeni, t1Yeni, t2Yeni, t3Yeni, q1Yeni};
}

module.exports = multiLayerCalculator;
