// Add event listeners for navigation links
navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
	link.addEventListener('click', event => {
		event.preventDefault();
		const target = event.target.getAttribute('href');
		document.querySelector(target).scrollIntoView();
	});
});
const navBtn = document.getElementById('nav-btn');
const nav = document.getElementById('nav');

navBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');

searchBtn.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const searchResultsHTML = '';
  const content = document.querySelectorAll('#content p, #content h1, #content h2, #content h3, #content h4, #content h5, #content h6');

  content.forEach(element => {
    const text = element.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      searchResultsHTML += `<li>${element.textContent}</li>`;
    }
  });

  searchResults.innerHTML = searchResultsHTML;
});
