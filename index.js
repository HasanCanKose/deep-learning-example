const multiLayerCalculator = require('./multi-layer/multiLayerCalculator');

let h1Yeni = [1.72869, 1.93288, 1.74463, -1.059];
let h2Yeni = [-2.71001, 2.01914, 0.969449, -1.0299];
let h3Yeni = [-1.86019, -0.766373, 2.05386, 1.12757];

let t1Yeni = [1.38885, -2.8454, -0.819075];
let t2Yeni = [-1.1483, 1.91965, -0.476331];
let t3Yeni = [-2.22964, 1.95811, 2.29737];

let q1Yeni = [0.176135, 2.2448, -2.53311];

function iterateCalculation(iterasyon) {
  input =[[5, 1, 2, 1, 0], [3, 2, 3, 2, 0], [2, 3, -2, 3, 0], [1, 4, -4, 4, 1], [3, 5, -5, 5, 1], [-1, 4, 4, 6, 0], [0, 3, -1, 5, 1], [5, 2, 2, 4, 0], [4, 1, 3, 3, 0], [3, 0, 1, 2, 1]];
  for (let i = 0; i < iterasyon; i++) {
    // tum hesabi yapan fonksiyon
    let result = multiLayerCalculator([input[i][0], input[i][1], input[i][2], input[i][3]], [h1Yeni, h2Yeni, h3Yeni, t1Yeni, t2Yeni, t3Yeni, q1Yeni], [input[i][4]], 0.4);

    h1Yeni = result.h1Yeni;
    h2Yeni = result.h2Yeni;
    h3Yeni = result.h3Yeni;
    t1Yeni = result.t1Yeni;
    t2Yeni = result.t2Yeni;
    t3Yeni = result.t3Yeni;
    q1Yeni = result.q1Yeni;

    console.log('\n------------');
    console.log(`iterasyon ${i + 1} bitti.`);
    console.log('------------');
    console.log('yeni degerler');
    console.log(`
      h1: ${h1Yeni}
      h2: ${h2Yeni}
      h3: ${h3Yeni}
      t1: ${t1Yeni}
      t2: ${t2Yeni}
      t3: ${t3Yeni}
      q1: ${q1Yeni}`);
    console.log('\n------------\n');
  }
}

input =[[5, 1, 2, 1, 0], [3, 2, 3, 2, 0], [2, 3, -2, 3, 0], [1, 4, -4, 4, 1], [3, 5, -5, 5, 1], [-1, 4, 4, 6, 0], [0, 3, -1, 5, 1], [5, 2, 2, 4, 0], [4, 1, 3, 3, 0], [3, 0, 1, 2, 1]];

iterateCalculation(2);
