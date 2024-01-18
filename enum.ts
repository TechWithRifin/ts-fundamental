// enum adalah fitur khusus yang dibawa Typescript ke javascript. Enum memungkinkan kita untuk mendefinisikan atau mendeklarasikan kumpulan value yang saling berkaitan (value dapat berupa number ataupun string) sebagai kumpulan konstanta bernama

// enum sangat berguna pada saat memiliki satu set konstanta yang saling berkaitan misalnya alih-alih menggunakan angka non-deskriptif diseluruh kode kita, enum membuat kode kita lebih mudah untuk dibaca dengan konstanta deskriptif.

// enum juga dapat mencegah bug, seperti ketika kita mengetik nama enum, intellisense akan muncul dan memberi kita daftar kemungkinan opsi yang dapat dipilih

// contoh penggunaan enum

enum resourceType {
    BOOK,
    AUTHOR,
    FILM,
    DIRECTOR,
    PERSON,
}//secara default setiap konstanta yang ada didalam enum memiliki value number yang urut dimulai dari angka 0

console.log(resourceType.BOOK); ///0
console.log(resourceType.AUTHOR); //1

// untuk membuat angka dimulai angka 1
enum resourceType1 {
    BOOK = 1,
    AUTHOR,
    FILM,
    DIRECTOR,
    PERSON
}

console.log(resourceType1.BOOK);//1
console.log(resourceType1.AUTHOR);//2

// untuk membuat value konstanta didalam enum bernilai string maka dapat dilakukan dengan cara

enum Direction {
    Up = 'Up',
    Right = 'Right',
    Down = 'Down',
    Left = 'Left',
}

console.log(Direction.Right); //right
console.log(Direction.Down); //down