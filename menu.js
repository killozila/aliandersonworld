document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('menu-toggle');
    const hamburgerLines = document.querySelector('.hamburger-lines');
  
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        hamburgerLines.classList.add('active');
      } else {
        hamburgerLines.classList.remove('active');
      }
    });
  });
  