---
title: Go语言学习
copyright: true
visitor: true
comment_count: true
date: 2020-03-22 12:15:11
id: go-study
top: 2
tags: golang
categories: Coding
description: 重新系统学习Golang
---

注：整理自：[李文周的博客](https://www.liwenzhou.com/)

---

## 第一个Go程序

### Hello World

现在我们来创建第一个Go项目——`hello`。在我们桌面创建一个`hello`目录。

在该目录中创建一个`main.go`文件：

```go
package main  // 声明 main 包，表明当前是一个可执行程序

import "fmt"  // 导入内置 fmt 包

func main(){  // main函数，是程序执行的入口
	fmt.Println("Hello World!")  // 在终端打印 Hello World!
}
```

### go build

`go build`表示将源代码编译成可执行文件。

在hello目录下执行：

```bash
go build
```

或者在其他目录执行以下命令：

```bash
go build hello
```

go编译器会去 `GOPATH`的src目录下查找你要编译的`hello`项目

编译得到的可执行文件会保存在执行编译命令的当前目录下，如果是windows平台会在当前目录下找到`hello.exe`可执行文件。

可在终端直接执行该`hello.exe`文件：

```bash
c:\desktop\hello>hello.exe
Hello World!
```

我们还可以使用`-o`参数来指定编译后得到的可执行文件的名字。

```bash
go build -o heiheihei.exe
```

### go install

`go install`表示安装的意思，它先编译源代码得到可执行文件，然后将可执行文件移动到`GOPATH`的bin目录下。因为我们的环境变量中配置了`GOPATH`下的bin目录，所以我们就可以在任意地方直接执行可执行文件了。

### 跨平台编译

默认我们`go build`的可执行文件都是当前操作系统可执行的文件，如果我想在windows下编译一个linux下可执行文件，那需要怎么做呢？

只需要指定目标操作系统的平台和处理器架构即可：

```bash
SET CGO_ENABLED=0  // 禁用CGO
SET GOOS=linux  // 目标平台是linux
SET GOARCH=amd64  // 目标处理器架构是amd64
```

*使用了cgo的代码是不支持跨平台编译的*

然后再执行`go build`命令，得到的就是能够在Linux平台运行的可执行文件了。

Mac 下编译 Linux 和 Windows平台 64位 可执行程序：

```bash
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build
```

Linux 下编译 Mac 和 Windows 平台64位可执行程序：

```bash
CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build
```

Windows下编译Mac平台64位可执行程序：

```bash
SET CGO_ENABLED=0
SET GOOS=darwin
SET GOARCH=amd64
go build
```

## 字符串

Go语言中

* 字符串是 "双引号" 包裹的；
* 字符是 '单引号' 包裹的。

```go
s := "hello，你好~"
c1 := 'h'
c2 := '你'
// 字节：1字节=8Bit（8个二进制位）
// 1个字符'A'= 1个字节
// 1个utf-8编码的汉字'你'=一般占3个字节（某些生僻字占4个）
```

### byte类型和rune类型

Go 语言的字符有以下两种：

1. `uint8`类型，或者叫 byte 型，代表了`ASCII码`的一个字符。
2. `rune`类型，代表一个 `UTF-8字符`。

当需要处理中文、日文或者其他复合字符时，则需要用到`rune`类型。**`rune`类型实际是一个`int32`**。

### 字符串的常用操作

```go
s1 := "hello"
s2 := "world"
result := fmt.Sprintf("%s%s", s1, s2)
fmt.Printf("%s%s", s1, s2)
fmt.Println(result)
```

fmt.Sprintf()会将拼接后的字符串返回，不打印；

fmt.Printf()会直接打印出拼接后的字符串

| 方法                                | 介绍           |
| :---------------------------------- | :------------- |
| len(str)                            | 求长度         |
| + 或 fmt.Sprintf                    | 拼接字符串     |
| strings.Split                       | 分割           |
| strings.contains                    | 判断是否包含   |
| strings.HasPrefix,strings.HasSuffix | 前缀/后缀判断  |
| strings.Index(),strings.LastIndex() | 子串出现的位置 |
| strings.Join(a[]string, sep string) | join操作       |

### 修改字符串

Go语言中的字符串不能直接修改。

要修改字符串，需要先将其转换成`[]rune`或`[]byte`，完成后再转换为`string`。无论哪种转换，都会重新分配内存，并复制字节数组。

```go
func changeString() {
	s1 := "big"
	// 强制类型转换
	byteS1 := []byte(s1)
	byteS1[0] = 'p'
	fmt.Println(string(byteS1))

	s2 := "白萝卜"
	runeS2 := []rune(s2) // 把字符串强制转换成一个rune切片
	runeS2[0] = '红'
	fmt.Println(string(runeS2))
}
```

## 数组

三种初始化方法：

```go
// 1. 列表初始化
a1 := [3]int{1, 2}
fmt.Println(a1) //[1 2 0]
// 2. 根据初始值自动推断数组的长度是多少
a2 := [...]int{1, 3, 5, 7, 9}
// 3. 根据索引初始化
a3 := [...]int{1: 1, 3: 5}
fmt.Println(a3) // [0 1 0 5]
```

## 切片

### 切片的本质

切片的本质就是对底层数组的封装，它包含了三个信息：底层数组的指针、切片的长度（len）和切片的容量（cap）。

举个例子，现在有一个数组`a := [8]int{0, 1, 2, 3, 4, 5, 6, 7}`，切片`s1 := a[:5]`，相应示意图如下。![slice_01](https://www.liwenzhou.com/images/Go/slice/slice_01.png)切片`s2 := a[3:6]`，相应示意图如下：![slice_02](https://www.liwenzhou.com/images/Go/slice/slice_02.png)

总结：

* 切片的本质就是一个框，框住了一块连续的内存。
* 切片是引用类型，指向了一个底层的数组；
* 切片的长度就是它元素的个数；
* 切片的容量是底层数组从**切片的第一个元素**到最后一个元素的数量。

### 判断切片是否为空

要检查切片是否为空，请始终使用`len(s) == 0`来判断，而不应该使用`s == nil`来判断。





