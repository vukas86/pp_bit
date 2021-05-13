/* 1.Write a function to check whether the`input` is a string or not.

function checkType(a) {

    if (typeof a === "string") {
        return true;
    } else {
        return false;
    }

}

console.log(checkType("435")); 
 */
/* 2. Write a function to check whether a string is blank or not. */

/* function checkString(a) {
    if (typeof a === "string") {
        if (a === " ") {
            return true;
        }
    } else {
        return false;
    }
}

function checkString(a) {
    return a === " ";
}


console.log(checkString(9)); */

/* 3.Write a function that concatenates a given string n times (default is 1). */

/* Dodati u kod
 num = num === undefined ? 1 : num;
num = num || 1
 */

/* function stringHa(n) {
    n = n || 1;
    var a = "";
    for (var i = 0; i < n; i++) {
        a += "ha";
    } return a;
}

console.log(stringHa()); */

/* 4.Write a function to count the number of letter occurrences in a string. */

/* 
function checkLetter(str, letter) {
    var a = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == letter) {
            a += 1;
        }
    } return a;
}

console.log(checkLetter("Hello world", 'o')); */

/* 5.Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1. */

/* function occurCar (strng, letter){
    var a = "";
    for(var i = 0; i<strng.length; i++){
        if(strng[i] == letter){
           a=i;
        return a;
    }
        
    }return a;
}

 
console.log(occurCar("hello world", "e")); */

/* function checkCn (strn, a){
    var b = -1;
    for(i=0; i<strn.length;i++){
        if(strn[i]=== a){
            b=i;
            break;
        }
    }
    return b;
}

console.log(occurCar("hello world", "e")); */



/* 8. Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1. */
function occurLast(str, letter) {
    var a = "";
    for (i = str.length - 1; i >= 0; i--) {
        if (str[i] == letter) {
            a = i;
            return a;
        }

    } return -1;
}


console.log(occurLast("hello world", "o"));

/* 7.Write a function to convert string into an array. Space in a string should be represented as “null” in new array. */

/* function convertStrn (strn){
    var arr = [];
 
for(var i=0;i<strn.length;i++){
   if(strn[i] == " "){
   arr+= " " + null + ",";
}else{
    arr += '"' + strn[i] + '"' +"," ;
   
}
}return arr;
}
 
 
console.log(convertStrn("hello world")); */

function convertStrn(strn) {
    var arr = [];

    for (var i = 0; i < strn.length; i++) {
        if (str[i] === " ") {
            arr[arr.length] = null
        } else {
            arr[arr.length] = str[i];
        } return arr;
    }
    console.log(convertStrn("hello world"));



    /* 8.Write a function that accepts a number as a parameter and checks if the number is prime or not. 
    Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. */

    /*     function primeNum(n) {
            //if(n<2){return false}
            if (typeof n === "number") {
                for (var i = 2; i < n; i++) {
                    if (n % i === 0) {
                        return false;
                    }
    
                }
                return true;
            }
        }
    
        console.log(primeNum(2));
    
        function checkPrime(num) {
            if (typeof num !== "number") return false;
            if (num <= 1) return false;
            for (var i = 2; i < num; i++) {
                if (n % i === 0)
                    return false;
            } return false
        }
    
        console.log(checkPrime(2)); */

    /* 9. Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator. */

    /*     function strCheck(strn, s) {
            var a = "";
            if (s === undefined) s = "-";
            for (var i = 0; i < str.length; i++) {
                if (str[i] === " ") {
                    a += s;
                } else {
                    a = +str[i];
                }
                return a;
            }
    
        } */

    10. Write a function to get the first n characters and add “...” at the end of newly created string.

    function getCharacters(str, n) {
        if (str.length <= n) return str;
        var a = "";
        for (var i = 0: i<n; i++) {
            a += str[i]
        }
        return a + "...";

    }


    /* 11. Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values. */

    /*     function giveNum(arr) {
            var a = [];
            for (var i = 0; i < arr.length; i++) {
                var c = arr[i] * 1;
                if (c !== c || c == -Infinity || c === Infinity) {
                    continue;
                    a[output.length] = c
    
                } else a[a.length] = c;
            } return a;
        }
         console.log(arrNum(["1", "21", undefined, "42", "1e+3", Infinity]));*/


    /* 12. Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.
     */

    /*   function caltYears(year, sex) {
          var age = 2021 - year;
          var ageLimit = sex === 'm' ? 65 : 60;
  
          if (age >= ageLimit) {
              console.log("Retired")
          } else {
              console.log(ageLimit - age);
          }
      }
  }
  
  console.log(caltYears(1956, 'f')); */

    /* 11.Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
    1 -> 1st
    11 -> 11th
     */

    11 / 12 / 13 => th

    function humanizeNumber(num) {
        var string = '' + num;
        if (string[string.length - 1] * 1 > 3 || string[string.length - 1] === '0' || string[string.length] === '1') {
            return string + 'th';
        } else if (string[string.length - 1] === '1') {
            return string + 'st';
        } else if (string[string.length - 1] === '2') {
            return string + 'nd';
        } else if (string[string.length - 1] === '3') {
            return string + 'rd';
        }
    }


    console.log(humanizeNumber(-5));