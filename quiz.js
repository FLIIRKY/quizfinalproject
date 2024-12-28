let score = 0;

function checkAnswer(button, answer) {
    const resultDiv = button.parentElement.querySelector('.result');

    if (answer === 'correct') {
        score++;
        resultDiv.textContent = "Correct!";
    } else {
        resultDiv.textContent = "Wrong!";
    }

    document.getElementById('score').textContent = "Points: " + score;

    const buttons = button.parentElement.querySelectorAll('.answer');
    buttons.forEach(btn => btn.disabled = true);
}