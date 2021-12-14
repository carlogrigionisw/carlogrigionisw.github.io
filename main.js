window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js');
    }
}

document.querySelectorAll('button').forEach(button => {
    button.onclick = function () {
        document.body.style.backgroundColor = '#7d40f6';
        document.getElementById('central').style.backgroundColor = '#FFFFFF';
        document.getElementById('central').style.color = '#000000';
    }
})