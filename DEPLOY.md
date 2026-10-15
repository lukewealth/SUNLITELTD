# Deployment Guide

This repository uses a script-based deployment workflow that automatically stages changes and pushes to main after a successful build.

## Overview

The deployment workflow consists of:

1. **Manual Build & Push**: Use the `push-on-build.sh` script to build and push changes
2. **GitHub Actions**: Automated CI/CD workflow that runs tests and deploys on pushes to main

## Manual Deployment

### Prerequisites

- Node.js (v20+)
- Git configured with appropriate credentials
- Vercel CLI (optional, for local preview)

### Using the Push-on-Build Script

The `push-on-build.sh` script handles the complete workflow:

1. Stages all changes
2. Creates a commit with timestamp
3. Runs the build (`npm run build`)
4. Pushes to main branch on success

**To use the script:**

```bash
# Make the script executable
chmod +x push-on-build.sh

# Run the script
./push-on-build.sh
```

### Script Features

- ✅ Automatically stages all changes
- ✅ Creates descriptive commit messages with timestamps
- ✅ Runs the build and checks for success
- ✅ Pushes to main branch only if build succeeds
- ✅ Gracefully handles git configuration
- ✅ Provides clear, colored output

## Automated CI/CD

The repository includes a GitHub Actions workflow that automates the deployment process.

### GitHub Actions Workflow

The workflow is located in `.github/workflows/deploy.yml` and:

1. **Runs on:** Push to main branch
2. **Steps:**
   - Checkout the code
   - Setup Node.js
   - Install dependencies
   - Run linting
   - Build the project
   - Deploy to Vercel

### GitHub Actions Benefits

- ✅ Automatic testing on every push
- ✅ Automatic deployment to Vercel
- ✅ Only deploys on successful builds
- ✅ Protected branch enforcement

## Branch Management

- **main**: Production branch - all deployments come from here
- **feature/**: Feature branches for development
- **develop/**: Development branch (if used)

## Environment Variables

The project uses environment variables for configuration:

### Required Environment Variables

- `RESEND_API_KEY`: Resend email service API key
- `INQUIRY_TO_EMAIL`: Email inbox for inquiries
- `INQUIRY_FROM_EMAIL`: Verified sender email in Resend

### Local Development

To set up local environment:

```bash
# Copy example to local (don't commit)
cp .env.example .env.local

# Add your values
# Then run development
npm run dev
```

## Build Process

### Local Build

```bash
npm run build
# Or use the deployment script
./push-on-build.sh
```

### Build Output

- Build output is placed in `dist/`
- All build artifacts are cached in `.vercel/` during development
- Only source code and build results are committed

## Rollback Strategy

If issues arise after deployment:

1. **Manual Rollback**: Revert to previous commit on main
2. **Git Revert**: Use `git revert <commit-hash>` to create a revert commit
3. **Vercel Dashboard**: Use Vercel's automatic rollback features

## Troubleshooting

### Common Issues

**Issue**: Script fails because of git credentials
**Solution**: Configure git:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**Issue**: Build fails with dependency errors
**Solution**: Run:
```bash
npm install
```

**Issue**: Git push fails due to authentication
**Solution**: Ensure you have write access to the repository and configure appropriate Git credentials

## Best Practices

1. **Keep commits meaningful**: The script adds timestamps for better traceability
2. **Test locally**: Always test your changes before running the deployment script
3. **Check environment variables**: Ensure all required environment variables are set
4. **Review changes**: Review staged changes before committing
5. **Pull latest**: Before pushing, pull the latest changes from main to avoid conflicts

## Version Control

### Commit Message Format

The script creates commit messages in this format:

```
Deploy: 2024-01-15 14:30:45 - Auto-push after successful build
```

### Git History

All deployments are tracked in git history for easy rollback and auditing.

## Security Notes

- Environment variables should never be committed
- The `.gitignore` file protects sensitive files
- Use Git secrets or GitHub secrets for production credentials

## Support

For issues with deployment or build process:
1. Check the GitHub Actions tab in the repository
2. Review the build logs
3. Check the Vercel dashboard for deployment details
4. Refer to this documentation for common troubleshooting steps