/*
  function getSum(n1, n2)
        {
        varisAnyNegative = function ()
          {
            return n1 < 0 || n2 < 0;
          }

          var promise = new Promise(function (resolve, reject)

          {
           if (isAnyNegative())
           {
              reject(Error("Negatives not supported"));
            }
          resolve(n1 + n2)
          } );
            return promise;
        }

  getSum(5, 6)
    .then(function (result)
      {
        console.log(result);
      },
      function (error) {
        console.log(error);
      });

*/



  //    The following example issues three then() calls with getSum() method.

  function getSum(n1, n2)
        {
          varisAnyNegative = function()
            {
              return n1 < 0 || n2 < 0;
            }

    var promise = new Promise(function(resolve, reject) {

      if (isAnyNegative())
        {
          reject(Error("Negatives not supported"));
        }
          resolve(n1 + n2);
      });
      return promise;
    }

    getSum(5, 6)
    .then(function(result) {
        console.log(result);
        returngetSum(10, 20);
        //this returns another Promise
      },
      function(error) {
        console.log(error);
      })
    .then(function(result) {
        console.log(result);
        returngetSum(30, 40);
        //this returns another Promise
      },
      function(error) {
        console.log(error);
      })
    .then(function(result) {
        console.log(result);
      },
      function(error) {
        console.log(error);
      });
  console.log("End of script ")
