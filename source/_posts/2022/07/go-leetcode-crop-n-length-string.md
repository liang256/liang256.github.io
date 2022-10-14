---
title: "Go Leetcode: Crop N Length String"
date: 2022-07-20 16:31:12
categories: Leetcode
tags:
  - leetcode
  - go
  - two-pointers
---
## Problem
Given a string `s`, return a cropped which max length is `n`.
Also, spaces at prefix and postfix need to be removed.

Example 1:
```
Input: "Hello World", 8
Output: "Hello"
```

Example 2:
```
Input: "   Hello World   ", 100
Output: "Hello World"
```

Example 3:
```
Input: "Hello World", 3
Output: ""
```
## Thought
Find the start point `l` and end point `r` then return result `s[l:r]`
Left point is easy to find. If `s[l]` is space, pointer `l` move right.
On the other hand, `r` starts from `l + N`, if `s[r]` is NOT space, pointer `r` move left.

![](thought.png)

The tricky point is that if the given string's length equals to given `n`,
and the string ends with character, the last word would be cropped.

Example:
```
Input: "Learn Golang", 12
Output: "Learn"
Expected: "Learn Golang"
```

An easy solution is to append a SPACE to the given string at the beginning.

![](append-space.png)

## Code

```golang
func crop(s string, n int) string {
	s = s + " " // append an extra space

    // keep moving right until reaching the first character
	l := 0
	for l < len(s)-1 {
		if s[l] == ' ' {
			l++
		} else {
			break
		}
	}

    // start from `l+n` or the last char (extra space)
    // keep moving left until reaching the first space
	r := min(l+n, len(s)-1)
	for r > l {
		if s[r] == ' ' {
			break
		} else {
			r--
		}
	}
	return s[l:r]
}

func min(i, j int) int {
	if i < j {
		return i
	}
	return j
}
```