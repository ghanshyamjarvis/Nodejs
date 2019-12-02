
//Array
var score = [ 10,11,12,13,14,15,16 ];
console.log(score);
console.log(score[3])
console.log(score.length);//check lenght

var point =[1,2,3,4,5,6];
var len = point.length;


//Array Object

var point = new Array(4)

for(var i = 0; i<point.length; i++)
{
  point[i] = i * 2
  console.log(point[i])
}


//Array Constructor Accepts Comma-separated Values

var names = new Array("shyam","ram","palak","jigo");

var one =names.length;

for(var i = 0; i < one; i++)
{
  console.log(names[i])
}


