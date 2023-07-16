import dogs from "./data.js";
import Dog from "./Dog.js";

let dog = new Dog(dogs.shift());
const heartBtn = document.getElementById("heart-btn");
const xBtn = document.getElementById("x-btn");
const likedDogsArray = [];

renderDog();

heartBtn.addEventListener("click", () => {
  dog.hasBeenLiked = true;
  xBtn.disabled = true;
  document.getElementById("badge-like").style.display = "block";
  likedDogsArray.push(dog);
  continueSearch();
});

xBtn.addEventListener("click", () => {
  heartBtn.disabled = true;
  document.getElementById("badge-nope").style.display = "block";
  continueSearch();
});

function renderDog() {
  document.getElementById("dog-card").innerHTML = dog.renderDogHtml();
}

function continueSearch() {
  if (dogs.length > 0) {
    setTimeout(() => {
      heartBtn.disabled = false;
      xBtn.disabled = false;
      renderNextDog();
    }, 1500);
  } else {
    endSearch();
  }
}

function renderNextDog() {
  dog = new Dog(dogs.shift());
  renderDog();
}

function endSearch() {
  setTimeout(function () {
    heartBtn.style.display = "none";
    xBtn.style.display = "none";
    document.getElementById("dog-card").innerHTML = `
        <div class="end-message">
        <h1 class="black">You liked the following dogs:</h1>
        ${getLikedDogsHtml()}
        </div>
        `;
  }, 1500);
}

function getLikedDogsHtml() {
  return likedDogsArray.map(
    (dog) => `
    <div>
        <h1 style="color:blue">${dog.name}</h1>
        <img width="50%" src="${dog.avatar}"/>
    </div>
    `
  );
}
