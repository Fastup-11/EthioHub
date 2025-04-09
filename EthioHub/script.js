// Basic interactivity will be added here
document.addEventListener('DOMContentLoaded', function() {
    console.log('EthioHub website loaded');

    // Search functionality
    const searchButton = document.querySelector('.search-container button');
    const searchInput = document.querySelector('.search-container input');

    searchButton.addEventListener('click', function() {
        if (searchInput.value.trim() !== '') {
            alert(`Searching for: ${searchInput.value}`);
            // In a real implementation, this would redirect to search results
        }
    });

    // Navigation active state
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});