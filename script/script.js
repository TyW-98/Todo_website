// Select DOM elements
const postBtn = document.getElementsByClassName("create-task")[0];
const form = document.querySelector(".input-form");
const taskList = document.querySelector(".task-list");

postBtn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    postBtn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    postBtn.textContent = "Enter New Task";
  }
});

// Load facts in
taskList.innerHTML = "";

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
    category: "social",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "social",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

for (let i = 0; i < initialFacts.length; i++) {
  const currentFacts = initialFacts[i];
  const htmlFacts = `<li class=task-item>
    <p>${currentFacts.text}</p>
    <a href=${currentFacts.source} target="_blank" class="source">(source)</a>
    <span class="hashtag hashtag-${
      currentFacts.category === "technology" ? "tech" : "social"
    }">${currentFacts.category}</span>
    <div class="emoji-buttons">
    <button type="button">👍 ${currentFacts.votesInteresting}<strong>1</strong></button>
    <button type="button">🚀 ${currentFacts.votesMindblowing}<strong>2</strong></button>
    <button type="button">👎 ${currentFacts.votesFalse}<strong>3</strong></button>
    </div>
    </li>`;
  taskList.insertAdjacentHTML("beforeend", htmlFacts);
}
