"use strict";

function slice(a, x) {
  return Array.prototype.slice.call(a, x);
}

function curry(fn) {
  var args = slice(arguments, 1);

  return function() {
    return fn.apply(this, args.concat(slice(arguments)));
  };
}

function add(a, b) {
  return a + b;
}

var add10 = curry(add, 10);
var addwah = curry(add10, 1);

console.log("add(10, 10) - %s", add(10, 10));
console.log("add10(10) - %s", add10(10));
console.log(addwah());

/*
function(a) {
  return function(b) {
    return(function(c) {
      return a + b + c;
    }
  }
}
*/

var model1 = {
  name: "Fry",
  job: "Delivery boy"
};

var model2 = {
  name: "Lila",
  job: "Captain"
};

function greet(date, x) {
  console.log("%s: Hi! I'm %s. I'm the ships %s", this.name, this.job, arguments.length);
}

try {
  console.log(greet());
} catch(e) {
  console.log("no good");
}

greet.apply(model1, [ Date.now(), 1, 2, 3, 4 ]);
greet.apply(model2, [ Date.now(), 2 ]);
