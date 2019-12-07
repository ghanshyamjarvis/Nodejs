//Creating Objects

// syntax var object_name= new class_name([ arguments ])

/*
class Polygon
      {
        constructor(height, width)
          {
            this.h = height;
            this.w = width;
          }

  test()
        {
          console.log("The height of the polygon: ", this.h)
          console.log("The width of the polygon: ",this. w)
        }
      }

//creating an instance

var polyObj = new Polygon(10,20);

polyObj.test();
*/

//Static Keyword
/*
class StaticMem
{
  static play()
      {
        console.log("Static Call Function")
        }
}
StaticMem.play()
*/

//Class Inheritance
// Syntax --class child_class_name extends parent_class_name

/*

class Shape
    {
        constructor(a)
        {
          this.Area = a
        }
    }

    class Circle extends Shape
        {
      disp()
      {
          console.log(this.Area)
      }
        }
        var obj =new Circle(223)
        obj.disp()
*/

//Class Inheritance and Method Overriding

/*
class PrinterClass
            {
             doPrint()
              {
                console.log("doPrint() from Parent called… ");
              }
        }

/!*
        var me = first =new PrinterClass()
        me.doPrint()
*!/

class StringPrinter extends PrinterClass
          {
            doPrint()
            {
              console.log("doPrint() from Child");
            }
}
var obj = new StringPrinter();

obj.doPrint();
*/
//OverRiding Methods
/*

class First{
        fun(){
            console.log("Parent Class")
            }
}
/!*
var disp = new  First()
disp.fun()
*!/
class Second {
        fun2(){
          console.log("Child Class")
}
}
var gone =new Second()
gone.fun2()
*/
/*

class De{
        f1(){
          console.log("Parent Class for extends ")
  }
}
//var mr = new De()
//mr.f1()
class Re extends De{
  f1(){
    console.log("Child Class for extends ")
  }
}
var mr = new Re()
mr.f1()*/

//The Super Keyword
/*

class First {
      fn2(){
        console.log("parent")
      }
}

class Second extends First{
  fn2(){
    super.fn2()
    console.log("Child")
  }
}
var obj = new Second()
obj.fn2()*/

//Understanding CallBacks

/*
function First(one,two)
{
console.log("Starting")
  one()
  two()
}

First(function ()
{
 console.log("Sendind One Function as A Parameter")
},
  function ()
  {
    console.log("Sending two Function as A parameter")
  })
console.log("End the Call BAck")
*/

/*
function demo (nm,sr)
{
console.log("GGGG")
nm()
sr()
}

demo(function ()
{
  console.log("sssss")
},function ()
  {
  console.log("aaa")
  })
console.log("END")*/

//AsyncCallback
/*

function first (me,you)  {
          setTimeout(function () {
            console.log("Starting")
            me()
            you()
             }, 2000)
}
first(function ()
{
console.log("ME Parameter Function")
},
  function () {
    console.log("You Paramenter Function")
  })
console.log("End Of The Script")*/

function second(p ,d) {
        setTimeout(function () {

          console.log("starting form the one")
          p()
          d()
  },1000)
}

second(function ()
{
console.log("First")
},function ()
{
console.log("SECOND")
})
console.log("End")