document.addEventListener('DOMContentLoaded', () => {

    // Mobile menu setup - making the site responsive
    // Added this after testing on my phone
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // --- 2. NAVBAR SHADOW ON SCROLL ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });

    // Adding some nice fade-in effects when scrolling
    // Makes the page feel more dynamic and modern
    const revealElements = document.querySelectorAll('section, .project-card, .about-content');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    // --- 4. ACTIVE NAVIGATION LINK ON SCROLL ---
    const sections = document.querySelectorAll('section[id]');
    const navLi = document.querySelectorAll('#navbar .nav-links li a');

    const activeNavObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.id;
                navLi.forEach(link => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    }, { rootMargin: '-30% 0px -70% 0px' }); // Activates when section is in the middle 40% of the viewport

    sections.forEach(sec => activeNavObserver.observe(sec));
    
    // --- 5. "BACK TO TOP" BUTTON ---
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'inline-block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- 6. PROJECT FILTERING ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Set active state for button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            // Show/hide project cards based on filter
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });
});

// script.js (add this to your existing content)

// IMPORTANT: This URL will be YOUR Render Backend URL.
// You will get this URL after you deploy your backend in Part 4.
// For now, you can leave it as a placeholder.
// Example: const BACKEND_URL = 'https://my-newsletter-backend-xxxx.onrender.com';
const BACKEND_URL = 'https://ganadhik-github-io-backend.onrender.com'; // <--- REPLACE THIS LATER!

const contactForm = document.getElementById('contactForm');
const senderNameInput = document.getElementById('senderName');
const senderEmailInput = document.getElementById('senderEmail');
const senderMessageInput = document.getElementById('senderMessage');
const formStatusDiv = document.getElementById('formStatus');

if (contactForm) { // Ensure the form exists before attaching listener
    let isSubmitting = false; // Prevent multiple submissions

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission (page reload)

        // Prevent multiple submissions
        if (isSubmitting) {
            return;
        }

        isSubmitting = true;
        formStatusDiv.style.display = 'block'; // Make status div visible
        formStatusDiv.className = 'message-status'; // Reset classes
        formStatusDiv.textContent = 'Sending your message...'; // Initial sending message

        // Disable submit button
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
        }

        const name = senderNameInput.value.trim();
        const email = senderEmailInput.value.trim();
        const message = senderMessageInput.value.trim();

        // Comprehensive client-side validation
        if (!name || !email || !message) {
            formStatusDiv.className = 'message-status error';
            formStatusDiv.textContent = 'Please fill in all fields.';
            return;
        }

        // Length validation
        if (name.length < 2 || name.length > 100) {
            formStatusDiv.className = 'message-status error';
            formStatusDiv.textContent = 'Name must be between 2 and 100 characters.';
            return;
        }

        if (message.length < 10 || message.length > 5000) {
            formStatusDiv.className = 'message-status error';
            formStatusDiv.textContent = 'Message must be between 10 and 5000 characters.';
            return;
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email) || email.length > 254) {
            formStatusDiv.className = 'message-status error';
            formStatusDiv.textContent = 'Please enter a valid email address.';
            return;
        }

        // Name format validation (letters, spaces, hyphens, apostrophes only)
        const nameRegex = /^[a-zA-Z\s\-'.]+$/;
        if (!nameRegex.test(name)) {
            formStatusDiv.className = 'message-status error';
            formStatusDiv.textContent = 'Name can only contain letters, spaces, hyphens, and apostrophes.';
            return;
        }

        // Check for suspicious patterns (basic spam detection)
        const suspiciousPatterns = /<script|javascript:|onclick|onerror/gi;
        if (suspiciousPatterns.test(name) || suspiciousPatterns.test(message)) {
            formStatusDiv.className = 'message-status error';
            formStatusDiv.textContent = 'Message contains prohibited content.';
            return;
        }

        try {
            // Add timeout to prevent hanging requests
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

            const response = await fetch(`${BACKEND_URL}/api/send-message`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            const result = await response.json();

            if (response.ok) { // Status code 200-299
                formStatusDiv.className = 'message-status success';
                formStatusDiv.textContent = result.message;
                // Clear the form fields after successful submission
                senderNameInput.value = '';
                senderEmailInput.value = '';
                senderMessageInput.value = '';
            } else { // Status code 4xx or 5xx
                formStatusDiv.className = 'message-status error';
                formStatusDiv.textContent = result.message || 'An unknown error occurred.';
            }
        } catch (error) {
            console.error('Error sending message to backend:', error);
            formStatusDiv.className = 'message-status error';
            if (error.name === 'AbortError') {
                formStatusDiv.textContent = 'Request timed out. Please try again.';
            } else {
                formStatusDiv.textContent = 'Network error or problem connecting to backend. Please try again.';
            }
        } finally {
            // Re-enable submission
            isSubmitting = false;
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }
        }
    });
}

// Your existing script.js code (like for hamburger menu, project filters, etc.) should remain above or below this new code.