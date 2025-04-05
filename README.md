# Mosbeh Barhoumi Portfolio

This repository contains the source code for Mosbeh Barhoumi's professional portfolio website, showcasing his experience as an MLOps Engineer and AI Specialist.

## Features

- Modern, responsive design built with Next.js and Tailwind CSS
- Comprehensive sections highlighting skills, experience, and projects
- Performance optimized with lazy loading and resource optimization
- SEO-friendly with metadata, sitemap, and robots.txt

## Local Development

To run this project locally:

1. Clone the repository
   ```bash
   git clone https://github.com/mosbeh-barhoumi/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This portfolio is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. Create a new GitHub repository named `mosbeh-barhoumi.github.io`
2. Push this code to the repository
3. In the repository settings, enable GitHub Pages and select the GitHub Actions option
4. The site will be automatically built and deployed when changes are pushed to the main branch

## Project Structure

- `src/app/` - Next.js pages
- `src/components/` - Reusable UI components
  - `layout/` - Layout components (Header, Footer, etc.)
  - `sections/` - Section components for different parts of the portfolio
  - `ui/` - Small UI components
- `src/lib/` - Utility functions
- `public/` - Static assets

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- GitHub Actions (CI/CD)
