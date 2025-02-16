var time;
const quest = document.querySelector("#qnode");
const btn = document.querySelector("#submit");
var timer = document.querySelector("#timer");
const oldquest = document.querySelector("#qu");
let index = 0;
let correctAnswers = 0;
const bottom = document.querySelector(".base");
const heading = document.createElement("h1");
heading.textContent = "Question appears here:";
quest.appendChild(heading);

const arr = [
  {
    question: "What is DeepSeek known for?",
    option1: "A new AI chatbot",
    option2: "A programming language",
    option3: "A database system",
    option4: "An encryption protocol",
    answer: "option1",
  },
  {
    question:
      "Which runtime environment is designed to run JavaScript outside the browser and is built on Rust?",
    option1: "Node.js",
    option2: "Deno",
    option3: "Bun",
    option4: "Go",
    answer: "option2",
  },
  {
    question: "Which company developed the ChatGPT model?",
    option1: "Google",
    option2: "Meta",
    option3: "OpenAI",
    option4: "Microsoft",
    answer: "option3",
  },
  {
    question: "Which AI model is optimized for long-context understanding?",
    option1: "GPT-3",
    option2: "LLaMA 2",
    option3: "Claude 2",
    option4: "GPT-4 Turbo",
    answer: "option4",
  },
  {
    question:
      "Which technology is used for decentralized applications (dApps)?",
    option1: "Blockchain",
    option2: "GraphQL",
    option3: "REST API",
    option4: "Kafka",
    answer: "option1",
  },
  {
    question: "What is the main advantage of Rust over C++?",
    option1: "Garbage collection",
    option2: "Memory safety without garbage collection",
    option3: "Interpreted execution",
    option4: "Slower compilation",
    answer: "option2",
  },
  {
    question: "Which company developed the Tensor Processing Unit (TPU)?",
    option1: "NVIDIA",
    option2: "AMD",
    option3: "Google",
    option4: "Intel",
    answer: "option3",
  },
  {
    question: "What is the purpose of WebAssembly (WASM)?",
    option1: "To replace JavaScript",
    option2: "To run high-performance code in browsers",
    option3: "To create AI models",
    option4: "To improve network security",
    answer: "option2",
  },
  {
    question:
      "Which cloud provider developed the Firecracker microVM technology?",
    option1: "Google Cloud",
    option2: "Microsoft Azure",
    option3: "AWS",
    option4: "IBM Cloud",
    answer: "option3",
  },
  {
    question: "What does the term 'edge computing' refer to?",
    option1: "Processing data closer to the source",
    option2: "Using quantum computers",
    option3: "Enhancing database transactions",
    option4: "A method of securing APIs",
    answer: "option1",
  },
];

(function time() {
  var sec = 0;
  var sec1 = 0;
  var min1 = 0;
  time = setInterval(() => {
    timer.innerHTML = `${min1}:${sec1}${sec}`;
    sec++;
    if (sec === 10) {
      sec1++;
      sec = 0;
    }
    if (sec1 === 6) {
      min1++;
      sec = 0;
      sec1 = 0;
    }
    if (min1 === 10 && sec === 2) {
      evaluateQuiz();
      timer.innerHTML = "";
      timer.remove();
      btn.remove();
      bottom.remove();
    }
  }, 1000);
})();

function displayQuestion(index) {
  quest.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.textContent = `Question #${index + 1}`;

  const questionText = document.createElement("h1");
  questionText.textContent = arr[index].question;
  const form = document.createElement("form");

  for (let i = 1; i <= 4; i++) {
    const option = document.createElement("input");
    option.type = "radio";
    option.id = `option${i}`;
    option.name = "option";
    option.value = `option${i}`;

    const label = document.createElement("label");
    label.htmlFor = `option${i}`;
    label.textContent = arr[index][`option${i}`];

    form.appendChild(option);
    form.appendChild(label);
    form.appendChild(document.createElement("br"));
  }

  quest.appendChild(h1);
  quest.appendChild(questionText);
  quest.appendChild(form);
}

displayQuestion(index);

btn.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption && selectedOption.value === arr[index].answer) {
    correctAnswers++;
  }
  index++;
  if (index < arr.length) {
    displayQuestion(index);
  } else {
    evaluateQuiz();
  }
});

function evaluateQuiz() {
  quest.innerHTML = "";
  if (correctAnswers === arr.length) {
    quest.innerHTML =
      '<img src="./img/apple.png" width="500px" height="500px"/><br><br><h1>Congratulations! You passed! your answer lies in this apple!</h1>';
  } else {
    quest.innerHTML =
      '<img src="./img/failed.jpeg" width="500px" height="500px"/><br><br><h1>Failed! Please try again.</h1>';
    correctAnswers = 0;
    index = 0;
    btn.innerHTML = "Retry";
    btn.addEventListener("click", () => {
      displayQuestion(index);
    });
  }
}
