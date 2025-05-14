document.addEventListener('DOMContentLoaded', () => {
  const chatInputContainer = document.querySelector('.chat-input-container');
  const linksContainer = document.querySelector('.links-container');
  const messageBubbles = document.querySelectorAll('.message-bubble');
  
  // Function to toggle links visibility
  function toggleLinks() {
    // Toggle hidden state
    linksContainer.classList.toggle('hidden');
    
    // Add a small delay before adding the 'visible' class for a smooth transition
    if (!linksContainer.classList.contains('hidden')) {
      // Change chat input text when expanded
      const chatInputText = document.querySelector('.chat-input span');
      if (chatInputText) {
        chatInputText.textContent = 'Type to filter...';
      }
      
      // Change icon to close
      const chatInputIcon = document.querySelector('.chat-input i');
      if (chatInputIcon) {
        chatInputIcon.classList.remove('fa-search');
        chatInputIcon.classList.add('fa-times');
      }
      
      setTimeout(() => {
        linksContainer.classList.add('visible');
      }, 10);
      
      // Reset animation delays for message bubbles
      messageBubbles.forEach((bubble, index) => {
        bubble.style.animationDelay = `${0.05 * (index + 1)}s`;
        // Reset animation by removing and adding the class
        bubble.style.animation = 'none';
        bubble.offsetHeight; // Trigger reflow
        bubble.style.animation = null;
      });
    } else {
      // Change chat input text back when collapsed
      const chatInputText = document.querySelector('.chat-input span');
      if (chatInputText) {
        chatInputText.textContent = 'Prompts, Newsletter, ...?';
      }
      
      // Change icon back to search
      const chatInputIcon = document.querySelector('.chat-input i');
      if (chatInputIcon) {
        chatInputIcon.classList.remove('fa-times');
        chatInputIcon.classList.add('fa-search');
      }
      
      linksContainer.classList.remove('visible');
    }
  }
  
  // Toggle links visibility when chat input is clicked
  chatInputContainer.addEventListener('click', toggleLinks);
  
  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !linksContainer.classList.contains('hidden')) {
      toggleLinks();
    }
    
    // Open command palette on Cmd+K (Mac) or Ctrl+K (Windows)
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (linksContainer.classList.contains('hidden')) {
        toggleLinks();
      }
    }
  });
  
  // Add keyboard shortcuts for each menu item
  const keyShortcuts = {
    'k': 0, // Prompts
    'n': 1, // Newsletter
    's': 2, // Collaboration
    'm': 3, // Merch
    'd': 4  // Support
  };
  
  document.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey) {
      const key = e.key.toLowerCase();
      if (key in keyShortcuts) {
        e.preventDefault();
        const index = keyShortcuts[key];
        const linkItems = document.querySelectorAll('.message-bubble a');
        if (linkItems[index]) {
          window.location.href = linkItems[index].getAttribute('href');
        }
      }
    }
  });
  
  // Enable filter functionality
  const chatInput = document.querySelector('.chat-input');
  
  chatInput.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click from bubbling to container
  });
  
  chatInput.addEventListener('keyup', (e) => {
    if (!linksContainer.classList.contains('hidden')) {
      const filterText = e.target.value.toLowerCase();
      const linkItems = document.querySelectorAll('.message-bubble');
      
      linkItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(filterText)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
  });
  
  // Add subtle animations
  function pulseAnimation() {
    const chatInput = document.querySelector('.chat-input');
    chatInput.style.transform = 'scale(1.02)';
    
    setTimeout(() => {
      chatInput.style.transform = 'scale(1)';
    }, 1000);
  }
  
  // Run the pulse animation every 3 seconds until first click
  let pulseInterval = setInterval(pulseAnimation, 3000);
  
  // Stop the pulse animation after the first click
  chatInputContainer.addEventListener('click', () => {
    clearInterval(pulseInterval);
  }, { once: true });
  
  // Initial setup
  setTimeout(pulseAnimation, 1000);
}); 