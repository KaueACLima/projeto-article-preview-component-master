//* Ao ususário clicar no botõ Share, deve aparecer a div share-options.
//* 1) Pegar o botão no HTML

const shareOption = document.querySelector('.share-option');
const shareButton = document.querySelector('.share-button');

shareButton.addEventListener('click', function() {
  this.classList.toggle('active');
  shareOption.classList.toggle('active');
});
