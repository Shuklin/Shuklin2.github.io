const QUESTIONS = [
    {
        question: `Уважаемая Галина Романовна! <br>
            Чтобы получить свой подарок, Вам необходимо пройти небольшую викторину и правильно ответить на все вопросы.<br>
            Ну что, начинаем?`,
        answers: [
            {isCorrect: true, text: 'Да, приступить!'},
            {isCorrect: false, text: 'Нет, не хочу!'},
        ]
    },
    {
        question: 'Какова дата рождения Вашего любимого человека?',
        answers: [
            {isCorrect: false, text: '19 февраля'},
            {isCorrect: false, text: '23 июля'},
            {isCorrect: true, text: '26 апреля'},
            {isCorrect: false, text: '8 декабря'},
        ]
    },
    {
        question: 'Галина, какая часть Вашего лица больше всего нравится Вашему молодому человеку?',
        answers: [
            {isCorrect: false, text: 'Щечки'},
            {isCorrect: true, text: 'Улыбка'},
            {isCorrect: false, text: 'Носик'},
            {isCorrect: false, text: 'Глаза'},
        ]
    },
    {
        question: 'А Вам в нем?',
        answers: [
            {isCorrect: false, text: 'Щечки'},
            {isCorrect: false, text: 'Улыбка'},
            {isCorrect: false, text: 'Носик'},
            {isCorrect: true, text: 'Глаза'},
        ]
    },
    {
        question: 'И какого же цвета эти глаза?',
        answers: [
            {isCorrect: false, text: 'Голубые'},
            {isCorrect: true, text: 'Серые'},
            {isCorrect: false, text: 'Зеленые'},
            {isCorrect: true, text: 'Влюбленные'},
        ]
    },
    {
        question: 'Когда Вы первый раз поцеловались?',
        answers: [
            {isCorrect: false, text: '7 января'},
            {isCorrect: false, text: '6 января'},
            {isCorrect: true, text: '5 января'},
            {isCorrect: false, text: '4 января'},
        ]
    },
    {
        question: 'А сможете назвать номер телефона Вашего любимого?',
        answers: [
            {isCorrect: false, text: '066 000 12 95'},
            {isCorrect: false, text: '095 054 73 56'},
            {isCorrect: true, text: '050 075 35 43'},
            {isCorrect: false, text: '095 606 42 55'},
        ]
    },
    {
        question: 'Вопрос попроще - отчество его родителей:',
        answers: [
            {isCorrect: true, text: 'Николаевичи'},
            {isCorrect: false, text: 'Игоревичи'},
            {isCorrect: false, text: 'Олеговичи'},
            {isCorrect: false, text: 'Алексеевичи'},
        ]
    },
    {
        question: 'И еще проще - хотите обнимашки?:)',
        answers: [
            {isCorrect: true, text: 'Конечно хочу!'},
            {isCorrect: true, text: 'Очень сильно!'},
            {isCorrect: true, text: 'Да!'},
            {isCorrect: true, text: 'Еще спрашиваешь!?)'},
        ]
    },
    {
        question: 'Вы любите своего молодого человека?',
        answers: [
            {isCorrect: true, text: 'ДА!'},
            {isCorrect: true, text: 'ДА!'},
            {isCorrect: true, text: 'ДА!'},
            {isCorrect: true, text: 'ДА!'},
        ]
    },
    {
        question: `Вы хотите каждый день быть рядом с ним? <br>
            Чтобы он Вас радовал, согревал, целовал, обнимал, защищал, веселил и удивлял?`,
        answers: [
            {isCorrect: true, text: 'ДА!'},
            {isCorrect: true, text: 'ДА!'},
            {isCorrect: true, text: 'ДА!'},
            {isCorrect: true, text: 'ДА!'},
        ]
    },
    {
        question: `Вы прошли тест на совместимость и показали, что идеально подходите друг другу. <br>
            И Вы заслужили быть самой счастливой...`,
        answers: []
    },
];

let currentQuestion = 0;

function createButton(answer, number) {
    let button = document.createElement('BUTTON');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    button.classList.add('btn-primary');

    if (answer.isCorrect)
        button.setAttribute('data-is-correct', 'true');

    button.addEventListener('click', element => {
        let isCorrectClicked = element.target.getAttribute('data-is-correct');
        if (isCorrectClicked) {
            currentQuestion = currentQuestion + 1;
            setQuestion(currentQuestion);
        } else {
            element.target.classList.remove('btn-primary');
            element.target.classList.add('btn-danger');
        }
    });

    document.querySelector('.answers').appendChild(button);
}

function setQuestion(number) {
    let q = document.querySelector('.question');
    q.innerHTML = QUESTIONS[number].question;

    let a = document.querySelector('.answers');
    a.innerHTML = '';
    QUESTIONS[number].answers.forEach((answer, i) => {
        createButton(answer, i);
    })
}

setQuestion(currentQuestion);
