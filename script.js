const QUESTIONS = [
    {
        question: 'Вопрос номер 2',
        answers: [
            {isCorrect: true, text: 'Правильный вариант ответа'},
            {isCorrect: false, text: 'Не правильный вариант ответа'},
            {isCorrect: false, text: 'Левый вариант ответа'},
        ]
    }
];

function createButton(answer) {
    let button = document.createElement('BUTTON');
    button.innerHTML = answer.text;
    if (answer.isCorrect)
        button.setAttribute('data-isCorrect', 'true');
    answer.addEventListener('click', element => {
        console.log('clicked', element);
    });
    document.querySelector('.answers').appendChild(button);
}

function setQuestion(number) {
    let q = document.querySelector('.question');
    q.innerHTML = QUESTIONS[number].question;

    let a = document.querySelector('.answers');
    a.innerHTML = '';
    QUESTIONS[number].answers.forEach(answer => {
        createButton(answer);
    })
}

function checkAnswer() {

}

//*************************************************************
//*************************************************************
//*************************************************************

setQuestion(0);
