const quest = document.querySelector("#qnode");
const btn = document.querySelector("#submit");
const oldquest = document.querySelector("#qu");
let index = 0;
const bottom = document.querySelector(".base");
const heading = document.createElement("h1");
heading.textContent = "Question appear here:";
quest.appendChild(heading);
const arr = [
  {
    question: "What did the Russo-Japanese War signify?",
    option1: " The rise of Japan as a global power",
    option2: "The obsolescence of naval battles",
    option3: "The rise of Russia as a global power",
    option4: "The power of Dr. Russo",
  },
  {
    question: "Easiest way to separate pasta and water?",
    option1: "Pour it through a strainer",
    option2: "Use a fork (or something like that)",
    option3: "Drink Water",
    option4: "ThunderLion",
  },
  {
    question: "What did the Russo-Japanese War signify?",
    option1: " The rise of Japan as a global power",
    option2: "The obsolescence of naval battles",
    option3: "The rise of Russia as a global power",
    option4: "The power of Dr. Russo",
  },
  {
    question: "What did the Russo-Japanese War signify?",
    option1: " The rise of Japan as a global power",
    option2: "The obsolescence of naval battles",
    option3: "The rise of Russia as a global power",
    option4: "The power of Dr. Russo",
  },
  {
    question: "What did the Russo-Japanese War signify?",
    option1: " The rise of Japan as a global power",
    option2: "The obsolescence of naval battles",
    option3: "The rise of Russia as a global power",
    option4: "The power of Dr. Russo",
  },
  {
    question: "What did the Russo-Japanese War signify?",
    option1: " The rise of Japan as a global power",
    option2: "The obsolescence of naval battles",
    option3: "The rise of Russia as a global power",
    option4: "The power of Dr. Russo",
  },
  {
    question: "What did the Russo-Japanese War signify?",
    option1: " The rise of Japan as a global power",
    option2: "The obsolescence of naval battles",
    option3: "The rise of Russia as a global power",
    option4: "The power of Dr. Russo",
  },
  {
    question: "What did the Russo-Japanese War signify?",
    option1: " The rise of Japan as a global power",
    option2: "The obsolescence of naval battles",
    option3: "The rise of Russia as a global power",
    option4: "The power of Dr. Russo",
  },
  {
    question: "What did the Russo-Japanese War signify?",
    option1: " The rise of Japan as a global power",
    option2: "The obsolescence of naval battles",
    option3: "The rise of Russia as a global power",
    option4: "The power of Dr. Russo",
  },
  {
    question: "What did the Russo-Japanese War signify?",
    option1: " The rise of Japan as a global power",
    option2: "The obsolescence of naval battles",
    option3: "The rise of Russia as a global power",
    option4: "The power of Dr. Russo",
  },
];
function displayQuestion(index) {
  quest.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.textContent = `Question #${index + 1}`;

  const questionText = document.createElement("h1");
  questionText.textContent = arr[index].question;
  const form = document.createElement("form");

  for (let i = 1; i <= 4; i++) {
    const option = document.createElement("input");
    option.type = "checkbox";
    option.id = `option${i}`;
    option.name = `option${i}`;
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
  index++;
  if (index < arr.length) {
    displayQuestion(index);
  } else {
    quest.innerHTML = "<h1>Quiz Completed!</h1>";
  }
  btn.classList.add("active");
  setTimeout(() => {
    btn.classList.remove("active");
  }, 150);
});

//BUG: some issue with bottom gotta check it out...
////TODO: send data from form to submit_form file and from there to mongodb(considering atlas)...
