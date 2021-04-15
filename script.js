const accordion = document.querySelectorAll(".accordion");

accordion.forEach(function (item) {
  const btn = item.children[0];
  const content = item.children[1];
  const parent = item.closest(".accordion__content");

  btn.addEventListener("click", (evt) => {
    evt.preventDefault();

    const maxHeight = content.style.maxHeight;

    if (maxHeight) {
      content.style.maxHeight = null;
      btn.classList.remove("active");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      btn.classList.add("active");
    }
  });
});
