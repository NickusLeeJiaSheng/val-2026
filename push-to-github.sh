#!/usr/bin/env bash
# Usage: ./push-to-github.sh https://github.com/YOUR_USERNAME/YOUR_REPO.git
# Or:    ./push-to-github.sh git@github.com:YOUR_USERNAME/YOUR_REPO.git

if [ -z "$1" ]; then
  echo "Usage: $0 <repository-url>"
  echo "Example: $0 https://github.com/yourusername/val-2026.git"
  exit 1
fi

cd "$(dirname "$0")"
git remote remove origin 2>/dev/null
git remote add origin "$1"
git push -u origin main
