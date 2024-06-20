document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const spinner = document.createElement('div');
    spinner.id = 'loading-spinner';
    spinner.innerText = 'Wysyłanie...';
    document.body.appendChild(spinner);
    spinner.style.display = 'none';

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const { name, email, message } = Object.fromEntries(new FormData(form).entries());

        if (!validateEmail(email)) {
            alert('Podaj poprawny adres email.');
            return;
        }

        if (message.length < 10) {
            alert('Wiadomość powinna zawierać co najmniej 10 znaków.');
            return;
        }

        toggleLoadingSpinner(true);

        fetch('https://yourserver.com/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        })
        .then(response => response.json())
        .then(data => {
            toggleLoadingSpinner(false);
            if (data.success) {
                alert(`Dziękujemy za kontakt, ${name}!`);
                form.reset();
                localStorage.removeItem('contact-form');
            } else {
                alert('Adres URL jest przykładowy i musi zostać zastąpiony rzeczywistym adresem URL serwera.');
            }
        })
        .catch(() => {
            toggleLoadingSpinner(false);
            alert('Adres URL jest przykładowy i musi zostać zastąpiony rzeczywistym adresem URL serwera.');
        });
    });

    form.addEventListener('input', function() {
        const formData = Object.fromEntries(new FormData(form).entries());
        localStorage.setItem('contact-form', JSON.stringify(formData));
    });

    const savedFormData = JSON.parse(localStorage.getItem('contact-form'));
    if (savedFormData) {
        Object.entries(savedFormData).forEach(([key, value]) => {
            form[key].value = value;
        });
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
    }

    function toggleLoadingSpinner(show) {
        spinner.style.display = show ? 'block' : 'none';
    }
});
