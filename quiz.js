let startBtn = document.getElementById("startBtn");
let menu = document.getElementById("menu");
let holder = document.getElementById("holder");
let qDisplay = document.getElementById("qDisplay");
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let choice3 = document.getElementById("choice3");
let timerDisplay = document.getElementById("timer");
let startCount = 120;

function timer() {
    let startTimer = setInterval(function() {
        startCount -= 1;
        timerDisplay.innerText = "You have " + startCount + " seconds left!"
        if (startCount === 110) {
            clearInterval(startTimer)
            menu.classList.add("show");
            holder.classList.remove("show")
            holder.classList.add("hide");
            timerDisplay.classList.add("hide")
            menu.innerText = "You failed miserably, wanna try again?"

        }
        console.log(startCount)
    }, 1000)
};

function questionShow() {}

function begin() {
    startBtn.addEventListener("click", function() {
        menu.classList.add("hide");
        holder.classList.add("show");
        timer();
        qDisplay.innerText = qObj[0].question;
        choice1.innerText = qObj[0].answers[0];
        choice2.innerText = qObj[0].answers[1];
        choice3.innerText = qObj[0].answers[2];
    });
}
begin();




//questions
let qObj = [{
        question: "Coal is to water as a lightbulb is to :",
        answers: ["Water", "Coal", "Wet Coal"],
        correct: "Wet Coal",
    },
    {
        question: "Is there a correct answer for this question?",
        answers: ["Yes", "No", "The correct answer is A"],
        correct: "Yes",
    },
    {
        question: "What is the Union Jack?",
        answers: [
            "The British Flag",
            "My name's not Jack",
            "Organized labor's tool for changing a flat tire",
        ],
        correct: "Organized labor's tool for changing a flat tire",
    },
    {
        question: "How long is a piece of string?",
        answers: ["The same shape as something beige", "Pi", "By bus"],
        correct: "The same shape as something beige",
    },
    {
        question: "If I said you had a nice personality, would you?",
        answers: ["Be flattered", "Agree", "Hold it against me"],
        correct: "Agree",
    },
    {
        question: "Phrase your response in the form of a question.",
        answers: ["Yes", "No", "Maybe"],
        correct: "No",
    },
];