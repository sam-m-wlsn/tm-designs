'use strict';

(function () {
  var name = 'image-gallery';
  var classes = {
    activeItem: "".concat(name, "__item--active"),
    isOpen: "".concat(name, "--open"),
    close: "".concat(name, "__close"),
    control: "".concat(name, "__control")
  };
  var slides = document.querySelectorAll(".".concat(name, "__item"));
  slides.forEach(function (entity, index) {
    entity.addEventListener('click', function (event) {
      console.log(event);
      entity.classList.add(classes.activeItem);
      document.body.classList.add(classes.isOpen);
    });
  });
  var close = document.createElement('a');
  close.classList.add('d-none', classes.close);
  close.innerHTML = '&times;';
  close.href = '#';
  document.body.appendChild(close);
  close.addEventListener('click', function (event) {
    document.querySelectorAll(".".concat(classes.activeItem)).forEach(function (item) {
      item.classList.remove(classes.activeItem);
    });
    document.body.classList.remove(classes.isOpen);
  });
  var next = document.createElement('a');
  next.classList.add('d-none', classes.control, "".concat(classes.activeItem, "--next"));
  next.innerHTML = '>';
  next.href = '#';
  document.body.appendChild(next);
  var prev = document.createElement('a');
  prev.classList.add('d-none', classes.control, "".concat(classes.activeItem, "--prev"));
  prev.innerHTML = '<';
  prev.href = '#';
  document.body.appendChild(prev);
})();