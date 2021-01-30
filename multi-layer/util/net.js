function net(giris, agirlik) {
  let sonuc = 0;

  for (let i = 0; i < giris.length; i++) {
    sonuc += giris[i] * agirlik[i];
  }

  return sonuc;
}

module.exports = net;
