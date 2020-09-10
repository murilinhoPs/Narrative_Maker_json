function GetCollapsibles() {
  let collapisible = document.getElementsByClassName('collapsible');

  for (let collapisibleElm of collapisible) {
    let button = collapisibleElm.firstElementChild;

    let collContent = collapisibleElm.nextElementSibling;

    button.onclick = () => {
      console.log(`Change display: ${collContent.style.display}`);

      if (collContent.style.display === 'block') {
        collContent.style.display = 'none';
      } else collContent.style.display = 'block';
    };

    // button.addEventListener('click', function () {
    //   console.log('New click event');
    // });
  }
}

module.exports = GetCollapsibles;
