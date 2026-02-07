# Push this project to a new GitHub repo

Your project is committed locally. Follow these steps to put it on GitHub.

## 1. Create a new repository on GitHub

1. Open **https://github.com/new**
2. Set **Repository name** (e.g. `val-2026` or `valentine-proposal`)
3. Choose **Public** (or Private)
4. **Do not** check "Add a README" or "Add .gitignore" (you already have them)
5. Click **Create repository**

## 2. Add the remote and push

After creating the repo, GitHub will show you a URL. Use it in one of these ways.

**If you use HTTPS** (recommended):

```bash
cd "/Users/nickuslee/Desktop/val/val 2026"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

**If you use SSH**:

```bash
cd "/Users/nickuslee/Desktop/val/val 2026"
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and the repo name you chose.

## 3. Authenticate if prompted

- **HTTPS:** GitHub may ask for a username and **Personal Access Token** (not your password). Create one at: https://github.com/settings/tokens  
- **SSH:** Ensure your SSH key is added to GitHub: https://github.com/settings/keys  

Done. Your code will be on GitHub.
