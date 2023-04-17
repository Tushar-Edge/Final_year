function filter() {
    // Get input values
    const dateValue = document.getElementById("date-filter").value;
    const yearValue = document.getElementById("year-filter").value;
    const locationValue = document.getElementById("location-filter").value.toLowerCase();
  
    // Get table rows
    const tableRows = document.getElementsByTagName("tr");
    for (let i = 0; i < tableRows.length; i++) {
      const row = tableRows[i];
  
      // Skip header row
      if (row.getElementsByTagName("th").length > 0) {
        continue;
      }
  
      // Get cell values
      const dateCell = row.getElementsByTagName("td")[0];
      const yearCell = row.getElementsByTagName("td")[1];
      const locationCell = row.getElementsByTagName("td")[2];
  
      // Filter by date
      if (dateValue !== "") {
        const rowDate = new Date(dateCell.textContent);
        const filterDate = new Date(dateValue);
        if (rowDate.getTime() !== filterDate.getTime()) {
          row.style.display = "none";
          continue;
        }
      }
  
      // Filter by year
      if (yearValue !== "") {
        if (yearCell.textContent !== yearValue) {
          row.style.display = "none";
          continue;
        }
      }
  
      // Filter by location
      if (locationValue !== "") {
        if (locationCell.textContent.toLowerCase().indexOf(locationValue) === -1) {
          row.style.display = "none";
          continue;
        }
      }
  
      // Show row if it passes all filters
      row.style.display = "";
    }
  }
  

  // const filterButton = document.getElementById("filter-button");
// filterButton.addEventListener("click", () => {
//   const dateFilter = document.getElementById("date-filter").value;
//   const yearFilter = document.getElementById("year-filter").value;
//   const locationFilter = document.getElementById("location-filter").value;

//   const rows = document.querySelectorAll("tr");
//   rows.forEach((row) => {
//     const date = row.querySelector("td:nth-child(5)").textContent;
//     const year = date.split("-")[0];
//     const location = row.querySelector("td:nth-child(4)").textContent;

//     if (
//       (dateFilter && date !== dateFilter) ||
//       (yearFilter && year !== yearFilter) ||
//       (locationFilter && !location.toLowerCase().includes(locationFilter.toLowerCase()))
//     ) {
//       row.classList.add("hide");
//     } else {
//       row.classList.remove("hide");
//     }
//   });
// });
