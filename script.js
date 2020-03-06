const QUESTIONS = [
    {
        question: 'Вопрос номер 1',
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
    document.querySelector('.answers').appendChild(button);
}

function setQuestion(number) {
    let q = document.querySelector('.question');
    let a = document.querySelector('.answers');
    console.log('q', q);

    q.innerHTML = QUESTIONS[number].question;

    QUESTIONS[number].answers.forEach(answer => {
        createButton(answer);
    })


}

function checkAnswer() {

}

//*******
console.log(document);
setQuestion(0);
