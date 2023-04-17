const tableBody = document.querySelector('#report-table tbody');
const filterButton = document.querySelector('#filter-button');

filterButton.addEventListener('click', () => {
  const dateFilterValue = document.querySelector('#date-filter').value;
  const yearFilterValue = document.querySelector('#year-filter').value;
  const locationFilterValue = document.querySelector('#location-filter').value;

  Array.from(tableBody.children).forEach(row => {
    const date = row.children[5].textContent;
    const year = date.slice(0, 4);
const location = row.children[4].textContent;

let isHidden = false;

if (dateFilterValue && date !== dateFilterValue) {
  isHidden = true;
}

if (yearFilterValue && year !== yearFilterValue) {
  isHidden = true;
}

if (locationFilterValue && location !== locationFilterValue) {
  isHidden = true;
}

if (isHidden) {
  row.classList.add('hidden');
} else {
  row.classList.remove('hidden');
}
});
});
   
