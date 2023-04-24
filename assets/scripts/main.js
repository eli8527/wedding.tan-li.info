window.addEventListener('DOMContentLoaded', () => {
  // let container = document.querySelector('main');
  // for (var i = container.children.length; i >= 0; i--) {
  //   container.appendChild(container.children[Math.random() * i | 0]);
  // }

  let columns = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--grid-columns')) + 1;
  let row = 2;
  let col = 1;
  document.querySelectorAll('main > div').forEach((el) => {
    let w = Math.round(Math.random() * 1 + 2);
    let offset = Math.round(Math.random() * 3 + 1);
    
    if (col + w + offset > columns) {
      col = offset;
      row++;
    } else {
      col += offset;
    }

    el.style.setProperty('--area', `${row} / ${col} / ${row} / ${col + w}` );
    col += w;

  })
});