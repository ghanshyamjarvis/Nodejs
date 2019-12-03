

//Array Object
/*
var points =[10,20,30];

for (var i=0; i<points.length; i++)
{
  points[i]= i * 2;
  console.log(points[i])
}*/


//Example: Array Constructor Accepts Comma-separated Values
/*

var names = new Array("shaym","ram","ramesh","raj")

for (var i=0; i < names.length ;i++ )
{
  console.log(names[i]);
}
*/

//concat
/*
var girl =["sita","reena","rohini"]
var boys =["ram","shyam","raj"]

var group = girl.concat(boys);
console.log(group);
*/

//if else
/*var pointss =[10,15,20,25,30,35];

for (var i=0; i<pointss.length;i++)
{
  if (pointss > 10)
  {
    console.log(true)
  }
  else
    {
    console.log(false)
  }
}*/
/*
//forEach
var p=0;
var run =[1,2,6,4,3,2,1,4,2]
run.forEach(fn1())
function fn1(val)
{
  p += val
  console.log(p)
}*/

//join all elements in a string
/*
var over = [1,2,6,4,3,2,1,4,2]

console.log(over.join("*"))

var b = fu.map(Math.sqrt)
*/

//map
/*
var fu =[1,2,6,4,3,2,1,4,2];

console.log(b);
*/

//pop
/*

var g =["shyam","Hari","ravina"];
console.log(g.pop());
console.log(g.push("ravi"))
console.log(g);
console.log(g.shift())
console.log(g)
*/

//some

/*
var k =[6,4,3,2,4,6]

if (k == 4)
{
  console.log(k)
}else if (k == 6)
{
 console.log(k)
}else
  {
  console.log("single and double runs")
  }
*/


//sort
/*
var Players = ["kholi","rohit","gambhir"]

Players.reverse()
console.log(Players)

Players.sort()
console.log(Players)
*/

//Array De-structuring

var arr =[ 10,20,30]

var [a,b,c]=arr

console.log(a)
console.log(b)
console.log(c)




