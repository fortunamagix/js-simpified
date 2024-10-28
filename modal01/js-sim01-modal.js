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
  //remove those 2 lines above and call function 'closeModal' here

})

closeModalButton.addEventListener('click', () => {
  modal.classList.remove('open')
  overlay.classList.remove('open')
  //remove those 2 lines above and call function 'closeModal' here
})


//can simplified using this function
function closeModal() {
  modal.classList.remove('open')
  overlay.classList.remove('open')
}

/*
most simplified using this code instead
 */

closeModalButton.addEventListener('click',closeModal)
overlay.addEventListener('click',closeModal)