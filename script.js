const shareIcon = document.querySelector('.share-icon');
const shareMenu = document.querySelector('.share-menu');

shareIcon.addEventListener('click', function () {
  if (shareMenu.style.display === 'none') {
    shareMenu.style.display = 'flex';
  } else {
    shareMenu.style.display = 'none';
  }
});
