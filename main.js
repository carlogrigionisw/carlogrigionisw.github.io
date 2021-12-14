window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js');
    }
}

document.querySelectorAll('button').forEach(button => {
    button.onclick = function () {
        document.body.style.backgroundColor = 'orange'
    }
})