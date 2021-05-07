// /*1. Write a program that checks if a given element e is in the array a.*/

// var a = [5, -4.2, 3, 7];
// var e = 3;

// for (var i = 0; i < a.length; i++) {
//     if (e === a[i]) {
//         console.log("Yes!");
//         break
//     } else {
//         console.log("No!");
//     }
// }

// /*Write a program that multiplies every positive element of a given array by 2.*/

// var array = [-3, 11, 5, 3.4, -8];
// var e = "";

// for (var n = 0; n < array.length; n++) {
//     if (array[n] > 0) {
//         array[n] = array[n] * 2;

//     }
// }
// console.log(array);

// 3. Write a program that finds the minimum of a given array and prints out its value and
// index.

// var array = [4, 2, 2, -1, 6];
// var a = 0;
// var b = "";
// var c = "";
// for (var i = 0; i < array.length; i++) {
//     if (array[i] < a) {
//         b = array[i];
//     } if (b === array[i]) {
//         c = i;
//     }
// }
// console.log(b, c);

// 4. Write a program that finds the first element larger than minimum and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2

var array = [4, 2, 2, 2, -1, 6];
var a = 0;
var b = 0;
for (var n = 0; n < array.length; n++) {
    if (array[n] < a) {
        a = array[n];
    }
}
