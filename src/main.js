let savedIdeas = [];

function saveToStorage() {}

function deleteFromStorage() {}

function deleteIdeaElement(event) {
  console.log(event.target);
  var parent = event.target.closest(".idea");
  parent.remove();
}

function addStarredClass(event) {
  var parent = event.target.closest(".idea");
  parent.classList.toggle("is-favorite");
}

window.onload = function () {
  var closeButtons = document.querySelectorAll(".idea__delete");
  closeButtons.forEach(function (element) {
    element.addEventListener("click", deleteIdeaElement);
  });

  var starButtons = document.querySelectorAll(".idea__star");
  starButtons.forEach(function (element) {
    element.addEventListener("click", addStarredClass);
  });
};
