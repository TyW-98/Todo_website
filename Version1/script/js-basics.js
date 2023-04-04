const postBtn = document.getElementsByClassName("create-task")[0];
const form = document.querySelector(".input-form");

postBtn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    postBtn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    postBtn.textContent = "Enter New Task";
  }
});

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  if (age > 0) {
    console.log(age);
    return age;
  } else {
    console.log(
      `Year Entered needs to be less than or equal to ${currentYear}`
    );
  }
}

// Arrow function combine with Ternary operator. Same functionality as calcFactAge
const calcFactAge2 = (year) =>
  year >= new Date().getFullYear
    ? new Date().getFullYear - year
    : `Year enetered needs to be less than or equal to ${new Date().getFullYear()}`;

let voteInteresting = 20;
let voteMindblowing = 5;
let voteFalse = 7;
const totalUpVotes = voteInteresting + voteMindblowing - voteFalse;
// Ternary Operator
const message =
  totalUpVotes > voteFalse
    ? "This fact is true"
    : "This is fake news, check the source...";

// Template strings

const str = `The year for the current fact is ${calcFactAge(
  2015
)}. The fact is ${totalUpVotes > voteFalse ? "True" : "False"}`;

const newFact = ["Random Fact", 2012, true];
const [fact, createdIn, isCorrect2] = newFact;

// Create new array from previous array (the three dots unpacks the previous array)
const newFact2 = [...newFact, "Technology"];

// Object
const factObj = {
  text: "Random Fact",
  createdYear: 2012,
  isCorrect: true,
  category: "Technology",
  createSummary: function () {
    return `This fact is about ${this.category.toUpperCase()} and it is created in ${
      this.createdYear
    }`;
  },
};

const { category, isCorrect } = factObj;

[2, 4, 6, 8].forEach(function (el) {
  console.log(el);
});

const tenTimes = [2, 4, 6, 8].map((el) => el * 10);

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const categoryTypes = CATEGORIES.map((el) => el.name);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const factAge = initialFacts.map((el) => calcFactAge(el.createdIn));
