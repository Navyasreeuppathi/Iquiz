const questions = [
    { question: "What is the capital of India?", options: ["Mumbai", "Chennai", "New Delhi", "Banglore"], answer: "New Delhi" },
    { question: "What is 5 - 3?", options: ["2", "7", "4", "10"], answer: "2" },
    { question: "Which is chemical formula of Sodium Chloride?", options: ["Nacl", "Kcl", "Licl", "Cscl"], answer: "Nacl" },
    { question: "Who wrote 'Harry Potter'?", options: ["J.R.R. Tolkien", "J.K. Rowling", "Agatha Christie", "Dan Brown"], answer: "J.K. Rowling" },
    { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "NaCl"], answer: "H2O" }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    let optionsHtml = "";
    q.options.forEach(opt => {
        optionsHtml += `<li onclick="selectAnswer(this)" data-answer="${opt}">${opt}</li>`;
    });
    document.getElementById("options").innerHTML = optionsHtml;
}

function selectAnswer(option) {
    const selectedAnswer = option.getAttribute("data-answer");
    const correctAnswer = questions[currentQuestion].answer;
    
    if (selectedAnswer === correctAnswer) {
        option.style.background = "#28a745";
        option.style.color = "white";
        score++; // Increment score for correct answer
    } else {
        option.style.background = "#dc3545";
        option.style.color = "white";
    }
    
    document.querySelectorAll(".options li").forEach(li => {
        li.onclick = null;
    });
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-box").style.display = "none";
        document.getElementById("result").innerText = `Quiz Over! Your score is ${score}/${questions.length}`;
    }
}

loadQuestion();
