var list=[10,34,28,67,04]

function largest( list){
    var max=list[0]
    for (i = 0; i < list.length ; i++) {
        if (list[i] > max) 
            max = list[i]; }
  
    console.log(max); 

}