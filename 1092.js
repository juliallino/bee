var prompt = function(texto){return lines.shift();};

var cs = parseInt(prompt('informe a quantidade de casos'))
    var cont = 1
    var t = 0
    var r = 0
    var c = 0
    var s = 0
    while(cont<=cs){
        var [n, tp] = prompt('informe os valores separados por espaço:').split(' ');
        n = parseInt(n);
        tp = String(tp);
        if(tp =='C'){
            c = c + n
            t = t + n
        } else {
            if(tp == 'R'){
                r = r + n
                t = t + n
            } else {
                if(tp == 'S'){
                    s = s + n
                    t = t + n
                }
            }
        }
        cont++
    }
var pc = (c/t)*100
var pr = (r/t)*100
var ps = (s/t)*100
console.log('Total: '+t+' cobaias')
console.log('Total de coelhos: '+c)
console.log('Total de ratos: '+r)
console.log('Total de sapos: '+s)
console.log('Percentual de coelhos: '+pc.toFixed(2)+' %')
console.log('Percentual de ratos: '+pr.toFixed(2)+' %')
console.log('Percentual de sapos: '+ps.toFixed(2)+' %')