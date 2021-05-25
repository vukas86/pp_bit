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
    {name: 'Majonez', price: 150},
    {name: 'Hleb', price: 70},
    {name: 'Jogurt', price: 105},
    {name: 'Pasteta', price: 100},
    {name: 'Paradajz', price: 151},
];

/* b) Write a function that calculates the total price of your shopping list.  */


function total(niz) {
    var sum = 0;
    for (let i = 0; i<niz.length; i++) {
        sum += niz[i].price;
    }
    return sum;
}
/*c) Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. */

function printAverage(niz) {
    console.log((total(niz) / niz.length).toFixed(3));
}

/* d)Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase.  */

function printMax(niz){
    var temp = niz[0];
    for(let i = 1; i<niz.length; i++){
        if(temp.price < niz[i].price){
            temp = niz[i];
        }
    }
    console.log(temp.name.toUpperCase())
}

/* 7. a)Write a function that checks if a given string is written in all capitals. */
function isCaps(str) {
    return str === str.toUpperCase();
}

/* b)Write a function that checks if a given string contains any digits. */
function hasDigit(str) {
    return str.search(/[0-9]/) >= 0;    
}
/* c)Write a function that checks if a given string is a valid hexadecimal color. */
function isHex (_str){
    var reg = new RegExp(/^#([0-9a-f]{3}|[0-9a-f]{6})$/)
}

/* d)Write a function that checks if a given number belongs to the interval from 1900 to 2018.
Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d). */

function isInRange(num){
    return (1900<num) && (num < 2018)
}

/*
8.Write a function that calculates a number of days to your birthday.
Input: 25 February
Output: 5 days */

function daysLeftToWedding(_best){
    var timestamp = bestDayEver.getTime()
    var now = Date.now();
    return (timestamp - now) / 1000 / 60 / 60 / 24;
}

/* 9.Write a function that for a given departure and arrival time calculates the time the trip takes.
Input: 8:22:13 11:43:22
Output: 3 hours 21 minutes 9 sec */ 

/* 10.Write a constructor function that creates points in space. Each point in space has its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.


Write a function that calculates the distance between two points in the space.  */


/* 11. a)Write a function that generates a random integer value between 5 and 20. */

function randomNumber1(min, max){
    return Math.random()*(max - min) + min;
}

console.log(randomNumber1(5, 20));

/* b)Write a function that generates a random integer value between 50 and 100.  */

function randomNumber2(min, max){
    return Math.random()*(max - min) + min;
}

console.log(randomNumber2(50, 100));

/* c)Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function.   */

function generateArray ( randomNumber1(), randomNumber2(), callback()){
    var a = [];

}