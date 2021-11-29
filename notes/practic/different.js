(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['b'], function (b) {
        return (root.returnExportsGlobal = factory(b));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('b'));
  } else {
    // Browser globals
    root.returnExportsGlobal = factory(root.b);
  }
}(typeof self !== 'undefined' ? self : this, function (b) {
  // Use b in some fashion.
  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return {};
}));






// define(['store/customer', 'when'], function (customerStore, when) { 
//   return function (id) { 
//     return when(id).then(customerStore.load)
//   }
// })



// const myGradesCalculate = (function () {
//   const myGrades = [93, 95, 88, 0, 55, 91];

//   return {
//     average: function() {
//       const total = myGrades.reduce(function(accumulator, item) {
//         return accumulator + item;
//         }, 0);
        
//       return'Your average grade is ' + total / myGrades.length + '.';
//     },

//     failing: function() {
//       const failingGrades = myGrades.filter(function(item) {
//           return item < 70;
//         });

//       return 'You failed ' + failingGrades.length + ' times.';
//     }
//   }
// })();

// console.log(myGradesCalculate.failing()); // 'You failed 2 times.' 
// console.log(myGradesCalculate.average()); // 'Your average grade is 70.33333333333333.'