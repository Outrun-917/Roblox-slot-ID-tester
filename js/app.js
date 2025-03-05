const $leakedSectionListIds = document.querySelectorAll(
  ".leaked-section-list__id"
);
const $idInput = document.getElementById("idinput");
const $idSubmitButton = document.querySelector(".id-submit-button");
const $idCheckButton = document.querySelector(".id-check-button");
const $clearIdListButton = document.querySelector(".clear-id-list-button");
const $idInputList = document.querySelector(".id-input-list");
const $leakedIdsList = document.querySelector(".leaked-ids-list");

const $mainWrapper = document.querySelector(".main-wrapper");
const $noLeaksScreen = document.querySelector(".no-leaks-screen");
const $leaksScreen = document.querySelector(".leaks-screen");

const $menuButtons = document.querySelectorAll(".menu-button")

let hasId = false;
let isLeaked = false;

function addId() {
  const $newId = document.createElement("li");
  $newId.classList.add("id-input-list-element");
  $newId.textContent = $idInput.value;

  $idInputList.appendChild($newId);
  hasId = true;

  $leakedSectionListIds.forEach(($leakedSectionListId) => {
    if ($newId.textContent === $leakedSectionListId.innerHTML) {
      $leakedIdsList.appendChild($newId.cloneNode(true));
      isLeaked = true;
    }
  });
}

$idSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if ($idInput.value !== "") {
    addId();
  }
});

$idCheckButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (hasId === true) {
    if (isLeaked === true) {
      $mainWrapper.classList.add("hidden");
      $leaksScreen.classList.remove("hidden");
      return;
    }
    $mainWrapper.classList.add("hidden");
    $noLeaksScreen.classList.remove("hidden");
  } else {
    $idInput.value = "Paste your ID here";
  }
});

$clearIdListButton.addEventListener("click", (e) => {
  e.preventDefault();
  $idInputList.innerHTML = "";
  $leakedIdsList.innerHTML = "";
  $idInput.value = ""
  hasId = false;
  isLeaked = false;
});

$menuButtons.forEach(($menuButton) => {
  $menuButton.addEventListener("click", (e) => {
    e.preventDefault()
    $noLeaksScreen.classList.add("hidden")
    $leaksScreen.classList.add("hidden")
    $mainWrapper.classList.remove("hidden")
  })
})