#!/bin/bash

# Push on Build Success Script
# This script runs the build and, if successful, stages all changes and pushes to main

set -e  # Exit on any error

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
print_info "Current branch: $CURRENT_BRANCH"

# Check if we're on main branch
if [ "$CURRENT_BRANCH" != "main" ]; then
    print_warning "Not on main branch. This script is designed for main branch. Continuing..."
fi

# Stage all changes
print_info "Staging all changes..."
git add .

# Check if there are any changes to commit
if git diff --cached --quiet; then
    print_warning "No changes to commit."
else
    # Create commit
    print_info "Creating commit..."
    git commit -m "Deploy: $(date +'%Y-%m-%d %H:%M:%S') - Auto-push after successful build"
    
    # Check if git user is configured
    if ! git config user.name > /dev/null 2>&1; then
        print_warning "Git user.name not set. Using 'GitHub Actions'"
        git config user.name "GitHub Actions"
    fi
    
    if ! git config user.email > /dev/null 2>&1; then
        print_warning "Git user.email not set. Using 'actions@github.com'"
        git config user.email "actions@github.com"
    fi
fi

# Run the build
print_info "Running build..."
if npm run build; then
    print_info "Build completed successfully!"
    
    # Push to main
    print_info "Pushing to main branch..."
    git push origin main
    
    print_info "✅ All changes have been successfully staged, committed, and pushed to main!"
else
    print_error "Build failed! Changes will not be pushed."
    exit 1
fi