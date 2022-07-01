---
title: "Maya API For C++: How To Debug On Mac"
date: 2022-06-23 03:19:13
categories: [Tech, Maya]
tags:
  - c++
  - maya
---
There is no **output window** in Mac's Maya so I can't print out text by `std::out`. The only way I know is to use `Global::displayInfo`. However, `Global::displayInfo` only accepts `MString`. I haven't digged into what `MString` is yet but just provide some examples here. Hope you can get the basic idea:)
```cpp
Global::displayInfo("hello"); // Works

string str = "hello";
Global::displayInfo(str); // This will fail

char str[10];
sprintf(str, "hello"); // Writes content to `str`
Global::displayInfo(str); // Works
```
In this way, we can also print out **numeric types**!
```cpp
flaot value = 100.0f;
char str[10];

sprintf(str, "value:%f", value);
Global::displayInfo(str);
```