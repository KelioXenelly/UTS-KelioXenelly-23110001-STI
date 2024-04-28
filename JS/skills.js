// Order BTN Start

let orderButtons = document.getElementsByClassName("order-btn");

[...orderButtons].forEach((element) => {
  let id = element.id.replace('_', ' ');
  element.addEventListener("click", () => {
    confirm(`Apakah anda ingin memesan ${id}?`);
  });
});

// Order BTN End