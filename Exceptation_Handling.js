
//Exception Handling

var a = 100;

var b = 0;

try
    {
     if (b == 0)
    {
      throw("B is True ")
    }else
      {
        var c = a / b;
      }
    } 
catch (e)
{
  console.log("Error: + e")
}