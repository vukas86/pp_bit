//Vezbanje - zadatak:
var a = -5;
var b = 10;
var c = 10;
var d = 10;
var e = -1;

if (a >= b && a >= c && a >= d && a >= e) {
    console.log(a);
} else if (b >= a && b >= c && b >= d && d >= e) {
    console.log(b);
} else if (c >= a && b >= c && c >= d && d >= e) {
    console.log(c);
} else if (d >= a && d >= c && d >= d && d >= e) {
    console.log(d);
} else {
    console.log(e)
}
