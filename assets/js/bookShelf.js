import {
  initStorage,
  addBookStorage,
  getBookStorage,
  updateBookStorage,
} from "./webStorage.js";

// Define Variable
let BOOKSTORE = getBookStorage();
let notDoneContent = document.getElementById("notdone");
let doneContent = document.getElementById("done");
let form = document.getElementById("input-book-form");
let search = document.getElementById("input-search");
let searchInput = document.getElementById("input-search");
let searchContent = document.getElementById("search-res");

// search event listener
search.addEventListener("keypress", (e) => handleSearch(e));
search.addEventListener("keydown", (e) => handleSearch(e));
search.addEventListener("keyup", (e) => handleSearch(e));
search.addEventListener("blur", (e) => handleSearch(e));

// Initialize App Local Storage on LOAD
const startApp = () => {
  initStorage();
};
window.addEventListener("load", () => {
  startApp();
  bookNotDone();
  bookDone();
  searchInput.value = "";
});

// Handle Search
const handleSearch = (e) => {
  // e.preventDefault();
  searchContent.innerHTML = "";
  // filter array using regex
  const searchRegex = searchInput && new RegExp(`${searchInput.value}`, "gi");
  let arr = BOOKSTORE.filter(
    (f) =>
      !searchRegex ||
      searchRegex.test(
        f.title.toUpperCase() + f.author.toUpperCase() + f.year.toString()
      )
  );
  // render search content
  if (searchInput.value === "") {
  } else {
    arrBook(arr, searchContent);
  }
};

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
    // check if param status exist
    if (Status === undefined) {
      array = Arr.sort((a, b) => a.id < b.id);
    } else {
      array = Arr.sort((a, b) => a.id < b.id).filter(
        (f) => f.isComplete === Status
      );
    }
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
          '<div id="del-' +
          d.id +
          '" class="book-delete"><i class="bi bi-x-square"></i></div>' +
          (d.isComplete
            ? '<div id="not-' +
              d.id +
              '" class="book-notdone"><i class="bi bi-dash-square"></i></div>'
            : '<div id="done-' +
              d.id +
              '" class="book-done"><i class="bi bi-check-square"></i></div>') +
          "</div>";

        // render to book content div
        Out.appendChild(div);
        // Add listener to each button
        addListener(d.id);
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

// Button Control
const handleDelete = (e) => {
  let data = BOOKSTORE;
  let id = parseInt(e.target.parentElement.id.split("-")[1]);
  let index = data.findIndex((obj) => {
    console.log(obj);
    return obj.id === id;
  });
  data.splice(index, 1);
  updateBookStorage(data);
  console.log("BOOK DELETED");
  searchInput.value = "";
};

const handleNotDone = (e) => {
  let data = BOOKSTORE;
  let id = parseInt(e.target.parentElement.id.split("-")[1]);
  const index = data.map((obj) =>
    obj.id === id ? { ...obj, isComplete: false } : obj
  );
  updateBookStorage(index);
  console.log("BOOK UPDATED");
  searchInput.value = "";
};

const handleDone = (e) => {
  let data = BOOKSTORE;
  let id = parseInt(e.target.parentElement.id.split("-")[1]);
  const index = data.map((obj) =>
    obj.id === id ? { ...obj, isComplete: true } : obj
  );
  updateBookStorage(index);
  console.log("BOOK UPDATED");
  searchInput.value = "";
};

// add listener to each button by ID
const addListener = (id) => {
  let btnDelete = document.getElementById(`del-${id}`);
  let btnNotDone = document.getElementById(`not-${id}`);
  let btnDone = document.getElementById(`done-${id}`);
  btnDelete && btnDelete.addEventListener("click", (e) => handleDelete(e));
  btnNotDone && btnNotDone.addEventListener("click", (e) => handleNotDone(e));
  btnDone && btnDone.addEventListener("click", (e) => handleDone(e));
};
