
var vet = prompt().split(" ");

var nota1 = parseFloat(vet[0]); 
var nota2 = parseFloat(vet[1]); 
var nota3 = parseFloat(vet[2]); 
var nota4 = parseFloat(vet[3]); 

function n1p2(nota1) {
    return nota1 * 2;
}

function n2p3(nota2) {
    return nota2 * 3;
}

function n3p4(nota3) {
    return nota3 * 4;
}

function n4p1(nota4) {
    return nota4 * 1;
}

var media = (n1p2 + n2p3 + n3p4 + n4p1)/10;

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
    var notaexame = parseFloat(prompt());
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
