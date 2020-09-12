//questions

let qObj = [{
        question: "Coal is to water as a lightbulb is to :",
        answers: ["Water", "Coal", "Wet Coal"],
        correct: "Wet Coal"
    },
    {
        question: "Is there a correct answer for this question?",
        answers: ["Yes", "No", "The correct answer is A"],
        correct: "Yes"
    },
    {
        question: "What is the Union Jack?",
        answers: ["The British Flag", "My name's not Jack", "Organized labor's tool for changing a flat tire"],
        correct: "Organized labor's tool for changing a flat tire"
    },
    {
        question: "How long is a piece of string?",
        answers: ["The same shape as something beige", "Pi", "By bus"],
        correct: "The same shape as something beige"
    },
    {
        question: "If I said you had a nice personality, would you?",
        answers: ["Be flattered", "Agree", "Hold it against me"],
        correct: "Agree"
    },
    {
        question: "Phrase your response in the form of a question.",
        answers: ["Yes", "No", "Maybe"],
        correct: "No"
    }
];

function looper(qObj) {
    console.log(qObj.length)
        // console.log(qObj.question)

    for (let i = 0; i < qObj.length; i++) {
        console.log(qObj[i].question)
        console.log(qObj[i].answers)
        console.log(qObj[i].correct)

    }

}

looper(qObj);