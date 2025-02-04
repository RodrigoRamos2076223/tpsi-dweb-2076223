//ex 1

var p1 = 12;
var p2 = 14;
var freq = 10;

function CalculateGrade(p1, p2, freq) {
    var notaF = (p1 * 0.3) + (p2 * 0.4) + (freq * 0.3);

    console.log("A nota final é: " + notaF);

    if (notaF >= 9.5)
        console.log("Aluno aprovado");
    else
        console.log("Aluno reprovado");
    
    console.log("");
}

CalculateGrade(12,14,10);
CalculateGrade(10,11,16);
CalculateGrade(20,9.5,6);
CalculateGrade(15,18,16);


//ex 2

// const jan = "Janeiro";
// const fev = "Fevereiro";
// const mar = "Março";
// const abr = "Abril";
// const mai = "Maio";
// const jun = "Junho";
// const jul = "Julho";
// const ago = "Agosto";
// const set = "Setembro";
// const out = "Outubro";
// const nov = "Novembro";
// const dez = "Dezembro";

// switch (jan) {
//     case '1':
//         console.log("Janeiro");
//         break;
//     case '2':
//         console.log("Fevereiro");
//         break;
//     case '3':
//         console.log("Março");
//         break;
        
// }
