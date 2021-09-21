const quizData = [
  {
    question: "How old is Dipo?",
    a: "10",
    b: "15",
    c: "20",
    d: "25",
    correct: "d",
  },
  {
    question: "What is the most used programming language in 2021?",
    a: "Java",
    b: "JavaScript",
    c: "Python",
    d: "Ruby",
    correct: "b",
  },
  {
    question: "Who is the president of Nigeria?",
    a: "Muhammed Buhari",
    b: "Frederick Lugard",
    c: "Rick Morty",
    d: "Buhari Musiliu",
    correct: "a",
  },
  {
    question: "What is the meaning of HTML?",
    a: "Cascading Style Sheet",
    b: "Hypertext Markup Language",
    c: "JavaScript Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
  {
    question: "Whay year was JavaScript Launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the Above",
    correct: "b",
  },
];

const quiz = document.querySelector("#quiz");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector("#submit");

const questionEl = document.querySelector("#question");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.textContent = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  const answersEls = document.querySelectorAll(".answer");
  let answer = null;

  answersEls.forEach((answerEl) => {
    if (answerEl.checked === true) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  const answersEls = document.querySelectorAll(".answer");

  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    /*if there is an answer, increase currrentQuiz and do the rest
    But befor that, lets check if the answer selected is equal to the correct option
    */

    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      //   TODO: show result
      quiz.innerHTML = `<h2>You scored ${score} out of ${quizData.length} questions.</h2>
      <button onClick="location.reload()">Reload</button>
      `;
    }
  }
});
