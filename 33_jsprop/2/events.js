// demo 2
// JS event propagation

var tds = document.getElementsByTagName('td'); //column select
var trs = document.getElementsByTagName('tr'); //row select
var table = document.getElementsByTagName('table')[0];

var clicky = function(e) {
  alert( this.innerHTML );
};

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky);
}

table.addEventListener('click', clicky);


// Q: When user clicks on a cell, in what order will the pop-ups appear?

// everything will create a popup but they will display in inner-to-outer order (td -> tr -> table)
