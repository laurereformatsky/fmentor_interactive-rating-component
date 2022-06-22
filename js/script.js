import ratingChoicesIsChecked from './rating-choices-checked.js';

const card = document.querySelector('.card');
const ratingState = document.querySelector('#rating-state');
const thankYouState = document.querySelector('#thank-you-state');
const radioRating = document.querySelectorAll('.radio-rating');
const numberRating = document.querySelector('#number-rating');
const form = document.querySelector('#form');

// Click or key press enter event on radio rating
radioRating.forEach((radio) => {
  radio.addEventListener('click', (event) => {
    // Remove style to radio rating
    document.querySelector('div[style]')?.removeAttribute('style');

    // Add style to radio rating
    event.currentTarget.style.color = '#FFF';
    event.currentTarget.style.backgroundColor = '#7C8798';
    event.currentTarget.style.transition = 'all 0.25s linear';
  });
});

// Submit event on form
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (ratingChoicesIsChecked() === undefined) {
    alert('Please select a rating...');
    card.classList.add('animate__animated', 'animate__shakeX');

    setTimeout(() => {
      card.classList.remove('animate__animated', 'animate__shakeX');
    }, 750);
  } else {
    numberRating.textContent = ratingChoicesIsChecked();
    ratingState.classList.add('hidden');
    thankYouState.classList.remove('hidden');
  }
});
