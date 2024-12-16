document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    if (!this.checkValidity()) {
        this.classList.add('was-validated');
    } else {
        alert('Form submitted successfully!');
    }
});

// fetch API to get data from json file
fetch('news.json')
    .then(response => response.json())
    .then(data => {
        const newsList = document.getElementById('newsList');
        data.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('my-2', 'bg-secondary','p-2', 'text-light');
            li.textContent = item;
            newsList.appendChild(li);
        });
    });
    const elements = document.querySelectorAll('.animate');

    // intersection API to determine if an element is in the viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });
    
    elements.forEach(el => observer.observe(el));

    // code snippet to toggle dark and light mode
    const toggleDarkMode = document.getElementById('darkModeToggle');

    toggleDarkMode.onclick = () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        if(isDarkMode){
            document.getElementById('darkModeText').textContent = "Light Mode";
        } else {
            document.getElementById('darkModeText').textContent = "Dark Mode";
        }
    };
    
    // Load dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeText').textContent = "Light Mode";
    } else {
        document.getElementById('darkModeText').textContent = "Dark Mode";
    }
        