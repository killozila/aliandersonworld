const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    event.target.classList.add("activebtn");
    setTimeout(() => {
      event.target.classList.remove("activebtn");
    }, 500);
  });
});
