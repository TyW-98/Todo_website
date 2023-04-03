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
    console.log(`Year Entered needs to be less than or equal to ${currentYear}`);
  }
}

// Arrow function combine with Ternary operator. Same functionality as calcFactAge
const calcFactAge2 = (year) =>
  year >= new Date().getFullYear
    ? new Date().getFullYear - year
    : `Year enetered needs to be less than or equal to ${new Date().getFullYear()}`;

console.log(calcFactAge2(2033));

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

console.log(str);
