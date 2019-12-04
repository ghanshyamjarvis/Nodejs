

//Understanding Callback
/*

function notifyAll(fnSms, fnEmail)
    {
      console.log('starting notification process');
      fnSms();
      fnEmail();
    }




    notifyAll(function()
    {
    console.log("Sms send ..");
    },

    function()
    {
    console.log("email send ..");
    });

console.log("End of script");
//executes last or blocked by other methods
*/

/*
function Good(first,second)
  {
    console.log("Starting")
    first();
    second();
  }

  Good (function ()
  {
  console.log("Do IT")
  },
    function ()
    {
      console.log("End It")
    });

  console.log("Complted")


*/



/*

let calc =function (one,two,Sum)
{

  if (Sum === "Add")
    {
      return one + two
    }
      else if (Sum === "Multiplay")
      {
      return one * two

      }
}
console.log(calc(5,10,"Add"))

*/

var add = function (a,b)
{
return a+b  
}

var multi =function (a,b)
{
return a*b
}

var sum = function (num1, num2, callback )
{
return callback (num1 ,num2);
}

console.log(sum(10,60, add))
console.log(sum(10,60, multi))