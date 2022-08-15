const list = document.querySelectorAll(".list");
const indicator = document.querySelector(".indicator");

function activeLink() {
  list.forEach((listItem) => {
    listItem.classList.remove("active");
    this.classList.add("active");
  });
}

list.forEach((listItem) => {
  listItem.addEventListener("click", activeLink);
});
