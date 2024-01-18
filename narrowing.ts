// didalam sebuah program typescript, sebuah variable dapat berpindah dari type yang kurang spesifik ke type yang lebih spesifik. proses ini dapat disebut type narrowing

// dibawah adalah contoh simple yang menunjukkan bagaimana typescript mempersempit type yang kurang spesifik dari string | number ke type yang lebih spesifik saat kita menggunakan if statement dengan typeof

function addAnother(val: string | number){
    if(typeof val === 'string'){
        // typescript memperlakukan 'val ' sebagai sebuah string di dalam block ini, jadi kita dapat menggunakan methond string didalam 'val' dan typescript tidak akan menampilkan error
        return val.concat(' ' + val);
    }

    // typescript tahu variable 'val' adalah sebuah number disini
    return val + val;
}

console.log(addAnother('woooo')); //woooo woooo
console.log(addAnother(20)); //40

// contoh lain: dibawah, kita telah mendefinisikan tipe gabungan yang disebut allVahicles, yang dapat bertipe plane atau train

interface Vehicle {
    topSpeed: number;
}

interface Train extends Vehicle {
    carriages: number;
}

interface Plane extends Vehicle {
    wingSpan: number;
}

type PlaneOrTrain = Plane | Train;

function getSpeedRatio(v: PlaneOrTrain){
    // disini, kita ingin untuk mengembalikan topSpeed/carriages, atau topSpeed/wingSpan
    // console.log(v.carriages); // error carriages tidak tersedia di dalam type 'plane'
    return v;
}

// sejak function getSpeedRatio bekerja dengan multiple types, kita membutuhkan sebuah cara untuk membedakan apakah v adalah plane atau train. kita dapat mengatasi masalah ini dengan memberikan kedua jenis property pembeda yang umum, dengan literal type

// semua trains sekarang harus memiliki sebuah property type dengan value 'Train'
interface Train2 extends Vehicle {
    type: 'Train';
    carriages: number;
}

// semua plains sekarang harus memiliki sebuah property type dengan value 'Plane'
interface Plane2 extends Vehicle {
    type: 'Plane';
    wingSpan: number;
}

type PlaneOrTrain2 = Plane2 | Train2

// sekarang kita dan typescript dapat mempersempit type dari parameter v
function getSpeedRatio2(v: PlaneOrTrain2){
    if(v.type === 'Train'){
        // typescript sekarang tahu bahwa 'v' pasti kereta. Ini telah mempersempit tipe dari 'Plane | Train' yang kurang spesifik menjadi lebih spesifik
    }
}

let bigTrain: Train2 = {
    type: 'Train',
    topSpeed: 100,
    carriages:20,
} 

console.log(getSpeedRatio2(bigTrain));