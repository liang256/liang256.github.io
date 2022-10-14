---
title: Dynamic Programming
date: 2022-10-15 03:31:29
categories: Algorithm
tags:
  - algorithm
  - dynamic-programming
---
## Strategies
### Memoization (Top-down)
1. make it works first
    1. draw the tree
    2. implement & test if the answer is correct (when small cases)
2. then make it efficient
    1. add a memo with base case return values
    2. store new values in the memo

### Tabulation (Bottom-up)
1. create a table based on the input
2. fill it with default & base-case values
3. iterate through to generate the next value based on the current value