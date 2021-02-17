// Import DOM Elements
const cardsContainer = document.getElementById('cards-container'),
  prevBtn = document.getElementById('prev'),
  nextBtn = document.getElementById('next'),
  currentEl = document.getElementById('current'),
  showBtn = document.getElementById('show'),
  hideBtn = document.getElementById('hide'),
  questionEl = document.getElementById('question'),
  answerEl = document.getElementById('answer'),
  addCardBtn = document.getElementById('add-card'),
  clearBtn = document.getElementById('clear'),
  addContainer = document.getElementById('add-container');

// State
let currentActiveCard = 0;
let cardsEl = [];

const cardsData = [
  {
    question: 'What must a variable begin with?',
    answer: 'A letter, $ or _'
  },
  {
    question: 'What is a variable',
    answer: 'Container for a piece of data'
  },
  {
    question: 'Example of Case Sensitive Variable',
    answer: 'thisIsAVariable'
  }
];

// Functions 
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}

function createCard(data, index) {
  const card = document.createElement('div');
  card.classList.add('card');

  if(index === 0) {
    card.classList.add('active');
  }

  card.innerHTML = `
    <div class="inner-card">
      <div class="inner-card-front">
        <p>
          ${data.question}
        </p>
      </div>
      <div class="inner-card-back">
        <p>
          ${data.answer}
        </p>
      </div>
    </div>
  `;

  cardsEl.push(card);
  cardsContainer.appendChild(card);
}
createCards();