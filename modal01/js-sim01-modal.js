//select all elements by ID
/*
- modal
- open-modal-btn
- close-modal-btn
- overlay
*/

const modal = document.querySelector('#modal')
const openModalButton = document.querySelector('#open-modal-btn')
const closeModalButton = document.querySelector('#close-modal-btn')
const overlay = document.querySelector('#overlay')

/*
TODO: Create a click event listener for the open-modal-btn
BONUS: Also add the class 'open' to the overlay
 */
//Bonus
openModalButton.addEventListener('click', () => {
  modal.classList.add('open')
  overlay.classList.add('open')
})

closeModalButton.addEventListener('click', () => {
  modal.classList.remove('open')
  overlay.classList.remove('open')
})