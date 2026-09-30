# Liu Lab website: start here

This is a complete static website for GitHub Pages. There is nothing to install or build. Upload the files themselves, not the ZIP archive. The same files also open locally by double-clicking `index.html`.

## 1. Review and personalize

1. Unzip `liu-lab-website-v2.zip` and open the `liu-lab-website-v2` folder.
2. Double-click `index.html` to preview the homepage. Visit Research, People, Publications, Lab & tools, and Join us.
3. Open `assets/js/site-config.js` in a plain-text editor. Put your real institutional email inside the empty quotes after `email:`. Save. Do not use Word to edit website files. On a Mac, TextEdit must be in plain-text mode and must not add `.txt` to the filename. Alternatively, edit this file on GitHub after upload using the pencil icon.
4. Optional: add your Google Scholar profile URL after `scholarUrl:`. Add your CV as `assets/Your-CV.pdf`, then set `cvUrl: "assets/Your-CV.pdf"`. These links remain hidden while empty.
5. Review recruitment wording in `join.html` and the proposed instrumentation in `lab.html`. All instruments are described as planned; no purchased models, budget, installed equipment, funded position counts, or dates are asserted.
6. Review the selected papers and biography. The site uses six verified journal records and one explicitly labeled preprint. Confirm that these are your preferred selections. The portrait is from your official Northeastern announcement. Replace it with your preferred authorized portrait if needed.

The email setting is deliberately blank because no institutional email was supplied. Until you set it, the Contact panel honestly says contact details are forthcoming and links to Northeastern Physics. It does not contain a dummy email or a fake application form.

## 2. Create the GitHub repository

1. Sign in to GitHub in your browser.
2. Click the plus (+) menu at the top right, then **New repository**.
3. Under Owner, select your personal account or lab organization.
4. For a main account website, name the repository `ACCOUNT.github.io`, using your actual account name in lowercase. For example, if you use your public `RichardLiuCoding` account, the repository name is `richardliucoding.github.io` and the site address will be `https://richardliucoding.github.io/`.
5. Choose **Public**. GitHub Pages is available for public repositories on GitHub Free.
6. Leave the initial README, .gitignore, and license options off because the package already contains the relevant source files. Click **Create repository**.

If that repository already exists and hosts another website, use a new repository named `liu-lab` for this package instead of overwriting the existing site. Its address will be `https://ACCOUNT.github.io/liu-lab/`. The normal site pages use relative links and work at either address. The optional 404 page has a project-path note below.

## 3. Upload the site

1. In the empty repository, click **uploading an existing file**. In a nonempty repository, use **Add file → Upload files**.
2. Open the unzipped `liu-lab-website-v2` folder on your computer.
3. Select its contents, including the `assets` folder, and drag those contents into the GitHub upload area. Do NOT drag the outer `liu-lab-website-v2` folder itself, and do NOT upload the ZIP file.
4. Check that `index.html`, `research.html`, `people.html`, and `assets/` will appear directly at the repository root.
5. Add a commit message such as `Add lab website`, then click **Commit changes**. Use the `main` branch.
6. The package includes `.nojekyll`, which may be hidden in Finder. If it is absent on GitHub, choose **Add file → Create new file**, enter `.nojekyll` as the filename, and commit the empty file. If GitHub asks for content, a single line `Static HTML website` is harmless; the existence of this file is what matters. On a Mac, Command+Shift+. toggles hidden files in Finder.

Your repository should look like this:

```
index.html
research.html
people.html
publications.html
lab.html
join.html
credits.html
404.html
assets/
  css/style.css
  js/site-config.js
  js/main.js
  images/...
selected-publications.bib
.nojekyll
README.md
ASSET_CREDITS.md
PUBLICATION_SOURCES.md
IMAGE_PROMPTS.md
```

## 4. Turn on GitHub Pages

1. In the repository, click **Settings**.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch **main** and folder **/(root)**.
5. Click **Save**.
6. Wait for deployment. GitHub says publishing can take up to 10 minutes.
7. Return to **Settings → Pages** and click **Visit site**. If necessary, inspect the **Actions** tab for the Pages deployment status.

You do not need npm, Python, Jekyll, a paid theme, a custom domain, or a custom GitHub Actions workflow for this package.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site and https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 5. Check the published site

- Open the homepage on your computer and phone.
- Open every navigation item and verify the active page and mobile Menu button.
- Check that the portrait and research figures load.
- Click a research figure to open it at full size.
- Check the publication DOI, preprint, and code links.
- After setting your email, use **Join us → Email Richard Liu**. It should open your mail application with your correct address. No message is sent automatically.
- Check the scientific program, recruitment availability, institution, and instrument status before sharing the link widely.

## 6. Update the site later

Small changes can be made entirely on GitHub:

1. Open a file in the repository.
2. Click the pencil icon to edit it.
3. Edit the text, leaving the surrounding HTML tags intact.
4. Click **Commit changes** and save to `main`.
5. Wait for Pages to publish, then reload your site.

