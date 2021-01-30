function yeniAgirlik(katsayi, hataDegeri, giris, agirlik) {
  let delta = katsayi * hataDegeri * giris;
  return agirlik + delta;
}

module.exports = yeniAgirlik;
