const net = require('./util/net');
const sigmoid = require('./util/sigmoid');

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

function calculateForward(giris, agirlik) {
  let h = [];
  let t = [];
  let q = [];
  let hSigmoid = [];
  let tSigmoid = [];
  let qSigmoid = [];

  h.push(net(giris, agirlik[0]));
  hSigmoid.push(sigmoid(h[0]));

  h.push(net(giris, agirlik[1]));
  hSigmoid.push(sigmoid(h[1]));

  h.push(net(giris, agirlik[2]));
  hSigmoid.push(sigmoid(h[2]));



  t.push(net([hSigmoid[0], hSigmoid[1], hSigmoid[2]], agirlik[3]));
  tSigmoid.push(sigmoid(t[0]));

  t.push(net([hSigmoid[0], hSigmoid[1], hSigmoid[2]], agirlik[4]));
  tSigmoid.push(sigmoid(t[1]));

  t.push(net([hSigmoid[0], hSigmoid[1], hSigmoid[2]], agirlik[5]));
  tSigmoid.push(sigmoid(t[2]));


  console.log('h1 toplam = ', h[0]);
  console.log('h2 toplam = ', h[1]);
  console.log('h3 toplam = ', h[2]);

  console.log('h1 sigmoid = ', hSigmoid[0]);
  console.log('h2 sigmoid = ', hSigmoid[1]);
  console.log('h3 sigmoid = ', hSigmoid[2]);


  console.log('------------------');

  console.log('t1 toplam = ', t[0]);
  console.log('t2 toplam = ', t[1]);
  console.log('t3 toplam = ', t[2]);

  console.log('t1 sigmoid = ', tSigmoid[0]);
  console.log('t2 sigmoid = ', tSigmoid[1]);
  console.log('t3 sigmoid = ', tSigmoid[2]);


  console.log('---------------------');

  q.push(net([tSigmoid[0], tSigmoid[1], tSigmoid[2]], agirlik[6]));

  qSigmoid.push(sigmoid(q[0]));

  console.log('q1 toplam = ', q[0]);

  console.log('q1 sigmoid = ', qSigmoid[0]);

  return { hSigmoid, tSigmoid, qSigmoid };
}

module.exports = calculateForward;
