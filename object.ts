
// pada typescript object harus memeliki properti dan tipe nilai yang benar

// untuk membuat object pada typescript mula-mula kita harus mendeklarasikan sebuah variabel dengan spesifik type annotation
// contoh

let human: {
    name: string;
    location: string;
    isProgrammer: boolean;
};

// kemudian isi object yang dideklarasikan diatas dengan semua properti dan tipe nilai yang benar

human = {
    name: 'mark',
    location: 'turki',
    isProgrammer: true
}

// human.isProgrammer = 'yes' *error karena tipe data dari properti isProgrammer pada object human harus boolean*

// human = {
//     name: 'mark',
//     location: 'turki'
// } error karena properti dari object human tidak lengkap (properti isProgrammer tidak ada)

// ketika kita ingin membuat banyak object yang sama, typescript menyediakan interface untuk memudahkan kita untuk mengatur tipe data dari object yang akan dibuat
// contoh

interface Person {
    name: string;
    location: string;
    isProgrammer: boolean
}

// cara implementasi interface pada object

let person1: Person = {
    name: 'mark',
    location: 'islandia',
    isProgrammer: true
}

let person2: Person = {
    name: 'michael',
    location: 'turki',
    isProgrammer: false
}

// selain itu, kita juga dapat mendeklarasikan properti function dengan function anotation menggunakan interface
// contoh

interface Speech {
    sayHi(name: string):string;
    sayBye(name:string):string;
}

// cara implementasi interface diatas
let sayStuff: Speech = {
    sayHi: function (name:string){
        return `Hi ${name}`;
    },
    sayBye: (name: string)=>`Bye ${name}`
};

console.log(sayStuff.sayHi('heisenberg'));//Hi heisenberg
console.log(sayStuff.sayBye('heisenberg'));//Bye Heisenberg

