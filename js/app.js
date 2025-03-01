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

const $noLeaksMenuButton = document.querySelector(".no-leaks-menu-button");
const $leaksMenuButton = document.querySelector(".leaks-menu-button");

let idList = [];

function addId(currentId) {
  let li = document.createElement("list");
  let li2 = document.createElement("list");

  li.appendChild(document.createTextNode(currentId));
  $idInputList.appendChild(li);
  li2.appendChild(document.createTextNode(currentId));
  $leakedIdsList.appendChild(li2);
}

$idSubmitButton.addEventListener("click", function (e) {
  e.preventDefault();

  if ($idInput.value !== "") {
    addId($idInput.value);
    idList.push($idInput.value);
    console.log($idInputList);
    console.log(idList);
  }
});

$clearIdListButton.addEventListener("click", function (e) {
  e.preventDefault();

  $idInputList.innerHTML = "";
  $leakedIdsList.innerHTML = "";
  $idInput.value = "";
  idList = [];
});

$idCheckButton.addEventListener("click", function (e) {
  e.preventDefault();
  let isTrue = false;

  $leakedSectionListIds.forEach(function ($leakedSectionListId) {
    idList.forEach(function (idListElement) {
      if ($leakedSectionListId.innerHTML === idListElement) {
        isTrue = true;
        $mainWrapper.classList.add("hidden");
        $leaksScreen.classList.remove("hidden");
      }
    });
  });
  if (isTrue === false) {
    $mainWrapper.classList.add("hidden");
    $noLeaksScreen.classList.remove("hidden");
  }
});

$noLeaksMenuButton.addEventListener("click", function (e) {
  e.preventDefault();

  $mainWrapper.classList.remove("hidden");
  $noLeaksScreen.classList.add("hidden");
});

$leaksMenuButton.addEventListener("click", function (e) {
  e.preventDefault();

  $mainWrapper.classList.remove("hidden");
  $leaksScreen.classList.add("hidden");
});
