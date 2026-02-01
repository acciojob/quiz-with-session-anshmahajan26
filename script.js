// REQUIRED GLOBAL VARIABLES (MUST be before renderQuestions runs)
const questionsElement = document.getElementById("questions");
const submitBtn = document.getElementById("submit");
const scoreDiv = document.getElementById("score");

// Load progress from sessionStorage
let userAnswers = JSON.parse(sessionStorage.getItem("progress")) || {};

// Restore score if present
const savedScore = localStorage.getItem("score");
if (savedScore !== null) {
  scoreDiv.innerText = `Your score is ${savedScore} out of 5.`;
}

// DO NOT REMOVE — provided rendering logic
renderQuestions();

// Save progress on option select
questionsElement.addEventListener("change", (e) => {
  if (e.target.type === "radio") {
    const index = e.target.name.split("-")[1];
    userAnswers[index] = e.target.value;
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
