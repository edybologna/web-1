// Get all the cars and the price filter input
const cars = document.querySelectorAll('.car');
const priceFilter = document.querySelector('#price-filter');

// Add an event listener to the price filter input
priceFilter.addEventListener('change', filterCarsByPrice);

// Define the function to filter cars by price
function filterCarsByPrice() {
  // Get the selected price range
  const selectedPrice = priceFilter.value;

  // Loop through each car and show/hide based on the selected price range
  cars.forEach(car => {
    const price = car.querySelector('p').textContent.split('$')[1];
    if (price <= selectedPrice) {
      car.style.display = 'block';
    } else {
      car.style.display = 'none';
    }
  });
}
