// Back to top button
let button = document.querySelector('#button');
let header = document.querySelector('#header');

// Remove loading animation when the DOM Content is
// fully loaded
window.addEventListener('load', function () {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
});

window.onscroll = function () {
  displayButton();
};

function displayButton() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}

// changeHeaderColor : Remember to add this to window.onscroll if implemented
// function changeHeaderColor() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     header.style.backgroundColor = '#00091ae6';
//   } else {
//     header.style.backgroundColor = 'transparent';
//   }
// }

// Scroll to the top of the document when the user clicks the button
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Change theme color
document.getElementById('colorChanger').addEventListener('click', () => {
  let themeEnabled = document.body.classList.toggle('light-theme');

  // Save theme color to local storage
  localStorage.setItem('theme-enabled', themeEnabled);
});

if (JSON.parse(localStorage.getItem('theme-enabled'))) {
  document.body.classList.add('light-theme');
}

console.log('This is working!');
