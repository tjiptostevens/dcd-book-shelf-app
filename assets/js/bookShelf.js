import { initStorage, addBookStorage, getBookStorage } from "./webStorage.js";

// Define Variable
let BOOKSTORE = getBookStorage();
let notDoneContent = document.getElementById("notdone");
let doneContent = document.getElementById("done");
let form = document.getElementById("input-book-form");
let btnDelete = document.getElementById("book-delete");
let btnNotDone = document.getElementById("book-notdone");
let btnDone = document.getElementById("book-done");

// Initialize App Local Storage on LOAD
const startApp = () => {
  initStorage();
};
window.addEventListener("load", () => {
  startApp();
  bookNotDone();
  bookDone();
});

// Handle Submit form
const handleSubmit = () => {
  let titleInput = document.getElementById("title");
  let authorInput = document.getElementById("author");
  let yearInput = document.getElementById("year");
  let isCompleteInput = document.getElementById("isComplete");
  let bookInput = {
    id: +new Date(),
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value,
    isComplete: isCompleteInput.checked,
  };
  console.log(bookInput);
  addBookStorage(bookInput);
  // clear form
  titleInput.value = "";
  authorInput.value = "";
  yearInput.value = "";
  isCompleteInput.checked = false;
};
form.addEventListener("submit", () => handleSubmit());

// Render and Separate BOOK
const arrBook = (Arr, Out, Status) => {
  // Arrange Book Function
  // Check if Arr length = 0
  if (Arr.length === 0) {
    let div = document.createElement("div");
    div.innerHTML = "No Book Registered";
    Out.appendChild(div);
  } else {
    let array = [];
    array = Arr.filter((f) => f.isComplete === Status);
    // Check if filtered array = 0
    if (array.length === 0) {
      let div = document.createElement("div");
      div.innerHTML = "No Book Registered";
      Out.appendChild(div);
    } else {
      // Render book
      array.forEach((d) => {
        // book detail input
        let div = document.createElement("div");
        div.className = "book";
        div.id = d.id;
        div.innerHTML =
          '<div class="book-detail"><b>' +
          d.title.toUpperCase() +
          "</b><br/><small>~ <i>" +
          d.author +
          "</i> - " +
          d.year +
          "</small></div>" +
          '<div class="book-control">' +
          '<div id="book-delete" class="book-delete"><i class="bi bi-x-square"></i></div>' +
          (Status
            ? '<div id="book-notdone" class="book-notdone"><i class="bi bi-dash-square"></i></div>'
            : '<div id="book-done" class="book-done"><i class="bi bi-check-square"></i></div>') +
          "</div>";

        // render to book content div
        Out.appendChild(div);
      });
    }
  }
};

const bookNotDone = () => {
  arrBook(BOOKSTORE, notDoneContent, false);
};

const bookDone = () => {
  arrBook(BOOKSTORE, doneContent, true);
};

const handleDelete = (id) => {
  console.log(id);
};

const handleNotDone = (id) => {
  console.log(id);
};

const handleDone = (id) => {
  console.log(id);
};

// btnDelete.addEventListener("click", (e) => handleDelete(e));
// btnNotDone.addEventListener("click", (e) => handleNotDone(e));
// btnDone.addEventListener("click", (e) => handleDone(e));
