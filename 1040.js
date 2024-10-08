var vet = lines.shift().split(" ");

var nota1 = parseFloat(vet[0]); 
var nota2 = parseFloat(vet[1]); 
var nota3 = parseFloat(vet[2]); 
var nota4 = parseFloat(vet[3]); 

var media = ((nota1 * 2) + (nota2 * 3) + (nota3  * 4) + (nota4))/10;

if (media >= 7 ) {
    console.log("Media: " + media.toFixed(1));
    console.log("Aluno aprovado.");
} 

else if (media <= 4.9) {
    console.log("Media: " + media.toFixed(1));
    console.log("Aluno reprovado.");
} 

else {
    console.log("Media: " + media.toFixed(1));
    console.log("Aluno em exame.");
    var notaexame = parseFloat(lines.shift());
    var mediafinal = (media + notaexame)/2;
        if (notaexame >= 5 ){
             console.log("Nota do exame: " + notaexame.toFixed(1));
             console.log("Aluno aprovado.");
             console.log("Media final: " + mediafinal.toFixed(1)); 
    }   else {
             console.log("Nota do exame: " + notaexame.toFixed(1));
             console.log("Aluno reprovado.");
             console.log("Media final: " + mediafinal.toFixed(1)); 
    }
    
}