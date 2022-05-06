window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const boat = document.querySelector("#boat");
  boat.style.top = scrollY * 0.4 + "px";

  const p = document.querySelector("p");
  p.style.left = scrollY * 0.3 + "px";

  const h1 = document.querySelector("#boat h1");
  h1.style.top = scrollY * 0.1 + "px";
  h1.style.left = scrollY * 0.1 + "px";

  const seagul = document.querySelector("#seagul");
  seagul.style.top = scrollY * 0.9 + "px";
});
