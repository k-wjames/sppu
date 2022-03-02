let menu =document.querySelector('#menubar');
let navbar=document.querySelector('.navbar')

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".about-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });


 


  const open=document.getElementById('open');
  const modal_container=document.getElementById('modal-container');
  const close=document.getElementById('close');

  open.addEventListener('click',()=>{
    modal_container.classList.add('show');
  });

  close.addEventListener('click',()=>{
    modal_container.classList.remove('show');
  });


  const openPauline=document.getElementById('open-pauline');
  const modal_containerPauline=document.getElementById('modal-container-pauline');
  const closePauline=document.getElementById('close-pauline');

  openPauline.addEventListener('click',()=>{
    modal_containerPauline.classList.add('show');
  });

  closePauline.addEventListener('click',()=>{
    modal_containerPauline.classList.remove('show');
  });


  const openMuli=document.getElementById('open-muli');
  const modal_containerMuli=document.getElementById('modal-container-muli');
  const closeMuli=document.getElementById('close-muli');

  openMuli.addEventListener('click',()=>{
    modal_containerMuli.classList.add('show');
  });

  closeMuli.addEventListener('click',()=>{
    modal_containerMuli.classList.remove('show');
  });

  const openFridah=document.getElementById('open-fridah');
  const modal_containerFridah=document.getElementById('modal-container-fridah');
  const closeMFridah=document.getElementById('close-fridah');

  openFridah.addEventListener('click',()=>{
    modal_containerFridah.classList.add('show');
  });

  closeFridah.addEventListener('click',()=>{
    modal_containerFridah.classList.remove('show');
  });
  