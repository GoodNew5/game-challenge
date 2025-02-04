
export function slider() {
  const sliderTapeWrapper = document.querySelector(".game-menu-slider__tape-wrapper--js")
  const sliderTape = document.querySelector(".game-menu-slider__tape--js")
  const sliderNavPrevButton = document.querySelector(".game-menu-slider__nav-prev-button--js")
  const sliderNavNextButton = document.querySelector(".game-menu-slider__nav-next-button--js")
  const slides = [...sliderTapeWrapper.children]
  const gap = 10
  let shiftWidth = getShiftWidth()
  let sliderVisibleArea = sliderTape.offsetWidth
  let totalShiftWidth = shiftWidth * slides.length

  sliderTapeWrapper.style.gap = `${gap}px`
  let currentPosition = 0

  function getShiftWidth()  {
    const slide = slides[0]

    return slide.offsetWidth + gap
  }

  const moveTape = () => {
    sliderTapeWrapper.style.transform = `translateX(-${currentPosition}px)`
  }

  const handleSliderPrevButton = () => {
    sliderNavNextButton.removeAttribute("disabled")
    shiftWidth = getShiftWidth()

    if (currentPosition - shiftWidth < 0) return

    currentPosition -= shiftWidth

    sliderNavPrevButton.toggleAttribute("disabled", currentPosition === 0)

    moveTape()
  }

  const handleSliderNextButton = () => {
    shiftWidth = getShiftWidth()
    sliderVisibleArea = sliderTape.offsetWidth
    totalShiftWidth = shiftWidth * slides.length
    sliderNavPrevButton.removeAttribute("disabled")

    if (currentPosition + sliderVisibleArea >= totalShiftWidth) {
      return
    }

    currentPosition += shiftWidth

    sliderNavNextButton.toggleAttribute("disabled", currentPosition + sliderVisibleArea >= totalShiftWidth);

    moveTape()
  }

  sliderNavNextButton.toggleAttribute("disabled", currentPosition + sliderVisibleArea >= totalShiftWidth)
  sliderNavPrevButton.toggleAttribute("disabled", currentPosition === 0)

  sliderNavPrevButton.addEventListener("click", (event) => {
    handleSliderPrevButton()
  })

  sliderNavNextButton.addEventListener("click", (event) => {
    handleSliderNextButton()
  })
}


