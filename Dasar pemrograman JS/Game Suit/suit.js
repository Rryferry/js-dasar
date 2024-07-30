// menangkap pilihan player
var p = prompt("Pilih : gajah, semut , dan orang");

// menangkap pilihan computer
// membangkitkan bilangan player
var k = Math.random();
if (k < 0.34) {
  k = "semut";
} else if (k >= 0.34 && k < 0.67) {
  k = "orang";
} else {
  k = "gajah";
}
console.log(k);

var hasil = "";
// menentukan rules
if ((p = k)) {
  hasil = "SERI";
} else if (p == "gajah") {
  //   if (k == "orang") {
  //     hasil = "menang!!";
  //   } else {
  //     hasil = "kita kalah!";
  //   }
  hasil = k == "orang" ? "menang" : "kalah";
} else if (p == orang) {
  hasil = k == "gajah" ? "kalah" : "menang";
} else if (p == "semut") {
  hasil = k == "orang" ? "kalah" : "menang";
} else {
  hasil = "Memasukkan pilihan yang salah";
}

// Tampilkan hasil

alert(
  "kamu Memilih: " +
    p +
    " Dan Komputer Memilih: " +
    k +
    " \n Maka hasil nya adalah kamu: " +
    hasil
);
