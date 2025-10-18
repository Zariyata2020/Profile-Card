# Zariyat Adeniran - Profile Card

A responsive, accessible profile card component built with semantic HTML, CSS, and vanilla JavaScript.

## Features

✅ **Semantic HTML** - Uses proper HTML5 elements (article, figure, nav, section)
✅ **Fully Responsive** - Works on mobile, tablet, and desktop
✅ **Accessible** - WCAG compliant with keyboard navigation and screen reader support
✅ **Testable** - All elements include required data-testid attributes
✅ **Real-time Time Display** - Shows current time in milliseconds
✅ **Social Links** - Direct links to LinkedIn, GitHub, Twitter, and Instagram
✅ **Modern Design** - Clean, professional card layout with hover effects

## Project Structure

\`\`\`
profile-card/
├── index.html      # Main HTML file with semantic markup
├── styles.css      # Responsive styling with accessibility features
├── script.js       # JavaScript for time updates and interactions
└── README.md       # This file
\`\`\`

## Getting Started

### Option 1: Open Directly in Browser
1. Download or clone this project
2. Open `index.html` in your web browser
3. The profile card will display immediately

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
Edit `index.html` and replace:
- Name: "Zariyat Adeniran"
- Title: "Full Stack Developer"
- Bio: Update the biography text
- Social Links: Replace URLs with your own
- Avatar: Change the image URL in the `<img>` tag

### Change Colors
Edit `styles.css` and modify:
- Primary color: `#7eccc4` (teal)
- Background gradient: Lines 24-25
- Text colors: Various color properties

### Add/Remove Hobbies or Dislikes
Edit the `<ul>` lists in `index.html` under the hobbies and dislikes sections

## Testing

All required elements include `data-testid` attributes for automated testing:

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

## Accessibility Features

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ Keyboard navigation support
- ✅ Focus indicators for interactive elements
- ✅ Screen reader friendly
- ✅ High contrast mode support
- ✅ Reduced motion support

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

## License

Free to use and modify for personal projects.

## Questions?

Feel free to reach out via:
- LinkedIn: [linkedin.com/in/zariyat-adeniran-ab8765327](https://linkedin.com/in/zariyat-adeniran-ab8765327)
- GitHub: [github.com/zariyata2020](https://github.com/zariyata2020)
- Twitter: [@zariyat54327](https://twitter.com/zariyat54327)
