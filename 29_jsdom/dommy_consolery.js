// Team Euliss Spikes :: Jeff Chen and Aahan Mehta
// SoftDev pd8
// K29 -- Getting more comfortable with the dev console and the DOM
// 2023-04-20

//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)


console.log("AYO");

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30;
  return j+x;
};


//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 1024,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };


var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};


var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};


var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};


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

//insert your implementations here for...
// FIB
// FAC
// GCD

function fact (n) {
  if (n < 2) return 1;
  return n*(fact(n-1));
}


function fib (n) {
  if (n < 2)return n;
  return fib(n-1)+fib(n-2);
}

function gcd(a, b) {
  if (b == 0) return a;
  return gcd(b, a % b);

}

// In addition to the style shown above,
//  you are encouraged to test drive the "arrow function syntax" as shown below.
//  Note anything notable.
const myFxn = (param1, param2) => {
  // body
  return retVal;
};

red(addItem(fib(3)));

var dasbut = document.getElementById("fact"); 
dasbut.addEventListener('click', ()=>{
  addItem(fact(5));
	console.log(fact(5))
});

var dasbut = document.getElementById("fib"); 
dasbut.addEventListener('click', ()=>{
  addItem(fib(5));
	console.log(fib(5))
});

var dasbut = document.getElementById("gcd"); 
dasbut.addEventListener('click', ()=>{
  addItem(gcd(5,10));
	console.log(gcd(5,10))
});



