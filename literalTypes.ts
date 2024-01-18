// selain tipe data umum seperti string dan number, kita dapat merujuk ke string dan number tertentu

// contoh
// union type dengan tipe data custom
let favoriteColor: 'red'|'blue'|'green'|'yellow'; //variable ini hanya bisa di isi value salah satu diantara red, blue, green, dan yellow

favoriteColor = 'blue';
// favoriteColor = 'crimson'; //error: karena value crimson tidak ada dalam daftar type literal yang di definisikan saat proses inisiasi variabel.

// ini sangat cocok saat menghadapi variabel yang bersifat pilihan diatara daftar value yang sudah ditentukan.