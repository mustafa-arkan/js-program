//1+2+3+4+5+6+7


// let sum=0

// for(let i=1;i<=7;i++){

// sum+=i
// console.log(i,sum)


// }


function factorial(number){


    let sum=0

    for(let i=1;i<=number;i++){
    
    sum+=i
    console.log(i,sum)
    
    
    }
    

return sum


}


var sumOfFact=factorial(7)
console.log(sumOfFact)


// 1*2*3*4*5*6*7

function multFactorial(numbers){


    let multSum=1// 0 dia gun korle sob 0 hoi jai tai 1

    for(let i=1;i<=numbers;i++){
    
    multSum*=i
    console.log(i,multSum)
    
    
    }
    

return multSum


}


var sumOfMultFact=multFactorial(7)
console.log(sumOfMultFact)
