const accordion = document.querySelectorAll(".accordion");

console.log(accordion);

accordion.forEach(function (item) {
  const btn = item.children[0];
  const content = item.children[1];
  const parent = item.closest(".accordion__content");
  const maxHeight = content.style.maxHeight;
  console.log(content.scrollHeight);
  btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    console.log("click");
    // console.log(maxHeight);
    content.style.maxHeight = content.scrollHeight + "px";
    btn.classList.add("active");
  });
});

// console.log(accordionControl);
