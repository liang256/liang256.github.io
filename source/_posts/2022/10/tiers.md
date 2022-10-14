---
title: Tiers
date: 2022-10-15 03:39:57
categories: Architecture
tags:
  - architecture
  - tier
---
## What is a tier?

both logical and physical separation of components

## Single-tier App

All components are located in the same machine. e.g. Maya, Photoshop…

### Pros

- no network latency
- privacy data safe since no need to upload users’ data

### Cons

- efficiency bounds on the machine where the app lives on
- app publisher has no control over the app (users decide whether update the app or not)
- be vulnerable to being tweaked and reversed engineered

## Two-tier App

client-server architecture

## Three-tier App

client-backend-database. e.g. blog

## N-tier App

### What are these components?

- cache
- load balancer
- database
- queue (for asynchronous behavior)
- search engine
- customized business logic services

### It is an implementation of the single-responsibility principle

decoupled. it’s easier to maintain. so, for example, we should not store business logic in the database. Also, it is easier to be scaled. 

## Layer & Tier

layers represent the conceptual/logical organization of the code (**code level**)

tiers represent the **physical separation** of components.