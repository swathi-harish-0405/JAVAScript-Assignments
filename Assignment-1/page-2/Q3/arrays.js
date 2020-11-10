//Q-3


function string_to_number(){
    var str=[];
str=document.getElementById("v_array").value;
var final=str.split(',');
for(var i=0;i<final.length;i++){
    final[i]=Number(final[i],10);
}

document.getElementById("result").innerHTML=final;
}