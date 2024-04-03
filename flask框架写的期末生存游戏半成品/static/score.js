let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;

document.getElementById('incrementScore').addEventListener('click', function() {
    score++;
    localStorage.setItem('score', score);
    document.getElementById('score').innerText = '当前得分: ' + score;
});