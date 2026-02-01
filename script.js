const questionsElement = document.getElementById("questions");
const submitBtn = document.getElementById("submit");
const scoreDiv = document.getElementById("score");

// Load progress from sessionStorage or initialize
let userAnswers = JSON.parse(sessionStorage.getItem("progress")) || {};

// Render questions (already provided, just uses userAnswers)
renderQuestions();

// Restore score if exists
const savedScore = localStorage.getItem("score");
if (savedScore !== null) {
  scoreDiv.innerText = `Your score is ${savedScore} out of 5.`;
}

// Save answer on selection
questionsElement.addEventListener("change", (e) => {
  if (e.target.type === "radio") {
    const questionIndex = e.target.name.split("-")[1];
    userAnswers[questionIndex] = e.target.value;
    sessionStorage.setItem("progress", JSON.stringify(userAnswers));
  }
});

// Submit quiz
submitBtn.addEventListener("click", () => {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) {
      score++;
    }
  }

  scoreDiv.innerText = `Your score is ${score} out of 5.`;
  localStorage.setItem("score", score);
});
