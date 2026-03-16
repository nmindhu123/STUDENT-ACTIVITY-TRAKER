document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('activity-form');
  const activityList = document.getElementById('activity-list');
  const totalHoursSpan = document.getElementById('total-hours');
  const dateDisplay = document.getElementById('date-display');

  let totalHours = 0;

  // Set Current Date
  const now = new Date();
  dateDisplay.innerText = now.toLocaleDateString('en-US', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get Values
    const name = document.getElementById('activity-name').value;
    const cat = document.getElementById('category').value;
    const hrs = parseFloat(document.getElementById('hours').value);

    // Create Card
    createActivityCard(name, cat, hrs);

    // Update Total
    totalHours += hrs;
    totalHoursSpan.innerText = totalHours.toFixed(1);

    // Reset Form
    form.reset();
  });

  function createActivityCard(name, cat, hrs) {
    const card = document.createElement('div');
    card.className = 'activity-card';

    card.innerHTML = `
      <button class="delete-btn">✕</button>
      <span class="category-tag">${cat}</span>
      <h3>${name}</h3>
      <p><strong>${hrs}</strong> hours</p>
    `;

    // Delete Functionality
    card.querySelector('.delete-btn').addEventListener('click', () => {
      totalHours -= hrs;
      totalHoursSpan.innerText = totalHours.toFixed(1);
      card.remove();
    });

    activityList.appendChild(card);
  }
});
