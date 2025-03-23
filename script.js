const questionOne = document.getElementById("q1");
const answerOne = document.getElementById("ans1");
const iconOne = questionOne.querySelector("img");

questionOne.addEventListener("click", function () {
  if (answerOne.style.display === "block") {
    answerOne.style.display = "none"; // Hide answer
    iconOne.src = "assets/images/icon-plus.svg"; // Change to plus icon
    iconOne.alt = "plus icon";
  } else {
    answerOne.style.display = "block"; // Show answer
    iconOne.src = "assets/images/icon-minus.svg"; // Change to minus icon
    iconOne.alt = "minus icon";
  }
});

const questionTwo = document.getElementById("q2"); // Get the question div
const answerTwo = document.getElementById("ans2"); // Get the answer div
const iconTwo = questionTwo.querySelector("img"); // Get the image inside q1

// Add click event to the question div
questionTwo.addEventListener("click", function () {
  if (answerTwo.style.display === "none") {
    answerTwo.style.display = "block"; // Show answer
    iconTwo.src = "assets/images/icon-minus.svg"; // Change to minus icon
    iconTwo.alt = "minus icon";
  } else {
    answerTwo.style.display = "none"; // Hide answer
    iconTwo.src = "assets/images/icon-plus.svg"; // Change to plus icon
    iconTwo.alt = "plus icon";
  }
});

const questionThree = document.getElementById("q3");
const answerThree = document.getElementById("ans3");
const iconThree = questionThree.querySelector("img");

questionThree.addEventListener("click", function () {
  if (answerThree.style.display === "none") {
    answerThree.style.display = "block";
    iconThree.src = "assets/images/icon-minus.svg";
    iconThree.alt = "minus icon";
  } else {
    answerThree.style.display = "none";
    iconThree.src = "assets/images/icon-plus.svg";
    iconThree.alt = "plus icon";
  }
});

const questionFour = document.getElementById("q4");
const answerFour = document.getElementById("ans4");
const iconFour = questionFour.querySelector("img");

questionFour.addEventListener("click", function () {
  if (answerFour.style.display === "none") {
    answerFour.style.display = "block";
    iconFour.src = "assets/images/icon-minus.svg";
    iconFour.alt = "minus icon";
  } else {
    answerFour.style.display = "none";
    iconFour.src = "assets/images/icon-plus.svg";
    iconFour.alt = "plus icon";
  }
});
