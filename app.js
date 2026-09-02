
document.querySelectorAll('.faq button').forEach(btn => {
  btn.addEventListener('click', () => btn.parentElement.classList.toggle('open'));
});
const menu=document.querySelector('.menu');
const nav=document.querySelector('.navlinks');
if(menu) menu.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex'; nav.style.flexDirection='column'; nav.style.position='absolute'; nav.style.top='68px'; nav.style.left='0'; nav.style.right='0'; nav.style.padding='18px 20px'; nav.style.background='#fff'; nav.style.borderBottom='1px solid #e5eaf2';});
const form=document.querySelector('#contactForm');
if(form) form.addEventListener('submit',e=>{e.preventDefault(); const name=document.querySelector('#name').value.trim(); alert(`Thank you${name?`, ${name}`:''}! Your enquiry has been received. Connect with us directly on WhatsApp or email to continue the conversation.`); form.reset();});
