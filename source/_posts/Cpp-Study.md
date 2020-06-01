---
title: Cpp-Study
copyright: true
visitor: true
comment_count: true
date: 2020-05-31 14:32:27
id: cpp-study
top:
tags: {cpp,leetcode}
categories: Coding
description: 重新系统学习C++，随时记录
---

### 1. 命名空间namespace

命名空间是ANSIC++引入的可以由用户命名的作用域，用来处理程序中常见的同名冲突。

在 文件中可以定义全局变量(global variable)，它的作用域是整个程序。如果在文件A中定义了一个变量a int a=3；在文件B中可以再定义一个变量a int a=5;

在分别对文件A和文件B进行编译时不会有问题。但是，如果一个程序包括文件A和文件B，那么在进行连接时，会报告出错，因为在同一个程序中有两个同名的变量，认为是对变量的重复定义。

可以通过extern声明同一程序中的两个文件中的同名变量是同一个变量。如果在文件B中有：`extem int a；`，表示文件B中的变量a是在其他文件中已定义的变量。由于有此声明，在程序编译和连接后，文件A的变量a的作用域扩展到了文件B。

**命名空间**：实际上就是一个由程序设计者命名的内存区域，程序设计者可以根据需要指定一些有名字的空间域，把一些全局实体分别放在各个命名空间中，从而与其他全局实体分隔开来。

```c++
namespace ns1 //指定命名中间nsl
{ int a；
double b; }
```

命名空间成员包括变量a和b，注意a和b仍然是全局变量，仅仅是把它们隐藏在指定的命名空间中而已。如果在程序中要使用变量a和b，必须加上命名空间名和作用域分辨符“::”，如nsl::a，nsl::b。这种用法称为命名空间限定(qualified)，这些名字(如nsl::a)称为被限定名 (qualified name)。

C++中命名空间的作用类似于操作系统中的目录和文件的关系，由于文件很多，不便管理，而且容易重名，于是人们设立若干子目录，把文件分别放到不同的子目录中，不同子目录中的文件可以同名。调用文件时应指出文件路径。

### 2. VS中快捷键

`ctrl + k` + `ctrl + c`，注释

`ctrl + k` + `ctrl + u`，取消注释

`ctrl + k` + `ctrl + f`，格式化代码

### 3. 容器-向量（Vector）

```c++
#include<vector>
#include<algorithm>

vector<int> vec0(4,0); // 向量初始化,长度为4，元素初始值均为0
vector<int> vec = {2, 4, 9, 6}; // 向量初始化法
vec.size() // 返回容器的元素个数
vec.begin() // 返回指向 首元素 的迭代器（即容器指针）
vec.end() // 返回指向尾 *元素下一位置* 的迭代器
int maxV = *max_element(vec.begin(), vec.end()); // 求向量中的最大值
vec.push_back(5); // 在表尾添加一个元素
sort(vec.begin(), vec.end()); // 对vector进行排序 #include <algorithm>
cout << (vec0 == vec) << endl;
// 判断两个vector是否相等，可以直接使用“==”或者“!=”进行比较
vector<int>::iterator ret;
ret = std::find(vec.begin(), vec.end(), 15);
// 判断某特定值是否存在于vector中
if(ret == vec.end())
     cout << "not found" << endl;
else
     cout << "found it" << endl;

```

### 4. 运算符的运算效率

在某一次测试中，同一段代码执行 10^8 次，计算所用时间：

赋值运算（净运行时间0.8ms）；super fast

<font color=green>加法运算（净运行时间41.45ms）；fast</font>

<font color=green>减法运算（净运行时间42.95ms）；fast</font>

乘法运算（净运行时间58.25ms）；normal

<font color=red>除法运算（净运行时间1210.2ms）；slow</font>

<font color=red>取模运算（净运行时间1178.15ms）；slow</font>

