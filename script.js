// Pulse Interactive Controls: Tabs, FAQ Accordion, Billing Toggle, Mobile Nav
document.addEventListener('DOMContentLoaded', () => {
    // 1. Interactive App Preview Tabs
    const tabs = document.querySelectorAll('.frame-tab');
    const panes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const targetPane = document.getElementById(`pane-${tab.dataset.tab}`);
            if (targetPane) targetPane.classList.add('active');
        });
    });

    // 2. Billing Toggle (Monthly / Annual Discount)
    const billingToggle = document.getElementById('billingToggle');
    const amounts = document.querySelectorAll('.amount');

    if (billingToggle) {
        billingToggle.addEventListener('change', () => {
            const isAnnual = billingToggle.checked;
            amounts.forEach(el => {
                const target = isAnnual ? el.dataset.annual : el.dataset.monthly;
                el.textContent = target;
            });
        });
    }

    // 3. FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            const isOpen = body.classList.contains('open');

            // Close all
            document.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('open'));
            document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));

            if (!isOpen) {
                body.classList.add('open');
                header.classList.add('active');
            }
        });
    });

    // 4. Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '64px';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = '#0a0a0c';
            navLinks.style.padding = '1.5rem';
            navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
        });
    }

    // 5. Form submission
    const heroForm = document.getElementById('heroForm');
    if (heroForm) {
        heroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = heroForm.querySelector('input');
            alert(`Thanks! An onboarding invitation has been reserved for ${input.value}.`);
            input.value = '';
        });
    }
});
