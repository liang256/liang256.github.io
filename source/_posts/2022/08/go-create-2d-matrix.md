---
title: "Go: How To Create a 2D Matrix Properly?"
date: 2022-08-17 14:27:04
categories: [Tech, Go]
tags:
  - go
  - memory
---

## Slice or Array?
In Go, array can only be created by constant `int`
```go
arr := [4]int // works

size := 4
arr := [size]int // Not work!
```
Thus use `slice`, if we want to implement a function that create a N size matrix

## Implement

### straight forward
- bad memory using, not contiguous matrix

```go
func newMatrix(s int) [][]int {
    
    m := make([][]int, s)
    
    // Wrong!
    //
    // for _, row := range m {
    //     row = make([]int, s)
    // }
    //
    
    for i, _ := range m {
        m[i] = make([]int, s)
    }
    
    return m
}
```
### method 2
- ensure to get a contiguous matrix

```go
func newMatrix(s int) [][]int {
	// allocate the whole space of the matrix
	spaces := make([]int, s*s)

	// create an empty matrix: [[] [] []...]
	m := make([][]int, s)

	// assign spaces to the matrix
	i, j := 0, 0
	for i < s {
		m[i] = spaces[j : j+s]
		i++
		j += s
	}

	return m
}
```

### Generic
more flexiable!
```go
func newMatrix[T any](s int) [][]T {
	// allocate the whole space of the matrix
	spaces := make([]T, s*s)

	// create an empty matrix: [[] [] []...]
	m := make([][]T, s)

	// assign spaces to the matrix
	i, j := 0, 0
	for i < s {
		m[i] = spaces[j : j+s]
		i++
		j += s
	}

	return m
}
```
Usage
```go
m := newMatrix[unit](3) // [[0 0 0] [0 0 0] [0 0 0]]
```


## Resources
- [at is a concise way to create a 2D slice in Go?](https://stackoverflow.com/questions/39804861/what-is-a-concise-way-to-create-a-2d-slice-in-go)