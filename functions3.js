/* 1.Write a program to insert a string within a string at a particular position (default is 1, beginning of a string). */
/* var a = "My random string";

function strng(str){
    
} */

/* 2.Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity */

/* function filterStrng(strng){
    var a =[];
    for(var i=0; i<strng.length; i++){
        if(strng[i] === undefined || strng[i] === null || strng[i] === NaN || strng[i]==="infinity" ){
            a.push(strng[i]);
            
        }
    }return a;
}

console.log(filterStrng([NaN, 0, 15, false, -22, '', undefined, 47, null])); */

function buildRow(num){
    var row="";

    for(var i=0; i<num; i++){
        row+="* ";
    }
    return row;
}

console.log(buildRow(5));