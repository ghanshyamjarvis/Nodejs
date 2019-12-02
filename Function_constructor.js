var first = new Function ("x","y","return x*y");

function fn2()
{
  var me;
  me = first(10,50);
  console.log(me)
}
fn2();