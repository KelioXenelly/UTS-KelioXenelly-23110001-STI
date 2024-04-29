// Order BTN Start

let orderButtons = document.getElementsByClassName("order-btn");

[...orderButtons].forEach((element) => {
  let idButton = element.id;
  element.addEventListener("click", () => {
    switch(idButton) {
      case "order_1":
        confirm(`Apakah anda ingin memesan 3D Design?`);
        break;
      case "order_2":
        confirm(`Apakah anda ingin memesan Web Development?`);
        break;
      case "order_3":
        confirm(`Apakah anda ingin memesan Accounting?`);
        break;
      case "order_4":
        confirm(`Apakah anda ingin memesan Copy Writing?`);
        break;
      case "order_5":
        confirm(`Apakah anda ingin memesan UI/UX Design?`);
        break;
      case "order_6":
        confirm(`Apakah anda ingin memesan Motion Graphic Design?`);
        break;
    };
  });
});

// Order BTN End
