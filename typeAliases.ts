
// pada typescript terdapat type alias yang memiliki fungsi untuk mengurangi duplikasi kode dan menjaga kode kita tetap DRY. type alias berfungsi untuk menyimpan deklarasi tipe data dari variabel yang akan kita buat. ini akan sangat berguna saat kita ingin membuat banyak variabel  dengan tipe data yang sama.
// dengan menggunakan type alias kita tidak perlu capek-capek mendeklarasikan ulang suatu variabel dengan tipe data yang sama dengan variabel lainnya
// contoh

type StringOrNumber = string | number;
// mendeklarasikan type data dari property yang ada pada object
type PersonObject = {
    name: string;
    id: StringOrNumber; //mengimplementasi type alias StringOrNumber yang telah dibuat diatas
};

// implementasi type yang sudah dibuat
const person3: PersonObject ={
    name:'John', //property ini harus string
    id:1 //property ini bisa string atau number
};

const person4: PersonObject = {
    name:'delia',
    id:2
};
// type alias juga dapat di implementasikan pada parameter
// contoh

const sayHello = (person: PersonObject): string =>{
    return 'Hi '+person.name;
};

const sayGoodBye = (person: PersonObject): string =>{
    return 'see you ' + person.name;
};