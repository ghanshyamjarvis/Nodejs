var map = new Map();
map.set(1,true);
console.log(map.has("1")); //false

map.set("1",true);
console.log(map.has("1")); //true
//The set() method is also chainable. Consider the following example.
var roles = new Map();

roles.set('r1', 'User')
  .set('r2', 'Guest')
  .set('r3', 'Admin');

console.log(roles.has('r1'))

var roles = new Map([
  ['r1', 'User'],
  ['r2', 'Guest'],
  ['r3', 'Admin'],
]);
console.log(roles.get('r2'))

//Example 1: Set and Iterator

var  set = new Set(['a','b','c','d','e']);
var iterator = set.entries();
console.log(iterator.next())

// Set and Iterator

var  set = new Set(['a','b','c','d','e']);
var iterator = set.values();
console.log(iterator.next());

// Map and Iterator
