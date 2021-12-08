var list = [];
var lotto = [];

var TOTAL_NUMBER = 45;
for(var i=0;i<45;i++){
    list[i] = i+1;
}
while(lotto.length<6){
    var rnd = Math.floor(Math.random()*TOTAL_NUMBER);
    if(list[rnd]!=null){
        lotto.push(list[rnd])
        list[rnd] = null;
    }
}

// for(var i=lotto.length-1; i>0;i--){
//     for(var j=0;j<i;j++){
//         if(lotto[j]>lotto[j+1]){
//             temp = lotto[j];
//             lotto[j] = lotto[j+1];
//             lotto[j+1] = temp;
//         }
//     }
// }

lotto.sort(compare);


for (var i = 0; i< lotto.length ;i++){
    document.write('<span class="ball">' + lotto[i] + '</span>');
}




function compare(a,b){
    if(a<b){
        return -1
    }
    if(a>b){
        return 1
    }
    return 0
}