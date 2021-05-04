/*1. Write a program that shows text representation of a day in a week for a number input from
1 to 7. Print output in console.
For input 1, output should be “Monday”.*/

var weekDay = 10;

switch (weekDay) {
    case 1:
        console.log("Monday");
        break
    case 2:
        console.log("Tuesday");
        break
    case 3:
        console.log("Thursday");
        break
    case 4:
        console.log("Wednesday");
        break
    case 5:
        console.log("Friday");
        break
    case 6:
        console.log("Saturday");
        break
    case 7:
        console.log("Sunday");
        break
    default:
        console.log("The number should be between 1 and 7!");
}

/*3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day
is a weekday or weekend. All other cases output a message explaining that input must be a
number between 1 and 7.
For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.*/

var inputDay = 12;

switch (inputDay) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("It’s weekday.");
        break
    case 6:
    case 7:
        console.log("It’s weekend.");
        break
    default:
        console.log("Input must be number between 1 and 7.");
}

/*Write a program that for a 1-12 number input (representing a month in a year) shows that
month’s name. All other cases output a message explaining that input must be a number
between 1 and 12.
For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”.*/

var monthName = 20;

switch (monthName) {
    case 1:
        console.log("January");
        break
    case 2:
        console.log("February");
        break
    case 3:
        console.log("March");
        break
    case 4:
        console.log("April");
        break
    case 5:
        console.log("May");
        break
    case 6:
        console.log("June");
        break
    case 7:
        console.log("July");
        break
    case 8:
        console.log("August");
        break
    case 9:
        console.log("September");
        break
    case 10:
        console.log("October");
        break
    case 11:
        console.log("November");
        break
    case 12:
        console.log("December");
        break
    default:
        console.log("Input must be number between 1 and 12.");
}

/*Write a program that for a 1-12 number input (representing a month in a year) shows what
season it is. All inputs different from 1-12 output a message explaining that input must be a
number between 1 and 12.*/

var seasonMonth = 56;

switch (seasonMonth) {
    case 3:
    case 4:
    case 5:
    case 6:
        console.log("Its spring!");
        break
    case 7:
    case 8:
    case 9:
        console.log("Its summer!")
        break
    case 10:
    case 11:
        console.log("Its autumn!");
        break
    case 1:
    case 2:
    case 12:
        console.log("Its winter!");
        break
    default:
        console.log("Input must be number between 1 and 12.");

}

/*Write a program that for a string input of a grade from “A”-“F” outputs a proper info
message about that grade in the following manner: A - &quot;Good job&quot;&quot;, B - &quot;Pretty good&quot;&quot;, C -
&quot;Passed&quot;&quot;, D - &quot;Not so good&quot;&quot;, F - &quot;Failed&quot;. Input different from letters A-F outputs a message
&quot;Unknown grade&quot;.*/

var grades = "E";

switch (grades) {
    case "A":
        console.log("Good Job!");
        break
    case "B":
        console.log("Pretty God!");
        break
    case "C":
        console.log("Passed!");
        break
    case "D":
        console.log("Not so good!");
        break
    case "E":
    case "F":
        console.log("Failed")
        break
    default:
        console.log("Unknown Grade");
}

/*Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message&quot;Please
choose a different city&quot;.*/

var city = "Beograd";

switch (city) {
    case "Beriln":
    case "Munich":
    case "Duisburg":
    case "Koln":
        console.log("The country is Germany");
        break
    case "Novi Sad":
    case "Smederevo":
    case "Beograd":
        console.log("The Country is Serbia");
        break
    case "Barcelona":
    case "Madrid":
        console.log("The country is Spain");
        break
    case "Rome":
    case "Verona":
    case "Napoli":
    case "Sorento":
        console.log("The country is Italy");
        break
    case "Amsterdam":
    case "Rotterdam":
    case "Kinderdijk":
    case "Eindhoven":
        console.log("The country is Holland");
        break
    default:
        console.log("Please choose different city");
}

/*Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!*/

var a = 15;
var b = 10;
var result = "+";

switch ("+")

