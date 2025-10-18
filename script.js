document.addEventListener("DOMContentLoaded", () => {
  // Get the time element
  const timeElement = document.querySelector('[data-testid="test-user-time"]')

  if (timeElement) {
    function updateTime() {
      const currentTime = Date.now()
      timeElement.textContent = currentTime
    }

    // Update time immediately
    updateTime()

    setInterval(updateTime, 1000)
  }

  const socialLinks = document.querySelectorAll(".social-link")
  socialLinks.forEach((link) => {
    link.addEventListener("keydown", function (e) {
      // Allow Enter and Space to activate the link
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        this.click()
      }
    })
  })

  const focusableElements = document.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])')

  // Focus indicators
  focusableElements.forEach((element) => {
    element.addEventListener("focus", function () {
      this.style.outline = "2px solid #7eccc4"
      this.style.outlineOffset = "2px"
    })

    element.addEventListener("blur", function () {
      this.style.outline = ""
      this.style.outlineOffset = ""
    })
  })

  const connectBtn = document.querySelector(".connect-btn")
  if (connectBtn) {
    connectBtn.addEventListener("click", () => {
      alert("Thanks for your interest! Feel free to reach out via LinkedIn or Twitter.")
    })
  }

  // Log that profile card is initialized
  console.log("[v0] Profile card initialized successfully")
})
