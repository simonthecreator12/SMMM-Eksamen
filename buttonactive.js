// Get the button and the active_markat div
const button = document.querySelector('.button');
const activeMarkat = document.querySelector('.active_markat');

// Add click event listener to the button
if (button && activeMarkat) {
  button.addEventListener('click', function() {
    // Remove 'hide' class and add 'show' class
    activeMarkat.classList.remove('hide');
    activeMarkat.classList.add('show');
  });
}