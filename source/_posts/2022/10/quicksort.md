---
title: Quick Sort
date: 2022-10-15 01:42:44
categories: Algorithm
tags:
    - algorithm
    - tree
    - sort
---
Quick sorting is a pre-order traversal operation. Every time we dive into a node, we divide it into two portions: small and large. Then recursively apply this logic to these two portions.

## Implementation
Let's compare the two implementations below. The first one is straightforward, and the other one uses struct.
#1
```go
func quicksort(array []int) []int {
	var dfs func(start, end int)
	dfs = func(start, end int) {
		if start >= end || start < 0 || end >= len(array) {
			return
		}
		pivot := (start + end) / 2
		swap(array, pivot, end) // swap value
		pivot = end
		l, r := start, end-1
		for {
			for ; l < r && array[l] <= array[pivot]; l++ {
			}
			for ; l < r && array[r] >= array[pivot]; r-- {
			}
			if l == r {
				break
			}
			swap(array, l, r)
		}
		meet := l
		if array[meet] >= array[pivot] {
			swap(array, meet, pivot)
            pivot = meet
		}
		dfs(start, pivot-1)
		dfs(pivot+1, end)
	}
	dfs(0, len(array)-1)
	return array
}

func swap(arr []int, a, b int) {
	arr[a], arr[b] = arr[b], arr[a]
}
```
#2
```go
type Partition struct {
	Pivot int
	Left  []int
	Right []int
}

func doPartition(array []int) Partition {
	start, end, pivot := 0, len(array)-1, (len(array)-1)/2
	swap(array, pivot, end) // swap value
	pivot = end
	l, r := start, end-1
	for {
		for ; l != r && array[l] <= array[pivot]; l++ {
		}
		for ; l != r && array[r] >= array[pivot]; r-- {
		}
		if l == r {
			break
		}
		swap(array, l, r)
	}
	meet := l
	if array[meet] >= array[pivot] {
		swap(array, pivot, meet)
		pivot = meet
	}
	return Partition{pivot, array[:pivot], array[pivot+1:]}
}

func swap(array []int, a, b int) {
	array[a], array[b] = array[b], array[a]
}

func quicksort(array []int) []int {
	if len(array) <= 1 {
		return array
	}
	p := doPartition(array)
	quicksort(p.Left)
	quicksort(p.Right)
	return array
}
```