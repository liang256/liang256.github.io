---
name: proofread
description: Proofread a post in this repo, keeping the author's tone and typing style. Only fixes typos and sentences that could be misread. Use when the user runs /proofread or asks to proofread or lint a post.
argument-hint: "[file ...]  (default: new or changed posts in source/_posts)"
---

# Proofread

Proofread blog posts without rewriting them. The author's voice stays the same; only real errors and confusing sentences change.

## Target files

- If arguments are given, proofread those files.
- If not, proofread the new or modified `.md` files under `source/_posts/`, found with `git status --porcelain -- source/_posts`. If there are none, ask which file to check.
- Never touch files under `public/`.

## What to fix

1. **Typos**: misspellings, wrong word forms, missing words that break a sentence.
2. **Grammar that hurts reading**: wrong verb agreement ("it create" → "it creates"), wrong tense that confuses order of events.
3. **Sentences that can be misread**: unclear "it/that" references, fragments that don't connect to what's around them, wording that suggests the wrong actor or the wrong time. Change only enough words to make the meaning clear.

## What to keep

- **Casing**: if the author writes in lowercase, keep it lowercase. Don't capitalize sentence starts, "i", or names they wrote in lowercase.
- **Casual spellings and abbreviations**: `tho`, `smth`, `ppl`, `yah`, `u`, `reqs`, `py`, `bc`, and the like are style, not typos.
- **Mixed languages**: keep Chinese/English mixing as written. Fix typos in Chinese too (wrong 字), but don't translate or formalize it.
- **Sentence rhythm**: short lines, fragments that read fine, line breaks, `...`, and list structure stay as they are.
- **Front matter and markdown structure**: don't edit front matter, headings, or empty sections (like `## #2` with nothing under it).
- **Word choice and opinions**: don't swap words for "better" ones, smooth the flow, or add polish.

## Rules for meaning

- Don't add facts. If clearing up a sentence means guessing what the author meant (e.g. "the time matched" — matched what?), you can make the edit, but list it under **Please check** in the report.
- If a sentence has two plausible readings and picking one would change the meaning, leave it as is and ask about it under **Left as is**.

## Process

1. Read each target file in full.
2. Make the edits in place, keeping each one as small as possible.
3. Show `git diff` for the file (use `git diff --no-index /dev/null <file>` if it's untracked) or re-read the changed lines to confirm they're right.

## Report

For each file, reply with:

- **Fixed**: each change as `"old" → "new"`, with a few words on why if it isn't an obvious typo.
- **Please check**: edits where you guessed the author's meaning.
- **Left as is**: ambiguous spots you didn't change, with the possible readings.

Skip a section if it's empty. Don't paste the whole post back.
