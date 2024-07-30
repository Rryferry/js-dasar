// function adalah kunci utama pada js yang membuat js sangat powerful
// function adalah sub-program atau sub-routine yang di panggil di bagian lainn program
// struktur dasar pembentuk dari js
// untuk dapat menggunakan nya kita harus membuat dulu function tersebut, lalu memanggilnya
// termasuk kedalam first class object

var a = 2;
var b = 3;
var volumeA;
var volumeB;

volumeA = a * a * a;
volumeB = b * b * b;
total = volumeA + volumeB;

console.log(total);
if (isNaN(volumeA) || isNaN(volumeB)) {
  console.error("Error: Nilai volumeA atau volumeB bukan angka.");
} else {
  console.log("Validasi berhasil, tidak ada kesalahan.");
}
