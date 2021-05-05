/*1. Write a program that checks if a given element e is in the array a.*/

var a = [5, -4.2, 3, 7];
var e =3;

for(var i = 0; i<a.length; i++){
    if(e===a[i]){
        console.log("Yes!");
      
    }else{
      console.log("No!");
    }
}

/*Write a program that multiplies every positive element of a given array by 2.*/

var array = [-3, 11, 5, 3.4, -8];
var e = [];

for(var n = 0; n<array.length; n++){
    if(array[n]>0){
        var e = array[n]*2;
        console.log(e);
    }
}