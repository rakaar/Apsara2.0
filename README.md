# Apsara2.0

Second version of iit-techambit frontend.

# Set up:

#### Installation

`npm install`

#### Running on localhost

`npm start`

**NOTE: Please use only npm as package manager not any other to avoid dependency clashes**

# To Contribute

- We do not commit to `master` branch directly. We open pull requests and merge them in master after review.
- Create the issue as necessary.
- If you lack the technical knowhow, feel free ask in the slack workspace.
- Create a Branch and Commit your changes.
  - Name the branch carefully. For example `feature-card-component`, `bugfix-overlay`. Do not use generic names such as `develop`, `work`, your username etc.
  - Name the commits meaningfully. For help read [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/).
- Check if the solution works by testing it locally.
- Submit a PR with an appropriate name including the term `Fixes #{issue number}` if it fixes that particular issue.
- Be attentive and respond to comments and suggestions in the opened PR.
- We will merge your PR after reviewing and testing it.

# While contributing

- Use **prettier** extension for code linting

#### Configuration - Settings.json in VS Code

```json
{
  "files.trimTrailingWhitespace": true,
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "prettier.jsxSingleQuote": true,
  "prettier.singleQuote": true
}
```

- Use Pascal case naming convention for naming files, variables meaningfully.
- Usage of ES6 Features when compared to vanilla JS is highly recommended.
