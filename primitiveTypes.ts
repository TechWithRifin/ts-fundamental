
// ada 7 tipe data primitive yaitu : string, number, bigint boolean, undefined, null, symbol

// dalam typescript, kita dapat mengatur tipe dari sebuah variabel dengan tipe data yang kita inginkan dengan menambahkan : type (atau bisa dipanggil type annotation) setelah mendeklarasikan sebuah variabel
// contoh

let id: number = 5; //tipe data dari variabel id adalah number
let firstname: string = "arif";
let hasDog: boolean = true;

// note : akan muncul error ketika variabelnya diisi nilai dengan tipe data selain yang sudah di atur

// note : akan tetapi kita juga tidak wajib untuk mengatur tipe data dari variabel secara eksplisit karena typescript akan secara otomatis mengetahui tiper data dari sebuah varibel saat kita mengisi variabel tersebut
// contoh

let uuid = 5; //TS tahu kalau variabel dari uuid adalah number

// kita juga dapat mengatur sebuah varibel memiliki lebih dari satu tipe data yang disebut union type. union type adalah variabel yang dapat memiliki lebih dari satu tipe data
// contoh

let age: string | number; //variabel ini dapat di isi dengan value string dan number

age = 26; //tidak error
age = 'duapuluh enam'; //tidak error