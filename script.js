document.addEventListener("DOMContentLoaded", () => {
  // Get the time element
  const timeElement = document.querySelector('[data-testid="test-user-time"]')

  if (timeElement) {
    function updateTime() {
      const currentTime = Date.now()
      timeElement.textContent = currentTime
    }

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

  // Add visible focus indicators
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

  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    const fullNameInput = document.getElementById("fullName")
    const emailInput = document.getElementById("email")
    const subjectInput = document.getElementById("subject")
    const messageInput = document.getElementById("message")
    const successMessage = document.getElementById("successMessage")

    // Validation functions
    function validateFullName(value) {
      return value.trim().length > 0
    }

    function validateEmail(value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(value)
    }

    function validateSubject(value) {
      return value.trim().length > 0
    }

    function validateMessage(value) {
      return value.trim().length >= 10
    }

    function showError(input, message) {
      const errorElement = document.getElementById(`${input.id}-error`)
      if (errorElement) {
        errorElement.textContent = message
        errorElement.classList.add("show")
        input.classList.add("error")
      }
    }

    function clearError(input) {
      const errorElement = document.getElementById(`${input.id}-error`)
      if (errorElement) {
        errorElement.textContent = ""
        errorElement.classList.remove("show")
        input.classList.remove("error")
      }
    }

    // Real-time validation
    fullNameInput.addEventListener("blur", () => {
      if (!validateFullName(fullNameInput.value)) {
        showError(fullNameInput, "Full name is required")
      } else {
        clearError(fullNameInput)
      }
    })

    emailInput.addEventListener("blur", () => {
      if (!validateEmail(emailInput.value)) {
        showError(emailInput, "Please enter a valid email (e.g., name@example.com)")
      } else {
        clearError(emailInput)
      }
    })

    subjectInput.addEventListener("blur", () => {
      if (!validateSubject(subjectInput.value)) {
        showError(subjectInput, "Subject is required")
      } else {
        clearError(subjectInput)
      }
    })

    messageInput.addEventListener("blur", () => {
      if (!validateMessage(messageInput.value)) {
        showError(messageInput, "Message must be at least 10 characters")
      } else {
        clearError(messageInput)
      }
    })

    // Form submission
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Clear previous success message
      successMessage.classList.remove("show")
      successMessage.textContent = ""

      // Validate all fields
      let isValid = true

      if (!validateFullName(fullNameInput.value)) {
        showError(fullNameInput, "Full name is required")
        isValid = false
      } else {
        clearError(fullNameInput)
      }

      if (!validateEmail(emailInput.value)) {
        showError(emailInput, "Please enter a valid email (e.g., name@example.com)")
        isValid = false
      } else {
        clearError(emailInput)
      }

      if (!validateSubject(subjectInput.value)) {
        showError(subjectInput, "Subject is required")
        isValid = false
      } else {
        clearError(subjectInput)
      }

      if (!validateMessage(messageInput.value)) {
        showError(messageInput, "Message must be at least 10 characters")
        isValid = false
      } else {
        clearError(messageInput)
      }

      // If all valid, show success message
      if (isValid) {
        successMessage.textContent = "Thank you! Your message has been sent successfully. I'll get back to you soon!"
        successMessage.classList.add("show")

        // Reset form
        contactForm.reset()

        // Scroll to success message
        successMessage.scrollIntoView({ behavior: "smooth", block: "center" })

        console.log("[v0] Form submitted successfully with data:", {
          fullName: fullNameInput.value,
          email: emailInput.value,
          subject: subjectInput.value,
          message: messageInput.value,
        })
      }
    })
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    const href = link.getAttribute("href")
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active")
    } else {
      link.classList.remove("active")
    }
  })

  // Log that profile card is initialized
  console.log("Profile card initialized successfully")
})

