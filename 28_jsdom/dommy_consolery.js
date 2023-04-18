// Team Keychron :: Jeff Chen, Wei Chen Liu
// SoftDev pd8
// K28 -- Getting more comfortable with the dev console and the DOM
// 2023-04-05w
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;

//console.log(i)
//console.log(j)
//assign an anonymous fxn to a var
var f = function(x) {
  var j=30;
  return j+x;
};

console.log(f(20))
//functions are declared using a var?? why is this like lambda in drracket?
//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 1024,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };

//console.log(o.name)
//console.log(o.age)
//console.log(o.func(20))
//objects can have functions inside them? like rust structs, i guess
var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};
console.log(addItem("pee pee poo poo"))
addItem("poo poo pee pee")
//functions can directly interact with the html, coolio

var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};
removeItem(8)

var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};
//red()
//items 2 thru 7 are not red!!!

var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};
//stripe()
//insert your implementations here for...
// FIB
function fact(n) {
	if (n == 0) {
		return 1;
	}
	else {
		return n * fact(n-1);
	}
}
console.log("fact: " + fact(4))
// FAC
function fib(n) {
	if (n == 0) {
		return 0;
	} else if (n == 1) {
		return 1;
	} else {
		return (fib(n-2) + fib(n-1));
	}
}
console.log("fib: " + fib(5))
// GCD
function gcd(a, b) {
  var rem = a % b;
  //console.log(rem);
  if (rem == 0){
    return b;
  }
  return gcd(b, rem);
}

console.log("gcd: " + gcd(10, 5))
// In addition to the style shown above,
//  you are encouraged to test drive the "arrow function syntax" as shown below.
//  Note anything notable.
const myFxn = (param1, param2) => {
  // body
  retVal = param1 + param2
  return retVal;
};
//seems like it is just another way to declare a function?
//upon looking it up its shorthand for function writing
