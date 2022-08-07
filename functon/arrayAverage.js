 var arr1=[1,4,8,9,4,6,8]

function sumOfArray(arr1){
var sum=0
for(var i=0;i<arr1.length;i++){

sum+=arr1[i]



}

sum=sum/arr1.length

return sum

}

var a=sumOfArray(arr1)
console.log(a)



// //end of array argument


// function make_avg(arr1){


    




//     sumOfArray()
    
//         var so=sumOfArray(arr1)/7 
//         return so
        
//         }
    
//         var im=make_avg(arr1)
//         console.log(im)
// const arr = [1, 2, 3, 4, 5];
// const average = arr.reduce((a, b) => a + b, 0) / arr.length;
// console.log(average);


//find average from array

// function findAverage(array){


// var average=0
// for(var i=0;i<array.length;i++){

// let currentNum=array[i]
// average+=currentNum



// }

// average=average/array.length

// return average


// }


// var sum=findAverage([2,4,6,8,3,2])
// console.log(sum)



// average arg

// function findAverage(){


//     var average=0
//     for(var i=0;i<argument.length;i++){
    
//     let currentNum=argument[i]
//     average+=currentNum
    
    
    
    
    
    
    
//     }
    
//     average=average/argument.length
    
//     return average
    
    
//     }
    
    
//     var sum=findAverage(2,5,6,8,56,5,4,6,8)
//     console.log(sum)