fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const summaryList = document.getElementById('summary-list');
    summaryList.innerHTML = '';

    let total = 0;
    data.forEach(item => {
      total += item.score;
      const li = document.createElement('li');
      li.classList.add(item.category.toLowerCase());
      li.innerHTML = `
        <img src="${item.icon}" alt="${item.category} icon">
        ${item.category}
        <span>${item.score} / 100</span>
      `;
      summaryList.appendChild(li);
    });

    const avg = Math.floor(total / data.length);
    document.getElementById('average-score').textContent = avg;
    document.getElementById('rating').textContent = 'Great';
    document.getElementById('description').textContent =
      'You scored higher than 65% of '+
      ' the people who have taken' + 
      ' these tests.';
  })
  .catch(error => console.error('Error loading data:', error));
