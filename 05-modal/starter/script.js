// JavaScript Part 5 Hour 1: Modal
'use strict';

// Modal Element
const modalE1 = document.querySelector('.modal');

//Overlay Element
const overlayE1 = document.querySelector('.overlay');

//Close Modal Button
const btnCloseModalE1 = document.querySelector('.close-modal');

//Open Modal Button
const btnsOpenModalE1 = document.querySelectorAll('.show-modal');

let lastFocusedButton = null;
// openModal function
const openModal = function () {
  // Remove hidden class from modal
  modalE1.classList.remove('hidden');

  // Remove hidden class from overlay
  overlayE1.classList.remove('hidden');

  modalE1.focus();
  lastFocusedButton = document.activeElement;
};

// closeModal function
const closeModal = function () {
  // Add hidden class to modal
  modalE1.classList.add('hidden');

  // Add hidden class to overlay
  overlayE1.classList.add('hidden');
  if (lastFocusedButton) {
    lastFocusedButton.focus();
  }
};
btnsOpenModalE1.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalE1.addEventListener('click', closeModal);
overlayE1.addEventListener('click', closeModal);

////////////////////////////////////
// JavaScript Part 5 Hour 2: Keyboard Events & Advanced UX

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalE1.classList.contains('hidden')) {
    closeModal();
  }
});

modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');
btnCloseModalEl.setAttribute('aria-label', 'Close modal');
