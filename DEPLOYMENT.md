# GitHub Pages Deployment Guide

This document provides step-by-step instructions for deploying your portfolio website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine

## Deployment Steps

1. **Create a new GitHub repository**
   - Go to [GitHub](https://github.com) and sign in to your account
   - Click on the "+" icon in the top right corner and select "New repository"
   - Name your repository `yourusername.github.io` (replace "yourusername" with your actual GitHub username)
   - Make the repository public
   - Click "Create repository"

2. **Initialize Git in your project folder**
   ```bash
   cd /path/to/portfolio/portfolio_app
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Connect your local repository to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git branch -M main
   git push -u origin main
   ```

4. **Verify GitHub Actions is running**
   - Go to your repository on GitHub
   - Click on the "Actions" tab
   - You should see the workflow running
   - Once completed, your site will be available at `https://yourusername.github.io`

5. **Configure custom domain (optional)**
   - If you have a custom domain, go to your repository settings
   - Scroll down to the "GitHub Pages" section
   - Enter your custom domain in the "Custom domain" field
   - Save your changes
   - Create a CNAME record with your domain provider pointing to `yourusername.github.io`

## Troubleshooting

- If your site is not deploying, check the Actions tab for any error messages
- Ensure your repository is named correctly as `yourusername.github.io`
- Verify that the GitHub Pages source is set to "GitHub Actions" in your repository settings

## Updating Your Portfolio

To update your portfolio after deployment:

1. Make your changes locally
2. Commit your changes
   ```bash
   git add .
   git commit -m "Update portfolio"
   ```
3. Push to GitHub
   ```bash
   git push origin main
   ```
4. GitHub Actions will automatically rebuild and deploy your site
