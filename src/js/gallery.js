'use strict';

(function(){
  const name  = 'image-gallery';
  const classes = {
    activeItem: `${name}__item--active`,
    isOpen: `${name}--open`,
    close: `${name}__close`,
    control: `${name}__control`
  }
  const slides = document.querySelectorAll(`.${name}__item`);

  slides.forEach((entity, index) => {
    entity.addEventListener('click', event => {
      console.log(event);
      entity.classList.add(classes.activeItem);
      document.body.classList.add(classes.isOpen);
    });
  });

  const close = document.createElement('a');
  close.classList.add('d-none', classes.close);
  close.innerHTML = '&times;';
  close.href = '#';
  document.body.appendChild(close);
  close.addEventListener('click', event => {
    document.querySelectorAll(`.${classes.activeItem}`).forEach(item => {
      item.classList.remove(classes.activeItem);
    });
    document.body.classList.remove(classes.isOpen);
  });

  const next = document.createElement('a');
  next.classList.add('d-none', classes.control, `${classes.activeItem}--next`);
  next.innerHTML = '>';
  next.href = '#';
  document.body.appendChild(next);

  const prev = document.createElement('a');
  prev.classList.add('d-none', classes.control, `${classes.activeItem}--prev`);
  prev.innerHTML = '<';
  prev.href = '#';
  document.body.appendChild(prev);
})();