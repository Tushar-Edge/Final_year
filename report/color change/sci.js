// select all the rows in the table body
var rows = document.querySelectorAll("tbody tr");

// loop through each row and check the value of the flag column
rows.forEach(function(row) {
  var flagCell = row.querySelector("td:nth-child(3)");
  if (flagCell.innerHTML === "1") {
    // if the flag is 1, add the "red-row" class to the row
    row.classList.add("red-row");
  }
});
