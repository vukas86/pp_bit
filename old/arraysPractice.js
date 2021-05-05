/*Write an array of months in a year. Using console.log display June, October and January
from the array.*/


var monthsY = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(monthsY[5], monthsY[9], monthsY[0]);

/*Write an arrays of days in a week. Using console.log display Sunday from the array.*/

var daysW = ["Monday", "Tuesday", "Thursday", "Wednesday", "Friday", "Saturday", "Sunday"];
console.log(daysW[6]);

/*Print all negative elements from the array [2, -4, 5, -2, -11]*/

var ar = [2, -4, 5, -2, -11];
console.log(ar[1], ar[3], ar[4]);

/*Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18,
72, 14, 9].*/

var diviS = [5, 15, -5, 20, 12, 18, 72, 14, 9];
console.log(diviS[1], diviS[4], diviS[6], diviS[8]);

/*What is the index of number 24 in the following array?
[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
10, 26, 7]]*/

var indNum = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];
console.log(indNum[0][3]);
console.log(indNum[3]);
console.log(indNum[2][1]);