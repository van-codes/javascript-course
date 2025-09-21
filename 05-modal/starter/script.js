// JavaScript Hour 5: Modal
'use strict';

console.log('=== MODAL DEVELOPMENT: FOUNDATION & CLASS TOGGLING ===');

// Modal Element
const modalE1 = document.querySelector('.modal');

//Overlay Element
const overlayE1 = document.querySelector('.overlay');

//Close Modal Button
const btnCloseModalE1 = document.querySelector('.close-modal');

//Open Modal Button
const btnsOpenModalE1 = document.querySelectorAll('.show-modal');

// openModal function
const openModal = function () {
  // Remove hidden class from modal
  modalE1.classList.remove('hidden');

  // Remove hidden class from overlay
  overlayE1.classList.remove('hidden');
};

// closeModal function
const closeModal = function () {
  // Add hidden class to modal
  modalE1.classList.add('hidden');

  // Add hidden class to overlay
  overlayE1.classList.add('hidden');
};
btnsOpenModalE1.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalE1.addEventListener('click', closeModal);
overlayE1.addEventListener('click', closeModal);
