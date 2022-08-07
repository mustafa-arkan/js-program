

function sumOfArg(){
var sum=0
for(var i=0;i<arguments.length;i++){

sum+=arguments[i]



}

sum=sum/arguments.length

return sum

}

var a=sumOfArg(5,7,9,0,6,4,3)
console.log(a)