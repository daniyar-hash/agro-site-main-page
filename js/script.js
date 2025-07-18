  const header = document.querySelector('.header');
  const header__inner = document.querySelector('.header__inner');  
  const header__logo = document.querySelector('.header__logo');
  const header__container = document.querySelector('.header__container');
  const btnModalVideo = document.querySelector('.open-modal-video');
  const popup = document.querySelector('.modal');
  const btnModalClose = document.querySelector('.modal-close');
  const video = document.getElementById('video');

  const bannerList = document.querySelector(".banner__list");
  const bannerSlides = document.querySelectorAll(".banner__list-item");
  

  function showSlide(index){
      bannerSlides.forEach((item, i)=>{
        item.classList.toggle("active", i === index);

      });
  }



  //--------------------///

   let index = 0;
   let total = 4;
   let currentSlide = 0;


  function changeSlide() {
  index = (index + 1) % total;  // 1
  currentSlide = index; // 1

  
  showSlide(currentSlide);
  document.getElementById(`btn${index + 1}`).checked = true; // 1
}



let interval = setInterval(changeSlide, 3000);
document.querySelectorAll('.pagination__label').forEach((label, i) => {
  label.addEventListener('click', () => {
    clearInterval(interval);
    console.log(i)
    index = i;
    currentSlide = i;
    showSlide(currentSlide);
    document.getElementById(`btn${i + 1}`).checked = true;
    interval = setInterval(changeSlide, 3000);
  });
});






  btnModalVideo.addEventListener("click", (e)=>{
      e.preventDefault();
      popup.classList.add('modal-show');
      popup.style.display = "block";
      popup.querySelector('#video').play();
  })

    btnModalClose.addEventListener("click", (e)=>{


     e.preventDefault();
     popup.classList.remove('modal-show');
     popup.style.display = "none";


      video.pause();
      video.currentTime = 0;


  })

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


        //  window.addEventListener("keydown", function(evt) {
        //     if (evt.keyCode === 27) {
        //             evt.preventDefault();

        //             if(popup.classList.contains("modal-show")){
        //                 popup.classList.remove("modal-show");
        //                 popup.classList.remove("modal-error");

        //             }
              

        //     }
