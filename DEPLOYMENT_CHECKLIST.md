# Quick Deployment Checklist ✅

## Before You Start
- [ ] GitHub account created
- [ ] Git installed on computer
- [ ] Internet connection working

## Deployment Steps (5 Minutes)

### 1️⃣ Choose Your Method

**Option A: GitHub Desktop (Easier)** ⭐ Recommended
- Download: https://desktop.github.com/
- Install and sign in
- Add repository → Publish → Enable Pages

**Option B: Command Line (Faster if you know Git)**
- Open PowerShell in project folder
- Run: git init, git add, git commit, git push
- Enable Pages on GitHub website

### 2️⃣ Create Repository

**On GitHub.com:**
1. Go to https://github.com/new
2. Name: `infratech-va`
3. Make it **Public** ✅
4. Click "Create repository"

### 3️⃣ Upload Files

**GitHub Desktop:**
- File → Add Local Repository → Browse to project
- Click "Publish repository"

**Command Line:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/infratech-va.git
git branch -M main
git push -u origin main
```

### 4️⃣ Enable GitHub Pages

1. Go to repository Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: main, Folder: / (root)
4. Click Save

### 5️⃣ Wait & Access

- Wait 2-5 minutes ⏱️
- Visit: `https://YOUR_USERNAME.github.io/infratech-va/`
- Share the link! 🎉

---

## Common Issues & Quick Fixes

| Problem | Solution |
|---------|----------|
| Git not found | Install Git from git-scm.com |
| Can't authenticate | Use Personal Access Token instead of password |
| Site not showing | Wait 5 mins, clear cache (Ctrl+F5) |
| Images broken | Check file paths are correct |
| CSS not loading | Verify all files pushed to GitHub |

---

## After Deployment

✅ Test your live site on:
- Desktop browser
- Mobile phone
- Tablet

✅ Share your link everywhere!
✅ Update anytime by pushing new changes

---

## Need Help?

📖 Read: DEPLOYMENT_GUIDE.md (detailed instructions)
🔗 GitHub Docs: https://pages.github.com/
💬 Search errors on Google or Stack Overflow

---

**Your Website URL Will Be:**
```
https://[your-github-username].github.io/infratech-va/
```

Example: `https://john123.github.io/infratech-va/`
