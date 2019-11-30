var foo = (x)=>10+x
console.log(foo(10))

//Optional parentheses for a single parameter.
var msg = x=> {console.log(x)}
msg(10)


//Optional braces for a single statement. Empty parentheses for no parameter.
var disp = ()=>console.log("Hello World")
disp();