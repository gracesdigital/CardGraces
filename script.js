/* Interações discretas para o card */
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".link");
  links.forEach((link) => {
    link.addEventListener("pointerdown", () => {
      link.style.transform = "translate(-1px, -1px) scale(.99)";
    });
    ["pointerup", "pointerleave", "blur"].forEach((eventName) => {
      link.addEventListener(eventName, () => {
        link.style.transform = "";
      });
    });
  });
});
