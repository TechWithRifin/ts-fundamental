// untuk menentukan tipe object dan propertinya kita dapat menggunakan inteface

// inteface
interface Person11 {
    name: string;
    age: number;
}

function sayPerson11(person: Person11){ //parameter person harus berisi object dengan properti name dengan tipe data string dan age degan tipe data number seperti yang sudah di definisikan pada interface person11
    console.log(`Hi ${person.name}`);
}

sayPerson11({
    name:'john', 
    age:48,
}); //Hi john

// selain menggunakan interface, untuk menentukan tipe object dan propertinya kita juga dapat menggunakan type alias

// type
type Person12 = {
    name: string;
    age: number;
}

function sayPerson12(person: Person12){ //parameter person harus berisi object dengan properti name dengan tipe data string dan age degan tipe data number seperti yang sudah di definisikan pada type person12
    console.log(`Hi ${person.name}`);
}

sayPerson12({
    name: 'lennon',
    age: 43
}); //Hi lennon

// tipe object dan propertinya juga dapat di definisikan secara anonim seperti
function sayCuy(person: { name: string; age: number }){
    console.log(`Hi ${person.name}`);
}

sayCuy({
    name:'haha',
    age: 12
});//Hi haha

// inteface inharitance

// inteface extends inteface
interface Animal1 {
    name: string;
}
// menambahkan property honey pada interface Animal1
interface Bear extends Animal1 {
    honey: boolean
}

// implementasi inteface

const bear: Bear = {
    name: 'winnie',
    honey: true
}

// type intesections (cara kerjanya mirip inteface inharitance)

type Animal2 = {
    name: string;
}

type Bear2 = Animal2 & {
    honey: boolean;
}

const bear2: Bear2 = {
    name: 'winnie',
    honey:true,
}

// dalam beberapa kasus, inteface dan type alias memiliki fungsi yang mirip. Perbedaan utama dari inteface dan type alias adalah kita tidak dapat membuka kembali type alias untuk menambahkan property baru ketika kita menggunakan type alias. 
// Jika kita mengginakan inteface, maka kita dapat menambah properti baru pada inteface yang sudah didefinisikan
// contoh

interface Animal3 {
    name: string;
}

// buka kembali interface Animal3 untuk menambahkan sebuah property baru
interface Animal3 {
    tail: boolean;
}

const dog: Animal3 = {
    name: "bruce",
    tail: true,
}

// saat mencoba reopen type alias terjadi error karena type alias tidak mendukung reopen type

// type Animal4 = {
//     name: string;
// }

// type Animal4 = {
//     tail: boolean;
// } //error duplicate idetifier

// dokumentasi typescript lebih merekomendasikan menggunakan interface untuk mendefinisikan suatu object

// interface juga dapat digunakan untuk mendefinisikan signature dari function

// contoh
interface Person13 {
    name: string;
    age: number;
    speak(sentence: string): void
}

const person13: Person13 = {
    name: 'john',
    age: 48,
    speak: sentence => console.log(sentence)
}

// interface dengan class
// pada dasarnya pada class interface berfungsi sebagai struktur yang digunakan hanya untuk pengecekan tipe (tipe dari properti ataupun tipe dari method)
// interface pada dasarnya mendefinisikan property dan tipe yang dapat dimiliki object
// kita dapat memberi tahu class bahwa class itu harus berisi properti dan method tertentu dengan mengimplementasikan antarmuka

// contoh

interface HasFormatter {
    format(): string;
}
class Person14 implements HasFormatter {
    constructor(
        public username: string, protected password: string
    ){}

    format(){
        return this.username.toLocaleLowerCase();
    }
}

let person15: HasFormatter; //varible ini hanya bisa disi dengan object (class) yang mengimplementasikan interface HasFormatter
let person16: HasFormatter; //varible ini hanya bisa disi dengan object (class) yang mengimplementasikan interface HasFormatter

person15 = new Person14('Danny','password123');
person16 = new Person14('Jane', 'Typescripter1996');

console.log(person15.format()); //danny

// jika ingin memasukkan object person15 dan person16 kedalam suatu array pastikan variabel array tersebut mengimplementasikan inteface HasFormatter supaya array tersebut hanya dapat diisi oleh object2 dari class yang mengimplementasikan interface HasFormatter.
let people3: HasFormatter[] = [];
people3.push(person15);
people3.push(person15);