console.log('Client side js file is loaded');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const output = document.querySelector('.output');
const message1 = document.querySelector('#message1');
const message2 = document.querySelector('#message2');
const error = document.querySelector('#error');
message1.setAttribute('style', 'display:none;');
message2.setAttribute('style', 'display:none;');
error.setAttribute('style', 'display:none;');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    error.setAttribute('style', 'display:none;');
    output.setAttribute('style', 'display:block;');
    message1.setAttribute('style', 'display:block;');
    message2.setAttribute('style', 'display:block;');
    message1.textContent = 'Loading...';
    message2.textContent = '...';

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then(data => {
            if (data.error) {
                message1.setAttribute('style', 'display:none;');
                message2.setAttribute('style', 'display:none;');
                error.setAttribute('style', 'display:block;');
                error.textContent = data.error;
            } else {
                message1.textContent = data.location;
                message2.textContent = data.forecast;
            }
        });
    });
});