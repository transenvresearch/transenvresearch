// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
      });
    }
    
    // Publication filters (only on publications page)
    if (document.getElementById('year-filter')) {
      const filters = document.querySelectorAll('#year-filter, #topic-filter, #type-filter');
      const publications = document.querySelectorAll('.publication-item');
      
      filters.forEach(filter => {
        filter.addEventListener('change', applyFilters);
      });
      
      function applyFilters() {
        const yearValue = document.getElementById('year-filter').value;
        const topicValue = document.getElementById('topic-filter').value;
        const typeValue = document.getElementById('type-filter').value;
        
        publications.forEach(pub => {
          const pubYear = pub.querySelector('.pub-year').textContent;
          const pubTopics = Array.from(pub.querySelectorAll('.tag')).map(tag => tag.classList[1]);
          const pubTypes = Array.from(pub.querySelectorAll('.tag')).map(tag => tag.classList[1]);
          
          const yearMatch = yearValue === 'all' || pubYear === yearValue;
          const topicMatch = topicValue === 'all' || pubTopics.includes(topicValue);
          const typeMatch = typeValue === 'all' || pubTypes.includes(typeValue);
          
          if (yearMatch && topicMatch && typeMatch) {
            pub.style.display = '';
          } else {
            pub.style.display = 'none';
          }
        });
      }
    }
    
    // Scroll to top button
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
      window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
          scrollTopBtn.classList.add('show');
        } else {
          scrollTopBtn.classList.remove('show');
        }
      });
      
      scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
    
    // Form validation
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        let isValid = true;
        const requiredFields = contactForm.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
          } else {
            field.classList.remove('error');
          }
        });
        
        const emailField = contactForm.querySelector('input[type="email"]');
        if (emailField && emailField.value) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(emailField.value)) {
            isValid = false;
            emailField.classList.add('error');
          }
        }
        
        if (!isValid) {
          e.preventDefault();
          alert('Please fill in all required fields correctly.');
        }
      });
    }
  });