// /*1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.*/

// for (var i = 0; i < 15; i++) {
//     if (i === 0) {
//         console.log(i + " is even");
//     } else if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd.");
//     }
// }

// /*2. Write a program to sum the multiples of 3 and 5 under 1000.*/

// var sum = 0;
// for (var i = 1; i < 1000; i++) {
//     if ((i % 3 === 0) || (i % 5 === 0)) {
//         sum += i;
//         console.log(i);
//     }
// }

// /*3. Write a program to compute the sum and product of an array of integers.*/
// var a = [1, 2, 3, 4];
// var sum = 0;
// var prod = 1;
// for (var i = 0; i < a.length; i++) {
//     sum += a[i];
//     prod *= a[i];
// }
// console.log("sum " + sum);
// console.log("product: " + prod);

/*4. Write a program which prints the elements of the following array as a single string*/
// var x = ['1', 'A', 'B', 'C', 'r', true, NaN, undefined];
// var a = " ";

// for (var i = 0; i < x.length; i++) {
//     a += " " + x[i];

// }
// console.log(a);



// /*5. Write a program that prints the elements of the following array.
// var a = [

// [1, 2, 1, 24],
// [8, 11, 9, 4],
// [7, 0, 7, 27]
// ];*/

// var a = [

//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27]
// ];

// for (var i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }

// /*6. Write a program that outputs the sum of squares of the first 20 numbers.*/
// var sum = 0;

// for (var i = 1; i < 20; i++) {
//     sum = i * 2;
//     console.log(i);
// }

// /*7. Write a program that computes average marks of the following students. Then use this
// average to determine the corresponding grade.*/

// var grades = [80, 77, 88, 95, 68];
// var sum = 0;
// for (var i = 0; i < grades.length; i++) {
//     sum += grades[i];
//     sum /= grades.length;
//     console.log(sum);
// }



// /*8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
// exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
// divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
// program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
// &quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).*/

// for (var i = 1; i < 101; i++) {
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//         console.log(i + " FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log(i + " fizz");
//     } else if (i % 5 === 0) {
//         console.log(i + " buzz");
//     }
// }
