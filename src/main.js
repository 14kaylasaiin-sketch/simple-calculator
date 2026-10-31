//function
//1. declaration
//2. expressiom

//1. declaration
/*
function name(parameter){
  code block;
}
  */
function sayHello(){
  return "Hello world";
}
console.log(sayHello());

function sapaNama (name){
  return "My Name is " + name;
}
console.log(sapaNama("Kayla"));
console.log(sapaNama("Saiin"));

//menghitung luas persegi panjang menggunakan function
//luas = panjang * lebar

function persegiPanjang(panjang, lebar){
  let luas = panjang * lebar;
  return "Luas persegi panjang adalah " + luas;
}
console.log(persegiPanjang(4,5));
console.log(persegiPanjang(100,27));

//menghitung luas segitiga menggunakan function
//luas = 1/2 * alas * tinggi
function segitiga(alas, tinggi){
  let luas = 1/2 * alas * tinggi;
  return "Luas segitiga adalah " + luas;
}
console.log(segitiga(10, 55));

//konversi suhu dari fahrenheit menjadi celcius menggunakan function
// C = (5/9) * (f-32);
function konversiSuhu(f){
  let rumus = (5/9) * (f - 32);
  return f + " °F =" + rumus + "°C";
}
console.log(konversiSuhu(50));
console.log(konversiSuhu(59));

//2. function expression
const hello= function(){
  return "Hello World"
}
console.log(hello);
console.log(hello());

//1. sapanama
//2. luas persegi panjang
//3. luas segitiga
//4. konversi suhu

//1.
const sapanama= function(name){
  return "My Name is " + name;
}
console.log(sapanama("Kayla"));

//2.
const persegiPanjang1 = function (panjang1, lebar1){
  let luas1 = panjang1 * lebar1;
  return "Luas persegi panjang adalah " + luas1;
}
console.log(persegiPanjang(3,8));

//3.
const luasSegitiga = function (alas1, tinggi1){
  let luas2 = 0.5 * alas1 * tinggi1;
  return "Luas segitiga adalah " + luas2;
}
console.log(luasSegitiga(5,6));

//4.
const Konversisuhu = function(F){
  let suhu = (5/9) * (F-32);
  return F + " °F =" + suhu + "°C";
}
console.log(Konversisuhu(59));

//Function Arrow;
const persegiPanjang2 = (panjang, lebar) => 
  "Luas persegi panjang adalah" + panjang * lebar;
console.log(persegiPanjang2(5,6));

//1. say hello
//2. sapa nama
//3. luas segitiga
//4. konversi suhu


//1.
const sayHello1 = () => "Hello World";
console.log(sayHello1());
//2.

//4
const temperatures = (fahrenheit) => fahrenheit + "°F =" +(5/9) * (fahrenheit - 32) + "°C";
console.log(temperatures(20));


