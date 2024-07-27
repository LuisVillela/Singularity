document.addEventListener('DOMContentLoaded', () => {
    loadView('home.html');
});

function loadView(view) {
    fetch(view)
        .then(response => response.text())
        .then(html => {
            document.getElementById('app').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading the view:', error);
        });
}
