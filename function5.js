/* 1. Find the min and max element in the following array and switch their places.Print out the
modified array in the console. */
function swap(arr){
    var min= arr[0];
    var max= arr[0];
    var posMin = 0;
    var posMax = 0;

    for(var i = 1; i<arr.length; i++) {
        if(arr[i] > max){
            max = arr[i]
            posMax = i;
        }
        if(arr[i]<min){
            min = arr[i]
            posMin = i;
        }
    }
    arr[posMin] = max;
    arr[posMax] = min;
    return arr;

}

console.log(swap([ 3, 500, 12, 149, 53, 414, 1, 19 ]));

/*
2.Use the following array to make a new one by dividing its values by two and adding 5. If
a given elements value is 0, change it to 20. */

function doStuff (arr){
    var output = [];
    var j = 0;

    for (var i = 0; i<arr.length; i++){
        if(arr[i]>0) {
            output[j] = arr[i]/2+5;
            j++; 
        }else if(arr[i] === 0){
            output[j]=20;
            j++;
        }
}
return output;
}

console.log(doStuff([ 3, 500, -10, 149, 53, 414, 1, 19, 0 ]));

/* 3.Initialize two arrays. The first one should contain student names, the second one the
number of points for each student. Display students names with their corresponding
grade. */

function gradeStud (arr1, arr2){
    var output = "";
    for(i=0; i<arr1.length; i++){
        if(arr2[i] < 51) {
            output += arr1[i] + " acquired " + arr2[i] + " and failed to complete the exam. \n";
        }else if (arr2[i]<60 && arr2[i] >= 51){
            output += arr1[i] + " acquired " + arr2[i]  + " and earned 6. \n";
        }else if (arr2[i]<70 && arr2[i] >= 61){
            output+= arr1[i] + " acquired " + arr2[i]  + " and earned 7. \n";

        }else if (arr2[i]<80 && arr2[i] >= 71){
        output+= arr1[i] + " acquired " + arr2[i]  + " and earned 8. \n";
        } else if (arr2[i]<90 && arr2[i] >= 81){
        output += arr1[i] + " acquired " + arr2[i] + " and earned 9. \n";
        }else if (arr2[i]<100 && arr2[i] >= 91){
        output += arr1[i] + " acquired " + arr2[i] + " and earned 10. \n";
        }
        }
        return output;
}

console.log(gradeStud([ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]));

/* 7.Define a 10 element array. Take the first two letters from every string (that has at least 2
    letters) in the array and create a new string from them. Print it out in the console. */

    function newStrng (str){
        var output = "";
        for (var i = 0; i<str.length; i++){
            if(typeof str[i] === "string" && str[i].length>=2){
                output+= str[i][0];
                output+= str[i][1];
            }

        }
        return output;
    }
    console.log(newStrng([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]));

/*     8.Write a program that takes a string and prints its characters out in reversed order in the
    console. */

    function reverseOrder (str){
        var output = "";
        for(var i = str.length -1; i>=0; i--){
            output += str[i];
        }
        return output;
    }

    console.log(reverseOrder("Belgrade Institute of Technology"));

    /* 9.Write a program that displays all the combinations of two numbers between 1 and 7.
    Dont display two of the same numbers at the same time. Display the number of possible
    combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...). */

function combinations(n){
    var output = "";
    if(n>7)return"The number should be less then 7!";
    for(var i = 0; i<=n; i++){
        
        for(var j = 0; j<=n; j++){
         if(n !== j){
                output+= "(" + n + " , " + j + "), ";
            }
        }
    }
    return output;
}

console.log(combinations(5));

/* >>Version 2 */
function combinations(num) {        
    var arr =[];
    var i;
    var j;
    var counter = 0;
    for (i=1; i<=num; i++) {
        for (j =1; j<num; j++){
            if ( i === j){
                continue;
            } else {
                arr[counter] =(i + "." + j );
                counter++;

            }
        }

    }
return arr;
}       
console.log(combinations(7));

/* 10. Write a program that checks if the entered number is a prime number (i.e. divisible only
    by 1 and by itself). */

    function primeNum (num){
        var output = true;
        for (var i = 2; i<=num/2; i++){
            if(num % i===0){
                output = false;
            }
        }
        return output;
    }

    console.log(primeNum(28));
/* 

    11. Check if a given string is a palindrome (spaces are ignored).
Input: eye | Geek | a nut for a jar of tuna */

function palin (str){
    var a = "";
    var isPol= true;
    for (var i = 0; i<str.length;i++){
        if(str[i] !== " "){
            a += str[i];
        }
    }
    for(var j = 0, e = a.length-1; j<e ; j++, e--){
        if(a[j] !== a[e]){
            isPol = false;
            break;
        }
    }
    return isPol;
}

console.log(palin("ana ne voli milovana"));
/* 
12. Write a program that calculates the greatest common divisor of two integers. Note: The
greatest common divisor of two non-zero integers is the greatest positive number that
divides both numbers with no remainder. */

function integers(num1, num2){
    var p;
    if(num1<num2){
        p = num1
    }else{
        p=num2;
    }
    var a = 0;
    for (var i = p; i>0; i++){
        if(num2%1 === 0 && num1%i===0){
            a = i;
            break;
        }
    }
    return a;

}

console.log(integers(192, 42));
console.log(integers(81, 9));