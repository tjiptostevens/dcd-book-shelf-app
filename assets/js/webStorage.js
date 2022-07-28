let BOOKS = [];
const initStorage = () => {
  if (typeof Storage !== "undefined") {
    // inisialisasi semua item web storage yang kita akan gunakan jika belum ada
    if (localStorage.getItem("BOOKS") === null) {
      localStorage.setItem("BOOKS", "[]");
      console.log("App initialize.");
    }
  } else {
    alert("Browser yang Anda gunakan tidak mendukung Web Storage");
  }
};

const addBookStorage = (book) => {
  let x = localStorage.getItem("BOOKS");
  if (book) {
    x = JSON.parse(x);
    let y = [...x, book];
    localStorage.removeItem("BOOKS");
    localStorage.setItem("BOOKS", JSON.stringify(y));
  }
};
const getBookStorage = () => {
  let x = localStorage.getItem("BOOKS");
  x = JSON.parse(x);
  return x;
};
const updateBookStorage = (book) => {
  localStorage.removeItem("BOOKS");
  localStorage.setItem("BOOKS", JSON.stringify(book));
  window.location.reload();
};

export { initStorage, addBookStorage, getBookStorage, updateBookStorage };

// let BOOKS = [
//   {
//     id: 3657848524,
//     title: "Harry Potter and the Philosopher's Stone",
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: false,
//   },
//   {
//     id: 365784852,
//     title: 'Captain America',
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: true,
//   },
//   {
//     id: 36578485,
//     title: 'Superman',
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: false,
//   },
//   {
//     id: 3657848,
//     title: 'Batman',
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: true,
//   },
//   {
//     id: 3657848524,
//     title: "Harry Potter and the Philosopher's Stone",
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: false,
//   },
//   {
//     id: 365784852,
//     title: 'Captain America',
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: true,
//   },
//   {
//     id: 36578485,
//     title: 'Superman',
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: false,
//   },
//   {
//     id: 3657848,
//     title: 'Batman',
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: true,
//   },
//   {
//     id: 3657848524,
//     title: "Harry Potter and the Philosopher's Stone",
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: false,
//   },
//   {
//     id: 365784852,
//     title: 'Captain America',
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: true,
//   },
//   {
//     id: 36578485,
//     title: 'Superman',
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: false,
//   },
//   {
//     id: 3657848,
//     title: 'Batman',
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: true,
//   },
//   {
//     id: 3657848524,
//     title: "Harry Potter and the Philosopher's Stone",
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: false,
//   },
//   {
//     id: 365784852,
//     title: 'Captain America',
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: true,
//   },
//   {
//     id: 36578485,
//     title: 'Superman',
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: false,
//   },
//   {
//     id: 3657848,
//     title: 'Batman',
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: true,
//   },
//   {
//     id: 3657848524,
//     title: "Harry Potter and the Philosopher's Stone",
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: false,
//   },
//   {
//     id: 365784852,
//     title: 'Captain America',
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: true,
//   },
//   {
//     id: 36578485,
//     title: 'Superman',
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: false,
//   },
//   {
//     id: 3657848,
//     title: 'Batman',
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: true,
//   },
//   {
//     id: 3657848524,
//     title: "Harry Potter and the Philosopher's Stone",
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: false,
//   },
//   {
//     id: 365784852,
//     title: 'Captain America',
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: true,
//   },
//   {
//     id: 36578485,
//     title: 'Superman',
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: false,
//   },
//   {
//     id: 3657848,
//     title: 'Batman',
//     author: 'J.K Rowling',
//     year: 1997,
//     isComplete: true,
//   },
// ]
