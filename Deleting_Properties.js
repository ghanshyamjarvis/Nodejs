var my =new Object()

my.a = 5;
my.b = 10;
delete my.a;

console.log("a" in my) //false

//Example 1 − Different Object References
var val1 = {name: "shyam"};
var val2 = {name: "shyam"};

console.log(val1 == val2)  // return false
console.log(val1 === val2)  // return false

