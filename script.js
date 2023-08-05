const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const circleArray = [...circles];

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circleArray.length) {
    currentActive = circleArray.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circleArray.forEach((circle, idx) => {
    // Use the circleArray
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circleArray.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circleArray.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

update();
