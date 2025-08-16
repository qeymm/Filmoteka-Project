// Developer Modal Functionality
class DeveloperModal {
  constructor() {
    this.modal = document.getElementById('developer-modal');
    this.trigger = document.querySelector('.developer-link');
    this.closeBtn = document.querySelector('.developer-modal-close-btn');
    
    this.init();
  }
  
  init() {
    if (!this.modal || !this.trigger) return;
    
    // Event listeners
    this.trigger.addEventListener('click', (e) => {
      e.preventDefault();
      this.openModal();
    });
    
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => {
        this.closeModal();
      });
    }
    
    // Close on backdrop click
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.closeModal();
      }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.closeModal();
      }
    });
  }
  
  openModal() {
    if (!this.modal) return;
    
    // Add show class with a small delay for smooth animation
    this.modal.style.display = 'flex';
    this.modal.style.opacity = '0';
    
    // Trigger reflow
    this.modal.offsetHeight;
    
    // Add show class
    this.modal.classList.add('show');
    this.modal.style.opacity = '1';
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Focus management
    this.closeBtn?.focus();
  }
  
  closeModal() {
    if (!this.modal) return;
    
    // Remove show class
    this.modal.classList.remove('show');
    this.modal.style.opacity = '0';
    
    // Wait for transition to complete
    setTimeout(() => {
      this.modal.style.display = 'none';
      // Restore body scroll
      document.body.style.overflow = '';
    }, 300);
  }
  
  isOpen() {
    return this.modal?.classList.contains('show');
  }
}

// Initialize the modal when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new DeveloperModal();
});

// Export for potential use in other modules
export default DeveloperModal;
