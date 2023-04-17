const filterButton = document.getElementById("filter-button");
filterButton.addEventListener("click", () => {
  const dateFilter = document.getElementById("date-filter").value;
  const yearFilter = document.getElementById("year-filter").value;
  const locationFilter = document.getElementById("location-filter").value;

  const rows = document.querySelectorAll("table tbody tr");
  rows.forEach((row) => {
    const date = row.querySelector("td:nth-child(6)").textContent;
    const year = date.split("-")[0];
    const location = row.querySelector("td:nth-child(5)").textContent;

    if (
      (dateFilter && date !== dateFilter) ||
      (yearFilter && year !== yearFilter) ||
      (locationFilter && !location.toLowerCase().includes(locationFilter.toLowerCase()))
    ) {
      row.classList.add("hide");
    } else {
      row.classList.remove("hide");
    }
  });
});

var tableContainer = document.querySelector('.table-container');

// add an event listener to detect when the table is scrolled horizontally
tableContainer.addEventListener('scroll', function() {
  // get the table header
  var tableHeader = tableContainer.querySelector('thead');
  // set the table header's left margin to the negative value of the table container's scrollLeft property
  tableHeader.style.marginLeft = -tableContainer.scrollLeft + 'px';
});


// get all the rows in the table
//const rows = document.querySelectorAll('table tbody tr');

// // loop through each row
// rows.forEach(row => {
//   // get the flag cell
//   const flagCell = row.querySelector('td:last-child');
  
//   // check if the flag is 1
//   if (flagCell.innerText === '1') {
//     // set the row background color to red
//     row.style.backgroundColor = 'red';
//   }
// });

