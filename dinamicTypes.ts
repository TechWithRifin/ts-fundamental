// Jika kita ingin menggunakan tipe data dinamis seperti pada javascript, maka kita harus menggunakan tipe data any 
// contoh

let age2: any = '100';

age2 = 100; // tidak error
age2 = {
    year:100,
    months:2
}; // tidak error

// penggunaan tipe data any sangat tidak disarankan karena mencegah typescript melakukan tugasnya dan dapat menyepabkan banyak bug