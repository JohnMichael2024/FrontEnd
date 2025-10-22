window.onload = () => {
    // Apply dark mode state when page loads
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-theme');
    }
};

// Select elements
const togglechange = document.getElementById('togglechange');
const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('.navlist');


// Dark mode toggle
togglechange.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }

    //setTimeout(() => {
        //togglechange.classList.toggle('active');
    //},1500);
});

hamburger.addEventListener('click', () => {
    if (navlist.style.display === 'flex') {
        navlist.style.display = 'none';
    } else {
        navlist.style.display = 'flex';
    }   
});


const currentDate = document.getElementById('currentDate');
currentDate.textContent = new Date().getFullYear();