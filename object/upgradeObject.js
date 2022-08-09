//here  update,insert,remove will be done in object.

var point={

x:10,
y:20




}
console.log(point)   // { x: 10, y: 30 }



//update value.
point.y=30
console.log(point)   // { x: 10, y: 30 }


// by this way we can update value of any properties.it replace older value with new value .just we have to mention property name.Value....


//now insertion will be done

point.z=50

console.log(point)    //{ x: 10, y: 30, z: 50 }

// it is just like update method which i have done above.

  //remove properties.....


  delete point.x
  console.log(point) //{ y: 30, z: 50 }



