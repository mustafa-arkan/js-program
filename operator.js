// there are 5 types of operator
// 1.arithmatic......+,-,*,/,%

// 2.comparison.......  >,< ,<=,>=,==


// 3.logical.......&&(and)    ||(or)     !(not)

// 4.ternary........   alternative of if else condition

// 5.assignment........+=,-=,*=,/=


// arithmetic

var a=10
var b=20
var c=a+b
var s=b-a

var d=b/a
var m=a*b
var mod=b%a
console.log(c)
console.log(s)

console.log(d)
console.log(m)
console.log(mod)


// comparison

console.log(b<a)

console.log(b>a)

console.log(a==b)

console.log(a<=b)

console.log(a>=b)


//  Logical    1 means true   0 means false


var salary=50000
var isGraduate=true

var haveCar=true


if((salary==75000 || isGraduate==true) &&  haveCar==true){ //(1)&& 0=mama biye korbo

    console.log('mama biya korbo')
}
else{
    console.log('kopale bou nai')
}


//assignment




var x=40
var y=20
x +=y
console.log(x)