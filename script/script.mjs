// Select DOM elements
const postBtn = document.getElementsByClassName("create-task")[0];
const form = document.querySelector(".input-form");
const taskList = document.querySelector(".task-list");
const techBtn = document.querySelector(".btn-tech");
const socialBtn = document.querySelector(".btn-social");

const CATEGORIES = [
  { name: "technology", color: "rgba(66, 162, 201, 0.877)" },
  { name: "science", color: "#eab308" },
  { name: "finance", color: "#ef4444" },
  { name: "social", color: "rgb(56, 184, 124)" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

techBtn.style.backgroundColor = CATEGORIES.find((cat) => cat.name === "technology").color;
socialBtn.style.backgroundColor = CATEGORIES.find((cat) => cat.name === "social").color;

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

// Load data
loadData();
import config from "../config.js";
async function loadData() {
  const res = await fetch(config.database, {
    headers: {
      apikey: config.apiKey,
      authorization: config.apiSecret,
    },
  });
  const data = await res.json();
  console.log(data);
  // const filteredFacts = data.filter((fact) => fact.category.toLowerCase() === "technology");
  // createFactList(filteredFacts);
  createFactList(data);
}

function createFactList(factsArray) {
  for (let i = 0; i < factsArray.length; i++) {
    const currentFacts = factsArray[i];
    const htmlFacts = `<li class=task-item>
      <p>${currentFacts.text}</p>
      <a href=${currentFacts.source} target="_blank" class="source">(source)</a>
      <span class="hashtag" style="background-color:${
        CATEGORIES.find(
          (cat) => cat.name === currentFacts.category.toLowerCase()
        ).color
      }">${currentFacts.category}</span>
      <div class="emoji-buttons">
      <button type="button">👍 ${
        currentFacts.votesInteresting
      }<strong>1</strong></button>
      <button type="button">🚀 ${
        currentFacts.votesMindblowing
      }<strong>2</strong></button>
      <button type="button">👎 ${
        currentFacts.votesFalse
      }<strong>3</strong></button>
      </div>
      </li>`;
    taskList.insertAdjacentHTML("beforeend", htmlFacts);
  }
}
