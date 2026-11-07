function selectAnswer(answer, questionId) {
    const answers = document.querySelectorAll("#" + questionId + " .answer");
    answers.forEach(function (option) {
        option.classList.remove("selected");
    });
    answer.classList.add("selected");
}
function checkAnswer() {
    const questions = document.querySelectorAll(".question");
    let score = 0;
    questions.forEach(function (question) {
        const answer = question.querySelector(".selected");
        const correctChoice = question.querySelector(
            '[data-choice="' + question.dataset.answer + '"]'
        );
        if (correctChoice) {
            correctChoice.classList.add("correct");
        }
        if (answer &&/*both must be true*/ answer.dataset.choice === question.dataset.answer) {
            score++;
        }
    });
    document.getElementById("result").textContent =
        "You got " + score + " out of 4!";
}