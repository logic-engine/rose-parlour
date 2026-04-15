    // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('nav-scrolled');
            } else {
                nav.classList.remove('nav-scrolled');
            }
        });

        // Mobile menu toggle
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const closeMenuBtn = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');

        function toggleMenu() {
            mobileMenu.classList.toggle('hidden');
        }

        mobileBtn.addEventListener('click', toggleMenu);
        closeMenuBtn.addEventListener('click', toggleMenu);

        // Form handling
        const bookingForm = document.getElementById('booking-form');
        const successMsg = document.getElementById('form-success');

        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            bookingForm.classList.add('opacity-50');
            bookingForm.querySelector('button').disabled = true;
            
            // Simulating API call
            setTimeout(() => {
                bookingForm.reset();
                bookingForm.classList.add('hidden');
                successMsg.classList.remove('hidden');
            }, 1500);
        });

        // Smooth reveal animations on scroll (simple observer)
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section > div').forEach(el => {
            el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
            observer.observe(el);
        });
