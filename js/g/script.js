loadGame()

let isAspectRatioMaximized = false

function toggleAspectRatio() {
  const gameFrame = document.getElementById("gameFrame")
  const fullscreenBtn = document.getElementById("fullscreenBtn")

  if (!isAspectRatioMaximized) {
    maximizeIframe(gameFrame, fullscreenBtn)
    document
      .getElementById("fullscreenIcon")
      .setAttribute("data-feather", "minimize")
  } else {
    minimizeIframe(gameFrame)
    document
      .getElementById("fullscreenIcon")
      .setAttribute("data-feather", "maximize")
  }

  feather.replace()
  isAspectRatioMaximized = !isAspectRatioMaximized
}

function maximizeIframe(gameFrame, fullscreenBtn) {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  const buttonHeight = fullscreenBtn.offsetHeight
  const gapFromBottom = 100
  const maxIframeHeight = windowHeight - buttonHeight - gapFromBottom
  const aspectRatio = 45 / 26
  const maxIframeWidth = maxIframeHeight * aspectRatio
  const newWidth = Math.min(maxIframeWidth, windowWidth)
  const newHeight = newWidth / aspectRatio
  gameFrame.style.width = newWidth + "px"
  gameFrame.style.height = newHeight + "px"
}

function minimizeIframe(gameFrame) {
  gameFrame.style.width = "75%"
  gameFrame.style.height = ""
}

window.addEventListener("resize", () => {
  if (isAspectRatioMaximized) {
    const gameFrame = document.getElementById("gameFrame")
    const fullscreenBtn = document.getElementById("fullscreenBtn")
    maximizeIframe(gameFrame, fullscreenBtn)
  }
})

function loadGame() {
  const urlParams = new URLSearchParams(window.location.search)
  const game = urlParams.get("game")
  var iframe = "game/" + game + ".html"
  document.getElementById("gameFrame").src = iframe
}
