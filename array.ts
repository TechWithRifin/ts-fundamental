// didalam typescript kita dapat menentukan tipe data yang ada di dalam array
// contoh

let ids: number[] = [1,2,3,4,5]; //variabel ini hanya dapat berisi array angka (number) saja
let names: string[] = ['mark','michael','akbar']; //variabel ini hanya dapat berisi array string saja
let options: boolean[] = [true, false, true] //variabel ini hanya dapat berisi array dengan nilai true atau false saja
let books: object[] = [
    {name: 'mindset',authors: 'naomi scot'},
    {name: 'psicology',authors:'hirokawa'}
]; //variabel ini hanya dapat berisi array object saja
let arr: any[] = ['hello',1,true]; //variabel ini dapat berisi array dengan tipe data apa saja

// kita juga dapat menggunakan tipe data union untuk mendefinisikan array yang isinya lebih dari satu tipe data
// contoh
let person: (string | number | boolean)[] = ['mark',true,1]; //variabel ini dapat berisi array string, number, dan boolean

// pada typescript terdapat tipe array khusus yaitu tipe data tuples, tuple adalah array dengan tipe data yang dapat diketahui. tuples lebih ketat daripada array biasa karena tipe data dari setiap index yang ada pada array didefinisikan
// contoh
let people: [string, number, boolean] = ['mark',1,true] //isi dari array harus sesuai dengan tipe data yang sudah didefinisikan
//people[0] = 1; error karena tipe data dari index 0 harus string
