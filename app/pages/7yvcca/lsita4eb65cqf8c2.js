const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 25,
    speed: 400,
    autoplay: {
        delay: 3000,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        992:{
          slidesPerView: 3,
          spaceBetween: 25
        }
      }

  });

  var swiperOptions = {
    loop: true,
    freeMode: true,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    freeMode: true,
    speed: 8000,
    freeModeMomentum: false,
    breakpoints: {
      0: {
        spaceBetween: 15,
        slidesPerView: 1,
      },
      776: {
        slidesPerView: 2,
      },
      998: {
        slidesPerView: 3,
      }
    }
  };
  

  const testimonial1 = new Swiper('.testimonials1',swiperOptions);
  swiperOptions.speed = 6000;
  const testimonials2 = new Swiper('.testimonials2',swiperOptions);


document.getElementById('sidebarToggleBtn').addEventListener('click', () => {
      let theMainContainer = document.querySelector('.main__page__area');
      theMainContainer.classList.toggle('toggle_sidebar');
});
document.querySelector('.sidebar_close_btn').addEventListener('click', () => {
      let theMainContainer = document.querySelector('.main__page__area');
      theMainContainer.classList.toggle('toggle_sidebar');
});


function dayNightModeToggler(){
  const snfCurrentMode = localStorage.getItem('snfCurrentMode');
  const bodyFire = document.querySelector('body');

  if(snfCurrentMode){
          localStorage.removeItem('snfCurrentMode');
          bodyFire.classList.remove('nightmode');
          console.log('daymode');
  }else{
          localStorage.setItem('snfCurrentMode', 'nightmode');
          bodyFire.classList.add('nightmode');
          console.log('nightmode');
  }
}

function navToggleMob() {
  let body = document.querySelector('body');
  let menuBox = document.getElementById('navMob');
  menuBox.classList.toggle('active');
  body.classList.toggle('menu_active');
}
