// Back to top button
let button = document.getElementById('button');

// Remove loading animation when the DOM Content is
// fully loaded
window.addEventListener('load', function () {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
});

window.onscroll = function () {
  displayButton(), changeHeaderColor();
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

// Scroll to the top of the document when the user clicks the button
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Change color of the header
function changeHeaderColor() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.backgroundColor = '#00091ae6';
    header.style.padding = '0';
  } else {
    header.style.backgroundColor = 'transparent';
  }
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
