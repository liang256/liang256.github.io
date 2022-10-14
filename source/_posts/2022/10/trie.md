---
title: "Prefix Tree: Trie"
date: 2022-10-15 02:54:48
categories: Algorithm
tags:
  - algorithm
  - datastructure
  - trie
---
## Purpose of this data structure
can search words by prefix in time complexity, O(n).

### Recursion Implement
```go
package main

import (
	"fmt"
)

type Node struct {
	Keys  map[string]*Node
	IsEnd bool
}

func newNode() *Node {
	return &Node{make(map[string]*Node), false}
}

type Trie struct {
	Root *Node
}

func newTrie() *Trie {
	return &Trie{newNode()}
}

func (t *Trie) Add(str string) {
	Add(str, t.Root)
}

func Add(str string, node *Node) {
	if len(str) == 0 {
		node.IsEnd = true
		return
	} else if _, ok := node.Keys[str[:1]]; ok {
		Add(str[1:], node.Keys[str[:1]])
	} else {
		// create new node for this string
		node.Keys[str[:1]] = newNode()
		Add(str[1:], node.Keys[str[:1]])
	}
}

func (t *Trie) HasWord(str string) bool {
	return HasWord(str, t.Root)
}

func HasWord(str string, node *Node) bool {
	if node.IsEnd && len(str) == 0 {
		return true
	} else if len(str) == 0 {
		return false
	}
	if _, ok := node.Keys[str[:1]]; ok {
		return HasWord(str[1:], node.Keys[str[:1]])
	} else {
		return false
	}
}

func (t *Trie) Words() []string {
	words := []string{}
	Print("", t.Root, &words)
	return words
}

func Print(curr string, node *Node, words *[]string) {
	if node.IsEnd {
		*words = append(*words, curr)
	}
	for key := range node.Keys {
		Print(curr+key, node.Keys[key], words)
	}
}

func main() {
	t := newTrie()
	t.Add("apple")
	t.Add("cat")
	t.Add("category")
	t.Add("")
	fmt.Println(t.Words())
	fmt.Println(t.HasWord("apple"))
	fmt.Println(t.HasWord("none"))
	fmt.Println(t.HasWord("category"))
	fmt.Println(t.HasWord("cat"))
	fmt.Println(t.HasWord(""))
}
```
output
```
[ apple cat category]
true
false
true
true
true
```
### Forloop Implement
```go
type TrieNode struct {
	Children [26]*TrieNode
	IsEnd    bool
}

type Trie struct {
	Root *TrieNode
}


func Constructor() Trie {
    return Trie{&TrieNode{}}
}


func (this *Trie) Insert(word string) {
	curr := this.Root
	for i := range word {
		// check if has word[i] as a child
		k := word[i] - 'a'
		if curr.Children[k] == nil {
			curr.Children[k] = &TrieNode{}
		}
		curr = curr.Children[k]
	}
	curr.IsEnd = true
}

func (this *Trie) Search(word string) bool {
	curr := this.Root
	for i := range word {
		// check if has word[i] as a child
		k := word[i] - 'a'
		if curr.Children[k] == nil {
			return false
		}
		curr = curr.Children[k]
	}
	return curr.IsEnd
}

func (this *Trie) StartsWith(word string) bool {
	curr := this.Root
	for i := range word {
		// check if has word[i] as a child
		k := word[i] - 'a'
		if curr.Children[k] == nil {
			return false
		}
		curr = curr.Children[k]
	}
	return true
}
```