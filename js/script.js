const swiper = new Swiper('.mySwiperss', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 30,
    initialSlide: 0,
    coverflowEffect: {
      rotate: 10,
      stretch: 100,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 30
      },
      1280: {
        slidesPerView: 4,
        centeredSlides: false,
        spaceBetween: 5
      },
    }
  });
  
  const swiperss2 = new Swiper('.mySwiperss2', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 30,
    initialSlide: 0,
    coverflowEffect: {
      rotate: 10,
      stretch: 100,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 30
      },
      1280: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 5
      },
    }
  });
  
  
   const swipersss = new Swiper(".mySwipersss", {
    grabCursor:true,
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
   
    breakpoints:{
      
     640:{
       slidesPerView: 2,
       spaceBetween: 40,
       centeredSlides:false,
     },
   
      768:{
        slidesPerView: 2.5,
        spaceBetween: 40,
        centeredSlides:false,
      },
      
      1024:{
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides:false,
      },
   
      1280:{
       slidesPerView: 4,
       spaceBetween: 20,
       centeredSlides:false,
     },
      
    }
   });



// Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    
    if (window.pageYOffset > fixedNav){
      header.classList.add('navbar-fixed');
    } else {
      header.classList.remove('navbar-fixed');
    }
  }
    
    // Hamburger
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    
    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('hidden');
    });
    
   
    // Klik di luar hamburger
    window.addEventListener('click', function (e) { 
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.add('hidden');
      }
      
    });
  
    //menu
    function showFoodMenu() {
      document.getElementById('menu-food').classList.remove('hidden');
      document.getElementById('menu-drink').classList.add('hidden');
  
     
      document.getElementById('show-food').classList.add('text-primary');
      document.getElementById('show-drink').classList.remove('text-primary');
    }
  
    
    function showDrinkMenu() {
      document.getElementById('menu-food').classList.add('hidden');
      document.getElementById('menu-drink').classList.remove('hidden');
  
      document.getElementById('show-food').classList.remove('text-primary');
      document.getElementById('show-drink').classList.add('text-primary');
    }
  
    
    showFoodMenu();
    document.getElementById('show-food').addEventListener('click', showFoodMenu);
    document.getElementById('show-drink').addEventListener('click', showDrinkMenu);