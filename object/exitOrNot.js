//sometime we need to know that particular property does exit or not in out website.so below code is for that.if exit/not it will return boolean value like true or false

var point={


x:10,
y:20



}
console.log('x' in point)   //true

console.log('z' in point)   //false


for (var i in point){

    console.log(i)

}