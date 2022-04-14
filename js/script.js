let menu =document.querySelector('#menubar');
let navbar=document.querySelector('.navbar')

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

  const open=document.getElementById('open');
  const modal_container=document.getElementById('modal-container');
  const close=document.getElementById('close');

  open.addEventListener('click',()=>{
    modal_container.classList.add('show');
  });

  close.addEventListener('click',()=>{
    modal_container.classList.remove('show');
  });
  


const productContainers = [...document.querySelectorAll('.department-content')];
const nxtBtn = [...document.querySelectorAll('.next-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})