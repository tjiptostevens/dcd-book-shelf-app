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
