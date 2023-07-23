
 
  const checkbox = document.getElementById('menu__toggle');
  const menuBtn = document.querySelector('.menu__btn');

  checkbox.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
  });

