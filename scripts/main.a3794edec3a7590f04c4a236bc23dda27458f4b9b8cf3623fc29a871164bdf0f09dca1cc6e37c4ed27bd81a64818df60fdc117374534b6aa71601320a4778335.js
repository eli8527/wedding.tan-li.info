(() => {
  // <stdin>
  window.addEventListener("DOMContentLoaded", () => {
    let columns = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--grid-columns")) + 1;
    let row = 2;
    let col = 1;
    document.querySelectorAll("main > div").forEach((el) => {
      let minW = 2;
      if (el.classList.contains("primary") || el.querySelector(".primary") !== null) {
        minW = 3;
      }
      let w = Math.round(Math.random() * 1 + minW);
      let offset = Math.round(Math.random() * 3 + 1);
      if (col + w + offset > columns) {
        col = offset;
        row++;
      } else {
        col += offset;
      }
      el.style.setProperty("--area", `${row} / ${col} / ${row} / ${col + w}`);
      col += w;
    });
  });
  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a").forEach((link) => {
      link.setAttribute("target", "external");
    });
  });
})();
