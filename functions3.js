/* 1.Write a program to insert a string within a string at a particular position (default is 1, beginning of a string). */

function instStrng(str1, str2, num) {
    var a = "";
    num = num === undefined ? 0 : num;
    for (var i = 0; i < str1.length; i++) {
        if (i !== num) {
            a += str1[i];
        } else if (i === num) {
            a += str2 + str1[i];
        }
    }
    return a;

}
console.log(instStrng("My random string", "JS ", 10));

/* 2.Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity */

/* function joinElem (arr){
    var a = "";
    for(var i = 0; i<arr.length; i++){
        if(arr[i] == undefined || arr[i] == null || arr[i] !== arr || arr[i] == 'infinity'){
            continue;
        }else{
            a += arr[i] + ",";
        }
    }
    return a;
}
console.log(joinElem([NaN, 0, 15, false, -22, '', undefined, 47, null])); */

/* 3. Write a program to filter out falsy values from the array. */
function filterArr(arr)

// 4. Write a function that reverses a number. Result must be of type number.

/* function reverseNum (num){
    var a = "" + num;
    var b = "";
    for(var i = (a.length-1); i>=0; i--){
        b+=a[i];
    }
    return b*1;
}
console.log(reverseNum(356823)); */

/* 5. Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. */




// 6. Write a function to create a specified number of elements with pre-filled numeric value array.

function elem(times, num) {
    var a = [];
    num = num ==== undefined ? null : num;
    for (var i = 0; i < times; i++) {
        a[i] = num;
    }
    return a;
}



console.log(elem(2, "none"));

// 7. Write a function which says whether a number is perfect.

/* function perfectNum(num) {
    var div = 0;
    for (var i = 0; i < num; i++) {
        if (num % i === 0) {
            div += i;
        }
    }
    if (num === div) {
        console.log("Number is perfect," + num)
    }
}
// perfectNum(28); */


//8.Write a function to find a word within a string.


//9.Write a function to hide email address. 
// flag JS

//10. Write a program to find the most frequent item of an array.