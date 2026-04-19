document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Set Copyright Year
    const copyright = document.getElementById('copyright');
    if (copyright) {
        copyright.textContent = `© ${new Date().getFullYear()} Vedhamithran E | Designed for High-Performance`;
    }

    // Mobile Menu Logic
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('translate-x-0');
            if (isOpen) {
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.classList.add('translate-x-full');
                menuIcon.setAttribute('data-lucide', 'menu');
            } else {
                mobileMenu.classList.remove('translate-x-full');
                mobileMenu.classList.add('translate-x-0');
                menuIcon.setAttribute('data-lucide', 'x');
            }
            lucide.createIcons();
        });

        // Close menu on link click
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.classList.add('translate-x-full');
                menuIcon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            });
        });
    }

    // Contact Form Logic
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = `Sending... <i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i>`;
            lucide.createIcons();

            const formData = new FormData(contactForm);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                });

                const result = await response.json();
                
                if (response.status === 200) {
                    formStatus.textContent = "Message Transmitted Successfully!";
                    formStatus.className = "mt-6 text-center font-bold uppercase tracking-widest text-sm text-neon-blue";
                    contactForm.reset();
                } else {
                    formStatus.textContent = result.message || "Error transmitting message.";
                    formStatus.className = "mt-6 text-center font-bold uppercase tracking-widest text-sm text-neon-pink";
                }
            } catch (error) {
                formStatus.textContent = "Network Error. Please try again.";
                formStatus.className = "mt-6 text-center font-bold uppercase tracking-widest text-sm text-neon-pink";
            } finally {
                formStatus.classList.remove('hidden');
                submitBtn.disabled = false;
                submitBtn.innerHTML = `Transmit Message <i data-lucide="arrow-right" class="w-5 h-5"></i>`;
                lucide.createIcons();
                
                // Hide status after 5 seconds
                setTimeout(() => {
                    formStatus.classList.add('hidden');
                }, 5000);
            }
        });
    }

    // Floating Code Fragments
    const codeFragments = [
        { text: "const developer = 'Vedhamithran';", x: "10%", y: "80%", delay: 0 },
        { text: "git commit -m 'initial orbit'", x: "85%", y: "20%", delay: 2 },
        { text: "npm install dreams", x: "70%", y: "70%", delay: 4 },
        { text: "import { vision } from 'future';", x: "15%", y: "30%", delay: 6 },
        { text: "while(learning) { create(); }", x: "40%", y: "90%", delay: 8 },
        { text: "<Project />", x: "60%", y: "15%", delay: 1 },
        { text: "export default Soul;", x: "5%", y: "50%", delay: 5 }
    ];

    const container = document.getElementById('floating-code-container');
    if (container) {
        codeFragments.forEach(frag => {
            const div = document.createElement('div');
            div.className = 'floating-code';
            div.textContent = frag.text;
            div.style.left = frag.x;
            div.style.top = frag.y;
            div.style.animation = `floatUp ${10 + Math.random() * 5}s linear infinite`;
            div.style.animationDelay = `${frag.delay}s`;
            container.appendChild(div);
        });
    }
});

