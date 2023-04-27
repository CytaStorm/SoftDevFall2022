// demo 3
// JS event propagation

var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];

var clicky = function(e) {
  alert( this.innerHTML );
  //Q: What will happen when next line is uncommented?
  // Prediction: only one popup will appear
  //e.stopPropagation();
};

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky, false);
}

//Predict, then test...
//Q: What effect does the boolean arg have?
// true boolean changes priority, but false doesn't seem to reduce priority
//   (Leave exactly 1 version uncommented to test...)

// table.addEventListener('click', clicky, true);
table.addEventListener('click', clicky, false);

// Q: When user clicks on a cell, in what order will the pop-ups appear?
// true -> table -> td -> tr / inner most / no boolean / false?
