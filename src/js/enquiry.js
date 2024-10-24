//Contact form js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation

        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Here you can send the form data using fetch or XMLHttpRequest
        console.log('Form submitted:', { name, email, subject, message });

        fetch('https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZjMDYzNDA0MzQ1MjZmNTUzMzUxM2Ei_pc', {
            method: 'POST', // Specify the method
            headers: {
                'Content-Type': 'application/json', // Indicate the type of content
            },
            body: JSON.stringify({ name, email, subject, message }) // Convert the data to JSON
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON response if needed
        })
        .then(data => {
            console.log('Success:', data); // Handle success response
            alert('Message sent successfully!');
        })
        .catch((error) => {
            console.error('Error:', error); // Handle errors
        });
        
        // Clear the form
        form.reset();
        
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});


