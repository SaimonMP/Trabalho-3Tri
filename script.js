const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');

let currentCard = 0;

const cards = [
    { question: 'Qual é 7 × 6?', correct: '42', options: ['42', '48', '36', '54'] },
    { question: 'Qual é 8 × 9?', correct: '72', options: ['64', '72', '81', '56'] },
    { question: 'Qual é 56 ÷ 7?', correct: '8', options: ['6', '7', '8', '9'] },
    { question: 'Qual é 81 ÷ 9?', correct: '9', options: ['8', '9', '10', '11'] },
    { question: 'Qual é 12 × 12?', correct: '144', options: ['120', '144', '160', '100'] },
    { question: 'Qual é 100 ÷ 4?', correct: '25', options: ['20', '25', '30', '35'] },
];

function showCard() {
    const current = cards[currentCard];
    questionEl.innerText = current.question;
    optionsEl.innerHTML = '';
    feedbackEl.innerText = '';
    feedbackEl.style.opacity = 0;

    current.options.forEach(option => {
        const optionBtn = document.createElement('div');
        optionBtn.classList.add('option');
        optionBtn.innerText = option;
        optionBtn.addEventListener('click', () => checkAnswer(option));
        optionsEl.appendChild(optionBtn);
    });
}

function checkAnswer(selected) {
    const correctAnswer = cards[currentCard].correct;

    if (selected === correctAnswer) {
        feedbackEl.innerText = 'Você acertou! 🎉';
        feedbackEl.classList.add('correct');
    } else {
        feedbackEl.innerText = `Você errou! A resposta correta é ${correctAnswer}.`;
        feedbackEl.classList.add('wrong');
    }
    feedbackEl.style.opacity = 1;

    // Desabilitar as opções após a resposta
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
}

nextBtn.addEventListener('click', () => {
    currentCard = (currentCard + 1) % cards.length;
    showCard();
});

// Inicializa o primeiro cartão
showCard();
