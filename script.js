const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  input.classList.toggle("active");
  input.focus();
});
