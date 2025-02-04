export function formatPlayerRatingRow(player) {
  const { place, lastName, name, points } = player

  return `<span class="game__rating-modal-row-cell game__rating-modal-row-cell--place">
            ${place}
          </span>
          <span class="game__rating-modal-row-cell game__rating-modal-row-cell--full-name">
            ${name} ${lastName}
          </span>
          <span class="game__rating-modal-row-cell game__rating-modal-row-cell--points">
            ${points}
          </span>
        `
}