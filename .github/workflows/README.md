# Environment Variables for CI/CD

## Required GitHub Secrets

To make the CI/CD pipeline work properly, you need to add the following secrets to your GitHub repository:

### For Vercel Deployment:
- `VERCEL_TOKEN` - Your Vercel account token
- `VERCEL_ORG_ID` - Your Vercel organization ID
- `VERCEL_PROJECT_ID` - Your Vercel project ID

### For Netlify Deployment (Alternative):
- `NETLIFY_AUTH_TOKEN` - Your Netlify personal access token
- `NETLIFY_SITE_ID` - Your Netlify site ID

### For GitHub Pages Deployment:
- GitHub Pages deployment uses the built-in `GITHUB_TOKEN` which is available by default

## How to set up secrets in GitHub:

1. Go to your repository on GitHub
2. Navigate to Settings > Secrets and variables > Actions
3. Click "New repository secret"
4. Add each secret with its corresponding value

## How to get Vercel tokens:

1. Go to https://vercel.com/account/tokens
2. Create a new token
3. Note down your organization ID and project ID from your Vercel dashboard

## How to get Netlify tokens:

1. Go to https://app.netlify.com/user/applications/personal
2. Create a new personal access token
3. Get your site ID from your site's settings in Netlify dashboard

## Default Behavior:
- The CI workflow will run linting, testing, and build checks on every push and pull request
- The deployment workflow will only run after successful CI checks and only on the main branch
- If no deployment tokens are provided, the workflow will still run build checks to ensure the code is deployable