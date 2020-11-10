function find(x=document.getElementById("array").value,square)
{
    var a=x.split(",");
    var final=[];
    for(var i=0;i<a.length;i++){
        final.push(square(a[i]));
    }
    alert(final);
}

function square(y){
    return y*y;
}