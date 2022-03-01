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

  const open_pauline=document.getElementById('open-pauline');
  const modal_container_pauline=document.getElementById('modal-container-pauline');
  const close_pauline=document.getElementById('close_pauline');

  open_pauline.addEventListener('click',()=>{
    modal_container_pauline.classList.add('show');
  });

  close_pauline.addEventListener('click',()=>{
    modal_container.classList.remove('show');
  });