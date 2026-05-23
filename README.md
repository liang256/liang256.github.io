# /tmp/bucket

Personal archive of experiments, poems, art, notes, and thoughts.

Live site: https://liang256.github.io/

## Get Started

```sh
git clone https://github.com/liang256/liang256.github.io.git
npm install
```

## Commands

Build the static site:

```sh
npm run build
```

Preview locally:

```sh
npm run server
```

Then open http://localhost:4000/.

Clean generated files:

```sh
npm run clean
```

Deploy:

```sh
npm run deploy
```

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
