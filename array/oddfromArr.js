var num=[2,3,5,7,8,2,4,8]
var i=0
var sum=0
var count=0
var avg=0
for(i=0;i<num.length;i++){

     if(num[i]%2!=0){
count++
sum+=num[i]

avg=sum/count



     }

}

console.log('sum of odd array is:'+ sum)
console.log('total odd array is:'+ count)
console.log('average  of odd array is:'+ avg)