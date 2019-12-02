
//String Interpolation and Template literals
var name = "SHYAM CHAUHAN";
console.log(`Hello how are you , ${name}`);

//Example 2: Template literals and expressions
var a=10;
var b=20;
console.log(`The Sum of the ${a} and ${b} is ${a+b}` );

//Multiline Strings and Template Literals
var multiLine = `
   This is 
   a string 
   with multiple 
   lines`;
console.log(multiLine)


//Example 3: Template literals and function expression
function fn()
  {
    return "Hello Shyam";
  }
console.log(fn());
console.log(`Message form Ramesh ${fn()}`);

//String.raw()
var text ="Hi How \n Are \n You";
console.log(text)


var raw_text =String.raw `Hi How \n Are \n You`;
console.log(raw_text);

//String.fromCodePoint()

console.log(String.fromCodePoint(65,66,67,68,69,70));