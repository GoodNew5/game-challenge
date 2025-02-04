export function movingOnMap() {
  const startButton = document.querySelector(".game-menu__go-to-button--js")
  const character = document.querySelector(".game__character-icon--js")
  const container = document.querySelector(".game__map--js")
  const points = [...document.querySelectorAll(".game__map-button--js")]

  function getRelativePosition(element) {
    const characterRect = element.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()

    return {
      x: characterRect.left - containerRect.left,
      y: characterRect.top - containerRect.top,
    }
  }

  let index = 0
  let isActive = false

  function moveCharacter() {
    if (!isActive) {
      character.removeAttribute("style")
      index = 0
    }

    if (index >= points.length) {
      character.classList.remove("walking")
      startButton.removeAttribute("disabled")

      return
    }

    const path = {
      x: getRelativePosition(points[index]).x,
      y: getRelativePosition(points[index]).y,
    }

    const characterHeight = character.getBoundingClientRect().height
    const characterWidth = character.getBoundingClientRect().width
    const pointHeight = points[index].getBoundingClientRect().height
    const pointWidth = points[index].getBoundingClientRect().width
    let { x: startX, y: startY } = getRelativePosition(character)
    let distanceX = path.x - startX - characterWidth / 2  + pointWidth
    let distanceY = path.y - startY - characterHeight + pointHeight
    let steps = 50
    let step = 0

    character.classList.add("walking")
    startButton.setAttribute("disabled", 'true')
    isActive = true

    function stepAnimation() {
      if (step >= steps) {
        index++
        moveCharacter()
        return
      }

      character.style.left = startX + (distanceX * step / steps) + "px"
      character.style.top = startY + (distanceY * step / steps) + "px"

      step++
      requestAnimationFrame(stepAnimation)
    }

    stepAnimation()
  }

  startButton.addEventListener("click", () => {
    isActive = !isActive
    moveCharacter()
  })
}
