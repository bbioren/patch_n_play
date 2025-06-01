// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handlers
document.getElementById('materials-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const successMsg = document.getElementById('materials-success');
    successMsg.style.display = 'block';
    this.reset();
    setTimeout(() => {
        successMsg.style.display = 'none';
    }, 5000);
});

document.getElementById('report-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const successMsg = document.getElementById('report-success');
    successMsg.style.display = 'block';
    this.reset();
    setTimeout(() => {
        successMsg.style.display = 'none';
    }, 5000);
});

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(30, 60, 114, 0.95)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.1)';
    }
});

// PDF download info with actual content details
function downloadGuide() {
    const link = document.createElement('a');
    link.href = 'assets/net_fixing_guide.pdf';  // path to your PDF
    link.download = 'PatchPlay_net_fixing_guide.pdf';     // filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Add entrance animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.mission-card, .form-card').forEach(el => {
    observer.observe(el);
});