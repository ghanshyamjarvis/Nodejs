




// Declaration

/*
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}*/


//Creating Objects
/*

syntax:-

var object_name= new class_name([ arguments ])
*/

//Accessing Functions
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

//The Static Keyword
/*

class staticMem
    {
        static member()
        {
         console.log("static function call")
        }
    }
staticMem.member()*/

//The instanceof operator
/*

class Person{ }
var obj = new Person()

var isPerson = obj instanceof Person;

console.log(" obj is an instance of Person " + isPerson);*/

//Class Inheritance
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
            console.log("Area of the circle:  "+this.Area)
          }
      }

var obj = new Circle(223)

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

    class StringPrinter extends PrinterClass
          {
            doPrint()
              {
                console.log("doPrint() is printing a string…");
              }
          }
var obj = new StringPrinter();

obj.doPrint();
*/

/*
class Big
        {
          f1()
          {
            console.log("This is Big Class Function")
          }
        }
        class Me extends Big
        {
          f1()
          {
            console.log("This is Small Class Function")
          }
        }
var obj = new Me()

obj.f1()
*/

//The Super Keyword


class PrinterClass {
  doPrint() {
    console.log("doPrint() from Parent called…")
  }
}

class StringPrinter extends PrinterClass {
  doPrint() {
    super.doPrint()
    console.log("doPrint() is printing a string…")
  }
}

var obj = new StringPrinter()
obj.doPrint()