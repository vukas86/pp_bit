/* /* /* /* 1.Write a function to check whether the `input` is a string or not. */

/* function checkType (a){

if ( typeof a === "string"){
    console.log("The input is a string");
}else{
    console.log("The input is not a string!");
}

}

console.log(checkType("435")); */ 

/* 2. Write a function to check whether a string is blank or not. */

/* function checkString (a){

if (typeof a === "string"){
    if (a === " "){
        console.log(true);
    }else{
        console.log(false);
    
}
}
}

console.log(checkString(" ")); */

/* 3.Write a function that concatenates a given string n times (default is 1). */


/* function stringHa (n) {

    var a = "";
    for (var i = 0; i < n; i++) {
        a+= "ha";
    } return a;
}

console.log(stringHa(10)); */

/* 4.Write a function to count the number of letter occurrences in a string. */


/* function checkLetter (strng, letter){
    var a = 0;
    for(var i = 0; i<strng.length; i++){
        if(strng[i] == letter){
            a+=1;
        }
    }return a;
}

console.log(checkLetter("Hello world", 'o')); */

/* 5.Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1. */

/* function occurCar (strng, letter){
    var a = "";
    for(var i = 0; i<strng.length; i++){
        if(strng[i] == letter){
           a+=i;
        return a[i];
    }else{
        console.log('-1');
    }
}
}

console.log(occurCar("hello world", "e")); */

/* 7.Write a function to convert string into an array. Space in a string should be represented as “null” in new array. */

/* function convertStrng (strng){
    var arr = [];

for(var i=0;i<strng.length;i++){
   if(strng[i] == " "){
   arr+= " " + null + ",";
}else{
    arr += '"' + strng[i] + '"' +"," ;
   
}
}return arr;
}


console.log(convertStrng("hello world")); */

/* 8.Write a function that accepts a number as a parameter and checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. */

function primeNum(n){
    //if(n<2){return false}
    if (typeof n === "number"){
        for(var i=2; i<n; i++){
            if(n%i === 0){
                return false;
            }
                
            }
            return true;
        }
    }
    

    
    
    
    console.log(primeNum(2));

/* 9. Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator. */

/* function stringRep(strng){
    var a = "";
    for(var i=0; i<strng.length; i++){
        if (strng[i] == " "){
            a+= "_";
        }else{
            a+=strng[i];
        }
    }return a;
}

console.log(stringRep("One night in Bangkok.")); */

/* function strCheck (strng){
    var a = "";
    for(var i = 0; i <strng.length; i ++){
        if(strng[i] === '"' && strng.length-1 === '"');
        a+=strng;
        return a;
    }
} */

/* 11. Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values. */



console.log(arrNum(["1", "21", undefined, "42", "1e+3", Infinity]));

