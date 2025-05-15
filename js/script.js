document.addEventListener('DOMContentLoaded', function() {
  const footerBurger = document.querySelector('.footer-burger');
  const footerLinksContent = document.querySelector('.footer-links-content');
  const footerColumns = document.querySelectorAll('.footer-column');

  // Toggle main menu
  footerBurger.addEventListener('click', function() {
    this.classList.toggle('active');
    footerLinksContent.classList.toggle('active');
  });

  // Toggle columns
  footerColumns.forEach(column => {
    const header = column.querySelector('h4');
    header.addEventListener('click', function() {
      column.classList.toggle('active');
    });
  });
}); 