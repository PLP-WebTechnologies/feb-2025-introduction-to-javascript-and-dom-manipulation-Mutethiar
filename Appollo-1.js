// JavaScript for modal functionality
        const joinBtn = document.getElementById('join-btn');
        const modal = document.getElementById('modal');
        const modalOverlay = document.getElementById('modal-overlay');
        const closeBtn = document.getElementById('close-btn');
        const joinForm = document.getElementById('join-form');

        joinBtn.addEventListener('click', () => {
            modal.style.display = 'block';
            modalOverlay.style.display = 'block';
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            modalOverlay.style.display = 'none';
        });

        modalOverlay.addEventListener('click', () => {
            modal.style.display = 'none';
            modalOverlay.style.display = 'none';
        });

        joinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for joining our car club!');
            modal.style.display = 'none';
            modalOverlay.style.display = 'none';
            joinForm.reset();
        });

// Add event listeners to navigation links to open new windows
document.getElementById('home-link').addEventListener('click', () => {
    window.open('home.html', '_blank');
});

document.getElementById('events-link').addEventListener('click', () => {
    window.open('events.html', '_blank');
});

document.getElementById('gallery-link').addEventListener('click', () => {
    window.open('gallery.html', '_blank');
});

document.getElementById('contact-link').addEventListener('click', () => {
    window.open('contact.html', '_blank');
});

// Add event listener to "Join Us" button
document.getElementById('join-btn').addEventListener('click', () => {
    alert('Your request has been sent!');
});