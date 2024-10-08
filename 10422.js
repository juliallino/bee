var vet  = lines.shift().split(' ');

var n1 = parseInt(vet[0]);
var n2 = parseInt(vet[1]);
var n3 = parseInt(vet[2]);

if (n1 < n2 && n1 < n3){
    if(n2 < n3){
         console.log(n1);
         console.log(n2);
         console.log(n3);
    } else {
        console.log(n1);
        console.log(n3);
        console.log(n2);
    }
} else if (n2 < n1 && n2 < n3) {
    if(n1 < n3){
         console.log(n2);
         console.log(n1);
         console.log(n3);
    } else {
        console.log(n2);
        console.log(n3);
        console.log(n1);
    }
} else if (n3 < n1 && n3 < n1) {
    if(n1 < n2){
         console.log(n3);
         console.log(n1);
         console.log(n2);
    } else {
        console.log(n3);
        console.log(n2);
        console.log(n1);
    }
}