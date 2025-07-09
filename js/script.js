  const header = document.querySelector('.header');
  const header__inner = document.querySelector('.header__inner');  
  const header__logo = document.querySelector('.header__logo');
  const header__container = document.querySelector('.header__container');


  function updateHeaderClass() {
    if (window.scrollY > 100) {
      header.classList.remove('transparent');
      header.classList.add('solid');
      header__inner.classList.remove('flex-column');
      header__container.classList.remove('container');
      header__inner.classList.add('container');
      header__logo.classList.remove('logo-main');
    } else {
      header.classList.remove('solid');
      header.classList.add('transparent');
      header__inner.classList.add('flex-column');
      header__inner.classList.remove('container');
      header__container.classList.add('container');
      header__logo.classList.add('logo-main');

      
    }
  }

  // Проверка при загрузке страницы
   window.addEventListener('load', updateHeaderClass);






  // Проверка при скролле
  window.addEventListener('scroll', updateHeaderClass);
