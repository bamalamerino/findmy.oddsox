// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get essential elements
  const chatInputContainer = document.querySelector('.chat-input-container');
  const linksContainer = document.querySelector('.links-container');
  
  // SUPER SIMPLE TOGGLE - just show/hide the links when clicking the input
  chatInputContainer.addEventListener('click', function(event) {
    // Prevent any default behavior
    event.preventDefault();
    event.stopPropagation();
    
    console.log('Input clicked!'); // Debug
    
    // Simply toggle the 'hidden' class
    if (linksContainer.classList.contains('hidden')) {
      // Show links
      linksContainer.classList.remove('hidden');
      setTimeout(function() {
        linksContainer.classList.add('visible');
        console.log('Links should be visible now');
      }, 10);
    } else {
      // Hide links
      linksContainer.classList.remove('visible');
      setTimeout(function() {
        linksContainer.classList.add('hidden');
        console.log('Links should be hidden now');
      }, 300);
    }
  });
  
  // Close when clicking outside
  document.addEventListener('click', function(event) {
    // If links are visible and click is outside the container areas
    if (!linksContainer.classList.contains('hidden') && 
        !chatInputContainer.contains(event.target) && 
        !linksContainer.contains(event.target)) {
      
      // Hide links
      linksContainer.classList.remove('visible');
      setTimeout(function() {
        linksContainer.classList.add('hidden');
      }, 300);
    }
  });
  
  // Close with ESC key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && !linksContainer.classList.contains('hidden')) {
      linksContainer.classList.remove('visible');
      setTimeout(function() {
        linksContainer.classList.add('hidden');
      }, 300);
    }
  });
  
  // Debugging - add a visible indicator to show the script is working
  const searchBar = document.querySelector('.search-bar p');
  if (searchBar) {
    searchBar.style.textDecoration = 'underline';
  }
}); 