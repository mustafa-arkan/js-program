function add(){


var a=10
var b=20
var c=a+b
console.log(c)


}
add()


function cal(e,d){

    var result=e+d
    console.log(result)
}
cal(30,40)


function calculator(chair,table,totalChair,totalTable){
// var chair=3
// var table=5
// var totalChair='10'
// var totalTable='15'

var expectedChair=totalChair*chair

var expectedtable=totalTable*table

var totalkat=expectedChair+expectedtable
console.log(totalkat)

}

calculator(3,5,10,15)




function person(name,email){


return{

Name:name,
Email:email



}




}
var p1=person('Mustafa Arkan','arkancse@gmail.com')
console.log(p1)