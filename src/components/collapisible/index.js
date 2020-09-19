function GetCollapsibles() {
  let collapisible = document.getElementsByClassName('collapsible');

  for (let collapisibleElm of collapisible) {
    let collContent = collapisibleElm.nextElementSibling;

    let button = collapisibleElm.firstElementChild;

    button.onclick = () => {
      console.log(`Change display: ${collContent.style.display}`);

      if (collContent.style.display === 'block') {
        button.textContent = '+';

        if (collapisibleElm.id !== 'coll_title')
          collapisibleElm.style.borderBottom = '3px solid #c84ae7';

        collContent.style.display = 'none';
      } else {
        collContent.style.display = 'block';

        collapisibleElm.style.borderBottom = 'none';

        button.textContent = '-';
      }
    };
  }
}

module.exports = GetCollapsibles;
