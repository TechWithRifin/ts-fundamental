// pada typescript kita dapat melakukan deklarasi tipe data argumen function serta tipe data pengembalian function
// contoh

// 1. dengan function biasa
function circle(diam: number): string {
    return `The circumference is `+ Math.PI * diam;
}

console.log(circle(10));

// 2.dengan arrow function

const circle2 = (diam: number):string =>{
    return 'The circumference is ' + Math.PI * diam; 
}

console.log(circle2(10));

// kita dapat menambahkan tanda tanya (?) setelah parameter untuk membuat parameter tersebut sebagai opsional. Kita juga dapat membuat tipe data dari parameternya menjadi tipe data union
// contoh

const add = (a:number, b:number, c?:number | string):number =>{
    console.log(c);
    return a + b;
}

console.log(add(5,4,'i could pass a number, string or nothing in here'));

// sebuah function biasanya tidak mengembalikan data biasanya bertipe void function
// contoh

const logMessage =(msg:string): void => {
    console.log('this is the message: ' + msg);
}

logMessage('typescript is superb');

// jika kita ingin mendeklarasikan sebuah varible function tetapi tidak ingin mendefinisikannya secara langsung, maka gunakan function annotation

// contoh

// mendeklarasikan variable sayHello dan berikan function anotation yang mengambil argumen string dan tidak mengembalikan apa apa

let sayHello2: (name: string) => void;

// mendefinisikan function sayHello berdasarkan annotation yang telah diatur

sayHello2 = (name) => {
    console.log('Hello '+ name);
}

sayHello2('mark'); // output: hello mark