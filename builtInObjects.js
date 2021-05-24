/* 1. Write a functional expression that duplicates each element of a given array. */

var addEl = function (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {

        newArr.push(arr[i]);
    }
    return newArr;
}

/* 2. Write a functional expression that removes all duplicates in a given array. */

var remdup = function (arr) {
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        if (output.indexOf(arr[i]) < 0) {
            output.push(arr[i])
        }
        return output;
    }
}

/* 3.

Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true
 
Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4 */


a)
function hasOdd(arr) {
    return arr.length % 2 == 0;
}

b)
function pera(arr) {
    var counter = 0;
    var middleEl;
    if (arr.length % 2 === 0) {
        console.log("error!")
    } else {
        middleEl = arr[Math.floor(arr.length / 2)];
        /* ver2 middleEl = arr[Math.floor(arr.length - 1)/2]; */

    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < middleEl) counter++;
    }
    return counter;
}

/* 5.b.Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive.
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’]. */

function proEl(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++)
        if (arr[i].toLowerCase().substring(0, 3) === 'pro');
    newArr.push(arr[i]);
    return newArr;
}
/*
c)Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it.  */

function filtersOut(arr, callback) {
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            output.push(arr[i]);
        }
    }
}

filtersOut(a, function (e) {
    return !e % 2;
})

/* 6. a) Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it.  */

var products = [
    {

/*
7.

Write a function that checks if a given string is written in all capitals.
Write a function that checks if a given string contains any digits.
Write a function that checks if a given string is a valid hexadecimal color.
Write a function that checks if a given number belongs to the interval from 1900 to 2018.
Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).
 */
/*
8.Write a function that calculates a number of days to your birthday.
Input: 25 February
Output: 5 days */

/* 9.Write a function that for a given departure and arrival time calculates the time the trip takes.
Input: 8:22:13 11:43:22
Output: 3 hours 21 minutes 9 sec */ 
