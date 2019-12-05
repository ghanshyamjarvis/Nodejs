



// Custom Error with default message

function myfn(Message)
{
  this.name ="Error";
  this.Message =Message || "Default"
}
try
  {
  throw new myfn()
  }
catch (e)
  {
  console.log(e.name)
  console.log(e.Message)
  }