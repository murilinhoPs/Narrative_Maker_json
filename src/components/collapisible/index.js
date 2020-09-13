function GetCollapsibles() {
  let collapisible = document.getElementsByClassName('collapsible');

  for (let collapisibleElm of collapisible) {
    let collContent = collapisibleElm.nextElementSibling;

    let button = collapisibleElm.firstElementChild;
    // button.textContent = '-';

    button.onclick = () => {
      console.log(`Change display: ${collContent.style.display}`);

      if (collContent.style.display === 'block') {
        button.textContent = '+';
        collContent.style.display = 'none';
      } else {
        collContent.style.display = 'block';
        button.textContent = '-';
      }
    };
  }
}

module.exports = GetCollapsibles;
