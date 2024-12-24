
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2 
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Newton", "Einstein", "Galileo", "Tesla"],
        correct: 1 
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Mars"],
        correct: 1 
    }
];

let currentQuestionIndex = 0;
let score = 0;


function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("question-text").innerText = currentQuestion.question;
    document.getElementById("label-a").innerText = currentQuestion.options[0];
    document.getElementById("label-b").innerText = currentQuestion.options[1];
    document.getElementById("label-c").innerText = currentQuestion.options[2];
    document.getElementById("label-d").innerText = currentQuestion.options[3];
}


function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        const selectedOption = selectedAnswer.id.split('-')[1]; 
        const correctOption = quizData[currentQuestionIndex].correct;

        if (selectedOption === String.fromCharCode(97 + correctOption)) { 
            score++;
        }
    }
}


function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("score").innerText = `You scored ${score} out of ${quizData.length}`;
}


document.getElementById("next-btn").addEventListener("click", function () {
    checkAnswer();

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }

    
    document.querySelectorAll('input[name="answer"]').forEach(radio => {
        radio.checked = false;
    });
});


document.getElementById("retry-btn").addEventListener("click", function () {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result-container").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    loadQuestion();
});


loadQuestion();
