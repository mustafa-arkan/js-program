// for(var name=0;name<100;name++){
//     console.log(name + ' Arkan')
// }


// 1-100 odd number

// for(var oddNum=1;oddNum<=100;oddNum++){
//     if(oddNum%2==1){
//         console.log(oddNum)
//     }
// }



var isRunning=true
while(isRunning){

    var rand=Math.floor(Math.random()*10+1)

    if(rand==9){
        console.log('winner winner chicken dinner')
        isRunning=false
    }


else{
    console.log('you got random number '+ rand)
}




}