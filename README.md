# Zariyat Adeniran - Profile Card & Portfolio
Live URL: https://zariyata2020.github.io/Profile-Card/

A responsive, accessible multi-page portfolio built with semantic HTML, CSS, and vanilla JavaScript. Includes a profile card, about me page, and contact form with validation.

## Features

✅ Multi-Page Portfolio - Profile, About Me, and Contact pages
✅ Semantic HTML - Uses proper HTML5 elements (article, figure, nav, section, form)
✅ Fully Responsive - Works on mobile, tablet, and desktop
✅ Accessible - WCAG compliant with keyboard navigation and screen reader support
✅ Form Validation - Real-time email and message validation with error handling
✅ Testable - All elements include required data-testid attributes
✅ Real-time Time Display - Shows current time in milliseconds
✅ Social Links - Direct links to LinkedIn, GitHub, Twitter, and Instagram
✅ Modern Design - Clean, professional card layout with hover effects

## Project Structure

\`\`\`
profile-card/
├── index.html      # Profile card page with social links
├── about.html      # About Me page with reflective sections
├── contact.html    # Contact form with validation
├── styles.css      # Responsive styling for all pages
├── script.js       # JavaScript for interactions and form validation
└── README.md       # This file
\`\`\`

## Pages Overview

### 1. Profile Card (index.html)
- Circular profile image
- Name and professional title
- Bio/description
- Current time display
- Social media links (LinkedIn, GitHub, Twitter, Instagram)
- Hobbies and dislikes
- Connect button

### 2. About Me (about.html)
- Professional journey section
- Skills and expertise
- Achievements and milestones
- Personal interests
- Vision and goals
- Reflective content about your career path

### 3. Contact (contact.html)
- Contact form with validation
- Email field (validates email format)
- Message field (minimum 10 characters)
- Success/error messages
- Keyboard accessible form inputs
- Real-time validation feedback

## Getting Started

### Option 1: Open Directly in Browser
1. Download or clone this project
2. Open `index.html` in your web browser
3. The profile card will display immediately
4. Use navigation links to visit other pages

### Option 2: Use a Local Server (Recommended)
1. Open the project folder in VSCode
2. Install the "Live Server" extension
3. Right-click on `index.html` and select "Open with Live Server"
4. The page will open at `http://localhost:5500`

### Option 3: Using Python
\`\`\`bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
\`\`\`
Then visit `http://localhost:8000`

## Customization

### Update Personal Information
Edit the respective HTML files and replace:
- **index.html**: Name, title, bio, social links, avatar, hobbies, dislikes
- **about.html**: Journey, skills, achievements, interests, vision
- **contact.html**: Form labels and placeholder text

### Change Colors
Edit `styles.css` and modify:
- Primary color: `#7eccc4` (teal)
- Background gradient: Lines 24-25
- Text colors: Various color properties
- Button hover states: Search for `hover` in CSS

### Add/Remove Content
- Hobbies/Dislikes: Edit the `<ul>` lists in `index.html`
- About sections: Edit the `<section>` elements in `about.html`
- Form fields: Edit the form in `contact.html` (ensure data-testid attributes remain)

## Testing

All required elements include `data-testid` attributes for automated testing:

### Profile Card (index.html)
- `test-profile-card` - Main card container
- `test-user-name` - User's name
- `test-user-bio` - Biography paragraph
- `test-user-time` - Current time in milliseconds
- `test-user-avatar` - Profile image
- `test-user-social-links` - Social links container
- `test-user-social-linkedin` - LinkedIn link
- `test-user-social-github` - GitHub link
- `test-user-social-twitter` - Twitter link
- `test-user-social-instagram` - Instagram link
- `test-user-hobbies` - Hobbies list
- `test-user-dislikes` - Dislikes list

### About Me (about.html)
- `test-about-page` - Main about page container
- `test-journey-section` - Professional journey section
- `test-skills-section` - Skills and expertise section
- `test-achievements-section` - Achievements section
- `test-interests-section` - Personal interests section
- `test-vision-section` - Vision and goals section

### Contact (contact.html)
- `test-contact-page` - Main contact page container
- `test-contact-form` - Contact form element
- `test-email-input` - Email input field
- `test-email-error` - Email error message
- `test-message-input` - Message textarea field
- `test-message-error` - Message error message
- `test-submit-button` - Form submit button
- `test-success-message` - Success message after submission
- `test-error-message` - General error message

## Form Validation

The contact form includes real-time validation:

- **Email**: Must be a valid email format (e.g., user@example.com)
- **Message**: Must be at least 10 characters long
- **Required Fields**: Both email and message are required
- **Error Messages**: Clear, descriptive messages appear below each field
- **Success Message**: Displays after successful form submission
- **Keyboard Navigation**: Tab through form fields, Enter to submit

## Accessibility Features

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ Keyboard navigation support (Tab, Enter, Arrow keys)
- ✅ Focus indicators for interactive elements
- ✅ Screen reader friendly
- ✅ High contrast mode support
- ✅ Reduced motion support
- ✅ Form labels with aria-describedby
- ✅ Error messages linked to form fields

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Deploy to Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Deploy!

### Deploy to GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose main branch and save
5. Your site will be live at `https://yourusername.github.io/profile-card`

## Navigation

All pages include a navigation bar at the top with links to:
- Profile (index.html)
- About Me (about.html)
- Contact (contact.html)

The active page is highlighted in the navigation for easy orientation.

## License

Free to use and modify for personal projects.

## Questions?

Feel free to reach out via:
- LinkedIn: [linkedin.com/in/zariyat-adeniran-ab8765327](https://linkedin.com/in/zariyat-adeniran-ab8765327)
- GitHub: [github.com/zariyata2020](https://github.com/zariyata2020)
- Twitter: [@zariyat54327](https://twitter.com/zariyat54327)
- Instagram: [@the_sza._](https://instagram.com/the_sza._)
