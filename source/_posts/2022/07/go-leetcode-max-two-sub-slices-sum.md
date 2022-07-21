---
title: "Go Leetcode: Max Two Sub Slices Sum"
categories: [Tech, Go]
tags:
  - leetcode
  - go
date: 2022-07-21 13:46:55
---
## Problem
Given a slice `a`. There are 2 sub slices. One's length is `k`, the other's is `p`.
These 2 sub slices are not overlaid. Find the max sum of the 2 sub slices.

Return `-1` if can't find one.

Example 1:
```
Input: [1,3,4,7,5,8,2,9], 3, 2
Output: 35
```

Example 2:
```
Input: [1,3,4,7,5,8], 100, 2
Output: -1
```
## Thought
Move slice `K` through `A`, at the left and right side of `K` place the slice `P`.
To improve the efficiency, store sums of `K` and `P` in hash tables.
![](thought.png)
![](hash1.png)
![](hash2.png)
<!-- ![](sum.png) -->

## Code
```golang
func maxSum(a []int, k, p int) int {
	if k+p > len(a) {
		return -1
	}
	kt := hashTable(a, k)
	pt := hashTable(a, p)
	ki := 0
	for ki < len(kt) {
		left := maxVal(pt[:max(0, ki-p+1)]...)
		right := maxVal(pt[min(ki+k, len(pt)):]...)

		if left == -1 && right == -1 {
			kt[ki] = -1
		} else {
			kt[ki] = kt[ki] + max(right, left)
		}
		ki++
	}

	return maxVal(kt...)
}

func hashTable(a []int, length int) []int {
  if length > len(a) {
		return []int{}
	}
	tlen := len(a) - length + 1
	t := make([]int, tlen)
	i := 0
	for i < tlen {
		t[i] = sum(a[i : i+length]...)
		i++
	}
	return t
}

func maxVal(nums ...int) int {
	m := -1
	for _, v := range nums {
		if m < v {
			m = v
		}
	}
	return m
}

func sum(nums ...int) int {
	res := 0
	for _, n := range nums {
		res += n
	}
	return res
}

func max(i, j int) int {
	if i > j {
		return i
	}
	return j
}

func min(i, j int) int {
	if i < j {
		return i
	}
	return j
}

```
