import { getRatingPlayers } from '../helpers/getRatingPlayers'
import { formatPlayerRatingRow } from "../helpers/formatPlayerRatingRow"

export function ratingModal() {
  const ratingModalButton = document.querySelector('.game-menu__rating-button--js')
  const ratingModal = document.querySelector('.game__rating-modal--js')
  const ratingButtonClose = document.querySelector('.game__rating-modal-close-button--js')
  const ratingModalContent = document.querySelector('.game__rating-modal-content-inner--js')

  getRatingPlayers().forEach(player => {
    const rowDiv = document.createElement('div')

    rowDiv.classList.add('game__rating-modal-row')

    if (player.isFriend) {
      rowDiv.classList.add('game__rating-modal-row--friend')
    }

    rowDiv.innerHTML = formatPlayerRatingRow(player)

    ratingModalContent.appendChild(rowDiv)
  })

  ratingModalButton.addEventListener('click', event => {
    ratingModal.showModal()
  })

  ratingButtonClose.addEventListener('click', event => {
    ratingModal.close()
  })

  ratingModal.addEventListener('click', event => {
    if (event.target.nodeName !== 'DIALOG') return

    ratingModal.close()
  })

}

