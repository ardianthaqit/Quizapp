const quizData = [
    {
        question: 'How old is Ardijan?',
        a: '18',
        b: '20',
        c: '24',
        d: '21',
        correct: 'c'
    }, {
        question: 'What is the best programming language?',
        a: 'java',
        b: 'C++',
        c: 'python',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Hyper Markup Language',
        c: 'Htext Markup Language',
        d: 'Hypertext Markup Large',
        correct: 'a'
    }, {
        question: 'What does CSS stand for?',
        a: 'Crypto Style Sheep',
        b: 'Cascading Style Sheets',
        c: 'Casding Slow Sheets',
        d: 'Create Style Sheets',
        correct: 'b'
    }
];
const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    // currentQuestion++
}
function getSelected() {
    let answer = undefined;
    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswer(){
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();
    console.log(answer);
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correclty at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Start Again</button>`;
        }
    }
    
});

