// generic memungkinkan kita untuk membuat komponen yang dapat bekerja pada berbagai situasi (bukan hanya satu situasi saja) yang membantu kita untuk membuat komponen lebih dapat di reusable (digunakan kembali).

// contoh

const addID = (obj: object) => {
    let id = Math.floor(Math.random() * 1000);

    return { ...obj, id };
}

let person17 = addID({name:'John', age:40});

console.log(person17.id); //berjalan dengan baik
// console.log(person17.name); //error

// pada function addID diatas, parameter obj pada function addID menerima object dengan tipe property apapun dan mengembalikan object baru dengan semua property dan value dari object yang dimasukkan, ditambah property id dengan nilai acak antara 0 sampai 1000. Singkatnya function ini memberikan ID pada object apapun yang dimasukkan.

// seperti yang dilihat, Typescript menampilkan error saat kita mencoba mengakses property 'name'. Ini dikarenakan ketika kita memasukkan object ke dalam parameter obj pada function addID, kita tidak menentukan property apa saja yang harus dimiliki oleh object ini. Jadi typescript tidak tahu properti apa saja yang dimiliki object yang akan dimasukkan ke dalam parameter obj pada function addID (karena typescript belum menangkap mereka). Jadi, satu satunya property yang diketuhui oleh typescript pada object yang dikembalikan oleh function addID adalah property id saja

// jadi bagaimana kita dapat mamasukkan object apapun ke parameter obj pada function addID tetapi masih memberi  tahu typescript property dan nilai apa yang dimiliki object yang akan dimasukkan?
// untuk mengatasi permasalahan ini, kita dapat menggunakan generic, <T> dimana T dikenal sebagai parameter type

// contoh
const addID2 = <T>(obj: T) => {
    let id = Math.floor(Math.random() * 1000);

    return { ...obj, id };
}

let person18 = addID2({name: 'John', age:40});
let person19 = addID2('sally'); //tidak error walaupun kita memasukkan value bukan object

console.log(person18.id);
console.log(person18.name);

console.log(person19.id);
// console.log(person19.name); //error property name tidak tersedia

// pada contoh diatas, ketika kita memasukkan object ke dalam parameter obj pada function addID, maka generic T akan memberi tahu Typescript untuk menangkap tipenya. Jadi sekarang kita akan tahu property apa saja yang ada pada object yang dimasukkan pada parameter obj

// akan tetapi, sekarang kita memiliki masalah yaitu value apapun dapat dimasukkan pada parameter obj dan Typescript akan menangkap tipe dan valuenya tanpa menampilkan error
// saat kita memasukkan value string, typescript tidak melihat adanya masalah. Itu hanya menampilkan error ketika kita mencoba mengakses property name. Jadi, kita memerlukan batasan: kita perlu memberi tahu typescript bahwa hanya object saja yang harus diterima, dengan <T extends object>

// contoh
const addID3 = <T extends object>(obj: T) => {//<T extends object> memaksa parameter obj untuk hanya menerima value dengan tipe data object saja
    let id = Math.floor(Math.random() * 1000);

    return { ...obj, id};
}

let person20 = addID3({name: 'John', age:48});
// let person21 = addID3('sally');//error argument parameter obj tidak memperbolehkan tipe data string

// dengan cara diatas kesalahan memasukkan argument dengan tipe string langsung ditangkap oleh typescript
// akan tetapi dalam javascript array adalah object, jadi kita masih bisa memasukkan argument array ke parameter obj dan typescript tidak akan mendeteksi adanya masalah

// contoh

let person21 = addID3(['sally',26]); //tidak terjadi error

console.log(person21.id);
// console.log(person21.name);//error property name tidak tersedia

// kita bisa mengatasi permasalahan diatas dengan mengatakan bahwa argument object harus memiliki property nama dengan nilai string

const addID4 = <T extends {name: string}>(obj: T) => {
    let id = Math.floor(Math.random() * 1000);

    return { ...obj,id }
}

// let person22 = addID4(['sally',26]);//error argument harus memiliki property name dengan tipe value string

// tipe data input argument juga dapat didevinisikan seperti contoh dibawah

// secara eksplisit mendefinisikan tipe data dari input yang akan dimasukkan ke dalam argument parameter obj
let person23 = addID4<{name:string, age:number}>({name:'john',age:22});


// ~~~~generic untuk membuat tipe lebih aman~~~~

// generic memungkinkan kita untuk memiliki type-safety pada function dimana argumen dan type kembalian tidak diketahui sebelumnya.

// dalam typescript, generic digunakan ketika kita ingin menggambarkan korespondensi antara dua nilai.

// contohnya jika kita membutuhkan function yang menerima banyak tipe, lebih baik kita menggunakan generic dari pada  tipe 'any'.

// dibawah ini menenjukkan masalah pada saat kita menggunakan tipe 'any'
function logLength1(a:any) {
    console.log(a.length);
    return a;
}

let hello1 = 'hello world';
logLength1(hello1);//11

let howMany = 8;
logLength1(howMany);//undefined (tetapi typescript tidak menampilkan error)

// tentunya kita ingin typescript menampilkan error ketika kita mencoba mengakses properti length pada number

// jika menggunakan generic
function logLength2<T>(a:T){
    // console.log(a.length);//error: typescript tidak yakin bahwa parameter a memiliki property length
    return a;
}

// sekarang setidaknya kita mendapatkan beberapa umpan balik yang dapat kita gunakan untuk memperketat kode kita.

// untuk mengatasi error diatas kita dapat memadukan generic dengan interface yang memastikan setiap argument yang di masukkan memiliki property length

// contoh
interface hasLength {
    length: number;
}

function logLength3<T extends hasLength>(a: T){//inteface hasLength digunakan untuk memastikan argument yang dimasukkan ke parameter a harus memiliki property length
    console.log(a.length);
    return a;
}

let hello2 = 'hello world';
logLength3(hello2)//11

let howMany2 = 8;
// logLength3(howMany2); //Error: numbers tidak memiliki property length

// kita juga dapat menulis function dimana argumentnya adalah array alement yang semuanya memiliki property length:

// contoh
function logLength4<T extends hasLength>(a: T[]){
    a.forEach((element) => {
        console.log(element.length);
    });
}

let arr1 = [
    'this string has a length prop',
    ['this','arr','has','length'],
    {material:'plastic',length:30}
];

logLength4(arr1);
//29
//4
//30

// generic dengan interface

// ketika kita tidak tahu apa tipe dari property suatu object tertentu, kita bisa menggunakan generic untuk meneruskan tipe

// contoh
interface Person23<T>{
    name: string;
    age: number;
    documents: T;
}

// kita dapat memasukkan value array string kedalam property documents dengan cara
const person24: Person23<string[]> = {//dengan ini sekarang tipe data dari property documents adalah array string
    name:'John',
    age:34,
    documents: ['passport','back statement']
};

// sekali lagi, kita akan mengimplementasikan interface Person23 dan untuk kasus ini kita akan membuat property documents menjadi tipe string
const person25: Person23<string> = {
    name: 'adelia',
    age:20,
    documents: 'passport, 234',
}