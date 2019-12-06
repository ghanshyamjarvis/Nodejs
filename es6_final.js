
/*

//Your First JavaScript Code
/!*
var message = "Hello World"
console.log(message)

*!/

//The Strict Mode
 /!*v = 15
function f1()
{
  "use strict";
  var v = "Hi!  I'm a strict mode script!";
}
f1()
*!/

//Example : Global vs. Local Variable
/!*
var num = 10

function test()
{
  var num = 100

  console.log("value of num in test() "+num)
}
console.log("value of num outside test() "+num)
test()
*!/

//The Let and Block Scope

/!*
function test()
{
  var num = 100
  console.log("value of num in test() "+num)
  {
    console.log("Inner Block begins")
    let num = 200
    console.log("value of num : "+num)
  }
}
test()
*!/

//Example: Variable Hoisting
/!*
var main = function()
{
  for(var x = 0;x<5;x++)
    {
      console.log(x);
    }
  console.log("x can be accessed outside the block scope x value is :"+x);
  console.log('x is hoisted to the function scope');
}
main();
*!/

//The negation operator (-)
/!*
var x = 4
var y = -x;
console.log("value of x: ",x); //outputs 4
console.log("value of y: ",y); //outputs -4
*!/

//Conditional Operator (?)
/!*
var num = -2
var result = num > 0 ?"positive":"non-positive"
console.log(result)
*!/

//typeof operator
/!*
var num = 10
console.log(typeof num)
*!/

//Function
/!*
function retStr()
{
  return "hello world!!!"
}
var val = retStr()
console.log(val)
*!/

//Example − Parameterized Function
/!*
function ff(n1,n2)
{
var sum = n1 + n2
console.log(sum)
}
ff(10,20)*!/

//Rest Parameters
/!*

function dd(... par)
{
console.log(par.length)
}
dd(1,2,5,8,4,3)
dd(4)
dd(7,8,9)*!/

//Anonymous Function
/!*

function f()
{
return "MY Side"
}
console.log(f())
*!/

//Example − Anonymous Parameterized Function
/!*
var me =function ss(x,y)
            {
              return x*y
            }
            function se()
              {
                  var result
                    result =me(10,20)
                    console.log(result)
                  }
                  se()
*!/

//Example − Function Constructor
/!*

var good = new Function("x","y","x*y")

function pro()
{
var resu
  resu =good(10,60)
  console.log(resu)
}

console.log(pro())
*!/

//Recursion and java function
/!*
function factorial(num)
{
  if(num<=0)
  {
    return 1;
  } else
    {
    return (num * factorial(num-1)  )
  }
}
console.log(factorial(6))
*!/

// Anonymous Recursive Function
/!*(function()
{
  var msg = "Hello World"
  console.log(msg)
})
()*!/

//Example − Lambda Expression
/!*
var ram  =(x)=>10+x
console.log(ram(50))
*!/

*/

//Arrow Function
/*

var tt = (n) => 20 * n

console.log(tt(10))

var ee =() => {return"hello"}

console.log(ee())

*/

//Immediately Invoked Function Expression

/*
var main = function()
              {
                  var loop = function()
                    {
                      for(var x = 0;x<5;x++)
                      {
                        console.log(x);
                      }
                    }();
                    console.log("x can not be accessed outside the block scope x value is :"+x);
              }
main();
*/

//Generator Function
/*

function *rainbow()
{
  yield "Red"
  yield "Orange"
  yield "Yellow"
  yield "Green"
  yield "Blue"
  yield "Indigo"
  yield "Violet"
  yield "White"
}
for (var me of rainbow())
{
  console.log(me)
}
*/

/*
function *ask()
{
  var first =yield "What is your name"
  var second =yield "Sport"
  return `${first} and sports is ${second}`
}
var third =ask()
console.log(third.next())
console.log(third.next("Ramesh"))
*/

//Example: Object Initializers
/*

var person =
  {
    Name:"Ghanshyam",
    LastName:"chauhan",
    FullName:function(){return "Hello" }
  }
    console.log(person.Name)
    console.log(person.LastName)
    console.log(person.FullName())
*/

//The Object() Constructor

/*
var car  =new Object()
car.make ="FORD"
car.model ="Mustang"
car.year =1987

console.log(car.make)
console.log(car.model +" "+  car.year)
*/

//Example − Cloning an Object
"use strict"
var det = { name:"Tom", ID:"E1001" };
var copy = Object.assign({}, det);
console.log(copy);
for (let val in copy) {
  console.log(copy[val])
}