| What to change | File |
|---|---|
| Email, optional Scholar/CV links | `assets/js/site-config.js` |
| Homepage message and featured work | `index.html` |
| Research descriptions | `research.html` |
| Biography and future team members | `people.html` |
| Papers and summaries | `publications.html` |
| Downloadable citations | `selected-publications.bib` |
| Equipment and development status | `lab.html` |
| Recruitment and application instructions | `join.html` |
| Colors, fonts, spacing, responsive layout | `assets/css/style.css` |
| Image attribution | `credits.html` and `ASSET_CREDITS.md` |

All page content is present in HTML, so the site remains readable without JavaScript. JavaScript handles the collapsible mobile menu, optional profile links, the current year, and the email setting. Keep pages and filenames lowercase. Keep all filenames and folders in their current relative positions.

### Replace your portrait

Replace `assets/images/richard-liu.jpg` with a new JPEG using the same filename. A square image of at least 800 × 800 pixels works well. Update the university-source caption and credit if you replace it with a different image. GitHub uploads with the same filename can replace existing files; review the commit diff.

### Add a paper

In `publications.html`, duplicate one complete `<article class="publication"> ... </article>` block within the appropriate section. Update its title, author list, year, journal information, DOI, and summary. Put preprints in the preprint section. Add the corresponding citation to `selected-publications.bib` if you want it included in the download. The HTML and BibTeX file are separate and do not automatically synchronize.

### Update an instrument

In `lab.html`, change the relevant status and description once confirmed. Suggested status labels: Planned capability, Ordered, Installation, Operational. If some equipment becomes operational, revise the introductory note as well so it no longer describes everything as planned.

### Change the lab name or navigation

The header and footer are intentionally ordinary HTML in each page to keep this package upload-only. Update the name, title, and navigation in each HTML page when renaming the lab. The `L` favicon is in `assets/images/favicon.svg`.

### Use a project repository instead of an account website

The regular pages and assets already work at a path such as `/liu-lab/`. In `404.html`, set the single `homePath` value to `/liu-lab/` so the recovery link also points to that project's homepage. For a main account website leave it as `/`. A custom domain also normally uses `/`.

### Optional custom domain

You can start with github.io and change the domain later. Follow GitHub’s custom-domain instructions and your domain registrar's DNS settings. Do not add a `CNAME` file until you own and configure that domain: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Troubleshooting

**The site shows a 404:** confirm that Pages publishes from `main` and `/(root)`, and that `index.html` is directly at the repository root. Wait for the deployment to complete. Check Actions for an error. If using a project repository, include its name in the URL.

**The README appears instead of the website:** `index.html` is missing or was uploaded inside an extra outer folder. Move the package's contents to the repository root.

**Styles or images are missing:** upload the complete `assets` folder without renaming it. Check capitalization and paths. Do not upload only `index.html`.

**The contact button does not show an email:** edit `assets/js/site-config.js`; use straight quotes, a valid address, and preserve commas. The expected syntax is `email: "YOUR_ACTUAL_EMAIL",`. Do not literally use that placeholder. Reload after deployment.

**Changes are not visible:** wait for the Pages job to finish and hard-refresh the page (Command+Shift+R on a Mac). Check that you committed to `main`.

**The email button opens no app:** some computers have no default mail client configured. The contact panel also displays the address as selectable text so applicants can copy it.

**Cannot select Pages settings:** check that you own the repository or have permission to manage its settings.

## Source and maintenance notes

Prepared September 30, 2026. No deployment has been made as part of generating this package. All images are included locally; no third-party scripts, web fonts, trackers, accounts, databases, or API keys are required. The menu and contact configuration use a small local JavaScript file.

The research program and instrumentation prose are drafts based on the requested scientific direction. Specific acquisition choices, purchase orders, installation dates, headcounts, salary, funding guarantees, and admissions deadlines have deliberately not been invented. The seven selected citations were checked against source records. The Nature Physics paper is cited by its 2020 journal issue, despite its November 2019 online publication.

See `ASSET_CREDITS.md` for image licenses. The original site layout and code can be edited for your group; third-party scientific figures and portraits retain their own rights and attribution. No blanket license is applied to all assets.

## Visual revision

This version replaces the initial figure choices with three figures supplied by Richard Liu and two new GPT-image conceptual schematics. Research figures are shown at full width, retain their original data and labels, and have full-size links. The new AI illustrations are identified as conceptual. Exact generation prompts are saved in `IMAGE_PROMPTS.md`. Source reference files were not modified.

To update an existing GitHub site, upload the contents of this revised package to the same repository and commit replacements. Existing Pages settings can stay unchanged. The old figure files can be removed afterward if present; the revised pages no longer reference them. If you already added your email or other personal settings to the previous version, copy those settings into this version's `assets/js/site-config.js` before uploading.
