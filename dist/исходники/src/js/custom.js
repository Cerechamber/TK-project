const actions = () => {
const sel = document.querySelector('.form__fake-select');
const opt = document.querySelector('.fake-options');
const span = document.querySelectorAll('.fake-options span');
const title = document.querySelector('.form__fake-title');
const hidden_sel = document.querySelector('.form__hidden-select');

opt.style.display = 'none';
sel.addEventListener('click', (e) => {
  if (opt.style.display == 'block' && !e.target.closest('.scrollbar-track')) {
    sel.classList.remove('form__fake-select_dark');
    opt.style.display = 'none';
  } else {
    opt.style.display = 'block';
    sel.classList.add('form__fake-select_dark');
  }
});

span.forEach(item => {
  item.addEventListener('click', (e) => {
    let text = e.target.innerHTML;
    title.innerHTML = text;
    hidden_sel.value = text;
  });
});


const burg = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const circles = document.querySelectorAll('.order-way__circle');
const popups = document.querySelectorAll('.order-way__popup');
const circlesText = document.querySelector('.order-way-dop');

document.addEventListener('click', (e) => {
   if (!e.target.closest('.form__fake-select')) {
     opt.style.display = 'none';
     sel.classList.remove('form__fake-select_dark');
   }
   if (!e.target.closest('.header__menu') && !e.target.closest('.header__burger')) {
     menu.classList.remove('hide');
   }
   if (!e.target.closest('.order-way__circle')) {
     popups.forEach(item => {
     item.style.display = 'none';
  });
   }
});



burg.addEventListener('click',  function() {
   menu.classList.toggle('hide');
});

const cond = getComputedStyle(circlesText).display;
if (cond == 'none') {
  circles.forEach(item => {
  item.addEventListener('click', function(){
       popups.forEach(item => {
     item.style.display = 'none';
  });
  this.querySelector('.order-way__popup').style.display = 'block';

});
});
}  
 
} 

export default actions;
