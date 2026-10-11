// Interactive Filtering for Travel Gallery
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const tripCards = document.querySelectorAll('.trip-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Manage active button class
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      tripCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  // Handle plan inquiry form submission (demo toast)
  const tripForm = document.getElementById('trip-inquiry-form');
  if (tripForm) {
    tripForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Dhanyabad! Thank you for reaching out. Mamita will get back to you to start planning your bespoke journey!");
      tripForm.reset();
    });
  }
});
