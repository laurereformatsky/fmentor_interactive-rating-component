const ratingChoices = document.querySelectorAll('.rating-choices');

// Verifing if rating choices is checked
export default function ratingChoicesIsChecked() {
  let choice;
  ratingChoices.forEach((ratingChoice) => {
    if (ratingChoice.checked) {
      return choice = ratingChoice.value;
    }
  });
  return choice;
}
