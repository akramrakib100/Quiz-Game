let currentQuestionIndex = 0;
let score = 0;

// Mock data (in a real project, fetch this from the database using an API)
const questions = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: 2 },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: 1 },
    { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Jane Austen"], answer: 0 }
];

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next-button");

    // Clear previous options
    optionsElement.innerHTML = "";
    nextButton.disabled = true;

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectOption(index);
        optionsElement.appendChild(button);
    });
}

function selectOption(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const nextButton = document.getElementById("next-button");

    if (selectedIndex === currentQuestion.answer) {
        score++;
        document.getElementById("score").textContent = `Score: ${score}`;
    }

    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML = "<p>Congratulations! You completed the quiz.</p>";
        document.getElementById("score").textContent += " (Final)";
    }
}

// Initialize the quiz
loadQuestion();
