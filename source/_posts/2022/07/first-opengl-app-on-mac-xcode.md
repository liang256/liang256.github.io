---
title: "First OpenGL App On Mac | Xcode"
date: 2022-07-01 13:53:45
categories:
tags:
  - opengl
  - c++
  - xcode
---
### Tutorial
[Follow this tutorial](https://www.jianshu.com/p/eedc41051bd9)

### New C++ Project in Xcode
Select command line tool 
![](new.png)

### Edit Header Search Paths & Library Search Paths

I could not find where to edit `Header Search Paths` and `Library Search Paths` until I found this [Toutube tutorial](https://www.youtube.com/watch?v=hrPm7tWC-BI).

![](path.png)

### Set additional preferences like below
![](signing_capabilities.png)

build shorcut in xCode: `command + b`

### Resource
- [Simple OpenGL App on Mac](https://www.jianshu.com/p/eedc41051bd9)
- [How to fix C++ header file not found in Xcode](https://www.youtube.com/watch?v=hrPm7tWC-BI)
- [Xcode gives error when I add libraries: dyld: Library not loaded](https://stackoverflow.com/questions/67049987/xcode-gives-error-when-i-add-libraries-dyld-library-not-loaded)
- [环境配置: macOS配置GLAD+GLFW的OpenGL环境(CMake / CLion)](https://www.cnblogs.com/fijiisland/p/14057950.html)