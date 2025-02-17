// ex1
/*
var peso = 70
var altura = 1.80

imc = (peso * (altura * altura)) / 2

function CalcularImc(peso, altura){
    if (imc < 18.5)
        console.log("Abaixo do peso")
    else (imc >= 18.5 && imc < 25)
        console.log("No peso normal")
    if (imc >= 25 && imc < 30)
        console.log("Acima do peso")
     else (imc > 30)
        console.log("Obeso")
}

CalcularImc(70,1.80)
*/



// ex2
/*
var str = "Hoje é Domingo";


function reverseWords(str) {
    var reverseStr = "";
    var splittext = str.split(" ");
    for (let i = 0; i < splittext.length; i++) {
        const word = splittext[i];

        for (let j = word.length - 1; j >= 0; j--) {

        }
        reverseStr = " ";
    }
    return reverseStr;
}
console.log(reverseWords("Hoje e Domingo"));
*/



//ex 3
/*
var str = "Hoje e Domingo";

function ContarVogais(str) {
    var count = 0;
    str = str.toLowerCase();
    var vogais = "aeiou";

    "hoje"

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if(str[i] == vogais[j])
            count++;
        }

    }
    return count;
}

    console.log(ContarVogais("Hoje"));
    */


// ex3 mais rapido
/*
    var str = "";

    function ContarVogais(str) {
        var count = 0;
        str = str.toLowerCase();
        var vogais = "aeiou";

        "hoje"

        for (let i = 0; i < str.length; i++) {
            if ( str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u")
            count++;
        }
        return count;
    }

        console.log(ContarVogais("Hoje"));
        */



// ex4
    /*
    str = "";
    char = "";
    function countChar(str, char){
        var count = 0;
        str = str.toLowerCase();
        char = char.toLowerCase();

        for (let i = 0; i < str.length; i++) {
            if (str[i] == char)
            count++;
            
        }
        return count;
    }
var count = countChar("Hello", "e");

console.log(countChar("Hoje e domingo"))
*/



// ex 5 retangulo
/*
var line = "";
var width = 20;
var height = 10;

function CriarRetangulo(width, height){
    for(let i = 0; i < width; i++){
        line +="*";
    }
    for(let j = 0; j < height; j++){
        console.log(line);
    }
}
console.log(CriarRetangulo("*"))
*/



// ex 6 triangulo
/*
var line = "";
var width = 20;

function CriarRetangulo(width, height){
    for(let i = 0; i < width; i++){
        line +="*";
        console.log(line);
    }

}
console.log(CriarRetangulo(10,10))
*/



// ex 7
var line = "";
var width = 20;
var height = 10;

function CriarRetangulo(width, height){
    for(let i = 0; i < width; i++){
        if ( i == 0 && i == width - 1){
            line +="*";
        }
        else ;
        line += " ";
    }
    for(let j = 0; j < height; j++){
        if ( j == 0 && i == height - 1){
            line +="*";
        }
        else ;
        line += " ";
        console.log(line);
    }
}
console.log(CriarRetangulo("*"))