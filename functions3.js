/* 1.Write a program to insert a string within a string at a particular position (default is 1, beginning of a string). */

<<<<<<< HEAD
/* function instStrng (str1, str2, num) {

    var a = "";
    for(var i = 0; i<str1.length; i++){
        if(i !== num){
            a+=str1[i];
        }else if(i === num){
         a += str2 + str1[i];
        }
    }
return a;
    
}

console.log(instStrng("My random string", "JS ", 10)); */
=======
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
>>>>>>> 0afb539472b0ff6b35ebae156d28afdc08347f4f

/* 2.Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity */

/* function joinElem (arr){
    var a = "";
    for(var i = 0; i<arr.length; i++){
<<<<<<< HEAD
        if(arr[i] == undefined || arr[i] == null || arr[i] == NaN || arr[i] == 'infinity'){
=======
        if(arr[i] == undefined || arr[i] == null || arr[i] !== arr || arr[i] == 'infinity'){
>>>>>>> 0afb539472b0ff6b35ebae156d28afdc08347f4f
            continue;
        }else{
            a += arr[i] + ",";
        }
<<<<<<< HEAD

=======
>>>>>>> 0afb539472b0ff6b35ebae156d28afdc08347f4f
    }
    return a;
}
console.log(joinElem([NaN, 0, 15, false, -22, '', undefined, 47, null])); */

<<<<<<< HEAD
console.log(joinElem([NaN, 0, 15, false, -22, '', undefined, 47, null])); */

/* 3. Write a program to filter out falsy values from the array. */


// 4. Write a function that reverses a number. Result must be of type number.

/* function reverseNum (num){
    var a = "" + num;
    var b = "";

    for(var i = (a.length-1); i>=0; i--){
        b+=a[i];
    }
    return b;

=======
/* 3. Write a program to filter out falsy values from the array. */
function filterArr(arr){
    var outpu = [];
    for( var i = 0; i<arr.length; i++){
        if (arr[i]){
            outpu[outpu.length]=arr[i];
        }
    }return outpu;
}

// 4. Write a function that reverses a number. Result must be of type number.

/*  function reverseNum (num){
    var a = "" + num;
    var b = "";
    for(var i = (a.length-1); i>=0; i--){
        b+=a[i];
    }
    return b*1;

console.log(reverseNum(356823));  */

/* 5. Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. */
function lastElem (arr, n){
    //default
    n = n === undefined ? 1: n;
    //
    var a = [];
    for(var i=0; i<arr.length, i++){
        a[a.length] = arr[i];
    }
    return a;
}

//>>Version 2<<

/* function lastElem(arr, n){
    n = n===undefinded? 1 :n;
    var a=[];
    for(var i = arr.length -1; i < arr.length; i ++){
     }
        return a;
}
 */

// 6. Write a function to create a specified number of elements with pre-filled numeric value array.

function elem(times, num) {
    num = num === undefined ? null : num;

    var a = [];
    for (var i = 0; i < times; i++) {
        a[i] = num;
    }
    return a;
}



console.log(elem(2, "none"));

// 7. Write a function which says whether a number is perfect.

function perfectNum(num) {
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
// perfectNum(28); 



//8.Write a function to find a word within a string.
/* function findWord(str, word){
    var count = 0;
    var searchIndex = 0;
    for(var i = 0; i<str.length; i++){
        if(str[i] === word[searchIndex]){
            searchIndex++
            if (searchIndex = word.length){
                searchIndex = 0;
                count++;
            }
            
    }
    return searchIndex;
}
 
console.log(findWord("hello world", "hello")); */

//9.Write a function to hide email address. 
// flag JS

function hideEmail (str){
    var output = "";
    var shouldcopy = true;
    for (var i = 0; i<str.length; i++){
        if (i===3){
            shouldcopy = false;
            output += "...";
        }
        if (str[i]==='@')shouldcopy = true;
        
        if(shouldcopy) {
            output += str[i]
        }

    }
    return output;
}

console.log(hideEmail('malimokrilug@yahoo.com'));
//10. Write a program to find the most frequent item of an array.
function findItem (arr){
    var maxFrequency = 0;
    var maxElement = null;
    var counter = 0;
    for (var i = 0; i<arr.length; i++) {
        for(var j = i; j<arr.length; j++) {
            if(arr[j]===arr[i]) {
                counter ++;
            }
        }
        if (counter > maxFrequency) {
            maxFrequency = counter;
            maxElement = arr[i];
        }
        counter=0;
    }
    return maxElement;
}

console.log(findItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
