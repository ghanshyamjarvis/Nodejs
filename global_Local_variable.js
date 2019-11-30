







var num = 10;

var x = 12;



function test()
  {
    var num = 100;
    console.log("value of num in test() "+num);
  }
    console.log("value of num outside test() "+num);
test();




function f2()
{
  var x = 10;
  console.log(x);
}
console.log(x);
f2();