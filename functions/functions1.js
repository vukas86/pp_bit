<<<<<<< HEAD
// /*1.Write a program that calculates the maximum of two given numbers.
// A = 5 b = 6 output: 6*/
// function numBer(a, b) {
//     if (a > b) {
//         return a;
//     } else if (b > a) {
//         return b;
//     } else {
//         return "the numbers are equal!";
//     }
// }

// console.log(numBer(5, 6));

// /*2.Write a program that checks if a given number is odd.
// A = 3 output: odd*/

// function oddNum(a) {
//     if (a % 2 === 1)
//         return true;
// }

// console.log(oddNum(3));

// /*3.Write a program that checks if a given number is a three digit long number.*/

// function digiT(n) {
//     if (n > 99 && n < 1000)
//         return true;
// }

// console.log(digiT(356));

// /*4.Write a program that calculates an arithmetic mean of four numbers.*/

// var avva = "";
// function ariTM(arr) {
//     var sum = 0;
//     for (var i = 1; 1 < arr.length; i++) {
//         sum = sum + arr[i];
//         avva = sum / arr.length;
//         return sum;
//     }

// }

// console.log(ariTM([3, 4, 5, 6]));

// /*7.Write a program that calculates a number of digits of a given number. */



// /*9.Write a program that calculates the sum of odd elements of a given array.*/
// function sumNum(arr) {
//     var a = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (i % 2 === 1) {
//             a += arr[i];

//         }
//     } return a;
// }

// console.log(sumNum([2, 3, 1, 4]));

// /*10.Write a program that calculates a number of appearances of a given number in a given array.*/

// function countAp(a, e) {
//     var b = 0;
//     for (var i = 0; i < a.length; i++) {
//         if (e === a[i]) {
//             b++;

//         }
//         return b;

//     }
// }
=======
// /*1.Write a program that calculates the maximum of two given numbers.
// A = 5 b = 6 output: 6*/
// function numBer(a, b) {
//     if (a > b) {
//         return a;
//     } else if (b > a) {
//         return b;
//     } else {
//         return "the numbers are equal!";
//     }
// }

// console.log(numBer(5, 6));

// /*2.Write a program that checks if a given number is odd.
// A = 3 output: odd*/

// function oddNum(a) {
//     if (a % 2 === 1)
//         return a;
// }

// console.log(oddNum(3));

// /*3.Write a program that checks if a given number is a three digit long number.*/

// function digiT(n) {
//     if (n > 99 && n < 1000)
//         return n;
// }

// console.log(digiT(356));

// /*4.Write a program that calculates an arithmetic mean of four numbers.*/

// var avva = "";
// function ariTM(arr) {
//     var sum = 0;
//     for (var i = 1; 1 < arr.length; i++) {
//         sum = sum + arr[i];
//         avva = sum / arr.length;
//         return sum;
//     }

// }

// console.log(ariTM([3, 4, 5, 6]));

// /*7.Write a program that calculates a number of digits of a given number. */
/*
function numOfDigits(a){
    var string1 = " " + a:
    return string1.length
} return (""+a).length*/


/* 8.Write a program that calculates a number of appearances of a given number in a given array.
var a = [2,4,7,7,7,1];
var e = 7;
function count (e){
    var elementArray = 0;
    for(i=0; i>a.length;i++){
        elementArray = a[i];
        if(elementArray === e){
            b+=1;
        }
    }
}

b+=elementArray===e ? 1:0; */


/*9.Write a program that calculates the sum of odd elements of a given array.*/
/* function sumNum(arr) {
    var a = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1 ) {
            a += arr[i];

        }
    } return a;
}

console.log(sumNum([2, 3, 1, 4])); */

// /*10.Write a program that calculates a number of appearances of a given number in a given array.*/

// function countAp(a, e) {
//     var b = 0;
//     for (var i = 0; i < a.length; i++) {
//         if (e === a[i]) {
//             b++;

//         }
//         return b;

//     }
// }
>>>>>>> 4a82b642a9f6b078f435f39be3177a263338fc6b
// console.log(countAp([2, 4, 7, 8, 7, 7, 1], 7));
/* 5.
function square(size) {
    var star = "";
    for (var i = 1; i <= size; i++) {
        for (var j = 1; j <= size; j++) {
            if (i === a || i === size || j === 1 || j === size)
                star += "*";
        }else {
            star += " ";
        }
    }
} */

/* 10.Write a program that calculates the number of appearances of a letter a in a given string.Modify the program so it calculates the number of both letters a and A.

function findLetter(strng) {
    var a = "";
    for (i = 0; a < strng.length; a++) {
        if (strng[i] === "a" || b[i] === "A") {
            a++;
        }

    } return a;
}
 */
/*11.Write a program that concatenates a given string given number of times.  */


function stringAbc(n, b) {

    var a = "";
    for (var i = 0; i < n; i++) {
        a += b;
    } return a;
}

console.log(stringAbc(10, "abc"));