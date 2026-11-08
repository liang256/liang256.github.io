# /tmp/bucket

Personal archive of experiments, poems, art, notes, and thoughts.

Live site: https://liang256.github.io/

Built with Hexo 6 + NexT theme. Deployed **from this machine** with `hexo deploy`, which pushes the generated site to the `gh-pages` branch. There is no CI. `main` holds the source, and `gh-pages` holds the built output.

## Setting Up a New Machine

### 1. Install Node with fnm

Use [fnm](https://github.com/Schniz/fnm) so this machine can keep several Node versions. Don't use `brew install node`: it only installs one version, and `brew upgrade` can move it to a new major version.

```sh
brew install fnm
```

Add to `~/.zshrc`:

```sh
eval "$(fnm env --use-on-cd --version-file-strategy=recursive --shell zsh)"
```

Then:

```sh
source ~/.zshrc
fnm install 24
fnm default 24
node -v   # v24.x
```

The repo has a `.nvmrc` (`24`), so fnm switches versions automatically when you `cd` into it. Hexo 6 and NexT 8 are old; don't jump to a newer Node major without checking that the build still works.

### 2. Log in to GitHub over SSH

`_config.yml` deploys to `git@github.com:liang256/liang256.github.io.git` over SSH. The simplest setup is the GitHub CLI:

```sh
brew install gh
gh auth login   # GitHub.com → SSH → generate or upload a key
```

Check it:

```sh
ssh -T git@github.com
# Hi liang256! You've successfully authenticated...
```

If the machine also has another GitHub account (e.g. a work one), make sure `github.com` uses the `liang256` key. Add this to `~/.ssh/config`, or the deploy may be rejected:

```
Host github.com
  IdentityFile ~/.ssh/<key-for-liang256>
  IdentitiesOnly yes
```

### 3. Clone and install

```sh
git clone git@github.com:liang256/liang256.github.io.git
cd liang256.github.io
npm ci
```

Use `npm ci`, not `npm install`. It installs exactly what `package-lock.json` pins, so the output matches the live site. npm is the only package manager here; don't add a `yarn.lock`.

You don't need a global `hexo-cli`. Use `npx hexo ...` to run the project's own Hexo.

### 4. Check that it works

```sh
npm run clean && npm run build
npm run server   # http://localhost:4000/
```

A warning like `Accessing non-existent property 'lineno' of module exports inside circular dependency` is a known Hexo/NexT dependency warning and can be ignored. The build is fine if it ends with `N files generated`.

## Writing

Create a post from a scaffold in `scaffolds/`:

```sh
npx hexo weekly                        # next weekly post, auto-numbered (see below)
npx hexo new "my-title"                # scaffolds/post.md
npx hexo new leetcode "two-sum"        # scaffolds/leetcode.md
npx hexo new draft "idea"              # source/_drafts/
```

New posts go to `source/_posts/YYYY/MM/<title>.md`, with an asset folder of the same name next to the file (`post_asset_folder: true`).

### Weekly posts

`npx hexo weekly` finds the highest existing `weekly-NNNN.md` under `source/_posts/` and creates the next one from `scaffolds/weekly.md`:

```sh
npx hexo weekly                    # → 2026/11/weekly-0015.md, title "Weekly Notes 0015"
npx hexo weekly "Rain and Tools"   # → title "Weekly Notes 0015: Rain and Tools"
```

The command is defined in `scripts/weekly.js` (Hexo loads `scripts/` automatically). Don't use `npx hexo new weekly` without a title: Hexo reads a lone `weekly` as the title and creates a normal post called "weekly".

## Publishing

```sh
git add -A && git commit -m "post: ..." && git push   # save the source to main
npm run clean && npm run deploy                       # build and push to gh-pages
```

Pushing `main` doesn't update the site, and deploying doesn't save the source. Do both. `make deploy` runs the second line.

## Commands

| Command | What it does |
| --- | --- |
| `npm run build` | Generate the site into `public/` |
| `npm run server` | Preview at http://localhost:4000/ |
| `npm run clean` | Delete `public/` and `db.json` |
| `npm run deploy` | Build output → `gh-pages` |

## Content Notes

- This site is currently a creative/personal archive, not a professional portfolio.
- Use clear post titles and descriptions in front matter.
- Keep fragmented logs discoverable through the archive but out of search with:

```yml
robots: "noindex, follow"
sitemap: false
```

- Portfolio and service pages are archival and use the same `noindex` + `sitemap: false` pattern.
- More agent-facing maintenance notes live in `AGENTS.md`.

## Resources

- [Hexo docs](https://hexo.io/docs/)
- [NexT theme docs](https://theme-next.js.org/)
- [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git)
- [fnm](https://github.com/Schniz/fnm)
