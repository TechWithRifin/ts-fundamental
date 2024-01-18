
class Person5 {
// deklarasi property class
    name: string;
    isCool: boolean;
    pets: number;

    constructor(n: string, c: boolean, p:number){
        this.name = n;
        this.isCool = c;
        this.pets = p;
    }

    sayHello():string {
        return `hi my name is ${this.name} and i have ${this.pets} pets`;
    };
};

// implementasi class
const person6 = new Person5('mark',false, 1);
//const person7 = new Person5('elizabet','yes',6); // ERROR: argument tipe string tidak dapat dimasukkan ke dalam parameter tipe boolean

console.log(person6.sayHello()); // OUTPUT: hi name is mark and i have 1 pets

// kita juga dapat memasukkan object hasil dari implementasi class ke dalam array
// jika kita hanya ingin mengisi array dengan hasil implementasi dari class tertentu, maka kita harus mendeklarasikan tipe data dari array tersebut dengan nama class yang dibuat
// contoh
let peoplee: Person5[] = [person6]; 

// kita juga dapat menambahkan akses midifier pada properti dari class.
// Typescript juga menyediakan sebuah akses modifier baru yang bernama readonly

class Person7 {
    readonly name: string; // properti ini hanya dapat dibaca (valuenya tidak dapat dirubah)
    private isCool: boolean; //hanya dapat diakses dan dirubah di dalam classnya saja
    protected email: string; //hanya dapat diakses dan dirubah oleh classnya dan childrennya saja
    public pets: number; // dapat diakses dan di rubah dari mana saja (termasuk diluar classnya)

    constructor(n: string, c:boolean, e:string, p:number){
        this.name = n;
        this.isCool = c;
        this.email = e;
        this.pets = p;
    }

    public sayMyName():void {
        console.log(`Your not toni, you're ${this.name}`);
    }
}

const person8 = new Person7('elein',false,'el@e.com',1);

console.log(person8.name); //berjalan dengan baik
// person8.name = 'rock'; // error: karena properti ini tidak boleh dirubah (read only)
// console.log(person8.isCool); // ERROR: karena properti ini bersifat private (hanya dapat diakses didalam class person8 saja)
// console.log(person8.email); // ERROR: karena properti ini bersifat protected (hanya dapat diakses didalam class person8 dan class children dari class person8)
console.log(person8.pets); //berjalan dengan baik karena properti ini bersifat public (bisa dibaca dan diubah walaupun diluar dari class person7 dan turunannya)


// kita juga bisa membuat kode kita kelihatan ringkas dengan mendeklarasikan property class pada parameter constuctor
// menulis kode dengan cara ini, akan membuat property secara otomatis ditetapkan didalam konstructor. ini menyelamatkan kita dari kerharusan menulis semuanya
// contoh
// hasil dari class ini sama dengan class diatas namun lebih ringkas
class Person9 {
    constructor(
        readonly name:string,// ini property
        private isCool: boolean,// ini property
        protected email: string,// ini property
        public pets: number// ini property
    ){}
    sayMyName():void {
        console.log(`Your not toni, you're ${this.name}`)
    }
}

const person10 = new Person7('elein',false,'el@e.com',1);

console.log(person10.name); //berjalan dengan baik

// inheritance

class Programmer extends Person9 {
    public programmingLanguages: string[];

    constructor(
        name: string,
        isCool: boolean,
        email: string,
        pets: number,
        pL: string[]
    ){
        // jika terdapat parameter pada constructor kelas parent maka class children harus memanggil semua parameter tersebut menggunakan keyword children
        // keyword super harus menyediakan semua parameter cunstructor dari class person9, karena konstructor tidak bisa diwariskan.
        super(name, isCool, email, pets);
        this.programmingLanguages = pL
    }
}