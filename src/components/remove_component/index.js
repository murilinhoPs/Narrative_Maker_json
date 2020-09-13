var btn = document.getElementById('remove_btn');

btn.onclick = function () {
  console.log('remove button');
  this.nextElementSibling.remove();

  this.remove();
};
