var btn = document.getElementsByClassName('remove_btn');

function AddOnClick() {
  for (let btnElm of btn) {
    btnElm.addEventListener('click', RemoveElm);
  }
}

function RemoveElm() {
  const parentElm = this.parentElement;

  parentElm.parentNode.removeChild(parentElm);
}

module.exports = AddOnClick;
