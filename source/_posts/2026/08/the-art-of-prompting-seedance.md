---
title: "The Art of Prompting Seedance"
date: 2026-08-12 18:52:04
categories: Animation
description: "Notes from testing Seedance on how text, playblasts, and keyframes trade control for animation quality—and why leaving room for the model often works best."
tags:
  - animation
  - thoughts
  - tools
---

{% asset_img cover.png "The Art of Prompting Seedance" %}

These observations are about prompting Seedance for animation generation.

1. **Rich text performance description + asset reference** works best.
2. **Video playblast + brief text description + asset reference** works, but may sacrifice the quality and naturalness of the animation because the model is trying too hard to match the provided keyframes.
3. **Keyframes + brief text description + asset reference** is essentially the same idea as (2), except that keyframes are used to force the model to generate the in-between animation. It works, but the model may either sacrifice animation quality to match the keyframes, or still fail to follow the keyframes exactly.

Both (2) and (3) approaches are fundamentally attempts to gain stronger control through keyframes. But based on our tests, giving the model the target performance as text and letting it figure out how to get there usually produces better animation.

Video generation prompting is fundamentally an art of balancing information density.

We need to provide enough information for the model to understand the goal, while deliberately leaving enough room for it to perform well on its own.

There is also a production benefit to this: the more we can leave to the model, the less input we need to prepare. That reduction in preparation cost is where generative video can actually create production savings.
