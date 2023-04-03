console.log("Test script");

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
    console.log(age);
    return age;
}

const age1 = calcFactAge(2012);