const btn = document.querySelector('.button');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#main-header').style.background = '#ac3b61';
})