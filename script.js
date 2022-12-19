const NOTES = "notes";

const inputField = document.querySelector("#note-input");
const saveButton = document.querySelector("#save");
const sortName = document.querySelector("#sort-name");
const sortTime = document.querySelector("#sort-time");
const notesParent = document.querySelector("#notes");

let isAccendingText = true;
let isAccendingTime = true;

function loadNotes() {
  const noteItemsJSON = localStorage.getItem(NOTES);
  const noteItems = JSON.parse(noteItemsJSON);
  if (noteItems === null) {
    let noteItems = [];
    return noteItems;
  } else {
    return noteItems;
  }
}

const noteArr = loadNotes();

function addNotesToPage(parent, note) {
  const p = document.createElement("p");
  p.innerText = note.text;
  parent.appendChild(p);
}

function addNotes() {
  noteArr.forEach((e) => {
    addNotesToPage(notesParent, e);
    console.log(e.text);
  });
}

addNotes();

saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  const noteObj = { text: inputField.value, timestamp: Date.now() };
  noteArr.push(noteObj);
  localStorage.setItem(NOTES, JSON.stringify(noteArr));
  addNotesToPage(notesParent, noteObj);
});

sortName.addEventListener("click", (e) => {
  if (isAccendingText) {
    noteArr.sort((a, b) => a.text.localeCompare(b.text));
  } else {
    noteArr.sort((a, b) => b.text.localeCompare(a.text));
  }
  isAccendingText = !isAccendingText;
  addNotes();
});

sortTime.addEventListener("click", (e) => {
  if (isAccendingText) {
    noteArr.sort((a, b) => a.timestamp - b.timestamp);
  } else {
    noteArr.sort((a, b) => b.timestamp - a.timestamp);
  }
  isAccendingTime = !isAccendingTime;
  addNotes();
});
