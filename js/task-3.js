const input = document.querySelector('#name-input')

const span = document.querySelector('#name-output')

input.addEventListener('input', (event) => {
    const username = event.target.value.trim();

    if (username === '') {
        span.textContent = 'Anonymous';
    } else {
        span.textContent = username;
    }
})
