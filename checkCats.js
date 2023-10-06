function checkCats(CatsTuti, CatsNining) {
  // Salin array CatsTuti
  const correctedCatsTuti = CatsTuti.slice();

  // Hapus usia dari anjing (elemen pertama dan dua terakhir)
  correctedCatsTuti.shift(); // Hapus elemen pertama
  correctedCatsTuti.pop(); // Hapus elemen terakhir

  // Gabungkan data Tuti yang sudah dikoreksi dengan data Nining
  const allCats = correctedCatsTuti.concat(CatsNining);

  // Loop melalui semua kucing
  for (let i = 0; i < allCats.length; i++) {
    if (allCats[i] >= 3) {
      console.log(`Kucing Nomor ${i + 1} adalah kucing dewasa, dan berusia ${allCats[i]} tahun`);
    } else {
      console.log(`Kucing Nomor ${i + 1} masih anak-anak.`);
    }
  }
}

// Data uji 1
const DataTuti1 = [3, 5, 2, 12, 7];
const DataNining1 = [4, 1, 15, 8, 3];
console.log("Data Uji 1:");
checkCats(DataTuti1, DataNining1);

// Data uji 2
const DataTuti2 = [9, 16, 6, 8, 3];
const DataNining2 = [10, 5, 6, 1, 4];
console.log("Data Uji 2:");
checkCats(DataTuti2, DataNining2);
