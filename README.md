# TECRC - Translational Environmental Clinical Research Center Website

This repository contains the website files for the Translational Environmental Clinical Research Center (TECRC), a 501(c)(3) non-profit organization dedicated to researching environmental impacts on human health and translating findings into actionable medical plans.

## Website Structure

The website consists of the following pages:

- **Home (`index.html`)**: Main landing page introducing the organization and its mission
- **About Us (`about.html`)**: Information about the organization, mission, vision, values, and team
- **Research (`research.html`)**: Details about our research focus areas and methodology
- **Publications (`publications.html`)**: List of research publications and resources
- **Contact (`contact.html`)**: Contact information, form, location, and donation options

## Setup Instructions

### 1. Setting up GitHub Pages

1. Create a GitHub account if you don't already have one
2. Create a new repository named `username.github.io` (replace "username" with your actual GitHub username)
3. Upload all the files in this package to your repository
4. Go to repository Settings > Pages
5. Under "Source", select the branch containing your website files (usually "main")
6. Click "Save"
7. Your site will be published at `https://username.github.io`

### 2. Using a Custom Domain (Optional)

If you want to use a custom domain (e.g., tecrc.org):

1. Purchase a domain from a domain registrar
2. In your GitHub repository, go to Settings > Pages
3. Under "Custom domain", enter your domain name
4. Check "Enforce HTTPS" (recommended)
5. Click "Save"

6. Set up DNS records with your domain provider:
   - Add an A record pointing to GitHub's IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or add a CNAME record pointing to `yourusername.github.io`

## Customization Guide

### Images

The website template includes placeholders for images. Replace them with your own:

1. Create an `images` folder in your repository
2. Upload your images to this folder
3. Update the image paths in the HTML files to point to your images

Recommended images to add:
- Hero background image (1920x1080px)
- About page image (800x600px)
- Research area images (800x600px)
- Team member photos (square, at least 300x300px)

### Content Customization

You can customize all content by editing the HTML files:

1. Update organization details in all pages
2. Modify team information in `about.html`
3. Update research areas in `research.html`
4. Add actual publications in `publications.html`
5. Update contact information in `contact.html`

### CSS Styling

The styling is controlled by two CSS files:
- `styles.css`: Main styling for the entire website
- `additional-styles.css`: Additional styles for inner pages

You can modify colors, fonts, spacing, and other visual elements by editing these files.

## File Structure

```
tecrc-website/
├── index.html           # Home page
├── about.html           # About Us page
├── research.html        # Research page
├── publications.html    # Publications page
├── contact.html         # Contact page
├── styles.css           # Main stylesheet
├── additional-styles.css # Additional styles for inner pages
└── images/              # Image directory (create this)
    └── ... (your images)
```

## Contact Information

For questions about this website template or for help with customization, please contact your web developer.

For information about TECRC, please use the contact information provided on the Contact page.