
const menu=document.querySelector('.menu-btn');
const links=document.querySelector('.nav-links');
if(menu) menu.addEventListener('click',()=>links.classList.toggle('open'));

document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',()=>links && links.classList.remove('open'));
});

const form=document.querySelector('#contactForm');
if(form){
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const status=document.querySelector('#formStatus');
    if(!form.checkValidity()){ form.reportValidity(); return; }
    status.textContent='Thanks! Your enquiry is ready to be sent. Connect the form to your preferred email/Form backend before launch.';
    status.style.display='block';
    form.reset();
  });
}

document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
